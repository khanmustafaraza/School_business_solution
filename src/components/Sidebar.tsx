"use client";

import { FaHome, FaUser, FaMoneyCheckAlt, FaClipboardCheck, FaTimes } from "react-icons/fa";

interface SidebarProps {
  isDesktop?: boolean;
  isMobile?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isDesktop, isMobile, onClose }: SidebarProps) {
  return (
    <>
      {isMobile && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={onClose}
          >gsfegdfgdfg</div>
          <aside className="relative flex-1 w-64 bg-white p-4 flex flex-col gap-4 shadow-lg transform transition-transform duration-300">
            <button
              className="self-end mb-4 text-gray-700 hover:text-gray-900"
              onClick={onClose}
            >
              <FaTimes size={24} />
            </button>
            <SidebarContent />
          </aside>
        </div>
      )}

      {isDesktop && (
        <aside className="hidden md:flex md:flex-col md:w-60 bg-white p-4 border-r border-gray-100 gap-4">
          <SidebarContent />
        </aside>
      )}
    </>
  );
}

function SidebarContent() {
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Admin</h2>
      <NavItem icon={<FaHome />} label="Dashboard" />
      <NavItem icon={<FaUser />} label="Students" />
      <NavItem icon={<FaMoneyCheckAlt />} label="Fees" />
      <NavItem icon={<FaClipboardCheck />} label="Attendance" />
    </>
  );
}

function NavItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors duration-200 text-gray-800">
      <div className="text-lg">{icon}</div>
      <span className="font-medium">{label}</span>
    </div>
  );
}