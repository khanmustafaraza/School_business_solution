"use client";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { useState } from "react";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaSchool,
} from "react-icons/fa";

export default function AdmissionPage() {
  const [form, setForm] = useState({
    studentName: "",
    parentName: "",
    phone: "",
    email: "",
    class: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(form);
    alert("Admission enquiry submitted!");
  };

  return (
    <>
      <Navbar />

     <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">
  <div className="w-full max-w-6xl bg-white border border-slate-200 shadow-sm grid lg:grid-cols-2">

    {/* LEFT SIDE IMAGE */}
    <div className="hidden lg:block relative">
      <img
        src="https://images.unsplash.com/photo-1588072432836-e10032774350"
        alt="School"
        className="h-full w-full object-cover"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/30 flex items-end p-6">
        <div className="text-white">
          <h3 className="text-xl font-semibold">
            Join Our School Community
          </h3>
          <p className="text-sm mt-1 opacity-90">
            Quality education with modern learning methods.
          </p>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE FORM */}
    <div className="p-8 lg:p-10">
      <h2 className="text-2xl font-bold text-slate-900">
        Admission Enquiry
      </h2>
      <p className="text-sm text-slate-600 mt-1">
        Fill the form and we’ll get back to you.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">

        <InputField
          icon={<FaUser />}
          name="studentName"
          placeholder="Student Name"
          onChange={handleChange}
        />

        <InputField
          icon={<FaUser />}
          name="parentName"
          placeholder="Parent Name"
          onChange={handleChange}
        />

        <div className="grid grid-cols-2 gap-4">
          <InputField
            icon={<FaPhone />}
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
          />

          <InputField
            icon={<FaEnvelope />}
            name="email"
            placeholder="Email"
            onChange={handleChange}
            type="email"
          />
        </div>

        <div className="relative">
          <FaSchool className="absolute left-3 top-3 text-slate-400 text-sm" />
          <select
            name="class"
            onChange={handleChange}
            required
            className="w-full border border-slate-300 pl-10 pr-3 py-2 text-sm focus:outline-none focus:border-slate-500"
          >
            <option value="">Select Class</option>
            <option>Nursery</option>
            <option>LKG</option>
            <option>UKG</option>
            <option>Class 1</option>
            <option>Class 2</option>
            <option>Class 3</option>
          </select>
        </div>

        <textarea
          name="message"
          placeholder="Additional Message"
          onChange={handleChange}
          rows={3}
          className="w-full border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:border-slate-500"
        />

        <button className="w-full bg-slate-900 text-white py-2.5 text-sm font-medium">
          Submit Enquiry
        </button>
      </form>
    </div>
  </div>
</div>

      <Footer />
    </>
  );
}

/* REUSABLE INPUT FIELD */

function InputField({
  icon,
  name,
  placeholder,
  onChange,
  type = "text",
}: any) {
  return (
    <div className="relative">
      <span className="absolute left-3 top-2.5 text-slate-400 text-sm">
        {icon}
      </span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        required
        className="w-full border border-slate-300 pl-10 pr-3 py-2 text-sm focus:outline-none focus:border-slate-500"
      />
    </div>
  );
}