"use client";

import React, { useState } from "react";
import {
  FiArrowRight,
  FiBookOpen,
  FiCalendar,
  FiFileText,
  FiSave,
  FiUser,
  FiAward,
  FiActivity,
  FiShield,
  FiCheckCircle,
} from "react-icons/fi";

type TCFormData = {
  tcNo: string;
  admissionNo: string;
  pupilName: string;
  fatherName: string;
  motherName: string;
  category: string;
  dob: string;
  admissionDate: string;
  admissionClass: string;
  lastClass: string;
  result: string;
  conduct: string;
  reason: string;
  issueDate: string;
};

const initialData: TCFormData = {
  tcNo: "",
  admissionNo: "",
  pupilName: "",
  fatherName: "",
  motherName: "",
  category: "",
  dob: "",
  admissionDate: "",
  admissionClass: "",
  lastClass: "",
  result: "",
  conduct: "",
  reason: "",
  issueDate: "",
};

export default function TCRegister() {
  const [formData, setFormData] = useState<TCFormData>(initialData);
  const [isSaving, setIsSaving] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 1200);
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* BACKGROUND GLOWS */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[150px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[130px]" />
      </div>

      {/* TOPBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-[#090d16]/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-500/20">
              <FiFileText size={18} />
            </div>
            <div>
              <h1 className="text-sm font-semibold tracking-wide bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Transfer Certificate Portal
              </h1>
              <p className="text-[11px] font-medium text-slate-500 tracking-wider uppercase">
                School ERP v2.0
              </p>
            </div>
          </div>

          <button
            onClick={handleSave}
            className="group relative flex items-center gap-2 overflow-hidden rounded-xl bg-slate-100 px-4 py-2 text-xs font-semibold text-slate-950 transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-white/5 active:scale-98"
          >
            {isSaving ? (
              <>
                <div className="h-3 w-3 animate-spin rounded-full border-2 border-slate-950 border-t-transparent" />
                Processing...
              </>
            ) : (
              <>
                <FiSave className="transition-transform group-hover:-translate-y-0.5" />
                Save Certificate
              </>
            )}
          </button>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="relative z-10 mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-10">
        {/* HERO BANNER */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-900/60 to-slate-950/80 p-6 sm:p-8 shadow-2xl backdrop-blur-md">
          <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-indigo-500/5 to-transparent pointer-events-none" />

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-3.5 inline-flex items-center gap-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-[11px] font-medium tracking-wide text-indigo-400 backdrop-blur">
                <span className="w-1 h-1 rounded-full bg-indigo-400 animate-pulse" />
                Automated Registration Engine
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Generate Secure Digital Transfer Certificates
              </h2>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400 max-w-xl">
                Create, audit, and issue institution-graded transit records
                instantly. Input field values below to update the ecosystem and
                live preview parameters.
              </p>
            </div>

            {/* QUICK STATS */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:w-auto w-full">
              <StatCard
                value="2.4k"
                label="Issued"
                icon={<FiCheckCircle className="text-emerald-400" />}
              />
              <StatCard
                value="99.9%"
                label="Accuracy"
                icon={<FiShield className="text-indigo-400" />}
              />
              <StatCard
                value="24/7"
                label="Uptime"
                icon={<FiActivity className="text-violet-400" />}
              />
            </div>
          </div>
        </div>

        {/* WORKSPACE MATRIX */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]">
          {/* LEFT: FORM PIPELINE */}
          <div className="space-y-6">
            {/* Student Info */}
            <GlassCard
              title="Student Identity Registry"
              description="Personal core legal definitions"
              icon={<FiUser />}
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Input
                  label="Full Name of Pupil"
                  name="pupilName"
                  placeholder="e.g., Alexander Wright"
                  value={formData.pupilName}
                  onChange={handleChange}
                />
                <Input
                  label="Father / Guardian Name"
                  name="fatherName"
                  placeholder="e.g., Robert Wright"
                  value={formData.fatherName}
                  onChange={handleChange}
                />
                <Input
                  label="Mother Name"
                  name="motherName"
                  placeholder="e.g., Eleanor Wright"
                  value={formData.motherName}
                  onChange={handleChange}
                />
                <Select
                  label="Social Category / Caste"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  options={["GENERAL", "OBC", "SC", "ST"]}
                />
                <Input
                  label="Date Of Birth"
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                />
                <Input
                  label="Admission Number"
                  name="admissionNo"
                  placeholder="e.g., ADM-2024-890"
                  value={formData.admissionNo}
                  onChange={handleChange}
                />
              </div>
            </GlassCard>

            {/* Academic Track */}
            <GlassCard
              title="Academic Chronology"
              description="Institutional performance logs"
              icon={<FiBookOpen />}
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Input
                  label="Date of Admission"
                  type="date"
                  name="admissionDate"
                  value={formData.admissionDate}
                  onChange={handleChange}
                />
                <Input
                  label="Class Assigned at Entry"
                  name="admissionClass"
                  placeholder="e.g., Grade 6 (Sec A)"
                  value={formData.admissionClass}
                  onChange={handleChange}
                />
                <Input
                  label="Last Extant Studied Class"
                  name="lastClass"
                  placeholder="e.g., Grade 8 (Sec B)"
                  value={formData.lastClass}
                  onChange={handleChange}
                />
                <Input
                  label="Final Exam Result Status"
                  name="result"
                  placeholder="e.g., Promoted to Grade 9"
                  value={formData.result}
                  onChange={handleChange}
                />
                <Select
                  label="General Conduct & Demeanor"
                  name="conduct"
                  value={formData.conduct}
                  onChange={handleChange}
                  options={["Excellent", "Good", "Average"]}
                />
                <Input
                  label="Reason For Disenrollment"
                  name="reason"
                  placeholder="e.g., Relocation of Family"
                  value={formData.reason}
                  onChange={handleChange}
                />
              </div>
            </GlassCard>

            {/* Certificate Logistics */}
            <GlassCard
              title="Document Manifest & Metadata"
              description="System dispatch keys"
              icon={<FiCalendar />}
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Input
                  label="Certificate Serial Number (TC No)"
                  name="tcNo"
                  placeholder="e.g., TC-991A"
                  value={formData.tcNo}
                  onChange={handleChange}
                />
                <Input
                  label="Official Date of Issue"
                  type="date"
                  name="issueDate"
                  value={formData.issueDate}
                  onChange={handleChange}
                />
              </div>
            </GlassCard>
          </div>

          {/* RIGHT: LIVE INTERACTIVE PREVIEW */}
          <div className="lg:sticky lg:top-24 space-y-6 self-start">
            {/* Live Document Preview Engine */}
            <div className="group relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/40 p-1 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-indigo-500/30">
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800/60">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50 animate-pulse" />
                  <p className="text-xs font-semibold tracking-wide text-slate-300 uppercase">
                    Live Document Mirror
                  </p>
                </div>
                <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-400 font-mono">
                  WYSIWYG
                </span>
              </div>

              {/* SIMULATED PHYSICAL CERTIFICATE SHEET */}
              <div className="p-4 bg-gradient-to-b from-slate-950 to-slate-900/90 m-1 rounded-2xl border border-slate-800/40 min-h-[420px] flex flex-col justify-between">
                {/* Header Graphic */}
                <div className="text-center pb-4 border-b border-dashed border-slate-800">
                  <p className="text-[10px] tracking-widest text-indigo-400 font-bold uppercase font-mono">
                    TRANSFER CERTIFICATE
                  </p>
                  <p className="text-[13px] font-bold text-slate-200 mt-1">
                    MODERN EDUCATION ACADEMY
                  </p>
                  <div className="mt-2 flex justify-between text-[9px] text-slate-500 font-mono px-1">
                    <span>
                      TC No:{" "}
                      <span className="text-slate-300 font-bold">
                        {formData.tcNo || "——"}
                      </span>
                    </span>
                    <span>
                      Adm No:{" "}
                      <span className="text-slate-300 font-bold">
                        {formData.admissionNo || "——"}
                      </span>
                    </span>
                  </div>
                </div>

                {/* Body Content Fields */}
                <div className="my-5 space-y-3.5 text-xs">
                  <PreviewRow
                    label="Name of Scholar"
                    value={formData.pupilName}
                  />
                  <PreviewRow
                    label="Guardian / Father"
                    value={formData.fatherName}
                  />
                  <PreviewRow
                    label="Chronological DOB"
                    value={formData.dob}
                    isDate
                  />
                  <PreviewRow
                    label="Last Class Passed"
                    value={formData.lastClass}
                  />
                  <PreviewRow label="Academic Result" value={formData.result} />
                  <PreviewRow
                    label="General Conduct"
                    value={formData.conduct}
                    highlighted
                  />
                </div>

                {/* Footnotes */}
                <div className="pt-4 border-t border-slate-900 flex items-end justify-between">
                  <div className="space-y-0.5">
                    <p className="text-[9px] text-slate-500 uppercase tracking-wider">
                      Date of Issue
                    </p>
                    <p className="text-xs font-semibold text-slate-300">
                      {formData.issueDate || "Not dated"}
                    </p>
                  </div>
                  <div className="text-right opacity-40 group-hover:opacity-100 transition-opacity duration-500">
                    <FiAward className="inline-block text-2xl text-indigo-400" />
                    <p className="text-[8px] tracking-wide text-slate-400 font-mono mt-0.5">
                      VERIFIED RECORD
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* PERSISTENCE CTA BOX */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-white via-slate-100 to-slate-200 p-6 text-slate-950 shadow-xl shadow-white/5">
              <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl" />

              <p className="text-[11px] font-bold tracking-wider text-indigo-600 uppercase">
                System Finalization
              </p>
              <h3 className="mt-1.5 text-lg font-bold tracking-tight leading-snug">
                Ready to commit record to cloud database?
              </h3>

              <button
                onClick={handleSave}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 py-3 text-xs font-semibold text-white transition-all duration-300 hover:bg-slate-900 hover:shadow-lg shadow-md active:scale-98"
              >
                {isSaving ? "Syncing..." : "Finalize & Generate Secure Link"}
                <FiArrowRight className="text-xs group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

/* ==========================================
   ENHANCED SUB-ATOMIC UI COMPONENTS 
========================================== */

function GlassCard({
  title,
  description,
  icon,
  children,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-800/80 bg-slate-900/20 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-slate-800">
      <div className="flex items-center gap-3.5 border-b border-slate-800/60 p-5 sm:p-6">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-800/60 text-indigo-400 border border-slate-700/30">
          {icon}
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-slate-200">
            {title}
          </h3>
          <p className="text-[11px] text-slate-500">{description}</p>
        </div>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}

function Input({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className="space-y-2">
      <label className="block text-[11px] font-semibold tracking-wider uppercase text-slate-400">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="h-11 w-full rounded-xl border border-slate-800 bg-slate-950/40 px-3.5 text-xs text-slate-200 placeholder:text-slate-600 outline-none transition-all duration-200 focus:border-indigo-500/50 focus:bg-slate-950/80 focus:ring-1 focus:ring-indigo-500/20"
      />
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
    <div className="space-y-2">
      <label className="block text-[11px] font-semibold tracking-wider uppercase text-slate-400">
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="h-11 w-full rounded-xl border border-slate-800 bg-slate-950/40 px-3.5 text-xs text-slate-200 outline-none transition-all duration-200 focus:border-indigo-500/50 focus:bg-slate-950"
      >
        <option value="" className="bg-slate-950">
          Unspecified
        </option>
        {options.map((item) => (
          <option
            key={item}
            value={item}
            className="bg-slate-950 text-slate-300"
          >
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

function StatCard({
  value,
  label,
  icon,
}: {
  value: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-800/60 bg-slate-900/30 p-3 backdrop-blur-sm min-w-[90px] sm:min-w-[110px]">
      <div className="text-sm shrink-0">{icon}</div>
      <div>
        <h4 className="text-sm font-bold text-white tracking-tight">{value}</h4>
        <p className="text-[10px] font-medium text-slate-500 mt-0.5">{label}</p>
      </div>
    </div>
  );
}

function PreviewRow({
  label,
  value,
  highlighted = false,
  isDate = false,
}: {
  label: string;
  value: string;
  highlighted?: boolean;
  isDate?: boolean;
}) {
  let displayValue = value || "————————";

  if (value && isDate) {
    try {
      displayValue = new Date(value).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      displayValue = value;
    }
  }

  return (
    <div className="flex items-center justify-between gap-4 py-1.5 border-b border-slate-900/60 last:border-0">
      <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wide shrink-0">
        {label}
      </span>
      <span
        className={`text-xs font-mono font-medium text-right truncate max-w-[180px] ${
          highlighted
            ? "text-indigo-400 font-bold"
            : value
              ? "text-slate-300"
              : "text-slate-700 font-normal"
        }`}
      >
        {displayValue}
      </span>
    </div>
  );
}
