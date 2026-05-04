"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Dropdown from "../dropdown/Dropdown";

export default function Navbar() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between py-3">

          {/* LOGO */}
          <Link href="/" className="leading-tight">
            <h1 className="text-lg font-bold text-[#8B0000]">
              Rose Valley Public School
            </h1>
            <p className="text-[11px] text-slate-500">
              Learn • Grow • Excel
            </p>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-5">

            <Link href="/" className="text-sm text-slate-600 hover:text-slate-900">
              Home
            </Link>

            <Link href="/about" className="text-sm text-slate-600 hover:text-slate-900">
              About
            </Link>

            <Link href="/academics" className="text-sm text-slate-600 hover:text-slate-900">
              Academics
            </Link>

            <Link href="/admission" className="text-sm font-medium text-[#8B0000]">
              Admissions
            </Link>

            <Link href="/contact" className="text-sm text-slate-600 hover:text-slate-900">
              Contact
            </Link>

            {/* LOGIN / USER */}
            {session?.user ? (
              <Dropdown />
            ) : (
              <Link
                href="/login"
                className="rounded bg-[#8B0000] text-white px-5 py-2 text-sm hover:opacity-90"
              >
                Login
              </Link>
            )}

          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-slate-700 text-xl"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden flex flex-col gap-2 pb-4">

            <Link href="/" className="px-3 py-2 text-sm">Home</Link>
            <Link href="/about" className="px-3 py-2 text-sm">About</Link>
            <Link href="/academics" className="px-3 py-2 text-sm">Academics</Link>
            <Link href="/admission" className="px-3 py-2 text-sm font-medium text-[#8B0000]">
              Admissions
            </Link>
            <Link href="/contact" className="px-3 py-2 text-sm">Contact</Link>

            {session?.user ? (
              <Dropdown />
            ) : (
              <Link
                href="/login"
                className="rounded bg-[#8B0000] text-white px-4 py-2 text-sm"
              >
                Login
              </Link>
            )}

          </div>
        )}
      </div>
    </header>
  );
}