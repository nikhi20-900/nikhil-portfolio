"use client";

import { useState } from "react";
import {
  GitBranch,
  Terminal,
  Cpu,
  CheckCircle2,
  Clock,
  Radio,
  Server,
  Workflow,
  Boxes,
} from "lucide-react";

// Forge -> Nexus Narrative Bridge Pipeline Flow
const FORGE_FLOW_STEPS = [
  { step: "01", name: "TASK", role: "CLI Input" },
  { step: "02", name: "PLAN", role: "Decomposition" },
  { step: "03", name: "INSPECT", role: "Context Grounding" },
  { step: "04", name: "CODE", role: "Scoped Diffs" },
  { step: "05", name: "TEST", role: "Verification" },
  { step: "06", name: "REVIEW", role: "Approval Gate" },
];

const NEXUS_LIFECYCLE_STEPS = [
  {
    step: "01",
    id: "repo",
    name: "REPOSITORY",
    action: "Commit & Branch Sync",
    desc: "Ingests Git tree, branch references, commit SHAs, and developer intent.",
    icon: GitBranch,
    metric: "COMMIT: e8f2a1 · illustrative commit",
    statusBadge: "SYNCED",
  },
  {
    step: "02",
    id: "analyze",
    name: "ANALYZE",
    action: "Static AST & Security",
    desc: "Runs automated lint gates, typecheck verification, secret scanners, and dependency audit.",
    icon: Terminal,
    metric: "SECURITY: clean · illustrative scan",
    statusBadge: "VERIFIED",
  },
  {
    step: "03",
    id: "build",
    name: "BUILD",
    action: "Artifact Compilation",
    desc: "Executes Next.js Turbopack compiler, generates server bundles and static assets.",
    icon: Cpu,
    metric: "BUILD: ~42s (simulated)",
    statusBadge: "PASSING",
  },
  {
    step: "04",
    id: "test",
    name: "TEST",
    action: "Automated Suite",
    desc: "Runs unit specs, integration checks, and route contract validations.",
    icon: CheckCircle2,
    metric: "TESTS: 48 passing · illustrative",
    statusBadge: "0 FAILING",
  },
  {
    step: "05",
    id: "deploy",
    name: "DEPLOY",
    action: "Edge Rollout",
    desc: "Deploys immutable release artifact to globally distributed edge nodes with automatic rollback.",
    icon: Server,
    metric: "DEPLOYMENT: SIMULATED",
    statusBadge: "SIMULATED",
  },
  {
    step: "06",
    id: "monitor",
    name: "MONITOR",
    action: "Telemetry & Logs",
    desc: "Streams health telemetry, edge latency traces, error rate thresholds, and request metrics.",
    icon: Radio,
    metric: "LATENCY: ~15ms (simulated edge target)",
    statusBadge: "NOMINAL",
  },
];

// Switchable Simulated Projects
interface NexusProjectData {
  id: string;
  name: string;
  repo: string;
  branch: string;
  commitHash: string;
  commitMsg: string;
  commitAuthor: string;
  commitTime: string;
  buildStatus: string;
  buildDuration: string;
  bundleSize: string;
  testsPassed: number;
  testsFailed: number;
  testsSkipped: number;
  testTime: string;
  deployTarget: string;
  deployStatus: string;
  deployUrl: string;
  activityLogs: {
    time: string;
    event: string;
    badge: string;
    badgeColor: string;
  }[];
  automationHooks: {
    name: string;
    trigger: string;
    status: string;
  }[];
}

