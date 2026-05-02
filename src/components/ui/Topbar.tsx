"use client";

import { useEffect, useRef, useState } from "react";
import { useToggle } from "@/store/toggledashboard/Toggledashboard";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

import { FaBars } from "react-icons/fa";
import { FiBell, FiSearch, FiUser, FiLogOut, FiGrid } from "react-icons/fi";

export default function Topbar() {
  const { handleToggle } = useToggle();
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const user = session?.user as any;
  const isAdmin = user?.role === "admin";

  // close on outside click
  // useEffect(() => {
  //   const handleClick = (e) => {
  //     if (ref.current && !ref.current.contains(e.target)) {
  //       setOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClick);
  //   return () => document.removeEventListener("mousedown", handleClick);
  // }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-slate-100">

      <div className="flex h-16 items-center justify-between px-4 md:px-6">

        {/* LEFT */}
        <div className="flex items-center gap-4">

          <button
            onClick={handleToggle}
            className="h-10 w-10 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 transition"
          >
            <FaBars className="text-slate-700" size={15} />
          </button>

          <div className="hidden sm:block leading-tight">
            <h1 className="text-sm font-semibold text-slate-900">
              Rose Valley School
            </h1>
            <p className="text-xs text-slate-500">
              Control Center
            </p>
          </div>

        </div>

        {/* SEARCH (soft SaaS style) */}
        <div className="hidden md:flex flex-1 max-w-xl mx-6">
          <div className="relative w-full group">

            <FiSearch
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-600"
              size={18}
            />

            <input
              placeholder="Search students, classes..."
              className="w-full rounded-2xl bg-slate-100/70 py-2.5 pl-11 pr-4 text-sm outline-none
              focus:bg-white focus:ring-2 focus:ring-slate-200 transition"
            />

          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          {/* NOTIFICATION */}
          <button className="relative h-10 w-10 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 transition">
            <FiBell className="text-slate-700" size={18} />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          {/* PROFILE */}
          <div className="relative" ref={ref}>

            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-3 rounded-full bg-slate-100 px-2 py-1.5 hover:bg-slate-200 transition"
            >

              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 text-white flex items-center justify-center font-semibold">
                {user?.name?.charAt(0)}
              </div>

              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-slate-800">
                  {user?.name}
                </p>
                <p className="text-xs text-slate-500">
                  {isAdmin ? "Admin" : "Student"}
                </p>
              </div>

            </button>

            {/* DROPDOWN */}
            {open && (
              <div className="absolute right-0 mt-3 w-64 rounded-2xl bg-white/90 backdrop-blur-xl shadow-[0_25px_70px_rgba(0,0,0,0.15)] overflow-hidden">

                {/* USER HEADER */}
                <div className="px-4 py-3 bg-slate-50">
                  <p className="text-sm font-semibold text-slate-900">
                    {user?.name}
                  </p>
                  <p className="text-xs text-slate-500 truncate">
                    {user?.email}
                  </p>
                </div>

                {/* MENU */}
                <div className="p-2 space-y-1">

                  <Link
                    href={
                      isAdmin
                        ? "/dashboard/admin/admin-dashboard"
                        : "/dashboard/student/student-dashboard"
                    }
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-slate-700 hover:bg-slate-100 transition"
                  >
                    <FiGrid />
                    Dashboard
                  </Link>

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

        </div>

      </div>
    </header>
  );
}