"use client";
import { useToggle } from "@/store/toggledashboard/Toggledashboard";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Darkmode from "../darkmode/Darkmode";
import { SideBarProps } from "@/types/admin/propstype";

const Sidebar = ({ navData }: SideBarProps) => {
  const { toggle } = useToggle();
  const pathname = usePathname();

  return (
    <aside
      className={`${
        toggle
          ? "w-0"
          : "w-[45%] sm:w-[50%] md:w-[30%] lg:w-[20%] xl:w-[15%] 2xl:w-[15%]"
      } bg-[#0F172A] backdrop-blur-xl border-r border-slate-200/60 transition-all duration-300 overflow-hidden`}
    >
      <div className="h-full flex flex-col">
        {/* Logo Section */}
        <div className="px-4 py-3 border-b border-slate-200/60 flex items-center gap-3">
          <img
            src="https://img.freepik.com/free-vector/business-user-shield_78370-7029.jpg?semt=ais_hybrid&w=740&q=80"
            alt="admin-logo"
            className="w-10 h-10 rounded-lg object-cover shadow-sm"
          />
          <div className="leading-tight">
            <h2 className="text-sm font-semibold text-white tracking-tight">
              ERP System
            </h2>
            <p className="text-xs text-gray-400">Admin Panel</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 py-3 space-y-1">
          {navData.map((item) => {
            const isActive = pathname === item.link;

            return (
              <Link
                key={item.id}
                href={item.link}
                className={`group flex items-center gap-4 rounded px-3 py-3 text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-white text-black border"
                    : "text-white hover:bg-slate-200/60 hover:text-slate-900"
                }`}
              >
                {/* Icon */}
                <span
                  className={`text-[18px] transition ${
                    isActive
                      ? "text-black"
                      : "text-white group-hover:text-slate-700"
                  }`}
                >
                  {item.icon}
                </span>

                {/* Label */}
                <span className="truncate">{item.name}</span>

                {/* Active Indicator */}
                {isActive && (
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-white/80"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Section */}
        <div className="border-t border-slate-200/60 p-4 space-y-3">
          <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">
            Preferences
          </div>

          <div className="flex items-center justify-between rounded-lg bg-slate-100 px-3 py-2">
            <span className="text-sm text-slate-600">Dark Mode</span>
            <Darkmode />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
