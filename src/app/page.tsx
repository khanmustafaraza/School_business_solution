"use client";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaUsers,
  FaClipboardCheck,
  FaChalkboardTeacher,
  FaSchool,
  FaBook,
  FaAward,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white primary-text">

      <Navbar />

      {/* HERO */}
      <section className="bg-gray-50 py-20 sm:py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">

          {/* LEFT */}
          <div>

            <span className="inline-flex rounded border bg-white px-3 py-1 text-xs font-medium secondary-text">
              CBSE Affiliated School
            </span>

            <h1 className="mt-5 text-4xl font-bold leading-tight primary-text sm:text-5xl">
              Welcome to Rose Valley Public School
            </h1>

            <p className="mt-5 max-w-xl secondary-text leading-7">
              Nurturing young minds with quality education, discipline, and innovation.
              We focus on academic excellence and holistic development.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="/admission"
                className="rounded primary-bg px-6 py-3 text-sm font-medium text-white hover:opacity-90"
              >
                Apply Now <FiArrowRight className="inline ml-1" />
              </Link>

              <Link
                href="/contact"
                className="rounded border px-6 py-3 text-sm font-medium secondary-text hover:bg-gray-100"
              >
                Contact School
              </Link>

            </div>

            {/* STATS */}
            <div className="mt-10 grid grid-cols-3 gap-4">

              <StatCard value="30+" label="Years" />
              <StatCard value="100%" label="Results" />
              <StatCard value="CBSE" label="Board" />

            </div>

          </div>

          {/* RIGHT */}
          <div className="rounded-xl border bg-white p-6 shadow-sm">

            <h3 className="text-lg font-semibold primary-text">
              School Overview
            </h3>

            <p className="mb-6 text-sm secondary-text">
              Academic highlights & performance
            </p>

            <div className="grid grid-cols-2 gap-4">

              <MiniCard title="Students" value="1,248" />
              <MiniCard title="Teachers" value="58" />
              <MiniCard title="Results" value="98%" />
              <MiniCard title="Events" value="25+" />

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto mb-12 max-w-2xl text-center">

            <h2 className="text-3xl font-bold primary-text">
              Our School Highlights
            </h2>

            <p className="mt-3 secondary-text">
              Providing a balanced environment for learning and growth.
            </p>

          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            <Feature icon={<FaUsers />} title="Admissions" desc="Easy and transparent process." />
            <Feature icon={<FaBook />} title="Academics" desc="Structured CBSE curriculum." />
            <Feature icon={<FaClipboardCheck />} title="Attendance" desc="Daily tracking system." />
            <Feature icon={<FaChalkboardTeacher />} title="Faculty" desc="Experienced teachers." />
            <Feature icon={<FaSchool />} title="Facilities" desc="Labs, library & sports." />
            <Feature icon={<FaAward />} title="Achievements" desc="Consistent excellence." />

          </div>

        </div>

      </section>

      {/* VISION */}
      <section className="bg-gray-50 py-20 text-center">

        <div className="mx-auto max-w-3xl px-6">

          <h2 className="text-3xl font-bold primary-text">
            Our Vision
          </h2>

          <p className="mt-4 secondary-text">
            To create responsible global citizens through quality education,
            strong values, and lifelong learning.
          </p>

        </div>

      </section>

      {/* CTA */}
      <section className="primary-bg py-20 text-center text-white">

        <div className="mx-auto max-w-4xl px-6">

          <h2 className="text-3xl font-bold">
            Join Rose Valley Public School Today
          </h2>

          <p className="mt-4 text-white/80">
            Give your child the best education and future.
          </p>

          <div className="mt-8 flex justify-center gap-4">

            <button
              onClick={() => router.push("/admission")}
              className="rounded bg-[var(--secondary-color)] px-6 py-3 text-sm font-medium text-white hover:opacity-90"
            >
              Apply Now
            </button>

            <Link
              href="/contact"
              className="rounded border border-white/30 px-6 py-3 text-sm font-medium hover:bg-white/10"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

      <Footer />
    </div>
  );
}

/* COMPONENTS */

function Feature({ icon, title, desc }: any) {
  return (
    <div className="rounded border bg-white p-6 hover:shadow-sm transition">

      <div className="text-xl primary-text">{icon}</div>

      <h3 className="mt-3 text-lg font-semibold primary-text">
        {title}
      </h3>

      <p className="mt-2 text-sm secondary-text">
        {desc}
      </p>

    </div>
  );
}

function StatCard({ value, label }: any) {
  return (
    <div className="rounded border bg-white p-4 text-center">

      <h3 className="text-xl font-bold primary-text">
        {value}
      </h3>

      <p className="text-xs secondary-text">
        {label}
      </p>

    </div>
  );
}

function MiniCard({ title, value }: any) {
  return (
    <div className="rounded bg-gray-50 p-4">

      <p className="text-sm secondary-text">{title}</p>

      <h4 className="text-xl font-bold primary-text">
        {value}
      </h4>

    </div>
  );
}