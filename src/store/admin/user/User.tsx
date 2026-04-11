"use client";

import UserReducer from "@/reducers/User";
import { UserContextType, UserState } from "@/types/usertype";
import { createContext, useContext, useReducer } from "react";

const UserContext = createContext<UserContextType | null>(null);

const initialState: UserState = {
  isLoading: false,
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
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
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
    console.log(state.userObj);

    try {
      const res = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state.userObj),
      });

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  // ✅ get all users
 const getAllUser = async (page: number = 1) => {
  try {
    const res = await fetch(`/api/user?page=${page}&limit=10`);
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
