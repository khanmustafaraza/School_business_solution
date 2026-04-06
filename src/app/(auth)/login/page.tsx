"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiLogIn,
  FiBookOpen,
  FiShield,
  FiUsers,
} from "react-icons/fi";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Login Data:", formData);

      // TODO: Replace with your login API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      alert("Login Successful!");
    } catch (error) {
      console.error(error);
      alert("Login Failed!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        {/* Left Branding Section */}
        <div className="relative hidden overflow-hidden bg-slate-900 lg:flex">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_30%)]" />

          <div className="relative z-10 flex w-full flex-col justify-between p-10 xl:p-14 text-white">
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                <FiBookOpen size={28} />
              </div>

              <h1 className="max-w-md text-4xl font-bold leading-tight">
                Welcome to School ERP Management System
              </h1>
              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300">
                Manage students, classes, attendance, transfer certificates,
                staff records, and academic operations in one secure dashboard.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <FeatureCard
                icon={<FiUsers size={20} />}
                title="Students"
                desc="Manage admissions, records and student data"
              />
              <FeatureCard
                icon={<FiBookOpen size={20} />}
                title="Academics"
                desc="Track classes, sections and school operations"
              />
              <FeatureCard
                icon={<FiShield size={20} />}
                title="Secure"
                desc="Protected access for school administration"
              />
            </div>
          </div>
        </div>

        {/* Right Login Section */}
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-10">
          <div className="w-full max-w-md">
            {/* Mobile Branding */}
            <div className="mb-8 text-center lg:hidden">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white">
                <FiBookOpen size={26} />
              </div>
              <h1 className="text-2xl font-bold text-slate-800">School ERP</h1>
              <p className="mt-2 text-sm text-slate-500">
                Sign in to continue to your dashboard
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-800">Sign In</h2>
                <p className="mt-1 text-sm text-slate-500">
                  Enter your credentials to access your account
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Email Address
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <FiMail size={18} />
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-slate-200 focus:bg-white"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Password
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <FiLock size={18} />
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-12 text-sm outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-slate-200 focus:bg-white"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-slate-700"
                    >
                      {showPassword ? (
                        <FiEyeOff size={18} />
                      ) : (
                        <FiEye size={18} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember + Forgot */}
                <div className="flex items-center justify-between gap-3">
                  <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
                    <input
                      type="checkbox"
                      name="remember"
                      checked={formData.remember}
                      onChange={handleChange}
                      className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-300"
                    />
                    Remember me
                  </label>

                  <Link
                    href="/forgot-password"
                    className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
                  >
                    Forgot Password?
                  </Link>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <FiLogIn size={18} />
                  {isLoading ? "Signing In..." : "Sign In"}
                </button>
              </form>

              {/* Footer */}
              <div className="mt-6 border-t border-slate-100 pt-5 text-center">
                <p className="text-xs leading-6 text-slate-500">
                  Secure school administration portal for managing students,
                  academics, and operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Reusable Feature Card ---------- */

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
      <div className="mb-3 inline-flex rounded-xl bg-white/10 p-2">{icon}</div>
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <p className="mt-1 text-xs leading-6 text-slate-300">{desc}</p>
    </div>
  );
}
