"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [cursorMode, setCursorMode] = useState<"default" | "view" | "code" | "explore" | "pointer">("default");

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorAttr = target.closest("[data-cursor]")?.getAttribute("data-cursor");
      if (cursorAttr === "view") {
        setCursorMode("view");
        return;
      }
      if (cursorAttr === "code") {
        setCursorMode("code");
        return;
      }
      if (cursorAttr === "explore") {
        setCursorMode("explore");
        return;
      }

      // Detect github links
      if (target.closest('a[href*="github.com"]')) {
        setCursorMode("code");
        return;
      }

      // Detect project cards or links
      if (target.closest("[data-project-card]") || target.closest('a[href^="#projects"]')) {
        setCursorMode("view");
        return;
      }

      // Detect interactive preview or lab row
      if (target.closest("[data-lab-row]")) {
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
        setCursorMode("pointer");
      } else {
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
  }, [isVisible]);

  if (!isVisible) return null;

  const isTextCursor = cursorMode === "view" || cursorMode === "code" || cursorMode === "explore";
  const size = isTextCursor ? 60 : cursorMode === "pointer" ? 36 : 10;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full flex items-center justify-center font-mono font-bold tracking-wider select-none text-[10px]"
        animate={{
          x: mousePosition.x - size / 2,
          y: mousePosition.y - size / 2,
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
        transition={{
          type: "spring",
          damping: 32,
          stiffness: 380,
          mass: 0.35,
        }}
      >
        {cursorMode === "view" && "VIEW"}
        {cursorMode === "code" && "CODE"}
        {cursorMode === "explore" && "EXPLORE"}
      </motion.div>
    </>
  );
}
