import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ToggleProvider } from "@/store/toggledashboard/Toggledashboard";
import { UserProvider } from "@/store/admin/user/User";
import { SchoolProvider } from "@/store/admin/school/School";
import { ClassProvider } from "@/store/admin/class/Class";
import "./globals.css";
import { StudentProvider } from "@/store/admin/student/Student";
import { EnquiryProvider } from "@/store/enquiry/Enquiry";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "@/store/auth/Auth";

const openSans = Open_Sans({
  variable: "--font-open",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "School ERP",
  description: "Modern School ERP Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${openSans.className} min-h-full flex flex-col`}>
        <ToastContainer />
        <AuthProvider>
          <EnquiryProvider>
            <ToggleProvider>
              <UserProvider>
                <SchoolProvider>
                  <ClassProvider>
                    <StudentProvider>{children}</StudentProvider>
                  </ClassProvider>
                </SchoolProvider>
              </UserProvider>
            </ToggleProvider>
          </EnquiryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
