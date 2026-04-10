"use client";

import Container from "@/components/container/Container";
import AdminHeading from "@/components/headings/AdminHeading";
import MainContainer from "@/components/maincontainer/MainContainer";
import useClass from "@/store/class/Class";
import React, { useEffect, useMemo, useState } from "react";
import { FaRegistered } from "react-icons/fa";
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
 const {state,getAllClass} =  useClass()

  const filteredClasses = useMemo(() => {
    return classes.filter((item) =>
      `${item.className} ${item.section} ${item.teacher} ${item.room} ${item.year}`
        .toLowerCase()
        .includes(search.toLowerCase()),
    );
  }, [classes, search]);

  const totalClasses = classes.length;
  const activeClasses = classes.filter((c) => c.status === "Active").length;
  
  const heading = {
    name: "School List",
    subHeading: "List Of Register School.",
    href: "/dashboard/admin/school/school-register",
    btnHeading: "Add School",
    icon: <FaRegistered />,
  };

  useEffect(() =>{
    getAllClass()
  },[])
  return (
    <div className="bg-white p-1">
      <MainContainer>
        <AdminHeading heading={heading}/>
        <Container>
           {/* Stats */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Total Classes</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-800">
            {totalClasses}
          </h2>
        </div>
        <div className="rounded bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">Active Classes</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-800">
            {activeClasses}
          </h2>
        </div>
     
      
      </div>

      {/* Search */}
      <div className="mb-5 rounded bg-white p-4 shadow-sm">
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
            className="w-full rounded border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-100 text-slate-600">
              <tr>
                <th className="px-5 py-4 font-semibold">Class</th>
                <th className="px-5 py-4 font-semibold">Section</th>
               
              
                <th className="px-5 py-4 font-semibold">Room</th>
                
                <th className="px-5 py-4 font-semibold">Status</th>
                <th className="px-5 py-4 font-semibold text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredClasses.length > 0 ? (
                state?.classList?.map((item) => (
                  <tr
                    key={item._id}
                    className="border-t border-slate-100 hover:bg-slate-50"
                  >
                    <td className="px-5 py-4 font-medium text-slate-800">
                      {item.name}
                    </td>
                    <td className="px-5 py-4 text-slate-600">{item.section}</td>
                   
                   
                    <td className="px-5 py-4 text-slate-600">{item.no}</td>
                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          item.isActive === true
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.isActive?"Active":"No-Active"}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button className="rounded p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-800">
                          <FiEye size={18} />
                        </button>
                        <button className="rounded p-2 text-blue-500 hover:bg-blue-50">
                          <FiEdit2 size={18} />
                        </button>
                        <button className="rounded p-2 text-red-500 hover:bg-red-50">
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

        </Container>
      </MainContainer>
      {/* Header */}
     

     
    </div>
  );
}
