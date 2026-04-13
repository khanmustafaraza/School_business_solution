"use client";

import { useState } from "react";
import {
  FiUser,
  FiPhone,
  FiMail,
  FiMapPin,
  FiHome,
  FiEdit,
} from "react-icons/fi";

/* ================= DUMMY DATA ================= */

const dummyStudent = {
  admissionNo: "ADM-1023",
  rollNo: "12",
  firstName: "Ayaan",
  lastName: "Khan",
  gender: "Male",
  dob: "12 Aug 2010",
  className: "Class 8",
  section: "A",
  academicYear: "2025-26",
  mobile: "9876543210",
  email: "ayaan.khan@example.com",
  address: "Street 21, Aligarh",
  city: "Aligarh",
  state: "Uttar Pradesh",
  fatherName: "Mr. Rahman Khan",
  motherName: "Mrs. Saba Khan",
  bloodGroup: "B+",
};

/* ================= PAGE ================= */

export default function StudentDashboard() {
  const [student] = useState(dummyStudent);
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = ["Overview", "Attendance", "Results", "Fees"];

  return (
    <div className="min-h-screen bg-[#f4f6fb] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* HERO */}
        <div className="mb-8 rounded-2xl bg-white shadow-sm p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-5">
            <img
              src="https://i.pravatar.cc/150?img=12"
              className="h-20 w-20 rounded-xl object-cover"
            />

            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                {student.firstName} {student.lastName}
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                {student.className} • {student.section}
              </p>

              {/* META */}
              <div className="flex gap-4 mt-3 text-xs text-gray-500">
                <span>ID: {student.admissionNo}</span>
                <span>Year: {student.academicYear}</span>
                <span>Status: Active</span>
              </div>
            </div>
          </div>

          {/* ACTION */}
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-800 transition">
            <FiEdit size={14} />
            Edit Profile
          </button>
        </div>

        {/* TABS */}
        <div className="flex gap-6 border-b border-gray-200 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-sm transition border-b-2 ${
                activeTab === tab
                  ? "text-gray-900 border-gray-900"
                  : "text-gray-500 border-transparent hover:text-gray-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        {activeTab === "Overview" && (
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
            {/* LEFT MAIN */}
            <div className="xl:col-span-3 space-y-6">
              {/* STATS */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Stat label="Admission No" value={student.admissionNo} />
                <Stat label="Roll No" value={student.rollNo} />
                <Stat label="Blood Group" value={student.bloodGroup} />
                <Stat label="DOB" value={student.dob} />
              </div>

              {/* INFO GRID */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card title="Academic">
                  <Info label="Class" value={student.className} />
                  <Info label="Section" value={student.section} />
                  <Info label="Year" value={student.academicYear} />
                </Card>

                <Card title="Contact">
                  <Info
                    label="Mobile"
                    value={student.mobile}
                    icon={<FiPhone />}
                  />
                  <Info label="Email" value={student.email} icon={<FiMail />} />
                  <Info
                    label="Address"
                    value={`${student.address}, ${student.city}, ${student.state}`}
                    icon={<FiMapPin />}
                  />
                </Card>

                <Card title="Parents">
                  <Info
                    label="Father"
                    value={student.fatherName}
                    icon={<FiUser />}
                  />
                  <Info
                    label="Mother"
                    value={student.motherName}
                    icon={<FiHome />}
                  />
                </Card>
              </div>
            </div>

            {/* RIGHT SIDE PANEL */}
            <div className="space-y-3">
              <ActionBtn label="View Students" />
              <ActionBtn label="Mark Attendance" />
              <ActionBtn label="Enter Results" />
              <ActionBtn label="Download Report" />
            </div>
          </div>
        )}

        {/* OTHER TABS PLACEHOLDER */}
        {activeTab !== "Overview" && (
          <div className="bg-white rounded-xl p-10 text-center text-gray-400 text-sm">
            {activeTab} module coming soon
          </div>
        )}
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition">
      <h2 className="text-sm font-semibold text-gray-700 mb-4">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Info({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      {icon && <div className="mt-1 text-gray-400">{icon}</div>}
      <div>
        <p className="text-xs text-gray-400">{label}</p>
        <p className="text-sm font-medium text-gray-900">{value || "-"}</p>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
      <p className="text-xs text-gray-400">{label}</p>
      <p className="text-sm font-semibold text-gray-900 mt-1">{value}</p>
    </div>
  );
}

function ActionBtn({ label }: { label: string }) {
  return (
    <button className="w-full text-left px-4 py-3 bg-white rounded-xl shadow-sm hover:shadow-md text-sm text-gray-700 hover:bg-gray-50 transition">
      {label}
    </button>
  );
}
