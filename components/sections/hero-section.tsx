"use client";

import React from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { useLenis } from "@/components/ui/smooth-scroll";
import { ScrambleReveal } from "@/components/ui/reveal";
import { ArrowDownRight, Compass, ShieldAlert, Cpu } from "lucide-react";

export function HeroSection() {
  const { scrollTo } = useLenis();

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between px-6 sm:px-12 md:px-16 pt-32 pb-12 z-10"
    >
      {/* Eyebrow & Status Telemetry */}
      <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b divider-subtle pb-6">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs tracking-widest text-[#8E8E99] uppercase">
            <ScrambleReveal text="[01 // SYSTEM ARCHITECTURE & 3D INTERACTION]" />
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs tracking-wider text-accent">
          <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
          <span>AUTONOMOUS SYSTEMS · AI AGENTS · CREATIVE DEV</span>
        </div>
      </div>

      {/* Hero Typography & Statement */}
      <div className="my-auto py-12 max-w-7xl relative z-10">
        {/* Mobile readability protection layer */}
        <div className="absolute -inset-6 -z-10 bg-radial from-[#0A0A0B]/90 via-[#0A0A0B]/60 to-transparent blur-2xl pointer-events-none md:hidden" />

        {/* Masked Slide-up Subtitle */}
        <div className="overflow-hidden mb-4">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="font-mono text-xs sm:text-sm tracking-[0.25em] text-accent uppercase font-medium drop-shadow-sm"
          >
            Nikhil Chhetri — Systems & Creative Developer
          </motion.p>
        </div>

        {/* Giant Masked Title */}
        <div className="space-y-1 sm:space-y-2">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
              className="type-hero text-[#EDEDED] uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]"
            >
              ENGINEERING
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
              className="type-hero text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-[#00f0ff]/70 uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]"
            >
              INTELLIGENCE
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
              className="type-hero text-[#8E8E99] uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]"
            >
              & SYSTEMS.
            </motion.h1>
          </div>
        </div>

        {/* 1-Line Pitch & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10 max-w-2xl text-base sm:text-lg text-[#EDEDED]/90 leading-relaxed drop-shadow-sm"
        >
          Building autonomous physical systems (ROS 2 / Nav2), deterministic graph fraud engines,
          and immersive digital interfaces with fluid scroll choreography.
        </motion.div>

        {/* Interactive CTA Bar with Magnetic Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
        >
          <MagneticButton
            onClick={() => scrollTo("#work")}
            className="px-8 py-4 bg-accent text-[#0A0A0B] font-bold rounded-full hover:bg-white hover:text-black transition-all shadow-[0_0_35px_rgba(0,240,255,0.3)]"
          >
            <span>EXPLORE WORK</span>
            <ArrowDownRight className="w-4 h-4 ml-1" />
          </MagneticButton>

          <MagneticButton
            onClick={() => scrollTo("#about")}
            className="px-7 py-4 border border-white/15 bg-white/5 rounded-full text-[#EDEDED] hover:border-accent hover:text-accent transition-colors backdrop-blur-sm"
          >
            <span>READ MANIFESTO</span>
          </MagneticButton>
        </motion.div>
      </div>

      {/* Hero Bottom Telemetry & Scroll Indicator */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t divider-subtle font-mono text-[11px] text-[#8E8E99]">
        <div className="flex items-center gap-2">
          <Compass className="w-3.5 h-3.5 text-accent" />
          <span>UGV ROBOTICS · ROS 2</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldAlert className="w-3.5 h-3.5 text-accent" />
          <span>TIGERGRAPH FRAUD AGENTS</span>
        </div>
        <div className="flex items-center gap-2">
          <Cpu className="w-3.5 h-3.5 text-accent" />
          <span>NEXT.js · THREE.js · GSAP</span>
        </div>
        <div className="flex items-center justify-end text-right">
          <button
            onClick={() => scrollTo("#about")}
            className="hover:text-accent transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>SCROLL TO DISCOVER</span>
            <span className="animate-bounce">↓</span>
          </button>
        </div>
      </div>
    </section>
  );
}

