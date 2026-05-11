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
          : "w-[45%] sm:w-[50%] md:w-[25%] lg:w-[12%] xl:w-[12%] 2xl:w-[12%]"
      }  border-r border-slate-200/60 transition-all duration-300 overflow-hidden`}
    >
      <div className="h-full flex flex-col">
        {/* Logo Section */}
        <div className="px-2 py-3 border-b border-slate-200/60 flex items-center gap-2">
          <img
            src="https://img.freepik.com/free-vector/business-user-shield_78370-7029.jpg?semt=ais_hybrid&w=740&q=80"
            alt="admin-logo"
            className="w-10 h-10 rounded object-cover "
          />
          <div className="leading-tight">
            <h2 className="text-sm font-semibold ">
              ERP System
            </h2>
            <p className="text-xs text-gray-400">Admin Panel</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-1 py-2 space-y-.5">
          {navData.map((item) => {
            const isActive = pathname === item.link;

            return (
              <Link
                key={item.id}
                href={item.link}
                className={`group flex items-center gap-6 rounded px-2 py-3 text-sm transition-all duration-200 ${
                  isActive
                    ? " text-black border border-gray-200"
                    : " hover:bg-slate-200/60 hover:text-slate-900"
                }`} title={`${item.name}`}
              >
                {/* Icon */}
                <span
                  className={`text-[18px] transition ${
                    isActive
                      ? "text-black"
                      : "primary-text"
                  }`}
                >
                  {item.icon}
                </span>

                {/* Label */}
                <span className="truncate">{item.name}</span>

                {/* Active Indicator */}
                {isActive && (
                  <span className="ml-auto h-1.5 w-1.5 rounded-full bg-black"></span>
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
