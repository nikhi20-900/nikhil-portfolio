"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [cursorMode, setCursorMode] = useState<"default" | "hover" | "view">("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Buttery smooth trailing spring
  const springX = useSpring(mouseX, { stiffness: 450, damping: 32 });
  const springY = useSpring(mouseY, { stiffness: 450, damping: 32 });

  useEffect(() => {
    // Disable on touch devices or reduced motion
    const touchCheck = window.matchMedia("(pointer: coarse)").matches;
    const motionCheck = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (touchCheck || motionCheck) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check target element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const viewCard = target.closest('[data-cursor="view"]');
      const interactive = target.closest('a, button, [role="button"], input, textarea, [data-cursor="hover"]');

      if (viewCard) {
        setCursorMode("view");
      } else if (interactive) {
        setCursorMode("hover");
      } else {
        setCursorMode("default");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden" aria-hidden="true">
      {/* Inner precise dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-accent -translate-x-1/2 -translate-y-1/2"
        style={{
          x: mouseX,
          y: mouseY,
          opacity: cursorMode === "view" ? 0 : 1,
        }}
      />

      {/* Trailing outer ring / View label */}
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full pointer-events-none transition-[width,height,background-color,border-color] duration-200 ease-out"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          width: cursorMode === "view" ? 84 : cursorMode === "hover" ? 54 : 32,
          height: cursorMode === "view" ? 84 : cursorMode === "hover" ? 54 : 32,
          backgroundColor:
            cursorMode === "view"
              ? "rgba(0, 240, 255, 0.95)"
              : cursorMode === "hover"
              ? "rgba(0, 240, 255, 0.12)"
              : "rgba(255, 255, 255, 0.03)",
          borderColor:
            cursorMode === "view"
              ? "#00f0ff"
              : cursorMode === "hover"
              ? "#00f0ff"
              : "rgba(255, 255, 255, 0.25)",
          borderWidth: cursorMode === "view" ? "0px" : "1px",
        }}
      >
        {cursorMode === "view" && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[11px] font-mono font-bold tracking-widest text-[#0A0A0B] uppercase"
          >
            VIEW
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}
