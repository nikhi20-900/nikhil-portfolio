"use client";

import {
  Flame,
  ArrowUpRight,
  Bot,
  Terminal,
  Users,
  BookOpen,
  Boxes,
  ShieldAlert,
  GraduationCap,
  FileCheck2,
  type LucideIcon,
} from "lucide-react";
import { GithubIcon } from "./ui/icons";

type Status = "BUILT" | "BUILDING" | "EXPLORING";

const STATUS_CLS: Record<Status, string> = {
  BUILT: "badge-built",
  BUILDING: "badge-building",
  EXPLORING: "badge-exploring",
};

const STATUS_LEGEND: { status: Status; def: string }[] = [
  { status: "BUILT", def: "Shipped — hardware deployed or repo public" },
  { status: "BUILDING", def: "In active development now" },
  { status: "EXPLORING", def: "Concepts & exploratory prototypes" },
];

/* Consistent project card structure:
   NUMBER · NAME · CATEGORY · STATUS · VALUE · FLOW · TECH STACK · LINKS */
interface ProjectCardData {
  id: string;
  number: string;
  title: string;
  category: string;
  value: string;
  flow: string;
  status: Status;
  statusDetail: string;
  techs: string[];
  github?: string;
  anchor?: string;
  icon: LucideIcon;
  badge?: string;
}

const PROJECT_INDEX: ProjectCardData[] = [
  {
    id: "navigen",
    number: "01",
    title: "NAVIGEN",
    category: "ROBOTICS · AUTONOMOUS SYSTEMS",
    value: "Vision-based autonomous navigation for an unmanned ground vehicle.",
    flow: "CAMERA → PERCEPTION → DECISION → NAVIGATION → MOTOR",
    status: "BUILT",
    statusDetail: "SIH 2025 · runs on a physical UGV",
    techs: ["ROS 2", "Python", "OpenCV", "Nav2", "Raspberry Pi", "ESP32", "Gazebo"],
    anchor: "#navigen",
    icon: Bot,
    badge: "Smart India Hackathon 2025",
  },
  {
    id: "fraud",
    number: "02",
    title: "FRAUD INVESTIGATION AGENT",
    category: "AI AGENTS · FINANCIAL CRIME",
    value: "Graph-grounded fraud investigation with deterministic risk and next-best actions.",
    flow: "GRAPH → PATTERNS → AGENT → RISK → NBA → DASHBOARD",
    status: "BUILT",
    statusDetail: "Public repo · offline evaluation suite",
    techs: ["Python", "FastAPI", "TigerGraph", "LangGraph", "React", "TypeScript"],
    github: "https://github.com/nikhi20-900/fraud-investigation-agent",
    anchor: "#fraud",
    icon: ShieldAlert,
  },
  {
    id: "student-performance",
    number: "03",
    title: "STUDENT PERFORMANCE ANALYSIS",
    category: "DATA MINING · MACHINE LEARNING",
    value: "Classification and clustering study of the UCI student performance dataset.",
    flow: "DATASET → CLASSIFICATION → CLUSTERING → EVALUATION",
    status: "BUILT",
    statusDetail: "Public repo · reproducible notebook",
    techs: ["Python", "Jupyter", "scikit-learn", "Classification", "Clustering"],
    github: "https://github.com/nikhi20-900/student-performance-data-mining",
    icon: GraduationCap,
  },
  {
    id: "schemesaathi",
    number: "04",
    title: "SCHEMESAATHI",
    category: "AI · ELIGIBILITY SYSTEMS",
    value: "Scheme eligibility where the LLM understands the query and a rules engine decides.",
    flow: "QUERY → LLM EXTRACTION → ELIGIBILITY ENGINE → RAG → OCR → RESULT",
    status: "BUILDING",
    statusDetail: "Phase 1 scaffold · 4-member team build",
    techs: ["Python", "FastAPI", "React", "Vite", "RAG", "OCR", "Rules Engine"],
    github: "https://github.com/nikhi20-900/SchemeSaathi",
    anchor: "#schemesaathi",
    icon: FileCheck2,
  },
  {
    id: "forge",
    number: "05",
    title: "FORGE",
    category: "AI AGENTS · DEVELOPER TOOLING",
    value: "Terminal agent that plans, inspects, codes, and verifies software.",
    flow: "TASK → PLAN → INSPECT → CODE → TEST → REVIEW",
    status: "BUILDING",
    statusDetail: "Active CLI prototype",
    techs: ["CLI Tooling", "TypeScript", "Node.js", "AI APIs", "Git"],
    anchor: "#forge",
    icon: Terminal,
  },
  {
    id: "pulse",
    number: "06",
    title: "PULSE",
    category: "REAL-TIME · MULTIPLAYER WORKSPACE",
    value: "Collaborative workspace for shared state, presence, and live sync.",
    flow: "STATE → SYNC → PRESENCE → CONFLICTS",
    status: "BUILDING",
    statusDetail: "In active development · prototype stage",
    techs: ["Next.js", "React", "WebSockets", "Database Schema", "Product UX"],
    anchor: "#pulse",
    icon: Users,
  },
  {
    id: "atlas",
    number: "07",
    title: "ATLAS",
    category: "AI · RAG · KNOWLEDGE SYSTEMS",
    value: "Knowledge workspace that answers with evidence you can trace.",
    flow: "DOCUMENTS → RETRIEVE → EVIDENCE",
    status: "BUILDING",
    statusDetail: "In active development · prototype stage",
    techs: ["RAG", "Embeddings", "Vector Search", "Grounded Context", "Attribution"],
    anchor: "#atlas",
    icon: BookOpen,
  },
  {
    id: "nexus",
    number: "08",
    title: "NEXUS",
    category: "DEVOPS · AUTOMATION · INFRASTRUCTURE",
    value: "Operational view connecting repos, test gates, builds, and telemetry.",
    flow: "CODE → BUILD → DEPLOY → MONITOR",
    status: "BUILDING",
    statusDetail: "In active development · simulated pipeline",
    techs: ["CI/CD", "Turbopack", "Test Gates", "Edge Rollout", "Observability"],
    anchor: "#nexus",
    icon: Boxes,
  },
];

