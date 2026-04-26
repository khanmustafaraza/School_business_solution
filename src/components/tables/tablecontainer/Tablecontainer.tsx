import React from "react";

const TableContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <div className="overflow-hidden rounded bg-white shadow-sm ring-1 ring-slate-200/70">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm  text-center">
            {children}
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableContainer;
