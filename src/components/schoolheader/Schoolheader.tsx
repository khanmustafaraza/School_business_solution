"use client";

import { useEffect } from "react";
import useSchool from "@/store/admin/school/School";

import {
  FaSchool,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const SchoolHeader = () => {
  const { state, getSchools } = useSchool();

  useEffect(() => {
    getSchools();
  }, []);

  // First school only
  const school = state.schools?.[0];

  if (!school) return null;

  return (
    <div className="relative overflow-hidden border-[3px] border-gray-800 bg-white">
      {/* Top Border */}
      <div className="h-3 bg-gradient-to-r from-emerald-800 via-emerald-500 to-emerald-800" />

      {/* Watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03]">
        <FaSchool className="text-[260px]" />
      </div>

      {/* Main Header */}
      <div className="relative px-6 py-8">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          {/* Logo */}
          <div className="flex-shrink-0">
            {school.image ? (
              <img
                src={school.image}
                alt={school.name}
                className="h-28 w-28 rounded-full border-4 border-gray-300 object-cover shadow-md"
              />
            ) : (
              <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-gray-300 bg-gray-100 text-emerald-700 shadow-md">
                <FaSchool className="text-5xl" />
              </div>
            )}
          </div>

          {/* School Details */}
          <div className="flex-1 text-center">
            <h1 className="text-3xl font-black uppercase tracking-[4px] text-gray-900 md:text-5xl">
              {school.name}
            </h1>

            <div className="mx-auto mt-3 h-[2px] w-40 bg-emerald-600" />

            <p className="mt-3 text-sm font-semibold uppercase tracking-[2px] text-gray-600">
              Affiliation Code : {school.code}
            </p>

            {/* Contact Row */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-5 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-emerald-700" />
                <span>{school.email}</span>
              </div>

              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-emerald-700" />
                <span>{school.contact}</span>
              </div>
            </div>

            {/* Address */}
            <div className="mt-3 flex items-center justify-center gap-2 text-sm text-gray-700">
              <FaMapMarkerAlt className="text-emerald-700" />
              <span>{school.address}</span>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-8 border-t-[3px] border-double border-gray-700 pt-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[3px] text-gray-500">
            Academic Excellence • Discipline • Integrity
          </p>
        </div>
      </div>
    </div>
  );
};

export default SchoolHeader;
