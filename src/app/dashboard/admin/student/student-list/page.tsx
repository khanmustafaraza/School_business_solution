"use client";

import Container from "@/components/container/Container";
import H1 from "@/components/headings/H1";
import MainContainer from "@/components/maincontainer/MainContainer";
import ParentContainer from "@/components/parentcontainer/ParentContainer";
import TableContainer from "@/components/tables/tablecontainer/Tablecontainer";
import { useStudent } from "@/store/admin/student/Student";
import { School } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { FiEdit2, FiEye, FiTrash2 } from "react-icons/fi";
const heading = {
  name: "Studen List",
  subHeading: "Add and manage your student basic information.",
  href: "/dashboard/admin/user/user-list",
  btnHeading: "Student List",
  icon: <School />,
};

export default function StudentList() {
  const { state, getStudents } = useStudent();

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <ParentContainer>
      <MainContainer>
        <H1 heading={heading}/>
        <Container>
        <TableContainer>
  {/* ================= TABLE HEAD ================= */}

  <thead className="sticky top-0 z-10 bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow">
    <tr>
      <th className="px-5 py-4 text-left">SR No</th>
      <th className="px-5 py-4 text-left">Photo</th>
      <th className="px-5 py-4 text-left">First Name</th>
      <th className="px-5 py-4 text-left">Last Name</th>
      <th className="px-5 py-4 text-left">Gender</th>
      <th className="px-5 py-4 text-left">DOB</th>
      <th className="px-5 py-4 text-left">DOB In Words</th>
      <th className="px-5 py-4 text-left">Age</th>
      <th className="px-5 py-4 text-left">Blood Group</th>
      <th className="px-5 py-4 text-left">Religion</th>
      <th className="px-5 py-4 text-left">Caste Category</th>
      <th className="px-5 py-4 text-left">Session</th>
      <th className="px-5 py-4 text-left">Class</th>
      <th className="px-5 py-4 text-left">Section</th>
      <th className="px-5 py-4 text-left">Mother Name</th>
      <th className="px-5 py-4 text-left">Father Name</th>
      <th className="px-5 py-4 text-left">Mother Nationality</th>
      <th className="px-5 py-4 text-left">Father Nationality</th>
      <th className="px-5 py-4 text-left">Father Occupation</th>
      <th className="px-5 py-4 text-left">Mother Occupation</th>
      <th className="px-5 py-4 text-left">Mother Mobile</th>
      <th className="px-5 py-4 text-left">Father Mobile</th>
      <th className="px-5 py-4 text-left">Mother Address</th>
      <th className="px-5 py-4 text-left">Father Address</th>
      <th className="px-5 py-4 text-left">Office Address</th>
      <th className="px-5 py-4 text-left">Annual Income</th>
      <th className="px-5 py-4 text-left">Local Guardian</th>
      <th className="px-5 py-4 text-left">Guardian Address</th>
      <th className="px-5 py-4 text-left">Last School</th>
      <th className="px-5 py-4 text-left">Last School Address</th>
      <th className="px-5 py-4 text-left">CBSE</th>
      <th className="px-5 py-4 text-left">Other Board</th>
      <th className="px-5 py-4 text-left">Last Result</th>
      <th className="px-5 py-4 text-left">Percentage</th>
      <th className="px-5 py-4 text-left">Subject Offered</th>
      <th className="px-5 py-4 text-left">Mother Tongue</th>
      <th className="px-5 py-4 text-left">Home Town</th>
      <th className="px-5 py-4 text-left">Notes</th>
      <th className="px-5 py-4 text-left">Status</th>
      <th className="px-5 py-4 text-left">Created At</th>
      <th className="px-5 py-4 text-center">Actions</th>
    </tr>
  </thead>

  {/* ================= TABLE BODY ================= */}

  <tbody className="bg-white divide-y divide-slate-100">
    {state.studentList?.map((student: any, index: number) => {
      return (
        <tr
          key={student._id}
          className="hover:bg-slate-50 transition duration-200"
        >
          <td className="px-5 py-4 font-semibold">
            {student.srNo || index + 1}
          </td>

          {/* PHOTO */}

          <td className="px-5 py-4">
            <img
              src={`/api/admin/student/photo/${student._id}`}
              alt={student.firstName}
              className="h-14 w-14 rounded-2xl object-cover border-2 border-slate-200 shadow-sm"
            />
          </td>

          <td className="px-5 py-4 font-medium">
            {student.firstName}
          </td>

          <td className="px-5 py-4">
            {student.lastName}
          </td>

          <td className="px-5 py-4">
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                student.gender === "Male"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-pink-100 text-pink-700"
              }`}
            >
              {student.gender}
            </span>
          </td>

          <td className="px-5 py-4">
            {student.dob
              ? new Date(student.dob).toLocaleDateString()
              : ""}
          </td>

          <td className="px-5 py-4">
            {student.dobInWords}
          </td>

          <td className="px-5 py-4">{student.age}</td>

          <td className="px-5 py-4">
            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">
              {student.bloodGroup}
            </span>
          </td>

          <td className="px-5 py-4">
            {student.religion}
          </td>

          <td className="px-5 py-4">
            {student.casteCategory}
          </td>

          <td className="px-5 py-4">
            {student.session}
          </td>

          <td className="px-5 py-4 font-medium">
            {student.classId?.name}
          </td>

          <td className="px-5 py-4">
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold">
              {student.classId?.section}
            </span>
          </td>

          <td className="px-5 py-4">
            {student.motherName}
          </td>

          <td className="px-5 py-4">
            {student.fatherName}
          </td>

          <td className="px-5 py-4">
            {student.motherNationality}
          </td>

          <td className="px-5 py-4">
            {student.fatherNationality}
          </td>

          <td className="px-5 py-4">
            {student.fatherOccupation}
          </td>

          <td className="px-5 py-4">
            {student.motherOccupation}
          </td>

          <td className="px-5 py-4">
            {student.motherMobileNumber}
          </td>

          <td className="px-5 py-4">
            {student.fatherMobileNumber}
          </td>

          <td className="px-5 py-4 max-w-[220px] truncate">
            {student.motherPermanentAddress}
          </td>

          <td className="px-5 py-4 max-w-[220px] truncate">
            {student.fatherPermanentAddress}
          </td>

          <td className="px-5 py-4">
            {student.officeAddress}
          </td>

          <td className="px-5 py-4">
            ₹ {student.annualIncome}
          </td>

          <td className="px-5 py-4">
            {student.localGurdianName}
          </td>

          <td className="px-5 py-4">
            {student.localGurdianAddress}
          </td>

          <td className="px-5 py-4">
            {student.lastSchoolName}
          </td>

          <td className="px-5 py-4">
            {student.lastSchoolAddress}
          </td>

          <td className="px-5 py-4">
            {student.isCbse}
          </td>

          <td className="px-5 py-4">
            {student.otherBoard}
          </td>

          <td className="px-5 py-4">
            {student.lastResult}
          </td>

          <td className="px-5 py-4">
            {student.percentage}
          </td>

          <td className="px-5 py-4">
            {student.subjectOffered?.join(", ")}
          </td>

          <td className="px-5 py-4">
            {student.motherTongue}
          </td>

          <td className="px-5 py-4">
            {student.homeTown}
          </td>

          <td className="px-5 py-4 max-w-[250px] truncate">
            {student.notes}
          </td>

          {/* STATUS */}

          <td className="px-5 py-4">
            <span
              className={`rounded-full px-3 py-1 text-xs font-bold ${
                student.isActive
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {student.isActive
                ? "Active"
                : "Inactive"}
            </span>
          </td>

          {/* CREATED */}

          <td className="px-5 py-4 text-slate-500">
            {new Date(
              student.createdAt,
            ).toLocaleDateString()}
          </td>

          {/* ACTIONS */}

          <td className="px-5 py-4">
            <div className="flex items-center gap-2">
              <Link
                href={`/dashboard/admin/student/detail/${student._id}`}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-700 transition hover:bg-blue-700 hover:text-white"
              >
                <FiEye size={16} />
              </Link>

              <Link
                href={`/dashboard/admin/student/edit/${student._id}`}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-amber-700 transition hover:bg-amber-600 hover:text-white"
              >
                <FiEdit2 size={16} />
              </Link>

              <button
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-100 text-red-700 transition hover:bg-red-600 hover:text-white"
              >
                <FiTrash2 size={16} />
              </button>
            </div>
          </td>
        </tr>
      );
    })}
  </tbody>
</TableContainer>

          {/* ================= EMPTY ================= */}

          {state.studentList?.length === 0 && (
            <div className="p-6 text-center text-slate-500">
              No Students Found
            </div>
          )}
        </Container>
      </MainContainer>
    </ParentContainer>
  );
}