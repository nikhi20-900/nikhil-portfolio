"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const GLYPHS = "01_!@#%&*<>[]/{}~+=-";

interface ScrambleRevealProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export function ScrambleReveal({
  text,
  className,
  speed = 35,
  delay = 0,
}: ScrambleRevealProps) {
  const [displayText, setDisplayText] = useState(text);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !isInView) return;

    let iteration = 0;
    let timer: NodeJS.Timeout;

    const timeout = setTimeout(() => {
      timer = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (index < iteration) {
                return text[index];
              }
              return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(timer);
          setDisplayText(text);
        }

        iteration += 1 / 2;
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(timer);
    };
  }, [isInView, text, speed, delay]);

  return (
    <span
      ref={ref}
      aria-label={text}
      className={cn("inline-block font-mono select-none", className)}
    >
      <span aria-hidden="true">{displayText}</span>
    </span>
  );
}

interface MaskedRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function MaskedReveal({
  children,
  className,
  delay = 0,
  duration = 0.85,
}: MaskedRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div
        initial={{ y: "110%", opacity: 0.2 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: "110%", opacity: 0.2 }}
        transition={{
          duration,
          delay,
          ease: [0.16, 1, 0.3, 1], // power4.out signature ease
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

