import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import ReactQueryProvider from "@/lib/ReactQueryProvider";
const comfortaa = Comfortaa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Course Juggad",
  description:
    "A course constructor by using AI for students who are struggling to find the right course and also dont have enough money to buy for them.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={comfortaa.className}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <Analytics />
      </body>
    </html>
  );
}
