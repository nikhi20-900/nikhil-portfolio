"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  maxTilt?: number;
}

export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(249, 115, 22, 0.08)",
  maxTilt = 5,
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Mouse coordinates relative to card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for tilt return
  const springConfig = { stiffness: 350, damping: 25 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Tilt transforms
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-maxTilt, maxTilt]);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
    setPrefersReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isTouch || prefersReducedMotion) return;
    const rect = cardRef.current.getBoundingClientRect();

    // Normalized [-0.5, 0.5]
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    if (!isTouch && !prefersReducedMotion) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  // Pixel coordinates for spotlight gradient
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });

  const updateSpotlightPos = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSpotlightPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={(e) => {
        handleMouseMove(e);
        updateSpotlightPos(e);
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        rotateX: isHovered && !isTouch && !prefersReducedMotion ? rotateX : 0,
        rotateY: isHovered && !isTouch && !prefersReducedMotion ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative rounded-3xl bg-[#121215]/90 border border-white/10 overflow-hidden transition-colors duration-300",
        className
      )}
      {...(props as any)}
    >
      {/* Radial Pointer-following Cyan Spotlight */}
      {!isTouch && !prefersReducedMotion && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(600px circle at ${spotlightPos.x}px ${spotlightPos.y}px, ${spotlightColor}, transparent 45%)`,
          }}
        />
      )}

      {/* Subtle border glow that illuminates near the cursor */}
      {!isTouch && !prefersReducedMotion && (
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300 z-10"
          style={{
            opacity: isHovered ? 1 : 0,
            border: "1px solid rgba(249, 115, 22, 0.35)",
            maskImage: `radial-gradient(350px circle at ${spotlightPos.x}px ${spotlightPos.y}px, black, transparent 70%)`,
            WebkitMaskImage: `radial-gradient(350px circle at ${spotlightPos.x}px ${spotlightPos.y}px, black, transparent 70%)`,
          }}
        />
      )}

      {/* Card Content with subtle 3D translation */}
      <div
        className="relative z-20 h-full w-full"
        style={{
          transform: isHovered && !isTouch && !prefersReducedMotion ? "translateZ(18px)" : "translateZ(0px)",
          transition: "transform 0.25s ease-out",
        }}
      >
        {children}
      </div>
    </motion.div>
  );
}

