"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal, CornerDownLeft } from "lucide-react";

interface HistoryEntry {
  command: string;
  output: string | React.ReactNode;
}

export function TerminalEasterEgg() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      command: 'echo "keep building."',
      output: "keep building.",
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>(['echo "keep building."']);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const isInitialMount = useRef(true);

  useEffect(() => {
    // Prevent scrolling on initial page load
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    // Only scroll the terminal container, never the entire window
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTo({
        top: terminalBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [history]);

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    const lower = trimmed.toLowerCase();
    let response: string | React.ReactNode = "";

    switch (lower) {
      case "help":
        response = (
          <div className="space-y-2 text-xs sm:text-sm font-mono">
            <p className="text-orange-400 font-bold tracking-wide">AVAILABLE COMMANDS:</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
              <div className="bg-white/[0.02] border border-white/[0.06] p-2 rounded"><span className="text-[#f5f4ef] font-bold">about</span> <span className="text-white/40 block text-xs">Who I am & background</span></div>
              <div className="bg-white/[0.02] border border-white/[0.06] p-2 rounded"><span className="text-[#f5f4ef] font-bold">projects</span> <span className="text-white/40 block text-xs">Active systems index</span></div>
              <div className="bg-white/[0.02] border border-white/[0.06] p-2 rounded"><span className="text-[#f5f4ef] font-bold">navigen</span> <span className="text-white/40 block text-xs">SIH 2025 Autonomous UGV</span></div>
              <div className="bg-white/[0.02] border border-white/[0.06] p-2 rounded"><span className="text-[#f5f4ef] font-bold">forge</span> <span className="text-white/40 block text-xs">AI CLI terminal agent</span></div>
              <div className="bg-white/[0.02] border border-white/[0.06] p-2 rounded"><span className="text-[#f5f4ef] font-bold">pulse</span> <span className="text-white/40 block text-xs">Realtime collab workspace</span></div>
              <div className="bg-white/[0.02] border border-white/[0.06] p-2 rounded"><span className="text-[#f5f4ef] font-bold">github</span> <span className="text-white/40 block text-xs">Repositories & code</span></div>
              <div className="bg-white/[0.02] border border-white/[0.06] p-2 rounded"><span className="text-[#f5f4ef] font-bold">contact</span> <span className="text-white/40 block text-xs">Email & LinkedIn</span></div>
              <div className="bg-white/[0.02] border border-white/[0.06] p-2 rounded"><span className="text-[#f5f4ef] font-bold">clear</span> <span className="text-white/40 block text-xs">Reset terminal display</span></div>
            </div>
          </div>
        );
        break;

      case "about":
        response =
          "Nikhil Chhetri — BCA student at Dayananda Sagar University (DSU), Bangalore. Building systems that move, think & connect. Combining robotics, modern frontend, and developer tooling.";
        break;

      case "projects":
        response = (
          <div className="space-y-2 text-xs sm:text-sm font-mono leading-relaxed">
            <p className="text-orange-400 font-bold tracking-wide">PROJECT HIERARCHY:</p>
            <div className="space-y-1.5 pl-1">
              <p><span className="text-[#f5f4ef] font-bold">01. NAVIGEN</span> — Vision-based autonomous ground vehicle <span className="text-emerald-400 text-xs font-semibold">[BUILT / SIH 2025]</span></p>
              <p><span className="text-[#f5f4ef] font-bold">02. FORGE</span> — AI software engineering terminal agent <span className="text-orange-400 text-xs font-semibold">[BUILDING]</span></p>
              <p><span className="text-[#f5f4ef] font-bold">03. PULSE</span> — Real-time collaborative workspace <span className="text-orange-400 text-xs font-semibold">[BUILDING / ILLUSTRATIVE]</span></p>
              <p><span className="text-[#f5f4ef] font-bold">04. LPG DASHBOARD</span> — Real-time sensor telemetry & valve shutoff <span className="text-emerald-400 text-xs font-semibold">[BUILT]</span></p>
            </div>
          </div>
        );
        break;

      case "navigen":
        response =
          "NAVIGEN UGV: Vision-based autonomous navigation for outdoor environments. Integrates ROS 2, OpenCV obstacle segmentation, Nav2 pure pursuit controllers, and ESP32 differential PWM motor drive. Smart India Hackathon 2025.";
        break;

      case "forge":
        response =
          "FORGE: AI Software Engineering Agent directly from the terminal. 8-stage pipeline: TASK → PLAN → INSPECT → CODE → TEST → DEBUG → REVIEW → DONE. Focuses on repository grounding and force multipliers.";
        break;

      case "pulse":
        response =
          "PULSE: Real-time collaborative workspace exploring multi-user state, optimistic UI, presence detection, and WebSocket synchronization. Currently in active development.";
        break;

      case "github":
        response = (
          <div className="text-xs sm:text-sm font-mono">
            <span>Repository profile: </span>
            <a
              href="https://github.com/nikhi20-900"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 underline hover:text-white font-medium"
            >
              https://github.com/nikhi20-900
            </a>
          </div>
        );
        break;

      case "contact":
        response = (
          <div className="space-y-1.5 text-xs sm:text-sm font-mono">
            <p><span className="text-white/50">Email:</span> <a href="mailto:nikhil142004@gmail.com" className="text-[#f5f4ef] hover:text-orange-400 underline">nikhil142004@gmail.com</a></p>
            <p><span className="text-white/50">LinkedIn:</span> <a href="https://www.linkedin.com/in/nikhil-chhetri-115747284/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-white underline">linkedin.com/in/nikhil-chhetri-115747284</a></p>
            <p><span className="text-white/50">Location:</span> <span className="text-[#f5f4ef]">Bangalore, India</span></p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        response = `Command not recognized: "${trimmed}". Type "help" for a list of commands.`;
        break;
    }

    setHistory((prev) => [...prev, { command: trimmed, output: response }]);
    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(nextIndex);
          setInput(commandHistory[nextIndex] || "");
        }
      }
    }
  };

  return (
    <section id="terminal" className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        {/* Subtle Eyebrow */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-[#9ba1a6]">
            <Terminal className="w-4 h-4 text-orange-400" />
            <span className="tracking-wide">DEVELOPER EASTER EGG · INTERACTIVE CLI</span>
          </div>
          <span className="text-xs font-mono text-orange-400 bg-orange-950/30 border border-orange-800/40 px-2.5 py-1 rounded-md">
            Type &ldquo;help&rdquo;
          </span>
        </div>

        {/* Terminal Window Box */}
        <div
          onClick={(e) => {
            const target = e.target as HTMLElement;
            if (target.tagName !== "A" && target.tagName !== "BUTTON") {
              inputRef.current?.focus({ preventScroll: true });
            }
          }}
          className="rounded-2xl bg-[#090b10] border border-white/[0.1] shadow-2xl overflow-hidden cursor-text"
        >
          {/* Window Chrome Header */}
          <div className="px-6 py-3.5 bg-[#0d0f14] border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-3.5 h-3.5 rounded-full bg-red-500/80 inline-block shadow-sm" />
              <span className="w-3.5 h-3.5 rounded-full bg-amber-500/80 inline-block shadow-sm" />
              <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/80 inline-block shadow-sm" />
              <span className="text-xs sm:text-sm font-mono text-[#9ba1a6] ml-2 font-medium">nikhil@ds-lab:~</span>
            </div>
            <div className="text-xs font-mono text-white/40 hidden sm:inline">
              bash 5.2 · interactive cli
            </div>
          </div>

          {/* Terminal Body */}
          <div
            ref={terminalBodyRef}
            className="p-6 sm:p-8 font-mono text-sm sm:text-[15px] space-y-4 min-h-[320px] max-h-[480px] overflow-y-auto"
          >
            {history.map((entry, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2.5 text-orange-400">
                  <span className="text-white/40 select-none">nikhil@ds-lab:~$</span>
                  <span className="font-bold text-[#f5f4ef]">{entry.command}</span>
                </div>
                <div className="text-[#9ba1a6] pl-4 sm:pl-5 font-light leading-relaxed">
                  {entry.output}
                </div>
              </div>
            ))}

            {/* Active Input Line */}
            <div className="flex items-center gap-2.5 pt-2">
              <span className="text-white/40 select-none font-medium">nikhil@ds-lab:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type a command (e.g. help, projects, navigen)..."
                className="flex-1 bg-transparent text-[#f5f4ef] focus:outline-none placeholder:text-white/25 font-mono text-[16px] sm:text-sm md:text-[15px] leading-normal"
                autoComplete="off"
                spellCheck="false"
              />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCommand(input);
                }}
                className="text-white/40 hover:text-orange-400 transition-colors p-1.5 rounded hover:bg-white/[0.05]"
                aria-label="Submit command"
              >
                <CornerDownLeft className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile & Desktop Tap Command Shortcuts */}
          <div className="px-6 py-3 bg-[#0c0e14] border-t border-white/[0.08] flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="text-white/40 text-xs mr-1 font-medium">Quick run:</span>
            {["help", "about", "projects", "navigen", "forge", "pulse", "github", "contact", "clear"].map((cmd) => (
              <button
                key={cmd}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCommand(cmd);
                }}
                className="px-3 py-1 rounded-md bg-white/[0.05] hover:bg-white/[0.1] text-[#9ba1a6] hover:text-[#f5f4ef] border border-white/[0.08] transition-colors cursor-pointer text-xs font-medium active:scale-95"
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

