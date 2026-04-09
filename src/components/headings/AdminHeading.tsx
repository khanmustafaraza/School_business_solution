import { headingProps } from "@/types/propstype";
import Link from "next/link";
import React from "react";
import { FaArrowUp } from "react-icons/fa";

const AdminHeading = ({ heading }: headingProps) => {
  return (
    <div className="mb-6 flex items-center flex-wrap justify-between border-b-2 pb-2 border-gray-500 ">
      <div>
        <h2 className="text-2xl  text-gray-900">{heading.name} </h2>{" "}
        <p className="hidden lg:block md:block text-sm text-gray-400 mt-1">
          {heading.subHeading}
        </p>
      </div>

      <Link
        href={heading.href}
        className=" bg-[#dd7973] inline-flex items-center gap-2 rounded   lg:px-[15px] px-6 lg:py-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-500 transition-all duration-200"
      >
        <span className="text-white"> {heading.icon}</span>
        <span className="text-white">{heading.btnHeading}</span>
      </Link>
    </div>
  );
};

export default AdminHeading;
