"use client";

import TransferReducer from "@/reducers/admin/Transfer";
import {
  TransferContextType,
  TransferFormData,
  TransferState,
} from "@/types/admintypes/transfertype";

import React, { createContext, useContext, useReducer, ReactNode } from "react";

/* ================= INITIAL FORM ================= */

const initialFormData: TransferFormData = {
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

/* ================= INITIAL STATE ================= */

const initialState: TransferState = {
  isLoading: false,
  transferObj: initialFormData,
  transferList: [],
  // error: null,
};

/* ================= CONTEXT ================= */

const TransferContext = createContext<TransferContextType | null>(null);

/* ================= PROVIDER ================= */

export const TransferProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(TransferReducer, initialState);

  /* ================= HANDLE CHANGE ================= */

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    dispatch({
      type: "HANDLE_CHANGE",
      payload: {
        name: e.target.name as keyof TransferFormData,
        value: e.target.value,
      },
    });
  };

  /* ================= HANDLE SUBMIT ================= */

  const handleSubmit = async (e: React.SyntheticEvent, id: string) => {
    e.preventDefault();

    // dispatch({ type: "LOADING_START" });

    try {
      const res = await fetch("/api/admin/tc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...state.transferObj,
          userId: id,
        }),
      });
      const data = await res.json().catch(() => {
        throw new Error("Invalid server response");
      });
      console.log(data);

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      console.log("SUCCESS:", data);
      alert("Transfer Certificate saved successfully!");

      dispatch({ type: "RESET_FORM" });
    } catch (error: unknown) {
      console.error("SUBMIT ERROR:", error);

      const message =
        error instanceof Error ? error.message : "Failed to save certificate";

      alert(message);

      // dispatch({
      //   type: "SET_ERROR",
      //   payload: message,
      // });
    } finally {
      // dispatch({ type: "LOADING_END" });
    }
  };

  /* ================= GET ALL ================= */

  const getTransfers = async () => {
    // dispatch({ type: "LOADING_START" });

    try {
      const res = await fetch("/api/admin/transfer");
      const data = await res.json().catch(() => {
        throw new Error("Invalid server response");
      });

      if (!res.ok) {
        throw new Error(data.message || "Failed to fetch data");
      }

      dispatch({
        type: "SET_TRANSFERS",
        payload: data?.data,
      });
    } catch (error: unknown) {
      console.error("FETCH ERROR:", error);

      const message =
        error instanceof Error ? error.message : "Failed to fetch transfers";

      //   dispatch({
      //     type: "SET_ERROR",
      //     payload: message,
      //   });
    } finally {
      //   dispatch({ type: "LOADING_END" });
    }
  };

  /* ================= GET SINGLE ================= */

  const getTransfer = async (id: string) => {
    // dispatch({ type: "LOADING_START" });

    try {
      const res = await fetch(`/api/admin/transfer/detail/${id}`);
      const data = await res.json().catch(() => {
        throw new Error("Invalid server response");
      });

      if (!res.ok) {
        throw new Error(data.message || "Failed to fetch data");
      }

      dispatch({
        type: "SET_TRANSFER",
        payload: data?.data,
      });
    } catch (error: unknown) {
      console.error("FETCH ERROR:", error);

      const message =
        error instanceof Error ? error.message : "Failed to fetch transfer";

      //   dispatch({
      //     type: "SET_ERROR",
      //     payload: message,
      //   });
    } finally {
      //   dispatch({ type: "LOADING_END" });
    }
  };

  /* ================= PROVIDER VALUE ================= */

  return (
    <TransferContext.Provider
      value={{
        state,
        handleChange,
        handleSubmit,
        getTransfers,
        getTransfer,
      }}
    >
      {children}
    </TransferContext.Provider>
  );
};

/* ================= CUSTOM HOOK ================= */

export const useTransfer = () => {
  const context = useContext(TransferContext);

  if (!context) {
    throw new Error("useTransfer must be used inside TransferProvider");
  }

  return context;
};
