"use client"
import AuthReducer from "@/reducers/auth/Auth";
import { LoginContext, LoginState } from "@/types/auth/authtype";
import React, { createContext, useContext, useReducer } from "react";
import { signIn } from "next-auth/react";

const initialState: LoginState = {
  isLoading: {
    loading: false,
   message: ""
  },
  loginObj: {
    role: "",
    userName: "",
    password: ""
  },
  userObj: {
    userName: "",
    emaiL: "",
    photo: null
  }
};

export const AuthContext = createContext<LoginContext | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    dispatch({
      type: "HANDLE_LOGIN_CHANGE",
      payload: {
        name: e.target.name as any,
        value: e.target.value
      }
    });
  };

  const handleLoginSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("state.obj" , state.loginObj)

    dispatch({
      type: "SET_LOADING",
      payload: {
        loading: true,
        message: "Logging in..."
      }
    });

    try {
      // API call later
  //      const loginHandler = async () => {
  //   const res = await signIn("credentials", {
  //     email,
  //     password,
  //     redirect: false,
  //   });

  //   if (res?.ok) {
  //     alert("Login successful");
  //   } else {
  //     alert("Login failed");
  //   }
  // };

      dispatch({
        type: "SET_SUCCESS",
        payload: {
          loading: false,
          message: "Login successful"
        }
      });
    } catch (error) {
      dispatch({
        type: "SET_LOADING",
        payload: {
          loading: false,
          message: "Login failed"
        }
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        handleLoginChange,
        handleLoginSubmit
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider};


const useAuth =() =>{
    const context =  useContext(AuthContext) 
    if(!context) {
        throw new Error('error while contexting')
    } 

    return context

}

export default useAuth