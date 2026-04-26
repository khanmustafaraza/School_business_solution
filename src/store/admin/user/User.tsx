"use client";

import UserReducer from "@/reducers/admin/User";
import { UserContextType, UserState } from "@/types/admin/usertype";
import { createContext, useContext, useReducer } from "react";
import { toast } from "react-toastify";

const UserContext = createContext<UserContextType | null>(null);
// ================= INITIAL STATE =================

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

  totalDocs:0,
  limit:10,
  totalPages: 0,
  page: 1,
  counter:0,
  hasPrevPage :false,
  hasNextPage:false,
  prevPage:0,
  nextPage:0
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
      console.log(data)

     dispatch({
  type: "GET_ALL_USER",
  payload: {
    //  users: UserListType[];
    //       totalDocs: number;
    //       limit: number;
    //       totalPages: number;
    //       page: number;
    //       counter: number;
    //       hasPrevPage: boolean;
    //       hasNextPage: boolean;
  //   totalDocs:0,
  // limit:10,
  // totalPages: 0,
  // page: 1,
  // counter:0,
  // hasPrevPage :false,
  // hasNextPage:false,
    users: data.data,
    totalDocs: data.totalDocs,
    limit:data.limit,
    totalPages:data.totalPages,
    page: data.page,
    counter:data.counter,
    hasPrevPage: data.hasPrevPage,
    hasNextPage: data.hasNextPage,
     prevPage: data.prevPage,
      nextPage:data.nextPage,
   
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