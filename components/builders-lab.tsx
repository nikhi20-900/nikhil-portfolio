"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Wifi,
  Terminal,
  Users,
  BookOpen,
  Boxes,
  type LucideIcon,
} from "lucide-react";

interface LabItem {
  id: string;
  number: string;
  title: string;
  category: string;
  flow: string;
  techs: string[];
  status: "BUILDING" | "BUILT" | "EXPLORING";
  statusColor: string;
  description: string;
  details: string;
  icon: LucideIcon;
}

const LAB_ITEMS: LabItem[] = [
  {
    id: "ugv",
    number: "01",
    title: "AUTONOMOUS UGV",
    category: "ROBOTICS · EMBEDDED SYSTEMS",
    flow: "CAMERA → PERCEPTION → DECISION → MOTOR",
    techs: ["ROS 2", "Computer Vision", "Raspberry Pi", "ESP32", "Gazebo"],
    status: "BUILDING",
    statusColor: "text-emerald-400 bg-emerald-950/40 border-emerald-800/40",
    description:
      "Outdoor vision-based autonomous navigation stack for an Unmanned Ground Vehicle under real physical constraints.",
    details:
      "Integrating Nav2 pure pursuit controllers, differential PWM drive, and edge OpenCV contour analysis. Built for Smart India Hackathon 2025.",
    icon: Bot,
  },
  {
    id: "forge",
    number: "02",
    title: "FORGE",
    category: "AI AGENTS · DEVELOPER TOOLING",
    flow: "TASK → PLAN → INSPECT → CODE → TEST → REVIEW",
    techs: ["AI Agents", "CLI", "Automation", "Developer Tooling"],
    status: "BUILDING",
    statusColor: "text-orange-400 bg-orange-950/40 border-orange-800/40",
    description:
      "AI SOFTWARE ENGINEERING AGENT — An AI-assisted developer tool designed to help plan, analyze, code, test, debug, and review software directly from the terminal.",
    details:
      "Building a developer tool that explores how AI agents can participate in real software engineering workflows with strict context inspection gates.",
    icon: Terminal,
  },
  {
    id: "pulse",
    number: "03",
    title: "PULSE",
    category: "REAL-TIME · MULTIPLAYER WORKSPACE",
    flow: "STATE → SYNC → PRESENCE → CONFLICTS",
    techs: ["Next.js", "React", "Realtime", "Database", "Product UX"],
    status: "BUILDING",
    statusColor: "text-orange-400 bg-orange-950/40 border-orange-800/40",
    description:
      "REAL-TIME COLLABORATIVE WORKSPACE — Exploring real-time collaboration, shared state, and full-stack product architecture.",
    details:
      "A workspace where teams manage projects, tasks, documents, and discussions together in real time. Exploring optimistic UI, WebSocket sync, and collaborative state.",
    icon: Users,
  },
  {
    id: "atlas",
    number: "04",
    title: "ATLAS",
    category: "AI · RAG · KNOWLEDGE SYSTEMS",
    flow: "DOCUMENTS → RETRIEVE → EVIDENCE",
    techs: ["RAG", "Embeddings", "Vector Search", "Grounded Retrieval", "Attribution"],
    status: "BUILDING",
    statusColor: "text-orange-400 bg-orange-950/40 border-orange-800/40",
    description:
      "AI / RAG / KNOWLEDGE SYSTEMS — A knowledge workspace exploring document ingestion, semantic retrieval, grounded generation, and evidence-first answers.",
    details:
      "Turn scattered knowledge into answers you can trace. Exploring chunking strategies, vector embeddings, and strict deterministic source attribution.",
    icon: BookOpen,
  },
  {
    id: "nexus",
    number: "05",
    title: "NEXUS",
    category: "DEVOPS · AUTOMATION",
    flow: "CODE → BUILD → DEPLOY → MONITOR",
    techs: ["CI/CD", "Turbopack", "Automated Gates", "Edge Rollouts", "Observability"],
    status: "BUILDING",
    statusColor: "text-orange-400 bg-orange-950/40 border-orange-800/40",
    description:
      "DEVOPS / AUTOMATION / DEVELOPER INFRASTRUCTURE — From commit to deployment, seeing what happens in between.",
    details:
      "Connecting source repositories, automated test gates, immutable build artifacts, and edge health observability in one unified operational interface.",
    icon: Boxes,
  },
  {
    id: "iot",
    number: "06",
    title: "REAL-TIME IOT",
    category: "TELEMETRY & HARDWARE AUTOMATION",
    flow: "MQ-6 SENSOR → FIREBASE → DASHBOARD → AUTO-VALVE",
    techs: ["React", "Vite", "Firebase", "Recharts", "Framer Motion"],
    status: "BUILT",
    statusColor: "text-emerald-400 bg-emerald-950/40 border-emerald-800/40",
    description:
      "Real-time gas concentration and valve automation interface streaming telemetry with live thresholds and activity logs.",
    details:
      "Connects physical sensor telemetry via Firebase Realtime Database to an animated web dashboard with automatic valve emergency alerts.",
    icon: Wifi,
  },
];

