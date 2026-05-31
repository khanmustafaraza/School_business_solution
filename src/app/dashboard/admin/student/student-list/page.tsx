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
import { FaPlus } from "react-icons/fa";
import H2 from "@/components/headings/H2";
import SearchContainer from "@/components/searchcontainer/SearchContainer";
import TableHeader from "@/components/tables/tableheader/TableHeader";
import { useToggle } from "@/store/toggledashboard/Toggledashboard";
const studentColumns = [
  { label: "Student" },
  { label: "SR No" },
  { label: "Class" },
  { label: "Gender" },
  { label: "Age" },
  { label: "Father Name" },
  { label: "Session" },
  { label: "Status" },
  { label: "Action" },
];

const heading = {
  name: "Student List",
  subHeading: "Add and manage your student basic information.",
  href: "/dashboard/admin/user/user-list",
  btnHeading: "Student Register",
  icon: <FaPlus />,
};

export default function StudentList() {
  // const [view, setView] = useState("grid");

  useEffect(() => {
    getStudents();
    getAllClass();
  }, []);

  const {
    state,
    getStudents,
    handleChange,
    handleUpdate,
    handleFileChange,
    filterStudents,
  } = useStudent();

  const {
    state: { classList },
    getAllClass,
  } = useClass();

  const { openModal } = useModal();
 const {view} = useToggle()

  const formData = state.studentObj;

  return (
    <ParentContainer>
      <MainContainer>
        <H1 heading={heading} />
        <H2 title="Total Students" total={state.studentList.length} />
        <SearchContainer
          onChange={() => console.log("firsr")}
          placeholder="Search For ....."
          title="Students Filter"
        >
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
        </SearchContainer>

        <Container>
          {view == "list" && (
            <TableContainer>
              <TableHeader columns={studentColumns} />
              <tbody className="bg-white dark:bg-slate-900">
                {state.studentList?.map((student: any, index: number) => (
                  <tr
                    key={student._id}
                    className="hover:bg-slate-50 dark:hover:bg-slate-800/40"
                  >
                    {/* PHOTO + NAME */}
                    <td className="border px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={`/api/admin/student/photo/${student._id}`}
                          alt={student.firstName}
                          className="h-10 w-10 rounded-full border object-cover"
                        />

                        <div>
                          <span className="font-semibold">
                            {student.firstName} {student.lastName}
                          </span>
                          <p className="text-xs text-gray-500">
                            {student.gender}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* SR NO */}
                    <td className="border px-6 py-4">
                      {student.srNo || index + 1}
                    </td>

                    {/* CLASS */}
                    <td className="border px-6 py-4">
                      <span className="rounded bg-indigo-50 px-3 py-1 text-sm text-indigo-700">
                        {student.classId?.name} - {student.classId?.section}
                      </span>
                    </td>

                    {/* GENDER */}
                    <td className="border px-6 py-4">{student.gender}</td>

                    {/* AGE */}
                    <td className="border px-6 py-4">{student.age}</td>

                    {/* FATHER */}
                    <td className="border px-6 py-4">{student.fatherName}</td>

                    {/* SESSION */}
                    <td className="border px-6 py-4">
                      {student.session || "-"}
                    </td>

                    {/* STATUS */}
                    <td className="border px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          student.isActive
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {student.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>

                    {/* ACTION */}
                    <td className="border px-6 py-4">
                      <div className="flex justify-end gap-3">
                        <Link
                          href={`/dashboard/admin/student/detail/${student._id}`}
                          className="text-[#003366] hover:text-blue-700"
                        >
                          <FiEye />
                        </Link>

                        <button
                          onClick={() => openModal(student._id)}
                          className="text-amber-600 hover:text-amber-800"
                        >
                          <FiEdit2 />
                        </button>

                        <button className="text-red-600 hover:text-red-800">
                          <FiTrash2 />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </TableContainer>
          )}

          {/* ================= GRID VIEW ================= */}

        {
  view === "grid" && (
    <div className="flex flex-wrap gap-5">
      {state.studentList?.map((student: any, index: number) => (
        <div
          key={student._id}
          className="w-[300px] rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
        >
          {/* Header */}
          <div className="mb-4 flex items-center gap-3">
            <img
              src={`/api/admin/student/photo/${student._id}`}
              alt={student.firstName}
              className="h-14 w-14 rounded-full border object-cover"
            />

            <div>
              <h3 className="font-semibold text-slate-800 dark:text-white">
                {student.firstName} {student.lastName}
              </h3>

              <p className="text-xs text-slate-500">
                SR No: {student.srNo || index + 1}
              </p>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-500">Class</span>
              <span className="font-medium">
                {student.classId?.name} - {student.classId?.section}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">Gender</span>
              <span>{student.gender}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">Father</span>
              <span>{student.fatherName}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">Mobile</span>
              <span>{student.fatherMobileNumber || "-"}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">Blood Group</span>
              <span>{student.bloodGroup || "-"}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">Session</span>
              <span>{student.session || "-"}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-slate-500">Status</span>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  student.isActive
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {student.isActive ? "Active" : "Inactive"}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-5 flex justify-end gap-4 border-t pt-4">
            <Link
              href={`/dashboard/admin/student/detail/${student._id}`}
              className="text-[#003366] transition hover:scale-110 hover:text-blue-700"
            >
              <FiEye />
            </Link>

            <button
              onClick={() => openModal(student._id)}
              className="text-amber-600 transition hover:scale-110 hover:text-amber-800"
            >
              <FiEdit2 />
            </button>

            <button className="text-red-600 transition hover:scale-110 hover:text-red-800">
              <FiTrash2 />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

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
