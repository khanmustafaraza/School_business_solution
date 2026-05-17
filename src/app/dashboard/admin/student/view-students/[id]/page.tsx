"use client";

import Container from "@/components/container/Container";
import MainContainer from "@/components/maincontainer/MainContainer";
import ParentContainer from "@/components/parentcontainer/ParentContainer";
import Loader from "@/components/loader/Loader";
import icons from "@/constants/icons/icons";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const ViewStudents = () => {

  // URL PARAMS

  const params = useParams();
  const id = params?.id;
  console.log("id?????????",id)

  // STATES

  const [students, setStudents] = useState<any[]>([]);
  const [classData, setClassData] = useState<any>(null);

  const [loading, setLoading] = useState(false);

  // ================= FETCH STUDENTS =================

 const getStudents = async () => {

  try {

    setLoading(true);

    const response = await fetch(
      `/api/admin/student/view-students/${id}`,
      {
        method: "GET",
      }
    );

    const data = await response.json();

    console.log(data);

    if (data.success) {

      setStudents(data.students || []);
      setClassData(data.classData);

    }

  } catch (error) {

    console.log(error);

  } finally {

    setLoading(false);

  }

};

  // ================= USE EFFECT =================

  useEffect(() => {

    if (id) {
      getStudents();
    }

  }, [id]);

  return (
    <ParentContainer>

      <MainContainer>

        {/* LOADER */}

        {
          loading && (
            <Loader
              isLoading={loading}
              message="Loading Students..."
            />
          )
        }

        {/* HERO */}

        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#003366] via-[#0f3f73] to-[#001933] p-8 shadow-[0_20px_80px_rgba(0,51,102,0.25)]">

          {/* GLOW */}

          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl"></div>

          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            {/* LEFT */}

            <div>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-xl">

                <div className="h-2 w-2 rounded-full bg-emerald-400"></div>

                <span className="text-xs font-medium text-white/80">
                  Student Management
                </span>

              </div>

              <h1 className="text-4xl font-bold text-white">
                {classData?.name || "Class"}
              </h1>

              <p className="mt-3 text-base text-white/70">
                Section {classData?.section || "-"} • Room {classData?.no || "-"}
              </p>

            </div>

            {/* RIGHT */}

            <div className="rounded-3xl border border-white/10 bg-white/10 px-8 py-6 backdrop-blur-xl">

              <p className="text-sm text-white/70">
                Total Students
              </p>

              <h2 className="mt-2 text-5xl font-bold text-white">
                {students.length}
              </h2>

            </div>

          </div>

        </div>

        {/* TABLE */}

        <Container>

          <div className="mt-8 overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_10px_60px_rgba(0,0,0,0.05)]">

            {/* TOP */}

            <div className="flex items-center justify-between border-b border-slate-100 px-8 py-6">

              <div>

                <h2 className="text-xl font-bold text-slate-900">
                  Students List
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  All students inside this class
                </p>

              </div>

              <div className="rounded-2xl bg-[#eef4ff] px-5 py-3">

                <span className="text-sm font-semibold text-[#003366]">
                  {students.length} Students
                </span>

              </div>

            </div>

            {/* TABLE */}

            <div className="overflow-x-auto">

              <table className="min-w-full">

                {/* HEADER */}

                <thead className="bg-slate-50">

                  <tr>

                    <th className="px-8 py-5 text-left text-xs font-bold uppercase tracking-[2px] text-slate-500">
                      Student
                    </th>

                    <th className="px-8 py-5 text-left text-xs font-bold uppercase tracking-[2px] text-slate-500">
                      Roll No
                    </th>

                    <th className="px-8 py-5 text-left text-xs font-bold uppercase tracking-[2px] text-slate-500">
                      Gender
                    </th>

                    <th className="px-8 py-5 text-left text-xs font-bold uppercase tracking-[2px] text-slate-500">
                      Mobile
                    </th>

                    <th className="px-8 py-5 text-center text-xs font-bold uppercase tracking-[2px] text-slate-500">
                      Status
                    </th>

                    <th className="px-8 py-5 text-center text-xs font-bold uppercase tracking-[2px] text-slate-500">
                      Actions
                    </th>

                  </tr>

                </thead>

                {/* BODY */}

                <tbody className="divide-y divide-slate-100">

                  {
                    students.length > 0 ? (

                      students.map((item: any, index: number) => (

                        <tr
                          key={item._id}
                          className="group transition-all duration-300 hover:bg-[#f8fbff]"
                        >

                          {/* STUDENT */}

                          <td className="px-8 py-6">

                            <div className="flex items-center gap-4">

                              {/* AVATAR */}

                              <div className="relative">

                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#003366] to-[#0d4d8d] text-lg font-bold text-white shadow-lg">

                                  {
                                    item?.firstName?.charAt(0)?.toUpperCase()
                                  }

                                </div>

                                <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white bg-emerald-500"></div>

                              </div>

                              {/* INFO */}

                              <div>

                                <h4 className="text-base font-semibold text-slate-900">
                                  {item.firstName} {item.lastName}
                                </h4>

                                <p className="mt-1 text-xs text-slate-400">
                                  Admission No : {item.admissionNo}
                                </p>

                              </div>

                            </div>

                          </td>

                          {/* ROLL */}

                          <td className="px-8 py-6">

                            <span className="font-medium text-slate-700">
                              {item.rollNo || "-"}
                            </span>

                          </td>

                          {/* GENDER */}

                          <td className="px-8 py-6">

                            <span className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-2 text-xs font-semibold text-indigo-700">

                              {item.gender || "-"}

                            </span>

                          </td>

                          {/* MOBILE */}

                          <td className="px-8 py-6">

                            <span className="font-medium text-slate-700">
                              {item.mobile || "-"}
                            </span>

                          </td>

                          {/* STATUS */}

                          <td className="px-8 py-6 text-center">

                            <span
                              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold ${
                                item.isActive
                                  ? "bg-emerald-100 text-emerald-700"
                                  : "bg-red-100 text-red-700"
                              }`}
                            >

                              <div
                                className={`h-2.5 w-2.5 rounded-full ${
                                  item.isActive
                                    ? "bg-emerald-500"
                                    : "bg-red-500"
                                }`}
                              ></div>

                              {
                                item.isActive
                                  ? "Active"
                                  : "Inactive"
                              }

                            </span>

                          </td>

                          {/* ACTIONS */}

                          <td className="px-8 py-6">

                            <div className="flex items-center justify-center gap-3">

                              {/* VIEW */}

                              <button className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef4ff] text-[#003366] shadow-sm transition-all duration-300 hover:scale-105 hover:bg-[#003366] hover:text-white">

                                <icons.FiEye size={17} />

                              </button>

                              {/* EDIT */}

                              <button className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 shadow-sm transition-all duration-300 hover:scale-105 hover:bg-slate-900 hover:text-white">

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

                              <icons.FiUsers
                                className="text-slate-400"
                                size={40}
                              />

                            </div>

                            <h3 className="mt-6 text-2xl font-bold text-slate-800">
                              No Students Found
                            </h3>

                            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-500">
                              No students are assigned to this class right now.
                            </p>

                          </div>

                        </td>

                      </tr>

                    )
                  }

                </tbody>

              </table>

            </div>

          </div>

        </Container>

      </MainContainer>

    </ParentContainer>
  );
};

export default ViewStudents;