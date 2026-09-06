"use client";

import { useState } from "react";
import { Mail, Copy, Check, ArrowUpRight, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./ui/icons";

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedLinkedin, setCopiedLinkedin] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("nikhil142004@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyLinkedinPlaceholder = () => {
    navigator.clipboard.writeText("YOUR_LINKEDIN_HERE");
    setCopiedLinkedin(true);
    setTimeout(() => setCopiedLinkedin(false), 2500);
  };

  return (
    <section id="contact" className="py-28 md:py-40 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="rounded-3xl bg-[#11141d] border border-white/[0.1] p-8 sm:p-14 lg:p-16 relative overflow-hidden">
          {/* Subtle warm accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-emerald-500 opacity-80" />

          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono text-[#9ba1a6] uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="text-orange-400 font-bold">09 /</span>
              <span>CONNECT</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#f5f4ef] tracking-tight leading-[1.05] mb-6">
              HAVE AN IDEA?
              <br />
              LET&apos;S BUILD IT.
            </h2>

            <p className="text-base sm:text-xl text-[#9ba1a6] leading-relaxed max-w-2xl">
              I&apos;m open to interesting projects, hackathons, internships, freelance
              opportunities and collaborations.
            </p>

            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-[#f5f4ef] mt-6 bg-white/[0.03] px-3.5 py-1.5 rounded-full border border-white/[0.06] w-fit">
              <MapPin className="w-3.5 h-3.5 text-orange-400" />
              <span>Bangalore, India</span>
            </div>
          </div>

          {/* Contact Direct Channels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {/* Email */}
            <div className="p-5 rounded-2xl bg-[#0a0c12] border border-white/[0.08] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#9ba1a6]">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-amber-400" />
                    <span>EMAIL</span>
                  </span>
                  <button
                    onClick={copyEmail}
                    className="hover:text-[#f5f4ef] transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                <div className="text-sm font-mono font-bold text-[#f5f4ef] break-all mb-4">
                  nikhil142004@gmail.com
                </div>
              </div>

              <a
                href="mailto:nikhil142004@gmail.com"
                className="inline-flex items-center gap-1 text-xs font-mono text-amber-400 hover:underline"
              >
                <span>Write an email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* GitHub */}
            <div className="p-5 rounded-2xl bg-[#0a0c12] border border-white/[0.08] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#9ba1a6]">
                  <span className="flex items-center gap-1.5">
                    <GithubIcon className="w-3.5 h-3.5 text-[#f5f4ef]" />
                    <span>GITHUB</span>
                  </span>
                </div>
                <div className="text-sm font-mono font-bold text-[#f5f4ef] break-all mb-4">
                  github.com/nikhi20-900
                </div>
              </div>

              <a
                href="https://github.com/nikhi20-900"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono text-[#f5f4ef] hover:underline"
                data-cursor="code"
              >
                <span>View repositories</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* LinkedIn (Placeholder) */}
            <div className="p-5 rounded-2xl bg-[#0a0c12] border border-white/[0.08] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono text-[#9ba1a6]">
                  <span className="flex items-center gap-1.5">
                    <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                    <span>LINKEDIN</span>
                  </span>
                  <button
                    onClick={copyLinkedinPlaceholder}
                    className="hover:text-[#f5f4ef] transition-colors"
                    title="Copy LinkedIn placeholder"
                  >
                    {copiedLinkedin ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                <div className="text-sm font-mono font-bold text-[#f5f4ef] break-all mb-4">
                  YOUR_LINKEDIN_HERE
                </div>
              </div>

              <button
                onClick={copyLinkedinPlaceholder}
                className="inline-flex items-center gap-1 text-xs font-mono text-[#9ba1a6] hover:text-[#f5f4ef] text-left"
              >
                <span>{copiedLinkedin ? "Copied placeholder" : "Copy placeholder"}</span>
              </button>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:nikhil142004@gmail.com"
              className="px-6 py-3.5 rounded-full bg-[#f5f4ef] text-[#0d0f14] font-mono text-xs sm:text-sm font-bold hover:bg-white transition-all"
            >
              Email Nikhil Directly
            </a>

            <a
              href="https://github.com/nikhi20-900"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-[#f5f4ef] border border-white/[0.1] font-mono text-xs sm:text-sm font-medium transition-all"
              data-cursor="code"
            >
              Check GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
