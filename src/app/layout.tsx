import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ToggleProvider } from "@/store/Toggledashboard";
import "./globals.css";

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
        <ToggleProvider>{children}</ToggleProvider>
      </body>
    </html>
  );
}
