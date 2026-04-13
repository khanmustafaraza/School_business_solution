"use client";

import Container from "@/components/container/Container";
import AdminHeading from "@/components/headings/AdminHeading";
import MainContainer from "@/components/maincontainer/MainContainer";
import useSchool from "@/store/admin/school/School";
import Link from "next/link";
import{ useEffect } from "react";
import icons from "@/constants/icons/icons";
import {
  FaSchool,
  FaSearch,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaEdit,
  FaTrash,
  FaPlus,
  FaList,
  // FaRegistered,
} from "react-icons/fa";
const heading = {
  name: "School List",
  subHeading: "List Of Register School.",
  href: "/dashboard/admin/school/school-register",
  btnHeading: "Add School",
  icon: <icons.FaRegistered />,
};

const SchoolList = () => {
  const { state, getSchools } = useSchool();

  // Fetch schools on component mount
  useEffect(() => {
    getSchools();
  }, []);

  return (
    <div className="white bg-white p-1">
      {/* Heading */}
      <MainContainer>
        <AdminHeading heading={heading} />
        <Container>
          <div className="mb-5 rounded border border-gray-200 bg-white p-4">
            <div className="flex items-center rounded border border-gray-300 px-3 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-100 transition-all">
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
            {state.schools.map((school) => (
              <div
                key={school._id}
                className="rounded border border-gray-200 bg-white p-5 hover:shadow-sm transition-all duration-200"
              >
                {/* Top */}
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded bg-emerald-50 text-emerald-600">
                      {school.image ? (
                        <img
                          src={school.image}
                          alt={school.name}
                          className="h-11 w-11 rounded object-cover"
                        />
                      ) : (
                        <FaSchool className="text-[18px]" />
                      )}
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {school.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        Affiliation Code: {school.code}
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
                  <button className="inline-flex items-center gap-2 rounded border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-all duration-200">
                    <FaEdit className="text-[13px] text-emerald-600" />
                    Edit
                  </button>

                  <button className="inline-flex items-center gap-2 rounded border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-100 transition-all duration-200">
                    <FaTrash className="text-[13px]" />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </MainContainer>
      {/* Search */}
    </div>
  );
};

export default SchoolList;
