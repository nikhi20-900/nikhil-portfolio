"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "@/components/ui/smooth-scroll";
import { MagneticButton } from "@/components/ui/magnetic-button";

const NAV_LINKS = [
  { label: "INDEX", href: "#hero", num: "01" },
  { label: "ABOUT", href: "#about", num: "02" },
  { label: "SELECTED WORK", href: "#work", num: "03" },
  { label: "SKILLS & STACK", href: "#skills", num: "04" },
  { label: "EXPERIENCE", href: "#experience", num: "05" },
  { label: "CONTACT", href: "#contact", num: "06" },
];

export function NavbarEditorial() {
  const { scrollTo } = useLenis();
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [activeSection, setActiveSection] = useState("01 INDEX");

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollPercent(Math.min(100, Math.max(0, (window.scrollY / scrollHeight) * 100)));
      }

      // Detect active section
      const sections = [
        { id: "hero", label: "01 INDEX" },
        { id: "about", label: "02 ABOUT" },
        { id: "work", label: "03 WORK" },
        { id: "skills", label: "04 STACK" },
        { id: "experience", label: "05 TIMELINE" },
        { id: "contact", label: "06 CONTACT" },
      ];

      for (const section of sections.reverse()) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setActiveSection(section.label);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    scrollTo(href, { offset: -30 });
  };

  return (
    <>
      {/* 1px Global Scroll Progress Line */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-white/5 pointer-events-none">
        <div
          className="h-full bg-accent transition-all duration-75 ease-out"
          style={{ width: `${scrollPercent}%` }}
        />
      </div>

      {/* Floating Minimal Editorial Nav Header */}
      <header className="fixed top-0 left-0 right-0 z-40 px-6 sm:px-12 py-6 flex items-center justify-between pointer-events-none">
        {/* Left: Moniker / Brand */}
        <button
          onClick={() => handleNavClick("#hero")}
          className="pointer-events-auto flex items-center gap-3 text-left group cursor-pointer focus-visible:outline-none"
        >
          <span className="w-2 h-2 rounded-full bg-accent transition-transform group-hover:scale-150 duration-300" />
          <span className="font-mono text-xs tracking-widest text-[#EDEDED] font-semibold group-hover:text-accent transition-colors">
            NIKHIL CHHETRI
          </span>
        </button>

        {/* Center: Live Section Telemetry (Desktop) */}
        <div className="hidden md:flex items-center gap-2 font-mono text-[11px] tracking-widest text-[#8E8E99] uppercase bg-[#121215]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 pointer-events-auto">
          <span className="text-accent">●</span>
          <span>CURRENT: {activeSection}</span>
        </div>

        {/* Right: ⌘K Search + Menu Toggle */}
        <div className="pointer-events-auto flex items-center gap-3">
          <button
            onClick={() => {
              window.dispatchEvent(
                new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true })
              );
            }}
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-[#121215]/70 backdrop-blur-md font-mono text-[11px] text-[#8E8E99] hover:text-white hover:border-accent transition-colors cursor-pointer"
            aria-label="Open Command Palette (⌘K)"
          >
            <span className="text-accent font-bold">⌘K</span>
            <span>SEARCH</span>
          </button>

          <MagneticButton
            onClick={() => setIsOpen(!isOpen)}
            className="px-5 py-2.5 rounded-full border border-white/15 bg-[#121215]/70 backdrop-blur-md text-[#EDEDED] hover:border-accent hover:text-accent transition-colors"
          >
            <span>{isOpen ? "CLOSE" : "MENU"}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent ml-1" />
          </MagneticButton>
        </div>
      </header>

      {/* Full-Screen Animated Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#0A0A0B]/95 backdrop-blur-2xl flex flex-col justify-between p-8 sm:p-16 text-[#EDEDED]"
          >
            {/* Top header spacer */}
            <div className="flex justify-between items-center pt-2">
              <span className="font-mono text-xs text-[#8E8E99] tracking-widest">
                NAVIGATION
              </span>
              <span className="font-mono text-xs text-accent tracking-widest">
                [ESC TO CLOSE]
              </span>
            </div>

            {/* Menu Links */}
            <nav className="flex flex-col justify-center gap-4 sm:gap-6 my-auto">
              {NAV_LINKS.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group flex items-baseline gap-4 cursor-pointer"
                  onClick={() => handleNavClick(link.href)}
                >
                  <span className="font-mono text-xs sm:text-sm text-[#8E8E99] group-hover:text-accent transition-colors">
                    {link.num}
                  </span>
                  <span className="text-3xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#EDEDED] group-hover:text-accent group-hover:translate-x-3 transition-all duration-300">
                    {link.label}
                  </span>
                </motion.div>
              ))}
            </nav>

            {/* Bottom Meta & Socials */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-mono text-xs tracking-wider text-[#8E8E99]">
              <div>
                <span>BANGALORE, IN (IST) · </span>
                <span className="text-[#EDEDED]">AVAILABLE FOR SELECT PROJECTS</span>
              </div>
              <div className="flex gap-6 text-[#EDEDED]">
                <a
                  href="https://github.com/nikhi20-900"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  GITHUB
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  LINKEDIN
                </a>
                <a
                  href="mailto:nikhilchhetri20900@gmail.com"
                  className="hover:text-accent transition-colors"
                >
                  EMAIL
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

