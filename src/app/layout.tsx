import Nav from "@/lib/components/layout/Nav";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FaFacebookF } from "react-icons/fa6";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CVMA 25-2 | Shamrocks",
  description:
    "Homepage for the Combat Veterans Motorcycle Association's Georgia Chapter 25-2",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-theme="shamrocks">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden w-screen`}
      >
        <Nav />
        {children}
        <footer className="flex gap-5 w-full justify-center my-10">
          <a href="https://www.facebook.com/cvma.ga.25.2" className="shadow-white/50 shadow-lg p-3 rounded flex gap-3 items-center">
          <FaFacebookF size={32}/>
          Chapter
          </a>
          <a href="https://www.facebook.com/groups/1606765936220556/" className="shadow-white/50 shadow-lg p-3 rounded flex gap-3 items-center">
          <FaFacebookF size={32}/>
          Auxiliary
          </a>
        </footer>
      </body>
    </html>
  );
}
