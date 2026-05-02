"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Dropdown from "../dropdown/Dropdown";

export default function Navbar() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between py-3">

          {/* LOGO */}
          <Link href="/" className="leading-tight">
            <h1 className="text-base font-semibold text-slate-900 tracking-tight">
              Smart School ERP
            </h1>
            <p className="text-[11px] text-slate-500">
              School Management System
            </p>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-3">

            <Link href="/contact" className="px-3 py-2 text-sm text-slate-600 hover:text-slate-900">
              Contact
            </Link>

            {session?.user ? (
              <Dropdown />
            ) : (
              <Link
                href="/login"
                className="rounded bg-[#007399] text-white px-5 py-2 text-sm hover:bg-white hover:text-black hover:border transition"
              >
                Login
              </Link>
            )}

            <Link
              href="/admission"
              className="border px-4 py-2 text-sm hover:bg-slate-900 hover:text-white transition"
            >
              Admission
            </Link>

          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-slate-700"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden flex flex-col gap-2 pb-4">

            <Link href="/contact" className="px-3 py-2 text-sm">
              Contact
            </Link>

            {session?.user ? (
              <Dropdown />
            ) : (
              <Link
                href="/login"
                className="rounded bg-[#007399] text-white px-4 py-2 text-sm"
              >
                Login
              </Link>
            )}

            <Link
              href="/admission"
              className="border px-4 py-2 text-sm"
            >
              Admission
            </Link>

          </div>
        )}

      </div>
    </header>
  );
}