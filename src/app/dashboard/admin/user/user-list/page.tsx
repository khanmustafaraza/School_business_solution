"use client";
import Container from "@/components/container/Container";
import AdminHeading from "@/components/headings/AdminHeading";
import MainContainer from "@/components/maincontainer/MainContainer";
import useClass from "@/store/class/Class";
import { useUser } from "@/store/user/User";
import { UserKey } from "lucide-react";
import React, { useEffect } from "react";
import { FaRegistered } from "react-icons/fa";
import { FiEdit2, FiEye, FiTrash2 } from "react-icons/fi";

const heading = {
  name: "User List",
  subHeading: "Add and manage User List information.",
  href: "/dashboard/admin/user/user-register",
  btnHeading: "Add User",
  icon: <FaRegistered />,
};

const UserList = () => {
  const { state, getAllUser } = useUser();
  useEffect(() => {
    getAllUser(1);
  }, []);
  return (
    <div className="bg-white p-2 sm:p-4">
      <MainContainer>
        <AdminHeading heading={heading} />

        <Container>
          {/* Filters */}
          <div className="mb-5 rounded bg-white p-4">
            <h4>Apply Filters</h4>
            <div className="flex flex-col md:flex-row gap-4 md:items-end">
              {/* Role Select */}
              <div className="w-full md:w-1/3">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Select Role
                </label>
                <div className="flex items-center rounded border border-gray-300 bg-white focus-within:border-gray-500 focus-within:ring-2 focus-within:ring-gray-100 transition-all px-3 py-2">
                  <UserKey className="text-gray-400 text-[16px]" />
                  <select
                    name="role"
                    className="w-full bg-transparent text-gray-800 outline-none px-2 text-sm"
                  >
                    <option>Select Role</option>
                    <option value="student">Student</option>
                    <option value="gameteacher">Game Teacher</option>
                    <option value="teacher">Teacher</option>
                    <option value="classteacher">Class Teacher</option>
                    <option value="library">Library</option>
                    <option value="driver">Driver</option>
                    <option value="accountant">Accountant</option>
                  </select>
                </div>
              </div>

              {/* Search */}
              <div className="w-full md:w-2/3">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Search
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by name, email..."
                    className="w-full rounded border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
                  />
                  <span className="absolute left-3 top-2.5 text-gray-400">
                    🔍
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-hidden rounded bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-[600px] w-full text-left text-sm">
                <thead className="bg-slate-100 text-slate-600">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Name</th>
                    <th className="px-4 py-3 font-semibold hidden sm:table-cell">
                      Email
                    </th>
                    <th className="px-4 py-3 font-semibold">Role</th>
                    <th className="px-4 py-3 font-semibold text-center">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {state?.userList?.map((item) => (
                    <tr
                      key={item._id}
                      className="border-t border-slate-100 hover:bg-slate-50"
                    >
                      <td className="px-4 py-3 font-medium text-slate-800">
                        {item.name}
                      </td>

                      {/* Hide email on very small screens */}
                      <td className="px-4 py-3 text-slate-600 hidden sm:table-cell">
                        {item.email}
                      </td>

                      <td className="px-4 py-3 text-slate-600">{item.role}</td>

                      <td className="px-4 py-3">
                        <div className="flex items-center justify-center gap-1 sm:gap-2">
                          <button className="rounded p-2 text-slate-500 hover:bg-slate-100">
                            <FiEye size={16} />
                          </button>
                          <button className="rounded p-2 text-blue-500 hover:bg-blue-50">
                            <FiEdit2 size={16} />
                          </button>
                          <button className="rounded p-2 text-red-500 hover:bg-red-50">
                            <FiTrash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* Pagination */}
          <div className="flex justify-center mt-4">
            <div className="flex gap-2 flex-wrap">
              {/* Prev */}
              <button
                className="px-3 py-1 border rounded text-sm"
                disabled={state.page === 1}
                onClick={() => getAllUser(state.page - 1)}
              >
                Prev
              </button>

              {/* Page Numbers */}
              {Array.from({ length: state.totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => getAllUser(i + 1)}
                  className={`px-3 py-1 border rounded text-sm ${
                    state.page === i + 1 ? "bg-gray-200" : ""
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              {/* Next */}
              <button
                className="px-3 py-1 border rounded text-sm"
                disabled={state.page === state.totalPages}
                onClick={() => getAllUser(state.page + 1)}
              >
                Next
              </button>
            </div>
          </div>
        </Container>
      </MainContainer>
    </div>
  );
};

export default UserList;
