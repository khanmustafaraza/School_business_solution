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

  const school = state.schools?.[0];

  if (!school) return null;

  return (
    <div className="border-b-4 border-gray-800 bg-white p-4">
      {/* HEADER TOP */}

      <div className="flex items-center gap-4">
        {/* LOGO */}

        <div className="h-20 w-20 border border-gray-400 p-1">
          {school.image ? (
            <img
              src={school.image}
              alt={school.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-gray-500">
              <FaSchool />
            </div>
          )}
        </div>

        {/* SCHOOL INFO */}

        <div className="flex-1 text-center">
          <h1 className="text-2xl font-bold uppercase tracking-wide">
            {school.name}
          </h1>

          <p className="mt-1 text-xs font-semibold uppercase text-gray-600">
            Affiliation Code: {school.code}
          </p>

          <p className="mt-1 text-[11px] text-gray-500">
            Recognized Institution • Academic Excellence
          </p>
        </div>
      </div>

      {/* CONTACT ROW */}

      <div className="mt-3 grid grid-cols-1 gap-2 border-t border-gray-300 pt-2 text-xs text-gray-700 md:grid-cols-3">
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-gray-600" />
          <span>{school.email}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-gray-600" />
          <span>{school.contact}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-gray-600" />
          <span>{school.address}</span>
        </div>
      </div>
    </div>
  );
};

export default SchoolHeader;
