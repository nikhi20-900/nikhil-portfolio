"use client";

import { ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./ui/icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#090b0f] py-14">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/[0.06]">
          <div>
            <span className="font-bold tracking-tight text-lg text-[#f5f4ef] block mb-1">
              NIKHIL CHHETRI
            </span>
            <p className="text-xs sm:text-sm font-mono text-[#9ba1a6]">
              Frontend / Full-Stack Developer · AI &amp; Robotics Enthusiast
            </p>
            <p className="text-xs font-mono text-[#9ba1a6] mt-1">Bangalore · India</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/nikhi20-900"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-[#9ba1a6] hover:text-[#f5f4ef] transition-colors flex items-center gap-1.5"
              data-cursor="code"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <span className="text-white/[0.2]">/</span>

            <a
              href="https://www.linkedin.com/in/nikhil-chhetri-115747284/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-[#9ba1a6] hover:text-[#f5f4ef] transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
              <span>LinkedIn</span>
            </a>

            <span className="text-white/[0.2]">/</span>

            <a
              href="mailto:nikhil142004@gmail.com"
              className="text-xs font-mono text-[#9ba1a6] hover:text-[#f5f4ef] transition-colors"
            >
              Email
            </a>

            <span className="text-white/[0.2]">/</span>

            <button
              onClick={scrollToTop}
              className="text-xs font-mono text-[#9ba1a6] hover:text-[#f5f4ef] transition-colors flex items-center gap-1"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#9ba1a6]">
          <p>&copy; 2026 Nikhil Chhetri. All rights reserved.</p>
          <p>&ldquo;From web interfaces to autonomous robots.&rdquo;</p>
        </div>
      </div>
    </footer>
  );
}
