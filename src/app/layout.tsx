import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard Agricultura de Precisión",
  description: "Sistema de monitoreo y control para agricultura de precisión",
    icons: {
        icon: [
            { url: "https://res.cloudinary.com/dv2xu8dwr/image/upload/v1735339375/tractor_8091263_1_cubfei.png", sizes: "16x16", type: "image/png" },
            { url: "https://res.cloudinary.com/dv2xu8dwr/image/upload/v1735339375/tractor_8091263_1_cubfei.png", sizes: "32x32", type: "image/png" },
            { url: "https://res.cloudinary.com/dv2xu8dwr/image/upload/v1735339375/tractor_8091263_1_cubfei.png", sizes: "48x48", type: "image/png" },
            { url: "https://res.cloudinary.com/dv2xu8dwr/image/upload/v1735339375/tractor_8091263_1_cubfei.png", sizes: "192x192", type: "image/png" },
            { url: "https://res.cloudinary.com/dv2xu8dwr/image/upload/v1735339375/tractor_8091263_1_cubfei.png", sizes: "512x512", type: "image/png" },
        ],
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
