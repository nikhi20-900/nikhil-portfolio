"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Copy, Check, ArrowUpRight, Clock, MapPin, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("");
  const email = "nikhilchhetri20900@gmail.com";

  // Real-time IST Clock (Bangalore)
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
      className="relative min-h-screen w-full px-6 sm:px-12 md:px-16 pt-32 pb-16 z-10 border-t divider-subtle flex flex-col justify-between"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b divider-subtle pb-6 mb-16 gap-4">
          <span className="font-mono text-xs tracking-widest text-[#8E8E99] uppercase">
            [06 // INITIATE TRANSMISSION]
          </span>
          <span className="font-mono text-xs tracking-wider text-accent uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            OPEN FOR SELECT ROLES & COLLABORATIONS
          </span>
        </div>

        {/* Oversized Reactive "LET'S TALK" Header */}
        <div className="space-y-4 mb-16">
          <span className="font-mono text-5xl sm:text-7xl font-light text-white/20">
            06
          </span>
          <h2 className="type-hero text-[#EDEDED] uppercase">
            LET&apos;S TALK
          </h2>
          <h2 className="type-hero text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-[#00f0ff]/70 uppercase">
            SYSTEMS.
          </h2>
          <p className="mt-6 text-base sm:text-xl text-[#8E8E99] max-w-2xl leading-relaxed">
            Whether you are building autonomous physical robots, deterministic agent workflows,
            or high-performance interactive interfaces — my inbox is open.
          </p>
        </div>

        {/* Interactive Contact Cockpit */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#121215]/85 border border-white/10 rounded-3xl p-8 sm:p-14 backdrop-blur-md mb-20 relative overflow-hidden">
          {/* Subtle accent corner highlight */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          {/* Left: Email Copy Mechanism */}
          <div className="lg:col-span-8 space-y-4">
            <span className="font-mono text-xs text-[#8E8E99] uppercase tracking-wider block">
              DIRECT DISPATCH
            </span>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${email}`}
                className="text-xl sm:text-3xl md:text-4xl font-mono font-bold text-[#EDEDED] hover:text-accent transition-colors break-all"
              >
                {email}
              </a>
              <MagneticButton
                onClick={handleCopyEmail}
                className="p-3.5 rounded-full bg-white/10 hover:bg-accent hover:text-black transition-all"
                aria-label="Copy Email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </MagneticButton>
            </div>

            <AnimatePresence>
              {copied && (
                <motion.p
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="font-mono text-xs text-accent flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  COPIED TO CLIPBOARD
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Right: Live Telemetry & Location */}
          <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l divider-subtle pt-6 lg:pt-0 lg:pl-10 space-y-5 font-mono text-xs">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white/5 text-accent">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[#8E8E99]">BASED IN</p>
                <p className="font-bold text-[#EDEDED]">Bangalore, Karnataka, IN</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white/5 text-accent">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[#8E8E99]">LOCAL TIME</p>
                <p className="font-bold text-accent">{time || "FETCHING..."} IST</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white/5 text-accent">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[#8E8E99]">TYPICAL RESPONSE</p>
                <p className="font-bold text-[#EDEDED]">&lt; 12 Hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-24">
          <a
            href="https://github.com/nikhi20-900"
            target="_blank"
            rel="noreferrer"
            className="group p-5 rounded-2xl bg-[#121215]/60 border border-white/10 hover:border-accent/50 transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <GithubIcon className="w-4 h-4 text-[#8E8E99] group-hover:text-accent transition-colors" />
              <span className="font-mono text-xs font-semibold text-[#EDEDED]">GITHUB</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#8E8E99] group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="group p-5 rounded-2xl bg-[#121215]/60 border border-white/10 hover:border-accent/50 transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <LinkedinIcon className="w-4 h-4 text-[#8E8E99] group-hover:text-accent transition-colors" />
              <span className="font-mono text-xs font-semibold text-[#EDEDED]">LINKEDIN</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#8E8E99] group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          <a
            href="mailto:nikhilchhetri20900@gmail.com"
            className="group p-5 rounded-2xl bg-[#121215]/60 border border-white/10 hover:border-accent/50 transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#8E8E99] group-hover:text-accent transition-colors" />
              <span className="font-mono text-xs font-semibold text-[#EDEDED]">EMAIL</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#8E8E99] group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            className="group p-5 rounded-2xl bg-[#121215]/60 border border-white/10 hover:border-accent/50 transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#8E8E99] group-hover:text-accent transition-colors">𝕏</span>
              <span className="font-mono text-xs font-semibold text-[#EDEDED]">TWITTER</span>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#8E8E99] group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Editorial Footer Bottom Bar */}
      <footer className="w-full border-t divider-subtle pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#8E8E99]">
        <div>
          <span>© {new Date().getFullYear()} NIKHIL CHHETRI · ALL RIGHTS RESERVED</span>
        </div>
        <div className="flex items-center gap-6">
          <span>NEXT.JS 16 · THREE.JS · GSAP · LENIS</span>
          <span className="text-accent">#00F0FF ACCENT</span>
        </div>
      </footer>
    </section>
  );
}