const SIMULATED_PROJECTS: NexusProjectData[] = [
  {
    id: "portfolio",
    name: "nikhil-portfolio",
    repo: "github.com/nikhi20-900/nikhil-portfolio",
    branch: "main",
    commitHash: "e8f2a1 · illustrative commit",
    commitMsg: "feat(narrative): integrate ATLAS & NEXUS flagship systems",
    commitAuthor: "Nikhil Chhetri",
    commitTime: "12m ago",
    buildStatus: "PASSING ✓ (simulated)",
    buildDuration: "~42s (simulated)",
    bundleSize: "~142 KB gzip (simulated)",
    testsPassed: 48,
    testsFailed: 0,
    testsSkipped: 2,
    testTime: "~3.4s (simulated)",
    deployTarget: "Edge Runtime / Vercel (Simulated)",
    deployStatus: "DEPLOYMENT: SIMULATED",
    deployUrl: "https://nikhil-portfolio-rose.vercel.app",
    activityLogs: [
      {
        time: "18:45",
        event: "Edge CDN cache purge propagated across 18 edge POPs",
        badge: "DEPLOY · SIMULATED",
        badgeColor: "text-emerald-400 bg-emerald-950/40 border-emerald-800/40",
      },
      {
        time: "18:44",
        event: "Deployment staged: verified zero-downtime routing",
        badge: "DEPLOY · SIMULATED",
        badgeColor: "text-emerald-400 bg-emerald-950/40 border-emerald-800/40",
      },
      {
        time: "18:43",
        event: "Automated test suite finished: 48 passing · illustrative",
        badge: "TEST · SIMULATED",
        badgeColor: "text-blue-400 bg-blue-950/40 border-blue-800/40",
      },
      {
        time: "18:42",
        event: "Next.js Turbopack build finished in ~42s (simulated)",
        badge: "BUILD · SIMULATED",
        badgeColor: "text-amber-400 bg-amber-950/40 border-amber-800/40",
      },
      {
        time: "18:41",
        event: "Git push event triggered by nikhil on branch main",
        badge: "GIT · SIMULATED",
        badgeColor: "text-purple-400 bg-purple-950/40 border-purple-800/40",
      },
    ],
    automationHooks: [
      { name: "Static Lint Gate", trigger: "pre-commit", status: "PASSING" },
      { name: "TypeScript Strict Check", trigger: "push:main", status: "PASSING" },
      { name: "Secret Leak Scan", trigger: "pull_request", status: "CLEAN" },
      { name: "Automatic Rollback Sentinel", trigger: "post-deploy", status: "ARMED" },
    ],
  },
  {
    id: "navigen",
    name: "navigen-core",
    repo: "github.com/nikhi20-900/navigen-ugv",
    branch: "outdoor-sih",
    commitHash: "c4a7b9 · illustrative commit",
    commitMsg: "fix(nav2): expand obstacle inflation safety radius to 0.45m",
    commitAuthor: "Nikhil Chhetri",
    commitTime: "1h ago",
    buildStatus: "PASSING ✓ (simulated)",
    buildDuration: "~1m 18s (simulated)",
    bundleSize: "~14.2 MB ROS2 binary (simulated)",
    testsPassed: 32,
    testsFailed: 0,
    testsSkipped: 1,
    testTime: "~12.1s (simulated)",
    deployTarget: "Raspberry Pi 4 / Ubuntu Edge (Simulated)",
    deployStatus: "DEPLOYMENT: SIMULATED",
    deployUrl: "edge-device-node-01.local",
    activityLogs: [
      {
        time: "17:15",
        event: "Node daemon restarted with 0.45m inflation costmap",
        badge: "EDGE · SIMULATED",
        badgeColor: "text-emerald-400 bg-emerald-950/40 border-emerald-800/40",
      },
      {
        time: "17:12",
        event: "Gazebo 3D simulation trajectory run passed cleanly",
        badge: "SIM · SIMULATED",
        badgeColor: "text-blue-400 bg-blue-950/40 border-blue-800/40",
      },
      {
        time: "17:08",
        event: "Cross-compiled ARM64 ROS 2 Nav2 package in ~1m 18s",
        badge: "BUILD · SIMULATED",
        badgeColor: "text-amber-400 bg-amber-950/40 border-amber-800/40",
      },
    ],
    automationHooks: [
      { name: "ROS 2 QoS Contract Audit", trigger: "push:outdoor-sih", status: "PASSING" },
      { name: "Edge Memory Profiler", trigger: "build:arm64", status: "SAFE" },
      { name: "Watchdog Telemetry Check", trigger: "daemon:start", status: "ACTIVE" },
    ],
  },
  {
    id: "forge",
    name: "forge-cli",
    repo: "github.com/nikhi20-900/forge-agent",
    branch: "feat/inspect-gate",
    commitHash: "7f13d8 · illustrative commit",
    commitMsg: "feat(pipeline): enforce directory inspection before diff proposal",
    commitAuthor: "Nikhil Chhetri",
    commitTime: "3h ago",
    buildStatus: "PASSING ✓ (simulated)",
    buildDuration: "~18s (simulated)",
    bundleSize: "~880 KB CLI binary (simulated)",
    testsPassed: 64,
    testsFailed: 0,
    testsSkipped: 0,
    testTime: "~1.8s (simulated)",
    deployTarget: "npm / local global binary (Simulated)",
    deployStatus: "DEPLOYMENT: SIMULATED",
    deployUrl: "npm:@forge/cli@0.2.1-prototype",
    activityLogs: [
      {
        time: "15:22",
        event: "Prototype binary verified in isolated sandbox directory",
        badge: "CLI · SIMULATED",
        badgeColor: "text-emerald-400 bg-emerald-950/40 border-emerald-800/40",
      },
      {
        time: "15:20",
        event: "8-stage pipeline state machine tests: 64 passing",
        badge: "TEST · SIMULATED",
        badgeColor: "text-blue-400 bg-blue-950/40 border-blue-800/40",
      },
      {
        time: "15:18",
        event: "TypeScript CLI bundle compiled in ~18s (simulated)",
        badge: "BUILD · SIMULATED",
        badgeColor: "text-amber-400 bg-amber-950/40 border-amber-800/40",
      },
    ],
    automationHooks: [
      { name: "Context Window Budget Test", trigger: "pre-push", status: "PASSING" },
      { name: "Diff Syntax Gate", trigger: "test:unit", status: "PASSING" },
      { name: "CLI Binary Permissions", trigger: "pack:cli", status: "VERIFIED" },
    ],
  },
];

