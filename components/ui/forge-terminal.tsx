"use client";

import { useState, useEffect } from "react";
import { Terminal as TerminalIcon, RotateCcw, Play, Check } from "lucide-react";

interface TerminalStep {
  id: string;
  label: string;
  status: "done" | "in-dev" | "planned";
  badge?: string;
  detail: string;
}

const TERMINAL_STEPS: TerminalStep[] = [
  {
    id: "plan",
    label: "Planning task",
    status: "done",
    detail: "Decomposing 'add authentication' into token store, auth middleware, and route guard steps.",
  },
  {
    id: "inspect",
    label: "Inspecting repository",
    status: "done",
    detail: "Scanning project directory structure, config files, and package dependencies.",
  },
  {
    id: "prepare",
    label: "Preparing changes",
    status: "done",
    detail: "Drafting minimal, structured patch chunks adhering to local coding patterns.",
  },
  {
    id: "test",
    label: "Running tests",
    status: "in-dev",
    badge: "IN DEVELOPMENT",
    detail: "Automated verification loop running workspace test runner in isolated subshell.",
  },
  {
    id: "review",
    label: "Reviewing changes",
    status: "planned",
    badge: "PLANNED",
    detail: "Interactive diff review and validation before final branch commit.",
  },
];

export function ForgeTerminal() {
  const [activeStepIndex, setActiveStepIndex] = useState(2);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % TERMINAL_STEPS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  return (
    <div className="rounded-2xl bg-[#090b10] border border-white/[0.1] shadow-2xl overflow-hidden font-mono text-xs">
      {/* Terminal Title Bar */}
      <div className="px-4 py-3 bg-[#11141d] border-b border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#e06c75]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#e5c07b]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#98c379]/80" />
          <span className="ml-2 text-[11px] text-[#9ba1a6] font-mono flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-orange-400" />
            <span>forge — zsh — 80×24</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/30">
            BUILDING
          </span>
          <button
            onClick={() => {
              setIsAutoPlaying(false);
              setActiveStepIndex((prev) => (prev + 1) % TERMINAL_STEPS.length);
            }}
            className="p-1 rounded text-[#9ba1a6] hover:text-[#f5f4ef] hover:bg-white/[0.06] transition-colors"
            title="Step next"
            aria-label="Step to next terminal command state"
          >
            <Play className="w-3 h-3" />
          </button>
          <button
            onClick={() => {
              setActiveStepIndex(0);
              setIsAutoPlaying(true);
            }}
            className="p-1 rounded text-[#9ba1a6] hover:text-[#f5f4ef] hover:bg-white/[0.06] transition-colors"
            title="Restart sequence"
            aria-label="Restart terminal trace sequence"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-5 sm:p-6 space-y-4 leading-relaxed">
        {/* Command Line Input */}
        <div className="flex items-center gap-2 text-sm">
          <span className="text-emerald-400 font-bold">$</span>
          <span className="text-[#f5f4ef] font-semibold">forge &quot;add authentication&quot;</span>
          <span className="inline-block w-2 h-4 bg-orange-500/90 animate-pulse ml-1" />
        </div>

        {/* Forge Output Header */}
        <div className="pt-2">
          <div className="text-orange-400 font-bold tracking-wider">FORGE</div>
          <div className="text-white/[0.2] select-none">──────────────────────────────────────</div>
        </div>

        {/* Step Items List */}
        <div className="space-y-2.5 pt-1">
          {TERMINAL_STEPS.map((step, idx) => {
            const isSelected = activeStepIndex === idx;

            return (
              <div
                key={step.id}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setActiveStepIndex(idx);
                }}
                className={`p-2 rounded-lg cursor-pointer transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 ${
                  isSelected
                    ? "bg-white/[0.05] border border-white/[0.12]"
                    : "hover:bg-white/[0.02] border border-transparent"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {step.status === "done" ? (
                    <span className="text-emerald-400 font-bold flex items-center">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block mr-1.5 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                      ●
                    </span>
                  ) : step.status === "in-dev" ? (
                    <span className="text-amber-400 font-bold flex items-center">
                      <span className="w-2 h-2 rounded-full border border-amber-400 inline-block mr-1.5 animate-pulse" />
                      ○
                    </span>
                  ) : (
                    <span className="text-orange-400/70 font-bold flex items-center">
                      <span className="w-2 h-2 rounded-full border border-orange-400/50 inline-block mr-1.5" />
                      ○
                    </span>
                  )}

                  <span
                    className={`font-mono ${
                      isSelected
                        ? "text-[#f5f4ef] font-bold"
                        : step.status === "done"
                        ? "text-[#f5f4ef]"
                        : "text-[#9ba1a6]"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>

                {step.badge && (
                  <span
                    className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded border self-start sm:self-auto ${
                      step.status === "in-dev"
                        ? "text-amber-400 bg-amber-950/40 border-amber-800/40"
                        : "text-orange-400 bg-orange-950/40 border-orange-800/40"
                    }`}
                  >
                    [{step.badge}]
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* Selected Step Explanation Drawer */}
        <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-start gap-2 text-[11px] text-[#9ba1a6]">
          <span className="text-orange-400 font-bold shrink-0">› [TRACE]</span>
          <span className="leading-snug">{TERMINAL_STEPS[activeStepIndex].detail}</span>
        </div>

        {/* Tactile Status Line */}
        <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-[10px] text-[#9ba1a6] font-mono border-t border-white/[0.06]">
          <span className="flex items-center gap-1.5">
            <Check className="w-3 h-3 text-emerald-400" />
            <span>Tactile CLI Engine</span>
          </span>
          <span className="text-[#9ba1a6]">Force Multiplier · Not a chatbot</span>
        </div>
      </div>
    </div>
  );
}
