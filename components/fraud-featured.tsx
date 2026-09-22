"use client";

import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./ui/icons";

const SYSTEM_FLOW_STAGES = [
  { name: "DATA", desc: "Deterministic RFC-compliant fixtures" },
  { name: "GRAPH", desc: "TigerGraph GSQL · local simulator" },
  { name: "PATTERN DETECTION", desc: "6 calibrated heuristic detectors" },
  { name: "AGENT", desc: "LangGraph stateful investigation loop" },
  { name: "RISK", desc: "Deterministic risk + uncertainty" },
  { name: "ACTION", desc: "Next-best-action ranking" },
  { name: "DASHBOARD", desc: "React investigation workspace" },
];

const VERTEX_TYPES = [
  "Customer",
  "Account",
  "Transaction",
  "Card",
  "Device",
  "IP",
  "Merchant",
];

const FRAUD_PATTERNS = [
  "SHARED_DEVICE_RING",
  "SHARED_IP_CLUSTER",
  "TRANSACTION_LAYERING",
  "MERCHANT_CONCENTRATION",
  "TRANSACTION_VELOCITY",
  "MULTI_ACCOUNT_RING",
];

const IMPLEMENTATION_STACK = [
  "Python",
  "FastAPI",
  "TigerGraph (GSQL)",
  "LangGraph",
  "Pydantic",
  "React",
  "TypeScript",
  "Tailwind CSS",
];

const IMPLEMENTED = [
  "Synthetic fraud graph fixtures — 133 vertices, 147 edges",
  "TigerGraph GSQL schema + in-memory local graph simulator",
  "6 heuristic pattern detectors (ring, cluster, layering, velocity)",
  "LangGraph investigation agent with a stateful node loop",
  "Deterministic risk, confidence, and uncertainty engine",
  "Deterministic next-best-action recommendation engine",
  "FastAPI backend + React / TypeScript / Tailwind dashboard",
  "Offline evaluation suite and tests documented in the repo",
];

const NOT_YET = [
  "Live TigerGraph cluster — schemas are written; the local simulator is the default runtime",
  "Hosted live demo — the platform runs locally (FastAPI + Vite), so there is no demo link here",
];

