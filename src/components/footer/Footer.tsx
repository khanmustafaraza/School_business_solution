"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        <div className="grid gap-10 md:grid-cols-4">
          
          {/* BRAND */}
          <div>
            <h2 className="text-lg font-semibold text-slate-900">
              Smart School ERP
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-6">
              A modern school management system to handle admissions, fees,
              attendance, and academic records efficiently.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Quick Links
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/" className="hover:text-slate-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/admission" className="hover:text-slate-900">
                  Admission
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-slate-900">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-slate-900">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* FEATURES */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Features
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Student Management</li>
              <li>Fee Tracking</li>
              <li>Attendance</li>
              <li>Reports</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Contact
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Email: support@schoolerp.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>India</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Smart School ERP. All rights reserved.
        </div>
      </div>
    </footer>
  );
}