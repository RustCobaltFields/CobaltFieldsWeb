import type { Metadata } from "next";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
    title: "Cobalt Fields",
    description: "High quality Rust servers",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="ru">
            <body className={`rootContainer antialiased`}>
                {children}
            </body>
        </html>
  );
}
