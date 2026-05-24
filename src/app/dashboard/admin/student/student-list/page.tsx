"use client";

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
import TableContainer from "@/components/tables/tablecontainer/Tablecontainer";
import useClass from "@/store/admin/class/Class";
import { useStudent } from "@/store/admin/student/Student";
import useModal from "@/store/togglemodal/ToggleModal";
import { School } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import {
  FiBookOpen,
  FiCalendar,
  FiEdit2,
  FiEye,
  FiHash,
  FiPhone,
  FiShield,
  FiTrash2,
  FiUpload,
  FiUser,
  FiUsers,
} from "react-icons/fi";
const heading = {
  name: "Studen List",
  subHeading: "Add and manage your student basic information.",
  href: "/dashboard/admin/user/user-list",
  btnHeading: "Student List",
  icon: <School />,
};

export default function StudentList() {
  useEffect(() => {
    getStudents();
    getAllClass();
  }, []);
  const { state, getStudents, handleChange, handleUpdate,handleFileChange } = useStudent();
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

                    <td className="px-5 py-4">{student.lastName}</td>

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

                    <td className="px-5 py-4">{student.dobInWords}</td>

                    <td className="px-5 py-4">{student.age}</td>

                    <td className="px-5 py-4">
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">
                        {student.bloodGroup}
                      </span>
                    </td>

                    <td className="px-5 py-4">{student.religion}</td>

                    <td className="px-5 py-4">{student.casteCategory}</td>

                    <td className="px-5 py-4">{student.session}</td>

                    <td className="px-5 py-4 font-medium">
                      {student.classId?.name}
                    </td>

                    <td className="px-5 py-4">
                      <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {student.classId?.section}
                      </span>
                    </td>

                    <td className="px-5 py-4">{student.motherName}</td>

                    <td className="px-5 py-4">{student.fatherName}</td>

                    <td className="px-5 py-4">{student.motherNationality}</td>

                    <td className="px-5 py-4">{student.fatherNationality}</td>

                    <td className="px-5 py-4">{student.fatherOccupation}</td>

                    <td className="px-5 py-4">{student.motherOccupation}</td>

                    <td className="px-5 py-4">{student.motherMobileNumber}</td>

                    <td className="px-5 py-4">{student.fatherMobileNumber}</td>

                    <td className="px-5 py-4 max-w-[220px] truncate">
                      {student.motherPermanentAddress}
                    </td>

                    <td className="px-5 py-4 max-w-[220px] truncate">
                      {student.fatherPermanentAddress}
                    </td>

                    <td className="px-5 py-4">{student.officeAddress}</td>

                    <td className="px-5 py-4">₹ {student.annualIncome}</td>

                    <td className="px-5 py-4">{student.localGurdianName}</td>

                    <td className="px-5 py-4">{student.localGurdianAddress}</td>

                    <td className="px-5 py-4">{student.lastSchoolName}</td>

                    <td className="px-5 py-4">{student.lastSchoolAddress}</td>

                    <td className="px-5 py-4">{student.isCbse}</td>

                    <td className="px-5 py-4">{student.otherBoard}</td>

                    <td className="px-5 py-4">{student.lastResult}</td>

                    <td className="px-5 py-4">{student.percentage}</td>

                    <td className="px-5 py-4">
                      {student.subjectOffered?.join(", ")}
                    </td>

                    <td className="px-5 py-4">{student.motherTongue}</td>

                    <td className="px-5 py-4">{student.homeTown}</td>

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
                        {student.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>

                    {/* CREATED */}

                    <td className="px-5 py-4 text-slate-500">
                      {new Date(student.createdAt).toLocaleDateString()}
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

                        <button
                          onClick={() => openModal(student._id)}
                          className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-amber-700 transition hover:bg-amber-600 hover:text-white"
                        >
                          <FiEdit2 size={16} />
                        </button>

                        <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-100 text-red-700 transition hover:bg-red-600 hover:text-white">
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

          {/* Modal */}

          <Modal title="Edit Student Profile">
            <Form onSubmit={(e)=>handleUpdate(e)}>
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

                <Input
                  name="dob"
                  label="Date of Birth"
                  type="date"
                  icon={<FiCalendar />}
                  value={formData.dob}
                  onChange={handleChange}
                />

                <Input
                  name="dobInWords"
                  label="DOB In Words"
                  value={formData.dobInWords}
                  onChange={handleChange}
                />

                <Input
                  name="age"
                  label="Age"
                  value={formData.age}
                  onChange={handleChange}
                />

                <Select
                  name="bloodGroup"
                  label="Blood Group"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  options={["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]}
                />

                <Input
                  name="religion"
                  label="Religion"
                  icon={<FiShield />}
                  value={formData.religion}
                  onChange={handleChange}
                />

                <Input
                  name="casteCategory"
                  label="Caste Category"
                  icon={<FiShield />}
                  value={formData.casteCategory}
                  onChange={handleChange}
                />

                <Input
                  name="motherTongue"
                  label="Mother Tongue"
                  value={formData.motherTongue}
                  onChange={handleChange}
                />

                <Input
                  name="homeTown"
                  label="Home Town"
                  value={formData.homeTown}
                  onChange={handleChange}
                />
              </SectionCard>

              {/* ================= ACADEMIC ================= */}

              <SectionCard
                title="Academic Details"
                icon={<FiBookOpen size={18} />}
              >
                <div className="flex flex-col">
                  <label className="mb-1">Select Class & Section</label>

                  <select
                    name="classId"
                    value={formData.classId}
                    onChange={handleChange}
                    className="border border-gray-200 w-full px-2 py-2 rounded"
                  >
                    <option value="">Class & Section</option>

                    {classList?.map((curEle) => (
                      <option key={curEle._id} value={curEle._id}>
                        {curEle.name} - {curEle.section}
                      </option>
                    ))}
                  </select>
                </div>

                <Input
                  name="session"
                  label="Session"
                  value={formData.session}
                  onChange={handleChange}
                />

                <Input
                  name="lastSchoolName"
                  label="Last School Name"
                  value={formData.lastSchoolName}
                  onChange={handleChange}
                />

                <Input
                  name="lastSchoolAddress"
                  label="Last School Address"
                  value={formData.lastSchoolAddress}
                  onChange={handleChange}
                />

                <Select
                  name="isCbse"
                  label="CBSE"
                  value={formData.isCbse}
                  onChange={handleChange}
                  options={["Yes", "No"]}
                />

                <Input
                  name="otherBoard"
                  label="Other Board"
                  value={formData.otherBoard}
                  onChange={handleChange}
                />

                <Input
                  name="lastResult"
                  label="Last Result"
                  value={formData.lastResult}
                  onChange={handleChange}
                />

                <Input
                  name="percentage"
                  label="Percentage"
                  value={formData.percentage}
                  onChange={handleChange}
                />
              </SectionCard>

              {/* ================= PARENT DETAILS ================= */}

              <SectionCard title="Parent Details" icon={<FiUsers size={18} />}>
                <Input
                  name="fatherName"
                  label="Father Name"
                  value={formData.fatherName}
                  onChange={handleChange}
                />

                <Input
                  name="motherName"
                  label="Mother Name"
                  value={formData.motherName}
                  onChange={handleChange}
                />

                <Input
                  name="fatherMobileNumber"
                  label="Father Mobile Number"
                  value={formData.fatherMobileNumber}
                  onChange={handleChange}
                />

                <Input
                  name="motherMobileNumber"
                  label="Mother Mobile Number"
                  value={formData.motherMobileNumber}
                  onChange={handleChange}
                />

                <Input
                  name="fatherOccupation"
                  label="Father Occupation"
                  value={formData.fatherOccupation}
                  onChange={handleChange}
                />

                <Input
                  name="motherOccupation"
                  label="Mother Occupation"
                  value={formData.motherOccupation}
                  onChange={handleChange}
                />

                <Input
                  name="fatherNationality"
                  label="Father Nationality"
                  value={formData.fatherNationality}
                  onChange={handleChange}
                />

                <Input
                  name="motherNationality"
                  label="Mother Nationality"
                  value={formData.motherNationality}
                  onChange={handleChange}
                />

                <Input
                  name="annualIncome"
                  label="Annual Income"
                  value={formData.annualIncome}
                  onChange={handleChange}
                />
              </SectionCard>

              {/* ================= ADDRESS ================= */}

              <SectionCard title="Address Details" icon={<FiPhone size={18} />}>
                <Input
                  name="fatherPermanentAddress"
                  label="Father Permanent Address"
                  value={formData.fatherPermanentAddress}
                  onChange={handleChange}
                />

                <Input
                  name="motherPermanentAddress"
                  label="Mother Permanent Address"
                  value={formData.motherPermanentAddress}
                  onChange={handleChange}
                />

                <Input
                  name="officeAddress"
                  label="Office Address"
                  value={formData.officeAddress}
                  onChange={handleChange}
                />

                <Input
                  name="localGurdianName"
                  label="Local Guardian Name"
                  value={formData.localGurdianName}
                  onChange={handleChange}
                />

                <Input
                  name="localGurdianAddress"
                  label="Local Guardian Address"
                  value={formData.localGurdianAddress}
                  onChange={handleChange}
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

                  {/* {formData.photo && (
                    <p className="mt-3 text-sm text-slate-600">
                      Selected File:
                      <span className="font-medium ml-1">
                        {formData?.photo?.name}
                      </span>
                    </p>
                  )} */}
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
