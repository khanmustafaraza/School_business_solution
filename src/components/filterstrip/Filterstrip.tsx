import React from "react";
import { Search, LayoutGrid, List } from "lucide-react";

const FilterStrip = () => {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
      {/* LEFT */}

      <div className="flex flex-1 flex-col gap-3 sm:flex-row">
        {/* SEARCH */}

        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

          <input
            type="text"
            placeholder="Search enquiries..."
            className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm font-medium text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100"
          />
        </div>

        {/* SELECT */}

        <select className="h-11 min-w-[180px] rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-700 outline-none transition-all duration-200 focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100">
          <option>All Status</option>
          <option>Pending</option>
          <option>Completed</option>
          <option>Rejected</option>
        </select>
      </div>

      {/* RIGHT */}

      <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 p-1">
        <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500 text-white shadow-sm transition-all duration-200">
          <LayoutGrid size={18} />
        </button>

        <button className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-all duration-200 hover:bg-white hover:text-slate-700">
          <List size={18} />
        </button>
      </div>
    </div>
  );
};

export default FilterStrip;
