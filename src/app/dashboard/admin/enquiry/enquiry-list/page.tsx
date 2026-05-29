"use client";

import Container from "@/components/container/Container";
import AdminHeading from "@/components/headings/AdminHeading";
import MainContainer from "@/components/maincontainer/MainContainer";
import ParentContainer from "@/components/parentcontainer/ParentContainer";
import TableContainer from "@/components/tables/tablecontainer/Tablecontainer";
import icons from "@/constants/icons/icons";
import { useEnquiry } from "@/store/enquiry/Enquiry";
import { useEffect } from "react";

import { MessageSquare, Pencil, Trash2 } from "lucide-react";
import Loader from "@/components/loader/Loader";
import useModal from "@/store/togglemodal/ToggleModal";
import Modal from "@/components/modal/Modal";

const EnquiryList = () => {
  const {
    state,
    getEnquiryList,
    handleUpdate,
    comment,
    setComment,
    handleDelete,
  } = useEnquiry();
  const { openModal, updateId } = useModal();

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
            className="w-64 px-4 py-3 text-sm rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <Container>
          {state.isLoading.loading && (
            <Loader
              isLoading={state.isLoading.loading}
              message={state.isLoading.message}
            />
          )}

    
            <TableContainer>
              
              {/* TABLE HEADER */}
              <thead className="border-b border-white/10 bg-white/[0.03]">
                <tr className="text-left">
                  {[
                    "Enquirer",
                    "Contact",
                    "Class",
                    "Message",
                    "Comment",
                    "Status",
                    "Actions",
                  ].map((head) => (
                    <th
                      key={head}
                      className="px-6 py-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400"
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* BODY */}
              <tbody className="divide-y divide-white/[0.05]">
                {state.enquiryList.length > 0 ? (
                  state.enquiryList.map((item, index) => (
                    <tr
                      key={item._id}
                      className="group transition-all duration-300 hover:bg-white/[0.03]"
                    >
                      
                      {/* USER */}
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          
                          <div className="relative">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-sm font-bold text-white shadow-lg">
                              {item.name?.charAt(0)?.toUpperCase() || "?"}
                            </div>

                            <div className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-[#0b1020] bg-emerald-400 shadow-[0_0_10px_#4ade80]" />
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-white">
                              {item.name || "Unknown"}
                            </h4>

                            <p className="mt-1 text-xs text-slate-500">
                              Enquiry #{index + 1}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* MOBILE */}
                      <td className="px-6 py-5">
                        <div>
                          <p className="font-medium text-slate-200">
                            {item.mobile || "N/A"}
                          </p>

                          <p className="mt-1 text-xs text-slate-500">
                            Contact Number
                          </p>
                        </div>
                      </td>

                      {/* CLASS */}
                      <td className="px-6 py-5">
                        <span className="inline-flex items-center rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-1.5 text-xs font-semibold text-pink-300">
                          {item.addmissionClass || "N/A"}
                        </span>
                      </td>

                      {/* MESSAGE */}
                      <td className="max-w-[260px] px-6 py-5">
                        <p className="line-clamp-2 text-sm leading-7 text-slate-400">
                          {item.message?.trim() ||
                            "No message provided"}
                        </p>
                      </td>

                      {/* COMMENT */}
                      <td className="max-w-[260px] px-6 py-5">
                        <p className="line-clamp-2 text-sm leading-7 text-slate-400">
                          {item?.comment?.trim() ||
                            "No comment available"}
                        </p>
                      </td>

                      {/* STATUS */}
                      <td className="px-6 py-5">
                        <span
                          className={`inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold ${
                            item.status === "Pending"
                              ? "bg-amber-500/10 text-amber-300 border border-amber-500/20"
                              : "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20"
                          }`}
                        >
                          {item.status || "Pending"}
                        </span>
                      </td>

                      {/* ACTIONS */}
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          
                          {/* EDIT */}
                          <button
                            title="Edit Enquiry"
                            onClick={() => openModal(item._id)}
                            className="group flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-300 transition-all duration-300 hover:scale-105 hover:bg-indigo-500 hover:text-white hover:shadow-[0_0_25px_rgba(99,102,241,0.45)]"
                          >
                            <Pencil
                              size={16}
                              className="transition-transform duration-300 group-hover:rotate-6"
                            />
                          </button>

                          {/* DELETE */}
                          <button
                            onClick={() => handleDelete(item._id)}
                            title="Delete Enquiry"
                            className="group flex h-11 w-11 items-center justify-center rounded-2xl border border-rose-500/20 bg-rose-500/10 text-rose-300 transition-all duration-300 hover:scale-105 hover:bg-rose-500 hover:text-white hover:shadow-[0_0_25px_rgba(244,63,94,0.4)]"
                          >
                            <Trash2
                              size={16}
                              className="transition-transform duration-300 group-hover:scale-110"
                            />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="py-28">
                      <div className="flex flex-col items-center justify-center">
                        
                        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                          <MessageSquare
                            size={36}
                            className="text-slate-500"
                          />
                        </div>

                        <h3 className="text-2xl font-semibold text-white">
                          No Enquiries Found
                        </h3>

                        <p className="mt-3 text-sm text-slate-500">
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
                  className="w-full rounded border border-slate-200 p-4 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#003366]"
                ></textarea>
              </div>

              {/* BUTTONS */}

              <div className="flex justify-end gap-3">
                <button
                  type="submit"
                  className="px-3 py-2 rounded primary-bg text-white"
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
