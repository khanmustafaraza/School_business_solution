"use client";

import React from "react";
import {
  FaSchool,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaMoneyBillWave,
  FaUserPlus,
  FaClipboardCheck,
  FaBell,
} from "react-icons/fa";
import { FiArrowUpRight, FiMoreHorizontal, FiTrendingUp } from "react-icons/fi";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 24000 },
  { month: "Feb", revenue: 28000 },
  { month: "Mar", revenue: 32000 },
  { month: "Apr", revenue: 30000 },
  { month: "May", revenue: 36000 },
  { month: "Jun", revenue: 42000 },
];

const attendanceData = [
  { day: "Mon", attendance: 88 },
  { day: "Tue", attendance: 91 },
  { day: "Wed", attendance: 86 },
  { day: "Thu", attendance: 94 },
  { day: "Fri", attendance: 89 },
  { day: "Sat", attendance: 84 },
];

const stats = [
  {
    title: "Total Schools",
    value: "12",
    change: "+2 this month",
    icon: <FaSchool className="text-xl" />,
    bg: "bg-blue-100",
    text: "text-blue-600",
  },
  {
    title: "Total Students",
    value: "8,450",
    change: "+120 this week",
    icon: <FaUserGraduate className="text-xl" />,
    bg: "bg-green-100",
    text: "text-green-600",
  },
  {
    title: "Total Teachers",
    value: "342",
    change: "+8 new hires",
    icon: <FaChalkboardTeacher className="text-xl" />,
    bg: "bg-purple-100",
    text: "text-purple-600",
  },
  {
    title: "Monthly Revenue",
    value: "₹4,20,000",
    change: "+12.4%",
    icon: <FaMoneyBillWave className="text-xl" />,
    bg: "bg-yellow-100",
    text: "text-yellow-600",
  },
];

const recentAdmissions = [
  {
    name: "Ayaan Khan",
    class: "Class 8",
    school: "Al-Noor Public School",
    date: "Today",
  },
  {
    name: "Zoya Fatima",
    class: "Class 5",
    school: "City Model School",
    date: "Yesterday",
  },
  {
    name: "Mohd Arham",
    class: "Class 10",
    school: "Bright Future Academy",
    date: "2 days ago",
  },
  {
    name: "Sara Ali",
    class: "Class 6",
    school: "Scholars School",
    date: "3 days ago",
  },
];

const quickActions = [
  {
    title: "Add Student",
    icon: <FaUserPlus />,
    color: "bg-blue-600",
  },
  {
    title: "Mark Attendance",
    icon: <FaClipboardCheck />,
    color: "bg-green-600",
  },
  {
    title: "Send Notice",
    icon: <FaBell />,
    color: "bg-purple-600",
  },
];

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800">
            Admin Dashboard
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Welcome back! Here’s what’s happening in your ERP today.
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white shadow hover:bg-slate-800 transition">
          View Reports <FiArrowUpRight />
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {item.title}
                </p>
                <h2 className="mt-2 text-2xl font-bold text-slate-800">
                  {item.value}
                </h2>
                <p className="mt-2 flex items-center gap-1 text-sm text-green-600">
                  <FiTrendingUp className="text-sm" />
                  {item.change}
                </p>
              </div>

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.bg} ${item.text}`}
              >
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Revenue Chart */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm xl:col-span-2">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-800">
                Revenue Overview
              </h2>
              <p className="text-sm text-slate-500">
                Monthly fee collection performance
              </p>
            </div>
            <button className="text-slate-400 hover:text-slate-700">
              <FiMoreHorizontal size={20} />
            </button>
          </div>

          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <XAxis dataKey="month" />
                <Tooltip />
                <Bar dataKey="revenue" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800">
            Quick Actions
          </h2>
          <p className="text-sm text-slate-500 mb-5">
            Perform common ERP tasks quickly
          </p>

          <div className="space-y-4">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className="w-full flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-4 hover:bg-slate-50 transition"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`h-11 w-11 rounded-xl ${action.color} text-white flex items-center justify-center`}
                  >
                    {action.icon}
                  </div>
                  <span className="font-medium text-slate-700">
                    {action.title}
                  </span>
                </div>
                <FiArrowUpRight className="text-slate-400" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Attendance Chart */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm xl:col-span-2">
          <div className="mb-5">
            <h2 className="text-lg font-semibold text-slate-800">
              Weekly Attendance
            </h2>
            <p className="text-sm text-slate-500">
              Student attendance performance
            </p>
          </div>

          <div className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="attendance"
                  strokeWidth={3}
                  fillOpacity={0.2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Admissions */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-5">
            <h2 className="text-lg font-semibold text-slate-800">
              Recent Admissions
            </h2>
            <p className="text-sm text-slate-500">
              Latest student registrations
            </p>
          </div>

          <div className="space-y-4">
            {recentAdmissions.map((student, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-100 p-4 hover:bg-slate-50 transition"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-800">
                      {student.name}
                    </h3>
                    <p className="text-sm text-slate-500">{student.class}</p>
                    <p className="text-sm text-slate-400 mt-1">
                      {student.school}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-slate-500">
                    {student.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
