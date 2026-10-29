"use client";

import React from "react";
import { Bot, Network, Code, Server, ArrowUpRight } from "lucide-react";
import { useLenis } from "@/components/ui/smooth-scroll";

interface CapabilityGroup {
  number: string;
  title: string;
  description: string;
  icon: React.ElementType;
  primaryProject: { name: string; targetId: string };
  skills: { name: string; context: string }[];
}

const CAPABILITY_GROUPS: CapabilityGroup[] = [
  {
    number: "01",
    title: "AI & Data Systems",
    description:
      "Deterministic reasoning loops, graph-based pattern detection, and retrieval-augmented generation that separate language understanding from verified decision logic.",
    icon: Network,
    primaryProject: { name: "Fraud Investigation Agent & SchemeSaathi", targetId: "#selected-work" },
    skills: [
      { name: "TigerGraph & GSQL", context: "Relational fraud pattern queries" },
      { name: "LangGraph", context: "Stateful agent reasoning loops" },
      { name: "Python & FastAPI", context: "Async microservices & offline evaluation" },
      { name: "RAG Architecture", context: "Vector grounding for scheme criteria" },
      { name: "Machine Learning", context: "Data mining & classification workflows" },
    ],
  },
  {
    number: "02",
    title: "Robotics & Embedded Systems",
    description:
      "Real-world hardware perception and motion planning under physical compute constraints, connecting sensors and motor control loops.",
    icon: Bot,
    primaryProject: { name: "NAVIGEN Autonomous Ground Vehicle", targetId: "#selected-work" },
    skills: [
      { name: "ROS 2 Humble", context: "Nodes, topics & robot middleware" },
      { name: "OpenCV", context: "30 FPS edge obstacle segmentation" },
      { name: "Nav2 Stack", context: "Costmaps & pure-pursuit trajectory" },
      { name: "Raspberry Pi 4", context: "High-level perception & compute" },
      { name: "ESP32", context: "Closed-loop motor PWM & encoder feedback" },
      { name: "Gazebo", context: "Physical simulation & kinematics" },
    ],
  },
  {
    number: "03",
    title: "Full-Stack Engineering",
    description:
      "High-performance interactive interfaces, state synchronization, and accessible design systems built with strict type safety and modern web standards.",
    icon: Code,
    primaryProject: { name: "LPG Dashboard & Portfolio Architecture", targetId: "#selected-work" },
    skills: [
      { name: "React & Next.js", context: "App Router, SSR & component architecture" },
      { name: "TypeScript", context: "Strict typing across client and server" },
      { name: "Tailwind CSS", context: "Design token systems & responsive layouts" },
      { name: "Node.js", context: "Developer CLI tools & script automation" },
      { name: "Framer Motion & GSAP", context: "Purposeful motion & scroll choreography" },
    ],
  },
  {
    number: "04",
    title: "Infrastructure & Tooling",
    description:
      "Developer environment rigor, containerized services, version control pipelines, and real-time database synchronization.",
    icon: Server,
    primaryProject: { name: "Forge Terminal CLI & System Workflows", targetId: "#selected-work" },
    skills: [
      { name: "Git & GitHub CLI", context: "Version control & multi-stage workflows" },
      { name: "Docker", context: "Isolated build and execution containers" },
      { name: "Linux / Ubuntu", context: "Edge deployment & process telemetry" },
      { name: "Firebase Realtime DB", context: "Live IoT telemetry synchronization" },
      { name: "WebSockets", context: "Bidirectional state streaming" },
    ],
  },
];

export function SkillsSection() {
  const { scrollTo } = useLenis();

  return (
    <section
      id="capabilities"
      className="relative w-full px-5 sm:px-8 md:px-12 py-24 sm:py-32 z-10 border-t divider-subtle"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b divider-subtle pb-6 mb-12 sm:mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#a6a69f] uppercase mb-2">
              <span className="text-[#f97316] font-bold">02 /</span>
              <span>TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#f5f4ef] tracking-tight">
              HOW I BUILD.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#a6a69f] max-w-sm">
            Organized by engineering domain — each capability backed by real implementation in code or hardware.
          </p>
        </div>

        {/* 4 Clean Capability Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {CAPABILITY_GROUPS.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.number}
                className="p-6 sm:p-8 rounded-2xl bg-[#13161e] border border-white/[0.08] hover:border-white/[0.18] transition-colors flex flex-col justify-between"
              >
                <div>
                  {/* Top indicator & icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-[#f97316] font-bold">
                      {group.number} // DOMAIN
                    </span>
                    <div className="p-2 rounded-xl bg-white/[0.03] text-[#f97316]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#f5f4ef] tracking-tight mb-2">
                    {group.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#a6a69f] font-light leading-relaxed mb-6">
                    {group.description}
                  </p>

                  {/* Skills Grid */}
                  <div className="space-y-2 mb-6">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-lg bg-[#090b10] border border-white/[0.04] flex items-center justify-between text-xs font-mono"
                      >
                        <span className="font-bold text-[#f5f4ef]">{skill.name}</span>
                        <span className="text-[10px] text-[#a6a69f]">{skill.context}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Project Connection */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#a6a69f] text-[10px] uppercase">Demonstrated in:</span>
                  <button
                    onClick={() => scrollTo(group.primaryProject.targetId, { offset: -50 })}
                    className="flex items-center gap-1 text-[#84a98c] hover:text-[#f5f4ef] transition-colors font-semibold cursor-pointer"
                  >
                    <span>{group.primaryProject.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
