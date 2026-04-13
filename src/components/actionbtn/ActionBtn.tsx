import { Save, SquareX } from "lucide-react";
import React from "react";

const ActionBtn = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <div className="rounded flex items-center gap-2 px-4 border bg-black  py-3 text-sm font-medium text-white hover:text-black hover:bg-gray-50 transition-all duration-200">
        <SquareX />
        <button type="button">Cancel</button>
      </div>
      <div>
        <button
          type="submit"
          className="rounded bg-[#5dbea3] flex items-center gap-2 px-5  py-3 text-sm font-medium text-white hover:bg-emerald-500 transition-all duration-200"
        >
          <Save />
          Save
        </button>
      </div>
    </div>
  );
};

export default ActionBtn;
