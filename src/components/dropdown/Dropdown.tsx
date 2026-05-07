"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { FiUser, FiLogOut, FiGrid } from "react-icons/fi";

export default function Dropdown({isNavbar}:{isNavbar:boolean}) {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();

  const user = session?.user as any;
  const isAdmin = user?.role === "admin";

  return (
    <div className="relative inline-block text-left">

      {/* TRIGGER */}
      <button onClick={() => setOpen(!open)}>
        <div className="h-10 w-10 rounded-full primary-bg text-white flex items-center justify-center font-semibold shadow-sm hover:scale-105 transition capitalize">
          {user?.name?.charAt(0)}
        </div>
      </button>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute -right-3.5 mt-3 w-64 rounded-xl bg-white/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-2">

          {/* USER SECTION */}
          <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-slate-50 mb-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 text-white flex items-center justify-center">
              <FiUser />
            </div>

            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-900 capitalize truncate">
                {user?.name}
              </p>
              <p className="text-xs text-slate-500 truncate">
                {user?.email}
              </p>
            </div>
          </div>

          {/* MENU */}
          <div className="space-y-1">

          {
            isNavbar &&   <Link
              href={
                isAdmin
                  ? "/dashboard/admin/admin-dashboard"
                  : "/dashboard/student/student-dashboard"
              }
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-slate-700 hover:bg-slate-100 transition"
            >
              <FiGrid className="text-slate-500" /> 
              {isAdmin ? "Admin Dashboard" : "Student Dashboard"}
            </Link>
          }

          </div>

          {/* LOGOUT */}
          <div className="mt-2">
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="flex items-center gap-2 w-full px-3 py-2 rounded-xl text-sm text-red-500 hover:bg-red-50 transition"
            >
              <FiLogOut />
              Logout
            </button>
          </div>

        </div>
      )}
    </div>
  );
}