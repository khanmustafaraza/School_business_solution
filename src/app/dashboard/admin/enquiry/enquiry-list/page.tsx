"use client";

import Container from "@/components/container/Container";
import AdminHeading from "@/components/headings/AdminHeading";
import MainContainer from "@/components/maincontainer/MainContainer";
import ParentContainer from "@/components/parentcontainer/ParentContainer";
import TableContainer from "@/components/tables/tablecontainer/Tablecontainer";
import icons from "@/constants/icons/icons";
import { useEnquiry } from "@/store/enquiry/Enquiry";
import { useEffect } from "react";

import { Pencil, School, Trash2 } from "lucide-react";
import Loader from "@/components/loader/Loader";
import useModal from "@/store/togglemodal/ToggleModal";
import Modal from "@/components/modal/Modal";
import H2 from "@/components/headings/H2";
import H1 from "@/components/headings/H1";
import { FaPlus } from "react-icons/fa";
import FilterStrip from "@/components/filterstrip/Filterstrip";
const heading = {
  name: "Enquiry List",
  subHeading: "Add and manage your school’s basic Enquiries.",
  href: "/dashboard/admin/school/school-list",
  btnHeading: "Add Enquiry",
  icon: <FaPlus />,
};

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
        <H1 heading={heading} />

        <H2 />

        <FilterStrip />

        <Container>
          {state.isLoading.loading && (
            <Loader
              isLoading={state.isLoading.loading}
              message={state.isLoading.message}
            />
          )}

          <TableContainer>
            {/* HEADER */}

            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                {[
                  "Name of Enquirer",
                  "Contact",
                  "Admission Class",
                  "Message",
                  "Comment",
                  "Status",
                  "Actions",
                ].map((heading) => (
                  <th
                    key={heading}
                    className="px-6 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-slate-500"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>

            {/* BODY */}

            <tbody className="divide-y divide-slate-100 bg-white">
              {state.enquiryList.length > 0 ? (
                state.enquiryList.map((item, index) => (
                  <tr
                    key={item._id}
                    className="group transition-all duration-200 hover:bg-slate-50/80"
                  >
                    {/* NAME */}

                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        {/* AVATAR */}

                        <div className="relative shrink-0">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-sm font-bold text-white shadow-md">
                            {item.name?.charAt(0)?.toUpperCase() || "?"}
                          </div>

                          <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white bg-emerald-400"></div>
                        </div>

                        {/* INFO */}

                        <div>
                          <h4 className="text-sm font-semibold text-slate-800">
                            {item.name || "Unknown"}
                          </h4>

                          <p className="mt-1 text-xs text-slate-400">
                            Enquiry #{index + 1}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* MOBILE */}

                    <td className="px-6 py-5">
                      <div>
                        <p className="text-sm font-semibold text-slate-700">
                          {item.mobile || "N/A"}
                        </p>

                        <p className="mt-1 text-xs text-slate-400">
                          Mobile Number
                        </p>
                      </div>
                    </td>

                    {/* CLASS */}

                    <td className="px-6 py-5">
                      <span className="inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                        {item.addmissionClass || "N/A"}
                      </span>
                    </td>

                    {/* MESSAGE */}

                    <td className="max-w-[250px] px-6 py-5">
                      <p className="line-clamp-2 text-sm leading-relaxed text-slate-600">
                        {item.message?.trim() || "No message provided"}
                      </p>
                    </td>

                    {/* COMMENT */}

                    <td className="max-w-[250px] px-6 py-5">
                      <p className="line-clamp-2 text-sm leading-relaxed text-slate-600">
                        {item?.comment?.trim() || "No comment"}
                      </p>
                    </td>

                    {/* STATUS */}

                    <td className="px-6 py-5">
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold
              ${
                item?.status === "Pending"
                  ? "bg-amber-50 text-amber-700 border border-amber-100"
                  : item?.status === "Completed"
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                    : "bg-slate-100 text-slate-600 border border-slate-200"
              }`}
                      >
                        {item?.status || "Unknown"}
                      </span>
                    </td>

                    {/* ACTIONS */}

                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        {/* EDIT */}

                        <button
                          title="Edit Enquiry"
                          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-200 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600 hover:shadow-md"
                          onClick={() => {
                            openModal(item._id);
                          }}
                        >
                          <Pencil size={16} />
                        </button>

                        {/* DELETE */}

                        <button
                          onClick={() => handleDelete(item._id)}
                          title="Delete Enquiry"
                          className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-red-500 shadow-sm transition-all duration-200 hover:bg-red-500 hover:text-white hover:shadow-md"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="py-24">
                    <div className="flex flex-col items-center justify-center">
                      <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-slate-100">
                        {/* Empty Icon */}
                      </div>

                      <h3 className="text-xl font-semibold text-slate-700">
                        No Enquiries Found
                      </h3>

                      <p className="mt-2 text-sm text-slate-400">
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
