"use client";
import Sidebar from "@/components/ui/Sidebar";
import Topbar from "@/components/ui/Topbar";
import { useToggle } from "@/store/toggledashboard/Toggledashboard";
import React from "react";
import {
  LayoutDashboard,
  Building2,
  School,
  PlusSquare,
  ClipboardList,
  UserPlus,
  Users,
  BadgeCheck,
  User,
} from "lucide-react";
import { NavTypeProps } from "@/types/admin/propstype";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const { toggle } = useToggle();

  const navData: NavTypeProps[] = [
    {
      id: 0,
      name: "Dashboard",
      link: "/dashboard/admin/admin-dashboard",
      icon: <LayoutDashboard size={18} />,
    },
    {
      id: 1,
      name: "Add School",
      link: "/dashboard/admin/school/school-register",
      icon: <Building2 size={18} />,
    },
    {
      id: 2,
      name: "School List",
      link: "/dashboard/admin/school/school-list",
      icon: <School size={18} />,
    },
    {
      id: 3,
      name: "Add Class",
      link: "/dashboard/admin/class/class-register",
      icon: <PlusSquare size={18} />,
    },
    {
      id: 4,
      name: "Class List",
      link: "/dashboard/admin/class/class-list",
      icon: <ClipboardList size={18} />,
    },
    {
      id: 5,
      name: "Add User",
      link: "/dashboard/admin/user/user-register",
      icon: <User size={18} />,
    },

    {
      id: 7,
      name: "User List",
      link: "/dashboard/admin/user/user-list",
      icon: <Users size={18} />,
    },
    {
      id: 9,
      name: "Student List",
      link: "/dashboard/admin/student/student-list",
      icon: <Users size={18} />,
    },
    {
      id: 8,
      name: "Certificates",
      link: "/dashboard/admin/tc/tc-register",
      icon: <BadgeCheck size={18} />,
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
          <div className="min-h-full  bg-white p-1">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
