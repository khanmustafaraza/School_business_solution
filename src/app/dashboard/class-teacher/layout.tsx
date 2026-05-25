"use client";
import Sidebar from "@/components/ui/Sidebar";
import Topbar from "@/components/ui/Topbar";
import { useToggle } from "@/store/toggledashboard/Toggledashboard";
import { NavTypeProps } from "@/types/propstype";
import React from "react";
import { FaBars, FaList, FaUser } from "react-icons/fa";

// import navData from "@/data/adminmenu/AdminMenu";
const navData: NavTypeProps[] = [
  {
    id: 0,
    name: "Dashboard",
    link: "/dashboard/class-teacher/class-teacher-dashboard",
    icon: <FaBars />,
  },
  {
    id: 1,
    name: "Student List",
    link: "/dashboard/class-teacher/view-students",
    icon: <FaUser />,
  },
];

const ClassTeacherLayout = ({ children }: { children: React.ReactNode }) => {
  const { toggle } = useToggle();

  return (
    <div className="flex min-h-screen">
      <Sidebar navData={navData} />

      <div
        className={`${
          toggle
            ? "w-full"
            : "w-[55%] sm:w-[50%] md:w-[75%] lg:w-[88%] xl:w-[88%] 2xl:w-[88%]"
        } transition-all duration-300 flex flex-col`}
      >
        <Topbar />

        <main className="flex-1 p-1">
          <div className="min-h-full  bg-white p-1">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default ClassTeacherLayout;
