"use client";

import EnquiryReducer from "@/reducers/enquiry/Enquiry";
import {
  EnquiryContextType,
  EnquiryListType,
  EnquiryStateType,
} from "@/types/enquiry/enquirytype";
import React, { createContext, useContext, useReducer } from "react";
import { toast } from "react-toastify";

/* ================= CONTEXT ================= */

const EnquiryContext = createContext<EnquiryContextType | null>(null);

/* ================= INITIAL STATE ================= */

const initialState: EnquiryStateType = {
  isLoading: {
    loading: false,
    message: "",
  },
  enquiryObj: {
    name: "",
    mobile: "",
    addmissionClass: "",
    message: "",
  },
  enquiryList: [],
};

/* ================= PROVIDER ================= */

export const EnquiryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(EnquiryReducer, initialState);

  /* ===== HANDLE CHANGE ===== */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    dispatch({
      type: "HANDLE_CHANGE",
      payload: {
        key: name as keyof EnquiryStateType["enquiryObj"],
        value,
      },
    });
  };

  /* ===== HANDLE SUBMIT (API CONNECTED) ===== */
  const handleSubmit = async (
    e: React.SyntheticEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      dispatch({
        type: "SET_LOADING",
        payload: { loading: true, message: "Submitting..." },
      });

      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state.enquiryObj),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Something went wrong");
      }
      console.log(data)
      toast.success(data.message)

      dispatch({ type: "SET_SUCCESS" });

      // ✅ refresh list after submit
      await getEnquiryList();
    } catch (error: any) {
      dispatch({
        type: "SET_LOADING",
        payload: {
          loading: false,
          message: error.message || "Submission failed",
        },
      });
    }
  };

  /* ===== GET ENQUIRY LIST (API CONNECTED) ===== */
  const getEnquiryList = async () => {
    try {
      dispatch({
        type: "SET_LOADING",
        payload: { loading: true, message: "Fetching..." },
      });

      const res = await fetch("/api/enquiry");

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to fetch");
      }

      dispatch({
        type: "SET_ENQUIRY_LIST",
        payload: data.data as EnquiryListType[],
      });

      dispatch({
        type: "SET_LOADING",
        payload: { loading: false, message: "" },
      });
    } catch (error: any) {
      dispatch({
        type: "SET_LOADING",
        payload: {
          loading: false,
          message: error.message || "Fetch failed",
        },
      });
    }
  };

  return (
    <EnquiryContext.Provider
      value={{ state, handleChange, handleSubmit, getEnquiryList }}
    >
      {children}
    </EnquiryContext.Provider>
  );
};

/* ================= HOOK ================= */

export const useEnquiry = () => {
  const context = useContext(EnquiryContext);

  if (!context) {
    throw new Error("useEnquiry must be used inside EnquiryProvider");
  }

  return context;
};