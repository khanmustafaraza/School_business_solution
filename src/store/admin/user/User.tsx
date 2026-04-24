"use client";

import UserReducer from "@/reducers/admin/User";
import { UserContextType, UserState } from "@/types/admin/usertype";
import { createContext, useContext, useReducer } from "react";
import { toast } from "react-toastify";

const UserContext = createContext<UserContextType | null>(null);

const initialState: UserState = {
  isLoading: {
    loading:false,
    message:""
  },
  userObj: {
    name: "",
    email: "",
    password: "",
    role: "",
  },
 
  userList: [],
  // page: 1,
  // totalPages: 1,
};

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  // ✅ handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    dispatch({
      type: "HANDLE_CHANGE",
      payload: { name: name as keyof UserState["userObj"], value },
    });
  };

  // ✅ submit user
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    try {
      dispatch({
        type:"SET_LOADING",
        payload:{loading:true,message:"Please wait... While Processing"}
      })
      const res = await fetch("/api/admin/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state.userObj),
      });

      const data = await res.json();
      if(data.success){
        dispatch({
          type:"SET_SUCCESS",
          payload:{loading:false,message  :""}
        })
        toast.success(data.message)
      }
    } catch (error) {
      console.error(error);
    }
  };

  // ✅ get all users
 const getAllUser = async (page: number = 1) => {
  try {
    const res = await fetch(`/api/admin/user?page=${page}&limit=10`);
    const data = await res.json();

    dispatch({
      type: "GET_ALL_USER",
      payload:data.data
    });
  } catch (error) {
    console.error(error);
  }
};
  return (
    <UserContext.Provider
      value={{ state, handleChange, handleSubmit, getAllUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

// ✅ custom hook (VERY IMPORTANT)
export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used inside UserProvider");
  }

  return context;
};
