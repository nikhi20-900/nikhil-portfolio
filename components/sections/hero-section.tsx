"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLenis } from "@/components/ui/smooth-scroll";
import { ArrowDown, ArrowUpRight, Compass, ShieldCheck, Cpu } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

export function HeroSection() {
  const { scrollTo } = useLenis();

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] w-full flex flex-col justify-between px-5 sm:px-8 md:px-12 pt-32 sm:pt-40 pb-12 z-10"
    >
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 editorial-grid opacity-60 pointer-events-none -z-10" />

      {/* Hero Content Container */}
      <div className="max-w-5xl mx-auto w-full my-auto py-8 sm:py-12 relative z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="w-2 h-2 rounded-full bg-[#f97316]" aria-hidden="true" />
          <span className="text-xs sm:text-sm font-mono tracking-widest text-[#a6a69f] uppercase">
            FULL-STACK DEVELOPMENT · AI · ROBOTICS
          </span>
        </motion.div>

        {/* Headline — deliberate line breaks, strong editorial weight */}
        <div className="mb-8 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-black tracking-tight text-[#f5f4ef] leading-[1.05]"
          >
            I build intelligent systems that solve{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5f4ef] via-amber-200 to-[#f97316]">
              real problems.
            </span>
          </motion.h1>
        </div>

        {/* Supporting paragraph — comfortable line length */}
        <div className="mb-10 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-[#a6a69f] font-light leading-relaxed"
          >
            From AI-powered applications and graph-based investigation systems to autonomous
            robotics, I build products that connect software, data, and the physical world.
          </motion.p>
        </div>

        {/* Actions — Primary CTA & Secondary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-4 pt-2"
        >
          <button
            onClick={() => scrollTo("#selected-work", { offset: -50 })}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#f5f4ef] text-[#0d0f14] font-semibold text-xs sm:text-sm tracking-wider uppercase hover:bg-white active:scale-[0.98] transition-all shadow-lg shadow-black/30 cursor-pointer"
          >
            <span>Explore My Work</span>
            <ArrowDown className="w-4 h-4" aria-hidden="true" />
          </button>

          <button
            onClick={() => scrollTo("#about", { offset: -50 })}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-[#f5f4ef] border border-white/[0.1] font-mono text-xs sm:text-sm tracking-wider uppercase transition-all cursor-pointer"
          >
            <span>About Me</span>
          </button>

          <a
            href="https://github.com/nikhi20-900"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/[0.02] hover:bg-white/[0.06] text-[#a6a69f] hover:text-[#f5f4ef] border border-white/[0.08] font-mono text-xs sm:text-sm tracking-wider uppercase transition-all ml-auto hidden sm:inline-flex"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>

      {/* Hero Bottom Telemetry Strip */}
      <div className="max-w-5xl mx-auto w-full pt-6 border-t divider-subtle grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-[11px] text-[#a6a69f]">
        <div className="flex items-center gap-2">
          <Compass className="w-3.5 h-3.5 text-[#f97316]" />
          <span>AUTONOMOUS UGV · ROS 2</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-[#84a98c]" />
          <span>GRAPH FRAUD AGENTS</span>
        </div>
        <div className="flex items-center gap-2">
          <Cpu className="w-3.5 h-3.5 text-[#f97316]" />
          <span>NEXT.JS · FASTAPI · IoT</span>
        </div>
        <div className="flex items-center justify-end text-right text-[#a6a69f]/80">
          <span>BANGALORE, IN (IST)</span>
        </div>
      </div>
    </section>
  );
}
