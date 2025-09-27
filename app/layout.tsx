import type React from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Bhuvaneshwar N - Full Stack Developer",
  description:
    "Portfolio of Bhuvaneshwar N, a passionate full-stack developer specializing in React, Node.js, and modern web technologies.",
  keywords: ["developer", "portfolio", "react", "nodejs", "fullstack"],
  authors: [{ name: "Bhuvaneshwar N" }],
  openGraph: {
    title: "Bhuvaneshwar N - Full Stack Developer",
    description:
      "Portfolio of Bhuvaneshwar N, a passionate full-stack developer specializing in React, Node.js, and modern web technologies.",
    type: "website",
  },
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="font-sans bg-background text-foreground min-h-screen">
        {children}
      </body>
    </html>
  );
}
