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
import { FaPlus, FaUserCheck } from "react-icons/fa";
import H2 from "@/components/headings/H2";
import SearchContainer from "@/components/searchcontainer/SearchContainer";
import TableHeader from "@/components/tables/tableheader/TableHeader";
import { MdClass } from "react-icons/md";
const classColumns = [
  { label: "Class", key: "name" },
  { label: "Section", key: "section" },
  { label: "Room", key: "no" },
  { label: "Status", key: "isActive" },
  { label: "Students", key: "students" },
  { label: "Actions", key: "actions" },
];

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
    icon: <FaPlus />,
  };

  return (
    <ParentContainer>
      <MainContainer>
        <H1 heading={heading} />
        <H2 title="Total Class" total={state.classList.length} />
        <SearchContainer
          onChange={() => console.log("firsr")}
          placeholder="Search For ....."
          title="Classes Filter"
        />

        <Container>
          <TableContainer>
            {/* TABLE HEAD */}
            <TableHeader columns={classColumns} />
            {/* TABLE BODY */}
            <tbody className="bg-white dark:bg-slate-900">
              {state?.classList?.map((item: any) => (
                <tr
                  key={item._id}
                  className="hover:bg-slate-50 dark:hover:bg-slate-800/40"
                >
                  {/* CLASS */}
                  <td className="border px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-[#003366]">
                        <MdClass size={16} />
                      </div>

                      <div>
                        <span className="font-semibold uppercase">
                          {item.name}
                        </span>
                        <p className="text-xs text-gray-500">Academic Class</p>
                      </div>
                    </div>
                  </td>

                  {/* SECTION */}
                  <td className="border px-6 py-4">
                    <span className="rounded bg-indigo-50 px-3 py-1 text-sm text-indigo-700 uppercase">
                      {item.section}
                    </span>
                  </td>

                  {/* ROOM */}
                  <td className="border px-6 py-4">Room {item.no}</td>

                  {/* STATUS */}
                  <td className="border px-6 py-4">
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
                  <td className="border px-6 py-4 text-center">
                    <span className="font-semibold">{item.students || 0}</span>
                  </td>

                  {/* ACTION */}
                  <td className="border px-6 py-4">
                    <div className="flex justify-end gap-3">
                      {/* VIEW */}
                      <Link
                        href={`/dashboard/admin/student/view-students/${item._id}`}
                        className="text-[#003366] hover:text-blue-700"
                      >
                        <icons.FiEye />
                      </Link>

                      {/* ATTENDANCE */}
                      <Link
                        href={`/dashboard/admin/mark-attendance/${item._id}`}
                        className="text-[#003366] hover:text-blue-700"
                      >
                        <FaUserCheck />
                      </Link>

                      {/* EDIT */}
                      <button
                        onClick={() => openModal(item._id)}
                        className="text-slate-600 hover:text-slate-900"
                      >
                        <icons.FiEdit2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
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
