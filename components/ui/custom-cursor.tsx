"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion } from "framer-motion";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorMode, setCursorMode] = useState<"default" | "view" | "code" | "explore" | "pointer">("default");
  const isVisibleRef = useRef(false);
  const cursorModeRef = useRef(cursorMode);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    // Only run on fine-pointer hover devices (skip touch / coarse pointers)
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }
    };

    const onMouseLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };
    const onMouseEnter = () => {
      isVisibleRef.current = true;
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttr = target.closest("[data-cursor]")?.getAttribute("data-cursor");
      if (cursorAttr === "view") {
        cursorModeRef.current = "view";
        setCursorMode("view");
        return;
      }
      if (cursorAttr === "code") {
        cursorModeRef.current = "code";
        setCursorMode("code");
        return;
      }
      if (cursorAttr === "explore") {
        cursorModeRef.current = "explore";
        setCursorMode("explore");
        return;
      }

      // Detect github links
      if (target.closest('a[href*="github.com"]')) {
        cursorModeRef.current = "code";
        setCursorMode("code");
        return;
      }

      // Detect project cards or links
      if (target.closest("[data-project-card]") || target.closest('a[href^="#projects"]')) {
        cursorModeRef.current = "view";
        setCursorMode("view");
        return;
      }

      // Detect interactive preview or lab row
      if (target.closest("[data-lab-row]")) {
        cursorModeRef.current = "explore";
        setCursorMode("explore");
        return;
      }

      // Generic buttons or links
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.getAttribute("role") === "button"
      ) {
        cursorModeRef.current = "pointer";
        setCursorMode("pointer");
      } else {
        cursorModeRef.current = "default";
        setCursorMode("default");
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
    // Effect deps intentionally empty — listeners subscribe once; state refs
    // prevent re-subscription on every mousemove/visibility change.
  }, [x, y]);

  if (!isVisible) return null;

  const isTextCursor = cursorMode === "view" || cursorMode === "code" || cursorMode === "explore";
  const size = isTextCursor ? 60 : cursorMode === "pointer" ? 36 : 10;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 rounded-full flex items-center justify-center font-mono font-bold tracking-wider select-none text-[10px]"
      style={{ x, y }}
      animate={{
        marginLeft: -size / 2,
        marginTop: -size / 2,
        width: size,
        height: size,
        backgroundColor: isTextCursor
          ? "rgba(245, 244, 239, 0.95)"
          : cursorMode === "pointer"
          ? "rgba(234, 88, 12, 0.18)"
          : "rgba(245, 244, 239, 0.9)",
        borderColor: isTextCursor
          ? "rgba(245, 244, 239, 0.9)"
          : cursorMode === "pointer"
          ? "rgba(249, 115, 22, 0.6)"
          : "rgba(0, 0, 0, 0)",
        borderWidth: cursorMode === "pointer" ? 1.5 : 0,
        color: "#0d0f14",
      }}
      transition={
        reducedMotion
          ? { duration: 0 }
          : {
              type: "spring",
              damping: 32,
              stiffness: 380,
              mass: 0.35,
            }
      }
    >
      {cursorMode === "view" && "VIEW"}
      {cursorMode === "code" && "CODE"}
      {cursorMode === "explore" && "EXPLORE"}
    </motion.div>
  );
}
