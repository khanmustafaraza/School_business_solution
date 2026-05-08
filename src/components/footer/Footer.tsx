"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        
        <div className="grid gap-10 md:grid-cols-4">
          
          {/* SCHOOL INFO */}
          <div>
            <h2 className="text-lg font-bold primary-text">
              Rose Valley Public School
            </h2>

            <p className="mt-3 text-sm text-slate-600 leading-6">
              Providing quality education with a focus on academic excellence, 
              discipline, and overall personality development.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/" className="hover:text-slate-900 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-slate-900 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-slate-900 transition">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/admission" className="hover:text-slate-900 transition">
                  Admissions
                </Link>
              </li>
            </ul>
          </div>

          {/* ACADEMICS */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Academics
            </h3>

            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Primary School</li>
              <li>Middle School</li>
              <li>Senior Secondary</li>
              <li>CBSE Curriculum</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Contact Us
            </h3>

            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Email: info@rosevalleyschool.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Delhi, India</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 border-t border-slate-200 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Rose Valley Public School. All rights reserved.
        </div>

      </div>
    </footer>
  );
}