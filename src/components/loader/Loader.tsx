"use client";

import { ClipLoader } from "react-spinners";

interface LoaderProps {
  isLoading: boolean;
  message?: string;
}

export default function Loader({ isLoading, message = "Loading..." }: LoaderProps) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/40 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-3 rounded border border-slate-200 bg-white p-1 shadow-sm">
        
        <ClipLoader
          color="#0f172a"
          size={45}
          speedMultiplier={0.9}
        />

        <p className="text-sm font-medium text-slate-700">
          {message}
        </p>

      </div>
    </div>
  );
}