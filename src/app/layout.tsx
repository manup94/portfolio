import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Manuel Pérez - Portfolio",
  description: "Frontend Developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`bg-pattern ${GeistSans.className} max-w-7xl mx-auto`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
