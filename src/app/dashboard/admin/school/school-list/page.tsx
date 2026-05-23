"use client";

import Container from "@/components/container/Container";
import MainContainer from "@/components/maincontainer/MainContainer";
import useSchool from "@/store/admin/school/School";
import { useEffect } from "react";
import icons from "@/constants/icons/icons";

import ParentContainer from "@/components/parentcontainer/ParentContainer";
import H1 from "@/components/headings/H1";
import TableContainer from "@/components/tables/tablecontainer/Tablecontainer";

const heading = {
  name: "School Directory",
  subHeading: "Registered School Records",
  href: "/dashboard/admin/school/school-register",
  btnHeading: "Add School",
  icon: <icons.FaRegistered />,
};

const SchoolList = () => {
  const { state, getSchools, handleDelete } = useSchool();

  useEffect(() => {
    getSchools();
  }, []);

  return (
    <ParentContainer>
      <MainContainer>
        <H1 heading={heading} />

        <Container>
          {/* School List */}
          <TableContainer>
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 border text-left">Image</th>
                <th className="px-4 py-3 border text-left">Name</th>
                <th className="px-4 py-3 border text-left">Code</th>
                <th className="px-4 py-3 border text-left">Email</th>
                <th className="px-4 py-3 border text-left">Contact</th>
                <th className="px-4 py-3 border text-left">Address</th>
                <th className="px-4 py-3 border text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {state?.schools?.length > 0 ? (
                state.schools.map((school: any, index: number) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3 border">
                      <img
                        src={`${school.image}`}
                        alt={school.name}
                        className="w-14 h-14 rounded object-cover"
                      />
                    </td>

                    <td className="px-4 py-3 border">{school.name}</td>

                    <td className="px-4 py-3 border">{school.code}</td>

                    <td className="px-4 py-3 border">{school.email}</td>

                    <td className="px-4 py-3 border">{school.contact}</td>

                    <td className="px-4 py-3 border">{school.address}</td>

                    {/* Action Buttons */}
                    <td className="px-4 py-3 border">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          className="bg-gray-500 hover:primary-bg text-white px-3 py-2 rounded text-sm"
                          onClick={() => handleDelete(school._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="text-center py-6 text-gray-500">
                    No School Records Found
                  </td>
                </tr>
              )}
            </tbody>
          </TableContainer>
        </Container>
      </MainContainer>
    </ParentContainer>
  );
};

export default SchoolList;
