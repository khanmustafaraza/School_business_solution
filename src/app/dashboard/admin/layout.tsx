"use client";
import Sidebar from "@/components/ui/Sidebar";
import Topbar from "@/components/ui/Topbar";
import { useToggle } from "@/store/toggledashboard/Toggledashboard";
import { NavTypeProps } from "@/types/propstype";
import React from "react";
import { FaSchool } from "react-icons/fa";
import { FaChampagneGlasses } from "react-icons/fa6";
import { IoMdSchool } from "react-icons/io";
import { MdClass } from "react-icons/md";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const { toggle } = useToggle();

  const navData: NavTypeProps[] = [
    {
      id: 1,
      name: "School Register",
      link: "/dashboard/admin/school/school-register",
      icon: <FaSchool />,
    },
    {
      id: 2,
      name: "School List",
      link: "/dashboard/admin/school/school-list",
      icon: <IoMdSchool />,
    },
    {
      id: 3,
      name: "Class Register",
      link: "/dashboard/admin/class/class-register",
      icon: <MdClass />,
    },
    {
      id: 4,
      name: "Class List",
      link: "/dashboard/admin/class/class-list",
      icon: <FaChampagneGlasses />,
    },
    {
      id: 5,
      name: "Student Register",
      link: "/dashboard/admin/student/student-register",
      icon: <FaChampagneGlasses />,
    },
    {
      id: 6,
      name: "Student List",
      link: "/dashboard/admin/student/student-list",
      icon: <FaChampagneGlasses />,
    },
    {
      id: 7,
      name: "Tc",
      link: "/dashboard/admin/tc/tc-register",
      icon: <FaChampagneGlasses />,
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#fafafa]">
      <Sidebar navData={navData} />

      <div
        className={`${
          toggle
            ? "w-full"
            : "w-[55%] sm:w-[50%] md:w-[70%] lg:w-[80%] xl:w-[85%] 2xl:w-[85%]"
        } transition-all duration-300 flex flex-col`}
      >
        <Topbar />

        <main className="flex-1 p-1">
          <div className="min-h-full  bg-white p-4">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
