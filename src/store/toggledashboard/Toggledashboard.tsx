"use client";
import { useContext, useState, createContext } from "react";

type ToggleContextType = {
  toggle: boolean;
  handleToggle: () => void;
};

const ToggleContext = createContext<ToggleContextType | null>(null);

const ToggleProvider = ({ children }: { children: React.ReactNode }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    console.log("clicked");
    setToggle((prev) => !prev);
  };

  return (
    <ToggleContext.Provider value={{ toggle, handleToggle }}>
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
