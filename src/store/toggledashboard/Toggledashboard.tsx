"use client";
import { useContext, useState, createContext } from "react";

type ToggleContextType = {
  toggle: boolean;
  handleToggle: () => void;
};

const ToggleContext = createContext<ToggleContextType | null>(null);

const ToggleProvider = ({ children }: { children: React.ReactNode }) => {
  const [toggle, setToggle] = useState(false);
  const[view,setView] = useState("list")

  const handleToggle = () => {
    console.log("clicked");
    setToggle((prev) => !prev);
  };
  const handleView  =(type)=>{
    setView(type)

  }

  return (
    <ToggleContext.Provider value={{ toggle, handleToggle,handleView,view }}>
      {children}
    </ToggleContext.Provider>
  );
};

const useToggle = () => {
  const context = useContext(ToggleContext);

  if (!context) {
    throw new Error("Error: useToggle must be used inside ToggleProvider");
  }

  return context;
};

export { ToggleProvider, useToggle };
