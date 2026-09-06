"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Users,
  Activity,
  Layers,
  Database,
  RefreshCw,
  Sparkles,
  CheckCircle2,
  Clock,
  Radio,
  FileText,
  ListTodo,
  Workflow,
  Cpu,
  Terminal,
  Zap,
} from "lucide-react";

// Storytelling steps: 5 challenges of real-time systems
const REALTIME_CHALLENGES = [
  {
    step: "01",
    concept: "STATE",
    question: "What happens when application state changes?",
    detail:
      "Every user action triggers state mutations. In a multiplayer canvas, local state must be treated as optimistic and reconcile immediately without awaiting network roundtrips.",
    indicator: "Optimistic updates & local mutation buffers",
  },
  {
    step: "02",
    concept: "SYNCHRONIZATION",
    question: "How does another client learn about that change?",
    detail:
      "Changes broadcast over persistent WebSockets to subscribed rooms. Payloads must stay lightweight, serialized as compact delta diffs rather than full document copies.",
    indicator: "WebSocket pub/sub & delta diff broadcasting",
  },
  {
    step: "03",
    concept: "PRESENCE",
    question: "How do users know who else is active?",
    detail:
      "Heartbeats, cursor coordinates, and focus telemetry establish awareness. Ephemeral presence data is broadcast rapidly without overwhelming persistent database storage.",
    indicator: "Heartbeat pings, live focus & ephemeral state",
  },
  {
    step: "04",
    concept: "CONFLICTS",
    question: "What happens when two people change the same thing?",
    detail:
      "Concurrent edits create race conditions. Resolving them requires deterministic convergence via Conflict-Free Replicated Data Types (CRDTs) or Last-Write-Wins timestamps.",
    indicator: "Deterministic conflict resolution (LWW / CRDT)",
  },
  {
    step: "05",
    concept: "EXPERIENCE",
    question: "How do we make all of this feel instant?",
    detail:
      "Perceived latency must approach zero. Micro-animations, subtle indicators, and seamless re-connection fallbacks keep users immersed in the shared flow.",
    indicator: "Sub-50ms perceived latency & zero-distraction UX",
  },
];

// Architecture layers
const PLANNED_ARCH_NODES = [
  { id: "user", label: "USER", role: "Browser Client / Multi-Device UI", icon: Users },
  { id: "frontend", label: "NEXT.JS / REACT", role: "Optimistic UI, React Server Components", icon: Layers },
  { id: "server", label: "API / SERVER", role: "Node.js Edge Handlers & Authentication", icon: Cpu },
  { id: "realtime", label: "REAL-TIME LAYER", role: "WebSocket Gateway & Pub/Sub Events", icon: Radio },
  { id: "db", label: "DATABASE", role: "Postgres / Relational Schema & Audits", icon: Database },
  { id: "state", label: "COLLABORATIVE STATE", role: "Shared Synchronized Room Data", icon: Workflow },
];

