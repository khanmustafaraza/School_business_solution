"use client";

import React, { useState } from "react";

const Darkmode = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  return (
    <div className={mode === "dark" ? "dark" : ""}>
      <div className="flex justify-center  bg-white dark:bg-gray-900 transition">
        {/* TOGGLE */}
        <button
          onClick={() =>
            setMode((prev) => (prev === "light" ? "dark" : "light"))
          }
          className="relative flex items-center w-[80px] h-[36px] px-1 
                     bg-gray-200 dark:bg-gray-800
                     rounded-full transition "
        >
          <span className="flex-1 text-center text-sm">🌙</span>
          <span className="flex-1 text-center text-sm">☀</span>

          <div
            className={`absolute top-1 w-[30px] h-[30px] rounded-full 
                        bg-white dark:bg-black shadow-md
                        transition-all duration-300
                        ${mode === "dark" ? "translate-x-[40px]" : "translate-x-0"}`}
          />
        </button>
      </div>
    </div>
  );
};

export default Darkmode;
