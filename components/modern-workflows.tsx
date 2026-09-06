"use client";

import { useState } from "react";
import {
  Sparkles,
  Terminal,
  Zap,
  Workflow,
} from "lucide-react";

const CLI_COMMANDS = [
  { cmd: "$ git status", label: "Inspect branches & modified files", output: "On branch main · working tree clean" },
  { cmd: "$ npm run dev", label: "Start local development server", output: "Ready in 180ms · serving http://localhost:3000" },
  { cmd: "$ npm run build", label: "Verify TypeScript & bundle production", output: "Compiled successfully in 680ms · 0 errors" },
  { cmd: "$ python script.py", label: "Execute automation & algorithm tests", output: "[OK] 12 test assertions verified" },
  { cmd: "$ ros2 launch navigen_bringup.py", label: "Spawn ROS 2 nodes & motor drivers", output: "[INFO] [nav2_controller]: Active on /cmd_vel" },
  { cmd: "$ git push origin main", label: "Ship verified commits to GitHub", output: "Total 4 (delta 2), pack-reused 0 -> main" },
];

const AGENT_PIPELINE = [
  { step: "01", name: "IDEA", desc: "Define task & goal" },
  { step: "02", name: "PLAN", desc: "Break into sub-tasks" },
  { step: "03", name: "AGENT", desc: "Execute autonomously" },
  { step: "04", name: "TOOLS", desc: "Terminal, files, APIs" },
  { step: "05", name: "RESULT", desc: "Review & refine" },
];

