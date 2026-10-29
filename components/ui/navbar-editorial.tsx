"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Search } from "lucide-react";
import { useLenis } from "@/components/ui/smooth-scroll";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

const NAV_LINKS = [
  { label: "Work", href: "#selected-work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function NavbarEditorial() {
  const { scrollTo } = useLenis();
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const sections = NAV_LINKS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard accessibility: ESC closes mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    scrollTo(href, { offset: -60 });
  };

  const openCommandPalette = () => {
    window.dispatchEvent(
      new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true })
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0f14]/92 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Left: Brand Moniker */}
        <button
          onClick={() => handleNavClick("#hero")}
          className="flex items-center gap-3 text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] rounded-lg p-1"
          aria-label="Nikhil Chhetri - Back to top"
        >
          <span className="w-2 h-2 rounded-full bg-[#f97316] transition-transform group-hover:scale-125 duration-200" />
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-sm sm:text-base text-[#f5f4ef] group-hover:text-[#f97316] transition-colors leading-tight">
              NIKHIL CHHETRI
            </span>
            <span className="text-[10px] font-mono text-[#a6a69f] tracking-wider uppercase leading-none mt-0.5">
              Systems &amp; AI Builder
            </span>
          </div>
        </button>

        {/* Center/Right: Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-mono"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                aria-current={isActive ? "true" : undefined}
                className={`transition-colors py-1 relative uppercase tracking-wider cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] rounded px-1.5 ${
                  isActive
                    ? "text-[#f5f4ef] font-semibold"
                    : "text-[#a6a69f] hover:text-[#f5f4ef]"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavLine"
                    className="absolute -bottom-1 left-1.5 right-1.5 h-[2px] bg-[#f97316]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Far Right: ⌘K Search Pill + External Links */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={openCommandPalette}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.08] hover:border-[#f97316]/50 font-mono text-[11px] text-[#a6a69f] hover:text-[#f5f4ef] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316]"
            aria-label="Open Command Palette (Press ⌘K)"
          >
            <Search className="w-3.5 h-3.5 text-[#f97316]" />
            <span>Search</span>
            <kbd className="text-[10px] bg-white/[0.08] px-1.5 py-0.2 rounded text-[#f5f4ef]">⌘K</kbd>
          </button>

          <a
            href="https://github.com/nikhi20-900"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.08] text-[#a6a69f] hover:text-[#f5f4ef] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316]"
            aria-label="GitHub Profile (opens in new tab)"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>

          <a
            href="https://www.linkedin.com/in/nikhil-chhetri-115747284/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.08] text-[#a6a69f] hover:text-[#f5f4ef] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316]"
            aria-label="LinkedIn Profile (opens in new tab)"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Controls: ⌘K trigger + Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={openCommandPalette}
            className="p-2 rounded-full bg-white/[0.05] border border-white/[0.1] text-[#a6a69f] hover:text-[#f5f4ef]"
            aria-label="Open Command Search"
          >
            <Search className="w-4 h-4 text-[#f97316]" />
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="p-2 text-[#a6a69f] hover:text-[#f5f4ef] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] rounded"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[#13161e] border-b border-white/[0.08] px-6 py-5 shadow-2xl"
          >
            <nav className="flex flex-col gap-2 font-mono text-sm" aria-label="Mobile Navigation">
              {NAV_LINKS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-left py-2.5 uppercase tracking-wider transition-colors ${
                    activeSection === item.href.substring(1)
                      ? "text-[#f97316] font-bold"
                      : "text-[#a6a69f] hover:text-[#f5f4ef]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="pt-4 mt-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#a6a69f]">
              <a
                href="https://github.com/nikhi20-900"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#f5f4ef] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 text-[#a6a69f]" />
              </a>

              <a
                href="https://www.linkedin.com/in/nikhil-chhetri-115747284/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#f5f4ef] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-[#a6a69f]" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
