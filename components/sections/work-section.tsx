"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Cpu, Network, ShieldCheck, Flame, CheckCircle, AlertCircle, Eye } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { SpotlightCard } from "@/components/ui/spotlight-card";

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  year: string;
  role: string;
  category: string;
  problem: string;
  value: string;
  flow: string;
  tags: string[];
  status: "BUILT" | "BUILDING";
  icon: React.ElementType;
  github?: string;
  linkLabel: "VIEW SOURCE" | "OPEN REPOSITORY" | "VIEW CASE STUDY";
  implementedHeader: string;
  implemented: string[];
  notYet: string[];
  evidenceNote: string;
  metrics: { label: string; value: string }[];
}

const PROJECTS: ProjectItem[] = [
  {
    id: "fraud-agent",
    number: "01",
    title: "FRAUD INVESTIGATION AGENT",
    year: "2025",
    role: "Graph & Agentic Systems Architect",
    category: "AI SYSTEMS / GRAPH TECHNOLOGY",
    problem:
      "Static rule engines miss multi-entity fraud rings, while black-box ML models produce unexplainable scores auditors cannot defend.",
    value:
      "An agentic fraud investigation system combining graph-based pattern detection, LangGraph reasoning, deterministic risk scoring and next-best-action recommendations.",
    flow: "TigerGraph → Pattern Detection → LangGraph → Risk & Uncertainty → Next Best Action → Investigation Dashboard",
    tags: ["TigerGraph", "LangGraph", "FastAPI", "Python", "React", "TypeScript", "Tailwind CSS"],
    status: "BUILT",
    icon: Network,
    github: "https://github.com/nikhi20-900/fraud-investigation-agent",
    linkLabel: "VIEW SOURCE",
    implementedHeader: "IMPLEMENTED · VERIFIED IN REPO",
    implemented: [
      "Synthetic fraud graph fixtures — 133 vertices, 147 edges across 7 entity types (Customer, Account, Transaction, Card, Device, IP, Merchant)",
      "TigerGraph GSQL schema + in-memory local graph simulator",
      "6 heuristic pattern detectors (shared device ring, cluster, layering, velocity)",
      "LangGraph investigation agent with a stateful node loop",
      "Deterministic risk, confidence, and uncertainty engine",
      "Deterministic next-best-action recommendation engine",
      "FastAPI backend + React / TypeScript / Tailwind dashboard",
      "Offline evaluation suite and tests documented in the repo",
    ],
    notYet: [
      "Live TigerGraph cluster — schemas are written; the local simulator is the default runtime",
      "Hosted live demo — the platform runs locally (FastAPI + Vite), so there is no demo link here",
    ],
    evidenceNote: "Source, schema, agent loop, engines, and tests are in the repository.",
    metrics: [
      { label: "VERTICES", value: "7 Entity Types" },
      { label: "FIXTURES", value: "133 Vertices · 147 Edges" },
      { label: "PATTERNS", value: "6 GSQL Detectors" },
    ],
  },
  {
    id: "navigen",
    number: "02",
    title: "NAVIGEN",
    year: "2025",
    role: "Robotics & Perception Lead",
    category: "ROBOTICS / AUTONOMOUS NAVIGATION",
    problem:
      "Outdoor unmanned ground vehicles face unpredictable obstacles, requiring real-time vision perception and motor control under strict edge compute constraints.",
    value:
      "Vision-based autonomous navigation for an unmanned ground vehicle operating in outdoor environments.",
    flow: "Camera → Perception → Decision → Navigation → Motor Control",
    tags: ["ROS 2", "Python", "OpenCV", "Nav2", "Raspberry Pi", "ESP32", "Gazebo"],
    status: "BUILT",
    icon: Cpu,
    linkLabel: "VIEW CASE STUDY",
    implementedHeader: "IMPLEMENTED · DEMONSTRATED BUILD",
    implemented: [
      "Physical UGV · Raspberry Pi + ESP32 dual compute architecture",
      "Wide-angle optical sensor mounted on UGV mast capturing environmental feed at 30 FPS",
      "OpenCV obstacle segmentation, contour bounds, and costmap projection on edge hardware",
      "Nav2 path planning algorithm generating dynamic collision-free waypoints",
      "Pure pursuit regulated control calculating linear velocity and angular steering loops",
      "Closed-loop encoder feedback to high-torque DC motors via ESP32 dual PWM differential drive",
      "Simulated in Gazebo and deployed on a Raspberry Pi-powered UGV",
    ],
    notYet: [
      "Repository not public — hardware build for Smart India Hackathon 2025; repository not public",
      "Outdoor vision focus — pipeline optimized for outdoor terrain; no indoor LiDAR SLAM integration",
    ],
    evidenceNote: "Hardware build for Smart India Hackathon 2025 — repository not public.",
    metrics: [
      { label: "HARDWARE", value: "Physical UGV · RPi + ESP32" },
      { label: "RECOGNITION", value: "Smart India Hackathon 2025" },
      { label: "PIPELINE", value: "5 Stages · 30 FPS Vision" },
    ],
  },
  {
    id: "schemesaathi",
    number: "03",
    title: "SCHEMESAATHI",
    year: "2025",
    role: "Core Systems Lead",
    category: "AI / CIVIC TECHNOLOGY",
    problem:
      "LLMs generate convincing hallucinations when evaluating welfare eligibility, risking citizen misinformation on published government criteria.",
    value:
      "An AI government-scheme navigator that separates language understanding from deterministic eligibility evaluation.",
    flow: "User Query → LLM Extraction → RAG → Eligibility Engine → Documents/OCR → Result",
    tags: ["Python", "FastAPI", "React", "Vite", "RAG", "OCR", "Rules Engine"],
    status: "BUILDING",
    icon: ShieldCheck,
    github: "https://github.com/nikhi20-900/SchemeSaathi",
    linkLabel: "OPEN REPOSITORY",
    implementedHeader: "IMPLEMENTED · VERIFIED IN REPO",
    implemented: [
      "User profiling extracting citizen intent and demographic criteria from queries",
      "Architecture separating language understanding (LLM) from deterministic decision (Rules Engine)",
      "Deterministic eligibility engine: rules · same input → same answer",
      "Vector RAG knowledge retrieval for scholarship and education scheme gazettes",
      "Document metadata extraction pipeline via OCR",
    ],
    notYet: [
      "Phase 1 scaffold — 4-member team build actively in progress across AI/RAG, eligibility, OCR, and frontend",
      "Production deployment — currently scoped to scholarships and education schemes",
    ],
    evidenceNote: "Phase 1 scaffold with 4-member team build in public repository.",
    metrics: [
      { label: "STAGE", value: "Phase 1 Scaffold" },
      { label: "TEAM", value: "4-Member Team Build" },
      { label: "LOGIC", value: "Same Input → Same Answer" },
    ],
  },
  {
    id: "lpg-dashboard",
    number: "04",
    title: "LPG GAS LEAKAGE DASHBOARD",
    year: "2024",
    role: "IoT & Full-Stack Developer",
    category: "IoT / REAL-TIME SYSTEMS",
    problem:
      "Hazardous gas detection systems often lack immediate visual telemetry and automated fail-safe actuation, delaying emergency response.",
    value:
      "A telemetry dashboard connecting physical gas-sensor data with a real-time web interface.",
    flow: "MQ-6 Sensor → Firebase → Dashboard → Auto-Valve",
    tags: ["React", "Vite", "Tailwind CSS", "Firebase", "Recharts", "Framer Motion"],
    status: "BUILT",
    icon: Flame,
    github: "https://github.com/nikhi20-900/lpg-gas-leakage-dashboard",
    linkLabel: "VIEW SOURCE",
    implementedHeader: "IMPLEMENTED · VERIFIED IN REPO",
    implemented: [
      "Physical MQ-6 hydrocarbon gas sensor calibration & analog streaming",
      "Firebase Realtime Database synchronization",
      "Real-time monitoring of LPG concentration, solenoid valve status, hazard alerts, and activity logs",
      "Automated solenoid valve cutoff command trigger",
      "Source is public — every component and Firebase listener is inspectable in the repository",
    ],
    notYet: [
      "Multi-node fleet support — prototype is built for dedicated single-rig sensor deployment",
      "Live hosted demo — hardware operates with connected local sensor kit",
    ],
    evidenceNote: "Public repository with inspectable components and listeners.",
    metrics: [
      { label: "STATUS", value: "BUILT · Public Repo" },
      { label: "SENSOR", value: "MQ-6 Gas Sensor" },
      { label: "FLOW", value: "Sensor → Firebase → Valve" },
    ],
  },
];

