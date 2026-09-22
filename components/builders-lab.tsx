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
  ShieldAlert,
  FileCheck2,
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
    title: "NAVIGEN UGV",
    category: "ROBOTICS · AUTONOMOUS SYSTEMS",
    flow: "CAMERA → PERCEPTION → DECISION → MOTOR",
    techs: ["ROS 2", "OpenCV", "Nav2", "Raspberry Pi", "ESP32"],
    status: "BUILT",
    statusColor: "badge-built",
    description:
      "Vision-based autonomous navigation for an unmanned ground vehicle, running end-to-end on physical hardware outdoors.",
    details:
      "Five-stage perception-to-motor pipeline built for Smart India Hackathon 2025. Full story in the NAVIGEN case study.",
    icon: Bot,
  },
  {
    id: "fraud",
    number: "02",
    title: "FRAUD AGENT",
    category: "AI AGENTS · FINANCIAL CRIME",
    flow: "GRAPH → PATTERNS → AGENT → RISK → NBA",
    techs: ["LangGraph", "TigerGraph", "FastAPI", "React"],
    status: "BUILT",
    statusColor: "badge-built",
    description:
      "Agentic fraud investigation over a synthetic fraud graph — pattern detection, deterministic risk scoring, and next-best actions.",
    details:
      "Public repository with a TigerGraph GSQL schema, local graph simulator, LangGraph agent loop, and a React investigation dashboard.",
    icon: ShieldAlert,
  },
  {
    id: "iot",
    number: "03",
    title: "LPG DASHBOARD",
    category: "REAL-TIME IOT · TELEMETRY",
    flow: "MQ-6 SENSOR → FIREBASE → DASHBOARD → AUTO-VALVE",
    techs: ["React", "Vite", "Firebase", "Recharts", "Framer Motion"],
    status: "BUILT",
    statusColor: "badge-built",
    description:
      "Real-time gas concentration and valve automation interface streaming telemetry with live thresholds and activity logs.",
    details:
      "Connects physical sensor telemetry via Firebase Realtime Database to an animated web dashboard with automatic valve emergency alerts.",
    icon: Wifi,
  },
  {
    id: "schemesaathi",
    number: "04",
    title: "SCHEMESAATHI",
    category: "AI · ELIGIBILITY SYSTEMS",
    flow: "QUERY → LLM → ELIGIBILITY ENGINE → RAG → OCR",
    techs: ["FastAPI", "React", "RAG", "OCR", "Rules Engine"],
    status: "BUILDING",
    statusColor: "badge-building",
    description:
      "Government scheme navigator where the LLM handles language understanding and a deterministic engine decides eligibility.",
    details:
      "Phase 1 scaffold with a four-member team across AI/RAG, eligibility engine, OCR documents, and frontend integration.",
    icon: FileCheck2,
  },
  {
    id: "forge",
    number: "05",
    title: "FORGE",
    category: "AI AGENTS · DEVELOPER TOOLING",
    flow: "TASK → PLAN → INSPECT → CODE → TEST → REVIEW",
    techs: ["AI Agents", "CLI", "Automation", "Developer Tooling"],
    status: "BUILDING",
    statusColor: "badge-building",
    description:
      "AI software engineering agent — plan, inspect, code, test, and review software directly from the terminal.",
    details:
      "Building a developer tool that explores how AI agents can participate in real software engineering workflows with strict context inspection gates.",
    icon: Terminal,
  },
  {
    id: "pulse",
    number: "06",
    title: "PULSE",
    category: "REAL-TIME · MULTIPLAYER WORKSPACE",
    flow: "STATE → SYNC → PRESENCE → CONFLICTS",
    techs: ["Next.js", "React", "Realtime", "Database", "Product UX"],
    status: "BUILDING",
    statusColor: "badge-building",
    description:
      "Real-time collaborative workspace — shared state, presence, and full-stack product architecture.",
    details:
      "A workspace where teams manage projects, tasks, documents, and discussions together in real time. In active development with a prototype UI.",
    icon: Users,
  },
  {
    id: "atlas",
    number: "07",
    title: "ATLAS",
    category: "AI · RAG · KNOWLEDGE SYSTEMS",
    flow: "DOCUMENTS → RETRIEVE → EVIDENCE",
    techs: ["RAG", "Embeddings", "Vector Search", "Grounded Retrieval", "Attribution"],
    status: "BUILDING",
    statusColor: "badge-building",
    description:
      "Knowledge workspace for document ingestion, semantic retrieval, grounded generation, and evidence-first answers.",
    details:
      "Turn scattered knowledge into answers you can trace. In active development — chunking strategies, embeddings, and deterministic source attribution.",
    icon: BookOpen,
  },
  {
    id: "nexus",
    number: "08",
    title: "NEXUS",
    category: "DEVOPS · AUTOMATION",
    flow: "CODE → BUILD → DEPLOY → MONITOR",
    techs: ["CI/CD", "Turbopack", "Automated Gates", "Edge Rollouts", "Observability"],
    status: "BUILDING",
    statusColor: "badge-building",
    description:
      "DevOps and developer infrastructure — from commit to deployment, see what happens in between.",
    details:
      "Connecting source repositories, automated test gates, build artifacts, and edge health observability. Pipeline UI is still simulated while the system is built.",
    icon: Boxes,
  },
];

export function BuildersLab() {
  const [activeId, setActiveId] = useState<string>("ugv");

  return (
    <section id="lab" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header (Level 02 Heading) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12 pb-5 border-b border-white/[0.08]">
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
            Active prototypes and open experiments — each row labeled by what it actually is.
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
                className={`relative rounded-2xl p-6 sm:p-8 cursor-pointer transition-all duration-300 border focus-visible:ring-2 focus-visible:ring-orange-500/50 ${
                  isActive
                    ? "bg-[#161922] border-white/[0.18] shadow-2xl opacity-100"
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
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-orange-400 font-medium pt-0.5">
                        <span className="text-[10px] text-[#9ba1a6] uppercase tracking-wider">
                          Flow:
                        </span>
                        <span className="break-words min-w-0">{item.flow}</span>
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
                              {item.status === "BUILT"
                                ? "Shipped · Running"
                                : item.status === "BUILDING"
                                ? "Active Development"
                                : "Exploration Prototype"}
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
