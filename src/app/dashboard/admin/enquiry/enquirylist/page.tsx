"use client";

import Container from "@/components/container/Container";
import AdminHeading from "@/components/headings/AdminHeading";
import MainContainer from "@/components/maincontainer/MainContainer";
import ParentContainer from "@/components/parentcontainer/ParentContainer";
import TableContainer from "@/components/tables/tablecontainer/Tablecontainer";
import icons from "@/constants/icons/icons";
import { useEnquiry } from "@/store/enquiry/Enquiry";
import { useEffect } from "react";

import { Pencil, Trash2 } from "lucide-react";
import Loader from "@/components/loader/Loader";


const EnquiryList = () => {
  const { state, getEnquiryList } = useEnquiry();

  useEffect(() => {
    getEnquiryList();
  }, []);

  return (
    <ParentContainer>
      <MainContainer>
        {/* <AdminHeading /> */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <h4 className="text-xl font-semibold text-slate-900">
              Enquiry List
            </h4>
            <p className="text-sm text-slate-500">
              All enquiries received so far
            </p>
          </div>

          <input
            type="text"
            placeholder="Search by name or mobile..."
            className="w-64 px-4 py-2 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <Container>
          {state.isLoading.loading && <Loader isLoading={state.isLoading.loading} message={state.isLoading.message} />}

          <TableContainer>
            {/* HEADER */}
            <thead className="sticky top-0 z-10 bg-white border-b border-slate-100">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Name
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Mobile
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Class / Admission
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Message
                </th>

                <th className="px-6 py-4 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-50">
              {state.enquiryList.length > 0 ? (
                state.enquiryList.map((item) => (
                  <tr key={item._id} className="hover:bg-slate-50 transition">

                    {/* NAME */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-linear-to-br from-indigo-100 to-slate-200 flex items-center justify-center text-sm font-bold text-slate-700">
                          {item.name?.charAt(0)?.toUpperCase() || "?"}
                        </div>

                        <div>
                          <p className="font-semibold text-slate-900">
                            {item.name || "Unknown"}
                          </p>
                          <p className="text-xs text-slate-400">
                            Admission Enquiry
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* MOBILE */}
                    <td className="px-6 py-5">
                      <p className="font-medium text-slate-800">
                        {item.mobile || "N/A"}
                      </p>
                      <p className="text-xs text-slate-400">Phone</p>
                    </td>

                    {/* CLASS */}
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-600">
                        {item.addmissionClass || "N/A"}
                      </span>
                    </td>

                    {/* MESSAGE */}
                    <td className="px-6 py-5 max-w-65">
                      <p className="text-sm text-slate-600 truncate">
                        {item.message?.trim() || "No message provided"}
                      </p>
                    </td>

                    {/* ACTIONS */}
                    <td className="px-6 py-5 text-right">
                      <div className="flex justify-end items-center gap-3">

                        {/* EDIT */}
                        <button title="Edit Enquiry" className="p-2 rounded-md text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition">
                          <Pencil size={16} />
                        </button>

                        {/* DELETE */}
                        <button title="Delete Enquiry" className="p-2 rounded-md text-slate-400 hover:text-red-600 hover:bg-red-50 transition">
                          <Trash2 size={16} />
                        </button>

                      </div>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-20 text-center">
                    No enquiries yet
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
