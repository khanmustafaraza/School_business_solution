import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

 async function proxy(req:any) {
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

  // 🔥 Redirect base dashboard → role dashboard
  if (pathname === "/dashboard") {
    if (!token?.role) {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    return NextResponse.redirect(
      new URL(`/dashboard/${token.role}`, req.url)
    );
  }

  // 🔒 Role protection (generic)
  if (pathname.startsWith("/dashboard")) {
    const role = token?.role;

    if (!role) {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    // user trying to access another role's dashboard
    if (!pathname.startsWith(`/dashboard/${role}`)) {
      return NextResponse.redirect(
        new URL(`/dashboard/${role}`, req.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};


export default proxy