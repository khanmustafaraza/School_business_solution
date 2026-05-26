import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const roleRoutes = {
  admin: {
    dashboard: "/dashboard/admin/admin-dashboard",
    base: "/dashboard/admin",
  },

  class_teacher: {
    dashboard: "/dashboard/class-teacher/class-teacher-dashboard",
    base: "/dashboard/class-teacher",
  },

  teacher: {
    dashboard: "/dashboard/teacher/teacher-dashboard",
    base: "/dashboard/teacher",
  },

  student: {
    dashboard: "/dashboard/student/student-dashboard",
    base: "/dashboard/student",
  },

  library: {
    dashboard: "/dashboard/library/library-dashboard",
    base: "/dashboard/library",
  },
};

export default async function middleware(req: any) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const pathname = req.nextUrl.pathname;

  // =========================
  // NOT LOGGED IN
  // =========================

  if (!token) {
    if (pathname !== "/login") {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
  }

  const role = token.role as keyof typeof roleRoutes;
  const userRoute = roleRoutes[role];

  // invalid role
  if (!userRoute) {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  // =========================
  // LOGIN PAGE BLOCK
  // =========================

  if (pathname === "/login") {
    return NextResponse.redirect(new URL(userRoute.dashboard, req.url));
  }

  // =========================
  // /dashboard redirect
  // =========================

  if (pathname === "/dashboard") {
    return NextResponse.redirect(new URL(userRoute.dashboard, req.url));
  }

  // =========================
  // ROLE PROTECTION
  // =========================

  if (
    pathname.startsWith("/dashboard") &&
    !pathname.startsWith(userRoute.base)
  ) {
    return NextResponse.redirect(new URL(userRoute.dashboard, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};
