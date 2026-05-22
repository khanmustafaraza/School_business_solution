import React from "react";

/**
 * =========================
 * TRANSFER FORM DATA
 * =========================
 */
export type TransferFormData = {
  // Basic Student Info
  pupilName: string;
  motherName: string;
  fatherName: string;
  nationality: string;
  category: string;

  // DOB
  dobFigures: string;
  dobWords: string;

  // Admission Info
  firstAdmissionDate: string;
  firstAdmissionClass: string;

  // Academic Status
  subjects: string;
  lastClassStudied: string;
  lastExam: string;

  promotionStatus: string;
  failedStatus: string;

  // School Records
  duesPaid: string;
  feeConcession: string;

  // Activities
  nccScoutGuide: string;

  // Leaving Details
  struckOffDate: string;
  leavingReason: string;

  // Attendance
  totalMeetings: string;
  attendanceDays: string;

  // Conduct & Remarks
  generalConduct: string;
  remarks: string;

  // Certificate Info
  issueDate: string;
};

/**
 * =========================
 * INITIAL STATE
 * =========================
 */
export const initialTransferFormData: TransferFormData = {
  pupilName: "",
  motherName: "",
  fatherName: "",
  nationality: "",
  category: "",

  dobFigures: "",
  dobWords: "",

  firstAdmissionDate: "",
  firstAdmissionClass: "",

  subjects: "",
  lastClassStudied: "",
  lastExam: "",

  promotionStatus: "",
  failedStatus: "",

  duesPaid: "",
  feeConcession: "",

  nccScoutGuide: "",

  struckOffDate: "",
  leavingReason: "",

  totalMeetings: "",
  attendanceDays: "",

  generalConduct: "",
  remarks: "",

  issueDate: "",
};

/**
 * =========================
 * LIST TYPE
 * =========================
 */
export type TransferListType = {
  _id: string;
  pupilName: string;
  fatherName: string;
  className: string;
  issueDate: string;
};

/**
 * =========================
 * STATE TYPE
 * =========================
 */
export type TransferState = {
  isLoading: boolean;
  transferObj: TransferFormData;
  transferList: TransferListType[];
};

/**
 * =========================
 * CONTEXT TYPE
 * =========================
 */
export type TransferContextType = {
  state: TransferState;

  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => void;

  handleSubmit: (
    e: React.SyntheticEvent<HTMLFormElement>,
    id: string,
  ) => Promise<void>;

  getTransfers: () => Promise<void>;
  getTransfer: (id: string) => Promise<void>;
  //   resetForm: () => void;
};

/**
 * =========================
 * ACTION TYPES (REDUCER)
 * =========================
 */
export type TransferActionType =
  | { type: "SET_LOADING" }
  | {
      type: "HANDLE_CHANGE";
      payload: {
        name: keyof TransferFormData;
        value: string;
      };
    }
  | {
      type: "SET_TRANSFER";
      payload: TransferFormData;
    }
  | {
      type: "SET_TRANSFERS";
      payload: TransferListType[];
    }
  | { type: "RESET_FORM" };
