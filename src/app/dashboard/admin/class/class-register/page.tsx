"use client";

import ActionBtn from "@/components/actionbtn/ActionBtn";
import Container from "@/components/container/Container";
import AdminHeading from "@/components/headings/AdminHeading";
import MainContainer from "@/components/maincontainer/MainContainer";
import useClass from "@/store/class/Class";
import { LayoutPanelTop } from "lucide-react";

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
const heading = {
  name: "Add Class",
  subHeading: "Add and manage your class basic information.",
  href: "/dashboard/admin/class/class-list",
  btnHeading: "Class List",
  icon: <LayoutPanelTop />,
};

const ClassRegister = () => {
  const { state, handleChange, handleSubmit } = useClass();
  return (
    <div className="white bg-white ">
      <MainContainer>
        <AdminHeading heading={heading} />
        <Container>
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
            onSubmit={(e) => handleSubmit(e)}
          >
            {/* Class Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Class Name
              </label>
              <div className="flex items-center rounded border border-gray-300 bg-white px-3 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-100 transition-all">
                <FaChalkboard className="text-gray-400 text-[16px]" />
                <input
                  name="name"
                  value={state.classObj.name}
                  onChange={(e) => handleChange(e)}
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
              <div className="flex items-center rounded border border-gray-300 bg-white px-3 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-100 transition-all">
                <FaLayerGroup className="text-gray-400 text-[16px]" />
                <input
                  name="section"
                  value={state.classObj.section}
                  onChange={(e) => handleChange(e)}
                  type="text"
                  placeholder="Enter section (e.g. A)"
                  className="w-full bg-transparent px-3 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Class Teacher */}
            {/* <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Class Teacher
            </label>
            <div className="flex items-center rounded border border-gray-300 bg-white px-3 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-100 transition-all">
              <FaUserTie className="text-gray-400 text-[16px]" />
              <input
                type="text"
                placeholder="Enter class teacher name"
                className="w-full bg-transparent px-3 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
              />
            </div>
          </div> */}

            {/* Room Number */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Room Number
              </label>
              <div className="flex items-center rounded border border-gray-300 bg-white px-3 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-100 transition-all">
                <FaDoorOpen className="text-gray-400 text-[16px]" />
                <input
                  name="no"
                  value={state.classObj.no}
                  onChange={(e) => handleChange(e)}
                  type="number"
                  placeholder="Enter room number"
                  className="w-full bg-transparent px-3 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Capacity */}
            {/* <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Student Capacity
            </label>
            <div className="flex items-center rounded border border-gray-300 bg-white px-3 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-100 transition-all">
              <FaUsers className="text-gray-400 text-[16px]" />
              <input
                type="number"
                placeholder="Enter maximum student capacity"
                className="w-full bg-transparent px-3 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
              />
            </div>
          </div> */}

            {/* Actions */}

            <ActionBtn />
          </form>
        </Container>
      </MainContainer>
      {/* Heading */}
    </div>
  );
};

export default ClassRegister;
