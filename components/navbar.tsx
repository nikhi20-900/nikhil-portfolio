"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./ui/icons";

/* Primary destinations — page stays long-form; nav stays short */
const NAV_ITEMS = [
  { label: "Work", href: "#selected-work" },
  { label: "Lab", href: "#lab" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 180;

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0f14]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Editorial Brand Name */}
        <a href="#home" id="nav-brand-logo" className="group flex items-center gap-3">
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-sm sm:text-base text-[#f5f4ef] group-hover:text-amber-500 transition-colors">
              NIKHIL CHHETRI
            </span>
            <span className="text-[10px] font-mono text-[#9ba1a6] tracking-wider uppercase">
              BCA · BUILDER · BANGALORE
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-xs font-mono" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={`transition-colors py-1 relative uppercase tracking-widest ${
                  isActive
                    ? "text-[#f5f4ef] font-semibold"
                    : "text-[#9ba1a6] hover:text-[#f5f4ef]"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="editorialActiveNav"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-amber-600"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* External action: GitHub only (LinkedIn lives in About/Contact) */}
        <div className="hidden lg:flex items-center gap-2">
          <a
            href="https://github.com/nikhi20-900"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono text-[#f5f4ef] bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] transition-all"
            data-cursor="code"
            aria-label="GitHub profile (opens in new tab)"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-[#9ba1a6]" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          className="lg:hidden p-2 text-[#9ba1a6] hover:text-[#f5f4ef]"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#13161c] border-b border-white/[0.08] px-6 py-5"
          >
            <div className="flex flex-col gap-3 font-mono text-sm">
              <nav aria-label="Mobile primary" className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-2 uppercase tracking-widest ${
                      activeSection === item.href.substring(1)
                        ? "text-amber-500 font-semibold"
                        : "text-[#9ba1a6] hover:text-[#f5f4ef]"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="pt-3 border-t border-white/[0.08] flex flex-col gap-2">
                <a
                  href="https://github.com/nikhi20-900"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-1.5 text-xs text-[#f5f4ef]"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#9ba1a6]" aria-hidden="true" />
                </a>

                <a
                  href="https://www.linkedin.com/in/nikhil-chhetri-115747284/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-1.5 text-xs text-[#f5f4ef]"
                >
                  <span className="flex items-center gap-2">
                    <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                    <span>LinkedIn</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#9ba1a6]" aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
