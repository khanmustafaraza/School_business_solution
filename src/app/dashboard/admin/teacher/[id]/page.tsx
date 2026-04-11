"use client";

import React, { useState } from "react";
import {
  FiUser,
  FiBookOpen,
  FiPhone,
  FiMail,
  FiMapPin,
  FiUpload,
  FiSave,
  FiRefreshCcw,
  FiCalendar,
  FiFileText,
  FiAward,
  FiHome,
} from "react-icons/fi";

type TeacherFormData = {
  employeeId: string;
  firstName: string;
  lastName: string;
  gender: string;
  dob: string;

  subject: string;
  qualification: string;
  experience: string;
  joiningDate: string;
  department: string;

  mobile: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;

  emergencyContact: string;

  notes: string;
  photo: File | null;
};

const initialFormData: TeacherFormData = {
  employeeId: "",
  firstName: "",
  lastName: "",
  gender: "",
  dob: "",

  subject: "",
  qualification: "",
  experience: "",
  joiningDate: "",
  department: "",

  mobile: "",
  email: "",
  address: "",
  city: "",
  state: "",
  pincode: "",

  emergencyContact: "",

  notes: "",
  photo: null,
};

export default function TeacherProfile() {
  const [formData, setFormData] =
    useState<TeacherFormData>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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
    console.log("Teacher Data:", formData);
    alert("Teacher Registered Successfully!");
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">
          Teacher Register
        </h1>
        <p className="text-sm text-slate-500">
          Add complete teacher details
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Personal Info */}
        <SectionCard title="Personal Information" icon={<FiUser size={18} />}>
          <Input name="employeeId" label="Employee ID" value={formData.employeeId} onChange={handleChange} />
          <Input name="firstName" label="First Name" value={formData.firstName} onChange={handleChange} />
          <Input name="lastName" label="Last Name" value={formData.lastName} onChange={handleChange} />
          <Select name="gender" label="Gender" value={formData.gender} onChange={handleChange} options={["Male", "Female", "Other"]} />
          <Input name="dob" label="Date of Birth" type="date" value={formData.dob} onChange={handleChange} />
        </SectionCard>

        {/* Professional */}
        <SectionCard title="Professional Details" icon={<FiBookOpen size={18} />}>
          <Input name="subject" label="Subject" value={formData.subject} onChange={handleChange} />
          <Input name="department" label="Department" value={formData.department} onChange={handleChange} />
          <Input name="qualification" label="Qualification" value={formData.qualification} onChange={handleChange} />
          <Input name="experience" label="Experience (Years)" value={formData.experience} onChange={handleChange} />
          <Input name="joiningDate" label="Joining Date" type="date" value={formData.joiningDate} onChange={handleChange} />
        </SectionCard>

        {/* Contact */}
        <SectionCard title="Contact Details" icon={<FiPhone size={18} />}>
          <Input name="mobile" label="Mobile Number" value={formData.mobile} onChange={handleChange} />
          <Input name="email" label="Email" type="email" value={formData.email} onChange={handleChange} />
          <Input name="address" label="Address" value={formData.address} onChange={handleChange} className="md:col-span-2" />
          <Input name="city" label="City" value={formData.city} onChange={handleChange} />
          <Input name="state" label="State" value={formData.state} onChange={handleChange} />
          <Input name="pincode" label="Pincode" value={formData.pincode} onChange={handleChange} />
        </SectionCard>

        {/* Emergency */}
        <SectionCard title="Emergency Details" icon={<FiPhone size={18} />}>
          <Input name="emergencyContact" label="Emergency Contact" value={formData.emergencyContact} onChange={handleChange} />
        </SectionCard>

        {/* Upload + Notes */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* Upload */}
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <FiUpload size={18} />
              <h2 className="text-lg font-semibold text-slate-800">
                Upload Photo
              </h2>
            </div>

            <label className="flex min-h-[180px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-6 text-center hover:border-slate-400">
              <FiUpload size={28} className="mb-2 text-slate-500" />
              Click to upload
              <input type="file" className="hidden" onChange={handleFileChange} />
            </label>

            {formData.photo && (
              <p className="mt-2 text-sm">{formData.photo.name}</p>
            )}
          </div>

          {/* Notes */}
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-lg font-semibold text-slate-800">
              Notes
            </h2>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={7}
              className="w-full rounded-xl border border-slate-200 p-3"
              placeholder="Write notes..."
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center justify-center gap-2 rounded-xl border px-5 py-3"
          >
            <FiRefreshCcw /> Reset
          </button>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-white"
          >
            <FiSave /> Register Teacher
          </button>
        </div>
      </form>
    </div>
  );
}

/* Reusable Components */

function SectionCard({ title, icon, children }: any) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center gap-3">
        <div className="bg-slate-100 p-2 rounded-lg">{icon}</div>
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {children}
      </div>
    </div>
  );
}

function Input({ label, name, value, onChange, type = "text", className = "" }: any) {
  return (
    <div className={className}>
      <label className="text-sm font-medium">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full mt-1 p-2 border rounded-xl"
      />
    </div>
  );
}

function Select({ label, name, value, onChange, options }: any) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full mt-1 p-2 border rounded-xl"
      >
        <option value="">Select {label}</option>
        {options.map((o: string) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}