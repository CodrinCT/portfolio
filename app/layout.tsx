import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tapusa Codrin - Portfolio",
  description: "A passionate software developer with a knack for crafting elegant solutions. Explore my projects, skills, and experience in the world of coding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-gray-50 text-gray-950 h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative h-[500px] pt-28 sm:pt-36">
        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-44 h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-275 -z-10"></div>
        <div className="bg-[#dbd7fb] absolute  top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] 
        sm:w-275 md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] -z-10"></div>
        <Header></Header>
        {children}
        </body>
    </html>
  );
}
