"use client";

import Container from "@/components/container/Container";
import AdminHeading from "@/components/headings/AdminHeading";
import MainContainer from "@/components/maincontainer/MainContainer";
import useClass from "@/store/admin/class/Class";
import { useEffect, useMemo, useState } from "react";
import icons from "@/constants/icons/icons";
import { useRouter } from "next/navigation";

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
];

export default function ClassList() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [classes] = useState<ClassItem[]>(initialData);

  const { state, getAllClass } = useClass();

  useEffect(() => {
    getAllClass();
  }, []);

  const filteredClasses = useMemo(() => {
    return state?.classList?.filter((item: any) =>
      `${item.name} ${item.section} ${item.no}`
        .toLowerCase()
        .includes(search.toLowerCase()),
    );
  }, [state?.classList, search]);

  const totalClasses = state?.classList?.length || 0;

  const activeClasses =
    state?.classList?.filter((c: any) => c.isActive)?.length || 0;

  const heading = {
    name: "Classes",
    subHeading: "Manage classes, monitor sections & students",
    href: "/dashboard/admin/class/create",
    btnHeading: "Add Class",
    icon: <icons.FaRegistered />,
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">

      <MainContainer>

        <AdminHeading heading={heading} />

        <Container>

          {/* HERO SECTION */}

          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#003366] via-[#0f3f73] to-[#001933] p-8 shadow-[0_20px_80px_rgba(0,51,102,0.25)]">

            {/* GLOW */}

            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl"></div>

            <div className="relative z-10 flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">

              {/* LEFT */}

              <div>

                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-xl">

                  <div className="h-2 w-2 rounded-full bg-emerald-400"></div>

                  <span className="text-xs font-medium text-white/80">
                    School ERP • Class Management
                  </span>

                </div>

                <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white">

                  Manage all school classes from one beautiful dashboard

                </h1>

                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70">

                  Track sections, monitor active classrooms, manage student
                  allocations and access complete class-wise records instantly.

                </p>

              </div>

              {/* RIGHT STATS */}

              <div className="grid grid-cols-2 gap-4">

                {/* TOTAL */}

                <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">

                  <div className="flex items-center justify-between">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">

                      <icons.FaSchool size={24} />

                    </div>

                    <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                      +12%
                    </span>

                  </div>

                  <h2 className="mt-6 text-4xl font-bold text-white">
                    {totalClasses}
                  </h2>

                  <p className="mt-2 text-sm text-white/70">
                    Total Classes
                  </p>

                </div>

                {/* ACTIVE */}

                <div className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">

                  <div className="flex items-center justify-between">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white">

                      <icons.FiUsers size={24} />

                    </div>

                    <span className="rounded-full bg-pink-400/20 px-3 py-1 text-xs font-semibold text-pink-300">
                      Live
                    </span>

                  </div>

                  <h2 className="mt-6 text-4xl font-bold text-white">
                    {activeClasses}
                  </h2>

                  <p className="mt-2 text-sm text-white/70">
                    Active Classes
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* SEARCH BAR */}

          <div className="mt-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            {/* LEFT */}

            <div>

              <h2 className="text-2xl font-bold text-slate-900">
                Class Directory
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Click any class row to view all students
              </p>

            </div>

            {/* SEARCH */}

            <div className="relative w-full max-w-md">

              <icons.FiSearch
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />

              <input
                type="text"
                placeholder="Search class, section, room..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-4 text-sm shadow-sm outline-none transition-all duration-300 focus:border-[#003366] focus:ring-4 focus:ring-[#003366]/10"
              />

            </div>

          </div>

          {/* TABLE */}

          <div className="mt-8 overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_10px_60px_rgba(0,0,0,0.05)]">

            {/* TABLE TOP */}

            <div className="flex items-center justify-between border-b border-slate-100 px-8 py-6">

              <div>

                <h3 className="text-lg font-semibold text-slate-900">
                  Classes Overview
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Elegant overview of all academic classes
                </p>

              </div>

              <div className="hidden items-center gap-3 rounded-2xl bg-emerald-50 px-5 py-3 lg:flex">

                <div className="h-3 w-3 rounded-full bg-emerald-500"></div>

                <span className="text-sm font-semibold text-emerald-700">
                  {activeClasses} Classes Running
                </span>

              </div>

            </div>

            {/* TABLE */}

            <div className="overflow-x-auto">

              <table className="min-w-full">

                {/* HEADER */}

                <thead className="bg-slate-50/80">

                  <tr>

                    <th className="px-8 py-5 text-left text-xs font-bold uppercase tracking-[2px] text-slate-500">
                      Class
                    </th>

                    <th className="px-8 py-5 text-left text-xs font-bold uppercase tracking-[2px] text-slate-500">
                      Section
                    </th>

                    <th className="px-8 py-5 text-left text-xs font-bold uppercase tracking-[2px] text-slate-500">
                      Room
                    </th>

                    <th className="px-8 py-5 text-left text-xs font-bold uppercase tracking-[2px] text-slate-500">
                      Status
                    </th>

                    <th className="px-8 py-5 text-center text-xs font-bold uppercase tracking-[2px] text-slate-500">
                      Students
                    </th>

                    <th className="px-8 py-5 text-center text-xs font-bold uppercase tracking-[2px] text-slate-500">
                      Actions
                    </th>

                  </tr>

                </thead>

                {/* BODY */}

                <tbody className="divide-y divide-slate-100">

                  {filteredClasses?.length > 0 ? (
                    filteredClasses.map((item: any, index: number) => (

                      <tr
                        key={item._id}
                        onClick={() =>
                          router.push(
                            `/dashboard/admin/class/${item._id}/students`
                          )
                        }
                        className="group cursor-pointer transition-all duration-300 hover:bg-[#f8fbff]"
                      >

                        {/* CLASS */}

                        <td className="px-8 py-6">

                          <div className="flex items-center gap-4">

                            {/* ICON */}

                            <div className="relative">

                              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#003366] to-[#0d4d8d] text-white shadow-lg">

                                <icons.FaChalkboardTeacher size={20} />

                              </div>

                              <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white bg-emerald-500"></div>

                            </div>

                            {/* INFO */}

                            <div>

                              <h4 className="text-base font-semibold text-slate-900 transition group-hover:text-[#003366]">
                                {item.name}
                              </h4>

                              <p className="mt-1 text-xs text-slate-400">
                                Academic Session 2025-26
                              </p>

                            </div>

                          </div>

                        </td>

                        {/* SECTION */}

                        <td className="px-8 py-6">

                          <span className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-2 text-xs font-semibold text-indigo-700">

                            Section {item.section}

                          </span>

                        </td>

                        {/* ROOM */}

                        <td className="px-8 py-6">

                          <div className="flex items-center gap-2 text-slate-700">

                            <icons.FiHome size={16} />

                            <span className="font-medium">
                              Room {item.no}
                            </span>

                          </div>

                        </td>

                        {/* STATUS */}

                        <td className="px-8 py-6">

                          <span
                            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold
                            ${
                              item.isActive
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >

                            <div
                              className={`h-2.5 w-2.5 rounded-full
                              ${
                                item.isActive
                                  ? "bg-emerald-500"
                                  : "bg-red-500"
                              }`}
                            ></div>

                            {item.isActive ? "Active" : "Inactive"}

                          </span>

                        </td>

                        {/* STUDENTS */}

                        <td className="px-8 py-6 text-center">

                          <div className="inline-flex items-center rounded-2xl bg-slate-100 px-5 py-3">

                            <span className="text-base font-bold text-slate-800">
                              {item.students || 0}
                            </span>

                            <span className="ml-2 text-xs text-slate-500">
                              Students
                            </span>

                          </div>

                        </td>

                        {/* ACTIONS */}

                        <td className="px-8 py-6">

                          <div className="flex items-center justify-center gap-3">

                            {/* VIEW */}

                            <button
                              onClick={(e) => {
                                e.stopPropagation();

                                router.push(
                                  `/dashboard/admin/student/view-students/${item._id}`
                                );
                              }}
                              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef4ff] text-[#003366] shadow-sm transition-all duration-300 hover:scale-105 hover:bg-[#003366] hover:text-white"
                            >

                              <icons.FiEye size={17} />

                            </button>

                            {/* EDIT */}

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                              className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 shadow-sm transition-all duration-300 hover:scale-105 hover:bg-slate-900 hover:text-white"
                            >

                              <icons.FiEdit2 size={17} />

                            </button>

                          </div>

                        </td>

                      </tr>

                    ))
                  ) : (

                    <tr>

                      <td
                        colSpan={6}
                        className="py-28 text-center"
                      >

                        <div className="flex flex-col items-center justify-center">

                          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-slate-100">

                            <icons.FaSchool
                              className="text-slate-400"
                              size={40}
                            />

                          </div>

                          <h3 className="mt-6 text-2xl font-bold text-slate-800">
                            No Classes Found
                          </h3>

                          <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-500">
                            No academic classes are available right now.
                            Create a new class to start managing students.
                          </p>

                        </div>

                      </td>

                    </tr>

                  )}

                </tbody>

              </table>

            </div>

          </div>

        </Container>

      </MainContainer>

    </div>
  );
}