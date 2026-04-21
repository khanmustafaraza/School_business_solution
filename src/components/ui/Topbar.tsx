"use client";

import { useToggle } from "@/store/toggledashboard/Toggledashboard";
import React from "react";
import { FaBars } from "react-icons/fa";
import { FiBell, FiChevronDown, FiSearch, FiUser } from "react-icons/fi";

const Topbar: React.FC = () => {
  const { handleToggle } = useToggle();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-[#0F172A] backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <button
            onClick={handleToggle}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm transition hover:bg-slate-100"
          >
            <FaBars size={16} className="text-slate-600" />
          </button>

          <div className="hidden sm:block leading-tight">
            <h1 className="text-base font-semibold text-slate-800 tracking-tight">
              Rose Valley Public School
            </h1>
            <p className="text-xs text-slate-500">Dashboard overview</p>
          </div>
        </div>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-xl mx-6">
          <div className="relative w-full">
            <FiSearch
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search students, classes, fees..."
              className="w-full rounded-full border border-slate-200 bg-white py-2.5 pl-11 pr-4 text-sm text-slate-700 shadow-sm outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-slate-200"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Mobile Search */}
          <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm md:hidden hover:bg-slate-100">
            <FiSearch size={18} className="text-slate-600" />
          </button>

          {/* Notifications */}
          <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm hover:bg-slate-100">
            <FiBell size={18} className="text-slate-600" />
            <span className="absolute right-2 top-2 flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500"></span>
            </span>
          </button>

          {/* Profile */}
          <button className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-2 py-1.5 shadow-sm hover:bg-slate-100 transition">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-slate-200 to-slate-100 text-slate-700">
              <FiUser size={18} />
            </div>

            <div className="hidden md:block text-left">
              <p className="text-sm font-medium text-slate-800 leading-none">
                John Doe
              </p>
              <p className="text-xs text-slate-500">Administrator</p>
            </div>

            <FiChevronDown
              className="hidden md:block text-slate-400"
              size={16}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
