"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertTriangle,
  Search,
  Wrench,
  Lightbulb,
  Bot,
  Terminal,
  Activity,
  Flame,
} from "lucide-react";

interface Incident {
  id: string;
  project: string;
  badge: string;
  badgeType: "BUILT" | "BUILDING" | "EXPLORING" | "ILLUSTRATIVE";
  icon: typeof Bot;
  title: string;
  summary: string;
  problem: string;
  investigation: string;
  fix: string;
  lesson: string;
}

const INCIDENTS: Incident[] = [
  {
    id: "navigen",
    project: "NAVIGEN UGV",
    badge: "BUILT",
    badgeType: "BUILT",
    icon: Bot,
    title: "Raspberry Pi Camera Stream Stutter",
    summary: "High latency and dropped frames when processing obstacle detection on edge hardware.",
    problem:
      "When running OpenCV contour detection for obstacle segmentation alongside ROS 2 nodes on the Raspberry Pi 4, the camera feed stuttered significantly, introducing unacceptable navigation delays.",
    investigation:
      "Monitored CPU load via htop during live runs. The Pi's CPU cores were maxed out because the camera node was capturing uncompressed high-resolution frames, causing memory bus bottlenecks before path planning even received the image.",
    fix:
      "Lowered the camera capture resolution in code, skipped redundant intermediate frames, and cropped the region of interest strictly to the ground path ahead of the UGV wheels.",
    lesson:
      "On resource-constrained edge hardware, processing less data efficiently beats trying to optimize heavy computation.",
  },
  {
    id: "forge",
    project: "FORGE",
    badge: "BUILDING",
    badgeType: "BUILDING",
    icon: Terminal,
    title: "AI Agent Modifying Non-Existent Files",
    summary: "Agent generated plausible code edits but targeted imaginary folders and files.",
    problem:
      "During early terminal agent testing, prompts requesting a feature implementation produced code that referenced directory structures and import paths that didn't exist in the project.",
    investigation:
      "Examined agent prompt logs. The model was generating code based on generic boilerplate conventions rather than inspecting the actual workspace directory tree.",
    fix:
      "Added a mandatory INSPECT phase to the pipeline that requires the agent to list real directories and read file contents before proposing any diffs.",
    lesson:
      "An AI agent is only as good as the context you feed it. Grounding comes before coding.",
  },
  {
    id: "pulse",
    project: "PULSE",
    badge: "BUILDING",
    badgeType: "BUILDING",
    icon: Activity,
    title: "State Overwrites on Disconnect & Reconnect",
    summary: "Simulated offline clients accidentally wiped changes made by collaborators.",
    problem:
      "During prototype testing of real-time state syncing, when a client temporarily disconnected and reconnected, local pending changes wiped remote updates made in the meantime.",
    investigation:
      "Testing without a clear authoritative source meant whichever client pushed changes last simply erased whatever happened while it was offline.",
    fix:
      "Designing a planned state model where the backend maintains authoritative sequencing, and reconnecting clients request change diffs rather than pushing raw state snapshots.",
    lesson:
      "In collaborative multi-user applications, handling disconnection and state reconciliation is significantly harder than the online case.",
  },
  {
    id: "lpg",
    project: "LPG DASHBOARD",
    badge: "BUILT",
    badgeType: "BUILT",
    icon: Flame,
    title: "Duplicate Firebase Listeners on Route Switch",
    summary: "Telemetry charts lagged and updated multiple times per second after switching views.",
    problem:
      "After navigating back and forth between dashboard views, sensor readings started stuttering and updating multiple times per second, consuming unnecessary memory.",
    investigation:
      "Checked browser network and memory tabs. Every time the dashboard component mounted, it attached a new Firebase real-time database listener without removing previous ones.",
    fix:
      "Added proper cleanup return functions in React useEffect hooks to detach Firebase event listeners whenever components unmount.",
    lesson:
      "Always clean up real-time subscriptions in React lifecycles, or background connections silently multiply.",
  },
];

