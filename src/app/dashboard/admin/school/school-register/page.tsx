"use client";

import ActionBtn from "@/components/actionbtn/ActionBtn";
import Container from "@/components/container/Container";
import AdminHeading from "@/components/headings/AdminHeading";
import MainContainer from "@/components/maincontainer/MainContainer";
import useSchool from "@/store/school/School";
import { AdminHeadingType } from "@/types/propstype";
import { School } from "lucide-react";
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
  FaHeading,
  FaPlus,
  FaList,
} from "react-icons/fa";

const heading = {
  name: "Add School",
  subHeading: "Add and manage your school’s basic information.",
  href: "/dashboard/admin/school/school-list",
  btnHeading: "School List",
  icon: <School />,
};

const SchoolRegister = () => {
  const { state, handleChange, handleSubmit } = useSchool();
  return (
    <div className="white bg-white p-1">
      {/* main container */}
      <MainContainer>
        {/* Heading */}
        <AdminHeading heading={heading} />

        {/* Form Card */}
        <Container>
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
            onSubmit={(e) => handleSubmit(e)}
          >
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

            <ActionBtn />
          </form>
        </Container>
      </MainContainer>
    </div>
  );
};

export default SchoolRegister;
