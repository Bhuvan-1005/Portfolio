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
  title:
    "Bhuvaneshwar N - Full Stack Developer | React, Node.js, Blockchain Expert",
  description:
    "Experienced Full Stack Developer specializing in React, Node.js, TypeScript, and blockchain development. View my portfolio of modern web applications, AI-powered solutions, and crisis management systems.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript",
    "Blockchain Developer",
    "Web Developer",
    "Chennai Developer",
    "Portfolio",
    "JavaScript Expert",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [
    {
      name: "Bhuvaneshwar N",
      url: "https://portfolio-website-six-olive-95.vercel.app",
    },
  ],
  creator: "Bhuvaneshwar N",
  publisher: "Bhuvaneshwar N",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-website-six-olive-95.vercel.app",
    title: "Bhuvaneshwar N - Full Stack Developer",
    description:
      "Experienced Full Stack Developer specializing in React, Node.js, TypeScript, and blockchain development. View my portfolio of modern web applications and innovative solutions.",
    siteName: "Bhuvaneshwar N Portfolio",
    images: [
      {
        url: "https://i.ibb.co/sShDVwJ/Bhuvan-Photo.jpg",
        width: 1200,
        height: 630,
        alt: "Bhuvaneshwar N - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhuvaneshwar N - Full Stack Developer",
    description:
      "Experienced Full Stack Developer specializing in React, Node.js, TypeScript, and blockchain development.",
    images: ["https://i.ibb.co/sShDVwJ/Bhuvan-Photo.jpg"],
    creator: "@Bhuvaneshwarn4",
  },
  alternates: {
    canonical: "https://portfolio-website-six-olive-95.vercel.app",
  },
  generator: "Next.js",
  applicationName: "Bhuvaneshwar N Portfolio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: [
      { url: "/apple-touch-icon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
  manifest: "/manifest.json",
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