export function ThingsThatBroke() {
  const [activeId, setActiveId] = useState<string>("navigen");
  const activeIncident = INCIDENTS.find((i) => i.id === activeId) || INCIDENTS[0];

  return (
    <section id="breakdowns" className="py-24 md:py-36 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Orientation */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/[0.08]">
          <div className="text-xs font-mono text-orange-400 uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <span className="font-bold">04 /</span>
            <span>ENGINEERING AUTOPSY</span>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/[0.04] text-[#9ba1a6] border border-white/[0.08]">
            Genuine Post-Mortems
          </span>
        </div>

        {/* Headline & Philosophy */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#f5f4ef] tracking-tight leading-[1.05] mb-4">
            THINGS THAT BROKE
          </h2>
          <p className="text-xl sm:text-2xl text-orange-400 font-medium mb-4">
            &ldquo;Building isn&apos;t a straight line.&rdquo;
          </p>
          <p className="text-base sm:text-lg text-[#9ba1a6] font-light leading-relaxed">
            Every real project breaks during development. What matters isn&apos;t pretending things
            worked on the first try, but knowing how to inspect the failure, fix the root cause,
            and keep the lesson for the next build.
          </p>
        </div>

        {/* Interactive Breakdown Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Incident Selector Tabs */}
          <div className="lg:col-span-4 space-y-3">
            {INCIDENTS.map((item) => {
              const Icon = item.icon;
              const isSelected = activeId === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`w-full p-4 rounded-2xl text-left transition-all border cursor-pointer ${
                    isSelected
                      ? "bg-[#161922] border-orange-500/50 shadow-xl"
                      : "bg-[#0d0f14]/60 border-white/[0.06] hover:bg-white/[0.03] opacity-75 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-orange-400 font-bold flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{item.project}</span>
                    </span>
                    <span
                      className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded border font-bold ${
                        item.badgeType === "BUILT"
                          ? "bg-emerald-950/40 text-emerald-400 border-emerald-800/40"
                          : "bg-orange-950/40 text-orange-300 border-orange-800/40"
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-[#f5f4ef] mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] font-mono text-[#9ba1a6] line-clamp-2">
                    {item.summary}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: 4-Step Engineering Breakdown Card */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIncident.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="p-6 sm:p-8 rounded-3xl bg-[#11141d] border border-white/[0.1] shadow-2xl space-y-6"
              >
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
                  <div>
                    <div className="text-[11px] font-mono text-orange-400 uppercase tracking-wider mb-1">
                      INCIDENT CASE STUDY · {activeIncident.project}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#f5f4ef]">
                      {activeIncident.title}
                    </h3>
                  </div>

                  <span
                    className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded-full border font-bold ${
                      activeIncident.badgeType === "BUILT"
                        ? "bg-emerald-950/40 text-emerald-400 border-emerald-800/40"
                        : "bg-orange-950/40 text-orange-300 border-orange-800/40"
                    }`}
                  >
                    {activeIncident.badge}
                  </span>
                </div>

                {/* 4 Pillars: Problem -> Investigation -> Fix -> Lesson */}
                <div className="space-y-4 font-mono text-xs">
                  {/* 1. PROBLEM */}
                  <div className="p-4 rounded-xl bg-red-950/15 border border-red-900/30 space-y-1.5">
                    <div className="flex items-center gap-2 text-red-400 font-bold tracking-wider uppercase text-[11px]">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>01 — PROBLEM (What actually went wrong?)</span>
                    </div>
                    <p className="text-[#f5f4ef] font-light leading-relaxed">
                      {activeIncident.problem}
                    </p>
                  </div>

                  {/* 2. INVESTIGATION */}
                  <div className="p-4 rounded-xl bg-blue-950/15 border border-blue-900/30 space-y-1.5">
                    <div className="flex items-center gap-2 text-blue-400 font-bold tracking-wider uppercase text-[11px]">
                      <Search className="w-3.5 h-3.5" />
                      <span>02 — INVESTIGATION (How did I figure it out?)</span>
                    </div>
                    <p className="text-[#f5f4ef] font-light leading-relaxed">
                      {activeIncident.investigation}
                    </p>
                  </div>

                  {/* 3. FIX */}
                  <div className="p-4 rounded-xl bg-amber-950/15 border border-amber-900/30 space-y-1.5">
                    <div className="flex items-center gap-2 text-amber-400 font-bold tracking-wider uppercase text-[11px]">
                      <Wrench className="w-3.5 h-3.5" />
                      <span>03 — FIX (What did I change?)</span>
                    </div>
                    <p className="text-[#f5f4ef] font-light leading-relaxed">
                      {activeIncident.fix}
                    </p>
                  </div>

                  {/* 4. LESSON */}
                  <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/40 space-y-1.5">
                    <div className="flex items-center gap-2 text-emerald-400 font-bold tracking-wider uppercase text-[11px]">
                      <Lightbulb className="w-3.5 h-3.5" />
                      <span>04 — LESSON (What did I learn?)</span>
                    </div>
                    <p className="text-emerald-200 font-light leading-relaxed">
                      {activeIncident.lesson}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
