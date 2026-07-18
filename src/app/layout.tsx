import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toast } from "@heroui/react";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Woodora",
    template: "%s | Woodora",
  },
  description: "A modern Furniture shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className}  h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#F5F0E6]">
         <Toast.Provider  />
        <main>{children}</main>
      </body>
    </html>
  );
}
