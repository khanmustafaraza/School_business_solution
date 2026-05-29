"use client";
import ActionBtn from "@/components/actionbtn/ActionBtn";
import Container from "@/components/container/Container";
import MainContainer from "@/components/maincontainer/MainContainer";
import useSchool from "@/store/admin/school/School";
import { School } from "lucide-react";
import icons from "@/constants/icons/icons";
import ParentContainer from "@/components/parentcontainer/ParentContainer";
import Form from "@/components/formcomponent/Form";
import Input from "@/components/inputs/Input";
import H1 from "@/components/headings/H1";

const heading = {
  name: "Add School",
  subHeading: "Add and manage your school’s basic information.",
  href: "/dashboard/admin/school/school-list",
  btnHeading: "School List",
  icon: <School />,
};

const SchoolRegister = () => {
  const { state, handleChange, handleSubmit } = useSchool();
  return (
    <ParentContainer>
      <MainContainer>
        <Container>
          <H1 heading={heading} />
          <Form onSubmit={(e) => handleSubmit(e)}>
            {/* first  */}
            <div className="flex  flex-wrap  gap-2 justify-center">
              <Input
                name="name"
                value={state.schoolObj.name}
                type="text"
                placeholder="Enter the School Name"
                onChange={(e) => handleChange(e)}
                icon={<icons.FaSchool />}
                label="School Name"
              />
              <Input
                name="code"
                value={state.schoolObj.code}
                type="number"
                placeholder="Enter the  Affiliation Code"
                onChange={(e) => handleChange(e)}
                icon={<icons.FaIdCard />}
                label=" Affiliation Code"
              />
              {/* <Input /> */}
            </div>

            {/* second */}
            <div className="flex  flex-wrap  gap-2 justify-center">
              <Input
                name="email"
                value={state.schoolObj.email}
                type="email"
                placeholder="Enter the Email Address"
                onChange={(e) => handleChange(e)}
                icon={<icons.FaEnvelope />}
                label=" Email Address"
              />
              <Input
                name="code"
                value={state.schoolObj.code}
                type="number"
                placeholder="Enter the  Affiliation Code"
                onChange={(e) => handleChange(e)}
                icon={<icons.FaIdCard />}
                label=" Affiliation Code"
              />
              {/* <Input /> */}
            </div>
            {/* third */}
            <div className="flex  flex-wrap  gap-2 justify-center">
              <Input
                name="contact"
                value={state.schoolObj.contact}
                type="tel"
                placeholder="Enter the Contact Number"
                onChange={(e) => handleChange(e)}
                icon={<icons.FaPhoneAlt />}
                label="Contact Number"
              />
              <Input
                name="address"
                value={state.schoolObj.address}
                type="text"
                placeholder="Enter the  Address"
                onChange={(e) => handleChange(e)}
                icon={<icons.FaMapMarkerAlt />}
                label="Address"
              />
            </div>
            {/* school image */}
            <div className="md:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Upload School Image
              </label>

              <label className="flex items-center gap-2 w-full px-3 py-3 bg-white border rounded cursor-pointer focus-within:ring-1 focus-within:ring-gray-400">
                <icons.FaImage className="text-gray-400 text-sm" />

                <span className="text-sm text-gray-600 truncate">
                  {state.schoolObj.image?.name || "Upload school image"}
                </span>

                <input
                  name="image"
                  type="file"
                  accept="image/*"
                  onChange={handleChange}
                  className="hidden"
                />
              </label>
            </div>
            <ActionBtn />
          </Form>
        </Container>
      </MainContainer>
    </ParentContainer>
  );
};

export default SchoolRegister;
