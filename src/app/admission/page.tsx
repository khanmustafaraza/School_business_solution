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
      {state.isLoading.loading && (
        <Loader
          isLoading={state.isLoading.loading}
          message={state.isLoading.message}
        />
      )}

      <div className="relative overflow-hidden bg-gray-50 py-20 px-4 primary-text">

        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full secondary-bg opacity-10 blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-14">

            <span className="inline-flex rounded bg-white px-4 py-1.5 text-sm font-medium secondary-text">
              Admissions Open
            </span>

            <h1 className="mt-6 text-5xl font-bold tracking-tight primary-text">
              Begin Your Child’s
              <span className="block primary-text">
                Learning Journey
              </span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 secondary-text">
              Join a nurturing environment where academic excellence,
              creativity, and character development shape future-ready students.
            </p>

          </div>

          {/* Main Card */}
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl grid lg:grid-cols-2">

            {/* LEFT IMAGE */}
            <div className="relative hidden lg:block">

              <img
                src="https://images.unsplash.com/photo-1588072432836-e10032774350"
                alt="School"
                className="h-full w-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content */}
              <div className="absolute bottom-0 p-10 text-white">

                <span className="inline-block rounded bg-white/10 px-4 py-1 text-sm backdrop-blur">
                  Rose Valley Public School
                </span>

                <h3 className="mt-5 text-3xl font-bold">
                  Empowering Young Minds
                </h3>

                <p className="mt-5 text-white/80 leading-7">
                  A place where students are inspired to explore, learn,
                  innovate, and grow with confidence.
                </p>

              </div>

            </div>

            {/* RIGHT FORM */}
            <div className="p-8 sm:p-12 lg:p-14">

              <div>

                <span className="text-sm font-semibold uppercase tracking-[0.2em] primary-text">
                  Admission Enquiry
                </span>

                <h2 className="mt-3 text-4xl font-bold primary-text">
                  Let’s Connect
                </h2>

                <p className="mt-4 secondary-text leading-7">
                  Fill out the enquiry form and our admissions team will reach
                  out to guide you.
                </p>

              </div>

              <form onSubmit={handleSubmit} className="mt-10 space-y-6">

                <InputField
                  icon={<FaUser />}
                  name="name"
                  placeholder="Student Name"
                  value={state.enquiryObj.name}
                  onChange={handleChange}
                />

                <InputField
                  icon={<FaPhone />}
                  name="mobile"
                  placeholder="Mobile Number"
                  value={state.enquiryObj.mobile}
                  onChange={handleChange}
                />

                {/* CLASS */}
                <div className="relative">

                  <FaSchool className="absolute left-4 top-4 secondary-text text-sm" />

                  <select
                    name="addmissionClass"
                    value={state.enquiryObj.addmissionClass}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl bg-gray-50 pl-12 pr-4 py-4 text-sm secondary-text outline-none"
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
                  rows={4}
                  className="w-full rounded-2xl bg-gray-50 px-4 py-4 text-sm secondary-text outline-none resize-none"
                />

                {/* SUBMIT */}
                <button
                  disabled={state.isLoading.loading}
                  className="w-full rounded-2xl secondary-bg text-white py-4 text-sm font-semibold hover:opacity-90 transition"
                >
                  {state.isLoading.loading ? "Submitting..." : "Submit Enquiry"}
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

/* INPUT */

function InputField({
  icon,
  name,
  placeholder,
  onChange,
  value,
}: any) {
  return (
    <div className="relative">

      <span className="absolute left-4 top-4 secondary-text text-sm">
        {icon}
      </span>

      <input
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required
        className="w-full rounded-2xl bg-gray-50 pl-12 pr-4 py-4 text-sm secondary-text outline-none"
      />

    </div>
  );
}