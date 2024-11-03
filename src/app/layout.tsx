import type { Metadata } from "next";
import Navbar from './Navbar';
import "./globals.css";

export const metadata: Metadata = {
  title: "קולנוע משנה מציאות",
  description: "סרטים וסדנאות מותאמים לבני נוער",
  icons: {'icon': '/favicon.ico'},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body dir="rtl">
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
