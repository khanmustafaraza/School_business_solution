import { ChangeEvent } from "react";

export type SchoolState = {
  schoolObj: {
    name: string;
    code: string;
    email: string;
    contact: string;
    address: string;
    image: File | null; // ✅ FIX
  };
  isLoading: boolean;
};

export type SchoolAction =
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_SCHOOL"; payload: { name: keyof SchoolState["schoolObj"]; value: any } };

export type SchoolContextType = {
  state: SchoolState;
  dispatch: React.Dispatch<SchoolAction>;
  handleChange :(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>void
  handleSubmit :(e:React.SubmitEvent<HTMLFormElement>)=>Promise<void>
};