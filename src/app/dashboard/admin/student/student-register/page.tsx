"use client";

import React, { useState } from "react";
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
};

const initialFormData: StudentFormData = {
  admissionNo: "",
  rollNo: "",
  firstName: "",
  lastName: "",
  gender: "",
  dob: "",
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

export default function StudentRegister() {
  const [formData, setFormData] = useState<StudentFormData>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      photo: file,
    }));
  };

  const handleReset = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Student Data:", formData);
    alert("Student Registered Successfully!");
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Student Register</h1>
        <p className="text-sm text-slate-500">
          Add complete student admission and personal details
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <SectionCard title="Student Information" icon={<FiUser size={18} />}>
          <Input
            name="admissionNo"
            label="Admission No"
            icon={<FiHash />}
            value={formData.admissionNo}
            onChange={handleChange}
          />
          <Input
            name="rollNo"
            label="Roll No"
            icon={<FiHash />}
            value={formData.rollNo}
            onChange={handleChange}
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
            label="Category / Caste"
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
          />
        </SectionCard>

        <SectionCard title="Academic Details" icon={<FiBookOpen size={18} />}>
          <Select
            name="className"
            label="Class"
            value={formData.className}
            onChange={handleChange}
            options={[
              "Nursery",
              "LKG",
              "UKG",
              "Class 1",
              "Class 2",
              "Class 3",
              "Class 4",
              "Class 5",
              "Class 6",
              "Class 7",
              "Class 8",
              "Class 9",
              "Class 10",
              "Class 11",
              "Class 12",
            ]}
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
            icon={<FiCalendar />}
            value={formData.academicYear}
            onChange={handleChange}
            placeholder="2025-26"
          />
          <Input
            name="house"
            label="House"
            icon={<FiHome />}
            value={formData.house}
            onChange={handleChange}
          />
          <Input
            name="admissionDate"
            label="Admission Date"
            type="date"
            icon={<FiCalendar />}
            value={formData.admissionDate}
            onChange={handleChange}
          />
        </SectionCard>

        <SectionCard title="Contact Details" icon={<FiPhone size={18} />}>
          <Input
            name="mobile"
            label="Student Mobile Number"
            icon={<FiPhone />}
            value={formData.mobile}
            onChange={handleChange}
          />
          <Input
            name="email"
            label="Email Address"
            type="email"
            icon={<FiMail />}
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            name="address"
            label="Address"
            icon={<FiMapPin />}
            value={formData.address}
            onChange={handleChange}
            className="md:col-span-2"
          />
          <Input
            name="city"
            label="City"
            icon={<FiMap />}
            value={formData.city}
            onChange={handleChange}
          />
          <Input
            name="state"
            label="State"
            icon={<FiMap />}
            value={formData.state}
            onChange={handleChange}
          />
          <Input
            name="pincode"
            label="Pincode"
            icon={<FiMapPin />}
            value={formData.pincode}
            onChange={handleChange}
          />
        </SectionCard>

        <SectionCard
          title="Parent / Guardian Details"
          icon={<FiUsers size={18} />}
        >
          <Input
            name="fatherName"
            label="Father Name"
            icon={<FiUsers />}
            value={formData.fatherName}
            onChange={handleChange}
          />
          <Input
            name="motherName"
            label="Mother Name"
            icon={<FiUsers />}
            value={formData.motherName}
            onChange={handleChange}
          />
          <Input
            name="guardianName"
            label="Guardian Name"
            icon={<FiUsers />}
            value={formData.guardianName}
            onChange={handleChange}
          />
          <Input
            name="parentMobile"
            label="Parent Mobile Number"
            icon={<FiPhone />}
            value={formData.parentMobile}
            onChange={handleChange}
          />
          <Input
            name="occupation"
            label="Occupation"
            icon={<FiBookOpen />}
            value={formData.occupation}
            onChange={handleChange}
          />
        </SectionCard>

        <SectionCard
          title="Medical / Emergency Details"
          icon={<FiAlertCircle size={18} />}
        >
          <Input
            name="medicalCondition"
            label="Medical Conditions"
            icon={<FiAlertCircle />}
            value={formData.medicalCondition}
            onChange={handleChange}
          />
          <Input
            name="allergies"
            label="Allergies"
            icon={<FiAlertCircle />}
            value={formData.allergies}
            onChange={handleChange}
          />
          <Input
            name="emergencyContact"
            label="Emergency Contact Number"
            icon={<FiPhone />}
            value={formData.emergencyContact}
            onChange={handleChange}
          />
          <Select
            name="transportRequired"
            label="Transport Required"
            value={formData.transportRequired}
            onChange={handleChange}
            options={["Yes", "No"]}
          />
        </SectionCard>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <div className="rounded-lg bg-slate-100 p-2 text-slate-700">
                <FiUpload size={18} />
              </div>
              <h2 className="text-lg font-semibold text-slate-800">
                Upload Student Photo
              </h2>
            </div>

            <label className="flex min-h-[180px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-6 text-center transition hover:border-slate-400 hover:bg-slate-100">
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

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Additional Notes
            </h2>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Notes
              </label>
              <div className="relative">
                <FiFileText
                  className="absolute left-4 top-4 text-slate-400"
                  size={18}
                />
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={8}
                  placeholder="Write any important notes about the student..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-slate-200 focus:bg-white"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            <FiRefreshCcw size={18} />
            Reset Form
          </button>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
          >
            <FiSave size={18} />
            Register Student
          </button>
        </div>
      </form>
    </div>
  );
}

function SectionCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center gap-3">
        <div className="rounded-lg bg-slate-100 p-2 text-slate-700">{icon}</div>
        <h2 className="text-lg font-semibold text-slate-800">{title}</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {children}
      </div>
    </div>
  );
}

function Input({
  label,
  name,
  value,
  onChange,
  icon,
  type = "text",
  placeholder = "",
  className = "",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  icon?: React.ReactNode;
  type?: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            {icon}
          </span>
        )}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-11 pr-4 text-sm outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-slate-200 focus:bg-white"
        />
      </div>
    </div>
  );
}

function Select({
  label,
  name,
  value,
  onChange,
  options,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-slate-200 focus:bg-white"
      >
        <option value="">Select {label}</option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
