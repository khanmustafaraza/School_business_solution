"use client";

import UserReducer from "@/reducers/admin/User";
import { UserContextType, UserState } from "@/types/admin/usertype";
import { createContext, useContext, useReducer } from "react";
import { toast } from "react-toastify";

const UserContext = createContext<UserContextType | null>(null);

const initialState: UserState = {
  isLoading: {
    loading: false,
    message: "",
  },

  userObj: {
    name: "",
    email: "",
    password: "",
    role: "",
  },

  userList: [],

  page: 1,
  total: 0,
  totalPages: 1,
};

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  // HANDLE INPUT
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    dispatch({
      type: "HANDLE_CHANGE",
      payload: {
        name: name as keyof UserState["userObj"],
        value,
      },
    });
  };

  // CREATE USER
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      dispatch({
        type: "SET_LOADING",
        payload: {
          loading: true,
          message: "Please wait...",
        },
      });

      const res = await fetch("/api/admin/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state.userObj),
      });

      const data = await res.json();

      if (data.success) {
        dispatch({
          type: "SET_SUCCESS",
          payload: {
            loading: false,
            message: "",
          },
        });

        toast.success(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // GET USERS (PAGINATION)
  const getAllUser = async (page: number = 1) => {
    try {
      const res = await fetch(
        `/api/admin/user?page=${page}&limit=5`
      );

      const data = await res.json();

      dispatch({
        type: "GET_ALL_USER",
        payload: {
          users: data.data,
          page: data.page,
          total: data.total,
          totalPages: data.totalPages,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        state,
        handleChange,
        handleSubmit,
        getAllUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// HOOK
export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used inside UserProvider");
  }

  return context;
};