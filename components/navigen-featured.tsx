"use client";

import { Fragment, useState, useEffect } from "react";
import { Camera, Eye, Brain, Compass, Sliders } from "lucide-react";
import { useReducedMotion } from "framer-motion";

const SYSTEM_FLOW_STEPS = [
  {
    step: "01",
    name: "CAMERA",
    desc: "Raw video feed capture at 30 FPS",
    icon: Camera,
    detail: "Wide-angle optical sensor mounted on UGV mast capturing environmental feed.",
  },
  {
    step: "02",
    name: "PERCEPTION",
    desc: "OpenCV obstacle segmentation",
    icon: Eye,
    detail: "Edge detection, contour bounds, and costmap projection on edge hardware.",
  },
  {
    step: "03",
    name: "DECISION",
    desc: "Nav2 path planning algorithm",
    icon: Brain,
    detail: "Real-time waypoint generation and dynamic collision avoidance trajectories.",
  },
  {
    step: "04",
    name: "NAVIGATION",
    desc: "Pure pursuit regulated control",
    icon: Compass,
    detail: "Linear velocity and angular steering calculation at regulated loop intervals.",
  },
  {
    step: "05",
    name: "MOTOR CONTROL",
    desc: "ESP32 dual PWM differential drive",
    icon: Sliders,
    detail: "Closed-loop encoder feedback to high-torque DC motors for physical motion.",
  },
];

const IMPLEMENTATION_STACK = [
  "ROS 2",
  "Python",
  "OpenCV",
  "Nav2",
  "Raspberry Pi",
  "ESP32",
  "Gazebo",
];

const EVIDENCE_POINTS = [
  { k: "Hardware", v: "Physical UGV · Raspberry Pi + ESP32" },
  { k: "Recognition", v: "Smart India Hackathon 2025" },
  { k: "Pipeline", v: "5 stages · 30 FPS edge vision" },
  { k: "Runtime", v: "ROS 2 · Nav2 · OpenCV outdoors" },
];

