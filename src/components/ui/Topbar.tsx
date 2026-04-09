"use client";

import { useToggle } from "@/store/toggledashboard/Toggledashboard";
import React from "react";
import { FaBars } from "react-icons/fa";
import { FiBell, FiChevronDown, FiSearch, FiUser } from "react-icons/fi";

const Topbar: React.FC = () => {
  const { handleToggle } = useToggle();

  return (
    <header className="w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="flex w-full items-center justify-between gap-4 px-4 py-[2px] md:px-6">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleToggle}
            className="inline-flex h-[30px] w-10 items-center justify-center rounded border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 hover:text-slate-900 cursor-pointer"
          >
            <FaBars size={16} />
          </button>

          <div className="hidden sm:block">
            <h1 className="text-lg font-semibold text-gray-400">
              Rose Valley Public School
            </h1>
            <p className="text-xs text-slate-500">
              Welcome back, manage your school efficiently
            </p>
          </div>
        </div>

        {/* Middle - Search */}
        <div className="hidden w-full max-w-xl md:flex">
          <div className="relative w-full">
            <FiSearch
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search students, classes, fees..."
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-2.5 pl-11 pr-4 text-sm text-slate-700 outline-none transition focus:border-slate-300 focus:bg-white focus:ring-2 focus:ring-slate-200"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Search Icon for Mobile */}
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50 hover:text-slate-900 md:hidden">
            <FiSearch size={18} />
          </button>

          {/* Notification */}
          <button className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50 hover:text-slate-900">
            <FiBell size={18} />
            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white" />
          </button>

          {/* Profile */}
          <button className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-2 py-1.5 transition hover:bg-slate-50">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
              <FiUser size={18} />
            </div>

            <div className="hidden text-left md:block">
              <p className="text-sm font-medium text-slate-800">John Doe</p>
              <p className="text-xs text-slate-500">Administrator</p>
            </div>

            <FiChevronDown
              className="hidden text-slate-500 md:block"
              size={16}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
