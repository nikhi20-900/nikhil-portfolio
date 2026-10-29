"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Network, Code, Server, CheckCircle2 } from "lucide-react";

interface SkillCluster {
  title: string;
  tagline: string;
  icon: React.ElementType;
  skills: { name: string; level: string; highlight?: boolean }[];
  relatedProjects: string[];
}

const CLUSTERS: SkillCluster[] = [
  {
    title: "AUTONOMOUS ROBOTICS & PERCEPTION",
    tagline: "Real-world hardware control, costmaps & edge computer vision",
    icon: Bot,
    skills: [
      { name: "ROS 2 Humble", level: "Production", highlight: true },
      { name: "Nav2 Planners & Controllers", level: "Advanced", highlight: true },
      { name: "OpenCV & Edge Vision", level: "Advanced" },
      { name: "Gazebo Simulation", level: "Intermediate" },
      { name: "Raspberry Pi & Serial Telemetry", level: "Hardware" },
      { name: "ESP32 Motor PWM", level: "Embedded" },
    ],
    relatedProjects: ["NAVIGEN (SIH 2025)"],
  },
  {
    title: "AI AGENTS & GRAPH SYSTEMS",
    tagline: "Deterministic reasoning loops, graph queries & grounded intelligence",
    icon: Network,
    skills: [
      { name: "TigerGraph & GSQL", level: "Advanced", highlight: true },
      { name: "LangGraph State Machines", level: "Production", highlight: true },
      { name: "RAG & Vector Embeddings", level: "Advanced" },
      { name: "Deterministic Scoring Engines", level: "Architectural" },
      { name: "FastAPI Async Microservices", level: "Advanced" },
      { name: "OCR & Document Parsing", level: "Practical" },
    ],
    relatedProjects: ["Fraud Investigation Agent", "SchemeSaathi"],
  },
  {
    title: "INTERACTIVE WEB & 3D FRONTEND",
    tagline: "Awwwards-grade scroll choreography, WebGL shaders & React architecture",
    icon: Code,
    skills: [
      { name: "Next.js (App Router)", level: "Production", highlight: true },
      { name: "React Three Fiber & Drei", level: "Creative 3D", highlight: true },
      { name: "GSAP & ScrollTrigger", level: "Advanced" },
      { name: "Lenis Smooth Scroll", level: "Advanced" },
      { name: "TypeScript Strict", level: "Production" },
      { name: "Tailwind CSS v4", level: "Production" },
    ],
    relatedProjects: ["Portfolio 3D", "Pulse Multiplayer"],
  },
  {
    title: "INFRASTRUCTURE & CORE RUNTIMES",
    tagline: "Linux environments, containers & real-time networking",
    icon: Server,
    skills: [
      { name: "Python 3.11+", level: "Primary", highlight: true },
      { name: "Linux / Ubuntu Server", level: "Environment" },
      { name: "WebSockets & Real-time Sync", level: "Advanced" },
      { name: "Git CLI & Automation", level: "Tooling" },
      { name: "Docker Containerization", level: "DevOps" },
      { name: "C++ (ROS 2 nodes)", level: "Systems" },
    ],
    relatedProjects: ["Forge CLI", "NAVIGEN", "Pulse"],
  },
];

const MARQUEE_TOOLS = [
  "ROS 2",
  "TIGERGRAPH",
  "LANGGRAPH",
  "REACT THREE FIBER",
  "NEXT.JS 16",
  "GSAP SCROLLTRIGGER",
  "OPENCV",
  "NAV2",
  "PYTHON",
  "TYPESCRIPT",
  "FASTAPI",
  "DOCKER",
  "LENIS",
  "UBUNTU",
  "TAILWIND CSS",
];

