"use client";
import Container from "@/components/container/Container";
import AdminHeading from "@/components/headings/AdminHeading";
import MainContainer from "@/components/maincontainer/MainContainer";
import { useUser } from "@/store/admin/user/User";
import { UserKey } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import icons from "@/constants/icons/icons";

const heading = {
  name: "User List",
  subHeading: "Add and manage User List information.",
  href: "/dashboard/admin/user/user-register",
  btnHeading: "Add User",
  icon: <icons.FaRegistered />,
};

const UserList = () => {
  const { state, getAllUser } = useUser();
  useEffect(() => {
    getAllUser();
  }, []);
  return (
    <div className="bg-white p-2 sm:p-4">
      <MainContainer>
        <AdminHeading heading={heading} />

        <Container>
         

          {/* Table */}
          <div className="overflow-hidden rounded bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-150 w-full text-left text-sm">
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
                          {/* <button className="rounded p-2 text-slate-500 hover:bg-slate-100">
                            <FiEye size={16}  />
                          </button> */}
                         {
                          item.role == "student" && <Link href={`/dashboard/admin/student/${item._id}`} className="rounded p-2 text-blue-500 hover:bg-blue-50">
                            <icons.FiEdit2 size={16} title={`Create ${item.role} Profile`} />
                          </Link>
                         }
                         {
                          item.role == "teacher"  && <Link href={`/dashboard/admin/teacher/${item._id}`} className="rounded p-2 text-blue-500 hover:bg-blue-50">
                            <icons.FiEdit2 size={16} title={`Create ${item.role} Profile`} />
                          </Link>
                         }
                         {
                          item.role == "classteacher"  && <Link href={`/dashboard/admin/teacher/${item._id}`} className="rounded p-2 text-blue-500 hover:bg-blue-50">
                            <icons.FiEdit2 size={16}title={`Create ${item.role} Profile`} />
                          </Link>
                         }
                         {
                          item.role == "driver" && <Link href={`/dashboard/admin/driver/${item._id}`} className="rounded p-2 text-blue-500 hover:bg-blue-50">
                            <icons.FiEdit2 size={16} title={`Create ${item.role} Profile`} />
                          </Link>
                         }
                          <button className="rounded p-2 text-red-500 hover:bg-red-50">
                            <icons.FiTrash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
         
        </Container>
      </MainContainer>
    </div>
  );
};

export default UserList;
