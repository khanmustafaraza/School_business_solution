import React from "react";

const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-full bg-slate-50 p-2">{children}</div>;
};

export default MainContainer;
