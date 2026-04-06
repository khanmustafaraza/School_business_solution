"use client";

import Link from "next/link";
import React from "react";
import {
  FaChalkboard,
  FaLayerGroup,
  FaUserTie,
  FaDoorOpen,
  FaUsers,
  FaListUl,
} from "react-icons/fa";

const ClassRegister = () => {
  return (
    <div className="w-full">
      {/* Heading */}
      <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Class Register
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Add and manage class details for your school.
          </p>
        </div>

        <Link
          href="/dashboard/admin/school/class-list"
          className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all duration-200"
        >
          <FaListUl className="text-[15px] text-emerald-600" />
          Class List
        </Link>
      </div>

      {/* Form Card */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Class Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Class Name
            </label>
            <div className="flex items-center rounded-xl border border-gray-300 bg-white px-3 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-100 transition-all">
              <FaChalkboard className="text-gray-400 text-[16px]" />
              <input
                type="text"
                placeholder="Enter class name (e.g. Class 9)"
                className="w-full bg-transparent px-3 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Section */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Section
            </label>
            <div className="flex items-center rounded-xl border border-gray-300 bg-white px-3 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-100 transition-all">
              <FaLayerGroup className="text-gray-400 text-[16px]" />
              <input
                type="text"
                placeholder="Enter section (e.g. A)"
                className="w-full bg-transparent px-3 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Class Teacher */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Class Teacher
            </label>
            <div className="flex items-center rounded-xl border border-gray-300 bg-white px-3 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-100 transition-all">
              <FaUserTie className="text-gray-400 text-[16px]" />
              <input
                type="text"
                placeholder="Enter class teacher name"
                className="w-full bg-transparent px-3 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Room Number */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Room Number
            </label>
            <div className="flex items-center rounded-xl border border-gray-300 bg-white px-3 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-100 transition-all">
              <FaDoorOpen className="text-gray-400 text-[16px]" />
              <input
                type="text"
                placeholder="Enter room number"
                className="w-full bg-transparent px-3 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Capacity */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Student Capacity
            </label>
            <div className="flex items-center rounded-xl border border-gray-300 bg-white px-3 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-100 transition-all">
              <FaUsers className="text-gray-400 text-[16px]" />
              <input
                type="number"
                placeholder="Enter maximum student capacity"
                className="w-full bg-transparent px-3 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
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
              Save Class
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClassRegister;
