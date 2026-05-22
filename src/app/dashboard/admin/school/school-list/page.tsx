"use client";

import Container from "@/components/container/Container";
import AdminHeading from "@/components/headings/AdminHeading";
import MainContainer from "@/components/maincontainer/MainContainer";
import useSchool from "@/store/admin/school/School";
import { useEffect } from "react";
import icons from "@/constants/icons/icons";

import {
  FaSchool,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaEdit,
  FaTrash,
  FaSearch,
} from "react-icons/fa";

const heading = {
  name: "School Directory",
  subHeading: "Registered School Records",
  href: "/dashboard/admin/school/school-register",
  btnHeading: "Add School",
  icon: <icons.FaRegistered />,
};

const SchoolList = () => {
  const { state, getSchools } = useSchool();

  useEffect(() => {
    getSchools();
  }, []);

  return (
    <div className="min-h-screen bg-[#f6f7fb] py-6">
      <MainContainer>
        <AdminHeading heading={heading} />

        <Container>
          {/* School List */}
          <div className="space-y-8">
            {state.schools.map((school) => (
              <div
                key={school._id}
                className="relative overflow-hidden rounded-md border border-gray-300 bg-white shadow-sm"
              >
                {/* Top Decorative Line */}
                <div className="h-2 w-full bg-gradient-to-r from-emerald-700 via-emerald-500 to-emerald-700" />

                {/* Paper Style */}
                <div className="relative px-8 py-7">
                  {/* Watermark */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03]">
                    <FaSchool className="text-[220px]" />
                  </div>

                  {/* Header */}
                  <div className="relative border-b-2 border-dashed border-gray-300 pb-6 text-center">
                    <div className="mb-4 flex justify-center">
                      {school.image ? (
                        <img
                          src={school.image}
                          alt={school.name}
                          className="h-24 w-24 rounded-full border-4 border-white object-cover shadow-md"
                        />
                      ) : (
                        <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-emerald-100 bg-emerald-50 text-emerald-700 shadow-sm">
                          <FaSchool className="text-4xl" />
                        </div>
                      )}
                    </div>

                    <h1 className="text-3xl font-extrabold uppercase tracking-[3px] text-gray-800">
                      {school.name}
                    </h1>

                    <div className="mt-3 inline-block rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-sm font-medium text-emerald-700">
                      Affiliation Code : {school.code}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="relative mt-6 grid gap-5 md:grid-cols-3">
                    <div className="rounded-md border border-gray-200 bg-gray-50 p-4">
                      <div className="mb-2 flex items-center gap-2 text-emerald-700">
                        <FaEnvelope />
                        <span className="text-sm font-semibold uppercase tracking-wide">
                          Email
                        </span>
                      </div>

                      <p className="text-sm text-gray-700 break-all">
                        {school.email}
                      </p>
                    </div>

                    <div className="rounded-md border border-gray-200 bg-gray-50 p-4">
                      <div className="mb-2 flex items-center gap-2 text-emerald-700">
                        <FaPhoneAlt />
                        <span className="text-sm font-semibold uppercase tracking-wide">
                          Contact
                        </span>
                      </div>

                      <p className="text-sm text-gray-700">{school.contact}</p>
                    </div>

                    <div className="rounded-md border border-gray-200 bg-gray-50 p-4">
                      <div className="mb-2 flex items-center gap-2 text-emerald-700">
                        <FaMapMarkerAlt />
                        <span className="text-sm font-semibold uppercase tracking-wide">
                          Address
                        </span>
                      </div>

                      <p className="text-sm text-gray-700 leading-6">
                        {school.address}
                      </p>
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="relative mt-8 flex items-center justify-end gap-4 border-t border-dashed border-gray-300 pt-5">
                    <button className="flex items-center gap-2 rounded-md border border-emerald-600 px-5 py-2.5 text-sm font-medium text-emerald-700 transition hover:bg-emerald-50">
                      <FaEdit className="text-xs" />
                      Edit
                    </button>

                    <button className="flex items-center gap-2 rounded-md border border-red-500 px-5 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-50">
                      <FaTrash className="text-xs" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </MainContainer>
    </div>
  );
};

export default SchoolList;
