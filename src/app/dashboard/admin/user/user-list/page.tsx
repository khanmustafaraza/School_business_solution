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
import H2 from "@/components/headings/H2";
import TableHeader from "@/components/tables/tableheader/TableHeader";
import SearchContainer from "@/components/searchcontainer/SearchContainer";
import { useToggle } from "@/store/toggledashboard/Toggledashboard";
const userColumns = [
  { label: "User" },
  { label: "Email" },
  { label: "Status" },
  { label: "Role" },
  { label: "Action" },
];

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

  const { state, getAllUser, handleUpdate } = useUser();
  const {view} = useToggle()

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
        <H2 title="Total User" total={state.userList.length} />
        <SearchContainer
          onChange={() => console.log("firsr")}
          placeholder="Search For ....."
          title="User Filter"
        />

        <Container>
          {/* TABLE */}
         {
          view == "list" && (
             <TableContainer>
            <TableHeader columns={userColumns} />
            <tbody className="bg-white dark:bg-slate-900">
              {state?.userList?.map((item: any) => {
                const path = rolePathMap[item.role];

                return (
                  <tr
                    key={item._id}
                    className="hover:bg-slate-50 dark:hover:bg-slate-800/40"
                  >
                    {/* USER */}
                    <td className="border px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-[#003366] font-semibold">
                          {getInitials(item.name)}
                        </div>

                        <div>
                          <span className="font-semibold">{item.name}</span>
                          <p className="text-xs text-gray-500">System User</p>
                        </div>
                      </div>
                    </td>

                    {/* EMAIL */}
                    <td className="border px-6 py-4">
                      <span className="text-sm text-slate-600">
                        {item.email}
                      </span>
                    </td>

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

                    {/* ROLE */}
                    <td className="border px-6 py-4 text-center">
                      <span
                        className={`rounded px-3 py-1 text-sm font-medium uppercase ${roleColors[item.role]}`}
                      >
                        {item.role}
                      </span>
                    </td>

                    {/* ACTION */}
                    <td className="border px-6 py-4">
                      <div className="flex justify-end gap-3">
                        {item.isActive && path && (
                          <Link
                            title="Create Profile"
                            href={`/dashboard/admin/${path}/${item._id}?role=${item.role}`}
                            className="text-[#003366] hover:text-blue-700"
                          >
                            <icons.FiEdit2 />
                          </Link>
                        )}

                        <button
                          onClick={() => handleUpdate(item._id, item.isActive)}
                          title="Toggle Status"
                          className="text-slate-600 hover:text-slate-900"
                        >
                          {item.isActive ? (
                            <FaToggleOn className="text-xl text-green-500" />
                          ) : (
                            <FaToggleOff className="text-xl text-red-500" />
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </TableContainer>
          )
         }
        {
  view === "grid" && (
    <div className="flex flex-wrap gap-2">
      {state?.userList?.map((item: any) => {
        const path = rolePathMap[item.role];

        return (
          <div
            key={item._id}
            className=" flex-1 rounded border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
          >
            {/* Header */}
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 font-semibold text-[#003366]">
                {getInitials(item.name)}
              </div>

              <div>
                <h3 className="font-semibold text-slate-800 dark:text-white">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-500">
                  System User
                </p>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-3 text-sm">
              <div className="flex justify-between gap-2">
                <span className="text-slate-500">Email</span>
                <span className="max-w-[150px] truncate font-medium">
                  {item.email}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-slate-500">Status</span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    item.isActive
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {item.isActive ? "Active" : "Inactive"}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-slate-500">Role</span>

                <span
                  className={`rounded px-3 py-1 text-xs font-medium uppercase ${roleColors[item.role]}`}
                >
                  {item.role}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-5 flex justify-end gap-4 border-t pt-4">
              {item.isActive && path && (
                <Link
                  title="Create Profile"
                  href={`/dashboard/admin/${path}/${item._id}?role=${item.role}`}
                  className="text-[#003366] transition hover:scale-110 hover:text-blue-700"
                >
                  <icons.FiEdit2 />
                </Link>
              )}

              <button
                onClick={() => handleUpdate(item._id, item.isActive)}
                title="Toggle Status"
                className="transition hover:scale-110"
              >
                {item.isActive ? (
                  <FaToggleOn className="text-2xl text-green-500" />
                ) : (
                  <FaToggleOff className="text-2xl text-red-500" />
                )}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  )
}

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
