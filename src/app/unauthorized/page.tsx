"use client";

import { useRouter } from "next/navigation";

export default function UnauthorizedPage() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-red-600">
        Unauthorized Access
      </h1>

      <p className="text-gray-500 mt-2">
        You don’t have permission to view this page.
      </p>

      <button
        onClick={() => router.replace("/dashboard")}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Go to Dashboard
      </button>
    </div>
  );
}