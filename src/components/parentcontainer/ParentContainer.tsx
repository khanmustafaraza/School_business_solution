import React from "react";

const ParentContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-white">{children}</div>;
};

export default ParentContainer;