const byStatus = (status: Status) => PROJECT_INDEX.filter((p) => p.status === status);

function TierHeader({
  status,
  label,
}: {
  status: Status;
  label: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-5">
      <span
        className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full border font-bold ${STATUS_CLS[status]}`}
      >
        {status}
      </span>
      <span className="text-xs font-mono text-[#9ba1a6] uppercase tracking-widest">
        {label}
      </span>
      <span className="flex-1 h-px bg-white/[0.06] min-w-8" />
    </div>
  );
}

function CardHead({ proj, large }: { proj: ProjectCardData; large?: boolean }) {
  const Icon = proj.icon;
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span
            className={`font-mono font-bold text-orange-400 ${large ? "text-sm" : "text-xs"}`}
          >
            {proj.number}
          </span>
          <span className="text-white/20">/</span>
          <Icon className={`text-orange-400 shrink-0 ${large ? "w-4 h-4" : "w-3.5 h-3.5"}`} />
          <span
            className={`font-mono font-bold text-[#f5f4ef] break-words ${
              large ? "text-sm sm:text-base" : "text-xs"
            }`}
          >
            {proj.title}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded border font-bold ${STATUS_CLS[proj.status]}`}
          >
            {proj.status}
          </span>
          {proj.badge && (
            <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded-full font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30">
              {proj.badge}
            </span>
          )}
        </div>
      </div>
      <div className="text-[10px] sm:text-[11px] font-mono text-[#9ba1a6] uppercase tracking-wider break-words">
        {proj.category}
        <span className="text-white/20 mx-1.5">·</span>
        <span className="text-[#9ba1a6]/80 normal-case tracking-normal">{proj.statusDetail}</span>
      </div>
    </>
  );
}

function CardBody({ proj, large }: { proj: ProjectCardData; large?: boolean }) {
  return (
    <>
      <p
        className={`text-[#f5f4ef]/90 leading-relaxed font-light break-words ${
          large ? "text-sm sm:text-base" : "text-xs"
        }`}
      >
        {proj.value}
      </p>
      <div
        className={`p-2.5 rounded-xl bg-[#090b10] border border-white/[0.04] font-mono font-medium break-words ${
          large ? "text-[11px] text-[#84a98c]" : "text-[10px] text-orange-400"
        }`}
      >
        {proj.flow}
      </div>
    </>
  );
}

