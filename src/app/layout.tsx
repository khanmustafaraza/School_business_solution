import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ToggleProvider } from "@/store/toggledashboard/Toggledashboard";
import "./globals.css";
import { SchoolProvider } from "@/store/school/School";

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
        <ToggleProvider>
          <SchoolProvider>{children}</SchoolProvider>
        </ToggleProvider>
      </body>
    </html>
  );
}
