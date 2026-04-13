"use client";

import React, { useEffect, useMemo, useState } from "react";
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
  _id: string;
  admissionNo: string;
  rollNo: string;
  firstName: string;
  lastName: string;
  className: string;
  section: string;
  gender: string;
  fatherName: string;
  mobile: string;
};

export default function StudentList() {
  const [search, setSearch] = useState("");
  const [selectedClass, setSelectedClass] = useState("All");
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(false);

  /* ================= FETCH DATA ================= */

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);

        const res = await fetch("/api/admin/student");
        const data = await res.json();

        if (!res.ok) throw new Error(data.message);

        setStudents(data.data);
      } catch (error) {
        console.error("Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  /* ================= FILTER ================= */

  const classOptions = ["All", ...new Set(students.map((s) => s.className))];

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchesSearch =
        `${student.firstName} ${student.lastName} ${student.admissionNo} ${student.rollNo} ${student.fatherName} ${student.mobile}`
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesClass =
        selectedClass === "All" || student.className === selectedClass;

      return matchesSearch && matchesClass;
    });
  }, [students, search, selectedClass]);

  /* ================= STATS ================= */

  const totalStudents = students.length;
  const totalClasses = new Set(students.map((s) => s.className)).size;
  const totalParents = new Set(students.map((s) => s.fatherName)).size;

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
          icon={<FiUsers />}
        />
        <StatCard title="Classes" value={totalClasses} icon={<FiBookOpen />} />
        <StatCard title="Parents" value={totalParents} icon={<FiPhone />} />
        <StatCard
          title="Loaded"
          value={loading ? 0 : totalStudents}
          icon={<FiUserCheck />}
        />
      </div>

      {/* Filters */}
      <div className="mb-5 rounded-2xl bg-white p-4 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full max-w-md">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none"
            />
          </div>

          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm md:w-56"
          >
            {classOptions.map((c) => (
              <option key={c}>{c}</option>
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
                <th className="px-5 py-4">Student</th>
                <th className="px-5 py-4">Admission</th>
                <th className="px-5 py-4">Roll</th>
                <th className="px-5 py-4">Class</th>
                <th className="px-5 py-4">Gender</th>
                <th className="px-5 py-4">Parent</th>
                <th className="px-5 py-4">Mobile</th>
                <th className="px-5 py-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student) => (
                  <tr key={student._id} className="border-t hover:bg-slate-50">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        {/* 🔥 REAL IMAGE */}
                        <img
                          src={`/api/admin/student/photo/${student._id}`}
                          alt={student.firstName}
                          className="h-10 w-10 rounded-full object-cover"
                        />

                        <div>
                          <p className="font-medium">
                            {student.firstName} {student.lastName}
                          </p>
                          <p className="text-xs text-slate-500">
                            {student.className} - {student.section}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="px-5 py-4">{student.admissionNo}</td>
                    <td className="px-5 py-4">{student.rollNo}</td>
                    <td className="px-5 py-4">
                      {student.className} - {student.section}
                    </td>
                    <td className="px-5 py-4">{student.gender}</td>
                    <td className="px-5 py-4">{student.fatherName}</td>
                    <td className="px-5 py-4">{student.mobile}</td>

                    <td className="px-5 py-4">
                      <div className="flex justify-center gap-2">
                        <button>
                          <FiEye />
                        </button>
                        <button className="text-blue-500">
                          <FiEdit2 />
                        </button>
                        <button className="text-red-500">
                          <FiTrash2 />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="text-center py-10 text-slate-500">
                    {loading ? "Loading..." : "No students found"}
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

/* ================= STAT CARD ================= */

function StatCard({ title, value, icon }: any) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="flex justify-between mb-2">
        <p className="text-sm text-slate-500">{title}</p>
        <div className="bg-slate-100 p-2 rounded">{icon}</div>
      </div>
      <h2 className="text-xl font-bold">{value}</h2>
    </div>
  );
}