export function NavigenFeatured() {
  const [activeFlowIndex, setActiveFlowIndex] = useState(0);
  const [userInteracted, setUserInteracted] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    // Auto-cycle only until the user takes control; never under reduced motion
    if (reducedMotion || userInteracted) return;
    const timer = setInterval(() => {
      setActiveFlowIndex((prev) => (prev + 1) % SYSTEM_FLOW_STEPS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [reducedMotion, userInteracted]);

  return (
    <section id="navigen" className="py-24 md:py-36 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Orientation (Level 02 Eyebrow) — SHIPPED, not concept */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/[0.08]">
          <div className="text-xs font-mono text-[#9ba1a6] uppercase tracking-widest flex items-center gap-2">
            <span className="text-orange-400 font-bold">01 /</span>
            <span>SHIPPED · ROBOTICS &amp; AUTONOMOUS SYSTEMS</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold border badge-built">
              BUILT · RAN ON HARDWARE
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30">
              Smart India Hackathon 2025
            </span>
          </div>
        </div>

        {/* Priority 1 & 2: Massive Headline & Narrative */}
        <div className="max-w-4xl mb-10">
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black text-[#f5f4ef] tracking-tighter leading-[0.95] mb-4">
            NAVIGEN
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl text-orange-400 font-medium tracking-tight">
            &ldquo;Teaching a machine to see, decide &amp; move.&rdquo;
          </p>
        </div>

        {/* ========================= PROBLEM ========================= */}
        <div className="mb-10 pt-6 border-t border-white/[0.1]">
          <div className="text-[11px] font-mono text-orange-400 uppercase tracking-widest mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <span>PROBLEM</span>
          </div>
          <p className="text-base sm:text-lg text-[#f5f4ef] leading-relaxed font-light max-w-3xl">
            An unmanned ground vehicle operating outdoors has to perceive unstructured terrain,
            segment obstacles, and plan collision-free trajectories — under real physical
            constraints, running end-to-end on edge hardware rather than in a simulation.
          </p>
        </div>

        {/* ========================= PHYSICAL SYSTEM DIAGRAM ========================= */}
        <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-[#090b10] border border-white/[0.08] shadow-2xl">
          <div className="text-[11px] font-mono uppercase tracking-widest mb-6 flex flex-wrap items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <span className="text-orange-400">PHYSICAL SYSTEM</span>
            <span className="text-white/[0.2]">·</span>
            <span className="text-[#9ba1a6]">SENSOR → EDGE COMPUTE → MOTORS</span>
          </div>

          {/* Vertical stack on mobile, horizontal chain on sm+ */}
          <ol className="flex flex-col sm:flex-row sm:items-stretch gap-2" aria-label="NAVIGEN physical system pipeline">
            {[
              { name: "CAMERA", tech: "Optical sensor · 30 FPS" },
              { name: "COMPUTER VISION", tech: "OpenCV · edges & contours" },
              { name: "PERCEPTION", tech: "Obstacles · costmap" },
              { name: "PLANNING", tech: "Nav2 · waypoints" },
              { name: "NAVIGATION", tech: "Pure pursuit control" },
              { name: "MOTOR CONTROL", tech: "ESP32 · PWM · Pi" },
            ].map((stage, idx, arr) => (
              <li key={stage.name} className="flex sm:flex-col sm:flex-1 sm:items-stretch items-center gap-2 min-w-0">
                <div className="flex-1 min-w-0 w-full p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-left">
                  <div className="text-[10px] font-mono font-bold text-orange-400 mb-1.5">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div className="text-[11px] sm:text-xs font-mono font-bold text-[#f5f4ef] leading-tight break-words">
                    {stage.name}
                  </div>
                  <div className="text-[10px] text-[#9ba1a6] leading-snug mt-1 break-words">
                    {stage.tech}
                  </div>
                </div>
                {idx < arr.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="sm:hidden text-orange-500/60 font-mono shrink-0"
                  >
                    ↓
                  </span>
                )}
                {idx < arr.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden sm:flex items-center text-orange-500/60 font-mono shrink-0 self-center"
                  >
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>

          <div className="mt-5 flex flex-wrap gap-1.5" aria-label="Implemented stack">
            {["ROS 2", "Python", "OpenCV", "Raspberry Pi", "ESP32", "Gazebo", "Nav2"].map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/[0.03] text-[#f5f4ef] border border-white/[0.08]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ========================= SYSTEM (interactive) ========================= */}
        <div className="my-10 p-6 sm:p-8 rounded-2xl bg-[#090b10] border border-white/[0.08] shadow-2xl">
          <div className="text-[11px] font-mono text-[#9ba1a6] uppercase tracking-widest mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <span className="text-orange-400">SYSTEM</span>
            <span className="text-white/[0.2]">·</span>
            <span>CAMERA → PERCEPTION → DECISION → NAVIGATION → MOTOR CONTROL</span>
          </div>
          <div className="text-[11px] font-mono text-[#9ba1a6] uppercase tracking-widest mb-6 flex flex-wrap items-center justify-between gap-2">
            <span>INTERACTIVE PIPELINE — TAP A STAGE</span>
            <span className="text-amber-400 font-semibold">
              ACTIVE STAGE: {SYSTEM_FLOW_STEPS[activeFlowIndex].name}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-stretch gap-2">
            {SYSTEM_FLOW_STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isCurrent = activeFlowIndex === idx;

              return (
                <Fragment key={step.step}>
                  <button
                    onClick={() => {
                      setUserInteracted(true);
                      setActiveFlowIndex(idx);
                    }}
                    aria-pressed={isCurrent}
                    className={`flex-1 min-w-0 p-4 rounded-xl text-left transition-all border ${
                      isCurrent
                        ? "bg-[#181d29] border-orange-500/50 shadow-md"
                        : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] opacity-75 hover:opacity-100"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-xs font-mono font-bold ${
                          isCurrent ? "text-orange-400" : "text-[#9ba1a6]"
                        }`}
                      >
                        {step.step}
                      </span>
                      <Icon
                        className={`w-4 h-4 ${
                          isCurrent ? "text-orange-400" : "text-[#9ba1a6]"
                        }`}
                      />
                    </div>
                    <div className="text-xs font-bold text-[#f5f4ef] mb-1">{step.name}</div>
                    <div className="text-[11px] text-[#9ba1a6] leading-snug break-words">{step.desc}</div>
                  </button>
                  {idx < SYSTEM_FLOW_STEPS.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden sm:flex items-center text-orange-500/60 font-mono shrink-0 self-center"
                    >
                      →
                    </span>
                  )}
                </Fragment>
              );
            })}
          </div>

          <div className="mt-4 p-3 rounded-lg bg-[#11131a] border border-white/[0.06] text-xs font-mono text-[#9ba1a6] flex items-center gap-2">
            <span className="text-orange-400 font-bold">›</span>
            <span className="break-words">{SYSTEM_FLOW_STEPS[activeFlowIndex].detail}</span>
          </div>
        </div>

        {/* ========================= IMPLEMENTATION ========================= */}
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
          <p className="text-sm text-[#9ba1a6] leading-relaxed font-light mt-4 max-w-3xl">
            Camera input flows through OpenCV perception into Nav2 path planning and pure-pursuit
            control, then out to an ESP32 motor driver — a ROS 2 stack simulated in Gazebo and
            deployed on a Raspberry Pi-powered UGV.
          </p>
        </div>

        {/* ========================= EVIDENCE ========================= */}
        <div className="pt-6 border-t border-white/[0.08]">
          <div className="text-[11px] font-mono text-orange-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <span>EVIDENCE</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            {EVIDENCE_POINTS.map((point) => (
              <div
                key={point.k}
                className="p-4 rounded-xl bg-[#84a98c]/[0.05] border border-[#84a98c]/25"
              >
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#84a98c] font-bold mb-1.5">
                  {point.k}
                </div>
                <div className="text-xs font-mono text-[#f5f4ef] leading-snug break-words">
                  {point.v}
                </div>
              </div>
            ))}
          </div>

          {/* No public repo — honest case-study label, never a fake GitHub CTA */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.1] text-[#f5f4ef] font-mono text-xs font-bold uppercase tracking-widest">
              STATUS · BUILT
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.1] text-[#9ba1a6] font-mono text-xs">
              CASE STUDY · hardware build for Smart India Hackathon 2025 — repository not public
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
