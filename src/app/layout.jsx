// app/layout.js
import AuthProvider from "@/context/AuthProvider";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import NavBar from "@/components/NavBar";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#F9F9FB] font-sans">
        <AuthProvider>
          <NavBar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}