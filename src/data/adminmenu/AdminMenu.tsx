import { NavTypeProps } from "@/types/propstype";
import luicideIcons from "@/constants/icons/luicide";
import icons from "@/constants/icons/icons";

const navData: NavTypeProps[] = [
  {
    id: 0,
    name: "Dashboard",
    link: "/dashboard/admin/admin-dashboard",
    icon: <luicideIcons.LayoutDashboard size={18} />,
  },
  {
    id: 1,
    name: "Enquiries List",
    link: "/dashboard/admin/enquiry/enquiry-list",
    icon: <icons.FaQuestionCircle size={18} />,
  },
   {
    id: 2,
    name: "Add School",
    link: "/dashboard/admin/school/school-register",
    icon: <luicideIcons.Building2 size={18} />,
  },
   {
    id: 3,
    name: "School List",
    link: "/dashboard/admin/school/school-list",
    icon: <icons.BiSolidSchool size={18} />,
  },
   {
    id: 6,
    name: "Add User",
    link: "/dashboard/admin/user/user-register",
    icon: <icons.FaUserGraduate size={18} />,
  },
   {
    id: 4,
    name: "Add Class",
    link: "/dashboard/admin/class/class-register",
    icon: <icons.SiGoogleclassroom size={18} />,
  },
  {
    id: 5,
    name: "Class List",
    link: "/dashboard/admin/class/class-list",
    icon: <luicideIcons.CassetteTape size={18} />,
  },

  {
    id: 7,
    name: "User List",
    link: "/dashboard/admin/user/user-list",
    icon: <icons.PiUserListBold size={18} />,
  },
 
 
 
  
 
  {
    id: 8,
    name: "Student List",
    link: "/dashboard/admin/student/student-list",
    icon: <icons.PiStudent size={18} />,
  },
  {
    id: 9,
    name: "Certificates",
    link: "/dashboard/admin/tc/tc-register",
    icon: <luicideIcons.BadgeCheck size={18} />,
  },
];

export default navData;
