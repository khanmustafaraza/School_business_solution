"use client";

import { useEffect } from "react";
import Container from "@/components/container/Container";
import MainContainer from "@/components/maincontainer/MainContainer";
import ParentContainer from "@/components/parentcontainer/ParentContainer";
import SectionCard from "@/components/sectioncard/SectionCard";
import Input from "@/components/inputs/Input";
import Select from "@/components/inputs/Select";

import { LayoutPanelTop } from "lucide-react";
import {
  FiUser,
  FiBookOpen,
  FiPhone,
  FiUsers,
  FiUpload,
  FiHash,
  FiCalendar,
  FiShield,
} from "react-icons/fi";

import ActionBtn from "@/components/actionbtn/ActionBtn";
import { useStudent } from "@/store/admin/student/Student";
import useClass from "@/store/admin/class/Class";
import { useParams } from "next/navigation";
import H1 from "@/components/headings/H1";
import Form from "@/components/formcomponent/Form";

/* ================= HEADING ================= */

const heading = {
  name: "Student Register",
  subHeading: "Add and manage student details.",
  href: "/dashboard/admin/student/student-list",
  btnHeading: "Student List",
  icon: <LayoutPanelTop />,
};

/* ================= COMPONENT ================= */

const StudentRegister = () => {
  const { state, handleChange, handleFileChange, handleSubmit } =
    useStudent();

  const params = useParams();
  const id = params?.id as string;
  console.log(params)

  const {
    state: { classList },
    getAllClass,
  } = useClass();

  useEffect(() => {
    getAllClass();
  }, []);

  const formData = state.studentObj;

  return (
    <ParentContainer>
      <MainContainer>
        <H1 heading={heading} />

        <Container>
          <Form onSubmit={(e) => handleSubmit(e, id)}>
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
                options={[
                  "A+",
                  "A-",
                  "B+",
                  "B-",
                  "AB+",
                  "AB-",
                  "O+",
                  "O-",
                ]}
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

                  {classList.map((curEle) => (
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

            <SectionCard
              title="Parent Details"
              icon={<FiUsers size={18} />}
            >
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

            <SectionCard
              title="Address Details"
              icon={<FiPhone size={18} />}
            >
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
                  <FiUpload
                    className="mb-3 text-slate-500"
                    size={28}
                  />

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

                {formData.photo && (
                  <p className="mt-3 text-sm text-slate-600">
                    Selected File:
                    <span className="font-medium ml-1">
                      {formData.photo.name}
                    </span>
                  </p>
                )}
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
        </Container>
      </MainContainer>
    </ParentContainer>
  );
};

export default StudentRegister;