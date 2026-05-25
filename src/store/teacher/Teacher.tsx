
"use client"
import TeacherReducer from "@/reducers/teacher/Teacher";
import {
  TeacherContextType,
  TeacherStateType,
} from "@/types/teachertypes/teachertype";

import { createContext, useContext, useReducer } from "react";

const initialState: TeacherStateType = {
  teacherObj: {
    firstName: "",
    lastName: "",
    gender: "",
    classId: "",
    dob: "",
    subject: "",
    qualification: "",
    exp: 0,
    doj: "",
    mobile: "",
    address: "",
    adhaar: 0,
    photo: null,
  },

  isLoading: false,
  teacherList: [],
};

const TeacherContext = createContext<TeacherContextType | null>(null);

export const TeacherProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(TeacherReducer, initialState);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    dispatch({
      type: "HANDLE_CHANGE",
      payload: { name, value },
    });
  };
  const handleFileChange = (e: any) => {
    const photo = e.target.files[0] || null;
    dispatch({
      type: "HANDLE_FILE_CHANGE",
      payload: { name: "photo", value: photo },
    });
  };
  const handleSubmit = async (e: any, role: any, userId: any) => {
    e.preventDefault();

    try {
      const form = state.teacherObj;

      const formData = new FormData();

      Object.entries(form).forEach(([key, value]) => {
        if (key === "photo") return;

        if (value !== null && value !== undefined) {
          formData.append(key, String(value));
        }
      });

      if (form.photo) {
        formData.append("photo", form.photo);
      }

      formData.append("userId", userId);

      formData.append("role", role);

      const res = await fetch("/api/teacher", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        console.log("Teacher Added Successfully");

        // dispatch({
        //   type: "RESET_FORM",
        // });
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <TeacherContext.Provider value={{ handleChange, state, handleFileChange ,handleSubmit}}>
      {children}
    </TeacherContext.Provider>
  );
};




const useTeacher = () =>{
    const context = useContext(TeacherContext);
    if(!context){
        throw new Error("Please Provide the Context");

    }
    return context
  }

export default useTeacher;
