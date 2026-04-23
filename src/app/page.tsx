"use client";

import Loader from "@/components/loader/Loader";
import Navbar from "@/components/navbar/Navbar";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  FaUsers,
  FaMoneyCheckAlt,
  FaClipboardCheck,
  FaChalkboardTeacher,
  FaSchool,
  FaFileInvoiceDollar,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800">
       <Loader isLoading={loading} message="Submitting admission..." />
        <button onClick={() => setLoading(true)}>
      Submit
    </button>
      
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.06),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.05),transparent_30%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">

          {/* LEFT */}
          <div>
            <span className="inline-flex items-center border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
              Modern ERP for Schools
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Simplify School Management with One Smart Platform
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              Manage students, fees, attendance, classes, teachers, and academic records from one powerful dashboard.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="/login"
                className="inline-flex items-center gap-2  rounded bg-[#007399] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Get Started <FiArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Contact Us
              </Link>

            </div>

            {/* STATS */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              <StatCard value="100+" label="Students Managed" />
              <StatCard value="24/7" label="Access Anytime" />
              <StatCard value="All-in-One" label="School Operations" />
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">

              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    ERP Dashboard
                  </h3>
                  <p className="text-sm text-slate-500">
                    School performance overview
                  </p>
                </div>

                <div className="border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  Live
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <DashboardMiniCard title="Students" value="1,248" />
                <DashboardMiniCard title="Teachers" value="58" />
                <DashboardMiniCard title="Attendance" value="93%" />
                <DashboardMiniCard title="Fees Collected" value="₹4.8L" />
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">

          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Powerful Features for Daily School Operations
            </h2>
            <p className="mt-3 text-slate-600">
              Everything you need to manage school administration efficiently.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            <Feature icon={<FaUsers size={24} />} title="Student Management" desc="Manage student records easily." />
            <Feature icon={<FaMoneyCheckAlt size={24} />} title="Fee Tracking" desc="Track payments and dues." />
            <Feature icon={<FaClipboardCheck size={24} />} title="Attendance" desc="Daily attendance system." />
            <Feature icon={<FaChalkboardTeacher size={24} />} title="Teachers" desc="Staff management system." />
            <Feature icon={<FaSchool size={24} />} title="Classes" desc="Class & section management." />
            <Feature icon={<FaFileInvoiceDollar size={24} />} title="Reports" desc="Generate school reports." />

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-20 text-white text-center">
        <div className="mx-auto max-w-4xl px-4">

          <h2 className="text-3xl font-bold">
            Start Managing Your School Smarter
          </h2>

          <p className="mt-4 text-sm text-slate-300">
            Save time and manage everything in one system.
          </p>

          <div className="mt-8 flex justify-center gap-4">

            <button
              onClick={() => router.push("/login")}
              className="border border-white bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:opacity-90"
            >
              Login Now
            </button>

            <Link
              href="/contact"
              className="border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Contact Sales
            </Link>

          </div>

        </div>
      </section>
    </div>
  );
}

/* COMPONENTS (unchanged but cleaner feel) */

function Feature({ icon, title, desc }: any) {
  return (
    <div className="border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-3 text-slate-800">{icon}</div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </div>
  );
}

function StatCard({ value, label }: any) {
  return (
    <div className="border border-slate-200 bg-white p-4">
      <h3 className="text-xl font-bold">{value}</h3>
      <p className="text-xs text-slate-500">{label}</p>
    </div>
  );
}

function DashboardMiniCard({ title, value }: any) {
  return (
    <div className="bg-slate-50 p-4">
      <p className="text-sm text-slate-500">{title}</p>
      <h4 className="text-xl font-bold">{value}</h4>
    </div>
  );
}