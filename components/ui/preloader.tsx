"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete?: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // If user prefers reduced motion, skip preloader immediately
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsFinished(true);
      onComplete?.();
      return;
    }

    // Check if user has already seen preloader in this session
    const hasSeen = sessionStorage.getItem("preloader_shown");
    if (hasSeen === "true") {
      setIsFinished(true);
      onComplete?.();
      return;
    }

    const duration = 1400; // ms
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const current = Math.min(100, Math.floor((step / steps) * 100));
      setProgress(current);

      if (current >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsFinished(true);
          sessionStorage.setItem("preloader_shown", "true");
          onComplete?.();
        }, 300);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (isFinished) return null;

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.87, 0, 0.13, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#0A0A0B] p-8 sm:p-14 text-[#EDEDED]"
        >
          {/* Top meta */}
          <div className="flex items-center justify-between font-mono text-[11px] tracking-widest text-[#8E8E99] uppercase">
            <span>Portfolio 2025</span>
            <span className="text-accent flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Initializing Scene
            </span>
          </div>

          {/* Center Name & Identity Reveal */}
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3"
            >
              <p className="font-mono text-xs tracking-widest text-accent uppercase">
                Systems & AI Engineer
              </p>
              <h1 className="text-4xl sm:text-7xl md:text-8xl font-black tracking-tighter leading-none text-white">
                NIKHIL CHHETRI
              </h1>
            </motion.div>
          </div>

          {/* Bottom Counter & Bar */}
          <div className="space-y-4">
            <div className="flex items-baseline justify-between font-mono">
              <span className="text-xs tracking-wider text-[#8E8E99]">
                LOADING EXPERIENCE
              </span>
              <span className="text-4xl sm:text-6xl font-light tracking-tight text-accent">
                {progress < 10 ? `0${progress}` : progress}%
              </span>
            </div>

            {/* Precision 1px Progress Bar */}
            <div className="w-full h-[2px] bg-white/10 overflow-hidden relative">
              <motion.div
                className="absolute top-0 left-0 bottom-0 bg-accent"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
