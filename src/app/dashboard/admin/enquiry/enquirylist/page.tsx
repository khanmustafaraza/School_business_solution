"use client";

import Container from "@/components/container/Container";
import AdminHeading from "@/components/headings/AdminHeading";
import MainContainer from "@/components/maincontainer/MainContainer";
import ParentContainer from "@/components/parentcontainer/ParentContainer";
import TableContainer from "@/components/tables/tablecontainer/Tablecontainer";
import icons from "@/constants/icons/icons";
import { useEnquiry } from "@/store/enquiry/Enquiry";
import React, { useEffect } from "react";
import { FaInbox } from "react-icons/fa";

const heading = {
  name: "Enquiries",
  subHeading: "Manage and monitor all admission enquiries",
  href: "#",
  btnHeading: "Refresh",
  icon: <icons.FaRegistered />,
};

const EnquiryList = () => {
  const { state, getEnquiryList } = useEnquiry();

  useEffect(() => {
    getEnquiryList();
  }, []);

  return (
    <ParentContainer>
      <MainContainer>
        <AdminHeading heading={heading} />

        <Container>
          <TableContainer>
            {/* HEADER */}
            <thead className="sticky top-0 z-10 bg-white border-b border-slate-100">
              <tr>
                {/* <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Student
                </th> */}
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Class
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Message
                </th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody className="divide-y divide-slate-50">
              {state.enquiryList.length > 0 ? (
                state.enquiryList.map((item) => (
                  <tr
                    key={item._id}
                    className="group hover:bg-slate-50 transition relative"
                  >
                    {/* LEFT ACCENT BAR ON HOVER */}
                    <td className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-indigo-500 transition" />

                    {/* STUDENT */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        {/* <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-100 to-slate-200 flex items-center justify-center text-sm font-bold text-slate-700">
                          {item.name?.charAt(0)?.toUpperCase()}
                        </div> */}

                        <div>
                          <p className="font-semibold text-slate-900">
                            {item.name}
                          </p>
                          <p className="text-xs text-slate-400">
                            Admission Enquiry
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* CONTACT */}
                    <td className="px-6 py-5">
                      <p className="font-medium text-slate-800">
                        {item.mobile}
                      </p>
                      <p className="text-xs text-slate-400">Phone</p>
                    </td>

                    {/* CLASS */}
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-600">
                        {item.addmissionClass}
                      </span>
                    </td>

                    {/* MESSAGE */}
                    <td className="px-6 py-5 max-w-[260px]">
                      <p className="text-sm text-slate-600 truncate">
                        {item.message || "No message provided"}
                      </p>
                    </td>

                    {/* ACTIONS */}
                    <td className="px-6 py-5">
                      <div className="flex justify-end items-center gap-2 opacity-80 group-hover:opacity-100 transition">
                        <button className="px-3 py-1.5 text-xs rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-white shadow-sm transition">
                          View
                        </button>

                        <button className="px-3 py-1.5 text-xs rounded-lg bg-red-500/10 text-red-600 hover:bg-red-500/20 transition">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-20 text-center">
                    <div className="flex flex-col items-center justify-center text-slate-400">
                      <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center text-xl mb-3">
                        📭
                      </div>

                      <p className="text-sm font-semibold text-slate-500">
                        No enquiries yet
                      </p>

                      <p className="text-xs text-slate-400 mt-1">
                        When students submit enquiries, they’ll appear here
                      </p>
                    </div>
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

export default EnquiryList;
