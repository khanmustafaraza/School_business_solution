"use client";

import { useRouter } from "next/navigation";
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

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              Smart School ERP
            </h1>
            <p className="text-xs text-slate-500">School Management System</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push("/contact")}
              className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Contact
            </button>
            <button
              onClick={() => router.push("/login")}
              className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
            >
              Login
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.06),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.05),transparent_30%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
              Modern ERP for Schools
            </span>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Simplify School Management with One Smart Platform
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              Manage students, fees, attendance, classes, teachers, and academic
              records from one powerful dashboard designed for modern schools.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => router.push("/login")}
                className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
              >
                Get Started
                <FiArrowRight size={18} />
              </button>

              <button
                onClick={() => router.push("/contact")}
                className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Contact Us
              </button>
            </div>

            {/* Mini Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              <StatCard value="100+" label="Students Managed" />
              <StatCard value="24/7" label="Access Anytime" />
              <StatCard value="All-in-One" label="School Operations" />
            </div>
          </div>

          {/* Right Dashboard Mock */}
          <div className="relative">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    ERP Dashboard
                  </h3>
                  <p className="text-sm text-slate-500">
                    School performance overview
                  </p>
                </div>
                <div className="rounded-xl bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  Live
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <DashboardMiniCard title="Students" value="1,248" />
                <DashboardMiniCard title="Teachers" value="58" />
                <DashboardMiniCard title="Attendance" value="93%" />
                <DashboardMiniCard title="Fees Collected" value="₹4.8L" />
              </div>

              <div className="mt-5 rounded-2xl bg-slate-50 p-4">
                <p className="text-sm font-medium text-slate-700">
                  Today’s Summary
                </p>
                <div className="mt-3 space-y-3">
                  <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3">
                    <span className="text-sm text-slate-600">
                      Attendance Marked
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      812 Students
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3">
                    <span className="text-sm text-slate-600">Pending Fees</span>
                    <span className="text-sm font-semibold text-slate-900">
                      143 Records
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-white px-4 py-3">
                    <span className="text-sm text-slate-600">
                      New Admissions
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      18 This Month
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-3xl bg-slate-100 lg:block" />
            <div className="absolute -right-6 -top-6 hidden h-20 w-20 rounded-3xl bg-slate-200 lg:block" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Powerful Features for Daily School Operations
            </h2>
            <p className="mt-3 text-slate-600">
              Everything you need to manage school administration efficiently.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <Feature
              icon={<FaUsers size={24} />}
              title="Student Management"
              desc="Store and manage student profiles, admission details, parent records, and academic information."
            />
            <Feature
              icon={<FaMoneyCheckAlt size={24} />}
              title="Fee Tracking"
              desc="Track paid, pending, and overdue fee records with better financial visibility."
            />
            <Feature
              icon={<FaClipboardCheck size={24} />}
              title="Attendance"
              desc="Manage daily attendance for students and maintain organized records."
            />
            <Feature
              icon={<FaChalkboardTeacher size={24} />}
              title="Teacher Management"
              desc="Handle teacher records, assignments, and school staff details in one place."
            />
            <Feature
              icon={<FaSchool size={24} />}
              title="Class & Section"
              desc="Create and manage classes, sections, rooms, and class-wise student data."
            />
            <Feature
              icon={<FaFileInvoiceDollar size={24} />}
              title="Reports & Records"
              desc="Generate important school records like TC, reports, and structured admin data."
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Why Schools Choose Smart School ERP
            </h2>
            <p className="mt-4 text-slate-600 leading-8">
              Built to reduce paperwork, improve organization, and help schools
              manage daily operations smoothly without unnecessary complexity.
            </p>
          </div>

          <div className="grid gap-4">
            <Benefit
              title="Simple to Use"
              desc="Easy interface for admin, teachers, and school staff."
            />
            <Benefit
              title="Fast & Organized"
              desc="Quick access to records, classes, fees, and reports."
            />
            <Benefit
              title="Professional Workflow"
              desc="Built for real school operations, not just demo screens."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">
            Start Managing Your School Smarter
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300">
            Save time, reduce manual work, and manage your school operations
            from one modern dashboard.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => router.push("/login")}
              className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:opacity-90"
            >
              Login Now
            </button>
            <button
              onClick={() => router.push("/contact")}
              className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- Reusable Components ---------- */

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 inline-flex rounded-2xl bg-slate-100 p-3 text-slate-800">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">{desc}</p>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900">{value}</h3>
      <p className="mt-1 text-xs text-slate-500">{label}</p>
    </div>
  );
}

function DashboardMiniCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <p className="text-sm text-slate-500">{title}</p>
      <h4 className="mt-2 text-xl font-bold text-slate-900">{value}</h4>
    </div>
  );
}

function Benefit({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">{desc}</p>
    </div>
  );
}
