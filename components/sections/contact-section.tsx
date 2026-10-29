"use client";

import React, { useState, useEffect } from "react";
import { Copy, Check, ArrowUpRight, Clock, MapPin, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");
  const email = "nikhil142004@gmail.com";

  // Bangalore IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section
      id="contact"
      className="relative w-full px-5 sm:px-8 md:px-12 pt-24 sm:pt-32 pb-16 z-10 border-t divider-subtle"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b divider-subtle pb-6 mb-12 sm:mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#a6a69f] uppercase mb-2">
              <span className="text-[#f97316] font-bold">05 /</span>
              <span>GET IN TOUCH</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#f5f4ef] tracking-tight">
              START A CONVERSATION.
            </h2>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-[#84a98c]">
            <span className="w-2 h-2 rounded-full bg-[#84a98c] animate-pulse" />
            <span>OPEN FOR SELECT PROJECTS &amp; TEAMS</span>
          </div>
        </div>

        {/* Contact Container */}
        <div className="rounded-3xl bg-[#13161e] border border-white/[0.08] p-6 sm:p-12 lg:p-14 mb-16 relative overflow-hidden">
          {/* Subtle top accent bar */}
          <div
            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f97316] via-amber-400 to-[#84a98c] opacity-80"
            aria-hidden="true"
          />

          <div className="max-w-3xl mb-10">
            <h3 className="text-2xl sm:text-4xl font-bold text-[#f5f4ef] tracking-tight mb-4">
              Have a problem worth building a system for?
            </h3>
            <p className="text-base sm:text-lg text-[#a6a69f] leading-relaxed font-light">
              I&apos;m interested in meaningful engineering challenges, collaborative projects,
              and opportunities to build useful technology. The fastest path is email.
            </p>
          </div>

          {/* Primary Action Row: Direct Email + One-Click Copy */}
          <div className="flex flex-wrap items-center gap-4 mb-10 pb-8 border-b border-white/[0.06]">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[#f5f4ef] text-[#0d0f14] font-mono text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-white transition-all shadow-lg shadow-black/30"
            >
              <Mail className="w-4 h-4" />
              <span>Email Me</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-5 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-[#f5f4ef] border border-white/[0.1] font-mono text-xs sm:text-sm tracking-wider transition-all cursor-pointer"
              aria-label="Copy email address to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#84a98c]" />
                  <span className="text-[#84a98c]">Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#a6a69f]" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>

          {/* Direct Addressable Channels */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
            {/* Email Channel */}
            <a
              href={`mailto:${email}`}
              className="p-5 rounded-2xl bg-[#090b10] border border-white/[0.06] hover:border-white/[0.18] transition-colors flex flex-col justify-between gap-3 group"
            >
              <div className="flex items-center justify-between text-[#a6a69f]">
                <span className="uppercase text-[10px] tracking-widest">DIRECT EMAIL</span>
                <Mail className="w-4 h-4 text-[#f97316]" />
              </div>
              <span className="text-[#f5f4ef] font-bold text-xs sm:text-sm break-all group-hover:text-[#f97316] transition-colors">
                {email}
              </span>
            </a>

            {/* GitHub Channel */}
            <a
              href="https://github.com/nikhi20-900"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#090b10] border border-white/[0.06] hover:border-white/[0.18] transition-colors flex flex-col justify-between gap-3 group"
            >
              <div className="flex items-center justify-between text-[#a6a69f]">
                <span className="uppercase text-[10px] tracking-widest">SOURCE CODE</span>
                <GithubIcon className="w-4 h-4" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#f5f4ef] font-bold text-xs sm:text-sm group-hover:text-[#f97316] transition-colors">
                  github.com/nikhi20-900
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#a6a69f]" />
              </div>
            </a>

            {/* LinkedIn Channel */}
            <a
              href="https://www.linkedin.com/in/nikhil-chhetri-115747284/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#090b10] border border-white/[0.06] hover:border-white/[0.18] transition-colors flex flex-col justify-between gap-3 group"
            >
              <div className="flex items-center justify-between text-[#a6a69f]">
                <span className="uppercase text-[10px] tracking-widest">NETWORK &amp; BIO</span>
                <LinkedinIcon className="w-4 h-4" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#f5f4ef] font-bold text-xs sm:text-sm group-hover:text-[#f97316] transition-colors truncate">
                  nikhil-chhetri-115747284
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#a6a69f]" />
              </div>
            </a>
          </div>

          {/* Live Telemetry / Location Footer Strip */}
          <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#a6a69f]">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#f97316]" />
              <span>Bangalore, Karnataka, India</span>
            </div>

            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#84a98c]" />
              <span>Local Time: {time || "Fetching..."} IST</span>
            </div>

            <div className="text-[11px] text-[#a6a69f]/70">
              Typical response &lt; 24h
            </div>
          </div>
        </div>

        {/* Quiet Editorial Footer */}
        <footer className="w-full border-t divider-subtle pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#a6a69f]">
          <div>
            <span>© {new Date().getFullYear()} NIKHIL CHHETRI · ALL RIGHTS RESERVED</span>
          </div>
          <div className="flex items-center gap-4">
            <span>ENGINEERING EDITORIAL</span>
            <span className="text-white/20">/</span>
            <span>NEXT.JS · TYPESCRIPT · TAILWIND</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
