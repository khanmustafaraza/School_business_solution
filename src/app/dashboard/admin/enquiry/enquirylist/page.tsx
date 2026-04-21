import Container from "@/components/container/Container";
import AdminHeading from "@/components/headings/AdminHeading";
import MainContainer from "@/components/maincontainer/MainContainer";
import ParentContainer from "@/components/parentcontainer/ParentContainer";
import TableContainer from "@/components/tables/tablecontainer/Tablecontainer";
import icons from "@/constants/icons/icons";
import React from "react";
const heading = {
  name: "Classes",
  subHeading: "Manage and monitor all classes",
  href: "/dashboard/admin/class/create",
  btnHeading: "Add Class",
  icon: <icons.FaRegistered />,
};

const EnquiryList = () => {
  return (
    <ParentContainer>
      <MainContainer>
        <AdminHeading heading={heading} />
        <Container>
          <TableContainer>
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-6 py-3 font-medium">Class</th>
                <th className="px-6 py-3 font-medium">Section</th>
                <th className="px-6 py-3 font-medium">Room</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 text-center font-medium">Actions</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              <tr>
                <td>I</td>
                <td>A</td>
              </tr>
            </tbody>
          </TableContainer>
        </Container>
      </MainContainer>
    </ParentContainer>
  );
};

export default EnquiryList;
