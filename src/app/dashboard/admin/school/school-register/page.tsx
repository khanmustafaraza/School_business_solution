"use client";

import useSchool from "@/store/school/School";
import Link from "next/link";
import React from "react";
import {
  FaSchool,
  FaIdCard,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaListUl,
  FaImage,
} from "react-icons/fa";

const SchoolRegister = () => {
  const { state, handleChange,handleSubmit } = useSchool();
  return (
    <div className="white bg-white p-1">
      <div className="w-full bg-slate-50 p-4">
        {/* Heading */}
        <div className="mb-6 flex items-center flex-wrap justify-between border-b border-gray-200 pb-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Register New School
            </h2>
            <p className="hidden lg:block md:block text-sm text-gray-500 mt-1">
              Add and manage your school’s basic information.
            </p>
          </div>

          <Link
            href="/dashboard/admin/school/school-list"
            className=" bg-slate-600 inline-flex items-center gap-2 rounded border border-gray-300  lg:px-[15px] px-6 lg:py-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-500 transition-all duration-200"
          >
            <FaListUl className="text-[15px] text-white" />
            <span className="text-white">School List</span>
          </Link>
        </div>

        {/* Form Card */}
        <div className="rounded border border-gray-200 bg-white p-5 md:p-6">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={(e)=>handleSubmit(e)}>
            {/* School Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                School Name
              </label>
              <div className="flex items-center rounded border border-gray-300 bg-white px-3 focus-within:border-gray-500 focus-within:ring-2 focus-within:ring-gray-100 transition-all">
                <FaSchool className="text-gray-400 text-[16px]" />
                <input
                  name="name"
                  value={state.schoolObj.name}
                  onChange={(e) => handleChange(e)}
                  type="text"
                  placeholder="Enter school name"
                  className="w-full bg-transparent px-3 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Affiliation Code */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Affiliation Code
              </label>
              <div className="flex items-center rounded border border-gray-300 bg-white px-3 focus-within:border-gray-500 focus-within:ring-2 focus-within:ring-gray-100 transition-all">
                <FaIdCard className="text-gray-400 text-[16px]" />
                <input
                  name="code"
                  value={state.schoolObj.code}
                  onChange={(e) => handleChange(e)}
                  type="text"
                  placeholder="Enter affiliation code"
                  className="w-full bg-transparent px-3 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="flex items-center rounded border border-gray-300 bg-white px-3 focus-within:border-gray-500 focus-within:ring-2 focus-within:ring-gray-100 transition-all">
                <FaEnvelope className="text-gray-400 text-[16px]" />
                <input
                  name="email"
                  value={state.schoolObj.email}
                  onChange={(e) => handleChange(e)}
                  type="email"
                  placeholder="Enter school email"
                  className="w-full bg-transparent px-3 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Contact Number */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Contact Number
              </label>
              <div className="flex items-center rounded border border-gray-300 bg-white px-3 focus-within:border-gray-500 focus-within:ring-2 focus-within:ring-gray-100 transition-all">
                <FaPhoneAlt className="text-gray-400 text-[15px]" />
                <input
                  name="contact"
                  value={state.schoolObj.contact}
                  onChange={(e) => handleChange(e)}
                  type="tel"
                  placeholder="Enter contact number"
                  className="w-full bg-transparent px-3 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Address
              </label>
              <div className="flex items-start rounded border border-gray-300 bg-white px-3 py-3 focus-within:border-gray-500 focus-within:ring-2 focus-within:ring-gray-100 transition-all">
                <FaMapMarkerAlt className="mt-1 text-gray-400 text-[16px]" />
                <textarea
                  name="address"
                  value={state.schoolObj.address}
                  onChange={(e) => handleChange(e)}
                  rows={4}
                  placeholder="Enter school address"
                  className="w-full resize-none bg-transparent px-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* school image */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Upload School Image
              </label>
                 <div className=" w-full bg-white flex items-center rounded border border-gray-300  px-3 py-3 focus-within:border-gray-500 focus-within:ring-2 focus-within:ring-gray-100 transition-all">
              <label className="flex items-center w-full cursor-pointer">
                <FaImage className="text-gray-400 text-[15px] mr-2" />
                <span className="text-gray-600 text-sm">
                  {state.schoolObj.image
                    ? state.schoolObj.image.name
                    : "Upload school image"}
                </span>
                <input
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={handleChange}
                  className="hidden w-full" // hidden because we’re using the label for styling
                />
              </label>
            </div>
            </div>
         

            {/* Actions */}
            <div className="md:col-span-2 flex justify-end gap-3 pt-2">
              <button
                type="button"
                className="rounded border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all duration-200"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="rounded bg-slate-600 px-6 py-3 text-sm font-medium text-white hover:bg-emerald-700 transition-all duration-200"
              >
                Save School
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SchoolRegister;
