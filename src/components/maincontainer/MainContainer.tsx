import React from "react";

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full bg-slate-50 p-4">{children}</div>;
};

export default MainContainer;
