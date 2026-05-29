"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { School } from "lucide-react";
import {
  FiBookOpen,
  FiCalendar,
  FiEdit2,
  FiEye,
  FiGrid,
  FiHash,
  FiList,
  FiPhone,
  FiSearch,
  FiShield,
  FiTrash2,
  FiUpload,
  FiUser,
  FiUsers,
  FiFilter,
} from "react-icons/fi";

import ActionBtn from "@/components/actionbtn/ActionBtn";
import Container from "@/components/container/Container";
import Form from "@/components/formcomponent/Form";
import H1 from "@/components/headings/H1";
import Input from "@/components/inputs/Input";
import Select from "@/components/inputs/Select";
import MainContainer from "@/components/maincontainer/MainContainer";
import Modal from "@/components/modal/Modal";
import ParentContainer from "@/components/parentcontainer/ParentContainer";
import SectionCard from "@/components/sectioncard/SectionCard";

import useClass from "@/store/admin/class/Class";
import { useStudent } from "@/store/admin/student/Student";
import useModal from "@/store/togglemodal/ToggleModal";
import TableContainer from "@/components/tables/tablecontainer/Tablecontainer";

const heading = {
  name: "Student List",
  subHeading: "Add and manage your student basic information.",
  href: "/dashboard/admin/user/user-list",
  btnHeading: "Student List",
  icon: <School />,
};

