import Nav from "@/components/layout/Nav";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
      </body>
    </html>
  );
}
