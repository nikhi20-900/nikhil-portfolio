"use client";

import {
  Flame,
  ArrowUpRight,
  Bot,
  Terminal,
  Users,
  BookOpen,
  Boxes,
} from "lucide-react";
import { GithubIcon } from "./ui/icons";

const FLAGSHIP_ARCHIVE = [
  {
    id: "navigen",
    number: "01",
    title: "NAVIGEN",
    subtitle: "Robotics & Perception Pipeline",
    concept: "Vision-based autonomous navigation for unmanned ground vehicles.",
    flow: "CAMERA → PERCEPTION → DECISION → MOTOR",
    status: "BUILT",
    statusDetail: "SIH 2025",
    statusColor: "text-emerald-400 bg-emerald-950/40 border-emerald-800/40",
    techs: ["ROS 2", "OpenCV", "Raspberry Pi", "ESP32", "Nav2", "Gazebo"],
    anchor: "#navigen",
    icon: Bot,
  },
  {
    id: "forge",
    number: "02",
    title: "FORGE",
    subtitle: "AI Software Engineering Agent",
    concept: "CLI agent that plans, analyzes, codes, and verifies software with directory grounding.",
    flow: "TASK → PLAN → INSPECT → CODE → TEST → REVIEW",
    status: "BUILDING",
    statusDetail: "Active CLI Prototype",
    statusColor: "text-orange-400 bg-orange-950/40 border-orange-800/40",
    techs: ["CLI Tooling", "TypeScript", "Node.js", "AI APIs", "Git"],
    anchor: "#forge",
    icon: Terminal,
  },
  {
    id: "pulse",
    number: "03",
    title: "PULSE",
    subtitle: "Real-Time Collaborative Workspace",
    concept: "Multiplayer full-stack workspace exploring shared state, presence, and CRDT sync.",
    flow: "STATE → SYNC → PRESENCE → CONFLICTS",
    status: "BUILDING",
    statusDetail: "Illustrative Prototype",
    statusColor: "text-orange-400 bg-orange-950/40 border-orange-800/40",
    techs: ["Next.js", "React", "WebSockets", "Database Schema", "Product UX"],
    anchor: "#pulse",
    icon: Users,
  },
  {
    id: "atlas",
    number: "04",
    title: "ATLAS",
    subtitle: "AI / RAG / Knowledge Systems",
    concept: "A knowledge workspace exploring document ingestion, vector retrieval, and evidence-first answers.",
    flow: "DOCUMENTS → RETRIEVE → EVIDENCE",
    status: "BUILDING",
    statusDetail: "Concept / RAG Prototype",
    statusColor: "text-orange-400 bg-orange-950/40 border-orange-800/40",
    techs: ["RAG", "Embeddings", "Vector Search", "Grounded Context", "Attribution"],
    anchor: "#atlas",
    icon: BookOpen,
  },
  {
    id: "nexus",
    number: "05",
    title: "NEXUS",
    subtitle: "DevOps / Automation / Infrastructure",
    concept: "Operational control connecting repositories, test gates, builds, deployments, and telemetry.",
    flow: "CODE → BUILD → DEPLOY → MONITOR",
    status: "BUILDING",
    statusDetail: "Concept / Simulated CI/CD",
    statusColor: "text-orange-400 bg-orange-950/40 border-orange-800/40",
    techs: ["CI/CD", "Turbopack", "Test Gates", "Edge Rollout", "Observability"],
    anchor: "#nexus",
    icon: Boxes,
  },
];

