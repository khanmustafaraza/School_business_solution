"use client";

import EnquiryReducer from "@/reducers/enquiry/Enquiry";
import {
  EnquiryContextType,
  EnquiryListType,
  EnquiryStateType,
} from "@/types/enquiry/enquirytype";
import React, { createContext, useContext, useReducer, useState } from "react";
import { toast } from "react-toastify";
import useModal from "../togglemodal/ToggleModal";

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
  const { closeModal } = useModal();
  const [state, dispatch] = useReducer(EnquiryReducer, initialState);
  const [comment, setComment] = useState<string>("");

  /* ===== HANDLE CHANGE ===== */
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
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
  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      dispatch({
        type: "SET_LOADING",
        payload: { loading: true, message: "Please wait... While Processing" },
      });

      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state.enquiryObj),
      });

      const data = await res.json();
      console.log(data);
      if (data.success) {
        toast.success(data.message);
      }
      if (!data.success) {
        // toast.error(data.message)
        toast.error(data.errors.name);
        toast.error(data.errors.mobile);
        toast.error(data.errors.admissionClass);
        toast.error(data.errors.message);
      }

      // console.log(data)
      if (!data.success) {
      }
      // if(data)

      dispatch({ type: "SET_SUCCESS" });

      // ✅ refresh list after submit
      // await getEnquiryList();
    } catch (error: any) {
      // toast.error(error.message)
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

  // update comment message inside the enquiry
  const handleUpdate = async (e: any, id: any) => {
    e.preventDefault();

    if (!id) return;

    if (!comment.trim()) {
      alert("Comment is required");
      return;
    }

    try {
      const payload = {
        comment,
        enquiryId: id,
      };

      // ✅ API CALL

      const response = await fetch("/api/enquiry/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      toast.success("enquiry Upodated Successfully");

      // ✅ RESET

      setComment("");
      closeModal();

      getEnquiryList();
    } catch (error: any) {}
  };

  // handle delete  of enquiry

  const handleDelete = async (id: any) => {
    // console.log(id);
    if (!id) return;

    try {
      const payload = {
        deleteId: id,
      };

      // ✅ API CALL

      const response = await fetch("/api/enquiry/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      toast.success("enquiry Delete Successfully");

      // ✅ RESET

      // setComment("");
      // closeModal();

      getEnquiryList();
    } catch (error: any) {}
  };
  return (
    <EnquiryContext.Provider
      value={{
        state,
        handleChange,
        handleSubmit,
        getEnquiryList,
        handleUpdate,
        comment,
        setComment,
        handleDelete,
      }}
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
