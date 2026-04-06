"use client";

import React, { useState } from "react";
import {
  FiFileText,
  FiUser,
  FiBookOpen,
  FiCalendar,
  FiEdit3,
  FiSave,
  FiRefreshCcw,
  FiHash,
  FiUsers,
  FiInfo,
} from "react-icons/fi";

type TCFormData = {
  tcNo: string;
  admissionNo: string;
  studentName: string;
  fatherName: string;
  motherName: string;
  className: string;
  section: string;
  dob: string;
  dateOfAdmission: string;
  dateOfIssue: string;
  lastAttendanceDate: string;
  reasonForLeaving: string;
  conduct: string;
  result: string;
  promotedTo: string;
  remarks: string;
};

const initialFormData: TCFormData = {
  tcNo: "",
  admissionNo: "",
  studentName: "",
  fatherName: "",
  motherName: "",
  className: "",
  section: "",
  dob: "",
  dateOfAdmission: "",
  dateOfIssue: "",
  lastAttendanceDate: "",
  reasonForLeaving: "",
  conduct: "",
  result: "",
  promotedTo: "",
  remarks: "",
};

export default function TCRegister() {
  const [formData, setFormData] = useState<TCFormData>(initialFormData);

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

  const handleReset = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("TC Form Data:", formData);
    alert("Transfer Certificate Created Successfully!");
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">
          Create Transfer Certificate
        </h1>
        <p className="text-sm text-slate-500">
          Generate and issue TC for students
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Certificate Details */}
        <SectionCard
          title="Certificate Details"
          icon={<FiFileText size={18} />}
        >
          <Input
            name="tcNo"
            label="TC Number"
            icon={<FiHash />}
            value={formData.tcNo}
            onChange={handleChange}
            placeholder="TC-2026-001"
          />
          <Input
            name="admissionNo"
            label="Admission Number"
            icon={<FiHash />}
            value={formData.admissionNo}
            onChange={handleChange}
            placeholder="ADM001"
          />
          <Input
            name="dateOfIssue"
            label="Date of Issue"
            icon={<FiCalendar />}
            type="date"
            value={formData.dateOfIssue}
            onChange={handleChange}
          />
        </SectionCard>

        {/* Student Details */}
        <SectionCard title="Student Details" icon={<FiUser size={18} />}>
          <Input
            name="studentName"
            label="Student Name"
            icon={<FiUser />}
            value={formData.studentName}
            onChange={handleChange}
          />
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
            name="dob"
            label="Date of Birth"
            icon={<FiCalendar />}
            type="date"
            value={formData.dob}
            onChange={handleChange}
          />
          <Input
            name="dateOfAdmission"
            label="Date of Admission"
            icon={<FiCalendar />}
            type="date"
            value={formData.dateOfAdmission}
            onChange={handleChange}
          />
          <Input
            name="lastAttendanceDate"
            label="Last Attendance Date"
            icon={<FiCalendar />}
            type="date"
            value={formData.lastAttendanceDate}
            onChange={handleChange}
          />
        </SectionCard>

        {/* Academic / Leaving Details */}
        <SectionCard
          title="Academic / Leaving Details"
          icon={<FiBookOpen size={18} />}
        >
          <Input
            name="reasonForLeaving"
            label="Reason for Leaving"
            icon={<FiEdit3 />}
            value={formData.reasonForLeaving}
            onChange={handleChange}
            placeholder="Parent Transfer / Change of School / Personal Reason"
          />
          <Select
            name="conduct"
            label="Conduct"
            value={formData.conduct}
            onChange={handleChange}
            options={["Excellent", "Very Good", "Good", "Satisfactory"]}
          />
          <Select
            name="result"
            label="Result"
            value={formData.result}
            onChange={handleChange}
            options={["Passed", "Failed", "Appeared", "Promoted"]}
          />
          <Input
            name="promotedTo"
            label="Promoted To Class"
            icon={<FiBookOpen />}
            value={formData.promotedTo}
            onChange={handleChange}
            placeholder="Class 10"
          />
        </SectionCard>

        {/* Remarks */}
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-lg bg-slate-100 p-2 text-slate-700">
              <FiInfo size={18} />
            </div>
            <h2 className="text-lg font-semibold text-slate-800">Remarks</h2>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">
              Additional Remarks
            </label>
            <textarea
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
              rows={5}
              placeholder="Write any additional notes or remarks..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-slate-200 focus:bg-white"
            />
          </div>
        </div>

        {/* Buttons */}
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
            Save TC
          </button>
        </div>
      </form>
    </div>
  );
}

/* ---------- Reusable Components ---------- */

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
}) {
  return (
    <div>
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
