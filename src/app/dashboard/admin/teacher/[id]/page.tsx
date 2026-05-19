"use client";

import React, { useState } from "react";
import {
  FiUser,
  FiBookOpen,
  FiPhone,
  FiUpload,
  FiSave,
  FiRefreshCcw,
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

  mobile: string;
  email: string;
  address: string;

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

  mobile: "",
  email: "",
  address: "",

  photo: null,
};

export default function TeacherRegister() {
  const [formData, setFormData] = useState<TeacherFormData>(initialFormData);

  const [preview, setPreview] = useState<string | null>(null);

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

    if (file) {
      if (!["image/png", "image/jpeg"].includes(file.type)) {
        alert("Only PNG and JPG files are allowed.");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be under 5MB.");
        return;
      }

      setPreview(URL.createObjectURL(file));
    }

    setFormData((prev) => ({
      ...prev,
      photo: file,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);

    alert("Teacher Registered Successfully");
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setPreview(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10">
          <span className="inline-flex rounded-md border border-slate-300 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
            School ERP
          </span>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
            Teacher Registration
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
            Add teacher details with a clean and modern interface.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 xl:grid-cols-[1fr_340px]">
            {/* Left */}
            <div className="space-y-6">
              {/* Personal */}
              <Section title="Personal Information" icon={<FiUser size={18} />}>
                <Input
                  label="Employee ID"
                  name="employeeId"
                  value={formData.employeeId}
                  onChange={handleChange}
                  placeholder="EMP-001"
                />

                <Input
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                />

                <Input
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                />

                <Select
                  label="Gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  options={["Male", "Female", "Other"]}
                />

                <Input
                  label="Date of Birth"
                  name="dob"
                  type="date"
                  value={formData.dob}
                  onChange={handleChange}
                />
              </Section>

              {/* Professional */}
              <Section
                title="Professional Details"
                icon={<FiBookOpen size={18} />}
              >
                <Input
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Mathematics"
                />

                <Input
                  label="Qualification"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  placeholder="M.Sc, B.Ed"
                />

                <Input
                  label="Experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="5 Years"
                />

                <Input
                  label="Joining Date"
                  name="joiningDate"
                  type="date"
                  value={formData.joiningDate}
                  onChange={handleChange}
                />
              </Section>

              {/* Contact */}
              <Section title="Contact Information" icon={<FiPhone size={18} />}>
                <Input
                  label="Mobile Number"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="+91 9876543210"
                />

                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="teacher@email.com"
                />

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Address
                  </label>

                  <textarea
                    name="address"
                    rows={5}
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter address..."
                    className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
                  />
                </div>
              </Section>
            </div>

            {/* Right */}
            <div className="space-y-6 xl:sticky xl:top-6 xl:h-fit">
              {/* Upload */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-lg border border-slate-200 p-2">
                    <FiUpload size={18} />
                  </div>

                  <h2 className="text-lg font-semibold text-slate-900">
                    Teacher Photo
                  </h2>
                </div>

                <label className="group flex min-h-[260px] cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 transition hover:border-slate-900">
                  <div className="mb-4 rounded-lg border border-slate-200 bg-white p-4 transition group-hover:scale-105">
                    <FiUpload size={28} className="text-slate-700" />
                  </div>

                  <h3 className="font-medium text-slate-900">
                    Upload Teacher Photo
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    PNG or JPG up to 5MB
                  </p>

                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>

                {preview && (
                  <img
                    src={preview}
                    alt="Preview"
                    className="mt-4 h-48 w-full rounded-lg object-cover"
                  />
                )}

                {formData.photo && (
                  <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                    {formData.photo.name}
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="mb-5 text-lg font-semibold text-slate-900">
                  Actions
                </h2>

                <div className="space-y-3">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3.5 text-sm font-medium text-white transition hover:bg-black active:scale-[0.98]"
                  >
                    <FiSave size={18} />
                    Register Teacher
                  </button>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 active:scale-[0.98]"
                  >
                    <FiRefreshCcw size={18} />
                    Reset Form
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

/* SECTION */

function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-lg border border-slate-200 p-2.5">{icon}</div>

        <div>
          <h2 className="text-lg font-semibold text-slate-900">{title}</h2>

          <p className="text-sm text-slate-500">Fill all required details</p>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">{children}</div>
    </div>
  );
}

/* INPUT */

type InputProps = {
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type?: string;
  placeholder?: string;
};

function Input({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
}: InputProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
      />
    </div>
  );
}

/* SELECT */

type SelectProps = {
  label: string;
  name: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  options: string[];
};

function Select({ label, name, value, onChange, options }: SelectProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
      >
        <option value="">Select {label}</option>

        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
