"use client";

import React, { useMemo, useState } from "react";
import { FiSearch, FiPlus, FiEdit2, FiTrash2, FiEye } from "react-icons/fi";

type ClassItem = {
  id: number;
  className: string;
  section: string;
  teacher: string;
  students: number;
  room: string;
  year: string;
  status: "Active" | "Inactive";
};

const initialData: ClassItem[] = [
  {
    id: 1,
    className: "Class 1",
    section: "A",
    teacher: "Mrs. Aisha Khan",
    students: 32,
    room: "101",
    year: "2025-26",
    status: "Active",
  },
  {
    id: 2,
    className: "Class 2",
    section: "B",
    teacher: "Mr. Imran Ali",
    students: 28,
    room: "102",
    year: "2025-26",
    status: "Active",
  },
  {
    id: 3,
    className: "Class 5",
    section: "A",
    teacher: "Mrs. Sana Fatima",
    students: 35,
    room: "203",
    year: "2025-26",
    status: "Active",
  },
  {
    id: 4,
    className: "Class 9",
    section: "B",
    teacher: "Mr. Arif Hussain",
    students: 30,
    room: "305",
    year: "2025-26",
    status: "Inactive",
  },
];

export default function ClassList() {
  const [search, setSearch] = useState("");
  const [classes] = useState<ClassItem[]>(initialData);

  const filteredClasses = useMemo(() => {
    return classes.filter((item) =>
      `${item.className} ${item.section} ${item.teacher} ${item.room} ${item.year}`
        .toLowerCase()
        .includes(search.toLowerCase()),
    );
  }, [classes, search]);

  const totalClasses = classes.length;
  const activeClasses = classes.filter((c) => c.status === "Active").length;
  const totalStudents = classes.reduce((sum, c) => sum + c.students, 0);
  const totalTeachers = new Set(classes.map((c) => c.teacher)).size;

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Class List</h1>
          <p className="text-sm text-slate-500">
            Manage all school classes and sections
          </p>
        </div>

        <button className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90">
          <FiPlus size={18} />
          Add New Class
        </button>
      </div>

      {/* Stats */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Total Classes</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-800">
            {totalClasses}
          </h2>
        </div>
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Active Classes</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-800">
            {activeClasses}
          </h2>
        </div>
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Total Students</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-800">
            {totalStudents}
          </h2>
        </div>
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Teachers Assigned</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-800">
            {totalTeachers}
          </h2>
        </div>
      </div>

      {/* Search */}
      <div className="mb-5 rounded-2xl bg-white p-4 shadow-sm">
        <div className="relative w-full max-w-md">
          <FiSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search by class, teacher, room..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-100 text-slate-600">
              <tr>
                <th className="px-5 py-4 font-semibold">Class</th>
                <th className="px-5 py-4 font-semibold">Section</th>
                <th className="px-5 py-4 font-semibold">Teacher</th>
                <th className="px-5 py-4 font-semibold">Students</th>
                <th className="px-5 py-4 font-semibold">Room</th>
                <th className="px-5 py-4 font-semibold">Year</th>
                <th className="px-5 py-4 font-semibold">Status</th>
                <th className="px-5 py-4 font-semibold text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredClasses.length > 0 ? (
                filteredClasses.map((item) => (
                  <tr
                    key={item.id}
                    className="border-t border-slate-100 hover:bg-slate-50"
                  >
                    <td className="px-5 py-4 font-medium text-slate-800">
                      {item.className}
                    </td>
                    <td className="px-5 py-4 text-slate-600">{item.section}</td>
                    <td className="px-5 py-4 text-slate-600">{item.teacher}</td>
                    <td className="px-5 py-4 text-slate-600">
                      {item.students}
                    </td>
                    <td className="px-5 py-4 text-slate-600">{item.room}</td>
                    <td className="px-5 py-4 text-slate-600">{item.year}</td>
                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          item.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
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
                    colSpan={8}
                    className="px-5 py-10 text-center text-slate-500"
                  >
                    No classes found.
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
