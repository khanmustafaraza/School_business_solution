"use client";

import React, { useMemo, useState } from "react";
import {
  FiSearch,
  FiEye,
  FiEdit2,
  FiTrash2,
  FiUsers,
  FiUserCheck,
  FiBookOpen,
  FiPhone,
} from "react-icons/fi";

type Student = {
  id: number;
  admissionNo: string;
  rollNo: string;
  name: string;
  className: string;
  section: string;
  gender: "Male" | "Female" | "Other";
  parentName: string;
  mobile: string;
  status: "Active" | "Inactive";
  photo: string;
};

const initialStudents: Student[] = [
  {
    id: 1,
    admissionNo: "ADM001",
    rollNo: "01",
    name: "Ahmed Raza",
    className: "Class 9",
    section: "A",
    gender: "Male",
    parentName: "Mr. Rashid",
    mobile: "9876543210",
    status: "Active",
    photo: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: 2,
    admissionNo: "ADM002",
    rollNo: "02",
    name: "Fatima Noor",
    className: "Class 10",
    section: "B",
    gender: "Female",
    parentName: "Mrs. Shabana",
    mobile: "9876543211",
    status: "Active",
    photo: "https://i.pravatar.cc/100?img=32",
  },
  {
    id: 3,
    admissionNo: "ADM003",
    rollNo: "03",
    name: "Zayan Ali",
    className: "Class 8",
    section: "C",
    gender: "Male",
    parentName: "Mr. Nadeem",
    mobile: "9876543212",
    status: "Inactive",
    photo: "https://i.pravatar.cc/100?img=15",
  },
  {
    id: 4,
    admissionNo: "ADM004",
    rollNo: "04",
    name: "Areeba Khan",
    className: "Class 7",
    section: "A",
    gender: "Female",
    parentName: "Mr. Salman",
    mobile: "9876543213",
    status: "Active",
    photo: "https://i.pravatar.cc/100?img=47",
  },
  {
    id: 5,
    admissionNo: "ADM005",
    rollNo: "05",
    name: "Hamza Siddiqui",
    className: "Class 9",
    section: "B",
    gender: "Male",
    parentName: "Mr. Tariq",
    mobile: "9876543214",
    status: "Active",
    photo: "https://i.pravatar.cc/100?img=18",
  },
];

export default function StudentList() {
  const [search, setSearch] = useState("");
  const [selectedClass, setSelectedClass] = useState("All");
  const [students] = useState<Student[]>(initialStudents);

  const classOptions = ["All", ...new Set(students.map((s) => s.className))];

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchesSearch =
        `${student.name} ${student.admissionNo} ${student.rollNo} ${student.parentName} ${student.mobile}`
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesClass =
        selectedClass === "All" || student.className === selectedClass;

      return matchesSearch && matchesClass;
    });
  }, [students, search, selectedClass]);

  const totalStudents = students.length;
  const activeStudents = students.filter((s) => s.status === "Active").length;
  const totalClasses = new Set(students.map((s) => s.className)).size;
  const totalParents = new Set(students.map((s) => s.parentName)).size;

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Student List</h1>
        <p className="text-sm text-slate-500">
          View and manage all registered students
        </p>
      </div>

      {/* Stats */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Students"
          value={totalStudents}
          icon={<FiUsers size={20} />}
        />
        <StatCard
          title="Active Students"
          value={activeStudents}
          icon={<FiUserCheck size={20} />}
        />
        <StatCard
          title="Classes"
          value={totalClasses}
          icon={<FiBookOpen size={20} />}
        />
        <StatCard
          title="Parents"
          value={totalParents}
          icon={<FiPhone size={20} />}
        />
      </div>

      {/* Filters */}
      <div className="mb-5 rounded-2xl bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full max-w-md">
            <FiSearch
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search by name, admission no, parent..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
            />
          </div>

          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition focus:border-slate-400 focus:bg-white md:w-56"
          >
            {classOptions.map((classItem) => (
              <option key={classItem} value={classItem}>
                {classItem}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-100 text-slate-600">
              <tr>
                <th className="px-5 py-4 font-semibold">Student</th>
                <th className="px-5 py-4 font-semibold">Admission No</th>
                <th className="px-5 py-4 font-semibold">Roll No</th>
                <th className="px-5 py-4 font-semibold">Class</th>
                <th className="px-5 py-4 font-semibold">Gender</th>
                <th className="px-5 py-4 font-semibold">Parent</th>
                <th className="px-5 py-4 font-semibold">Mobile</th>
                <th className="px-5 py-4 font-semibold">Status</th>
                <th className="px-5 py-4 font-semibold text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <tr
                    key={student.id}
                    className="border-t border-slate-100 hover:bg-slate-50"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={student.photo}
                          alt={student.name}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium text-slate-800">
                            {student.name}
                          </p>
                          <p className="text-xs text-slate-500">
                            {student.className} - {student.section}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-slate-600">
                      {student.admissionNo}
                    </td>
                    <td className="px-5 py-4 text-slate-600">
                      {student.rollNo}
                    </td>
                    <td className="px-5 py-4 text-slate-600">
                      {student.className} - {student.section}
                    </td>
                    <td className="px-5 py-4 text-slate-600">
                      {student.gender}
                    </td>
                    <td className="px-5 py-4 text-slate-600">
                      {student.parentName}
                    </td>
                    <td className="px-5 py-4 text-slate-600">
                      {student.mobile}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          student.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {student.status}
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
                    No students found.
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

/* ---------- Reusable Stat Card ---------- */

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
