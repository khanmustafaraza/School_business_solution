"use client";

import ActionBtn from "@/components/actionbtn/ActionBtn";
import Container from "@/components/container/Container";
import AdminHeading from "@/components/headings/AdminHeading";
import MainContainer from "@/components/maincontainer/MainContainer";
import { useUser } from "@/store/admin/user/User";
import { CircleUserRound, KeySquare, UserKey } from "lucide-react";
import icons from "@/constants/icons/icons";
const heading = {
  name: "Add User",
  subHeading: "Add and manage User basic information.",
  href: "/dashboard/admin/user/user-list",
  btnHeading: "User List",
  icon: <CircleUserRound />,
};

const UserRegister = () => {
  const { state, handleChange, handleSubmit } = useUser();
  return (
    <div className="bg-white p-1">
      <MainContainer>
        <AdminHeading heading={heading} />
        <Container>
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
            onSubmit={(e) => handleSubmit(e)}
          >
            {/* School Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                User Name
              </label>
              <div className="flex items-center rounded border border-gray-300 bg-white px-3 focus-within:border-gray-500 focus-within:ring-2 focus-within:ring-gray-100 transition-all">
                <icons.FaUser className="text-gray-400 text-[16px]" />
                <input
                  name="name"
                  value={state.userObj.name}
                  onChange={(e) => handleChange(e)}
                  type="text"
                  placeholder="Enter User name"
                  className="w-full bg-transparent px-3 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Affiliation Code */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="flex items-center rounded border border-gray-300 bg-white px-3 focus-within:border-gray-500 focus-within:ring-2 focus-within:ring-gray-100 transition-all">
                <icons.FaEnvelope className="text-gray-400 text-[16px]" />
                <input
                  name="email"
                  value={state.userObj.email}
                  onChange={(e) => handleChange(e)}
                  type="email"
                  placeholder="Enter Email"
                  className="w-full bg-transparent px-3 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="flex items-center rounded border border-gray-300 bg-white px-3 focus-within:border-gray-500 focus-within:ring-2 focus-within:ring-gray-100 transition-all">
                <KeySquare className="text-gray-400 text-[16px]" />
                <input
                  name="password"
                  value={state.userObj.password}
                  onChange={(e) => handleChange(e)}
                  type="password"
                  placeholder="Enter Password"
                  className="w-full bg-transparent px-3 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* role */}
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Select Role
              </label>
              <div className="flex items-start rounded border border-gray-300 bg-white  focus-within:border-gray-500 focus-within:ring-2 focus-within:ring-gray-100 transition-all py-3 px-3">
                <UserKey className="mt-1 text-gray-400 text-[16px]" />
                <select
                  name="role"
                  className="w-full  bg-transparent  text-gray-800 outline-none placeholder:text-gray-400 px-3"
                  //  value={state.userObj.address}
                  onChange={(e) => handleChange(e)}
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

            <ActionBtn />
          </form>
        </Container>
      </MainContainer>
    </div>
  );
};

export default UserRegister;
