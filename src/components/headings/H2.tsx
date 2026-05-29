import React from "react";
import { BookOpen, TrendingUp } from "lucide-react";

const H2 = () => {
  return (
    <div className="relative overflow-hidden w-full max-w-[200px] rounded m-2 border border-slate-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-xl">
      {/* Background Glow */}
      <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-emerald-50 blur-2xl" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Total Classes
            </p>

            <h2 className="mt-2 text-4xl font-bold tracking-tight text-slate-800">
              24
            </h2>
          </div>

          {/* Icon */}
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100 shadow-sm">
            <BookOpen className="h-5 w-5 text-emerald-600" />
          </div>
        </div>

        {/* Bottom Progress Accent */}
        <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-2/3 rounded-full bg-emerald-500" />
        </div>
      </div>
    </div>
  );
};

export default H2;
