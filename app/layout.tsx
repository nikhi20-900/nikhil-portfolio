import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nikhil Chhetri | Frontend & Full-Stack Developer · AI & Robotics",
  description:
    "Portfolio of Nikhil Chhetri, BCA student at Dayananda Sagar University (DSU), Bangalore. Building real-world applications, intelligent systems, and innovative solutions through code, AI, and robotics.",
  keywords: [
    "Nikhil Chhetri",
    "Frontend Developer",
    "Full-Stack Developer",
    "AI & Robotics",
    "ROS 2",
    "NAVIGEN",
    "IoT",
    "Next.js",
    "React",
    "Bangalore",
    "Dayananda Sagar University",
  ],
  authors: [{ name: "Nikhil Chhetri" }],
  creator: "Nikhil Chhetri",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nikhilchhetri.dev",
    title: "Nikhil Chhetri | Frontend & Full-Stack Developer · AI & Robotics",
    description:
      "Building real-world applications, intelligent systems, and innovative solutions through code, AI, and robotics.",
    siteName: "Nikhil Chhetri Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikhil Chhetri | Frontend & Full-Stack Developer · AI & Robotics",
    description:
      "Building real-world applications, intelligent systems, and innovative solutions through code, AI, and robotics.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#06080f] text-slate-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
