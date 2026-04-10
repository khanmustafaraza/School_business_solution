import React from "react";

const ParentContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="bg-white p-1">{children}</div>;
};

export default ParentContainer;