export function FraudFeatured() {
  return (
    <section id="fraud" className="py-24 md:py-36 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Orientation — SHIPPED chapter 01, public repo evidence */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-white/[0.08] border-b">
          <div className="text-xs font-mono text-[#9ba1a6] uppercase tracking-widest flex items-center gap-2">
            <span className="text-orange-400 font-bold">01 /</span>
            <span>SHIPPED · AI AGENTS &amp; FINANCIAL CRIME</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold border badge-built">
              BUILT · PUBLIC REPO
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30">
              Offline Evaluation Suite
            </span>
          </div>
        </div>

        {/* Headline */}
        <div className="max-w-4xl mb-10">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#f5f4ef] tracking-tighter leading-[0.95] mb-4 break-words">
            FRAUD INVESTIGATION AGENT
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-orange-400 font-medium tracking-tight">
            &ldquo;From a flagged account to an auditable next-best action.&rdquo;
          </p>
        </div>

        {/* PROBLEM */}
        <div className="mb-10 pt-6 border-t border-white/[0.1]">
          <div className="text-[11px] font-mono text-orange-400 uppercase tracking-widest mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <span>PROBLEM</span>
          </div>
          <p className="text-base sm:text-lg text-[#f5f4ef] leading-relaxed font-light max-w-3xl">
            Fraud tools tend to fail in two ways: static rule engines miss relational syndicates
            spread across accounts, devices, and merchants — or black-box scoring models produce
            numbers no auditor can defend. Analysts get alerts, but not an investigation.
          </p>
        </div>

        {/* SYSTEM — architecture flow */}
        <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-[#090b10] border border-white/[0.08] shadow-2xl">
          <div className="text-[11px] font-mono uppercase tracking-widest mb-6 flex flex-wrap items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <span className="text-orange-400">SYSTEM</span>
            <span className="text-white/[0.2]">·</span>
            <span className="text-[#9ba1a6]">DATA → GRAPH → PATTERNS → AGENT → RISK → ACTION → DASHBOARD</span>
          </div>

          <div className="flex flex-wrap items-stretch gap-2">
            {SYSTEM_FLOW_STAGES.map((stage, idx) => (
              <div key={stage.name} className="flex items-stretch gap-2 min-w-0">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] min-w-0 max-w-full">
                  <div className="text-[10px] font-mono font-bold text-orange-400 mb-1">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div className="text-[11px] sm:text-xs font-mono font-bold text-[#f5f4ef] leading-tight break-words">
                    {stage.name}
                  </div>
                  <div className="text-[10px] text-[#9ba1a6] leading-snug mt-1 break-words">
                    {stage.desc}
                  </div>
                </div>
                {idx < SYSTEM_FLOW_STAGES.length - 1 && (
                  <span className="text-orange-500/50 font-mono self-center shrink-0">→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* KEY DISTINCTION — LLM reasoning ≠ risk calculation */}
        <div className="mb-10 p-5 sm:p-6 rounded-2xl border border-orange-500/30 bg-orange-500/[0.04]">
          <div className="text-[11px] font-mono text-orange-400 uppercase tracking-widest mb-3">
            KEY DISTINCTION
          </div>
          <p className="text-base sm:text-lg text-[#f5f4ef] font-medium leading-relaxed break-words">
            LLM reasoning <span className="text-orange-400 font-mono">≠</span> risk calculation
          </p>
          <p className="text-sm text-[#9ba1a6] font-light leading-relaxed mt-2 max-w-3xl">
            The LangGraph agent structures the investigation narrative. Risk score, evidence
            confidence, and uncertainty are computed by deterministic engines — same inputs,
            same outputs, every run. Nothing is scored by the language model alone.
          </p>
        </div>

        {/* GRAPH SNAPSHOT — restrained topology diagram (framed technical module) */}
        <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-[#090b10] border border-white/[0.08]">
          <div className="text-[11px] font-mono uppercase tracking-widest mb-5 flex flex-wrap items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <span className="text-orange-400">GRAPH SNAPSHOT</span>
            <span className="text-white/[0.2]">·</span>
            <span className="text-[#9ba1a6]">HOW A RING CONNECTS</span>
          </div>

          {/* Desktop / tablet: SVG topology */}
          <svg
            viewBox="0 0 720 240"
            role="img"
            aria-label="Fraud graph topology: Customer connects to Account, Account to Transaction, and Transaction to Merchant, IP, and Device. A dashed edge from Customer B to the same Device marks a shared-device fraud ring."
            className="hidden sm:block w-full h-auto"
          >
            <defs>
              <marker
                id="fraud-arrow-orange"
                viewBox="0 0 8 8"
                refX="6"
                refY="4"
                markerWidth="5"
                markerHeight="5"
                orient="auto-start-reverse"
              >
                <path d="M 0 1 L 6 4 L 0 7 z" fill="#ea580c" />
              </marker>
            </defs>

            {/* Solid edges */}
            <g stroke="#9ba1a6" strokeOpacity="0.45" strokeWidth="1.5" fill="none">
              <line x1="118" y1="120" x2="196" y2="120" />
              <line x1="302" y1="120" x2="380" y2="120" />
              <line x1="486" y1="120" x2="560" y2="48" />
              <line x1="486" y1="120" x2="560" y2="120" />
              <line x1="486" y1="120" x2="560" y2="180" />
            </g>

            {/* Dashed terracotta: second customer shares the same device */}
            <path
              d="M 136 196 C 230 224, 466 224, 554 200"
              stroke="#ea580c"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              fill="none"
              markerEnd="url(#fraud-arrow-orange)"
            />

            {/* Nodes */}
            <g fontFamily="ui-monospace, monospace" fontSize="12">
              {/* Customer */}
              <rect x="24" y="96" width="94" height="48" rx="8" fill="#13161c" stroke="rgba(245,244,239,0.18)" />
              <text x="71" y="125" textAnchor="middle" fill="#f5f4ef">Customer</text>

              {/* Account */}
              <rect x="196" y="96" width="106" height="48" rx="8" fill="#13161c" stroke="rgba(245,244,239,0.18)" />
              <text x="249" y="125" textAnchor="middle" fill="#f5f4ef">Account</text>

              {/* Transaction */}
              <rect x="380" y="96" width="106" height="48" rx="8" fill="#13161c" stroke="rgba(245,244,239,0.18)" />
              <text x="433" y="125" textAnchor="middle" fill="#f5f4ef">Transaction</text>

              {/* Merchant (top leaf) */}
              <rect x="560" y="24" width="84" height="48" rx="8" fill="#13161c" stroke="rgba(245,244,239,0.18)" />
              <text x="602" y="53" textAnchor="middle" fill="#f5f4ef">Merchant</text>

              {/* IP (middle leaf) */}
              <rect x="560" y="96" width="84" height="48" rx="8" fill="#13161c" stroke="rgba(245,244,239,0.18)" />
              <text x="602" y="125" textAnchor="middle" fill="#f5f4ef">IP</text>

              {/* Device (bottom leaf — shared entity in the fraud ring) */}
              <rect x="560" y="168" width="84" height="48" rx="8" fill="#13161c" stroke="#ea580c" strokeOpacity="0.6" />
              <text x="602" y="191" textAnchor="middle" fill="#f5f4ef">Device</text>
              <text x="602" y="205" textAnchor="middle" fill="#ea580c" fontSize="9">shared entity</text>

              {/* Second customer on the ring (dashed path origin) */}
              <rect x="24" y="168" width="112" height="48" rx="8" fill="#13161c" stroke="#ea580c" strokeOpacity="0.6" />
              <text x="80" y="191" textAnchor="middle" fill="#ea580c" fontSize="11" fontWeight="bold">Customer B</text>
              <text x="80" y="205" textAnchor="middle" fill="#9ba1a6" fontSize="9">shared device</text>

              {/* Legend badge for the dashed edge — solid fill occludes path behind it cleanly */}
              <g>
                <rect
                  x="218"
                  y="205"
                  width="260"
                  height="22"
                  rx="11"
                  fill="#090b10"
                  stroke="#ea580c"
                  strokeOpacity="0.45"
                />
                <text
                  x="348"
                  y="220"
                  textAnchor="middle"
                  fill="#ea580c"
                  fontSize="10"
                  fontWeight="600"
                  letterSpacing="0.02em"
                >
                  shared device → SHARED_DEVICE_RING
                </text>
              </g>
            </g>
          </svg>

          {/* Mobile: stacked fallback (visible text, screen-reader accessible) */}
          <ul className="sm:hidden space-y-2 text-xs font-mono text-[#9ba1a6]">
            <li className="text-[#f5f4ef]">Customer → Account → Transaction</li>
            <li className="text-[#f5f4ef]">Transaction → Merchant · IP · Device</li>
            <li className="text-orange-400">
              Customer B ┄┄ Device (shared device → SHARED_DEVICE_RING)
            </li>
          </ul>
        </div>

        {/* DETAIL PANELS — graph model, patterns, risk engine, next-best-action, dashboard (open, hairline) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="p-6 border border-white/[0.08]">
            <div className="text-[11px] font-mono text-orange-400 uppercase tracking-widest mb-3">
              GRAPH MODEL · 7 CORE VERTEX TYPES
            </div>
            <div className="flex flex-wrap gap-1.5">
              {VERTEX_TYPES.map((v) => (
                <span
                  key={v}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.03] text-[#f5f4ef] border border-white/[0.08]"
                >
                  {v}
                </span>
              ))}
            </div>
            <p className="text-xs text-[#9ba1a6] font-mono leading-relaxed mt-3 break-words">
              TigerGraph GSQL schema · deterministic local simulator as default runtime
            </p>
          </div>

          <div className="p-6 border border-white/[0.08]">
            <div className="text-[11px] font-mono text-orange-400 uppercase tracking-widest mb-3">
              FRAUD PATTERN DETECTORS · 6
            </div>
            <div className="flex flex-wrap gap-1.5">
              {FRAUD_PATTERNS.map((p) => (
                <span
                  key={p}
                  className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-amber-500/[0.06] text-amber-300 border border-amber-500/25 break-words"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 border border-white/[0.08]">
            <div className="text-[11px] font-mono text-orange-400 uppercase tracking-widest mb-3">
              RISK ENGINE · DETERMINISTIC SCORING
            </div>
            <ul className="space-y-2 text-sm text-[#f5f4ef]/90 font-light leading-relaxed">
              <li>Risk score, evidence confidence, and uncertainty scored independently</li>
              <li className="text-xs font-mono text-[#9ba1a6] break-words">
                Run 1 == Run 2 == Run 3 — identical scores, tiers, and findings
              </li>
            </ul>
          </div>

          <div className="p-6 border border-white/[0.08]">
            <div className="text-[11px] font-mono text-orange-400 uppercase tracking-widest mb-3">
              NEXT-BEST-ACTION ENGINE · DETERMINISTIC
            </div>
            <ul className="space-y-2 text-sm text-[#f5f4ef]/90 font-light leading-relaxed">
              <li>Recommendation scoring ranked by uncertainty reduction and risk relevance</li>
              <li className="text-xs font-mono text-[#9ba1a6] break-words">
                Deduplicated analyst advisory — no automated enforcement
              </li>
            </ul>
          </div>

          <div className="p-6 border border-white/[0.08] md:col-span-2">
            <div className="text-[11px] font-mono text-orange-400 uppercase tracking-widest mb-3">
              INVESTIGATION DASHBOARD
            </div>
            <p className="text-sm text-[#f5f4ef]/90 font-light leading-relaxed break-words">
              React · TypeScript · Tailwind — case directory, force-directed graph canvas, risk
              gauges, pattern findings, recommended actions, and an immutable audit timeline in a
              single investigation workspace.
            </p>
          </div>
        </div>

        {/* IMPLEMENTATION */}
        <div className="mb-10 pt-6 border-t border-white/[0.1]">
          <div className="text-[11px] font-mono text-orange-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <span>IMPLEMENTATION</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {IMPLEMENTATION_STACK.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.03] text-[#f5f4ef] border border-white/[0.08]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* IMPLEMENTED vs NOT YET — honest boundary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="p-6 border border-[#84a98c]/25 bg-[#84a98c]/[0.04]">
            <div className="text-[11px] font-mono text-[#84a98c] uppercase tracking-widest font-bold mb-3">
              IMPLEMENTED · VERIFIED IN REPO
            </div>
            <ul className="space-y-2">
              {IMPLEMENTED.map((item) => (
                <li
                  key={item}
                  className="text-xs text-[#f5f4ef]/90 font-light leading-relaxed flex gap-2 break-words"
                >
                  <span className="text-[#84a98c] font-mono shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 border border-white/[0.08]">
            <div className="text-[11px] font-mono text-[#9ba1a6] uppercase tracking-widest font-bold mb-3">
              NOT YET · HONEST BOUNDARY
            </div>
            <ul className="space-y-3">
              {NOT_YET.map((item) => (
                <li
                  key={item}
                  className="text-xs text-[#9ba1a6] font-light leading-relaxed flex gap-2 break-words"
                >
                  <span className="font-mono shrink-0">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* STATUS + EVIDENCE — verified repository CTA only */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold border badge-built">
              STATUS · BUILT
            </span>
            <span className="text-xs font-mono text-[#9ba1a6] break-words">
              EVIDENCE · Source, schema, agent loop, engines, and tests are in the repository.
            </span>
          </div>
          <a
            href="https://github.com/nikhi20-900/fraud-investigation-agent"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#f5f4ef] text-[#0d0f14] font-mono text-xs sm:text-sm font-semibold hover:bg-white transition-all shadow-lg shrink-0"
            data-cursor="code"
          >
            <GithubIcon className="w-4 h-4" aria-hidden="true" />
            <span>VIEW SOURCE</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
