"use client";

import React, { useMemo, useState } from "react";
import {
  FiSearch,
  FiEye,
  FiEdit2,
  FiTrash2,
  FiFileText,
  FiUserCheck,
  FiCalendar,
  FiUsers,
} from "react-icons/fi";

type TCItem = {
  id: number;
  tcNo: string;
  admissionNo: string;
  studentName: string;
  className: string;
  section: string;
  fatherName: string;
  issueDate: string;
  reason: string;
  status: "Issued" | "Pending";
};

const initialTCs: TCItem[] = [
  {
    id: 1,
    tcNo: "TC-2026-001",
    admissionNo: "ADM001",
    studentName: "Ahmed Raza",
    className: "Class 9",
    section: "A",
    fatherName: "Mr. Rashid",
    issueDate: "2026-04-01",
    reason: "Parent Transfer",
    status: "Issued",
  },
  {
    id: 2,
    tcNo: "TC-2026-002",
    admissionNo: "ADM002",
    studentName: "Fatima Noor",
    className: "Class 10",
    section: "B",
    fatherName: "Mr. Kareem",
    issueDate: "2026-04-03",
    reason: "Change of School",
    status: "Issued",
  },
  {
    id: 3,
    tcNo: "TC-2026-003",
    admissionNo: "ADM003",
    studentName: "Zayan Ali",
    className: "Class 8",
    section: "C",
    fatherName: "Mr. Nadeem",
    issueDate: "2026-04-05",
    reason: "Relocation",
    status: "Pending",
  },
];

export default function TCList() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [tcs] = useState<TCItem[]>(initialTCs);

  const filteredTCs = useMemo(() => {
    return tcs.filter((item) => {
      const matchesSearch =
        `${item.tcNo} ${item.admissionNo} ${item.studentName} ${item.fatherName} ${item.reason}`
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || item.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [tcs, search, statusFilter]);

  const totalTCs = tcs.length;
  const issuedTCs = tcs.filter((t) => t.status === "Issued").length;
  const pendingTCs = tcs.filter((t) => t.status === "Pending").length;
  const uniqueStudents = new Set(tcs.map((t) => t.studentName)).size;

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">
          Transfer Certificate List
        </h1>
        <p className="text-sm text-slate-500">
          View and manage all issued transfer certificates
        </p>
      </div>

      {/* Stats */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total TCs"
          value={totalTCs}
          icon={<FiFileText size={20} />}
        />
        <StatCard
          title="Issued"
          value={issuedTCs}
          icon={<FiUserCheck size={20} />}
        />
        <StatCard
          title="Pending"
          value={pendingTCs}
          icon={<FiCalendar size={20} />}
        />
        <StatCard
          title="Students"
          value={uniqueStudents}
          icon={<FiUsers size={20} />}
        />
      </div>

      {/* Search + Filter */}
      <div className="mb-5 rounded-2xl bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full max-w-md">
            <FiSearch
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search by TC no, student, admission no..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-slate-200 focus:bg-white"
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-slate-200 focus:bg-white md:w-56"
          >
            <option value="All">All Status</option>
            <option value="Issued">Issued</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-100 text-slate-600">
              <tr>
                <th className="px-5 py-4 font-semibold">TC No</th>
                <th className="px-5 py-4 font-semibold">Admission No</th>
                <th className="px-5 py-4 font-semibold">Student Name</th>
                <th className="px-5 py-4 font-semibold">Class</th>
                <th className="px-5 py-4 font-semibold">Father Name</th>
                <th className="px-5 py-4 font-semibold">Issue Date</th>
                <th className="px-5 py-4 font-semibold">Reason</th>
                <th className="px-5 py-4 font-semibold">Status</th>
                <th className="px-5 py-4 font-semibold text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTCs.length > 0 ? (
                filteredTCs.map((item) => (
                  <tr
                    key={item.id}
                    className="border-t border-slate-100 hover:bg-slate-50"
                  >
                    <td className="px-5 py-4 font-medium text-slate-800">
                      {item.tcNo}
                    </td>
                    <td className="px-5 py-4 text-slate-600">
                      {item.admissionNo}
                    </td>
                    <td className="px-5 py-4 text-slate-600">
                      {item.studentName}
                    </td>
                    <td className="px-5 py-4 text-slate-600">
                      {item.className} - {item.section}
                    </td>
                    <td className="px-5 py-4 text-slate-600">
                      {item.fatherName}
                    </td>
                    <td className="px-5 py-4 text-slate-600">
                      {item.issueDate}
                    </td>
                    <td className="px-5 py-4 text-slate-600">{item.reason}</td>
                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          item.status === "Issued"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-800">
                          <FiEye size={18} />
                        </button>
                        <button className="rounded-lg p-2 text-blue-500 hover:bg-blue-50">
                          <FiEdit2 size={18} />
                        </button>
                        <button className="rounded-lg p-2 text-red-500 hover:bg-red-50">
                          <FiTrash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={9}
                    className="px-5 py-10 text-center text-slate-500"
                  >
                    No transfer certificates found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm text-slate-500">{title}</p>
        <div className="rounded-xl bg-slate-100 p-2 text-slate-700">{icon}</div>
      </div>
      <h2 className="text-2xl font-bold text-slate-800">{value}</h2>
    </div>
  );
}
