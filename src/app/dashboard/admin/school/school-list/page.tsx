"use client";

import { useEffect } from "react";

import Container from "@/components/container/Container";
import MainContainer from "@/components/maincontainer/MainContainer";
import ParentContainer from "@/components/parentcontainer/ParentContainer";

import H1 from "@/components/headings/H1";
import TableContainer from "@/components/tables/tablecontainer/Tablecontainer";

import useSchool from "@/store/admin/school/School";

import icons from "@/constants/icons/icons";
import TableHeader from "@/components/tables/tableheader/TableHeader";
import H2 from "@/components/headings/H2";
import SearchContainer from "@/components/searchcontainer/SearchContainer";
import { useToggle } from "@/store/toggledashboard/Toggledashboard";
import { FaPlus } from "react-icons/fa";
const schoolColumns = [
  { label: "School" },
  { label: "Code" },
  { label: "Email" },
  { label: "Phone" },
  { label: "Address" },
  { label: "Actions" },
];
const heading = {
  name: "School Directory",
  subHeading: "Registered School Records",
  href: "/dashboard/admin/school/school-register",
  btnHeading: "Add School",
  icon: <FaPlus />,
};

const SchoolList = () => {
  const { state, getSchools, handleDelete } = useSchool();
  const { view } = useToggle();

  useEffect(() => {
    getSchools();
  }, []);

  return (
    <ParentContainer>
      <MainContainer>
        <H1 heading={heading} />
        <H2 title="Total School" total={state.schools.length} />
        <SearchContainer
          onChange={() => console.log("first")}
          title="School Filter "
          placeholder="Search for ......"
        />

        <Container>
          <div className="overflow-hidden rounded-md border border-gray-300 bg-white">
            {/* HEADER */}

            {/* TABLE */}

            {view == "list" && (
              <TableContainer>
                <TableHeader columns={schoolColumns} />
                <tbody className="bg-white dark:bg-slate-900">
                  {state?.schools?.map((school: any) => (
                    <tr
                      key={school._id}
                      className="hover:bg-slate-50 dark:hover:bg-slate-800/40"
                    >
                      {/* SCHOOL (IMAGE + NAME) */}
                      <td className="border px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 overflow-hidden rounded-full bg-indigo-100">
                            <img
                              src={school.image}
                              alt={school.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <span className="font-semibold">{school.name}</span>
                        </div>
                      </td>

                      {/* CODE */}
                      <td className="border px-6 py-4">{school.code}</td>

                      {/* EMAIL */}
                      <td className="border px-6 py-4">{school.email}</td>

                      {/* CONTACT */}
                      <td className="border px-6 py-4">{school.contact}</td>

                      {/* ADDRESS */}
                      <td className="border px-6 py-4">{school.address}</td>

                      {/* ACTION */}
                      <td className="border px-6 py-4">
                        <div className="flex justify-end">
                          <button
                            onClick={() => handleDelete(school._id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </TableContainer>
            )}
            {view === "grid" && (
              <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
                {state?.schools?.map((school: any) => (
                  <div
                    key={school._id}
                    className="rounded-lg border bg-white p-4 shadow-sm transition hover:shadow-md dark:bg-slate-900"
                  >
                    {/* HEADER */}
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 overflow-hidden rounded-full bg-indigo-100">
                        <img
                          src={school.image}
                          alt={school.name}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div>
                        <h3 className="text-base font-semibold">
                          {school.name}
                        </h3>
                        <p className="text-xs text-gray-500">
                          Code: {school.code}
                        </p>
                      </div>
                    </div>

                    {/* DETAILS */}
                    <div className="mt-4 space-y-2 text-sm text-gray-600">
                      <p>
                        <span className="font-medium text-gray-800">
                          Email:
                        </span>{" "}
                        {school.email}
                      </p>

                      <p>
                        <span className="font-medium text-gray-800">
                          Phone:
                        </span>{" "}
                        {school.contact}
                      </p>

                      <p>
                        <span className="font-medium text-gray-800">
                          Address:
                        </span>{" "}
                        {school.address}
                      </p>
                    </div>

                    {/* ACTION */}
                    <div className="mt-4 flex justify-end">
                      <button
                        onClick={() => handleDelete(school._id)}
                        className="rounded bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Container>
      </MainContainer>
    </ParentContainer>
  );
};

export default SchoolList;
