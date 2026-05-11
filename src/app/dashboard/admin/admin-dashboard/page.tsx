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
 <div className="good">good</div>
  );
};

export default AdminDashboard;