export function NexusFeatured() {
  const [activeLifecycleIndex, setActiveLifecycleIndex] = useState(2); // Default to BUILD
  const [selectedProjectId, setSelectedProjectId] = useState<string>("portfolio");

  const currentProject =
    SIMULATED_PROJECTS.find((p) => p.id === selectedProjectId) ||
    SIMULATED_PROJECTS[0];

  return (
    <section id="nexus" className="py-24 md:py-36 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* ========================================================================= */}
        {/* 1. NARRATIVE BRIDGE: FORGE -> NEXUS ("Writing code to understanding it") */}
        {/* ========================================================================= */}
        <div className="mb-20 p-8 sm:p-10 rounded-3xl bg-[#090b10] border border-orange-500/25 shadow-2xl relative overflow-hidden">
          {/* Subtle architectural background grid */}
          <div className="absolute inset-0 editorial-grid opacity-30 pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="text-[11px] font-mono text-orange-400 uppercase tracking-widest flex items-center gap-2">
                <Workflow className="w-4 h-4" />
                <span>NARRATIVE BRIDGE / FORGE → NEXUS</span>
              </div>
              <span className="text-[10px] font-mono text-[#9ba1a6] px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">
                LIFECYCLE CONTINUUM
              </span>
            </div>

            <div className="max-w-3xl space-y-2">
              <h3 className="text-2xl sm:text-4xl font-black text-[#f5f4ef] tracking-tight leading-tight">
                &ldquo;From writing code to understanding the system around it.&rdquo;
              </h3>
              <p className="text-sm sm:text-base text-[#9ba1a6] font-light leading-relaxed">
                Forge helps build software through terminal agent loops. Nexus helps understand,
                verify, and ship it through operational infrastructure.
              </p>
            </div>

            {/* Visual Flow Comparison: FORGE -> NEXUS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/[0.08]">
              {/* Forge Development Loop */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-[#f5f4ef] flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-orange-400" />
                    <span>FORGE / LOCAL AGENT</span>
                  </span>
                  <span className="text-[10px] text-orange-400 uppercase">Write &amp; Verify</span>
                </div>

                <div className="flex flex-wrap items-center gap-1 text-[11px] font-mono text-[#9ba1a6]">
                  {FORGE_FLOW_STEPS.map((step, idx) => (
                    <span key={step.step} className="flex items-center gap-1">
                      <span className="px-2 py-0.5 rounded bg-white/[0.04] text-[#f5f4ef] border border-white/[0.06]">
                        {step.name}
                      </span>
                      {idx < FORGE_FLOW_STEPS.length - 1 && (
                        <span className="text-white/20">→</span>
                      )}
                    </span>
                  ))}
                </div>
                <div className="text-[11px] font-mono text-[#9ba1a6]">
                  How code gets written, inspected, and verified locally.
                </div>
              </div>

              {/* Nexus Operational Loop */}
              <div className="p-4 sm:p-5 rounded-2xl bg-orange-500/[0.04] border border-orange-500/20 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-orange-400 flex items-center gap-2">
                    <Boxes className="w-3.5 h-3.5 text-orange-400" />
                    <span>NEXUS / INFRASTRUCTURE</span>
                  </span>
                  <span className="text-[10px] text-orange-400 uppercase">Ship &amp; Observe</span>
                </div>

                <div className="flex flex-wrap items-center gap-1 text-[11px] font-mono text-[#9ba1a6]">
                  {["BUILD", "DEPLOY", "MONITOR", "AUTOMATE"].map((step, idx, arr) => (
                    <span key={step} className="flex items-center gap-1">
                      <span className="px-2 py-0.5 rounded bg-orange-500/10 text-orange-300 border border-orange-500/30 font-bold">
                        {step}
                      </span>
                      {idx < arr.length - 1 && <span className="text-orange-500/40">→</span>}
                    </span>
                  ))}
                </div>
                <div className="text-[11px] font-mono text-[#9ba1a6]">
                  How code gets compiled, tested, deployed, and monitored globally.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. SECTION ORIENTATION & AUTHENTICITY STATUS */}
        {/* ========================================================================= */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/[0.08]">
          <div className="text-xs font-mono text-orange-400 uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="font-bold">05 /</span>
            <span>DEVOPS / AUTOMATION / DEVELOPER INFRASTRUCTURE</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="px-3 py-0.5 rounded-full bg-orange-500/10 text-orange-300 border border-orange-500/30 font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
              BUILDING
            </span>
            <span className="px-2.5 py-0.5 rounded bg-white/[0.04] text-[#9ba1a6] border border-white/[0.08] text-[11px]">
              CONCEPT · ARCHITECTURE PROTOTYPE
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. HEADLINE & EDITORIAL POSITIONING */}
        {/* ========================================================================= */}
        <div className="max-w-4xl mb-12">
          <div className="flex flex-wrap items-baseline gap-4 mb-3">
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-black text-[#f5f4ef] tracking-tighter leading-[0.95]">
              NEXUS
            </h2>
            <span className="text-xs font-mono uppercase px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 font-bold">
              OPERATIONAL CONTROL
            </span>
          </div>

          <p className="text-xl sm:text-2xl md:text-3xl text-orange-400 font-bold tracking-tight mb-4">
            From commit to deployment — see what happens in between.
          </p>

          <blockquote className="text-xl sm:text-2xl text-[#f5f4ef] font-light italic border-l-2 border-orange-500/60 pl-4 my-4">
            &ldquo;Building software isn&apos;t just writing lines in an editor. It&apos;s managing the entire machine that takes code to users.&rdquo;
          </blockquote>

          <p className="text-base sm:text-lg text-[#9ba1a6] font-light leading-relaxed max-w-2xl mt-4">
            An exploration of developer infrastructure that connects source code, automated
            checks, builds, deployments, and project health in one place.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 4. OPERATIONAL CONTROL METAPHOR (6-STAGE LIFECYCLE PIPELINE) */}
        {/* ========================================================================= */}
        <div className="my-12 p-6 sm:p-8 rounded-2xl bg-[#090b10] border border-white/[0.08] shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div className="text-[11px] font-mono text-[#9ba1a6] uppercase tracking-widest flex items-center gap-2">
              <span className="text-orange-400 font-bold">LIFECYCLE /</span>
              <span>OPERATIONAL PIPELINE STAGES</span>
            </div>
            <div className="text-xs font-mono text-orange-400 font-semibold flex items-center gap-2">
              <span>STAGE {NEXUS_LIFECYCLE_STEPS[activeLifecycleIndex].step}:</span>
              <span className="text-[#f5f4ef]">
                {NEXUS_LIFECYCLE_STEPS[activeLifecycleIndex].name}
              </span>
            </div>
          </div>

          {/* 6 Interactive Stage Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {NEXUS_LIFECYCLE_STEPS.map((stage, idx) => {
              const Icon = stage.icon;
              const isSelected = activeLifecycleIndex === idx;

              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveLifecycleIndex(idx)}
                  onMouseEnter={() => setActiveLifecycleIndex(idx)}
                  className={`p-3.5 rounded-xl text-left transition-all border flex flex-col justify-between min-h-[120px] cursor-pointer ${
                    isSelected
                      ? "bg-[#181d29] border-orange-500/60 shadow-lg scale-[1.02]"
                      : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] opacity-75 hover:opacity-100"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-[10px] font-mono font-bold ${
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

                  <div className="mt-2 space-y-1">
                    <span
                      className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded border block text-center truncate ${
                        isSelected
                          ? "bg-orange-950/40 text-orange-300 border-orange-800/40 font-bold"
                          : "bg-white/[0.03] text-[#9ba1a6] border-white/[0.06]"
                      }`}
                    >
                      {stage.statusBadge}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detail Banner */}
          <div className="mt-4 p-4 rounded-xl bg-[#11141d] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-orange-400 font-bold">
                  › {NEXUS_LIFECYCLE_STEPS[activeLifecycleIndex].name}:
                </span>
                <span className="text-[#f5f4ef] font-semibold">
                  {NEXUS_LIFECYCLE_STEPS[activeLifecycleIndex].action}
                </span>
              </div>
              <p className="text-[#9ba1a6] text-[11px] leading-relaxed">
                {NEXUS_LIFECYCLE_STEPS[activeLifecycleIndex].desc}
              </p>
            </div>

            <div className="shrink-0 px-3 py-1.5 rounded-lg bg-orange-950/30 border border-orange-800/40 text-[10px] text-orange-300 font-mono font-bold">
              {NEXUS_LIFECYCLE_STEPS[activeLifecycleIndex].metric}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. INTERACTIVE PROJECT-HEALTH CONSOLE (EDITORIAL DEVELOPER INTERACTION) */}
        {/* ========================================================================= */}
        <div className="my-14 rounded-3xl bg-[#11141d] border border-white/[0.1] shadow-2xl overflow-hidden">
          {/* Console Chrome */}
          <div className="px-6 py-4 bg-[#0d0f14] border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="h-4 w-px bg-white/10 mx-1" />
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="font-bold text-[#f5f4ef]">NEXUS</span>
                <span className="text-[#9ba1a6]">/</span>
                <span className="text-[#9ba1a6]">Console</span>
                <span className="text-[#9ba1a6]">/</span>
                <span className="text-orange-400 font-medium">Project Health &amp; Pipelines</span>
              </div>
            </div>

            {/* Strict Authenticity Label */}
            <div className="text-[10px] font-mono text-amber-400 uppercase tracking-wider px-2.5 py-1 rounded bg-amber-950/30 border border-amber-800/40 flex items-center gap-1.5 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>CONCEPT / BUILDING · SIMULATED CI/CD</span>
            </div>
          </div>

          {/* Project Environment Switcher Tabs */}
          <div className="px-6 py-3 bg-[#0c0e14] border-b border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="text-[#9ba1a6] text-[11px]">Active Target:</span>
              {SIMULATED_PROJECTS.map((proj) => (
                <button
                  key={proj.id}
                  onClick={() => setSelectedProjectId(proj.id)}
                  className={`px-3 py-1.5 rounded-lg transition-all border cursor-pointer ${
                    selectedProjectId === proj.id
                      ? "bg-[#f5f4ef] text-[#0d0f14] font-bold border-[#f5f4ef] shadow-sm"
                      : "bg-white/[0.02] text-[#9ba1a6] border-white/[0.06] hover:text-[#f5f4ef] hover:bg-white/[0.04]"
                  }`}
                >
                  {proj.name}
                </button>
              ))}
            </div>

            <div className="text-[11px] text-[#9ba1a6] flex items-center gap-2">
              <GitBranch className="w-3.5 h-3.5 text-orange-400" />
              <span>branch: {currentProject.branch}</span>
            </div>
          </div>

          {/* 6 Modular Health Panels Grid */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Top Row: Repository, Build, Tests, Deployment Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Card 1: Repository Status */}
              <div className="p-5 rounded-2xl bg-[#090b10] border border-white/[0.06] space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[10px] text-[#9ba1a6] uppercase tracking-wider flex items-center gap-1.5">
                    <GitBranch className="w-3 h-3 text-orange-400" />
                    <span>REPOSITORY</span>
                  </span>
                  <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-800/40">
                    SYNCED
                  </span>
                </div>
                <div>
                  <div className="text-sm font-mono font-bold text-[#f5f4ef] truncate">
                    {currentProject.name}
                  </div>
                  <div className="text-[11px] font-mono text-orange-400 pt-1">
                    {currentProject.commitHash}
                  </div>
                  <div className="text-[11px] text-[#9ba1a6] line-clamp-2 pt-1 font-light">
                    {currentProject.commitMsg}
                  </div>
                </div>
                <div className="text-[10px] font-mono text-[#9ba1a6] pt-1 border-t border-white/[0.04] flex justify-between">
                  <span>Author: {currentProject.commitAuthor}</span>
                  <span>{currentProject.commitTime}</span>
                </div>
              </div>

              {/* Card 2: Build Engine */}
              <div className="p-5 rounded-2xl bg-[#090b10] border border-white/[0.06] space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[10px] text-[#9ba1a6] uppercase tracking-wider flex items-center gap-1.5">
                    <Cpu className="w-3 h-3 text-orange-400" />
                    <span>BUILD ENGINE</span>
                  </span>
                  <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-800/40">
                    {currentProject.buildStatus}
                  </span>
                </div>
                <div>
                  <div className="text-2xl font-mono font-bold text-[#f5f4ef]">
                    {currentProject.buildDuration}
                  </div>
                  <div className="text-[11px] font-mono text-[#9ba1a6] pt-1">
                    Artifact: {currentProject.bundleSize}
                  </div>
                </div>
                <div className="text-[10px] font-mono text-[#9ba1a6] pt-1 border-t border-white/[0.04]">
                  Turbopack compile · Clean cache
                </div>
              </div>

              {/* Card 3: Test Suite */}
              <div className="p-5 rounded-2xl bg-[#090b10] border border-white/[0.06] space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[10px] text-[#9ba1a6] uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>TEST RUNNER</span>
                  </span>
                  <span className="text-[9px] font-mono text-blue-400 bg-blue-950/40 px-1.5 py-0.5 rounded border border-blue-800/40">
                    100% SUITE
                  </span>
                </div>
                <div>
                  <div className="text-2xl font-mono font-bold text-emerald-400">
                    {currentProject.testsPassed} passing
                  </div>
                  <div className="text-[11px] font-mono text-[#9ba1a6] pt-1">
                    {currentProject.testsFailed} failing · {currentProject.testsSkipped} skipped
                  </div>
                </div>
                <div className="text-[10px] font-mono text-[#9ba1a6] pt-1 border-t border-white/[0.04]">
                  Run duration: {currentProject.testTime}
                </div>
              </div>

              {/* Card 4: Deployment & Edge */}
              <div className="p-5 rounded-2xl bg-[#090b10] border border-white/[0.06] space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[10px] text-[#9ba1a6] uppercase tracking-wider flex items-center gap-1.5">
                    <Server className="w-3 h-3 text-orange-400" />
                    <span>DEPLOYMENT</span>
                  </span>
                  <span className="text-[9px] font-mono text-amber-400 bg-amber-950/40 px-1.5 py-0.5 rounded border border-amber-800/40">
                    SIMULATED
                  </span>
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-[#f5f4ef] truncate">
                    {currentProject.deployTarget}
                  </div>
                  <div className="text-[11px] font-mono text-amber-400 font-semibold pt-1">
                    {currentProject.deployStatus}
                  </div>
                </div>
                <div className="text-[10px] font-mono text-[#9ba1a6] pt-1 border-t border-white/[0.04] truncate">
                  Target: {currentProject.deployUrl}
                </div>
              </div>
            </div>

            {/* Bottom Row: Chronological Activity Log & Automation Rules */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
              {/* Left (7 cols): Chronological Activity Log */}
              <div className="lg:col-span-7 p-5 rounded-2xl bg-[#090b10] border border-white/[0.06] space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <div className="text-xs font-mono text-[#9ba1a6] uppercase tracking-wider flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-orange-400" />
                    <span>CHRONOLOGICAL ACTIVITY STREAM</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#9ba1a6]">
                    Simulated lifecycle events
                  </span>
                </div>

                <div className="space-y-2.5 font-mono text-xs">
                  {currentProject.activityLogs.map((log, lIdx) => (
                    <div
                      key={lIdx}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-start justify-between gap-3"
                    >
                      <div className="flex items-start gap-2.5">
                        <span className="text-[#9ba1a6] text-[11px] shrink-0">{log.time}</span>
                        <span className="text-[#f5f4ef] leading-snug">{log.event}</span>
                      </div>
                      <span
                        className={`text-[9px] uppercase px-2 py-0.5 rounded border font-bold shrink-0 ${log.badgeColor}`}
                      >
                        {log.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right (5 cols): Automated Rules & Sentinel Policies */}
              <div className="lg:col-span-5 p-5 rounded-2xl bg-[#090b10] border border-white/[0.06] space-y-4">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <div className="text-xs font-mono text-[#9ba1a6] uppercase tracking-wider flex items-center gap-2">
                    <Workflow className="w-3.5 h-3.5 text-orange-400" />
                    <span>AUTOMATION SENTINELS</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">ACTIVE RULES</span>
                </div>

                <div className="space-y-2 font-mono text-xs">
                  {currentProject.automationHooks.map((hook, hIdx) => (
                    <div
                      key={hIdx}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center justify-between gap-2"
                    >
                      <div>
                        <div className="text-[#f5f4ef] font-semibold text-xs">{hook.name}</div>
                        <div className="text-[10px] text-[#9ba1a6]">trigger: {hook.trigger}</div>
                      </div>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-400 border border-emerald-800/40 font-bold">
                        {hook.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-[10px] font-mono text-[#9ba1a6] space-y-1">
                  <div className="text-[#f5f4ef] font-semibold uppercase">Sentinel Goal:</div>
                  <p className="leading-relaxed">
                    Zero manual intervention required to prevent broken builds or leaked credentials
                    from reaching remote environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 6. TECHNICAL STACK FOOTER */}
        {/* ========================================================================= */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-[#9ba1a6] mr-2">DevOps Exploration:</span>
            {[
              "CI/CD Pipelines",
              "Automated Lint & Test Gates",
              "Turbopack Optimization",
              "Edge Deployments",
              "Telemetry Observability",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.03] text-[#f5f4ef] border border-white/[0.08]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#9ba1a6]">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
            <span>Infrastructure Prototype in Active Research</span>
          </div>
        </div>
      </div>
    </section>
  );
}
