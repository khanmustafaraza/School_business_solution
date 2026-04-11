"use client";

import React, { useState } from "react";
import Container from "@/components/container/Container";
import AdminHeading from "@/components/headings/AdminHeading";
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
  FiAlertCircle,
  FiUpload,
  FiSave,
  FiRefreshCcw,
  FiHash,
  FiCalendar,
  FiMail,
  FiMapPin,
  FiMap,
  FiCreditCard,
  FiHome,
  FiFileText,
  FiShield,
} from "react-icons/fi";
import ActionBtn from "@/components/actionbtn/ActionBtn";

/* ================= TYPES ================= */

type StudentFormData = {
  admissionNo: string;
  rollNo: string;
  firstName: string;
  lastName: string;
  gender: string;
  dob: string;
  bloodGroup: string;
  religion: string;
  category: string;
  aadhaar: string;

  className: string;
  section: string;
  academicYear: string;
  house: string;
  admissionDate: string;

  mobile: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;

  fatherName: string;
  motherName: string;
  guardianName: string;
  parentMobile: string;
  occupation: string;

  medicalCondition: string;
  allergies: string;
  emergencyContact: string;
  transportRequired: string;

  notes: string;
  photo: File | null;
  feeType: string;
  totalFees: string;
  paidAmount: string;
  paymentMode: string;
  transactionId: string;
  paymentStatus: string;
};

/* ================= INITIAL ================= */

const initialFormData: StudentFormData = {
  admissionNo: "",
  rollNo: "",
  firstName: "",
  lastName: "",
  gender: "",
  dob: "",
  feeType: "",
  totalFees: "",
  paidAmount: "",
  paymentMode: "",
  transactionId: "",
  paymentStatus: "",
  bloodGroup: "",
  religion: "",
  category: "",
  aadhaar: "",

  className: "",
  section: "",
  academicYear: "",
  house: "",
  admissionDate: "",

  mobile: "",
  email: "",
  address: "",
  city: "",
  state: "",
  pincode: "",

  fatherName: "",
  motherName: "",
  guardianName: "",
  parentMobile: "",
  occupation: "",

  medicalCondition: "",
  allergies: "",
  emergencyContact: "",
  transportRequired: "",

  notes: "",
  photo: null,
};

const heading = {
  name: "Student Register",
  subHeading: "Add and manage student details.",
  href: "/dashboard/admin/student/student-list",
  btnHeading: "Student List",
  icon: <LayoutPanelTop />,
};

/* ================= COMPONENT ================= */

