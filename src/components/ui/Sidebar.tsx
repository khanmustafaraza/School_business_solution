"use client";
import { useToggle } from "@/store/Toggledashboard";
import { NavTypeProps, SideBarProps } from "@/types/propstype";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  FaBarcode,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
  FaClipboardList,
  FaCog,
} from "react-icons/fa";

const Sidebar = ({ navData }: SideBarProps) => {
  const { toggle } = useToggle();
  const pathname = usePathname();

  const menuItems = [
    { icon: <FaBarcode />, label: "Dashboard" },
    { icon: <FaUserGraduate />, label: "Students" },
    { icon: <FaChalkboardTeacher />, label: "Teachers" },
    { icon: <FaBook />, label: "Classes" },
    { icon: <FaClipboardList />, label: "Attendance" },
    { icon: <FaCog />, label: "Settings" },
  ];

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
        <div className="px-2 py-[7px] border-b border-gray-200">
          <h1 className="text-lg font-semibold text-gray-900">Heading</h1>
          <p className="text-xs text-gray-500 mt-0.5">Admin Panel</p>
        </div>

        {/* Menu */}
        <nav className="flex-1 mt-2 p-2">
          <ul className="space-y-1">
            {navData.map((item, index) => {
              const isActive = pathname === item.link;

              return (
                <li key={item.id}>
                  <Link
                    href={`${item.link}`}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-slate-900 text-white"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    <span className="text-[17px] text-gray-500 group-hover:text-blue-600 transition-colors duration-200">
                      {item.icon}
                    </span>
                    <span className="text-[15px] font-medium">{item.name}</span>
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
