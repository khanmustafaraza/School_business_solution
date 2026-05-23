"use client";

import StudentReducer from "@/reducers/admin/Student";
import {
  StudentContextType,
  StudentState,
  StudentType,
} from "@/types/admintypes/studenttype";

import { createContext, useContext, useReducer, ReactNode } from "react";
import { toast } from "react-toastify";

const initialState: StudentState = {
  isLoading: false,
  studentObj: {
    srNo: "",

    className: "",
    section: "",
    session: "",

    firstName: "",
    lastName: "",
    gender: "",

    dob: "",
    dobInWords: "",
    age: "",

    bloodGroup: "",
    religion: "",
    casteCategory: "",

    motherName: "",
    fatherName: "",

    motherNationality: "",
    fatherNationality: "",

    fatherOccupation: "",
    motherOccupation: "",

    motherMobileNumber: "",
    fatherMobileNumber: "",

    motherPermanentAddress: "",
    fatherPermanentAddress: "",

    officeAddress: "",

    annualIncome: "",

    localGurdianName: "",
    localGurdianAddress: "",

    lastSchoolName: "",
    lastSchoolAddress: "",

    isCbse: "",
    otherBoard: "",

    lastResult: "",
    percentage: "",

    subjectOffered: [],

    motherTongue: "",
    homeTown: "",

    userId: "",
    classId: "",

    notes: "",

    photo: null,

    isActive: true,
  },
  studentList: [],
  studentDetail :{
      srNo: "",

    className: "",
    section: "",
    session: "",

    firstName: "",
    lastName: "",
    gender: "",

    dob: "",
    dobInWords: "",
    age: "",

    bloodGroup: "",
    religion: "",
    casteCategory: "",

    motherName: "",
    fatherName: "",

    motherNationality: "",
    fatherNationality: "",

    fatherOccupation: "",
    motherOccupation: "",

    motherMobileNumber: "",
    fatherMobileNumber: "",

    motherPermanentAddress: "",
    fatherPermanentAddress: "",

    officeAddress: "",

    annualIncome: "",

    localGurdianName: "",
    localGurdianAddress: "",

    lastSchoolName: "",
    lastSchoolAddress: "",

    isCbse: "",
    otherBoard: "",

    lastResult: "",
    percentage: "",

    subjectOffered: [],

    motherTongue: "",
    homeTown: "",

    userId: "",
    classId: "",

    notes: "",

    photo: null,

    isActive: true,

  }
};

const StudentContext = createContext<StudentContextType | null>(null);

export const StudentProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(StudentReducer, initialState);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    dispatch({
      type: "HANDLE_CHANGE",
      payload: {
        name: e.target.name as any,
        value: e.target.value,
      },
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;

    dispatch({
      type: "HANDLE_CHANGE",
      payload: {
        name: "photo",
        value: file,
      },
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    id: string,
  ) => {
    e.preventDefault();
    console.log("id?????", id);

    try {
      const form = state.studentObj;

      const formData = new FormData();

      // append all fields
      Object.entries(form).forEach(([key, value]) => {
        if (key === "photo" || key === "userId") return;

        formData.append(key, String(value));
      });

      // append file
      if (form.photo) {
        formData.append("photo", form.photo);
      }
      // console.log(state.studentObj);
      formData.append("userId", id);

      const res = await fetch("/api/admin/student", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      // console.log(data);

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }
      if (data.success) {
        toast.success("Student profile Create Successfully");
      }
      if(!data.success){
        toast.error(data.message)
      }

      // optional reset
      // dispatch({ type: "RESET_FORM" });
    } catch (error: any) {
      console.error("SUBMIT ERROR:", error);
      alert(error.message || "Failed to register student");
    }
  };
  /* ================= GET ALL STUDENTS ================= */

  const getStudents = async () => {
    try {
      // dispatch({ type: "SET_LOADING", payload: true });

      const res = await fetch("/api/admin/student");
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to fetch students");
      }

      dispatch({
        type: "SET_STUDENTS",
        payload: data?.data,
      });
    } catch (error: any) {
      console.error("FETCH ERROR:", error);
    } finally {
      // dispatch({ type: "SET_LOADING", payload: false });
    }
  };
 const getStudent = async (id: string) => {
  try {
    const res = await fetch(`/api/admin/student/detail/${id}`);

    const data = await res.json();
    console.log(data)

    if (!res.ok) {
      throw new Error(data.message || "Failed to fetch student");
    }

    dispatch({
      type: "SET_SINGLE_STUDENT",
      payload: data.data,
    });

  } catch (error: any) {
    console.error("FETCH ERROR:", error);
  }
};

  return (
    <StudentContext.Provider
      value={{
        state,
        getStudent,
        handleChange,
        handleFileChange,
        handleSubmit,
        getStudents,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export const useStudent = () => {
  const context = useContext(StudentContext);

  if (!context) {
    throw new Error("StudentContext must be used inside StudentProvider");
  }

  return context;
};
