"use client";
import Container from "@/components/container/Container";
import AdminHeading from "@/components/headings/AdminHeading";
import MainContainer from "@/components/maincontainer/MainContainer";
import { useUser } from "@/store/admin/user/User";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import icons from "@/constants/icons/icons";
import ParentContainer from "@/components/parentcontainer/ParentContainer";
import { useParams, useSearchParams } from "next/navigation";
import TableContainer from "@/components/tables/tablecontainer/Tablecontainer";

const rolePathMap: any = {
  student: "student",
  teacher: "teacher",
  classteacher: "teacher",
  driver: "driver",
};

const roleColors: any = {
  student: "bg-blue-100 text-blue-700",
  teacher: "bg-emerald-100 text-emerald-700",
  classteacher: "bg-violet-100 text-violet-700",
  driver: "bg-amber-100 text-amber-700",
};

const getInitials = (name: string) =>
  name?.split(" ").map((n) => n[0]).join("").toUpperCase();

const UserList = () => {
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const { state, getAllUser } = useUser();
  // const [counter,setCounter] = useState(state.counter)
  let counter = state.counter
  let isActivePage = state.page

  // console.log("state of user list",state)



  useEffect(() => {
    getAllUser(page);
  }, [page]);

  
 return (
  <ParentContainer>
    <MainContainer>
      <AdminHeading
        heading={{
          name: "Users",
          subHeading: "Manage platform users efficiently",
          href: "/dashboard/admin/user/user-register",
          btnHeading: "Add User",
          icon: <icons.FaRegistered />,
        }}
      />

      <Container>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">

          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 px-6 py-5 bg-slate-50/50">

            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-white shadow-sm">
                <icons.FiSearch className="text-slate-500" />
              </div>

              <div>
                <h2 className="text-sm font-semibold text-slate-800">
                  Users Directory
                </h2>
                <p className="text-xs text-slate-500">
                  View and manage all registered users
                </p>
              </div>
            </div>

            <div className="text-sm text-slate-600">
              Total:{" "}
              <span className="font-semibold text-slate-900">
                {state?.totalDocs || 0}
              </span>
            </div>
          </div>

          {/* TABLE */}
          <TableContainer>

            <thead className="text-xs uppercase tracking-wider text-slate-500 bg-slate-50/60 text-center">
              <tr>
                <th className="px-6 py-4">#</th>
                <th className="px-6 py-4 text-left">User</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">

              {state?.userList?.map((item: any, index: number) => {
                const path = rolePathMap[item.role];

                return (
                  <tr key={item._id} className="hover:bg-slate-50/60 transition">

                    {/* S.NO */}
                    <td className="px-6 py-4 text-slate-500">
                      {(page - 1) * 5 + index + 1}
                    </td>

                    {/* USER */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">

                        <div className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 font-semibold">
                          {getInitials(item.name)}
                        </div>

                        <div>
                          <div className="font-medium text-slate-900">
                            {item.name}
                          </div>
                          <div className="text-xs text-slate-400 md:hidden">
                            {item.email}
                          </div>
                        </div>

                      </div>
                    </td>

                    {/* EMAIL */}
                    <td className="px-6 py-4 hidden md:table-cell text-slate-600">
                      {item.email}
                    </td>

                    {/* ROLE */}
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 text-xs rounded-md font-medium ${roleColors[item.role]}`}
                      >
                        {item.role}
                      </span>
                    </td>

                    {/* ACTION */}
                    <td className="px-6 py-4 text-right">
                      {path && (
                        <Link
                          href={`/dashboard/admin/${path}/${item._id}`}
                          className="inline-flex items-center justify-center p-2 rounded-md hover:bg-slate-100 transition"
                        >
                          <icons.FiEdit2 />
                        </Link>
                      )}
                    </td>

                  </tr>
                );
              })}
            </tbody>
          </TableContainer>

          {/* PAGINATION */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-5 bg-slate-50/40">

            {/* INFO */}
            <div className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-medium text-slate-700">
                {(page - 1) * 5 + 1}
              </span>{" "}
              –{" "}
              <span className="font-medium text-slate-700">
                {Math.min(page * 5, state?.totalDocs || 0)}
              </span>{" "}
              of{" "}
              <span className="font-medium text-slate-700">
                {state?.totalDocs || 0}
              </span>
            </div>

            {/* CONTROLS */}
            <div className="flex items-center gap-2 flex-wrap justify-center">

              {/* PREV */}
              <Link
                href={
                  state.hasPrevPage
                    ? `/dashboard/admin/user/user-list?page=${state.prevPage}`
                    : "#"
                }
                className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                  state.hasPrevPage
                    ? "bg-white hover:bg-slate-100 text-slate-700"
                    : "bg-slate-100 text-slate-400 cursor-not-allowed"
                }`}
              >
                Previous
              </Link>

              {/* NUMBERS */}
              {Array.from({ length: state.totalPages }).map((_, i) => {
                const pageNumber = i + 1;

                return (
                  <Link
                    key={pageNumber}
                    href={`/dashboard/admin/user/user-list?page=${pageNumber}`}
                    className={`w-9 h-9 flex items-center justify-center rounded-md text-sm font-medium transition ${
                      pageNumber === isActivePage
                        ? "bg-blue-600 text-white"
                        : "bg-white hover:bg-slate-100 text-slate-700"
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
                className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                  state.hasNextPage
                    ? "bg-white hover:bg-slate-100 text-slate-700"
                    : "bg-slate-100 text-slate-400 cursor-not-allowed"
                }`}
              >
                Next
              </Link>

            </div>
          </div>

        </div>
      </Container>
    </MainContainer>
  </ParentContainer>
);
};

export default UserList;