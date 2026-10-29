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

    const duration = 1000; // ms - fast, respectful
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
        }, 250);
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
            transition: { duration: 0.7, ease: [0.87, 0, 0.13, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#0d0f14] p-8 sm:p-14 text-[#f5f4ef]"
        >
          {/* Top meta */}
          <div className="flex items-center justify-between font-mono text-[11px] tracking-widest text-[#a6a69f] uppercase">
            <span>Portfolio 2025</span>
            <span className="text-[#f97316] flex items-center gap-2 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
              Initializing Architecture
            </span>
          </div>

          {/* Center Name & Identity Reveal */}
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3"
            >
              <p className="font-mono text-xs tracking-widest text-[#f97316] uppercase font-semibold">
                Full-Stack · AI Systems · Robotics
              </p>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#f5f4ef]">
                NIKHIL CHHETRI
              </h1>
            </motion.div>
          </div>

          {/* Bottom Counter & Bar */}
          <div className="space-y-3">
            <div className="flex items-baseline justify-between font-mono">
              <span className="text-[11px] tracking-wider text-[#a6a69f]">
                ENGINEERING EDITORIAL
              </span>
              <span className="text-3xl sm:text-5xl font-light tracking-tight text-[#f97316]">
                {progress < 10 ? `0${progress}` : progress}%
              </span>
            </div>

            {/* Precision 1px Progress Bar */}
            <div className="w-full h-[2px] bg-white/[0.08] overflow-hidden relative">
              <motion.div
                className="absolute top-0 left-0 bottom-0 bg-[#f97316]"
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
