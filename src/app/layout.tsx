import type { Metadata } from "next";
import Navbar from './Navbar';
import "./globals.css";

import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "קולנוע משנה מציאות",
  description: "סרטים וסדנאות מותאמים לבני נוער",
  icons: {'icon': '/icon.ico'},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body dir="rtl">
        <Analytics />
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
