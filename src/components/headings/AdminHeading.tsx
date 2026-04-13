import { headingProps } from "@/types/admin/propstype";
import Link from "next/link";
import React from "react";
import { FaArrowUp } from "react-icons/fa";

const AdminHeading = ({ heading }: headingProps) => {
  return (
    <div className="mb-6 flex items-center justify-between flex-wrap px-3 py-4 bg-white">
      {/* LEFT SIDE */}
      <div className="flex items-center gap-4">
        {/* Icon Badge */}
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#dd7973]/10 text-[#dd7973]">
          {heading.icon || <FaArrowUp />}
        </div>

        {/* Text */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            {heading.name}
          </h2>
          <p className="text-sm text-gray-500 mt-0.5">{heading.subHeading}</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <Link
        href={heading.href}
        className="inline-flex items-center gap-2 rounded border border-[#dd7973]/30 bg-[#dd7973] px-3 py-3 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-[#c96b66] hover:shadow-md active:scale-95"
      >
        {heading.icon || <FaArrowUp />}
        {heading.btnHeading}
      </Link>
    </div>
  );
};

export default AdminHeading;
