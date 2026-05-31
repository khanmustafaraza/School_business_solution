"use client";

import { useEffect } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { FaEnvelope, FaPhone, FaPlus } from "react-icons/fa";
import { BiQuestionMark } from "react-icons/bi";

import Container from "@/components/container/Container";
import H1 from "@/components/headings/H1";
import H2 from "@/components/headings/H2";
import Loader from "@/components/loader/Loader";
import MainContainer from "@/components/maincontainer/MainContainer";
import Modal from "@/components/modal/Modal";
import ParentContainer from "@/components/parentcontainer/ParentContainer";
import TableContainer from "@/components/tables/tablecontainer/Tablecontainer";

import { useEnquiry } from "@/store/enquiry/Enquiry";
import useModal from "@/store/togglemodal/ToggleModal";
import { useToggle } from "@/store/toggledashboard/Toggledashboard";
import SearchContainer from "@/components/searchcontainer/SearchContainer";
import TableHeader from "@/components/tables/tableheader/TableHeader";
const enquiryColumns = [
  {
    label: "Name",
  },
  {
    label: "Mobile",
  },
  {
    label: "Admission Class",
  },
  {
    label: "Message",
  },
  {
    label: "Comment",
  },
  {
    label: "Status",
  },
  {
    label: "Actions",
  },
];

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
  const { view } = useToggle();

  useEffect(() => {
    getEnquiryList();
  }, []);
  return (
    <ParentContainer>
      <MainContainer>
        <H1 heading={heading} />
        <H2 title="Total Enquiry" total={state?.enquiryList.length} />
        <SearchContainer
          title="Enquiry Filter"
          onChange={() => console.log("good")}
          placeholder="Search name"
        />

        <Container>
          {state.isLoading.loading && (
            <Loader
              isLoading={state.isLoading.loading}
              message={state.isLoading.message}
            />
          )}

          {/* ================= LIST VIEW ================= */}
          {view === "list" && (
            <TableContainer>
              <TableHeader columns={enquiryColumns} />

              <tbody className="bg-white dark:bg-slate-900">
                {state?.enquiryList?.map((item) => (
                  <tr
                    key={item._id}
                    className="hover:bg-slate-50 dark:hover:bg-slate-800/40"
                  >
                    <td className="border px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                          <BiQuestionMark size={18} />
                        </div>

                        <h3 className="font-semibold">{item.name}</h3>
                      </div>
                    </td>

                    <td className="border px-6 py-4">
                      
                       <div className="flex items-center gap-3">
                        <div className="flex p-1 items-center justify-center rounded bg-green-600 text-white">
                          <FaPhone />
                        </div>

                        <h3 className="font-semibold">   {item.mobile}</h3>
                   
                      </div>
                      </td>

                    <td className="border px-6 py-4">{item.addmissionClass}</td>

                    <td className="border px-6 py-4">
                      <div className="flex items-center gap-2">
                        <FaEnvelope size={14} />
                        {item.message}
                      </div>
                    </td>

                    <td className="border px-6 py-4">
                      {item.comment || "No Comment Yet"}
                    </td>

                    <td className="border px-6 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                          item.status === "Active"
                            ? "bg-emerald-100 text-emerald-700"
                            : item.status === "On Leave"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="border px-6 py-4">
                      <div className="flex justify-end gap-3">
                        <button
                          className="text-slate-500 hover:text-emerald-600"
                          onClick={() => openModal(item._id)}
                        >
                          <Pencil size={18} />
                        </button>

                        <button
                          className="text-slate-500 hover:text-red-600"
                          onClick={() => handleDelete(item._id)}
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </TableContainer>
          )}

          {/* ================= GRID VIEW ================= */}
        {view === "grid" && (
  <div className="flex flex-wrap gap-4">
    {state.enquiryList.map((item) => (
      <div
        key={item._id}
        className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900 sm:w-[48%] lg:w-[31%] xl:w-[24%]"
      >
        {/* Top Accent */}
        <div className="h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500" />

        <div className="p-4">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-[#003366]">
                <BiQuestionMark size={20} />
              </div>

              <div>
                <h3 className="font-semibold text-slate-800 dark:text-white">
                  {item.name}
                </h3>

                <p className="text-xs text-slate-500">
                  {item.mobile}
                </p>
              </div>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                item.status === "Active"
                  ? "bg-green-100 text-green-700"
                  : item.status === "On Leave"
                  ? "bg-amber-100 text-amber-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {item.status}
            </span>
          </div>

          {/* Details */}
          <div className="mt-4 space-y-3">
            <div className="flex justify-between border-b pb-2">
              <span className="text-xs text-slate-500">
                Admission Class
              </span>

              <span className="text-sm font-medium">
                {item.addmissionClass}
              </span>
            </div>

            <div>
              <p className="mb-1 text-xs font-medium text-slate-500">
                Message
              </p>

              <p className="line-clamp-3 text-sm text-slate-600 dark:text-slate-300">
                {item.message}
              </p>
            </div>

            {item.comment && (
              <div className="rounded-lg bg-slate-50 p-3 dark:bg-slate-800">
                <p className="mb-1 text-xs font-medium text-slate-500">
                  Comment
                </p>

                <p className="line-clamp-2 text-sm text-slate-700 dark:text-slate-300">
                  {item.comment}
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-4 flex items-center justify-end gap-2 border-t pt-3">
            <button
              onClick={() => openModal(item._id)}
              className="rounded-lg p-2 text-emerald-600 transition hover:bg-emerald-50"
            >
              <Pencil size={16} />
            </button>

            <button
              onClick={() => handleDelete(item._id)}
              className="rounded-lg p-2 text-red-600 transition hover:bg-red-50"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
)}
          {/* ================= MODAL ================= */}
          <Modal title="Comment For Status Of Enquiry">
            <form
              onSubmit={(e) => handleUpdate(e, updateId)}
              className="space-y-5"
            >
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Any Comment Related To Enquiry
                </label>

                <textarea
                  rows={5}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Write your comment here..."
                  className="w-full resize-none rounded border border-slate-200 p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#003366]"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="primary-bg rounded px-4 py-2 text-white"
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
