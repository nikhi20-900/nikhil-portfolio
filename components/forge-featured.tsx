"use client";

import { useState } from "react";
import {
  Terminal,
  Brain,
  Search,
  Code2,
  Play,
  Wrench,
  FileCode2,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon } from "./ui/icons";
import { ForgeTerminal } from "./ui/forge-terminal";

const FORGE_PIPELINE_STEPS = [
  {
    id: "task",
    step: "01",
    name: "TASK",
    summary: "Terminal prompt",
    desc: "Developer prompts a task, feature request, or bugfix directly from the terminal.",
    status: "INPUT",
    statusBadge: "CLI INPUT",
    statusColor: "text-emerald-400 bg-emerald-950/40 border-emerald-800/40",
    icon: Terminal,
  },
  {
    id: "plan",
    step: "02",
    name: "PLAN",
    summary: "Task decomposition",
    desc: "Breaks a developer request into smaller implementation steps.",
    status: "CORE",
    statusBadge: "ACTIVE CORE",
    statusColor: "text-emerald-400 bg-emerald-950/40 border-emerald-800/40",
    icon: Brain,
  },
  {
    id: "inspect",
    step: "03",
    name: "INSPECT",
    summary: "Repository context",
    desc: "Understands the existing repository before making changes.",
    status: "CORE",
    statusBadge: "ACTIVE CORE",
    statusColor: "text-emerald-400 bg-emerald-950/40 border-emerald-800/40",
    icon: Search,
  },
  {
    id: "code",
    step: "04",
    name: "CODE",
    summary: "Scoped changes",
    desc: "Applies changes while respecting the existing project structure.",
    status: "CORE",
    statusBadge: "ACTIVE CORE",
    statusColor: "text-emerald-400 bg-emerald-950/40 border-emerald-800/40",
    icon: Code2,
  },
  {
    id: "test",
    step: "05",
    name: "TEST",
    summary: "Test workflow",
    desc: "Runs the available test/build workflow.",
    status: "IN DEVELOPMENT",
    statusBadge: "IN DEVELOPMENT",
    statusColor: "text-amber-400 bg-amber-950/40 border-amber-800/40",
    icon: Play,
  },
  {
    id: "debug",
    step: "06",
    name: "DEBUG",
    summary: "Iterative fix loop",
    desc: "Investigates failures and iterates.",
    status: "IN DEVELOPMENT",
    statusBadge: "IN DEVELOPMENT",
    statusColor: "text-amber-400 bg-amber-950/40 border-amber-800/40",
    icon: Wrench,
  },
  {
    id: "review",
    step: "07",
    name: "REVIEW",
    summary: "Diff verification",
    desc: "Reviews the resulting changes before completion.",
    status: "PLANNED",
    statusBadge: "PLANNED",
    statusColor: "text-orange-400 bg-orange-950/40 border-orange-800/40",
    icon: FileCode2,
  },
  {
    id: "done",
    step: "08",
    name: "DONE",
    summary: "Ready to ship",
    desc: "Working, verified changes ready for branch commit.",
    status: "OUTPUT",
    statusBadge: "READY",
    statusColor: "text-emerald-400 bg-emerald-950/40 border-emerald-800/40",
    icon: CheckCircle2,
  },
];

const FORGE_EXPLORATION_AREAS = [
  "AI AGENTS",
  "MULTI-AGENT WORKFLOWS",
  "TOOL CALLING",
  "AUTOMATION",
  "TERMINAL / CLI",
  "DEVELOPER TOOLING",
];

