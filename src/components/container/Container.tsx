import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded border border-gray-200 bg-white p-2 md:p-2">
      {children}
    </div>
  );
};

export default Container;
