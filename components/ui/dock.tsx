"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Compass, User, FolderGit2, Layers, Milestone, Mail, Terminal } from "lucide-react";
import { useLenis } from "@/components/ui/smooth-scroll";
import { cn } from "@/lib/utils";

interface DockItemProps {
  label: string;
  href?: string;
  icon: React.ElementType;
  isActive?: boolean;
  mouseX: any;
  onClick: () => void;
  badge?: string;
}

function DockIcon({ label, icon: Icon, isActive, mouseX, onClick, badge }: DockItemProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // macOS-style magnification curve: max scale 1.35x within 140px radius
  const widthTransform = useTransform(distance, [-140, 0, 140], [42, 58, 42]);
  const heightTransform = useTransform(distance, [-140, 0, 140], [42, 58, 42]);

  const width = useSpring(widthTransform, { mass: 0.1, stiffness: 220, damping: 14 });
  const height = useSpring(heightTransform, { mass: 0.1, stiffness: 220, damping: 14 });

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ width, height }}
      className={cn(
        "relative flex items-center justify-center rounded-2xl transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        isActive
          ? "bg-accent/20 border border-accent text-accent shadow-[0_0_20px_rgba(0,240,255,0.3)]"
          : "bg-white/5 border border-white/10 text-[#8E8E99] hover:text-white hover:border-white/30"
      )}
      aria-label={label}
    >
      <Icon className="w-5 h-5 shrink-0" />

      {/* Floating Tooltip Label */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: -38, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className="absolute pointer-events-none px-2.5 py-1 rounded-md bg-[#0E1015] border border-white/15 font-mono text-[10px] text-white whitespace-nowrap shadow-xl flex items-center gap-1.5"
          >
            <span>{label}</span>
            {badge && <span className="text-accent text-[9px]">[{badge}]</span>}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active Dot */}
      {isActive && (
        <span className="absolute -bottom-1 w-1 h-1 rounded-full bg-accent" />
      )}
    </motion.button>
  );
}

export function FloatingDock() {
  const { scrollTo } = useLenis();
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const mouseX = useMotionValue(Infinity);

  const DOCK_ITEMS = [
    { id: "hero", label: "01 Index", href: "#hero", icon: Compass },
    { id: "about", label: "02 About", href: "#about", icon: User },
    { id: "work", label: "03 Work", href: "#work", icon: FolderGit2 },
    { id: "skills", label: "04 Stack", href: "#skills", icon: Layers },
    { id: "experience", label: "05 Timeline", href: "#experience", icon: Milestone },
    { id: "contact", label: "06 Contact", href: "#contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Reveal on scroll-up, hide on fast scroll-down (after passing hero)
      if (currentScrollY > 200 && currentScrollY > lastScrollY + 12) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY - 8 || currentScrollY <= 200) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Active section calculation
      const sections = ["hero", "about", "work", "skills", "experience", "contact"];
      for (const s of [...sections].reverse()) {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setActiveSection(s);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const openCommandPalette = () => {
    // Dispatch ⌘K event to trigger palette
    window.dispatchEvent(
      new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true })
    );
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onMouseMove={(e) => mouseX.set(e.pageX)}
          onMouseLeave={() => mouseX.set(Infinity)}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-3xl bg-[#0E1015]/85 border border-white/15 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
          aria-label="Floating Dock Navigation"
        >
          {DOCK_ITEMS.map((item) => (
            <DockIcon
              key={item.id}
              label={item.label}
              icon={item.icon}
              isActive={activeSection === item.id}
              mouseX={mouseX}
              onClick={() => scrollTo(item.href, { offset: -30 })}
            />
          ))}

          {/* Thin Divider */}
          <div className="h-6 w-[1px] bg-white/10 mx-1" aria-hidden="true" />

          {/* ⌘K Command Palette Launcher */}
          <DockIcon
            label="Command Palette"
            badge="⌘K"
            icon={Terminal}
            mouseX={mouseX}
            onClick={openCommandPalette}
          />
        </motion.nav>
      )}
    </AnimatePresence>
  );
}

