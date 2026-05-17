"use client";

import { useEffect, useRef, useState } from "react";
import { useToggle } from "@/store/toggledashboard/Toggledashboard";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

import { FaBars } from "react-icons/fa";
import { FiBell, FiSearch, } from "react-icons/fi";
import { RiMenuFold3Fill, RiMenuUnfold3Fill } from "react-icons/ri";
import Dropdown from "../dropdown/Dropdown";

export default function Topbar() {
  const { handleToggle,toggle } = useToggle();
  const { data: session } = useSession();
 

  const user = session?.user as any;
  // const isAdmin = user?.role === "admin";

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
    <header className="w-full bg-white/70 ">

      <div className="flex h-16 items-center justify-between px-4 md:px-6">

        {/* LEFT */}
        <div className="flex items-center gap-4">

          <button
            onClick={handleToggle}
            className="h-10 w-10 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 transition"
           title="Toggle Sidebar">
            {toggle ?<RiMenuUnfold3Fill/>: <RiMenuFold3Fill/>}
            {/* <FaBars className="text-slate-700" size={15} /> */}
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
        {/* <div className="hidden md:flex flex-1 max-w-xl mx-6">
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
        </div> */}

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          {/* NOTIFICATION */}
          <button className="relative h-10 w-10 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 transition">
            <FiBell className="text-slate-700" size={18} />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          {/* PROFILE */}
        <Dropdown isNavbar = {false} />
        </div>

      </div>
    </header>
  );
}