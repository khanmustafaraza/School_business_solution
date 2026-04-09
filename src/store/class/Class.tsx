"use client";

import { ClassReducer } from "@/reducers/Class";
import {
  ClassContextType,
  ClassFormType,
  ClassStateType,
} from "@/types/classtype";
import { createContext, useContext, useReducer } from "react";

const ClassContext = createContext<ClassContextType | null>(null);

const initialState: ClassStateType = {
  classObj: {
    name: "",
    section: "",
    no: 0,
  },
  classList: [],
  isLoading: false,
};

export const ClassProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(ClassReducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);

    dispatch({
      type: "HANDLE_CHANGE",
      payload: {
        name: name as keyof ClassStateType["classObj"],
        value: name === "no" ? Number(value) : value,
      },
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    console.log(state.classObj);
  };

  return (
    <ClassContext.Provider value={{ handleChange, state, handleSubmit }}>
      {children}
    </ClassContext.Provider>
  );
};

const useClass = () => {
  const context = useContext(ClassContext);

  if (!context) {
    throw new Error("useClass must be used inside ClassProvider");
  }

  return context;
};

export default useClass;
