"use client";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";

const H1 = ({ heading }: any) => {
  return (
    <div className="py-2">
      {/* Top Row */}
      <div className="flex items-center justify-between flex-wrap gap-1">
        {/* LEFT */}
        <div className="flex items-start gap-3">
          {/* Text */}
          <div className="leading-tight">
            <h2 className="text-xl font-semibold text-slate-900 tracking-tight">
              {heading.name}
            </h2>
            <p className="text-sm text-slate-500 mt-1">{heading.subHeading}</p>
          </div>
        </div>

        {/* RIGHT */}
        <Link
          href={heading.href}
          className=" bg-black text-white flex gap-2 py-2 px-2.5 rounded items-center"
        >
          {heading.icon || <FaArrowUp size={12} />}
          {heading.btnHeading}
        </Link>
      </div>

      {/* Divider (very SaaS touch) */}
      {/* <div className="mt-4 h-px w-full bg-slate-200/70" /> */}
    </div>
  );
};

export default H1;
