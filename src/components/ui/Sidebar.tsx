"use client";
import { useToggle } from "@/store/toggledashboard/Toggledashboard";
import { NavTypeProps, SideBarProps } from "@/types/propstype";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = ({ navData }: SideBarProps) => {
  const { toggle } = useToggle();
  const pathname = usePathname();
  return (
    <aside
      className={`${
        toggle
          ? "w-0"
          : "w-[45%] sm:w-[50%] md:w-[30%] lg:w-[20%] xl:w-[15%] 2xl:w-[15%]"
      } bg-white border-r border-gray-200 transition-all duration-300 overflow-hidden `}
    >
      <div className="h-full flex flex-col">
        {/* Logo / Heading */}
        <div className="px-2 py-[8px] border-b border-gray-200 flex justify-evenly items-center">
          <img
            src="https://img.freepik.com/free-vector/business-user-shield_78370-7029.jpg?semt=ais_hybrid&w=740&q=80"
            alt="admin-logo"
            className="w-12 h-12 rounded-full"
          />
          <h2>Erp</h2>
        </div>

        {/* Menu */}
        <nav className="flex-1  px-1">
          <ul className="">
            {navData.map((item, index) => {
              const isActive = pathname === item.link;

              return (
                <li key={item.id} className="flex justify-center m-[2px]">
                  <Link
                    href={`${item.link}`}
                    className={` w-full flex items-center gap-4 rounded px-3 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-[#7066C8] text-white"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    <span
                      className={`text-[17px] text-gray-500 group-hover:text-blue-600 transition-colors duration-200 ${isActive ? "text-white" : "text-gray-500"}`}
                    >
                      {item.icon}
                    </span>
                    <span className="text-[15px] font-medium text-end">
                      {item.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
