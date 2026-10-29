"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Terminal, ArrowRight, CornerDownLeft, X, Sparkles, FolderGit2, Compass, Mail } from "lucide-react";
import { useLenis } from "@/components/ui/smooth-scroll";
import { GithubIcon } from "@/components/ui/icons";

interface CommandItem {
  id: string;
  category: "NAVIGATE" | "PROJECTS" | "ACTIONS";
  title: string;
  subtitle?: string;
  icon: React.ElementType;
  action: () => void;
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isTerminalMode, setIsTerminalMode] = useState(false);
  const [terminalHistory, setTerminalHistory] = useState<Array<{ cmd: string; output: string }>>([
    {
      cmd: "welcome",
      output: "Nikhil Chhetri Interactive Terminal v1.0. Type 'help' for available commands.",
    },
  ]);
  const [terminalInput, setTerminalInput] = useState("");

  const { scrollTo } = useLenis();
  const inputRef = useRef<HTMLInputElement>(null);
  const termEndRef = useRef<HTMLDivElement>(null);

  // Global ⌘K / Ctrl+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const COMMANDS: CommandItem[] = [
    {
      id: "nav-hero",
      category: "NAVIGATE",
      title: "01 // INDEX / HERO",
      subtitle: "System architecture & landing",
      icon: Compass,
      action: () => {
        setIsOpen(false);
        scrollTo("#hero");
      },
    },
    {
      id: "nav-about",
      category: "NAVIGATE",
      title: "02 // PHILOSOPHY & ABOUT",
      subtitle: "Manifesto & core principles",
      icon: Compass,
      action: () => {
        setIsOpen(false);
        scrollTo("#about");
      },
    },
    {
      id: "nav-work",
      category: "NAVIGATE",
      title: "03 // SELECTED WORK",
      subtitle: "4 proven engineering builds",
      icon: FolderGit2,
      action: () => {
        setIsOpen(false);
        scrollTo("#work");
      },
    },
    {
      id: "nav-skills",
      category: "NAVIGATE",
      title: "04 // SKILLS & MATRIX",
      subtitle: "Robotics, AI agents, 3D stack",
      icon: Compass,
      action: () => {
        setIsOpen(false);
        scrollTo("#skills");
      },
    },
    {
      id: "nav-experience",
      category: "NAVIGATE",
      title: "05 // EXPERIENCE & TIMELINE",
      subtitle: "Chronology & verified milestones",
      icon: Compass,
      action: () => {
        setIsOpen(false);
        scrollTo("#experience");
      },
    },
    {
      id: "nav-contact",
      category: "NAVIGATE",
      title: "06 // CONTACT TRANSMISSION",
      subtitle: "Direct dispatch & Bangalore IST time",
      icon: Mail,
      action: () => {
        setIsOpen(false);
        scrollTo("#contact");
      },
    },
    {
      id: "proj-fraud",
      category: "PROJECTS",
      title: "Fraud Investigation Agent",
      subtitle: "TigerGraph GSQL + LangGraph autonomous loop [BUILT]",
      icon: FolderGit2,
      action: () => {
        setIsOpen(false);
        scrollTo("#work");
      },
    },
    {
      id: "proj-navigen",
      category: "PROJECTS",
      title: "NAVIGEN Autonomous UGV",
      subtitle: "ROS 2 + Nav2 + OpenCV for SIH 2025 [BUILT]",
      icon: FolderGit2,
      action: () => {
        setIsOpen(false);
        scrollTo("#work");
      },
    },
    {
      id: "proj-schemesaathi",
      category: "PROJECTS",
      title: "SchemeSaathi",
      subtitle: "AI civic scheme eligibility & rules engine [BUILDING]",
      icon: FolderGit2,
      action: () => {
        setIsOpen(false);
        scrollTo("#work");
      },
    },
    {
      id: "proj-lpg",
      category: "PROJECTS",
      title: "LPG Gas Leakage Dashboard",
      subtitle: "MQ-6 physical sensor & Firebase IoT telemetry [BUILT]",
      icon: FolderGit2,
      action: () => {
        setIsOpen(false);
        scrollTo("#work");
      },
    },
    {
      id: "act-email",
      category: "ACTIONS",
      title: "Copy Direct Email",
      subtitle: "nikhilchhetri20900@gmail.com",
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText("nikhilchhetri20900@gmail.com");
        setIsOpen(false);
      },
    },
    {
      id: "act-github",
      category: "ACTIONS",
      title: "Open GitHub Profile",
      subtitle: "github.com/nikhi20-900",
      icon: GithubIcon,
      action: () => {
        window.open("https://github.com/nikhi20-900", "_blank");
        setIsOpen(false);
      },
    },
    {
      id: "act-terminal",
      category: "ACTIONS",
      title: "Switch to Developer Terminal",
      subtitle: "CLI command interpreter",
      icon: Terminal,
      action: () => {
        setIsTerminalMode(true);
      },
    },
  ];

  const filteredCommands = COMMANDS.filter((cmd) => {
    const q = query.toLowerCase();
    return (
      cmd.title.toLowerCase().includes(q) ||
      (cmd.subtitle && cmd.subtitle.toLowerCase().includes(q)) ||
      cmd.category.toLowerCase().includes(q)
    );
  });

  const handleKeyDownNav = (e: React.KeyboardEvent) => {
    if (isTerminalMode) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < filteredCommands.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : filteredCommands.length - 1
      );
    } else if (e.key === "Enter" && filteredCommands[selectedIndex]) {
      e.preventDefault();
      filteredCommands[selectedIndex].action();
    }
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let output = "";
    switch (cmd) {
      case "help":
        output =
          "Commands: projects, whoami, stack, contact, clear, exit";
        break;
      case "whoami":
        output =
          "Nikhil Chhetri — Systems & Creative Developer in Bangalore, IN. Building autonomous robotics, graph intelligence, and interactive 3D web.";
        break;
      case "projects":
        output =
          "1. Fraud Investigation Agent (TigerGraph + LangGraph)\n2. NAVIGEN (ROS 2 Autonomous UGV)\n3. SchemeSaathi (AI Civic Scheme Navigator)\n4. LPG Gas Leakage Dashboard (IoT)";
        break;
      case "stack":
        output =
          "Core: ROS 2, Python, OpenCV, TigerGraph GSQL, LangGraph, Next.js 16, Three.js, GSAP, Tailwind CSS";
        break;
      case "contact":
        output =
          "Email: nikhilchhetri20900@gmail.com | GitHub: github.com/nikhi20-900";
        break;
      case "clear":
        setTerminalHistory([]);
        setTerminalInput("");
        return;
      case "exit":
        setIsTerminalMode(false);
        setTerminalInput("");
        return;
      default:
        output = `Command not recognized: '${cmd}'. Type 'help' for options.`;
    }

    setTerminalHistory((prev) => [...prev, { cmd, output }]);
    setTerminalInput("");
    setTimeout(() => {
      termEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <>
      {/* Global trigger listener is active; UI Modal renders in portal */}
      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 p-4 bg-black/85 backdrop-blur-xl"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-[#0E1015] border border-white/15 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden text-[#EDEDED]"
              role="dialog"
              aria-modal="true"
              aria-label="Command Palette"
            >
              {/* Header / Mode Switcher */}
              <div className="flex items-center justify-between border-b divider-subtle px-4 py-3 bg-[#13161D]">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsTerminalMode(false)}
                    className={`font-mono text-xs px-3 py-1 rounded-md transition-colors ${
                      !isTerminalMode
                        ? "bg-accent/15 text-accent font-bold"
                        : "text-[#8E8E99] hover:text-white"
                    }`}
                  >
                    COMMAND SEARCH
                  </button>
                  <button
                    onClick={() => setIsTerminalMode(true)}
                    className={`font-mono text-xs px-3 py-1 rounded-md flex items-center gap-1.5 transition-colors ${
                      isTerminalMode
                        ? "bg-accent/15 text-accent font-bold"
                        : "text-[#8E8E99] hover:text-white"
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>TERMINAL</span>
                  </button>
                </div>

                <div className="flex items-center gap-2 font-mono text-[11px] text-[#8E8E99]">
                  <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white text-[10px]">ESC</kbd>
                  <span>TO CLOSE</span>
                </div>
              </div>

              {/* SEARCH MODE */}
              {!isTerminalMode ? (
                <>
                  <div className="flex items-center gap-3 px-4 py-3.5 border-b divider-subtle">
                    <Search className="w-5 h-5 text-accent shrink-0" />
                    <input
                      ref={inputRef}
                      type="text"
                      value={query}
                      onChange={(e) => {
                        setQuery(e.target.value);
                        setSelectedIndex(0);
                      }}
                      onKeyDown={handleKeyDownNav}
                      placeholder="Type a command, project, or section..."
                      className="w-full bg-transparent border-none outline-none font-mono text-sm text-white placeholder:text-[#8E8E99]"
                    />
                    {query && (
                      <button
                        onClick={() => setQuery("")}
                        className="p-1 rounded hover:bg-white/10 text-[#8E8E99]"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {/* Results list */}
                  <div className="max-h-80 overflow-y-auto p-2 space-y-1">
                    {filteredCommands.length === 0 ? (
                      <div className="p-8 text-center font-mono text-xs text-[#8E8E99]">
                        No matching commands found.
                      </div>
                    ) : (
                      filteredCommands.map((cmd, idx) => {
                        const Icon = cmd.icon;
                        const isSelected = idx === selectedIndex;
                        return (
                          <div
                            key={cmd.id}
                            onClick={() => cmd.action()}
                            onMouseEnter={() => setSelectedIndex(idx)}
                            className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-colors ${
                              isSelected
                                ? "bg-accent/15 text-white border border-accent/30"
                                : "text-[#EDEDED] hover:bg-white/5 border border-transparent"
                            }`}
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <div
                                className={`p-2 rounded-lg ${
                                  isSelected
                                    ? "bg-accent text-black"
                                    : "bg-white/5 text-[#8E8E99]"
                                }`}
                              >
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <p className="font-mono text-xs font-semibold truncate">
                                  {cmd.title}
                                </p>
                                {cmd.subtitle && (
                                  <p className="font-mono text-[11px] text-[#8E8E99] truncate">
                                    {cmd.subtitle}
                                  </p>
                                )}
                              </div>
                            </div>

                            <div className="flex items-center gap-2 font-mono text-[10px] text-[#8E8E99] shrink-0">
                              <span className="uppercase text-[9px] px-2 py-0.5 rounded bg-white/5">
                                {cmd.category}
                              </span>
                              {isSelected && <CornerDownLeft className="w-3.5 h-3.5 text-accent" />}
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </>
              ) : (
                /* TERMINAL MODE */
                <div className="p-4 font-mono text-xs">
                  <div className="max-h-72 overflow-y-auto space-y-3 pr-2">
                    {terminalHistory.map((h, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex items-center gap-2 text-accent">
                          <span>guest@nikhil:~$</span>
                          <span className="text-white font-bold">{h.cmd}</span>
                        </div>
                        <div className="text-[#8E8E99] whitespace-pre-wrap pl-4 border-l border-white/10 leading-relaxed">
                          {h.output}
                        </div>
                      </div>
                    ))}
                    <div ref={termEndRef} />
                  </div>

                  {/* Terminal Input Line */}
                  <form
                    onSubmit={handleTerminalSubmit}
                    className="flex items-center gap-2 mt-4 pt-3 border-t divider-subtle"
                  >
                    <span className="text-accent shrink-0 font-bold">guest@nikhil:~$</span>
                    <input
                      type="text"
                      value={terminalInput}
                      onChange={(e) => setTerminalInput(e.target.value)}
                      placeholder="type 'help', 'projects', 'stack', 'contact'..."
                      className="w-full bg-transparent border-none outline-none text-white font-mono text-xs"
                      autoFocus
                    />
                    <button
                      type="submit"
                      className="px-2.5 py-1 rounded bg-accent/20 text-accent hover:bg-accent hover:text-black transition-colors text-[10px]"
                    >
                      ENTER
                    </button>
                  </form>
                </div>
              )}

              {/* Bottom Telemetry Bar */}
              <div className="flex items-center justify-between px-4 py-2 bg-[#090A0D] border-t divider-subtle font-mono text-[10px] text-[#8E8E99]">
                <div className="flex items-center gap-3">
                  <span>NAV: ↑ / ↓</span>
                  <span>SELECT: ↵</span>
                </div>
                <div className="flex items-center gap-1.5 text-accent">
                  <Sparkles className="w-3 h-3" />
                  <span>NIKHIL CHHETRI · AGENT ARCHITECTURE</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

