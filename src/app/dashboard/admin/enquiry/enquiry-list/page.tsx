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
import Example from "@/components/modal/Modal";
import useModal from "@/store/togglemodal/ToggleModal";
import Modal from "@/components/modal/Modal";


const EnquiryList = () => {
  const { state, getEnquiryList, handleUpdate, comment, setComment } = useEnquiry();
  const { openModal, updateId,closeModal } = useModal()

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

          <TableContainer >

            {/* HEADER */}

            <thead className="primary-bg">
              <tr>

                <th className="px-6 py-5 text-xs font-bold uppercase tracking-[2px] text-white">
                  Name of Enquirer
                </th>

                <th className="px-6 py-5 text-xs font-bold uppercase tracking-[2px] text-white">
                  Contact
                </th>

                <th className="px-6 py-5 text-xs font-bold uppercase tracking-[2px] text-white">
                  Admission Class
                </th>

                <th className="px-6 py-5 text-xs font-bold uppercase tracking-[2px] text-white">
                  Message
                </th>
                <th className="px-6 py-5 text-xs font-bold uppercase tracking-[2px] text-white">
                  comment
                </th>
                <th className="px-6 py-5 text-xs font-bold uppercase tracking-[2px] text-white">
                  Status
                </th>

                <th className="px-6 py-5 text-xs font-bold uppercase tracking-[2px] text-white">
                  Actions
                </th>

              </tr>
            </thead>

            {/* BODY */}

            <tbody className="divide-y divide-slate-100 bg-white">

              {state.enquiryList.length > 0 ? (
                state.enquiryList.map((item, index) => (
                  <tr
                    key={item._id}
                    className="group hover:bg-slate-50 transition-all duration-300"
                  >

                    {/* NAME */}

                    <td className="px-6 py-5">

                      <div className="flex items-center justify-center gap-4">

                        {/* AVATAR */}

                        <div className="relative">

                          <div className="w-12 h-12 rounded-2xl primary-bg flex items-center justify-center text-sm font-bold text-white shadow-lg">
                            {item.name?.charAt(0)?.toUpperCase() || "?"}
                          </div>

                          <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full secondary-bg border-2 border-white"></div>

                        </div>

                        {/* INFO */}

                        <div>

                          <h4 className="text-sm font-semibold primary-text">
                            {item.name || "Unknown"}
                          </h4>

                          <p className="text-xs secondary-text mt-1">
                            Enquiry #{index + 1}
                          </p>

                        </div>

                      </div>

                    </td>

                    {/* MOBILE */}

                    <td className="px-6 py-5">

                      <div>

                        <p className="font-semibold primary-text">
                          {item.mobile || "N/A"}
                        </p>

                        <p className="text-xs secondary-text mt-1">
                          Mobile Number
                        </p>

                      </div>

                    </td>

                    {/* CLASS */}

                    <td className="px-6 py-5">

                      <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-[#fdf2f8] text-[#cc0052] border border-pink-100 shadow-sm">
                        {item.addmissionClass || "N/A"}
                      </span>

                    </td>

                    {/* MESSAGE */}

                    <td className="px-6 py-5 max-w-[300px]">

                      <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                        {item.message?.trim() || "No message provided"}
                      </p>

                    </td>
                    <td className="px-6 py-5 max-w-[300px]">

                      <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                        {item?.comment?.trim() || "No message provided"}
                      </p>

                    </td>
                    <td className="px-6 py-5 max-w-[300px]">

                      <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
                        {item?.status?.trim() || "No message provided"}
                      </p>

                    </td>

                    {/* ACTIONS */}

                    <td className="px-6 py-5">

                      <div className="flex items-center justify-center gap-3">

                        {/* EDIT */}

                        <button
                          title="Edit Enquiry"
                          className="w-10 h-10 rounded-xl bg-[#e6edf5] text-[#003366] hover:primary-bg hover:text-white transition-all duration-300 hover:scale-105 shadow-sm"
                          onClick={() => { openModal(item._id) }}
                        >
                          <div className="flex items-center justify-center">
                            <Pencil size={16} />
                          </div>
                        </button>

                        {/* DELETE */}

                        <button
                          title="Delete Enquiry"
                          className="w-10 h-10 rounded-xl bg-[#fff1f5] text-[#cc0052] hover:bg-[#cc0052] hover:text-white transition-all duration-300 hover:scale-105 shadow-sm"
                        >
                          <div className="flex items-center justify-center">
                            <Trash2 size={16} />
                          </div>
                        </button>

                      </div>

                    </td>

                  </tr>
                ))
              ) : (
                <tr>

                  <td
                    colSpan={5}
                    className="py-24"
                  >

                    <div className="flex flex-col items-center justify-center">

                      <div className="w-24 h-24 rounded-full bg-slate-100 flex items-center justify-center mb-5">
                        {/* <icons. className="w-10 h-10 text-slate-400" /> */}
                      </div>

                      <h3 className="text-xl font-semibold primary-text">
                        No Enquiries Found
                      </h3>

                      <p className="text-sm secondary-text mt-2">
                        New admission enquiries will appear here.
                      </p>

                    </div>

                  </td>

                </tr>
              )}

            </tbody>

          </TableContainer>
          {/* <Example/> */}
          <Modal title="Comment For Status Of Enquiry">
            <form
              onSubmit={(e) => handleUpdate(e, updateId)}
              className="space-y-5"
            >

              {/* COMMENT FIELD */}

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Any Comment Related To Enquiry
                </label>

                <textarea
                  rows={5}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Write your comment here..."
                  className="w-full rounded-2xl border border-slate-200 p-4 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#003366]"
                ></textarea>
              </div>

              {/* BUTTONS */}

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  className="px-5 py-2 rounded-xl border border-slate-200 text-slate-600"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl secondary-bg text-white"
                >
                  Save Comment
                </button>
              </div>

            </form>
          </Modal>
        </Container>
      </MainContainer>
    </ParentContainer>
  );
};

export default EnquiryList;
