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

/* Deployed domain from README — do not invent alternate domains */
const SITE_URL = "https://nikhil-portfolio-rose.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Nikhil Chhetri — Developer Building AI, Robotics & Full-Stack Systems",
  description:
    "Portfolio of Nikhil Chhetri, BCA student and builder in Bangalore. Selected work across AI systems, graph-based fraud investigation, autonomous robotics, civic tech, and full-stack products — with source and honest status labels.",
  keywords: [
    "Nikhil Chhetri",
    "Full-Stack Developer",
    "AI Systems",
    "Robotics",
    "ROS 2",
    "NAVIGEN",
    "Fraud Investigation Agent",
    "SchemeSaathi",
    "Next.js",
    "Bangalore",
    "Dayananda Sagar University",
  ],
  authors: [{ name: "Nikhil Chhetri" }],
  creator: "Nikhil Chhetri",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Nikhil Chhetri Portfolio",
    title: "Nikhil Chhetri — Developer Building AI, Robotics & Full-Stack Systems",
    description:
      "Selected engineering work: AI systems, autonomous robotics, civic tech, and full-stack products — with architecture, source, and honest BUILT / BUILDING status.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikhil Chhetri — Developer Building AI, Robotics & Full-Stack Systems",
    description:
      "Selected engineering work: AI systems, autonomous robotics, civic tech, and full-stack products — with architecture, source, and honest status.",
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
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
