import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/ui/Topbar";
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div>
        <Topbar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
