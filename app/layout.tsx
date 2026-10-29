import type { Metadata } from "next";
import "./globals.css";

/* Deployed domain from README — do not invent alternate domains */
const SITE_URL = "https://nikhil-portfolio-rose.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Nikhil Chhetri — Systems & AI Engineer | 3D Interactive Portfolio",
  description:
    "Portfolio of Nikhil Chhetri, developer building AI systems, graph engines, autonomous robotics, and interactive web experiences.",
  keywords: [
    "Nikhil Chhetri",
    "Creative Developer",
    "AI Systems",
    "Robotics",
    "Three.js",
    "React Three Fiber",
    "GSAP",
    "Next.js",
  ],
  authors: [{ name: "Nikhil Chhetri" }],
  creator: "Nikhil Chhetri",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Nikhil Chhetri Portfolio",
    title: "Nikhil Chhetri — Systems & AI Engineer | 3D Interactive Portfolio",
    description:
      "Interactive 3D portfolio showcasing work across autonomous robotics, graph fraud investigation, and modern AI engineering.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikhil Chhetri — Systems & AI Engineer | 3D Interactive Portfolio",
    description:
      "Interactive 3D portfolio showcasing work across autonomous robotics, graph fraud investigation, and modern AI engineering.",
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
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-accent/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
