"use client";

import React, { useEffect, useState } from "react";

import {
  useParams,
  useSearchParams,
} from "next/navigation";

import {
  FiUser,
  FiBookOpen,
  FiPhone,
  FiUpload,
  FiSave,
  FiRefreshCcw,
} from "react-icons/fi";

import Container from "@/components/container/Container";
import Form from "@/components/formcomponent/Form";
import MainContainer from "@/components/maincontainer/MainContainer";
import ParentContainer from "@/components/parentcontainer/ParentContainer";

import Input from "@/components/inputs/Input";

import useTeacher from "@/store/teacher/Teacher";
import Select from "@/components/inputs/Select";
import useClass from "@/store/admin/class/Class";

const Section = ({
  title,
  icon,
  children,
}: any) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center gap-3">
        <div className="rounded-lg border border-slate-200 p-2">
          {icon}
        </div>

        <h2 className="text-lg font-semibold text-slate-900">
          {title}
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {children}
      </div>
    </div>
  );
};

export default function TeacherRegister() {
const {state:{classList},getAllClass}  =  useClass()
  const {
    state,
    handleChange,
    handleFileChange,
    handleSubmit,
  } = useTeacher();

  const params = useParams();

  const searchParams = useSearchParams();

  const id = params.id;

  const role = searchParams.get("role");

  const [preview, setPreview] = useState<any>(null);

  const handlePreview = (e: any) => {
    handleFileChange(e);

    const file = e.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleReset = () => {
    window.location.reload();
  };
  useEffect(()=>{
getAllClass()
  },[])

  return (
    <ParentContainer>
      <MainContainer>
        <Container>
          <Form
            onSubmit={(e: any) =>
              handleSubmit(e, role, id)
            }
          >
            <div>
            {
  role === "class_teacher" && (
    <div className="mb-6">
      <label className="mb-2 block text-sm font-medium text-slate-700">
        Select Class
      </label>

      <select
        name="classId"
        value={state.teacherObj.classId}
        onChange={handleChange}
        className="w-full rounded-lg border border-slate-300  px-4 py-3 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
      >
        <option >
          Select Class
        </option>

        {classList.map((item: any) => (
          <option
            key={item._id}
            value={item._id}
          >
            {item.name}-{item.section}
          </option>
        ))}
      </select>
    </div>
  )
}
            </div>
            <div className="grid gap-6 xl:grid-cols-[1fr_340px]">
              {/* LEFT */}
              <div className="space-y-6">
                {/* Personal */}
                <Section
                  title="Personal Information"
                  icon={<FiUser size={18} />}
                >
                  <Input
                    label="First Name"
                    name="firstName"
                    value={state.teacherObj.firstName}
                    onChange={handleChange}
                    placeholder="John"
                  />

                  <Input
                    label="Last Name"
                    name="lastName"
                    value={state.teacherObj.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                  />

                  <Select
                    label="Gender"
                    name="gender"
                    value={state.teacherObj.gender}
                    onChange={handleChange}
                    options={[
                      "Male",
                      "Female",
                      "Other",
                    ]}
                  />

                  <Input
                    label="Date of Birth"
                    name="dob"
                    type="date"
                    value={state.teacherObj.dob}
                    onChange={handleChange}
                  />

                  {/* {role === "class_teacher" && (
                    <Input
                      label="Class ID"
                      name="classId"
                      value={state.teacherObj.classId}
                      onChange={handleChange}
                      placeholder="Class ID"
                    />
                  )} */}
                </Section>

                {/* Professional */}
                <Section
                  title="Professional Details"
                  icon={<FiBookOpen size={18} />}
                >
                  <Input
                    label="Subject"
                    name="subject"
                    value={state.teacherObj.subject}
                    onChange={handleChange}
                    placeholder="Mathematics"
                  />

                  <Input
                    label="Qualification"
                    name="qualification"
                    value={
                      state.teacherObj.qualification
                    }
                    onChange={handleChange}
                    placeholder="M.Sc, B.Ed"
                  />

                  <Input
                    label="Experience"
                    name="exp"
                    type="number"
                    value={state.teacherObj.exp}
                    onChange={handleChange}
                    placeholder="5"
                  />

                  <Input
                    label="Joining Date"
                    name="doj"
                    type="date"
                    value={state.teacherObj.doj}
                    onChange={handleChange}
                  />
                </Section>

                {/* Contact */}
                <Section
                  title="Contact Information"
                  icon={<FiPhone size={18} />}
                >
                  <Input
                    label="Mobile Number"
                    name="mobile"
                    value={state.teacherObj.mobile}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                  />

                  <Input
                    label="Adhaar Number"
                    name="adhaar"
                    type="number"
                    value={state.teacherObj.adhaar}
                    onChange={handleChange}
                    placeholder="123456789012"
                  />

                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Address
                    </label>

                    <textarea
                      name="address"
                      rows={5}
                      value={state.teacherObj.address}
                      onChange={handleChange}
                      placeholder="Enter address..."
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
                    />
                  </div>
                </Section>
              </div>

              {/* RIGHT */}
              <div className="space-y-6 xl:sticky xl:top-6 xl:h-fit">
                {/* Upload */}
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="rounded-lg border border-slate-200 p-2">
                      <FiUpload size={18} />
                    </div>

                    <h2 className="text-lg font-semibold text-slate-900">
                      Teacher Photo
                    </h2>
                  </div>

                  <label className="group flex min-h-[260px] cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 transition hover:border-slate-900">
                    <div className="mb-4 rounded-lg border border-slate-200 bg-white p-4 transition group-hover:scale-105">
                      <FiUpload
                        size={28}
                        className="text-slate-700"
                      />
                    </div>

                    <h3 className="font-medium text-slate-900">
                      Upload Teacher Photo
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      PNG or JPG up to 5MB
                    </p>

                    <input
                      type="file"
                      className="hidden"
                      onChange={handlePreview}
                      name="photo"
                    />
                  </label>

                  {preview && (
                    <img
                      src={preview}
                      alt="Preview"
                      className="mt-4 h-48 w-full rounded-lg object-cover"
                    />
                  )}

                  {state.teacherObj.photo && (
                    <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                      {
                        (
                          state.teacherObj
                            .photo as File
                        ).name
                      }
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h2 className="mb-5 text-lg font-semibold text-slate-900">
                    Actions
                  </h2>

                  <div className="space-y-3">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-3.5 text-sm font-medium text-white transition hover:bg-black active:scale-[0.98]"
                    >
                      <FiSave size={18} />
                      Register Teacher
                    </button>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 active:scale-[0.98]"
                    >
                      <FiRefreshCcw size={18} />
                      Reset Form
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </Container>
      </MainContainer>
    </ParentContainer>
  );
}