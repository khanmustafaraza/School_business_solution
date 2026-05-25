import { getToken } from "next-auth/jwt";

import { NextResponse } from "next/server";

async function proxy(req: any) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { pathname } = req.nextUrl;

  /* =========================
     ROLE ROUTES
  ========================= */

  const roleRoutes: any = {
    admin: {
      dashboard:
        "/dashboard/admin/admin-dashboard",

      base: "/dashboard/admin",
    },

    class_teacher: {
      dashboard:
        "/dashboard/class-teacher/class-teacher-dashboard",

      base: "/dashboard/class-teacher",
    },

    teacher: {
      dashboard:
        "/dashboard/teacher/teacher-dashboard",

      base: "/dashboard/teacher",
    },

    student: {
      dashboard:
        "/dashboard/student/student-dashboard",

      base: "/dashboard/student",
    },

    library: {
      dashboard:
        "/dashboard/library/library-dashboard",

      base: "/dashboard/library",
    },
  };

  /* =========================
     NOT LOGGED IN
  ========================= */

  if (!token && pathname !== "/login") {
    return NextResponse.redirect(
      new URL("/login", req.url)
    );
  }

  /* =========================
     PREVENT LOGIN ACCESS
  ========================= */

  if (token && pathname === "/login") {
    const role = token?.role as string;

    const dashboard =
      roleRoutes?.[role]?.dashboard;

    if (dashboard) {
      return NextResponse.redirect(
        new URL(dashboard, req.url)
      );
    }

    return NextResponse.redirect(
      new URL("/", req.url)
    );
  }

  /* =========================
     BASE DASHBOARD REDIRECT
  ========================= */

  if (pathname === "/dashboard") {
    const role = token?.role as string;

    if (!role) {
      return NextResponse.redirect(
        new URL("/unauthorized", req.url)
      );
    }

    const dashboard =
      roleRoutes?.[role]?.dashboard;

    if (!dashboard) {
      return NextResponse.redirect(
        new URL("/unauthorized", req.url)
      );
    }

    return NextResponse.redirect(
      new URL(dashboard, req.url)
    );
  }

  /* =========================
     ROLE PROTECTION
  ========================= */

  if (pathname.startsWith("/dashboard")) {
    const role = token?.role as string;

    if (!role) {
      return NextResponse.redirect(
        new URL("/unauthorized", req.url)
      );
    }

    const allowedBaseRoute =
      roleRoutes?.[role]?.base;

    if (!allowedBaseRoute) {
      return NextResponse.redirect(
        new URL("/unauthorized", req.url)
      );
    }

    // trying to access another role route

    if (
      !pathname.startsWith(
        allowedBaseRoute
      )
    ) {
      return NextResponse.redirect(
        new URL(
          roleRoutes[role].dashboard,
          req.url
        )
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};

export default proxy;