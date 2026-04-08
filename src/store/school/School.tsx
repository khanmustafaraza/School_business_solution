"use client"
import { schoolReducer } from "@/reducers/School";
import { SchoolContextType, SchoolState } from "@/types/schooltype";
import { createContext, useContext, useReducer } from "react";

const SchoolContext = createContext<SchoolContextType | null>(null);
const initialState: SchoolState = {
  schoolObj: {
    name: "",
    code: "",
    email: "",
    contact: "",
    address: "",
    image: null, // ✅ FIX
  },
  isLoading: false,
};

const SchoolProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(schoolReducer, initialState); // ✅ FIX
 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => {
  const { name, value} = e.target;
   let updateValue: string | number | File | null = value;
  if (name === "image" && "files" in e.target) {
    updateValue = e.target.files?.[0] ?? null;
  }

 
  dispatch({
    type: "SET_SCHOOL",
    payload: { name: name as keyof SchoolState["schoolObj"], value: updateValue },
  });
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   

    const formData = new FormData();
    formData.append("name", state.schoolObj.name);
    formData.append("code", state.schoolObj.code);
    formData.append("contact", state.schoolObj.contact);
    formData.append("email", state.schoolObj.email);
    if (state.schoolObj.image) {
        formData.append("image", state.schoolObj.image);
    }

    const res = await fetch("/api/school", {
        method: "POST",
        body: formData, // <-- send FormData directly
        // DO NOT set Content-Type manually; browser sets it automatically for FormData
    });

    const data = await res.json();
    console.log(data);
};

  return (
    <SchoolContext.Provider value={{ state, dispatch ,handleChange,handleSubmit}}> {/* ✅ FIX */}
      {children}
    </SchoolContext.Provider>
  );
};



const useSchool = () =>{
    const context = useContext(SchoolContext);
    if(!context) {
        throw new Error("No Context")

    }
    return context
}
export { SchoolProvider};
export default useSchool
// export { SchoolContext };