export function PulseFeatured() {
  const prefersReduced = useReducedMotion();

  // Active navigation tab in mock workspace
  const [activeTab, setActiveTab] = useState<"tasks" | "overview" | "docs" | "activity">("tasks");

  // Real-time moment simulated state
  // Navigation Pipeline task transitions: BUILDING -> REVIEW -> BUILDING
  const [taskState, setTaskState] = useState<"BUILDING" | "REVIEW">("BUILDING");
  const [lastEventTime, setLastEventTime] = useState("02:41");
  const [eventTriggered, setEventTriggered] = useState(false);
  const [activeChallengeIndex, setActiveChallengeIndex] = useState(0);

  // Auto-simulate the collaborative moment gently if user doesn't toggle
  useEffect(() => {
    if (prefersReduced) return;

    const interval = setInterval(() => {
      setTaskState((prev) => {
        const next = prev === "BUILDING" ? "REVIEW" : "BUILDING";
        setEventTriggered(true);
        const now = new Date();
        const mins = String(now.getMinutes()).padStart(2, "0");
        const secs = String(now.getSeconds()).padStart(2, "0");
        setLastEventTime(`02:${mins.slice(-1)}${secs.slice(-1)}`);
        return next;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [prefersReduced]);

  const handleManualToggle = () => {
    setTaskState((prev) => (prev === "BUILDING" ? "REVIEW" : "BUILDING"));
    setEventTriggered(true);
    const now = new Date();
    const mins = String(now.getMinutes()).padStart(2, "0");
    const secs = String(now.getSeconds()).padStart(2, "0");
    setLastEventTime(`02:${mins.slice(-1)}${secs.slice(-1)}`);
  };

  return (
    <section id="pulse" className="py-24 md:py-36 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* ========================================================================= */}
        {/* 1. SECTION ORIENTATION & EYEBROW (Level 02) */}
        {/* ========================================================================= */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/[0.08]">
          <div className="text-xs font-mono text-[#f97316] uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
            <span className="font-bold">03 /</span>
            <span>FULL-STACK / REAL-TIME PRODUCT</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="px-3 py-0.5 rounded-full bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/30 font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]" />
              BUILDING
            </span>
            <span className="text-[#9ba1a6] hidden sm:inline">Active Exploration</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. HEADLINE & EDITORIAL POSITIONING (Level 01) */}
        {/* ========================================================================= */}
        <div className="max-w-4xl mb-12">
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black text-[#f5f4ef] tracking-tighter leading-[0.95] mb-4">
            PULSE
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-[#f97316] font-bold tracking-tight mb-4">
            Real-Time Collaborative Workspace
          </p>
          <blockquote className="text-xl sm:text-2xl text-[#f5f4ef] font-light italic border-l-2 border-[#f97316]/60 pl-4 my-4">
            &ldquo;Work together. See everything.&rdquo;
          </blockquote>
          <p className="text-base sm:text-lg text-[#9ba1a6] font-light leading-relaxed max-w-2xl mt-4">
            I&apos;m exploring how real-time state, collaboration, and thoughtful product design come
            together in a full-stack application.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 3. MAIN VISUAL: COLLABORATIVE WORKSPACE INTERFACE */}
        {/* ========================================================================= */}
        <div className="my-10 rounded-3xl bg-[#121620] border border-white/[0.1] shadow-2xl overflow-hidden">
          {/* Workspace Window Chrome */}
          <div className="px-6 py-4 bg-[#0d0f14] border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="h-4 w-px bg-white/10 mx-1" />
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="font-bold text-[#f5f4ef] tracking-wider">PULSE</span>
                <span className="text-[#9ba1a6]">/</span>
                <span className="text-[#9ba1a6]">Workspace</span>
                <span className="text-[#9ba1a6]">/</span>
                <span className="text-[#f97316] font-medium">NAVIGEN</span>
              </div>
            </div>

            {/* Authenticity Disclaimer Tag */}
            <div className="text-[10px] font-mono text-[#9ba1a6] uppercase tracking-wider px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08]">
              * Illustrative Product Interface
            </div>
          </div>

          {/* Navigation Bar inside the product */}
          <div className="px-6 py-3 bg-[#161a26] border-b border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-1 sm:gap-2">
              {[
                { id: "overview", label: "Overview", icon: Layers },
                { id: "tasks", label: "Tasks", icon: ListTodo },
                { id: "docs", label: "Docs", icon: FileText },
                { id: "activity", label: "Activity", icon: Activity },
              ].map((tab) => {
                const Icon = tab.icon;
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                    className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                      isSelected
                        ? "bg-[#0d0f14] text-[#f5f4ef] font-bold border border-white/[0.12] shadow-sm"
                        : "text-[#9ba1a6] hover:text-[#f5f4ef] hover:bg-white/[0.03]"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Live Synchronizing Badge */}
            <div className="flex items-center gap-2 text-[11px] text-[#84a98c]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#84a98c] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#84a98c]" />
              </span>
              <span className="font-mono">Sync Channel: Active</span>
            </div>
          </div>

          {/* Main Product Canvas: Split Presence & Task Board */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Presence Visualization ("ACTIVE NOW") */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-5 rounded-2xl bg-[#0d0f14] border border-white/[0.08] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <Users className="w-3.5 h-3.5 text-[#f97316]" />
                    <span className="text-xs font-mono text-[#f5f4ef] font-bold uppercase tracking-wider">
                      ACTIVE NOW
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#84a98c] bg-[#84a98c]/10 px-2 py-0.5 rounded border border-[#84a98c]/20">
                    2 Present
                  </span>
                </div>

                {/* User 1: Nikhil */}
                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="relative mt-0.5">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#f97316] to-amber-300 flex items-center justify-center text-[11px] font-black text-[#0d0f14]">
                      N
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0d0f14]" />
                  </div>
                  <div className="flex-1 min-w-0 font-mono">
                    <div className="text-xs font-bold text-[#f5f4ef] flex items-center justify-between">
                      <span>Nikhil</span>
                      <span className="text-[10px] text-[#9ba1a6]/60 font-normal">Host</span>
                    </div>
                    <div className="text-[11px] text-[#84a98c] flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#84a98c] animate-pulse" />
                      <span>Editing Navigation Plan</span>
                    </div>
                  </div>
                </div>

                {/* User 2: Collaborator */}
                <div className="flex items-start gap-3 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="relative mt-0.5">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-400 flex items-center justify-center text-[11px] font-black text-white">
                      C
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#0d0f14]" />
                  </div>
                  <div className="flex-1 min-w-0 font-mono">
                    <div className="text-xs font-bold text-[#f5f4ef] flex items-center justify-between">
                      <span>Collaborator</span>
                      <span className="text-[10px] text-[#9ba1a6]/60 font-normal">Reviewer</span>
                    </div>
                    <div className="text-[11px] text-amber-300 flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      <span>Reviewing Camera Pipeline</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-[10px] font-mono text-[#9ba1a6]/70 leading-relaxed border-t border-white/[0.06]">
                  * Visual mockup illustrating ephemeral presence detection &amp; live room roster.
                </div>
              </div>

              {/* Real-Time Moment Interactive Control */}
              <div className="p-4 rounded-2xl bg-[#0d0f14] border border-white/[0.08] space-y-3 font-mono">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-[#9ba1a6]">Simulate Mutation:</span>
                  <span className="text-[#f97316] text-[10px] uppercase font-bold">
                    Illustrative Event
                  </span>
                </div>
                <button
                  onClick={handleManualToggle}
                  className="w-full py-2.5 px-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-semibold text-[#f5f4ef] flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-[#f97316]" />
                  <span>Trigger Task Status Change</span>
                </button>
              </div>
            </div>

            {/* Right Column: Interactive Tasks & Real-Time Transition Moment */}
            <div className="lg:col-span-8 space-y-4">
              <div className="p-5 sm:p-6 rounded-2xl bg-[#0d0f14] border border-white/[0.08] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2 font-mono">
                    <ListTodo className="w-4 h-4 text-[#f97316]" />
                    <span className="text-xs text-[#f5f4ef] font-bold uppercase tracking-wider">
                      PROJECT TASKS
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#9ba1a6]">
                    Sprint: SIH 2025 Milestones
                  </span>
                </div>

                <div className="space-y-2.5">
                  {/* Task 1: Camera Integration (Static REVIEW) */}
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                      <div>
                        <div className="text-xs font-mono font-bold text-[#f5f4ef]">
                          Camera Integration
                        </div>
                        <div className="text-[11px] font-mono text-[#9ba1a6]">
                          V4L2 OpenCV stream with edge thresholding
                        </div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase bg-blue-950/40 text-blue-300 border border-blue-800/40">
                      REVIEW
                    </span>
                  </div>

                  {/* Task 2: Navigation Pipeline (REAL-TIME MOMENT) */}
                  <div
                    className={`p-3.5 rounded-xl border transition-all duration-500 flex items-center justify-between gap-3 ${
                      taskState === "REVIEW"
                        ? "bg-[#f97316]/10 border-[#f97316]/50 shadow-lg shadow-[#f97316]/10 scale-[1.01]"
                        : "bg-white/[0.03] border-white/[0.08]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 rounded-full transition-colors ${
                          taskState === "REVIEW" ? "bg-[#f97316]" : "bg-emerald-400"
                        }`}
                      />
                      <div>
                        <div className="text-xs font-mono font-bold text-[#f5f4ef] flex items-center gap-2">
                          <span>Navigation Pipeline</span>
                          {eventTriggered && (
                            <span className="text-[9px] font-mono text-[#f97316] uppercase animate-pulse">
                              ● Live Update
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] font-mono text-[#9ba1a6]">
                          Pure pursuit waypoint planner &amp; obstacle avoidance
                        </div>
                      </div>
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.span
                        key={taskState}
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.2 }}
                        className={`px-3 py-1 rounded-md text-[10px] font-mono font-black tracking-wider uppercase border ${
                          taskState === "REVIEW"
                            ? "bg-[#f97316]/20 text-[#f97316] border-[#f97316]/40"
                            : "bg-emerald-950/40 text-emerald-300 border-emerald-800/40"
                        }`}
                      >
                        {taskState}
                      </motion.span>
                    </AnimatePresence>
                  </div>

                  {/* Task 3: Motor Control (Static DONE) */}
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between gap-3 opacity-80">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <div>
                        <div className="text-xs font-mono font-bold text-[#f5f4ef]">
                          Motor Control
                        </div>
                        <div className="text-[11px] font-mono text-[#9ba1a6]">
                          ESP32 differential PWM driver with hardware failsafe
                        </div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase bg-emerald-950/30 text-emerald-400 border border-emerald-800/30">
                      DONE
                    </span>
                  </div>
                </div>

                {/* Real-time Activity Feed Event */}
                <div className="mt-4 pt-3 border-t border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs">
                  <div className="flex items-center gap-2 text-[#9ba1a6]">
                    <Clock className="w-3.5 h-3.5 text-[#f97316]" />
                    <span className="text-[11px]">{lastEventTime}</span>
                    <span className="text-white/20">·</span>
                    <span className="text-[#f5f4ef] font-medium text-[11px]">
                      Task moved:{" "}
                      <span className="text-emerald-400">
                        {taskState === "REVIEW" ? "BUILDING" : "REVIEW"}
                      </span>{" "}
                      →{" "}
                      <span className="text-[#f97316] font-bold">{taskState}</span>
                    </span>
                  </div>
                  <span className="text-[10px] text-[#84a98c]">Event broadcasted · 24ms</span>
                </div>
              </div>

              {/* AI Feature Concept (Optional Supporting Capability - Explicitly Labeled) */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0d0f14]/80 border border-white/[0.08] space-y-3 font-mono">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-[#f5f4ef] font-bold">
                    <Sparkles className="w-3.5 h-3.5 text-[#f97316]" />
                    <span>AI ACTIVITY DIGEST</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/[0.04] text-[#9ba1a6] border border-white/[0.08]">
                    PLANNED CAPABILITY
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs text-[#9ba1a6] italic">
                  &ldquo;Summarize what changed in this project this week.&rdquo;
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                    <div className="text-[10px] text-[#9ba1a6]">Completed</div>
                    <div className="text-[#f5f4ef] font-bold mt-0.5">3 tasks</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                    <div className="text-[10px] text-[#9ba1a6]">In Review</div>
                    <div className="text-[#f97316] font-bold mt-0.5">2 tasks</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                    <div className="text-[10px] text-[#9ba1a6]">Blockers</div>
                    <div className="text-emerald-400 font-bold mt-0.5">0 reported</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                    <div className="text-[10px] text-[#9ba1a6]">Most Active</div>
                    <div className="text-[#f5f4ef] font-bold mt-0.5 truncate">Nav Pipeline</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. PROJECT STORY: WHY I'M BUILDING PULSE */}
        {/* ========================================================================= */}
        <div className="my-20 p-8 sm:p-12 rounded-3xl bg-[#090b10] border border-white/[0.08]">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono text-[#f97316] uppercase tracking-widest mb-3 flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>THE ARCHITECTURAL MOTIVATION</span>
            </div>
            <h3 className="text-3xl sm:text-5xl font-black text-[#f5f4ef] tracking-tight mb-6">
              WHY I&apos;M BUILDING PULSE
            </h3>
            <p className="text-lg sm:text-xl text-[#f5f4ef] font-light leading-relaxed">
              &ldquo;I wanted to build something that goes beyond traditional CRUD applications and
              forces me to think about what happens when multiple people interact with the same
              product at the same time.&rdquo;
            </p>
          </div>

          {/* Typography & Concept Reveals */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 font-mono">
            {[
              { label: "STATE", sub: "Optimistic & Local" },
              { label: "SYNCHRONIZATION", sub: "Delta Diff Pub/Sub" },
              { label: "PRESENCE", sub: "Live Focus Roster" },
              { label: "DATABASES", sub: "Relational Persistence" },
              { label: "REAL-TIME EVENTS", sub: "Sub-50ms Broadcast" },
              { label: "PRODUCT UX", sub: "Effortless Flow" },
            ].map((concept) => (
              <div
                key={concept.label}
                className="p-4 rounded-xl bg-[#11141d] border border-white/[0.06] hover:border-[#f97316]/40 transition-colors"
              >
                <div className="text-xs font-bold text-[#f5f4ef] tracking-wider mb-1">
                  {concept.label}
                </div>
                <div className="text-[10px] text-[#9ba1a6]">{concept.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. TECHNICAL CONCEPT: PLANNED ARCHITECTURE */}
        {/* ========================================================================= */}
        <div className="my-20 p-8 sm:p-12 rounded-3xl bg-[#11141d] border border-white/[0.08] shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-10 pb-4 border-b border-white/[0.08]">
            <div>
              <div className="text-xs font-mono text-[#f97316] uppercase tracking-widest mb-1">
                SYSTEM DESIGN
              </div>
              <h4 className="text-2xl sm:text-3xl font-black text-[#f5f4ef] tracking-tight">
                FULL-STACK ARCHITECTURE
              </h4>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/30 self-start sm:self-auto">
              PLANNED ARCHITECTURE
            </span>
          </div>

          {/* Architecture Flow Pipeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 relative">
            {PLANNED_ARCH_NODES.map((node, idx) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.id}
                  className="p-4 rounded-2xl bg-[#090b10] border border-white/[0.08] flex flex-col justify-between min-h-[140px] relative group hover:border-[#f97316]/50 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono font-bold text-[#9ba1a6]">
                        0{idx + 1}
                      </span>
                      <Icon className="w-4 h-4 text-[#f97316]" />
                    </div>
                    <div className="text-xs font-bold text-[#f5f4ef] leading-snug mb-1">
                      {node.label}
                    </div>
                  </div>
                  <div className="text-[10px] font-mono text-[#9ba1a6] leading-relaxed">
                    {node.role}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 text-[11px] font-mono text-[#9ba1a6]/80">
            * Authenticity Note: Pulse is currently in design and prototyping; technologies and architecture represent planned engineering choices rather than production deployments.
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 6. REAL-TIME STORYTELLING: 5 CHALLENGES */}
        {/* ========================================================================= */}
        <div className="my-20">
          <div className="max-w-2xl mb-10">
            <div className="text-xs font-mono text-[#f97316] uppercase tracking-widest mb-2 flex items-center gap-2">
              <Zap className="w-3.5 h-3.5" />
              <span>THE ENGINEERING FRONTIER</span>
            </div>
            <h3 className="text-3xl sm:text-5xl font-black text-[#f5f4ef] tracking-tight">
              THE 5 CHALLENGES OF REAL-TIME
            </h3>
            <p className="text-sm font-mono text-[#9ba1a6] mt-2">
              What actually happens between two keyboards separated by hundreds of miles.
            </p>
          </div>

          <div className="space-y-3">
            {REALTIME_CHALLENGES.map((item, idx) => {
              const isActive = activeChallengeIndex === idx;

              return (
                <div
                  key={item.step}
                  onClick={() => setActiveChallengeIndex(idx)}
                  onMouseEnter={() => setActiveChallengeIndex(idx)}
                  className={`p-6 sm:p-8 rounded-2xl border transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#141824] border-[#f97316]/50 shadow-xl opacity-100"
                      : "bg-[#090b10] border-white/[0.04] opacity-60 hover:opacity-90 hover:bg-[#0f121a]"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                      <span className="font-mono text-sm text-[#f97316] font-bold">
                        {item.step}
                      </span>
                      <div>
                        <div className="text-xs font-mono text-[#9ba1a6] tracking-widest uppercase">
                          {item.concept}
                        </div>
                        <h4 className="text-lg sm:text-xl font-bold text-[#f5f4ef] mt-0.5">
                          {item.question}
                        </h4>
                      </div>
                    </div>

                    <div className="text-xs font-mono text-[#84a98c] flex items-center gap-2 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#84a98c]" />
                      <span>{item.indicator}</span>
                    </div>
                  </div>

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-white/[0.08] text-sm text-[#9ba1a6] font-light leading-relaxed max-w-3xl"
                    >
                      {item.detail}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Story Finale Statement */}
          <div className="mt-14 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#141824] via-[#0d0f14] to-[#121620] border border-white/[0.08] text-center max-w-4xl mx-auto">
            <div className="text-xs font-mono text-[#f97316] uppercase tracking-widest mb-4">
              THE COLLABORATION PARADOX
            </div>
            <p className="text-2xl sm:text-4xl md:text-5xl font-black text-[#f5f4ef] tracking-tight leading-snug">
              &ldquo;The hard part isn&apos;t making data move. <br className="hidden sm:inline" />
              <span className="text-[#f97316]">
                It&apos;s making collaboration feel effortless.
              </span>&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
