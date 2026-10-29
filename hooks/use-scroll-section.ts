"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollSectionOptions {
  triggerRef?: React.RefObject<HTMLElement | null>;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean | HTMLElement | string;
  onEnter?: () => void;
  onLeave?: () => void;
  onEnterBack?: () => void;
  onLeaveBack?: () => void;
  onUpdate?: (self: ScrollTrigger) => void;
}

export function useScrollSection(options: ScrollSectionOptions = {}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trigger = options.triggerRef || containerRef;

  useEffect(() => {
    if (!trigger.current) return;

    // Check if prefers-reduced-motion is active
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const st = ScrollTrigger.create({
      trigger: trigger.current,
      start: options.start || "top bottom",
      end: options.end || "bottom top",
      scrub: options.scrub !== undefined ? options.scrub : false,
      pin: options.pin !== undefined ? options.pin : false,
      onEnter: options.onEnter,
      onLeave: options.onLeave,
      onEnterBack: options.onEnterBack,
      onLeaveBack: options.onLeaveBack,
      onUpdate: options.onUpdate,
    });

    return () => {
      st.kill();
    };
  }, [
    trigger,
    options.start,
    options.end,
    options.scrub,
    options.pin,
    options.onEnter,
    options.onLeave,
    options.onEnterBack,
    options.onLeaveBack,
    options.onUpdate,
  ]);

  return containerRef;
}

