"use client";

import Container from "@/components/container/Container";
import AdminHeading from "@/components/headings/AdminHeading";
import MainContainer from "@/components/maincontainer/MainContainer";
import useClass from "@/store/admin/class/Class";
import { useEffect, useMemo, useState } from "react";
import icons from "@/constants/icons/icons";

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
];

export default function ClassList() {
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
    subHeading: "Manage and monitor all classes",
    href: "/dashboard/admin/class/create",
    btnHeading: "Add Class",
    icon: <icons.FaRegistered />,
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <MainContainer>
        <AdminHeading heading={heading} />

        <Container>
          {/* 🔹 Top Bar (Stats + Search) */}
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between px-4">
            {/* Stats */}
            <div className="flex gap-8">
              <div>
                <p className="text-sm text-slate-500">Total Classes</p>
                <h2 className="text-2xl font-semibold text-slate-900">
                  {totalClasses}
                </h2>
              </div>

              <div>
                <p className="text-sm text-slate-500">Active Classes</p>
                <h2 className="text-2xl font-semibold text-slate-900">
                  {activeClasses}
                </h2>
              </div>
            </div>

            {/* Search */}
            <div className="relative w-full max-w-sm">
              <icons.FiSearch
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search classes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-md border border-slate-300 bg-white py-2 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-slate-200"
              />
            </div>
          </div>

          {/* 🔹 Table */}
          <div className="mx-4 overflow-hidden rounded-lg border border-slate-200 bg-white">
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                {/* Header */}
                <thead className="bg-slate-50 text-slate-500">
                  <tr>
                    <th className="px-6 py-3 font-medium">Class</th>
                    <th className="px-6 py-3 font-medium">Section</th>
                    <th className="px-6 py-3 font-medium">Room</th>
                    <th className="px-6 py-3 font-medium">Status</th>
                    <th className="px-6 py-3 text-center font-medium">
                      Actions
                    </th>
                  </tr>
                </thead>

                {/* Body */}
                <tbody>
                  {filteredClasses?.length > 0 ? (
                    filteredClasses.map((item: any) => (
                      <tr
                        key={item._id}
                        className="border-t border-slate-100 hover:bg-slate-50/60 transition"
                      >
                        <td className="px-6 py-4 font-medium text-slate-900">
                          {item.name}
                        </td>

                        <td className="px-6 py-4 text-slate-600">
                          {item.section}
                        </td>

                        <td className="px-6 py-4 text-slate-600">{item.no}</td>

                        <td className="px-6 py-4">
                          <span
                            className={`px-2 py-1 text-xs font-medium rounded-md ${
                              item.isActive
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-slate-200 text-slate-600"
                            }`}
                          >
                            {item.isActive ? "Active" : "Inactive"}
                          </span>
                        </td>

                        <td className="px-6 py-4">
                          <div className="flex justify-center gap-1">
                            <button className="p-2 text-slate-400 hover:text-slate-700 transition">
                              <icons.FiEye size={16} />
                            </button>

                            <button className="p-2 text-slate-400 hover:text-slate-700 transition">
                              <icons.FiEdit2 size={16} />
                            </button>

                            <button className="p-2 text-slate-400 hover:text-slate-700 transition">
                              <icons.FiMoreVertical size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={5}
                        className="px-6 py-10 text-center text-slate-500"
                      >
                        No classes found.
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
