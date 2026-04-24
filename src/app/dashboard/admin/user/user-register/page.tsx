"use client";

import ActionBtn from "@/components/actionbtn/ActionBtn";
import Container from "@/components/container/Container";
import AdminHeading from "@/components/headings/AdminHeading";
import MainContainer from "@/components/maincontainer/MainContainer";
import { useUser } from "@/store/admin/user/User";
import { CircleUserRound, UserKey } from "lucide-react";
import ParentContainer from "@/components/parentcontainer/ParentContainer";
import Form from "@/components/formcomponent/Form";
import Input from "@/components/inputs/Input";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { FcDataEncryption } from "react-icons/fc";
import Loader from "@/components/loader/Loader";



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
    <ParentContainer>
      <MainContainer>
        <AdminHeading heading={heading} />
        <Container>
          <Form onSubmit={(e) => handleSubmit(e)}>
          {state.isLoading.loading && <Loader isLoading={state.isLoading.loading} message={state.isLoading.message} />}


            <div className="flex gap-2 flex-wrap my-2">
              <Input onChange={(e) => handleChange(e)} label=" User Name" name="name" value={state.userObj.name} icon={<FaUser />} type="text" placeholder="Enter User Name" />


              {/* Email Address */}
              <Input onChange={(e) => handleChange(e)} label=" Email" name="email" value={state.userObj.email} icon={<FaEnvelope />} type="email" placeholder="Enter Email" />
            </div>

            {/* password */}
            <div className="w-full">
              <Input onChange={(e) => handleChange(e)} label="Enter Password" name="password" value={state.userObj.password} icon={<FcDataEncryption />} type="text" placeholder="Enter Password" />

            </div>

            {/* role */}

            <div className="flex my-4 items-center gap-4">

              <div> <UserKey className=" text-gray-400 text-[16px]" /></div>
              <div><label className="block text-sm font-medium text-gray-700">

                Select Role
              </label></div>
            </div>
            <div className="flex items-start rounded border border-gray-200  bg-white  focus-within:border-gray-300 transition-all py-3 mb-4">

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

            <ActionBtn />
          </Form>
        </Container>
      </MainContainer>
    </ParentContainer>
  );
};

export default UserRegister;
