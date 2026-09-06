"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./ui/icons";

const NAV_ITEMS = [
  { label: "Lab", href: "#lab" },
  { label: "Navigen", href: "#navigen" },
  { label: "Tools", href: "#tools" },
  { label: "Forge", href: "#forge" },
  { label: "Projects", href: "#projects" },
  { label: "Workflow", href: "#process" },
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

    window.addEventListener("scroll", handleScroll);
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
        <a
          href="#home"
          id="nav-brand-logo"
          className="group flex items-center gap-3 focus:outline-none"
        >
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
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`transition-colors py-1 relative ${
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

        {/* Action Button: GitHub */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/nikhi20-900"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono text-[#f5f4ef] bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] transition-all"
            data-cursor="code"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-[#9ba1a6]" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 text-[#9ba1a6] hover:text-[#f5f4ef] focus:outline-none"
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
            className="md:hidden bg-[#13161c] border-b border-white/[0.08] px-6 py-5"
          >
            <div className="flex flex-col gap-3 font-mono text-sm">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 ${
                    activeSection === item.href.substring(1)
                      ? "text-amber-500 font-semibold"
                      : "text-[#9ba1a6] hover:text-[#f5f4ef]"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 border-t border-white/[0.08]">
                <a
                  href="https://github.com/nikhi20-900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-2 text-xs text-[#f5f4ef]"
                >
                  <span>github.com/nikhi20-900</span>
                  <ArrowUpRight className="w-4 h-4 text-[#9ba1a6]" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
