"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Split, Sparkles, Terminal, Rocket } from "lucide-react";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "FIND THE PROBLEM",
    summary: "Understand what actually needs solving.",
    detail:
      "Before writing a line of code or wiring a breadboard, I pinpoint the core constraint — whether it's an autonomous ground vehicle navigating outdoor terrain or an IoT dashboard needing instant gas hazard alerts.",
    icon: Search,
  },
  {
    number: "02",
    title: "BREAK IT DOWN",
    summary: "Turn a large idea into small, buildable pieces.",
    detail:
      "Decompose complex systems into modular tasks: hardware vs software, high-level path planning vs low-level motor PWM, backend APIs vs frontend presentation layers.",
    icon: Split,
  },
  {
    number: "03",
    title: "VIBE CODE & PROTOTYPE",
    summary: "Use AI-assisted development to rapidly turn ideas into working prototypes.",
    detail:
      "I use AI coding tools and scaffolding to generate starting points, explore architectural patterns, and iterate at high velocity — while actively inspecting, testing, and understanding every block.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "TEST, DEBUG & AUTOMATE",
    summary: "Use terminal workflows, scripts, AI agents, and automation to remove repetitive work and iterate faster.",
    detail:
      "From Linux CLI build scripts and Gazebo simulations to tool-calling agents and test suites, I automate repetitive tasks so I can focus on solving hard edge-case bugs.",
    icon: Terminal,
  },
  {
    number: "05",
    title: "SHIP IT",
    summary: "Turn the working prototype into something usable.",
    detail:
      "Refine the code, verify hardware reliability, commit clean repositories to GitHub, and deliver an interactive product that actually solves the original problem.",
    icon: Rocket,
  },
];

export function HowIBuild() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-24 md:py-36 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header (Level 02 Heading) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="text-xs font-mono text-[#9ba1a6] uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="text-orange-400 font-bold">05 /</span>
              <span>METHODOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#f5f4ef] tracking-tight">
              HOW I BUILD
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm sm:text-base font-mono text-[#9ba1a6] leading-relaxed">
              &ldquo;I don&apos;t just write code. I use the tools around me to turn ideas into
              working products faster.&rdquo;
            </p>
          </div>
        </div>

        {/* 5-Step Process Grid (Moving focal point: Active = 100%, Previous = 50%, Next = 35%) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-10">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            const isPast = idx < activeStep;

            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                onMouseEnter={() => setActiveStep(idx)}
                className={`p-6 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#181d29] border-orange-500/60 shadow-xl scale-[1.03] opacity-100 ring-1 ring-orange-500/20"
                    : isPast
                    ? "bg-[#101219]/40 border-white/[0.04] opacity-50 hover:opacity-85 hover:bg-[#141720]"
                    : "bg-[#101219]/25 border-white/[0.03] opacity-35 hover:opacity-75 hover:bg-[#141720]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xl font-mono font-black ${
                        isSelected ? "text-orange-400" : "text-[#9ba1a6]"
                      }`}
                    >
                      {step.number}
                    </span>
                    <Icon
                      className={`w-5 h-5 ${
                        isSelected ? "text-orange-400" : "text-[#9ba1a6]"
                      }`}
                    />
                  </div>

                  <h3
                    className={`text-sm font-bold mb-2 leading-tight ${
                      isSelected ? "text-[#f5f4ef]" : "text-[#f5f4ef]/80"
                    }`}
                  >
                    {step.title}
                  </h3>
                </div>

                <div className="text-xs text-[#9ba1a6] mt-3 leading-snug">{step.summary}</div>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep-Dive Card */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="p-7 sm:p-9 rounded-2xl bg-[#131620] border border-white/[0.1] flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="max-w-2xl">
            <div className="text-xs font-mono text-orange-400 font-bold uppercase tracking-wider mb-2">
              STEP {PROCESS_STEPS[activeStep].number} IN PRACTICE
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-[#f5f4ef] mb-2">
              {PROCESS_STEPS[activeStep].title}: {PROCESS_STEPS[activeStep].summary}
            </h4>
            <p className="text-sm sm:text-base text-[#9ba1a6] leading-relaxed">
              {PROCESS_STEPS[activeStep].detail}
            </p>
          </div>

          <div className="shrink-0 font-mono text-xs text-[#9ba1a6] p-4 rounded-xl bg-[#090b10] border border-white/[0.06]">
            <div>METHOD: VIBE &amp; REFINE</div>
            <div className="text-emerald-400 mt-1">STATUS: VELOCITY + CODE UNDERSTANDING</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
