"use client";

import React, { useState } from "react";

import Container from "@/components/container/Container";
import Form from "@/components/formcomponent/Form";
import MainContainer from "@/components/maincontainer/MainContainer";
import ParentContainer from "@/components/parentcontainer/ParentContainer";
import Input from "@/components/inputs/Input";

import { FiDownload, FiEye, FiSave } from "react-icons/fi";
import { useTransfer } from "@/store/admin/tc/Transfer";
import { useParams } from "next/navigation";

export default function TCRegister() {
  const { state, handleChange, handleSubmit } = useTransfer();
  const params = useParams();
  const id = params?.id as string;

  const formData = state.transferObj;

  const [isSaving, setIsSaving] = useState(false);

  return (
    <ParentContainer>
      <MainContainer>
        <Container>
          {/* HEADER */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900">
              Transfer Certificate
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Create and manage student transfer certificates.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-[1fr_420px]">
            {/* FORM */}
            <Form onSubmit={(e) => handleSubmit(e, id)}>
              <div className="rounded-2xl border bg-white p-6">
                <div className="grid gap-5 md:grid-cols-2">
                  <Input
                    name="pupilName"
                    label="Name of the Pupil"
                    value={formData.pupilName}
                    onChange={handleChange}
                  />

                  <Input
                    name="motherName"
                    label="Mother Name"
                    value={formData.motherName}
                    onChange={handleChange}
                  />

                  <Input
                    name="fatherName"
                    label="Father Name"
                    value={formData.fatherName}
                    onChange={handleChange}
                  />

                  <Input
                    name="nationality"
                    label="Nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                  />

                  <Input
                    name="category"
                    label="Category"
                    value={formData.category}
                    onChange={handleChange}
                  />

                  <Input
                    name="dobFigures"
                    label="DOB (Figures)"
                    type="date"
                    value={formData.dobFigures}
                    onChange={handleChange}
                  />

                  <Input
                    name="dobWords"
                    label="DOB (Words)"
                    value={formData.dobWords}
                    onChange={handleChange}
                  />

                  <Input
                    name="failedStatus"
                    label="Failed Status"
                    value={formData.failedStatus}
                    onChange={handleChange}
                  />

                  <Input
                    name="firstAdmissionDate"
                    label="Admission Date"
                    type="date"
                    value={formData.firstAdmissionDate}
                    onChange={handleChange}
                  />

                  <Input
                    name="firstAdmissionClass"
                    label="Admission Class"
                    value={formData.firstAdmissionClass}
                    onChange={handleChange}
                  />

                  <Input
                    name="subjects"
                    label="Subjects"
                    value={formData.subjects}
                    onChange={handleChange}
                  />

                  <Input
                    name="lastClassStudied"
                    label="Last Class"
                    value={formData.lastClassStudied}
                    onChange={handleChange}
                  />

                  <Input
                    name="lastExam"
                    label="Last Exam"
                    value={formData.lastExam}
                    onChange={handleChange}
                  />

                  <Input
                    name="promotionStatus"
                    label="Promotion Status"
                    value={formData.promotionStatus}
                    onChange={handleChange}
                  />

                  <Input
                    name="duesPaid"
                    label="Dues Paid"
                    value={formData.duesPaid}
                    onChange={handleChange}
                  />

                  <Input
                    name="feeConcession"
                    label="Fee Concession"
                    value={formData.feeConcession}
                    onChange={handleChange}
                  />

                  <Input
                    name="nccScoutGuide"
                    label="NCC / Scout / Guide"
                    value={formData.nccScoutGuide}
                    onChange={handleChange}
                  />

                  <Input
                    name="struckOffDate"
                    label="Struck Off Date"
                    type="date"
                    value={formData.struckOffDate}
                    onChange={handleChange}
                  />

                  <Input
                    name="leavingReason"
                    label="Leaving Reason"
                    value={formData.leavingReason}
                    onChange={handleChange}
                  />

                  <Input
                    name="totalMeetings"
                    label="Total Meetings"
                    value={formData.totalMeetings}
                    onChange={handleChange}
                  />

                  <Input
                    name="attendanceDays"
                    label="Attendance Days"
                    value={formData.attendanceDays}
                    onChange={handleChange}
                  />

                  <Input
                    name="generalConduct"
                    label="General Conduct"
                    value={formData.generalConduct}
                    onChange={handleChange}
                  />

                  <Input
                    name="remarks"
                    label="Remarks"
                    value={formData.remarks}
                    onChange={handleChange}
                  />

                  <Input
                    name="issueDate"
                    label="Issue Date"
                    type="date"
                    value={formData.issueDate}
                    onChange={handleChange}
                  />
                </div>

                {/* BUTTONS */}
                <div className="mt-6 flex justify-end gap-3">
                  <button type="button" className="flex items-center gap-2">
                    <FiEye /> Preview
                  </button>

                  <button type="button" className="flex items-center gap-2">
                    <FiDownload /> PDF
                  </button>

                  <button
                    type="submit"
                    className="flex items-center gap-2 bg-emerald-600 px-4 py-2 text-white"
                    disabled={isSaving}
                  >
                    <FiSave />
                    {isSaving ? "Saving..." : "Save"}
                  </button>
                </div>
              </div>
            </Form>

            {/* PREVIEW */}
            <div className="rounded-xl border bg-white p-5">
              <h2 className="font-semibold">Live Preview</h2>

              <div className="mt-4 space-y-2 text-sm">
                <p>
                  <b>Name:</b> {formData.pupilName || "—"}
                </p>
                <p>
                  <b>Father:</b> {formData.fatherName || "—"}
                </p>
                <p>
                  <b>Mother:</b> {formData.motherName || "—"}
                </p>
                <p>
                  <b>Class:</b> {formData.firstAdmissionClass || "—"}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </MainContainer>
    </ParentContainer>
  );
}