function CardFoot({ proj, large }: { proj: ProjectCardData; large?: boolean }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/[0.06]">
      <div
        className={`flex flex-wrap gap-1 font-mono text-[#9ba1a6] ${
          large ? "text-[10px]" : "text-[9px]"
        }`}
      >
        {proj.techs.map((t) => (
          <span
            key={t}
            className={`rounded bg-white/[0.02] ${
              large ? "px-2 py-0.5 border border-white/[0.06]" : "px-1.5 py-0.5"
            }`}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-3">
        {proj.github && (
          <a
            href={proj.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 font-mono transition-colors ${
              large
                ? "text-xs font-semibold text-[#84a98c] hover:text-white"
                : "text-[11px] text-orange-400 hover:text-white"
            }`}
            data-cursor="code"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>VIEW SOURCE</span>
          </a>
        )}
        {proj.anchor && (
          <a
            href={proj.anchor}
            className={`inline-flex items-center gap-1 font-mono transition-colors ${
              large
                ? "text-xs font-semibold text-[#84a98c] hover:text-white"
                : "text-xs text-orange-400 hover:text-white"
            }`}
          >
            <span>Case Study</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
}

function FeatureCard({ proj }: { proj: ProjectCardData }) {
  return (
    <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#11141d] border border-[#84a98c]/25 hover:border-[#84a98c]/45 transition-all shadow-xl space-y-4">
      <CardHead proj={proj} large />
      <CardBody proj={proj} large />
      <CardFoot proj={proj} large />
    </div>
  );
}

function CompactCard({ proj }: { proj: ProjectCardData }) {
  const muted = proj.status === "EXPLORING";
  return (
    <div
      className={`p-5 sm:p-6 rounded-2xl bg-[#11141d] border transition-all flex flex-col justify-between gap-4 ${
        muted
          ? "border-white/[0.06] hover:border-white/[0.14]"
          : "border-white/[0.08] hover:border-white/[0.18]"
      }`}
    >
      <div className="space-y-3">
        <CardHead proj={proj} />
        <CardBody proj={proj} />
      </div>
      <CardFoot proj={proj} />
    </div>
  );
}

export function ProjectsGrid() {
  const built = byStatus("BUILT");
  const building = byStatus("BUILDING");
  const exploring = byStatus("EXPLORING");

  return (
    <section id="projects" className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-16">
        {/* ========================================================================= */}
        {/* 1. PROJECT INDEX — GROUPED BY STATUS, NOT EQUAL WEIGHT */}
        {/* ========================================================================= */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-5 pb-4 border-b border-white/[0.08]">
            <div>
              <div className="text-xs font-mono text-[#9ba1a6] uppercase tracking-widest flex items-center gap-2 mb-1">
                <span className="text-orange-400 font-bold">INDEX /</span>
                <span>PROJECT STATUS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#f5f4ef] tracking-tight">
                WHERE EACH PROJECT STANDS
              </h2>
            </div>
            <span className="text-xs font-mono text-[#9ba1a6]">
              Honest labels, no equal billing
            </span>
          </div>

          {/* Legend: teaches the triad once, right where it matters */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-12">
            {STATUS_LEGEND.map((item) => (
              <span
                key={item.status}
                className="flex items-center gap-2 text-[11px] font-mono text-[#9ba1a6]"
              >
                <span
                  className={`inline-block px-2 py-0.5 rounded border text-[9px] uppercase font-bold ${STATUS_CLS[item.status]}`}
                >
                  {item.status}
                </span>
                {item.def}
              </span>
            ))}
          </div>

          {/* TIER 1 — BUILT: proof first, given the most visual weight */}
          <div className="mb-12">
            <TierHeader
              status="BUILT"
              label="Shipped proof — hardware ran, repos are public"
            />
            <div className="grid grid-cols-1 gap-4">
              {built.map((proj) => (
                <FeatureCard key={proj.id} proj={proj} />
              ))}
            </div>
          </div>

          {/* TIER 2 — BUILDING: active work, standard weight */}
          <div className="mb-12">
            <TierHeader status="BUILDING" label="In active development right now" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {building.map((proj) => (
                <CompactCard key={proj.id} proj={proj} />
              ))}
            </div>
          </div>

          {/* TIER 3 — EXPLORING: concepts, deliberately lighter */}
          <div>
            <TierHeader
              status="EXPLORING"
              label="Concepts & prototypes — not shipped"
            />
            {exploring.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {exploring.map((proj) => (
                  <CompactCard key={proj.id} proj={proj} />
                ))}
              </div>
            ) : (
              <div className="p-6 rounded-2xl border border-dashed border-white/[0.1] bg-white/[0.015]">
                <p className="text-xs font-mono text-[#9ba1a6] leading-relaxed break-words">
                  Nothing sits at concept-only stage right now — every project above is either
                  shipped or in active build.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. SHIPPED BUILD DEEP-DIVE: LPG GAS LEAKAGE DASHBOARD (PUBLIC REPO) */}
        {/* ========================================================================= */}
        <div
          id="lpg"
          className="rounded-3xl bg-[#11141d] border border-[#84a98c]/25 p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="text-xs font-mono text-[#9ba1a6] uppercase tracking-widest mb-3 flex flex-wrap items-center gap-2">
                <span className="text-[#84a98c] font-bold">SHIPPED BUILD /</span>
                <span>REAL-TIME IOT &amp; DASHBOARD</span>
                <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded border font-bold badge-built">
                  BUILT · PUBLIC REPO
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#f5f4ef] mb-2 tracking-tight break-words">
                LPG GAS LEAKAGE DASHBOARD
              </h3>

              <p className="text-base sm:text-xl text-amber-400 font-medium mb-4">
                &ldquo;I turn real-world sensor data into usable interfaces.&rdquo;
              </p>

              <p className="text-base text-[#9ba1a6] leading-relaxed mb-4 font-light max-w-xl break-words">
                Real-time monitoring of LPG concentration, solenoid valve status, hazard alerts,
                and activity logs — streaming from physical MQ-6 sensors. Source is public —
                every component and Firebase listener is inspectable in the repository.
              </p>

              <div className="p-2.5 mb-5 rounded-xl bg-[#090b10] border border-white/[0.04] text-[11px] font-mono text-[#84a98c] font-medium break-words">
                MQ-6 SENSOR → FIREBASE → DASHBOARD → AUTO-VALVE
              </div>

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
                <span>VIEW SOURCE</span>
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
        {/* 3. BUILDING DEEP-DIVE: SCHEMESAATHI (ARCHITECTURE + DESIGN DECISION) */}
        {/* ========================================================================= */}
        <div
          id="schemesaathi"
          className="rounded-3xl bg-[#11141d] border border-orange-500/25 p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-xl"
        >
          <div className="space-y-8">
            <div>
              <div className="text-xs font-mono text-[#9ba1a6] uppercase tracking-widest mb-3 flex flex-wrap items-center gap-2">
                <span className="text-orange-400 font-bold">BUILDING DEEP-DIVE /</span>
                <span>AI · PUBLIC POLICY · ELIGIBILITY</span>
                <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded border font-bold badge-building">
                  BUILDING
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#f5f4ef] mb-2 tracking-tight break-words">
                SCHEMESAATHI
              </h3>

              <p className="text-base sm:text-xl text-orange-400 font-medium mb-4">
                &ldquo;The language model understands. The rules engine decides.&rdquo;
              </p>

              <p className="text-base text-[#9ba1a6] leading-relaxed font-light max-w-2xl break-words">
                An AI government scheme navigator for scholarships and education schemes —
                the language model handles understanding; a deterministic rules engine evaluates
                eligibility against published scheme rules, so users can determine likely
                eligibility with RAG knowledge retrieval and OCR document support. Phase 1
                scaffold with a four-member team across AI/RAG, eligibility, OCR, and frontend
                modules.
              </p>
            </div>

            {/* Architecture: language understanding → deterministic decision */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#090b10] border border-white/[0.08]">
              <div className="text-[11px] font-mono text-orange-400 uppercase tracking-widest mb-5">
                SYSTEM · ARCHITECTURE
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-5">
                <div className="flex-1 p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-center">
                  <div className="text-[10px] font-mono text-[#9ba1a6] uppercase tracking-widest mb-1.5">
                    Language Understanding
                  </div>
                  <div className="text-sm sm:text-base font-mono font-bold text-[#f5f4ef]">
                    LLM
                  </div>
                  <div className="text-[10px] text-[#9ba1a6] mt-1">
                    intent · criteria · explanation
                  </div>
                </div>
                <span
                  aria-hidden="true"
                  className="text-orange-500/70 font-mono text-lg self-center sm:rotate-0 rotate-90"
                >
                  ↓
                </span>
                <div className="flex-1 p-4 rounded-xl bg-orange-500/[0.06] border border-orange-500/30 text-center">
                  <div className="text-[10px] font-mono text-orange-400 uppercase tracking-widest mb-1.5">
                    Deterministic Decision
                  </div>
                  <div className="text-sm sm:text-base font-mono font-bold text-[#f5f4ef]">
                    Eligibility Engine
                  </div>
                  <div className="text-[10px] text-[#9ba1a6] mt-1">
                    rules · same input → same answer
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5" aria-label="SchemeSaathi capabilities">
                {["RAG", "OCR", "MULTILINGUAL", "KARNATAKA + CENTRAL SCHEMES"].map((cap) => (
                  <span
                    key={cap}
                    className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-white/[0.03] border border-white/[0.08] text-[#f5f4ef]"
                  >
                    {cap}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono mt-5 pt-4 border-t border-white/[0.06]">
                {[
                  "USER QUERY",
                  "LLM EXTRACTION",
                  "ELIGIBILITY ENGINE",
                  "RAG RETRIEVAL",
                  "OCR METADATA",
                  "RESULT",
                ].map((step, idx, arr) => (
                  <span key={step} className="flex items-center gap-2 min-w-0">
                    <span className="px-2 py-1 rounded bg-white/[0.03] border border-white/[0.08] text-[#f5f4ef] font-medium break-words">
                      {step}
                    </span>
                    {idx < arr.length - 1 && <span className="text-orange-500/50">→</span>}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
              <div className="flex flex-wrap gap-1.5 text-[10px] font-mono text-[#9ba1a6]">
                {["Python", "FastAPI", "React", "Vite", "RAG", "OCR", "Rules Engine"].map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/nikhi20-900/SchemeSaathi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f5f4ef] text-[#0d0f14] font-mono text-xs sm:text-sm font-semibold hover:bg-white transition-all shadow-md"
                data-cursor="code"
              >
                <GithubIcon className="w-4 h-4" />
                <span>OPEN REPOSITORY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. OTHER PROJECTS & ARCHIVE EXPERIMENTS */}
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
                <div className="flex items-center justify-between mb-4 gap-2">
                  <span className="text-[9px] font-mono text-[#9ba1a6] bg-white/[0.04] px-2.5 py-0.5 rounded-full border border-white/[0.1]">
                    Healthcare Technology
                  </span>
                  <a
                    href="https://github.com/nikhi20-900/medTech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9ba1a6] hover:text-[#f5f4ef] transition-colors"
                    aria-label="MedTech repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-2xl font-bold text-[#f5f4ef] mb-2 break-words">MedTech</h3>
                <p className="text-sm text-[#9ba1a6] leading-relaxed mb-6 font-light break-words">
                  A healthcare-focused technology project combining frontend and backend
                  components to explore practical digital solutions for healthcare. Focuses on
                  application architecture and structured data handling.
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-2">
                <span className="text-xs font-mono text-[#9ba1a6] break-words">
                  Frontend · Backend · Data
                </span>
                <a
                  href="https://github.com/nikhi20-900/medTech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-[#f5f4ef] hover:text-amber-400 shrink-0"
                >
                  <span>VIEW SOURCE</span>
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
                <div className="flex items-center justify-between mb-4 gap-2">
                  <span className="text-[9px] font-mono text-[#9ba1a6] bg-white/[0.04] px-2.5 py-0.5 rounded-full border border-white/[0.1]">
                    Web Application UI
                  </span>
                  <a
                    href="https://github.com/nikhi20-900/sass-dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9ba1a6] hover:text-[#f5f4ef] transition-colors"
                    aria-label="SaaS Dashboard repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-2xl font-bold text-[#f5f4ef] mb-2 break-words">
                  SaaS Dashboard
                </h3>
                <p className="text-sm text-[#9ba1a6] leading-relaxed mb-6 font-light break-words">
                  A dashboard-focused web application demonstrating modern UI development,
                  responsive design and component-based application interfaces for clean data
                  presentation.
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-2">
                <span className="text-xs font-mono text-[#9ba1a6] break-words">
                  Responsive UI · Components
                </span>
                <a
                  href="https://github.com/nikhi20-900/sass-dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-[#f5f4ef] hover:text-amber-400 shrink-0"
                >
                  <span>VIEW SOURCE</span>
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
                <div className="flex items-center justify-between mb-4 gap-2">
                  <span className="text-[9px] font-mono text-[#9ba1a6] bg-white/[0.04] px-2.5 py-0.5 rounded-full border border-white/[0.1]">
                    Infrastructure &amp; Workflow
                  </span>
                  <a
                    href="https://github.com/nikhi20-900/devops"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9ba1a6] hover:text-[#f5f4ef] transition-colors"
                    aria-label="DevOps repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-2xl font-bold text-[#f5f4ef] mb-2 break-words">DevOps</h3>
                <p className="text-sm text-[#9ba1a6] leading-relaxed mb-6 font-light break-words">
                  A project focused on exploring development workflows, version control
                  best-practices, deployment concepts, and automation techniques.
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-2">
                <span className="text-xs font-mono text-[#9ba1a6] break-words">
                  Git · Deployment · Automation
                </span>
                <a
                  href="https://github.com/nikhi20-900/devops"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-mono text-[#f5f4ef] hover:text-amber-400 shrink-0"
                >
                  <span>VIEW SOURCE</span>
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