export function ProjectsGrid() {
  return (
    <section id="projects" className="py-24 md:py-36 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-24">
        {/* ========================================================================= */}
        {/* 1. FLAGSHIP PROJECT INDEX (01 TO 05) */}
        {/* ========================================================================= */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-white/[0.08]">
            <div>
              <div className="text-xs font-mono text-[#9ba1a6] uppercase tracking-widest flex items-center gap-2 mb-1">
                <span className="text-orange-400 font-bold">INDEX /</span>
                <span>FLAGSHIP SYSTEMS</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-[#f5f4ef] tracking-tight">
                THE FIVE FLAGSHIPS
              </h3>
            </div>
            <span className="text-xs font-mono text-[#9ba1a6]">
              BUILT &amp; ACTIVE ARCHITECTURAL BUILDS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FLAGSHIP_ARCHIVE.map((proj) => {
              const Icon = proj.icon;
              return (
                <div
                  key={proj.id}
                  className="p-6 rounded-2xl bg-[#11141d] border border-white/[0.08] hover:border-white/[0.18] transition-all flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-orange-400">
                          {proj.number}
                        </span>
                        <span className="text-white/20">/</span>
                        <Icon className="w-3.5 h-3.5 text-orange-400" />
                        <span className="font-mono text-xs font-bold text-[#f5f4ef]">
                          {proj.title}
                        </span>
                      </div>
                      <span
                        className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded border font-bold ${proj.statusColor}`}
                      >
                        {proj.status}
                      </span>
                    </div>

                    <div>
                      <div className="text-xs font-mono text-[#9ba1a6] mb-1">
                        {proj.subtitle}
                      </div>
                      <p className="text-xs text-[#f5f4ef]/90 leading-relaxed font-light">
                        {proj.concept}
                      </p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#090b10] border border-white/[0.04] text-[10px] font-mono text-orange-400 font-medium">
                      {proj.flow}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                    <div className="flex flex-wrap gap-1 text-[9px] font-mono text-[#9ba1a6]">
                      {proj.techs.slice(0, 3).map((t) => (
                        <span key={t} className="px-1.5 py-0.5 rounded bg-white/[0.02]">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={proj.anchor}
                      className="inline-flex items-center gap-1 text-xs font-mono text-orange-400 hover:text-white transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. ADDITIONAL BUILD: LPG GAS LEAKAGE DASHBOARD */}
        {/* ========================================================================= */}
        <div
          id="lpg"
          className="rounded-3xl bg-[#11141d] border border-white/[0.1] p-7 sm:p-10 lg:p-12 relative overflow-hidden shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="text-xs font-mono text-[#9ba1a6] uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="text-emerald-400 font-bold">ADDITIONAL BUILD /</span>
                <span>REAL-TIME IOT &amp; DASHBOARD</span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#f5f4ef] mb-2 tracking-tight">
                LPG GAS LEAKAGE DASHBOARD
              </h3>

              <p className="text-base sm:text-xl text-amber-400 font-medium mb-4">
                &ldquo;I turn real-world sensor data into usable interfaces.&rdquo;
              </p>

              <p className="text-base text-[#9ba1a6] leading-relaxed mb-6 font-light max-w-xl">
                A real-time IoT dashboard designed to monitor LPG gas concentration and system
                status, providing an intuitive interface for gas readings, solenoid valve status,
                hazard alerts, and activity monitoring.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["React", "Vite", "Tailwind CSS", "Firebase", "Recharts", "Framer Motion"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-[#f5f4ef] border border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              <a
                href="https://github.com/nikhi20-900/lpg-gas-leakage-dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f5f4ef] text-[#0d0f14] font-mono text-xs sm:text-sm font-semibold hover:bg-white transition-all shadow-md"
                data-cursor="code"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Repository</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Visual Illustrative Dashboard Mockup */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-[#090b10] border border-white/[0.08] font-mono text-xs space-y-4 shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2 text-amber-400">
                    <Flame className="w-4 h-4" />
                    <span>MQ-6 TELEMETRY STREAM</span>
                  </div>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    SAFE
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-[11px] text-[#9ba1a6]">
                    <span>Gas Concentration</span>
                    <span className="text-[#f5f4ef]">184 PPM (18.4%)</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-white/[0.06] overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-amber-500 w-[18.4%]" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="text-[#9ba1a6] text-[10px]">Valve Status</div>
                    <div className="text-emerald-400 font-bold mt-0.5">OPEN / NORMAL</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="text-[#9ba1a6] text-[10px]">Database Sync</div>
                    <div className="text-[#f5f4ef] font-bold mt-0.5">Firebase Live</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-[10px] text-[#9ba1a6]">
                  Recent Log: Nominal baseline maintained. Zero hazard thresholds exceeded.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. OTHER PROJECTS & ARCHIVE EXPERIMENTS */}
        {/* ========================================================================= */}
        <div>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
            <div className="text-xs font-mono text-[#9ba1a6] uppercase tracking-widest flex items-center gap-2">
              <span className="text-orange-400 font-bold">ARCHIVE /</span>
              <span>SOFTWARE &amp; EXPERIMENTS</span>
            </div>
            <span className="text-xs font-mono text-[#9ba1a6]">VERIFIED REPOSITORIES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* MedTech */}
            <div
              className="p-7 rounded-2xl bg-[#11141d] border border-white/[0.08] hover:border-white/[0.18] transition-all flex flex-col justify-between"
              data-project-card="true"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/30 px-2.5 py-0.5 rounded-full border border-emerald-800/40">
                    Healthcare Technology
                  </span>
                  <a
                    href="https://github.com/nikhi20-900/medTech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9ba1a6] hover:text-[#f5f4ef] transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>

                <h4 className="text-2xl font-bold text-[#f5f4ef] mb-2">MedTech</h4>
                <p className="text-sm text-[#9ba1a6] leading-relaxed mb-6 font-light">
                  A healthcare-focused technology project combining frontend and backend
                  components to explore practical digital solutions for healthcare. Focuses on
                  application architecture and structured data handling.
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-xs font-mono text-[#9ba1a6]">
                  Frontend · Backend · Data
                </span>
                <a
                  href="https://github.com/nikhi20-900/medTech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-[#f5f4ef] hover:text-amber-400"
                >
                  <span>Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* SaaS Dashboard */}
            <div
              className="p-7 rounded-2xl bg-[#11141d] border border-white/[0.08] hover:border-white/[0.18] transition-all flex flex-col justify-between"
              data-project-card="true"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-blue-400 bg-blue-950/30 px-2.5 py-0.5 rounded-full border border-blue-800/40">
                    Web Application UI
                  </span>
                  <a
                    href="https://github.com/nikhi20-900/sass-dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9ba1a6] hover:text-[#f5f4ef] transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>

                <h4 className="text-2xl font-bold text-[#f5f4ef] mb-2">SaaS Dashboard</h4>
                <p className="text-sm text-[#9ba1a6] leading-relaxed mb-6 font-light">
                  A dashboard-focused web application demonstrating modern UI development,
                  responsive design and component-based application interfaces for clean data
                  presentation.
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-xs font-mono text-[#9ba1a6]">
                  Responsive UI · Components
                </span>
                <a
                  href="https://github.com/nikhi20-900/sass-dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-[#f5f4ef] hover:text-amber-400"
                >
                  <span>Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* DevOps */}
            <div
              className="p-7 rounded-2xl bg-[#11141d] border border-white/[0.08] hover:border-white/[0.18] transition-all flex flex-col justify-between"
              data-project-card="true"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono text-amber-400 bg-amber-950/30 px-2.5 py-0.5 rounded-full border border-amber-800/40">
                    Infrastructure &amp; Workflow
                  </span>
                  <a
                    href="https://github.com/nikhi20-900/devops"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9ba1a6] hover:text-[#f5f4ef] transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>

                <h4 className="text-2xl font-bold text-[#f5f4ef] mb-2">DevOps</h4>
                <p className="text-sm text-[#9ba1a6] leading-relaxed mb-6 font-light">
                  A project focused on exploring development workflows, version control
                  best-practices, deployment concepts, and automation techniques.
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <span className="text-xs font-mono text-[#9ba1a6]">
                  Git · Deployment · Automation
                </span>
                <a
                  href="https://github.com/nikhi20-900/devops"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-[#f5f4ef] hover:text-amber-400"
                >
                  <span>Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
