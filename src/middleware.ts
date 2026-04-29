import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req: any) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { pathname } = req.nextUrl;

  // 🔐 Not logged in
  if (!token && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // 🚫 Prevent logged-in user from visiting login
  if (token && pathname === "/login") {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // 🔥 Role-based redirect
  if (pathname === "/dashboard") {
    if (token?.role === "admin") {
      return NextResponse.redirect(
        new URL("/dashboard/admin/admin-dashboard", req.url)
      );
    }

    if (token?.role === "student") {
      return NextResponse.redirect(
        new URL("/student/dashboard", req.url)
      );
    }

    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  // 🔒 Admin protection
  if (pathname.startsWith("/dashboard/admin") && token?.role !== "admin") {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  // 🔒 Student protection
  if (pathname.startsWith("/student") && token?.role !== "student") {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/:path*",
    "/student/:path*",
    "/login",
  ],
};