export function BuildersLab() {
  const [activeId, setActiveId] = useState<string>("ugv");

  return (
    <section id="lab" className="py-24 md:py-36 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header (Level 02 Heading) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="text-xs font-mono text-[#9ba1a6] uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="text-orange-400 font-bold">01 /</span>
              <span>EXPERIMENTS &amp; PROTOTYPES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#f5f4ef] tracking-tight">
              BUILDER&apos;S LAB
            </h2>
          </div>
          <p className="text-sm font-mono text-[#9ba1a6] max-w-sm">
            Active prototypes, hardware integrations, and software experiments currently in
            progress.
          </p>
        </div>

        {/* Interactive Rows with Full Keyboard Accessibility */}
        <div className="space-y-4" role="region" aria-label="Builder's Lab Prototypes">
          {LAB_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                role="button"
                tabIndex={0}
                aria-expanded={isActive}
                data-lab-row="true"
                onMouseEnter={() => setActiveId(item.id)}
                onClick={() => setActiveId(item.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveId(item.id);
                  }
                }}
                className={`relative rounded-2xl p-6 sm:p-8 cursor-pointer transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-orange-500/50 ${
                  isActive
                    ? "bg-[#161922] border-white/[0.18] shadow-2xl opacity-100 scale-[1.005]"
                    : "bg-[#111319]/40 border-white/[0.04] opacity-55 hover:opacity-85 hover:bg-[#141720]"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {/* Left: Number + Title + Flow Preview */}
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                    <span className="font-mono text-sm sm:text-base text-[#9ba1a6] font-bold">
                      {item.number}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#f5f4ef] tracking-tight">
                          {item.title}
                        </h3>
                        <span className="text-[10px] font-mono text-[#9ba1a6] hidden sm:inline">
                          · {item.category}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border font-bold ${item.statusColor}`}
                        >
                          {item.status}
                        </span>
                      </div>

                      {/* Technical Pipeline Flow Preview */}
                      <div className="flex items-center gap-2 text-xs font-mono text-orange-400 font-medium pt-0.5">
                        <span className="text-[10px] text-[#9ba1a6] uppercase tracking-wider">
                          Flow:
                        </span>
                        <span>{item.flow}</span>
                      </div>

                      <div className="flex flex-wrap gap-2 text-xs font-mono text-[#9ba1a6] pt-1">
                        {item.techs.map((t, idx) => (
                          <span key={t}>
                            {t}
                            {idx < item.techs.length - 1 && (
                              <span className="ml-2 text-white/[0.2]">·</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Expand Arrow */}
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: isActive ? 90 : 0, x: isActive ? 4 : 0 }}
                      className="w-10 h-10 rounded-full border border-white/[0.1] flex items-center justify-center text-[#f5f4ef]"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>

                {/* Expanding Content Drawer */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="overflow-hidden border-t border-white/[0.08] pt-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                        <div className="md:col-span-8 space-y-3">
                          <p className="text-base text-[#f5f4ef] leading-relaxed">
                            {item.description}
                          </p>
                          <p className="text-xs sm:text-sm text-[#9ba1a6] leading-relaxed font-mono">
                            {item.details}
                          </p>
                        </div>

                        <div className="md:col-span-4 p-4 rounded-xl bg-[#0d0f14] border border-white/[0.06] flex items-center gap-3">
                          <div className="p-3 rounded-lg bg-white/[0.04] text-orange-400">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <div className="text-[10px] font-mono text-[#9ba1a6] uppercase">
                              Execution Mode
                            </div>
                            <div className="text-xs font-mono font-semibold text-[#f5f4ef]">
                              {item.status === "BUILT" ? "Production System" : "Hands-On Prototyping"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
