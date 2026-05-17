import { ChangeEvent } from "react";
export type School = {
  _id?: string;
  name: string;
  code?: string;
  email: string;
  contact?: string;
  address?: string;
  image?: string | null; // backend may return buffer/string
  createdAt?: string;
  updatedAt?: string;
};

export type SchoolState = {
  schoolObj: {
    name: string;
    code: string;
    email: string;
    contact: string;
    address: string;
    image: File | null; // ✅ FIX
  };
schools: School[]; // ✅
  isLoading: boolean;
};

export type SchoolAction =
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_SCHOOL"; payload: { name: keyof SchoolState["schoolObj"]; value: any } }
  |  { type: "SET_SCHOOLS"; payload: School[] };

export type SchoolContextType = {
  state: SchoolState;
  dispatch: React.Dispatch<SchoolAction>;
  handleChange :(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>void
  handleSubmit :(e:React.SubmitEvent<HTMLFormElement>)=>Promise<void>
  getSchools :()=>Promise<void>
};