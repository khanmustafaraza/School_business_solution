"use client";

import Container from "@/components/container/Container";
import MainContainer from "@/components/maincontainer/MainContainer";
import ParentContainer from "@/components/parentcontainer/ParentContainer";
import TableContainer from "@/components/tables/tablecontainer/Tablecontainer";
import H1 from "@/components/headings/H1";

import useClass from "@/store/admin/class/Class";

import { useEffect } from "react";

import icons from "@/constants/icons/icons";
import Link from "next/link";
import useModal from "@/store/togglemodal/ToggleModal";
import Modal from "@/components/modal/Modal";
import Form from "@/components/formcomponent/Form";
import Input from "@/components/inputs/Input";
import ActionBtn from "@/components/actionbtn/ActionBtn";

export default function ClassList() {
  const { state, getAllClass, handleChange, handleUpdate } = useClass();
  const { openModal, closeModal, updateId } = useModal();

  useEffect(() => {
    getAllClass();
  }, []);

  const heading = {
    name: "Classes",
    subHeading: "Manage all academic classes",
    href: "/dashboard/admin/class/class-register",
    btnHeading: "Add Class",
    icon: <icons.FaRegistered />,
  };

  return (
    <ParentContainer>
      <MainContainer>
        <H1 heading={heading} />

        <Container>
          <TableContainer>
            {/* TABLE HEAD */}
            <thead className="border-b bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                  Class
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                  Section
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                  Room
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600">
                  Status
                </th>

                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">
                  Students
                </th>

                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-600">
                  Actions
                </th>
              </tr>
            </thead>

            {/* TABLE BODY */}
            <tbody>
              {state?.classList?.length > 0 ? (
                state.classList.map((item: any) => (
                  <tr
                    key={item._id}
                    className="border-b transition hover:bg-slate-50"
                  >
                    {/* CLASS */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#003366] text-white">
                          <icons.FaSchool size={16} />
                        </div>

                        <div>
                          <h2 className="font-semibold text-slate-800">
                            {item.name}
                          </h2>

                          <p className="text-xs text-slate-400">
                            Academic Session
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* SECTION */}
                    <td className="px-6 py-5">
                      <span className="rounded-md bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
                        {item.section}
                      </span>
                    </td>

                    {/* ROOM */}
                    <td className="px-6 py-5 text-sm text-slate-700">
                      Room {item.no}
                    </td>

                    {/* STATUS */}
                    <td className="px-6 py-5">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          item.isActive
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>

                    {/* STUDENTS */}
                    <td className="px-6 py-5 text-center">
                      <span className="font-semibold text-slate-800">
                        {item.students || 0}
                      </span>
                    </td>

                    {/* ACTIONS */}
                    <td className="px-6 py-5">
                      <div className="flex items-center justify-center gap-2">
                        {/* VIEW */}
                        <Link
                          href={`/dashboard/admin/student/view-students/${item._id}`}
                          className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-[#003366] transition hover:bg-[#003366] hover:text-white"
                          title="View Students"
                        >
                          <icons.FiEye size={16} />
                        </Link>

                        {/* EDIT */}
                        <button
                          title="Edit Class"
                          onClick={() => openModal(item._id)}
                          className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition hover:bg-slate-800 hover:text-white"
                        >
                          <icons.FiEdit2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="py-20 text-center">
                    <div className="flex flex-col items-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100">
                        <icons.FaSchool size={30} className="text-slate-400" />
                      </div>

                      <h2 className="mt-4 text-xl font-semibold text-slate-700">
                        No Classes Found
                      </h2>

                      <p className="mt-2 text-sm text-slate-500">
                        Create a class to manage students and sections.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </TableContainer>
          <Modal title="Edit Class">
            <Form onSubmit={(e) => handleUpdate(e, updateId)}>
              {/* Class Name */}
              <div className="flex  flex-wrap  gap-2 justify-center">
                <Input
                  name="name"
                  label="Class Name"
                  value={state.classObj.name}
                  onChange={(e) => handleChange(e)}
                  type="text"
                  placeholder="Enter class name (e.g. Class 9)"
                  icon={<icons.FaChalkboard />}
                />
                <Input
                  name="section"
                  label="Section Name"
                  value={state.classObj.section}
                  onChange={(e) => handleChange(e)}
                  type="text"
                  placeholder="Enter Section name (A,B,C)"
                  icon={<icons.FaLayerGroup />}
                />
              </div>

              {/* Room Number */}

              <Input
                label="Room Number"
                name="no"
                value={state.classObj.no}
                onChange={(e) => handleChange(e)}
                type="number"
                placeholder="Enter room number"
                icon={<icons.FaDoorOpen />}
              />

              {/* Actions */}

              <ActionBtn />
            </Form>
          </Modal>
        </Container>
      </MainContainer>
    </ParentContainer>
  );
}
