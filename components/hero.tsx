"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function Hero() {
  const prefersReduced = useReducedMotion();

  // Subtle mouse tracking for parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 200, mass: 0.8 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (prefersReduced) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / 45;
      const y = (e.clientY - innerHeight / 2) / 45;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, prefersReduced]);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-36 pb-20 md:pt-44 md:pb-28 flex flex-col justify-between overflow-hidden"
    >
      {/* Background subtle editorial architectural grid */}
      <div className="absolute inset-0 editorial-grid opacity-60 pointer-events-none -z-10" />

      {/* Subtle warm ambient lighting */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-amber-500/[0.03] rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-500/[0.02] rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Parallax Background Monogram / Statement */}
      <motion.div
        style={{ x: smoothX, y: smoothY }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none text-[16vw] font-black text-white/[0.015] tracking-tighter whitespace-nowrap -z-10"
      >
        NIKHIL CHHETRI
      </motion.div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full">
        {/* Top Eyebrow Tag: Small Identity */}
        <div className="mb-8 flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
          <span className="text-xs font-mono tracking-widest text-[#9ba1a6] uppercase">
            Nikhil Chhetri · Developer &amp; Robotics Enthusiast
          </span>
        </div>

        {/* Level 01 Dominant Headline (50-65% visual attention) */}
        <div className="max-w-5xl mb-10">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-[#f5f4ef] leading-[0.98]">
            I BUILD THINGS THAT{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5f4ef] via-amber-200 to-orange-400">
              MOVE,
            </span>{" "}
            THINK &amp; CONNECT.
          </h1>
        </div>

        {/* Short Personal Statement & CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end max-w-5xl">
          <div className="md:col-span-7 space-y-3">
            <p className="text-xs sm:text-sm font-mono text-orange-400 uppercase tracking-wider font-semibold">
              Frontend / Full-Stack Developer · AI &amp; Robotics Enthusiast
            </p>
            <p className="text-lg sm:text-xl text-[#9ba1a6] font-light leading-relaxed max-w-lg">
              From responsive web applications to autonomous ground robotics, I use modern AI
              tooling and code as force multipliers to build things that actually work.
            </p>
          </div>

          <div className="md:col-span-5 flex flex-wrap items-center gap-4 md:justify-end">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#f5f4ef] text-[#0d0f14] font-semibold text-xs sm:text-sm tracking-wider uppercase hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-black/40"
              data-cursor="view"
            >
              <span>View My Work</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-[#f5f4ef] border border-white/[0.1] font-mono text-xs sm:text-sm tracking-wider uppercase transition-all"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4 text-[#9ba1a6]" />
            </a>
          </div>
        </div>

        {/* Subtle Micro Detail / Coordinate Line */}
        <div className="mt-20 pt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono text-[#9ba1a6]/60">
          <div>BANGALORE, INDIA · 12.9716° N, 77.5946° E</div>
          <div>SCROLL TO EXPLORE ↓</div>
        </div>
      </div>
    </section>
  );
}
