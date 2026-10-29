"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Cpu, Network, ShieldCheck, Flame, CheckCircle, AlertCircle } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ScrambleReveal } from "@/components/ui/reveal";

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  year: string;
  role: string;
  category: string;
  tagline: string;
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
    tagline: "From a flagged account to an auditable next-best action.",
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
      "Synthetic fraud graph fixtures — 133 vertices, 147 edges",
      "TigerGraph GSQL schema + in-memory local graph simulator",
      "6 heuristic pattern detectors (ring, cluster, layering, velocity)",
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
    tagline: "Vision-based autonomous navigation for an unmanned ground vehicle operating in outdoor environments.",
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
    tagline: "The language model understands. The rules engine decides.",
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
    tagline: "I turn real-world sensor data into usable interfaces.",
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
      id="work"
      className="relative min-h-screen w-full px-6 sm:px-12 md:px-16 py-32 z-10 border-t divider-subtle"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b divider-subtle pb-6 mb-16 gap-4">
          <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#8E8E99] uppercase">
            <span className="text-accent font-bold">01 /</span>
            <ScrambleReveal text="WHAT I'VE BUILT" />
          </div>
          <span className="font-mono text-xs tracking-wider text-accent uppercase">
            CLICK CARD OR PRESS ENTER TO INSPECT DOSSIER
          </span>
        </div>

        {/* Section Title */}
        <div className="mb-16">
          <span className="font-mono text-5xl sm:text-7xl font-light text-white/20">
            01
          </span>
          <h2 className="type-h1 text-[#EDEDED] uppercase mt-2">
            SELECTED WORK.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#8E8E99] max-w-3xl leading-relaxed">
            Strongest engineering evidence first — source, architecture, and honest status on every entry.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-8 sm:space-y-12">
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
                className="group p-8 sm:p-12 hover:border-accent/60 cursor-pointer backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label={`Open case dossier for ${project.title}`}
              >
                {/* Subtle accent hover glow */}
                <div className="absolute -top-32 -right-32 w-80 h-80 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/15 transition-all duration-500 pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left: Project Number, Title & Status */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-[#8E8E99]">
                        {project.number} // {project.year}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2.5 py-0.5 rounded border font-bold uppercase ${
                          isBuilt
                            ? "text-emerald-400 border-emerald-500/30 bg-emerald-500/10"
                            : "text-amber-400 border-amber-500/30 bg-amber-500/10"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-accent group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#EDEDED] group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="font-mono text-xs text-[#8E8E99] uppercase tracking-wider">
                      {project.category}
                    </p>

                    <p className="text-sm text-accent font-mono">
                      &ldquo;{project.tagline}&rdquo;
                    </p>
                  </div>

                  {/* Right: Flow, Metrics, & Links */}
                  <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
                    <p className="text-sm sm:text-base text-[#EDEDED] font-light leading-relaxed">
                      {project.value}
                    </p>

                    {/* Architecture Flow Strip */}
                    <div className="p-3 rounded-xl bg-[#090b10] border border-white/10 font-mono text-[11px] text-accent font-medium break-words">
                      {project.flow}
                    </div>

                    {/* Metric Pills */}
                    <div className="grid grid-cols-3 gap-3 border-y divider-subtle py-4 font-mono">
                      {project.metrics.map((m, idx) => (
                        <div key={idx}>
                          <p className="text-[10px] text-[#8E8E99]">{m.label}</p>
                          <p className="text-xs sm:text-sm font-bold text-[#EDEDED]">{m.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Tags & Action Link */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[11px] px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#8E8E99]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-accent font-mono text-xs font-semibold group-hover:translate-x-2 transition-transform">
                        <span>{project.linkLabel}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal / Full Inspection Sheet */}
      <AnimatePresence>
        {activeProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-xl"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0A0A0B] border border-white/20 rounded-3xl p-6 sm:p-12 text-[#EDEDED] shadow-[0_0_50px_rgba(0,0,0,0.9)]"
              role="dialog"
              aria-modal="true"
              aria-label={`Case dossier for ${activeProject.title}`}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-[#EDEDED] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Close dossier (Escape)"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Eyebrow */}
              <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-[#8E8E99] mb-4">
                <span>DOSSIER // {activeProject.number}</span>
                <span
                  className={`font-bold px-2 py-0.5 rounded border uppercase text-[10px] ${
                    activeProject.status === "BUILT"
                      ? "text-emerald-400 border-emerald-500/30 bg-emerald-500/10"
                      : "text-amber-400 border-amber-500/30 bg-amber-500/10"
                  }`}
                >
                  STATUS · {activeProject.status}
                </span>
                <span>YEAR {activeProject.year}</span>
                <span className="text-accent">{activeProject.category}</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-2">
                {activeProject.title}
              </h2>
              <p className="font-mono text-xs text-accent uppercase mb-4 tracking-wider">
                &ldquo;{activeProject.tagline}&rdquo;
              </p>

              <p className="text-base sm:text-lg text-[#8E8E99] leading-relaxed mb-6 font-light">
                {activeProject.value}
              </p>

              {/* Architecture Flow */}
              <div className="p-3.5 rounded-xl bg-[#121215] border border-white/10 font-mono text-xs text-accent mb-8">
                <span className="text-[#8E8E99] block text-[10px] mb-1 uppercase tracking-wider">SYSTEM FLOW:</span>
                {activeProject.flow}
              </div>

              {/* IMPLEMENTED vs NOT YET — Honest Engineering Boundary */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Implemented Section */}
                <div className="p-6 rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.03]">
                  <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>{activeProject.implementedHeader}</span>
                  </div>
                  <ul className="space-y-2.5 font-mono text-xs text-[#EDEDED]/90 leading-relaxed">
                    {activeProject.implemented.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-emerald-400 shrink-0 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* NOT YET · Honest Boundary */}
                <div className="p-6 rounded-2xl border border-white/15 bg-white/[0.02]">
                  <div className="text-[11px] font-mono text-[#8E8E99] uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-400" />
                    <span>NOT YET · HONEST BOUNDARY</span>
                  </div>
                  <ul className="space-y-2.5 font-mono text-xs text-[#8E8E99] leading-relaxed">
                    {activeProject.notYet.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-amber-400 shrink-0">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Evidence Bar */}
              <div className="p-4 rounded-xl bg-[#121215] border border-white/10 font-mono text-xs text-[#8E8E99] mb-8 flex items-center gap-3">
                <span className="text-accent font-bold uppercase shrink-0">EVIDENCE:</span>
                <span>{activeProject.evidenceNote}</span>
              </div>

              {/* Links & Close Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t divider-subtle">
                <div className="flex flex-wrap gap-4">
                  {activeProject.github ? (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono font-bold text-white transition-colors focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>{activeProject.linkLabel}</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#8E8E99]">
                      <span>CASE STUDY · HARDWARE BUILD (REPOSITORY NOT PUBLIC)</span>
                    </span>
                  )}
                </div>

                <MagneticButton
                  onClick={() => setActiveProject(null)}
                  className="px-6 py-3 rounded-full border border-white/20 hover:border-accent text-xs font-mono"
                >
                  CLOSE DOSSIER [ESC]
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
