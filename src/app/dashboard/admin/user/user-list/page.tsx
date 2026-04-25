"use client";
import Container from "@/components/container/Container";
import AdminHeading from "@/components/headings/AdminHeading";
import MainContainer from "@/components/maincontainer/MainContainer";
import { useUser } from "@/store/admin/user/User";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import icons from "@/constants/icons/icons";
import ParentContainer from "@/components/parentcontainer/ParentContainer";

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
  const { state, getAllUser } = useUser();

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllUser(page, search);
  }, [page]);

  // optional: search with debounce later
  const handleSearch = (e: any) => {
    setSearch(e.target.value);
    getAllUser(1, e.target.value);
    setPage(1);
  };

  return (
    <ParentContainer>
      <MainContainer>
        <AdminHeading
          heading={{
            name: "Users",
            subHeading: "Manage your platform users",
            href: "/dashboard/admin/user/user-register",
            btnHeading: "Add User",
            icon: <icons.FaRegistered />,
          }}
        />

        <Container>
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg overflow-hidden">

            {/* TOP BAR */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-6 py-5">

              <div className="relative w-full sm:max-w-xs">
                <icons.FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  value={search}
                  onChange={handleSearch}
                  placeholder="Search users..."
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-xl bg-slate-100/70 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="text-sm text-slate-500">
                Total Users{" "}
                <span className="ml-1 px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 font-semibold">
                  {state?.total || 0}
                </span>
              </div>
            </div>

            {/* TABLE */}
            <table className="w-full">
              <thead className="text-slate-400 text-xs uppercase">
                <tr>
                  <th className="px-6 py-4 text-left">User</th>
                  <th className="px-6 py-4 hidden md:table-cell">Email</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>

              <tbody>
                {state?.userList?.map((item: any) => {
                  const path = rolePathMap[item.role];

                  return (
                    <tr key={item._id} className="hover:bg-slate-50/70">

                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-200">
                            {getInitials(item.name)}
                          </div>
                          <div>
                            <div className="font-semibold">{item.name}</div>
                            <div className="text-xs text-slate-400 md:hidden">
                              {item.email}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4 hidden md:table-cell">
                        {item.email}
                      </td>

                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 text-xs rounded-full ${roleColors[item.role]}`}>
                          {item.role}
                        </span>
                      </td>

                      <td className="px-6 py-4 text-right">
                        {path && (
                          <Link href={`/dashboard/admin/${path}/${item._id}`}>
                            <icons.FiEdit2 />
                          </Link>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* PAGINATION */}
            <div className="flex items-center justify-between px-6 py-5">

              <div className="text-sm text-slate-500">
                Showing {(page - 1) * 10 + 1}–
                {Math.min(page * 10, state?.total || 0)} of{" "}
                {state?.total || 0}
              </div>

              <div className="flex items-center gap-2">

                <button
                  onClick={() => setPage((p) => Math.max(p - 1, 1))}
                >
                  Prev
                </button>

                <div className="px-3 py-1 bg-blue-600 text-white rounded">
                  {page}
                </div>

                <button
                  onClick={() =>
                    setPage((p) =>
                      Math.min(p + 1, state?.totalPages || 1)
                    )
                  }
                >
                  Next
                </button>

              </div>
            </div>

          </div>
        </Container>
      </MainContainer>
    </ParentContainer>
  );
};

export default UserList;