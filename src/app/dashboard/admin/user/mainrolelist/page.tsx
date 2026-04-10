import Container from "@/components/container/Container";
import MainContainer from "@/components/maincontainer/MainContainer";
import ParentContainer from "@/components/parentcontainer/ParentContainer";
import React from "react";
import Link from "next/link";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaRunning,
  FaBook,
  FaBus,
  FaMoneyBill,
  FaRegistered,
} from "react-icons/fa";
import AdminHeading from "@/components/headings/AdminHeading";

const roleCards = [
  {
    id: 1,
    title: "Add Student",
    href: "/dashboard/admin/student",
    icon: <FaUserGraduate />,
    bg: "bg-blue-50",
    iconBg: "bg-blue-500",
  },
  {
    id: 2,
    title: "Add Teacher",
    href: "/dashboard/admin/gameteacher",
    icon: <FaRunning />,
    bg: "bg-green-50",
    iconBg: "bg-green-500",
  },
  {
    id: 3,
    title: "Add Admin",
    href: "/dashboard/admin/gameteacher",
    icon: <FaRunning />,
    bg: "bg-green-50",
    iconBg: "bg-green-500",
  },

  {
    id: 6,
    title: "Driver",
    href: "/dashboard/admin/driver",
    icon: <FaBus />,
    bg: "bg-yellow-50",
    iconBg: "bg-yellow-500",
  },
  {
    id: 7,
    title: "Accountant",
    href: "/dashboard/admin/accountant",
    icon: <FaMoneyBill />,
    bg: "bg-gray-100",
    iconBg: "bg-gray-700",
  },
];
const heading = {
  name: "School List",
  subHeading: "List Of Register School.",
  href: "/dashboard/admin/school/school-register",
  btnHeading: "Add School",
  icon: <FaRegistered />,
};

const MainRoleList = () => {
  return (
    <ParentContainer>
      <MainContainer>
        <AdminHeading heading={heading} />
        <Container>
          <div className="flex gap-5 flex-wrap justify-center">
            {roleCards.map((item) => (
              <Link key={item.id} href={item.href}>
                <div
                  className={`w-[220px] h-[140px] ${item.bg} hover:shadow-md transition-all duration-300 flex items-center gap-4 px-5 cursor-pointer`}
                >
                  {/* Icon */}
                  <div
                    className={`w-10 h-10 flex items-center justify-center text-white text-lg ${item.iconBg}`}
                  >
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h2 className="text-base font-medium text-gray-800">
                    {item.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </MainContainer>
    </ParentContainer>
  );
};

export default MainRoleList;
