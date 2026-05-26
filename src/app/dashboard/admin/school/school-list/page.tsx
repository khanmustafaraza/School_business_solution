"use client";

import { useEffect } from "react";

import Container from "@/components/container/Container";
import MainContainer from "@/components/maincontainer/MainContainer";
import ParentContainer from "@/components/parentcontainer/ParentContainer";

import H1 from "@/components/headings/H1";
import TableContainer from "@/components/tables/tablecontainer/Tablecontainer";

import useSchool from "@/store/admin/school/School";

import icons from "@/constants/icons/icons";

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
          <div className="overflow-hidden rounded-md border border-gray-300 bg-white">
            {/* HEADER */}

            <div className="border-b border-gray-300 bg-gray-100 px-4 py-3">
              <h2 className="text-lg font-semibold">School Records</h2>
            </div>

            {/* TABLE */}

            <TableContainer>
              <thead className="bg-gray-50">
                <tr>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold">
                    Logo
                  </th>

                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold">
                    School Name
                  </th>

                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold">
                    Code
                  </th>

                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold">
                    Email
                  </th>

                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold">
                    Contact
                  </th>

                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold">
                    Address
                  </th>

                  <th className="border border-gray-300 px-4 py-3 text-center text-sm font-semibold">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {state?.schools?.length > 0 ? (
                  state.schools.map((school: any, index: number) => (
                    <tr key={index} className="hover:bg-gray-50">
                      {/* IMAGE */}

                      <td className="border border-gray-300 px-4 py-3">
                        <img
                          src={school.image}
                          alt={school.name}
                          className="h-14 w-14 rounded border object-cover"
                        />
                      </td>

                      {/* NAME */}

                      <td className="border border-gray-300 px-4 py-3 text-sm">
                        {school.name}
                      </td>

                      {/* CODE */}

                      <td className="border border-gray-300 px-4 py-3 text-sm">
                        {school.code}
                      </td>

                      {/* EMAIL */}

                      <td className="border border-gray-300 px-4 py-3 text-sm">
                        {school.email}
                      </td>

                      {/* CONTACT */}

                      <td className="border border-gray-300 px-4 py-3 text-sm">
                        {school.contact}
                      </td>

                      {/* ADDRESS */}

                      <td className="border border-gray-300 px-4 py-3 text-sm">
                        {school.address}
                      </td>

                      {/* ACTION */}

                      <td className="border border-gray-300 px-4 py-3">
                        <div className="flex justify-center">
                          <button
                            onClick={() => handleDelete(school._id)}
                            className="rounded bg-red-600 px-3 py-2 text-sm text-white hover:bg-red-700"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={7}
                      className="py-8 text-center text-sm text-gray-500"
                    >
                      No School Records Found
                    </td>
                  </tr>
                )}
              </tbody>
            </TableContainer>
          </div>
        </Container>
      </MainContainer>
    </ParentContainer>
  );
};

export default SchoolList;
