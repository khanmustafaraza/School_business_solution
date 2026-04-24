"use client";

import Footer from "@/components/footer/Footer";
import Loader from "@/components/loader/Loader";
import Navbar from "@/components/navbar/Navbar";
import { useEnquiry } from "@/store/enquiry/Enquiry";
import { FaUser, FaPhone, FaSchool } from "react-icons/fa";

export default function AdmissionPage() {
  const { state, handleChange, handleSubmit } = useEnquiry();

  return (
    <>
      <Navbar />

      {/* Loader */}
      {state.isLoading.loading && <Loader isLoading ={state.isLoading.loading} message={state.isLoading.message} />}

      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-6xl bg-white border border-slate-200 shadow-sm grid lg:grid-cols-2">

          {/* LEFT IMAGE */}
          <div className="hidden lg:block relative">
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350"
              alt="School"
              className="h-full w-full object-cover"
            />

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

          {/* RIGHT FORM */}
          <div className="p-8 lg:p-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Admission Enquiry
            </h2>

            <p className="text-sm text-slate-600 mt-1">
              Fill the form and we’ll get back to you.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">

              {/* NAME */}
              <InputField
                icon={<FaUser />}
                name="name"
                placeholder="Student Name"
                value={state.enquiryObj.name}
                onChange={handleChange}
              />

              {/* MOBILE */}
              <InputField
                icon={<FaPhone />}
                name="mobile"
                placeholder="Mobile Number"
                value={state.enquiryObj.mobile}
                onChange={handleChange}
              />

              {/* CLASS */}
              <div className="relative">
                <FaSchool className="absolute left-3 top-3 text-slate-400 text-sm" />

                <select
                  name="addmissionClass"
                  value={state.enquiryObj.addmissionClass}
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

              {/* MESSAGE */}
              <textarea
                name="message"
                value={state.enquiryObj.message}
                onChange={handleChange}
                placeholder="Additional Message"
                rows={3}
                className="w-full border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:border-slate-500"
              />

              {/* SUBMIT */}
              <button
                disabled={state.isLoading.loading}
                className="w-full bg-slate-900 text-white py-2.5 text-sm font-medium disabled:opacity-50"
              >
                {state.isLoading.loading ? "Submitting..." : "Submit Enquiry"}
              </button>

            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

/* ================= INPUT COMPONENT ================= */

function InputField({
  icon,
  name,
  placeholder,
  onChange,
  value,
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
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required
        className="w-full border border-slate-300 pl-10 pr-3 py-2 text-sm focus:outline-none focus:border-slate-500"
      />
    </div>
  );
}