export default function StudentList() {
  const [view, setView] = useState("grid");

  useEffect(() => {
    getStudents();
    getAllClass();
  }, []);

  const { state, getStudents, handleChange, handleUpdate, handleFileChange,filterStudents } =
    useStudent();

  const {
    state: { classList },
    getAllClass,
  } = useClass();

  const { openModal } = useModal();

  const formData = state.studentObj;

  return (
    <ParentContainer>
      <MainContainer>
        <H1 heading={heading} />

        <Container>
          {/* ================= FILTER UI ================= */}

          <div className="bg-white p-4 mb-5">
            <div className="flex flex-col xl:flex-row gap-4 xl:items-center xl:justify-between">
              {/* LEFT */}

              <div className="flex flex-col md:flex-row gap-3 flex-1">
                {/* SEARCH */}

                <div className="relative w-full md:max-w-sm">
                  <FiSearch
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    size={16}
                  />

                  <input
                    type="text"
                    placeholder="Search student..."
                    className="w-full border border-slate-200 rounded-md pl-10 pr-3 py-2 text-sm outline-none focus:border-blue-500"
                    onChange={(e)=>filterStudents(e.target.value)}
                  />
                </div>

                {/* CLASS */}

                <select className="border border-slate-200 rounded-md px-3 py-2 text-sm outline-none focus:border-blue-500 min-w-[170px]">
                  <option value="">All Classes</option>

                  {classList?.map((curEle: any) => (
                    <option key={curEle._id} value={curEle._id}>
                      {curEle.name} - {curEle.section}
                    </option>
                  ))}
                </select>

                {/* STATUS */}

                <select className="border border-slate-200 rounded-md px-3 py-2 text-sm outline-none focus:border-blue-500 min-w-[150px]">
                  <option value="">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>

                {/* GENDER */}

                <select className="border border-slate-200 rounded-md px-3 py-2 text-sm outline-none focus:border-blue-500 min-w-[150px]">
                  <option value="">All Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* RIGHT */}

              <div className="flex items-center gap-2">
                {/* FILTER BUTTON */}

                <button className="flex items-center gap-2 border border-slate-200 px-4 py-2 rounded-md text-sm hover:bg-slate-50 transition">
                  <FiFilter size={15} />
                  Filters
                </button>

                {/* GRID VIEW */}

                <button
                  onClick={() => setView("grid")}
                  className={`h-10 w-10 rounded-md flex items-center justify-center transition ${
                    view === "grid"
                      ? "bg-blue-600 text-white"
                      : "border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <FiGrid size={17} />
                </button>

                {/* LIST VIEW */}

                <button
                  onClick={() => setView("list")}
                  className={`h-10 w-10 rounded-md flex items-center justify-center transition ${
                    view === "list"
                      ? "bg-blue-600 text-white"
                      : "border border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <FiList size={17} />
                </button>
              </div>
            </div>
          </div>

          {/* ================= GRID VIEW ================= */}

          {view === "grid" && (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3">
              {state.studentList?.map((student: any, index: number) => {
                return (
                  <div
                    key={student._id}
                    className="bg-white border border-slate-200 rounded-md p-2.5 shadow-sm hover:shadow transition"
                  >
                    {/* TOP */}

                    <div className="flex gap-2.5">
                      {/* PHOTO */}

                      <img
                        src={`/api/admin/student/photo/${student._id}`}
                        alt={student.firstName}
                        className="h-12 w-12 rounded object-cover border"
                      />

                      {/* INFO */}

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <h2 className="text-sm font-medium truncate">
                            {student.firstName} {student.lastName}
                          </h2>

                          <span
                            className={`text-[10px] px-1.5 py-[1px] rounded-sm font-medium ${
                              student.isActive
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {student.isActive ? "Active" : "Inactive"}
                          </span>
                        </div>

                        <p className="text-[11px] text-slate-500">
                          SR: {student.srNo || index + 1}
                        </p>

                        <div className="mt-1.5 space-y-[2px] text-[11px] text-slate-600">
                          <p>
                            {student.classId?.name} - {student.classId?.section}
                          </p>

                          <p>
                            {student.gender} • Age {student.age}
                          </p>

                          <p className="truncate">{student.fatherName}</p>
                        </div>
                      </div>
                    </div>

                    {/* ACTIONS */}

                    <div className="flex justify-end gap-1.5 mt-2 pt-2 border-t border-slate-100">
                      <Link
                        href={`/dashboard/admin/student/detail/${student._id}`}
                        className="flex h-7 w-7 items-center justify-center rounded bg-blue-100 text-blue-700 hover:bg-blue-600 hover:text-white transition"
                      >
                        <FiEye size={13} />
                      </Link>

                      <button
                        onClick={() => openModal(student._id)}
                        className="flex h-7 w-7 items-center justify-center rounded bg-amber-100 text-amber-700 hover:bg-amber-600 hover:text-white transition"
                      >
                        <FiEdit2 size={13} />
                      </button>

                      <button className="flex h-7 w-7 items-center justify-center rounded bg-red-100 text-red-700 hover:bg-red-600 hover:text-white transition">
                        <FiTrash2 size={13} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* ================= LIST VIEW ================= */}

          {/* ================= LIST VIEW ================= */}

          {view === "list" && (
            <TableContainer>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[1000px] border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700">
                      <th className="text-left px-4 py-3 text-sm font-semibold">
                        Student
                      </th>

                      <th className="text-left px-4 py-3 text-sm font-semibold">
                        SR No
                      </th>

                      <th className="text-left px-4 py-3 text-sm font-semibold">
                        Class
                      </th>

                      <th className="text-left px-4 py-3 text-sm font-semibold">
                        Gender
                      </th>

                      <th className="text-left px-4 py-3 text-sm font-semibold">
                        Age
                      </th>

                      <th className="text-left px-4 py-3 text-sm font-semibold">
                        Father Name
                      </th>

                      <th className="text-left px-4 py-3 text-sm font-semibold">
                        Session
                      </th>

                      <th className="text-center px-4 py-3 text-sm font-semibold">
                        Status
                      </th>

                      <th className="text-center px-4 py-3 text-sm font-semibold">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {state.studentList?.map((student: any, index: number) => {
                      return (
                        <tr
                          key={student._id}
                          className="border-b border-slate-100 hover:bg-slate-50 transition"
                        >
                          {/* STUDENT */}

                          <td className="px-4 py-3">
                            <div className="flex items-center gap-3 min-w-[220px]">
                              <img
                                src={`/api/admin/student/photo/${student._id}`}
                                alt={student.firstName}
                                className="h-11 w-11 rounded-md object-cover border"
                              />

                              <div>
                                <h2 className="text-sm font-semibold text-slate-800">
                                  {student.firstName} {student.lastName}
                                </h2>

                                <p className="text-xs text-slate-500">
                                  {student.gender}
                                </p>
                              </div>
                            </div>
                          </td>

                          {/* SR NO */}

                          <td className="px-4 py-3 text-sm text-slate-600">
                            {student.srNo || index + 1}
                          </td>

                          {/* CLASS */}

                          <td className="px-4 py-3 text-sm text-slate-600">
                            {student.classId?.name} - {student.classId?.section}
                          </td>

                          {/* GENDER */}

                          <td className="px-4 py-3 text-sm text-slate-600">
                            {student.gender}
                          </td>

                          {/* AGE */}

                          <td className="px-4 py-3 text-sm text-slate-600">
                            {student.age}
                          </td>

                          {/* FATHER */}

                          <td className="px-4 py-3 text-sm text-slate-600">
                            {student.fatherName}
                          </td>

                          {/* SESSION */}

                          <td className="px-4 py-3 text-sm text-slate-600">
                            {student.session || "-"}
                          </td>

                          {/* STATUS */}

                          <td className="px-4 py-3 text-center">
                            <span
                              className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                                student.isActive
                                  ? "bg-green-100 text-green-700"
                                  : "bg-red-100 text-red-700"
                              }`}
                            >
                              {student.isActive ? "Active" : "Inactive"}
                            </span>
                          </td>

                          {/* ACTIONS */}

                          <td className="px-4 py-3">
                            <div className="flex items-center justify-center gap-2">
                              {/* VIEW */}

                              <Link
                                href={`/dashboard/admin/student/detail/${student._id}`}
                                className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-100 text-blue-700 hover:bg-blue-600 hover:text-white transition"
                              >
                                <FiEye size={14} />
                              </Link>

                              {/* EDIT */}

                              <button
                                onClick={() => openModal(student._id)}
                                className="flex h-8 w-8 items-center justify-center rounded-md bg-amber-100 text-amber-700 hover:bg-amber-600 hover:text-white transition"
                              >
                                <FiEdit2 size={14} />
                              </button>

                              {/* DELETE */}

                              <button className="flex h-8 w-8 items-center justify-center rounded-md bg-red-100 text-red-700 hover:bg-red-600 hover:text-white transition">
                                <FiTrash2 size={14} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </TableContainer>
          )}

          {/* ================= EMPTY ================= */}

          {state.studentList?.length === 0 && (
            <div className="p-6 text-center text-slate-500">
              No Students Found
            </div>
          )}

          {/* ================= MODAL ================= */}

          <Modal title="Edit Student Profile">
            <Form onSubmit={(e) => handleUpdate(e)}>
              {/* ================= STUDENT INFO ================= */}

              <SectionCard
                title="Student Information"
                icon={<FiUser size={18} />}
              >
                <Input
                  name="srNo"
                  label="SR No"
                  icon={<FiHash />}
                  value={formData.srNo}
                  onChange={handleChange}
                  type="number"
                />

                <Input
                  name="firstName"
                  label="First Name"
                  icon={<FiUser />}
                  value={formData.firstName}
                  onChange={handleChange}
                />

                <Input
                  name="lastName"
                  label="Last Name"
                  icon={<FiUser />}
                  value={formData.lastName}
                  onChange={handleChange}
                />

                <Select
                  name="gender"
                  label="Gender"
                  value={formData.gender}
                  onChange={handleChange}
                  options={["Male", "Female", "Other"]}
                />
              </SectionCard>

              {/* ================= PHOTO + NOTES ================= */}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="rounded bg-white p-5 shadow-sm">
                  <div className="mb-4 flex items-center gap-2">
                    <FiUpload size={18} />

                    <h2 className="text-lg font-semibold">
                      Upload Student Photo
                    </h2>
                  </div>

                  <label className="flex cursor-pointer flex-col items-center justify-center rounded border-2 border-dashed border-slate-300 bg-slate-50 p-6 text-center transition hover:border-slate-400 hover:bg-slate-100">
                    <FiUpload className="mb-3 text-slate-500" size={28} />

                    <p className="text-sm font-medium text-slate-700">
                      Click to upload photo
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      JPG, PNG up to 2MB
                    </p>

                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>

                <div className="bg-white p-5 rounded shadow-sm">
                  <h2 className="mb-3 font-semibold">Notes</h2>

                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full border rounded p-3"
                  />
                </div>
              </div>

              {/* ================= BUTTON ================= */}

              <ActionBtn />
            </Form>
          </Modal>
        </Container>
      </MainContainer>
    </ParentContainer>
  );
}