export function ModernWorkflows() {
  const [selectedCmd, setSelectedCmd] = useState(CLI_COMMANDS[0]);
  const [activePipelineStep, setActivePipelineStep] = useState(2);

  return (
    <section id="workflows" className="py-24 md:py-36 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="text-xs font-mono text-orange-500 uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              <span>MODERN DEVELOPER TOOLING</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#f5f4ef] tracking-tight">
              AI, AGENTS &amp; CLI FLUENCY
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm font-mono text-[#9ba1a6] leading-relaxed">
              I use AI-assisted development, agents, automation, and terminal workflows as force
              multipliers — not replacements for understanding the code.
            </p>
          </div>
        </div>

        {/* 4 Core Modern Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* 1. AI-Assisted Development */}
          <div className="p-7 sm:p-9 rounded-2xl bg-[#11141d] border border-white/[0.08] hover:border-white/[0.18] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-orange-400">
                  <Sparkles className="w-4 h-4" />
                  <span>RAPID ITERATION</span>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-orange-950/30 text-orange-400 border border-orange-800/40">
                  Force Multiplier
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#f5f4ef] mb-2">
                AI-ASSISTED DEVELOPMENT
              </h3>

              <div className="text-xs font-mono text-amber-400/90 mb-4">
                Vibe coding · AI coding agents · Rapid prototyping · Code exploration
              </div>

              <p className="text-sm sm:text-base text-[#9ba1a6] leading-relaxed mb-6">
                &ldquo;I use AI as a development partner — exploring implementations, generating
                starting points, debugging problems, and iterating quickly. I still review, test,
                understand, and refine the code.&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#9ba1a6]">
              <span>Review before shipping</span>
              <span className="text-emerald-400 font-semibold">Human in the loop</span>
            </div>
          </div>

          {/* 2. Agentic Workflows */}
          <div className="p-7 sm:p-9 rounded-2xl bg-[#11141d] border border-white/[0.08] hover:border-white/[0.18] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <Workflow className="w-4 h-4" />
                  <span>MULTI-STEP ORCHESTRATION</span>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-orange-950/30 text-orange-400 border border-orange-800/40">
                  Building Forge
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#f5f4ef] mb-2">
                AGENTIC WORKFLOWS
              </h3>

              <div className="text-xs font-mono text-emerald-400/90 mb-4">
                AI Agents · Task Automation · Multi-Agent Workflows · Tool Calling
              </div>

              <p className="text-sm sm:text-base text-[#9ba1a6] leading-relaxed mb-6">
                &ldquo;I experiment with agent-based workflows to break complex tasks into smaller
                jobs, automate repetitive processes, and coordinate multiple steps of a development
                workflow.&rdquo;
              </p>

              {/* Minimal Editorial Pipeline Visual: IDEA -> PLAN -> AGENT -> TOOLS -> RESULT */}
              <div className="p-3.5 rounded-xl bg-[#090b10] border border-white/[0.06] mb-4">
                <div className="flex items-center justify-between gap-1 overflow-x-auto text-[11px] font-mono">
                  {AGENT_PIPELINE.map((node, idx) => (
                    <div
                      key={node.step}
                      onClick={() => setActivePipelineStep(idx)}
                      className={`px-2.5 py-1.5 rounded cursor-pointer transition-colors shrink-0 text-center ${
                        activePipelineStep === idx
                          ? "bg-[#f5f4ef] text-[#0d0f14] font-bold"
                          : "text-[#9ba1a6] hover:text-[#f5f4ef]"
                      }`}
                    >
                      <div>{node.name}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-2 text-[10px] font-mono text-[#9ba1a6] text-center">
                  Stage {AGENT_PIPELINE[activePipelineStep].step}: {AGENT_PIPELINE[activePipelineStep].desc}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#9ba1a6]">
              <span>Active Exploration</span>
              <a href="#forge" className="text-orange-400 font-semibold hover:underline">
                Forge Agent →
              </a>
            </div>
          </div>

          {/* 3. Terminal / CLI Interactive Panel */}
          <div className="p-7 sm:p-9 rounded-2xl bg-[#11141d] border border-white/[0.08] hover:border-white/[0.18] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <Terminal className="w-4 h-4" />
                  <span>COMMAND LINE FLUENCY</span>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-950/30 text-cyan-400 border border-cyan-800/40">
                  Interactive CLI
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#f5f4ef] mb-2">TERMINAL / CLI</h3>

              {/* Tactical CLI Element */}
              <div className="p-4 rounded-xl bg-[#090b10] border border-white/[0.08] font-mono text-xs space-y-3 mb-4">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-2 text-[11px] text-[#9ba1a6]">
                  <span>bash · zsh · linux</span>
                  <span className="text-emerald-400">STATUS: READY</span>
                </div>

                <div className="space-y-1.5">
                  {CLI_COMMANDS.map((item) => (
                    <button
                      key={item.cmd}
                      onClick={() => setSelectedCmd(item)}
                      className={`w-full text-left px-2.5 py-1 rounded transition-colors text-[11px] flex items-center justify-between ${
                        selectedCmd.cmd === item.cmd
                          ? "bg-white/[0.08] text-amber-300 font-semibold"
                          : "text-[#9ba1a6] hover:text-[#f5f4ef]"
                      }`}
                    >
                      <span className="truncate">{item.cmd}</span>
                      <span className="text-[10px] text-white/[0.3] hidden sm:inline">{item.label}</span>
                    </button>
                  ))}
                </div>

                <div className="pt-2 border-t border-white/[0.06] text-[11px] text-emerald-400">
                  › {selectedCmd.output}
                </div>
              </div>

              {/* Reveal Statement */}
              <p className="text-xs sm:text-sm font-mono text-[#f5f4ef] leading-relaxed">
                &ldquo;Comfortable working from the terminal, using Git, Linux tooling, package
                managers, scripts, and developer CLI workflows.&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#9ba1a6] mt-4">
              <span>Linux &amp; macOS CLI</span>
              <span className="text-cyan-400 font-semibold">Git · Bash · ROS 2 CLI</span>
            </div>
          </div>

          {/* 4. Automation */}
          <div className="p-7 sm:p-9 rounded-2xl bg-[#11141d] border border-white/[0.08] hover:border-white/[0.18] transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-purple-400">
                  <Zap className="w-4 h-4" />
                  <span>PROCESS OPTIMIZATION</span>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-purple-950/30 text-purple-400 border border-purple-800/40">
                  Mindset
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#f5f4ef] mb-2">AUTOMATION</h3>

              <div className="text-xs font-mono text-purple-300 mb-4">
                Scripts · AI agents · CLI tools · APIs · Repetitive task automation
              </div>

              <p className="text-sm sm:text-base text-[#9ba1a6] leading-relaxed mb-6">
                &ldquo;If I find myself doing the same task repeatedly, I start thinking about how
                to automate it.&rdquo;
              </p>

              <div className="p-4 rounded-xl bg-[#090b10] border border-white/[0.06] space-y-2 text-xs font-mono mb-4">
                <div className="text-[#9ba1a6]">Grounded Automation Disciplines:</div>
                <div className="flex items-center gap-2 text-[#f5f4ef]">
                  <span className="text-orange-400 font-bold">✓</span>
                  <span>Shell &amp; Python scripts for build, data parsing &amp; file workflows</span>
                </div>
                <div className="flex items-center gap-2 text-[#f5f4ef]">
                  <span className="text-orange-400 font-bold">✓</span>
                  <span>Tool-calling agent prompts for multi-step code inspection</span>
                </div>
                <div className="flex items-center gap-2 text-[#f5f4ef]">
                  <span className="text-orange-400 font-bold">✓</span>
                  <span>Automating repetitive setup steps to focus on core logic</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#9ba1a6]">
              <span>Pragmatic engineering</span>
              <span className="text-purple-400 font-semibold">Zero redundant steps</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