export default function StudentRegister() {
  const [formData, setFormData] = useState<StudentFormData>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      photo: file,
    }));
  };

  const handleReset = () => setFormData(initialFormData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Student Registered Successfully!");
  };

  return (
    <ParentContainer>
      <MainContainer>
        <AdminHeading heading={heading} />

        <Container>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Student Info */}
            <SectionCard
              title="Student Information"
              icon={<FiUser size={18} />}
            >
              <Input
                name="admissionNo"
                label="Admission No"
                icon={<FiHash />}
                value={formData.admissionNo}
                onChange={handleChange}
                placeholder="Enter admission number"
              />
              <Input
                name="rollNo"
                label="Roll No"
                icon={<FiHash />}
                value={formData.rollNo}
                onChange={handleChange}
                placeholder="Enter roll number"
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
                name="category"
                label="Category"
                icon={<FiShield />}
                value={formData.category}
                onChange={handleChange}
              />
              <Input
                name="aadhaar"
                label="Aadhaar Number"
                icon={<FiCreditCard />}
                value={formData.aadhaar}
                onChange={handleChange}
                placeholder="XXXX-XXXX-XXXX"
              />
            </SectionCard>

            {/* Academic */}
            <SectionCard
              title="Academic Details"
              icon={<FiBookOpen size={18} />}
            >
              <Select
                name="className"
                label="Class"
                value={formData.className}
                onChange={handleChange}
                options={["Class 1", "Class 2", "Class 3", "Class 4"]}
              />
              <Select
                name="section"
                label="Section"
                value={formData.section}
                onChange={handleChange}
                options={["A", "B", "C", "D"]}
              />
              <Input
                name="academicYear"
                label="Academic Year"
                value={formData.academicYear}
                onChange={handleChange}
                placeholder="2025-26"
              />
              <Input
                name="house"
                label="House"
                value={formData.house}
                onChange={handleChange}
              />
              <Input
                name="admissionDate"
                label="Admission Date"
                type="date"
                value={formData.admissionDate}
                onChange={handleChange}
              />
            </SectionCard>

            {/* Contact */}
            <SectionCard title="Contact Details" icon={<FiPhone size={18} />}>
              <Input
                name="mobile"
                label="Mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="10-digit number"
              />
              <Input
                name="email"
                label="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
              />
              <Input
                name="address"
                label="Address"
                value={formData.address}
                onChange={handleChange}
                className="md:col-span-2"
              />
              <Input
                name="city"
                label="City"
                value={formData.city}
                onChange={handleChange}
              />
              <Input
                name="state"
                label="State"
                value={formData.state}
                onChange={handleChange}
              />
              <Input
                name="pincode"
                label="Pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="110001"
              />
            </SectionCard>
            {/* Fees / Payment Details */}
            {/* <SectionCard
              title="Fees / Payment Details"
              icon={<FiCreditCard size={18} />}
            >
              <Select
                name="feeType"
                label="Fee Type"
                value={formData.feeType}
                onChange={handleChange}
                options={["Monthly", "Quarterly", "Yearly"]}
              />

              <Input
                name="totalFees"
                label="Total Fees"
                value={formData.totalFees}
                onChange={handleChange}
                type="number"
              />

              <Input
                name="paidAmount"
                label="Paid Amount"
                value={formData.paidAmount}
                onChange={handleChange}
                type="number"
              />

              <Select
                name="paymentMode"
                label="Payment Mode"
                value={formData.paymentMode}
                onChange={handleChange}
                options={["Cash", "UPI", "Card", "Bank Transfer"]}
              />

              <Input
                name="transactionId"
                label="Transaction ID"
                value={formData.transactionId}
                onChange={handleChange}
                placeholder="Optional"
              />

              <Select
                name="paymentStatus"
                label="Payment Status"
                value={formData.paymentStatus}
                onChange={handleChange}
                options={["Paid", "Pending", "Partial"]}
              />
            </SectionCard> */}

            {/* Parent */}
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
                name="guardianName"
                label="Guardian Name"
                value={formData.guardianName}
                onChange={handleChange}
              />
              <Input
                name="parentMobile"
                label="Parent Mobile"
                value={formData.parentMobile}
                onChange={handleChange}
              />
              <Input
                name="occupation"
                label="Occupation"
                value={formData.occupation}
                onChange={handleChange}
              />
            </SectionCard>

            {/* Upload + Notes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="rounded bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <div className="rounded bg-slate-100 p-2 text-slate-700">
                <FiUpload size={18} />
              </div>
              <h2 className="text-lg font-semibold text-slate-800">
                Upload Student Photo
              </h2>
            </div>

            <label className="flex cursor-pointer flex-col items-center justify-center rounded border-2 border-dashed border-slate-300 bg-slate-50 p-6 text-center transition hover:border-slate-400 hover:bg-slate-100">
              <FiUpload className="mb-3 text-slate-500" size={28} />
              <p className="text-sm font-medium text-slate-700">
                Click to upload photo
              </p>
              <p className="mt-1 text-xs text-slate-500">JPG, PNG up to 2MB</p>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>

            {formData.photo && (
              <p className="mt-3 text-sm text-slate-600">
                Selected File:{" "}
                <span className="font-medium">{formData.photo.name}</span>
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

            {/* Buttons */}
            <ActionBtn />
          </form>
        </Container>
      </MainContainer>
    </ParentContainer>
  );
}
