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
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    const lower = trimmed.toLowerCase();
    let response: string | React.ReactNode = "";

    switch (lower) {
      case "help":
        response = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-orange-400 font-bold">AVAILABLE COMMANDS:</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
              <div><span className="text-[#f5f4ef] font-bold">about</span> - Who I am</div>
              <div><span className="text-[#f5f4ef] font-bold">projects</span> - Active projects</div>
              <div><span className="text-[#f5f4ef] font-bold">navigen</span> - SIH 2025 UGV</div>
              <div><span className="text-[#f5f4ef] font-bold">forge</span> - AI CLI tool</div>
              <div><span className="text-[#f5f4ef] font-bold">pulse</span> - Collab workspace</div>
              <div><span className="text-[#f5f4ef] font-bold">github</span> - GitHub profile</div>
              <div><span className="text-[#f5f4ef] font-bold">contact</span> - Direct channels</div>
              <div><span className="text-[#f5f4ef] font-bold">clear</span> - Clear terminal</div>
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
          <div className="space-y-1 text-xs font-mono">
            <p className="text-orange-400 font-bold">PROJECT HIERARCHY:</p>
            <p>01. NAVIGEN — Vision-based autonomous ground vehicle [BUILT / SIH 2025]</p>
            <p>02. FORGE — AI software engineering terminal agent [BUILDING]</p>
            <p>03. PULSE — Real-time collaborative workspace [BUILDING / ILLUSTRATIVE]</p>
            <p>04. LPG DASHBOARD — Real-time sensor telemetry & valve shutoff [BUILT]</p>
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
          <div className="text-xs font-mono">
            <span>Repository profile: </span>
            <a
              href="https://github.com/nikhi20-900"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 underline hover:text-white"
            >
              https://github.com/nikhi20-900
            </a>
          </div>
        );
        break;

      case "contact":
        response = (
          <div className="space-y-1 text-xs font-mono">
            <p>Email: nikhil142004@gmail.com</p>
            <p>LinkedIn: https://www.linkedin.com/in/nikhil-chhetri-115747284/</p>
            <p>Location: Bangalore, India</p>
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
    <section className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Subtle Eyebrow */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#9ba1a6]">
            <Terminal className="w-3.5 h-3.5 text-orange-400" />
            <span>DEVELOPER EASTER EGG · INTERACTIVE CLI</span>
          </div>
          <span className="text-[10px] font-mono text-orange-400 bg-orange-950/20 border border-orange-800/30 px-2 py-0.5 rounded">
            Type &ldquo;help&rdquo;
          </span>
        </div>

        {/* Terminal Window Box */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="rounded-2xl bg-[#090b10] border border-white/[0.1] shadow-2xl overflow-hidden cursor-text"
        >
          {/* Window Chrome Header */}
          <div className="px-5 py-3 bg-[#0d0f14] border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-xs font-mono text-[#9ba1a6] ml-2">nikhil@ds-lab:~</span>
            </div>
            <div className="text-[10px] font-mono text-white/30 hidden sm:inline">
              bash 5.2 · interactive
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-5 sm:p-6 font-mono text-xs space-y-3 min-h-[220px] max-h-[360px] overflow-y-auto">
            {history.map((entry, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-orange-400">
                  <span className="text-white/40">nikhil@ds-lab:~$</span>
                  <span className="font-bold text-[#f5f4ef]">{entry.command}</span>
                </div>
                <div className="text-[#9ba1a6] pl-4 font-light leading-relaxed">
                  {entry.output}
                </div>
              </div>
            ))}

            {/* Active Input Line */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-white/40">nikhil@ds-lab:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type a command (e.g. help, projects, about)..."
                className="flex-1 bg-transparent text-[#f5f4ef] focus:outline-none placeholder:text-white/20 font-mono text-xs"
                autoComplete="off"
                spellCheck="false"
              />
              <button
                onClick={() => handleCommand(input)}
                className="text-white/30 hover:text-orange-400 transition-colors p-1"
                aria-label="Submit command"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </div>

            <div ref={terminalEndRef} />
          </div>

          {/* Mobile Tap Command Shortcuts */}
          <div className="px-5 py-2.5 bg-[#0c0e14] border-t border-white/[0.06] flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
            <span className="text-white/30 text-[10px] mr-1">Tap:</span>
            {["help", "about", "projects", "forge", "contact", "clear"].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="px-2 py-0.5 rounded bg-white/[0.04] hover:bg-white/[0.08] text-[#9ba1a6] hover:text-[#f5f4ef] border border-white/[0.06] transition-colors cursor-pointer"
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
