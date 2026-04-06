"use client";

import Link from "next/link";
import React from "react";
import {
  FaSchool,
  FaIdCard,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaListUl,
} from "react-icons/fa";

const SchoolRegister = () => {
  return (
    <div className="w-full">
      {/* Heading */}
      <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            School Register
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Add and manage your school’s basic information.
          </p>
        </div>

        <Link
          href="/dashboard/admin/school/school-list"
          className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all duration-200"
        >
          <FaListUl className="text-[15px] text-emerald-600" />
          School List
        </Link>
      </div>

      {/* Form Card */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* School Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              School Name
            </label>
            <div className="flex items-center rounded-xl border border-gray-300 bg-white px-3 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-100 transition-all">
              <FaSchool className="text-gray-400 text-[16px]" />
              <input
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
            <div className="flex items-center rounded-xl border border-gray-300 bg-white px-3 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-100 transition-all">
              <FaIdCard className="text-gray-400 text-[16px]" />
              <input
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
            <div className="flex items-center rounded-xl border border-gray-300 bg-white px-3 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-100 transition-all">
              <FaEnvelope className="text-gray-400 text-[16px]" />
              <input
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
            <div className="flex items-center rounded-xl border border-gray-300 bg-white px-3 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-100 transition-all">
              <FaPhoneAlt className="text-gray-400 text-[15px]" />
              <input
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
            <div className="flex items-start rounded-xl border border-gray-300 bg-white px-3 py-3 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-100 transition-all">
              <FaMapMarkerAlt className="mt-1 text-gray-400 text-[16px]" />
              <textarea
                rows={4}
                placeholder="Enter school address"
                className="w-full resize-none bg-transparent px-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="md:col-span-2 flex justify-end gap-3 pt-2">
            <button
              type="button"
              className="rounded-xl border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all duration-200"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-emerald-600 px-6 py-3 text-sm font-medium text-white hover:bg-emerald-700 transition-all duration-200"
            >
              Save School
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SchoolRegister;
