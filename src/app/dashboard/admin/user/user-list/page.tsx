"use client";

import Container from "@/components/container/Container";
import MainContainer from "@/components/maincontainer/MainContainer";
import ParentContainer from "@/components/parentcontainer/ParentContainer";
import TableContainer from "@/components/tables/tablecontainer/Tablecontainer";
import H1 from "@/components/headings/H1";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";

import { useUser } from "@/store/admin/user/User";

import Link from "next/link";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import icons from "@/constants/icons/icons";

const rolePathMap: any = {
  student: "student",
  teacher: "teacher",
  class_teacher: "teacher",
  driver: "driver",
};

const roleColors: any = {
  admin: "bg-slate-100 text-slate-700",
  student: "bg-blue-100 text-blue-700",
  teacher: "bg-green-100 text-green-700",
  class_teacher: "bg-violet-100 text-violet-700",
  driver: "bg-amber-100 text-amber-700",
};

const getInitials = (name: string) =>
  name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

const UserList = () => {
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;

  const { state, getAllUser,handleUpdate } = useUser();

  useEffect(() => {
    getAllUser(page);
  }, [page]);

  return (
    <ParentContainer>
      <MainContainer>
        <H1
          heading={{
            name: "Users",
            subHeading: "Manage all users",
            href: "/dashboard/admin/user/user-register",
            btnHeading: "Add User",
            icon: <icons.FaRegistered />,
          }}
        />

        <Container>
          {/* TOP */}
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-slate-500">
              Total Users :
              <span className="ml-1 font-semibold text-slate-800">
                {state?.totalDocs || 0}
              </span>
            </p>
          </div>

          {/* TABLE */}
          <TableContainer>
            <thead className="border-b bg-slate-50">
              <tr>
                <th className="px-5 py-4 text-left text-sm font-semibold text-slate-600">
                  User
                </th>

                <th className="px-5 py-4 text-left text-sm font-semibold text-slate-600 hidden md:table-cell">
                  Email
                </th>

                <th className="px-5 py-4 text-center text-sm font-semibold text-slate-600">
                  Status
                </th>

                <th className="px-5 py-4 text-center text-sm font-semibold text-slate-600">
                  Role
                </th>

                <th className="px-5 py-4 text-center text-sm font-semibold text-slate-600">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {state?.userList?.map((item: any) => {
                const path = rolePathMap[item.role];

                return (
                  <tr
                    key={item._id}
                    className="border-b transition hover:bg-slate-50"
                  >
                    {/* USER */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 font-semibold text-slate-700">
                          {getInitials(item.name)}
                        </div>

                        <div>
                          <h2 className="text-sm font-medium text-slate-800">
                            {item.name}
                          </h2>

                          <p className="text-xs text-slate-400 md:hidden">
                            {item.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* EMAIL */}
                    <td className="hidden px-5 py-4 text-sm text-slate-600 md:table-cell">
                      {item.email}
                    </td>

                    {/* STATUS */}
                    <td className="px-5 py-4 text-center">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          item.isActive
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>

                    {/* ROLE */}
                    <td className="px-5 py-4 text-center">
                      <span
                        className={`rounded-md px-3 py-1 text-xs font-medium ${roleColors[item.role]}`}
                      >
                        {item.role}
                      </span>
                    </td>

                    {/* ACTION */}
                    <td className="px-5 py-4">
                      <div className="flex justify-center gap-1">
                       {
                        item.isActive && path && (
                          <Link
                            title="Create Profile"
                            href={`/dashboard/admin/${path}/${item._id}?role=${item.role}`}
                            className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition hover:bg-slate-800 hover:text-white"
                          >
                            <icons.FiEdit2 size={16} />
                          </Link>
                        )}
                       
                        <button onClick={()=>handleUpdate(item._id,item.isActive)} title="Toogle Status" className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-700 transition hover:bg-slate-800 hover:text-white">
                          {
                            item.isActive ?<FaToggleOn className="text-green-500 text-xl" />:<FaToggleOff className="text-red-500 text-xl"/>
                          }
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </TableContainer>

          {/* PAGINATION */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {/* PREV */}
            <Link
              href={
                state.hasPrevPage
                  ? `/dashboard/admin/user/user-list?page=${state.prevPage}`
                  : "#"
              }
              className={`rounded-md px-4 py-2 text-sm transition ${
                state.hasPrevPage
                  ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  : "cursor-not-allowed bg-slate-50 text-slate-400"
              }`}
            >
              Previous
            </Link>

            {/* PAGE NUMBERS */}
            {Array.from({ length: state.totalPages }).map((_, i) => {
              const pageNumber = i + 1;

              return (
                <Link
                  key={pageNumber}
                  href={`/dashboard/admin/user/user-list?page=${pageNumber}`}
                  className={`flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition ${
                    pageNumber === state.page
                      ? "bg-[#003366] text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {pageNumber}
                </Link>
              );
            })}

            {/* NEXT */}
            <Link
              href={
                state.hasNextPage
                  ? `/dashboard/admin/user/user-list?page=${state.nextPage}`
                  : "#"
              }
              className={`rounded-md px-4 py-2 text-sm transition ${
                state.hasNextPage
                  ? "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  : "cursor-not-allowed bg-slate-50 text-slate-400"
              }`}
            >
              Next
            </Link>
          </div>
        </Container>
      </MainContainer>
    </ParentContainer>
  );
};

export default UserList;
