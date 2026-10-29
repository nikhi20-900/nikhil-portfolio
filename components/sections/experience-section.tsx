"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Milestone, Trophy, GraduationCap, GitPullRequest } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TimelineItem {
  year: string;
  badge: string;
  role: string;
  organization: string;
  icon: React.ElementType;
  description: string;
  points: string[];
}

const TIMELINE: TimelineItem[] = [
  {
    year: "2025",
    badge: "COMPETITION / NATIONAL FINALIST",
    role: "Robotics & Perception Lead · NAVIGEN",
    organization: "Smart India Hackathon 2025",
    icon: Trophy,
    description: "Designed, engineered, and demonstrated autonomous navigation for unmanned ground vehicles over unpredictable outdoor obstacles.",
    points: [
      "Built custom ROS 2 nodes for edge vision obstacle classification",
      "Integrated ultrasonic array + camera costmaps into Nav2 stack",
      "Achieved sub-45ms closed-loop hardware actuation via ESP32 PWM bridge",
    ],
  },
  {
    year: "2025",
    badge: "RESEARCH & AGENTIC ARCHITECTURE",
    role: "Graph & Autonomous Systems Architect",
    organization: "Independent Systems Engineering",
    icon: Milestone,
    description: "Architected end-to-end fraud investigation agent on TigerGraph GSQL and LangGraph cyclical state machines.",
    points: [
      "Authored 6 deep graph inspection queries over 7 entity types",
      "Engineered deterministic uncertainty scoring to prevent hallucination",
      "Packaged high-performance React investigation cockpit with frozen audit trails",
    ],
  },
  {
    year: "2023 - 2026",
    badge: "ACADEMICS",
    role: "Bachelor of Computer Applications (BCA)",
    organization: "Dayananda Sagar University, Bangalore",
    icon: GraduationCap,
    description: "Rigorous focus on computer systems, discrete algorithms, data mining, and distributed software engineering.",
    points: [
      "Conducted UCI Student Performance data mining & clustering research",
      "Led technical project teams across full-stack and systems engineering",
      "Active participant in collegiate hackathons and tech symposiums",
    ],
  },
  {
    year: "2024 - 2025",
    badge: "OPEN SOURCE & TOOLING",
    role: "Developer Tooling Engineer",
    organization: "Forge CLI & Modern Workflows",
    icon: GitPullRequest,
    description: "Pioneered autonomous CLI agent orchestration tools with 8-stage state verification loops.",
    points: [
      "Engineered terminal UI state machines with live shell process hooks",
      "Implemented modular RAG indexing for swift local documentation lookups",
      "Promoted architecture-first engineering practices in open repositories",
    ],
  },
];

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !lineRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const nodes = containerRef.current.querySelectorAll<HTMLElement>(".timeline-node");

    if (prefersReducedMotion) {
      lineRef.current.style.transform = "scaleY(1)";
      nodes.forEach((n) => {
        n.style.opacity = "1";
        n.style.transform = "none";
      });
      return;
    }
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 65%",
          end: "bottom 85%",
          scrub: 0.6,
        },
      }
    );

    // Light up nodes as they enter view
    nodes.forEach((node) => {
      gsap.fromTo(
        node,
        { opacity: 0.25, x: 20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: node,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === containerRef.current) t.kill();
      });
    };
  }, []);

  return (
    <section
      id="experience"
      className="relative min-h-screen w-full px-6 sm:px-12 md:px-16 py-32 z-10 border-t divider-subtle"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b divider-subtle pb-6 mb-16 gap-4">
          <span className="font-mono text-xs tracking-widest text-[#8E8E99] uppercase">
            [05 // TRACK RECORD & TIMELINE]
          </span>
          <span className="font-mono text-xs tracking-wider text-accent uppercase">
            EXPERIENCE & MILESTONES
          </span>
        </div>

        {/* Section Title */}
        <div className="mb-20">
          <span className="font-mono text-5xl sm:text-7xl font-light text-white/20">
            05
          </span>
          <h2 className="type-h1 text-[#EDEDED] uppercase mt-2">
            CHRONOLOGY.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#8E8E99] max-w-2xl">
            Key milestones where technical architecture met production deadlines, national stages,
            and real academic rigor.
          </p>
        </div>

        {/* Timeline Container with Scroll-Drawn Center/Left Line */}
        <div ref={containerRef} className="relative pl-6 sm:pl-10">
          {/* Background track */}
          <div className="absolute top-0 bottom-0 left-[11px] sm:left-[19px] w-[2px] bg-white/10" />

          {/* Active Drawn Line */}
          <div
            ref={lineRef}
            className="absolute top-0 bottom-0 left-[11px] sm:left-[19px] w-[2px] bg-accent origin-top shadow-[0_0_15px_#00f0ff]"
            style={{ transform: "scaleY(0)" }}
          />

          {/* Timeline Nodes */}
          <div className="space-y-16">
            {TIMELINE.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="timeline-node relative pl-8 sm:pl-12 group"
                >
                  {/* Glowing Node Dot */}
                  <div className="absolute -left-[5px] sm:-left-[3px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0A0A0B] border-2 border-accent shadow-[0_0_10px_#00f0ff] group-hover:scale-125 transition-transform" />

                  {/* Card Body */}
                  <div className="p-8 rounded-3xl bg-[#121215]/85 border border-white/10 backdrop-blur-md group-hover:border-accent/40 transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b divider-subtle pb-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-accent/10 text-accent">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-mono text-xs font-bold text-accent uppercase">
                          {item.badge}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-[#8E8E99]">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#EDEDED] mb-1">
                      {item.role}
                    </h3>
                    <p className="font-mono text-xs text-[#8E8E99] uppercase mb-4">
                      {item.organization}
                    </p>

                    <p className="text-sm text-[#8E8E99] leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2 font-mono text-xs text-[#EDEDED]/80">
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-center gap-2.5">
                          <span className="text-accent">▹</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

