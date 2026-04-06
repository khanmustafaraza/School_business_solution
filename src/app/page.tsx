"use client";

import { useRouter } from "next/navigation";
import { FaUsers, FaMoneyCheckAlt, FaClipboardCheck } from "react-icons/fa";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen font-sans text-gray-800 bg-white">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-4">
        <h1 className="text-3xl font-bold mb-3 text-gray-900">
          Smart School ERP
        </h1>
        <p className="text-base mb-4 text-gray-600 max-w-md">
          Manage students, fees, attendance, and more in one simple platform.
          Save time and simplify school administration.
        </p>

        <div className="flex gap-3">
          <button
            onClick={() => router.push("/login")}
            className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Login
          </button>

          <button
             onClick={() => router.push("/contact")}
            className="border border-gray-400 text-gray-700 px-4 py-2 rounded hover:bg-gray-100 transition"
          >
            Contact
          </button>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold text-center mb-6 text-gray-900">
          Core Features
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <Feature icon={<FaUsers size={24} className="text-gray-900" />} title="Student Management" desc="Track student records quickly." />
          <Feature icon={<FaMoneyCheckAlt size={24} className="text-gray-900" />} title="Fee Tracking" desc="Monitor payments and pending fees." />
          <Feature icon={<FaClipboardCheck size={24} className="text-gray-900" />} title="Attendance" desc="Mark attendance easily." />
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-12 px-4 text-center bg-gray-50">
        <h2 className="text-xl font-semibold mb-3 text-gray-900">Why Choose Our ERP?</h2>
        <p className="max-w-lg mx-auto text-gray-600 text-sm">
          Fast, intuitive, and easy to use. Works seamlessly with minimal setup for any school.
        </p>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-xl font-bold mb-2 text-gray-900">
          Start Managing Your School Today
        </h2>
        <p className="mb-4 max-w-lg mx-auto text-gray-600 text-sm">
          Focus on students, not paperwork. Smart School ERP helps you save time.
        </p>
        <button
          onClick={() => router.push("/login")}
          className="bg-gray-900 text-white px-5 py-2 rounded hover:bg-gray-800 transition"
        >
          Get Started
        </button>
      </section>
    </div>
  );
}

// Feature Component
function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex flex-col items-center p-4 bg-white border border-gray-100 rounded shadow-sm text-center">
      <div className="mb-2">{icon}</div>
      <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  );
}