export function ForgeFeatured() {
  const [activeForgeIndex, setActiveForgeIndex] = useState(1); // Default to PLAN

  return (
    <section id="forge" className="py-24 md:py-36 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Visual Bridge & Orientation (Level 02 Eyebrow) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/[0.08]">
          <div className="text-xs font-mono text-orange-400 uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <span>02 / AI ENGINEERING / DEVELOPER TOOL</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="px-3 py-0.5 rounded-full bg-orange-500/10 text-orange-300 border border-orange-500/30 font-bold">
              BUILDING
            </span>
            <span className="text-[#9ba1a6] hidden sm:inline">Active Local Prototype</span>
          </div>
        </div>

        {/* Priority 1 & 2: Massive Headline & Narrative Subtitle */}
        <div className="max-w-4xl mb-12">
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black text-[#f5f4ef] tracking-tighter leading-[0.95] mb-4">
            FORGE
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-orange-400 font-bold tracking-tight mb-3">
            AI Software Engineering Agent
          </p>
          <blockquote className="text-base sm:text-xl text-[#f5f4ef] font-light border-l-2 border-orange-500/60 pl-4 my-4 italic">
            &ldquo;From task to tested code — directly from the terminal.&rdquo;
          </blockquote>
        </div>

        {/* Priority 3: Interactive 8-Stage Workflow Pipeline */}
        <div className="my-10 p-6 sm:p-8 rounded-2xl bg-[#090b10] border border-white/[0.08] shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div className="text-[11px] font-mono text-[#9ba1a6] uppercase tracking-widest flex items-center gap-2">
              <span>WORKFLOW PIPELINE</span>
              <span className="text-white/[0.2]">·</span>
              <span className="text-[#f5f4ef]">Interactive State Inspector</span>
            </div>
            <span className="text-xs font-mono text-orange-400 font-semibold">
              STAGE {FORGE_PIPELINE_STEPS[activeForgeIndex].step}:{" "}
              {FORGE_PIPELINE_STEPS[activeForgeIndex].name}
            </span>
          </div>

          {/* 8-Stage Node Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            {FORGE_PIPELINE_STEPS.map((stage, idx) => {
              const Icon = stage.icon;
              const isSelected = activeForgeIndex === idx;

              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveForgeIndex(idx)}
                  onMouseEnter={() => setActiveForgeIndex(idx)}
                  className={`p-3 rounded-xl text-left transition-all border flex flex-col justify-between min-h-[110px] ${
                    isSelected
                      ? "bg-[#181d29] border-orange-500/60 shadow-lg scale-[1.02]"
                      : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] opacity-75 hover:opacity-100"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-[11px] font-mono font-bold ${
                          isSelected ? "text-orange-400" : "text-[#9ba1a6]"
                        }`}
                      >
                        {stage.step}
                      </span>
                      <Icon
                        className={`w-3.5 h-3.5 ${
                          isSelected ? "text-orange-400" : "text-[#9ba1a6]"
                        }`}
                      />
                    </div>
                    <div className="text-xs font-bold text-[#f5f4ef] leading-tight">
                      {stage.name}
                    </div>
                  </div>

                  <div className="mt-2">
                    <span
                      className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded border block text-center truncate ${stage.statusColor}`}
                    >
                      {stage.statusBadge}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Explanation Banner */}
          <div className="mt-5 p-4 rounded-xl bg-[#11141d] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
            <div className="flex items-start sm:items-center gap-3">
              <span className="text-orange-400 font-bold shrink-0">
                › {FORGE_PIPELINE_STEPS[activeForgeIndex].name}:
              </span>
              <span className="text-[#f5f4ef] leading-relaxed">
                {FORGE_PIPELINE_STEPS[activeForgeIndex].desc}
              </span>
            </div>

            <span
              className={`text-[10px] uppercase px-2.5 py-1 rounded-full border shrink-0 font-bold ${FORGE_PIPELINE_STEPS[activeForgeIndex].statusColor}`}
            >
              {FORGE_PIPELINE_STEPS[activeForgeIndex].statusBadge}
            </span>
          </div>

          <div className="mt-3 text-[11px] font-mono text-[#9ba1a6]/80">
            * Authenticity Note: Test &amp; debug loops are actively in development; review loop is
            planned.
          </div>
        </div>

        {/* Priority 4: Terminal Visualization & Editorial Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start my-12">
          {/* Left Column: Why I Built Forge & Exploration Horizon */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-7 rounded-2xl bg-[#090b10] border border-white/[0.08] space-y-3">
              <div className="text-xs font-mono text-orange-400 uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>WHY I BUILT FORGE</span>
              </div>
              <p className="text-base text-[#f5f4ef] leading-relaxed font-light">
                &ldquo;I wanted to explore what happens when AI becomes part of the software
                engineering workflow itself — not just a chatbot that answers questions, but a tool
                that can inspect a codebase, break down a task, work with developer tools, and help
                move an idea toward working software.&rdquo;
              </p>
              <div className="text-xs font-mono text-[#9ba1a6] pt-1">
                AI as a force multiplier · Grounded developer tooling
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-[#090b10] border border-white/[0.08] space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-xs font-mono text-[#9ba1a6] uppercase tracking-widest">
                  WHAT I&apos;M EXPLORING
                </div>
                <span className="text-[10px] font-mono text-orange-400">
                  Active Learning Focus
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {FORGE_EXPLORATION_AREAS.map((area) => (
                  <div
                    key={area}
                    className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center"
                  >
                    <span className="text-[11px] font-mono font-bold text-[#f5f4ef] block leading-tight">
                      {area}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-[#9ba1a6] font-mono leading-relaxed pt-1">
                Areas actively explored and built hands-on — zero exaggerated claims.
              </p>
            </div>
          </div>

          {/* Right Column: Tactile Terminal Component */}
          <div className="lg:col-span-6">
            <ForgeTerminal />
          </div>
        </div>

        {/* Priority 5 & 6: Technical Stack & GitHub Status */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-[#9ba1a6] mr-2">Verified Stack:</span>
            {["CLI Tooling", "TypeScript", "Node.js", "AI/LLM APIs", "Git"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.03] text-[#f5f4ef] border border-white/[0.08]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#9ba1a6]">
              Repository in Private Development
            </span>
            <a
              href="https://github.com/nikhi20-900"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/[0.06] text-[#f5f4ef] hover:bg-white/[0.1] text-xs font-mono font-semibold transition-all border border-white/[0.1]"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub Profile</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