export function SkillsSection() {
  const [activeCluster, setActiveCluster] = useState<number>(0);

  return (
    <section
      id="skills"
      className="relative min-h-screen w-full px-6 sm:px-12 md:px-16 py-32 z-10 border-t divider-subtle overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b divider-subtle pb-6 mb-16 gap-4">
          <span className="font-mono text-xs tracking-widest text-[#8E8E99] uppercase">
            [04 // ARCHITECTURE MATRIX & STACK]
          </span>
          <span className="font-mono text-xs tracking-wider text-accent uppercase">
            ORBITAL SKILLS & CAPABILITIES
          </span>
        </div>

        {/* Section Title */}
        <div className="mb-16">
          <span className="font-mono text-5xl sm:text-7xl font-light text-white/20">
            04
          </span>
          <h2 className="type-h1 text-[#EDEDED] uppercase mt-2">
            TECHNICAL MATRIX.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#8E8E99] max-w-2xl">
            Selected specializations across hardware-level robotics, agent graph intelligence,
            and mathematical creative development.
          </p>
        </div>

        {/* Interactive Cluster Selector + Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Cluster Buttons */}
          <div className="lg:col-span-5 space-y-3">
            {CLUSTERS.map((cluster, idx) => {
              const Icon = cluster.icon;
              const isActive = activeCluster === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveCluster(idx)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start gap-4 ${
                    isActive
                      ? "bg-[#18181D] border-accent shadow-[0_0_25px_rgba(0,240,255,0.15)]"
                      : "bg-[#121215]/60 border-white/10 hover:border-white/25"
                  }`}
                >
                  <div
                    className={`p-3 rounded-xl transition-colors ${
                      isActive ? "bg-accent text-black" : "bg-white/5 text-[#8E8E99]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span
                      className={`font-mono text-xs font-bold uppercase tracking-wider block ${
                        isActive ? "text-accent" : "text-[#EDEDED]"
                      }`}
                    >
                      {cluster.title}
                    </span>
                    <p className="text-xs text-[#8E8E99] leading-relaxed">
                      {cluster.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Cluster Capabilities Matrix */}
          <div className="lg:col-span-7 bg-[#121215]/80 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-md">
            <div className="flex items-center justify-between border-b divider-subtle pb-6 mb-8">
              <div>
                <span className="font-mono text-xs text-[#8E8E99] uppercase">
                  ACTIVE DOMAIN SPECS
                </span>
                <h3 className="text-2xl font-black text-[#EDEDED] mt-1">
                  {CLUSTERS[activeCluster].title}
                </h3>
              </div>
              <span className="font-mono text-xs text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                VERIFIED IN CODE
              </span>
            </div>

            {/* Skills Pills & Levels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {CLUSTERS[activeCluster].skills.map((s, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border transition-colors flex items-center justify-between ${
                    s.highlight
                      ? "bg-accent/5 border-accent/40 text-[#EDEDED]"
                      : "bg-white/5 border-white/10 text-[#8E8E99]"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2
                      className={`w-4 h-4 ${s.highlight ? "text-accent" : "text-[#8E8E99]"}`}
                    />
                    <span className="font-mono text-xs font-semibold text-[#EDEDED]">
                      {s.name}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] uppercase text-accent/80 px-2 py-0.5 rounded bg-white/5">
                    {s.level}
                  </span>
                </div>
              ))}
            </div>

            {/* Related Projects Bridge */}
            <div className="pt-6 border-t divider-subtle">
              <span className="font-mono text-xs text-[#8E8E99] uppercase block mb-3">
                DIRECTLY DEMONSTRATED IN:
              </span>
              <div className="flex flex-wrap gap-2">
                {CLUSTERS[activeCluster].relatedProjects.map((p, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-xs px-3.5 py-1.5 rounded-full bg-accent/10 text-accent border border-accent/30 font-medium"
                  >
                    ▶ {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Infinite Tools Marquee */}
        <div className="mt-24 pt-8 border-t divider-subtle relative overflow-hidden">
          <div className="flex whitespace-nowrap overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-8 items-center"
            >
              {[...MARQUEE_TOOLS, ...MARQUEE_TOOLS].map((tool, i) => (
                <div
                  key={i}
                  className="flex items-center gap-6 font-mono text-xs sm:text-sm tracking-widest text-[#8E8E99] uppercase"
                >
                  <span className="hover:text-accent transition-colors">{tool}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

