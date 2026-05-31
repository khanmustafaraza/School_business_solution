"use client";

import ActionBtn from "@/components/actionbtn/ActionBtn";
import Container from "@/components/container/Container";
import MainContainer from "@/components/maincontainer/MainContainer";
import useClass from "@/store/admin/class/Class";
import { LayoutPanelTop } from "lucide-react";
import icons from "@/constants/icons/icons";

import ParentContainer from "@/components/parentcontainer/ParentContainer";
import H1 from "@/components/headings/H1";
import Form from "@/components/formcomponent/Form";
import Input from "@/components/inputs/Input";
import { FaList } from "react-icons/fa";

const heading = {
  name: "Add Class",
  subHeading: "Add and manage your class basic information.",
  href: "/dashboard/admin/class/class-list",
  btnHeading: "Class List",
  icon: <FaList />,
};

const ClassRegister = () => {
  const { state, handleChange, handleSubmit } = useClass();
  return (
    <ParentContainer>
      <MainContainer>
        <H1 heading={heading} />
        <Container>
          <Form onSubmit={(e) => handleSubmit(e)}>
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
        </Container>
      </MainContainer>
    </ParentContainer>
  );
};

export default ClassRegister;
