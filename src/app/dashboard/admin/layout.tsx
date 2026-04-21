"use client";
import Sidebar from "@/components/ui/Sidebar";
import Topbar from "@/components/ui/Topbar";
import { useToggle } from "@/store/toggledashboard/Toggledashboard";
import React from "react";

import navData from "@/data/sidebarnavitems/Sidebarnavitems";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const { toggle } = useToggle();

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
