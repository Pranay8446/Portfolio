import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import 'remixicon/fonts/remixicon.css';

export const metadata: Metadata = {
  title: "Pranay Chandurkar - Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
      >
        <>
          {children}
        </>
      </body>
    </html>
  );
}
