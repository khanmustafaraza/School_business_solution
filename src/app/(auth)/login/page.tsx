"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your login logic here
    router.push("/admin"); // redirect to admin dashboard
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md p-8 border border-gray-100 rounded shadow-sm">
        <h1 className="text-2xl font-bold mb-6 text-gray-900 text-center">Admin Login</h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400"
            required
          />
          <button
            type="submit"
            className="bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}