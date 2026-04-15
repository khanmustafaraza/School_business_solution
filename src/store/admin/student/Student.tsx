"use client";

import StudentReducer from "@/reducers/admin/Student";
import {
  StudentContextType,
  StudentFormData,
  StudentState,
} from "@/types/admin/studenttype";
import { createContext, useContext, useReducer, ReactNode } from "react";

const StudentContext = createContext<StudentContextType | null>(null);

const initialFormData: StudentFormData = {
  admissionNo: "",
  rollNo: "",
  firstName: "",
  lastName: "",
  gender: "",
  dob: "",
  bloodGroup: "",
  religion: "",
  category: "",
  aadhaar: "",

  classId: "",
  section: "",
  academicYear: "",
  house: "",
  admissionDate: "",

  mobile: "",
  email: "",
  address: "",
  city: "",
  state: "",
  pincode: "",

  fatherName: "",
  motherName: "",
  guardianName: "",
  parentMobile: "",
  occupation: "",

  medicalCondition: "",
  allergies: "",
  emergencyContact: "",
  transportRequired: "",

  notes: "",
  photo: null,
};

const initialState: StudentState = {
  isLoading: false,
  studentObj: initialFormData,
  studentList: [],
};

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
        name: e.target.name as keyof StudentFormData,
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

  // const handleReset = () => {
  //   dispatch({ type: "RESET_FORM" });
  // };

  const handleSubmit = async (e: React.SyntheticEvent, id: string) => {
    e.preventDefault();

    try {
      const form = state.studentObj;

      const formData = new FormData();

      // append all fields
      Object.entries(form).forEach(([key, value]) => {
        if (key === "photo") return; // handle file separately
        formData.append(key, value as string);
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
      console.log(data);

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      console.log("SUCCESS:", data);
      alert("Student Registered Successfully!");

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
    console.log("ID VALUE:", id);
    console.log("TYPE:", typeof id);
    console.log("LENGTH:", id?.length);
    try {
      // dispatch({ type: "SET_LOADING", payload: true });

      const res = await fetch(`/api/admin/student/detail/${id}`);
      const data = await res.json();
      console.log("data", data);
      if (!res.ok) {
        throw new Error(data.message || "Failed to fetch students");
      }

      // dispatch({
      //   type: "SET_STUDENTS",
      //   payload: data.data,
      // });
    } catch (error: any) {
      console.error("FETCH ERROR:", error);
    } finally {
      // dispatch({ type: "SET_LOADING", payload: false });
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
