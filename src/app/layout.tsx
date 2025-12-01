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
  title: "Nayla Syafira | Desainer Bangunan & Mebel",
  description: "Portofolio Nayla Syafira, pelajar DPIB SMKN 2 Surabaya. Ahli AutoCAD, SketchUp, dan desain bangunan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0f0f0f] text-[#f0f0f0]`}
      >
        {children}
      </body>
    </html>
  );
}
