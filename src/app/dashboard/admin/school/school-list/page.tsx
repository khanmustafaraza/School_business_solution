"use client";

import Link from "next/link";
import React from "react";
import {
  FaSchool,
  FaSearch,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaEdit,
  FaTrash,
  FaPlus,
} from "react-icons/fa";

const schoolData = [
  {
    id: 1,
    schoolName: "Al-Noor Public School",
    affiliationCode: "CBSE10234",
    email: "alnoorpublicschool@gmail.com",
    contact: "+91 9876543210",
    address: "Civil Lines, Aligarh, Uttar Pradesh",
  },
  {
    id: 2,
    schoolName: "Green Valley Academy",
    affiliationCode: "ICSE20987",
    email: "greenvalleyacademy@gmail.com",
    contact: "+91 9123456780",
    address: "Dodhpur, Aligarh, Uttar Pradesh",
  },
  {
    id: 3,
    schoolName: "Modern Scholars School",
    affiliationCode: "UP45876",
    email: "modernscholars@gmail.com",
    contact: "+91 9988776655",
    address: "Jamia Road, Aligarh, Uttar Pradesh",
  },
];

const SchoolList = () => {
  return (
    <div className="w-full">
      {/* Heading */}
      <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">School List</h2>
          <p className="text-sm text-gray-500 mt-1">
            View and manage all registered schools.
          </p>
        </div>

        <Link
          href="/dashboard/admin/school/school-register"
          className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 transition-all duration-200"
        >
          <FaPlus className="text-[14px]" />
          Add School
        </Link>
      </div>

      {/* Search */}
      <div className="mb-5 rounded-2xl border border-gray-200 bg-white p-4">
        <div className="flex items-center rounded-xl border border-gray-300 px-3 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-100 transition-all">
          <FaSearch className="text-gray-400 text-[15px]" />
          <input
            type="text"
            placeholder="Search school by name, code, email..."
            className="w-full bg-transparent px-3 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* School Cards */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {schoolData.map((school) => (
          <div
            key={school.id}
            className="rounded-2xl border border-gray-200 bg-white p-5 hover:shadow-sm transition-all duration-200"
          >
            {/* Top */}
            <div className="mb-4 flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <FaSchool className="text-[18px]" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {school.schoolName}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Affiliation Code: {school.affiliationCode}
                  </p>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-gray-400 text-[14px]" />
                <span>{school.email}</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-gray-400 text-[14px]" />
                <span>{school.contact}</span>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-gray-400 text-[14px] mt-1" />
                <span>{school.address}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-5 flex items-center justify-end gap-3 border-t border-gray-100 pt-4">
              <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all duration-200">
                <FaEdit className="text-[13px] text-emerald-600" />
                Edit
              </button>

              <button className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-100 transition-all duration-200">
                <FaTrash className="text-[13px]" />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolList;
