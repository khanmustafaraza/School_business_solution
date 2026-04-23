"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

        {/* LOGO */}
        <div className="leading-tight">
          <Link href="/">
          <h1 className="text-base font-semibold text-slate-900 tracking-tight">
            Smart School ERP
          </h1>
          <p className="text-[11px] text-slate-500">
            School Management System
          </p>
          </Link>
        </div>

        {/* NAV LINKS */}
        <nav className="flex items-center gap-1 sm:gap-3">

          <Link
            href="/contact"
            className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition"
          >
            Contact
          </Link>

          <Link
            href="/login"
            className="rounded bg-[#007399] text-white  px-6 py-2.5 text-sm font-medium  
                       hover:bg-white hover:text-black hover:border  transition
                       focus:outline-none focus:ring-2 focus:ring-slate-300"
          >
            Login
          </Link>

          {/* CTA - subtle but structured */}
          <Link
            href="/admission"
            className="ml-2 border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 
                       hover:bg-slate-900 hover:text-white transition
                       focus:outline-none focus:ring-2 focus:ring-slate-300"
          >
            Admission
          </Link>

        </nav>
      </div>
    </header>
  );
}