export function WorkSection() {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  // Keyboard accessibility: ESC closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveProject(null);
      }
    };

    if (activeProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [activeProject]);

  return (
    <section
      id="selected-work"
      className="relative w-full px-5 sm:px-8 md:px-12 py-24 sm:py-32 z-10 border-t divider-subtle"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b divider-subtle pb-6 mb-12 sm:mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#a6a69f] uppercase mb-2">
              <span className="text-[#f97316] font-bold">01 /</span>
              <span>SELECTED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#f5f4ef] tracking-tight">
              PROVEN SYSTEMS.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#a6a69f] max-w-sm">
            Strongest engineering evidence first — source, architecture, and honest status on every entry.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-6 sm:space-y-8">
          {PROJECTS.map((project) => {
            const Icon = project.icon;
            const isBuilt = project.status === "BUILT";

            return (
              <SpotlightCard
                key={project.id}
                role="button"
                tabIndex={0}
                data-cursor="view"
                onClick={() => setActiveProject(project)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveProject(project);
                  }
                }}
                className="group p-6 sm:p-10 border border-white/[0.08] hover:border-[#f97316]/50 transition-all duration-300 cursor-pointer bg-[#13161e]/90 backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316]"
                aria-label={`Open case dossier for ${project.title}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  {/* Left Column: Number, Title, Status & Problem */}
                  <div className="lg:col-span-5 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#a6a69f]">
                        {project.number} // {project.year}
                      </span>
                      <span
                        className={`text-[9px] font-mono px-2 py-0.5 rounded border font-bold uppercase ${
                          isBuilt ? "badge-built" : "badge-building"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 pt-1">
                      <div className="p-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[#f97316]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-[#f5f4ef] group-hover:text-[#f97316] transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="font-mono text-[11px] text-[#a6a69f] uppercase tracking-wider">
                      {project.category}
                    </p>

                    <p className="text-xs sm:text-sm text-[#f5f4ef]/80 font-light leading-relaxed pt-1">
                      {project.problem}
                    </p>
                  </div>

                  {/* Right Column: Flow, Tags, Metrics & Action */}
                  <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-5">
                    <p className="text-xs sm:text-sm text-[#f5f4ef] font-medium leading-relaxed">
                      {project.value}
                    </p>

                    {/* Architecture Execution Flow Strip */}
                    <div className="p-3 rounded-xl bg-[#090b10] border border-white/[0.06] font-mono text-[11px] text-[#f97316] font-medium break-words">
                      {project.flow}
                    </div>

                    {/* Key Technical Labels */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.slice(0, 5).map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[10px] px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.08] text-[#a6a69f]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-[#f97316] group-hover:translate-x-1 transition-transform">
                        <span>Inspect Dossier</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal / Full Technical Dossier */}
      <AnimatePresence>
        {activeProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#11141d] border border-white/[0.12] rounded-3xl p-6 sm:p-10 text-[#f5f4ef] shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label={`Case dossier for ${activeProject.title}`}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-[#f5f4ef] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#f97316]"
                aria-label="Close dossier (Escape)"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Eyebrow & Status */}
              <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#a6a69f] mb-3">
                <span>DOSSIER // {activeProject.number}</span>
                <span
                  className={`font-bold px-2 py-0.5 rounded border uppercase text-[10px] ${
                    activeProject.status === "BUILT" ? "badge-built" : "badge-building"
                  }`}
                >
                  STATUS · {activeProject.status}
                </span>
                <span>YEAR {activeProject.year}</span>
                <span className="text-[#f97316]">{activeProject.category}</span>
              </div>

              {/* Title & Role */}
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-2">
                {activeProject.title}
              </h2>
              <p className="font-mono text-xs text-[#f97316] uppercase mb-4 tracking-wider">
                {activeProject.role}
              </p>

              <p className="text-sm sm:text-base text-[#a6a69f] leading-relaxed mb-6 font-light">
                {activeProject.value}
              </p>

              {/* Architecture Flow */}
              <div className="p-3.5 rounded-xl bg-[#0a0c12] border border-white/[0.08] font-mono text-xs text-[#f97316] mb-6">
                <span className="text-[#a6a69f] block text-[10px] uppercase tracking-wider mb-1">
                  SYSTEM FLOW:
                </span>
                {activeProject.flow}
              </div>

              {/* IMPLEMENTED vs NOT YET — Honest Engineering Boundary */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Implemented Section */}
                <div className="p-5 rounded-2xl border border-[#84a98c]/25 bg-[#84a98c]/[0.04]">
                  <div className="text-[11px] font-mono text-[#84a98c] uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#84a98c]" />
                    <span>{activeProject.implementedHeader}</span>
                  </div>
                  <ul className="space-y-2 font-mono text-xs text-[#f5f4ef]/90 leading-relaxed">
                    {activeProject.implemented.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#84a98c] shrink-0 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* NOT YET · Honest Boundary */}
                <div className="p-5 rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                  <div className="text-[11px] font-mono text-[#a6a69f] uppercase tracking-widest font-bold mb-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-orange-400" />
                    <span>NOT YET · HONEST BOUNDARY</span>
                  </div>
                  <ul className="space-y-2 font-mono text-xs text-[#a6a69f] leading-relaxed">
                    {activeProject.notYet.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-orange-400 shrink-0">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Evidence Bar */}
              <div className="p-3.5 rounded-xl bg-[#0a0c12] border border-white/[0.08] font-mono text-xs text-[#a6a69f] mb-6 flex items-center gap-2.5">
                <span className="text-[#f97316] font-bold uppercase shrink-0">EVIDENCE:</span>
                <span>{activeProject.evidenceNote}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t divider-subtle">
                <div className="flex flex-wrap gap-3">
                  {activeProject.github ? (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f5f4ef] text-[#0d0f14] text-xs font-mono font-bold hover:bg-white transition-all shadow-md focus-visible:ring-2 focus-visible:ring-[#f97316]"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>{activeProject.linkLabel}</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-[#a6a69f]">
                      <span>CASE STUDY · HARDWARE BUILD (REPOSITORY NOT PUBLIC)</span>
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setActiveProject(null)}
                  className="px-5 py-2.5 rounded-full border border-white/[0.15] hover:border-[#f97316] text-xs font-mono text-[#f5f4ef] hover:text-[#f97316] transition-colors cursor-pointer"
                >
                  Close Dossier [ESC]
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
