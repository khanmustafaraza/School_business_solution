"use client";

import { ClassReducer } from "@/reducers/admin/Class";
import useModal from "@/store/togglemodal/ToggleModal";
import { ClassContextType, ClassStateType } from "@/types/admintypes/classtype";
import { createContext, useContext, useReducer } from "react";
import { toast } from "react-toastify";

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
  const { closeModal } = useModal();
  const [state, dispatch] = useReducer(ClassReducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // console.log(name, value);

    dispatch({
      type: "HANDLE_CHANGE",
      payload: {
        name: name as keyof ClassStateType["classObj"],
        value: name === "no" ? Number(value) : value,
      },
    });
  };

  const handleSubmit = async (
    e: React.SyntheticEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    // console.log(state.classObj);
    const res = await fetch("/api/admin/classes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state.classObj),
    });
    const data = await res.json();
    // console.log(data)
    if (data.success) {
      toast.success(data.message);
    }
    if (!data.success) {
      toast.success(data.message);
    }
  };

  const getAllClass = async () => {
    try {
      // dispatch({ type: "SET_LOADING", payload: true });

      const res = await fetch("/api/admin/classes");
      const data = await res.json();

      if (!res.ok) throw new Error(data.msg);

      dispatch({
        type: "SET_CLASS_LIST",
        payload: data.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const handleUpdate = async (e: any, id: any) => {
    e.preventDefault();
    const payload = {
      ...state.classObj,
      updateId:id
    }
    const res = await fetch("/api/admin/classes/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    // console.log(data)
    if (data.success) {
      toast.success(data.message);
      closeModal();
      getAllClass()
    }
    if (!data.success) {
      toast.success(data.message);
    }
  };

  return (
    <ClassContext.Provider
      value={{ handleChange, state, handleSubmit, getAllClass, handleUpdate }}
    >
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
