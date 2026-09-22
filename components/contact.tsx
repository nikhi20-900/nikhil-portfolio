"use client";

import { Mail, ArrowUpRight, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./ui/icons";

export function Contact() {
  return (
    <section id="contact" className="py-28 md:py-40 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="rounded-3xl bg-[#11141d] border border-white/[0.1] p-8 sm:p-14 lg:p-16 relative overflow-hidden">
          {/* Subtle warm accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-[#84a98c] opacity-80"
            aria-hidden="true"
          />

          <div className="max-w-3xl mb-10">
            <div className="text-xs font-mono text-[#9ba1a6] uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="text-orange-400 font-bold">CONTACT /</span>
              <span>LET&apos;S TALK</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#f5f4ef] tracking-tight leading-[1.05] mb-6">
              START A
              <br />
              CONVERSATION.
            </h2>

            <p className="text-base sm:text-xl text-[#9ba1a6] leading-relaxed max-w-2xl">
              Open to interesting projects, hackathons, internships, freelance work, and
              collaborations. The fastest path is email.
            </p>

            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-[#f5f4ef] mt-6 bg-white/[0.03] px-3.5 py-1.5 rounded-full border border-white/[0.06] w-fit">
              <MapPin className="w-3.5 h-3.5 text-orange-400" aria-hidden="true" />
              <span>Bangalore, India</span>
            </div>
          </div>

          {/* Primary actions — one obvious goal */}
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <a
              href="mailto:nikhil142004@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#f5f4ef] text-[#0d0f14] font-mono text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-white transition-all shadow-lg shadow-black/30"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              <span>Email Me</span>
            </a>

            <a
              href="https://github.com/nikhi20-900"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-[#f5f4ef] border border-white/[0.1] font-mono text-xs sm:text-sm font-medium uppercase tracking-wider transition-all"
              data-cursor="code"
            >
              <GithubIcon className="w-4 h-4" aria-hidden="true" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#9ba1a6]" aria-hidden="true" />
            </a>

            <a
              href="https://www.linkedin.com/in/nikhil-chhetri-115747284/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-[#f5f4ef] border border-white/[0.1] font-mono text-xs sm:text-sm font-medium uppercase tracking-wider transition-all"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-400" aria-hidden="true" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#9ba1a6]" aria-hidden="true" />
            </a>
          </div>

          {/* Direct channels — addressable, no fake form */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
            <a
              href="mailto:nikhil142004@gmail.com"
              className="p-4 rounded-xl bg-[#0a0c12] border border-white/[0.08] hover:border-white/[0.18] transition-colors flex flex-col gap-1.5"
            >
              <span className="text-[#9ba1a6] uppercase tracking-widest text-[10px]">Email</span>
              <span className="text-[#f5f4ef] font-bold break-all">nikhil142004@gmail.com</span>
            </a>
            <a
              href="https://github.com/nikhi20-900"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#0a0c12] border border-white/[0.08] hover:border-white/[0.18] transition-colors flex flex-col gap-1.5"
              data-cursor="code"
            >
              <span className="text-[#9ba1a6] uppercase tracking-widest text-[10px]">GitHub</span>
              <span className="text-[#f5f4ef] font-bold break-all">github.com/nikhi20-900</span>
            </a>
            <a
              href="https://www.linkedin.com/in/nikhil-chhetri-115747284/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-[#0a0c12] border border-white/[0.08] hover:border-white/[0.18] transition-colors flex flex-col gap-1.5"
            >
              <span className="text-[#9ba1a6] uppercase tracking-widest text-[10px]">
                LinkedIn
              </span>
              <span className="text-[#f5f4ef] font-bold break-all">
                linkedin.com/in/nikhil-chhetri-115747284
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
