"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Trophy, GraduationCap, GitPullRequest, Award } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface MilestoneItem {
  year: string;
  category: "HACKATHONS & INNOVATION" | "ACADEMIC" | "INDEPENDENT SYSTEMS" | "COMPETITIVE SPRINTS";
  title: string;
  organization: string;
  icon: React.ElementType;
  summary: string;
  verifiedDetails: string[];
}

const MILESTONES: MilestoneItem[] = [
  {
    year: "2025",
    category: "HACKATHONS & INNOVATION",
    title: "Robotics & Perception Lead · NAVIGEN",
    organization: "Smart India Hackathon 2025",
    icon: Trophy,
    summary:
      "Engineered an autonomous navigation stack for an Unmanned Ground Vehicle (UGV) operating in outdoor environments using computer vision and edge microcontrollers.",
    verifiedDetails: [
      "Physical UGV running Raspberry Pi (high-level compute) + ESP32 (motor control)",
      "30 FPS edge obstacle segmentation using OpenCV contour detection",
      "Nav2 path planning algorithm and pure-pursuit closed-loop differential motor drive",
      "Demonstrated working physical hardware under hackathon constraints",
    ],
  },
  {
    year: "2023 - 2026",
    category: "ACADEMIC",
    title: "Bachelor of Computer Applications (BCA)",
    organization: "Dayananda Sagar University (DSU), Bangalore",
    icon: GraduationCap,
    summary:
      "Undergraduate computer science and application coursework focusing on algorithms, database systems, data structures, and statistical computing.",
    verifiedDetails: [
      "Core computing curriculum: DBMS, OOP, Computer Architecture, Data Mining",
      "Conducted research case study on UCI Student Performance dataset (reproducible notebook published)",
      "Led technical project teams across software development and hardware prototyping",
    ],
  },
  {
    year: "2024 - 2025",
    category: "INDEPENDENT SYSTEMS",
    title: "Graph & Autonomous Systems Architecture",
    organization: "Independent Open Source Projects",
    icon: GitPullRequest,
    summary:
      "Researched and implemented graph-native investigation patterns and agentic developer tooling with deterministic verification layers.",
    verifiedDetails: [
      "Built Fraud Investigation Agent on TigerGraph GSQL and LangGraph cyclical state loops",
      "Authored 6 heuristic graph pattern detectors across 7 entity types (public repository)",
      "Designed SchemeSaathi phase 1 scaffold separating LLM language parsing from rules verification",
      "Constructed LPG Gas Leakage real-time IoT dashboard connected to MQ-6 physical sensors",
    ],
  },
  {
    year: "2023 - 2024",
    category: "COMPETITIVE SPRINTS",
    title: "Collegiate & Global Hackathon Sprints",
    organization: "NASA Challenge & Inter-College Competitions",
    icon: Award,
    summary:
      "Participated in multidisciplinary hackathon sprints solving innovation challenges under strict time and technical constraints.",
    verifiedDetails: [
      "Participated in NASA Challenge Hackathon working collaboratively in multidisciplinary team",
      "Engaged in collegiate technical hackathons translating problem statements into working prototypes",
      "Gained critical practical experience in rapid architecture validation and live technical presentation",
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

    nodes.forEach((node) => {
      gsap.fromTo(
        node,
        { opacity: 0.3, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: node,
            start: "top 82%",
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
      className="relative w-full px-5 sm:px-8 md:px-12 py-24 sm:py-32 z-10 border-t divider-subtle"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b divider-subtle pb-6 mb-12 sm:mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#a6a69f] uppercase mb-2">
              <span className="text-[#f97316] font-bold">04 /</span>
              <span>EXPERIENCE &amp; JOURNEY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#f5f4ef] tracking-tight">
              VERIFIED TRACK RECORD.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#a6a69f] max-w-sm">
            Distinct milestones across hardware hackathons, academic foundations, and open-source systems.
          </p>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative pl-4 sm:pl-8">
          {/* Vertical Track Line */}
          <div className="absolute top-2 bottom-2 left-[7px] sm:left-[15px] w-[2px] bg-white/[0.08]" />

          {/* Active Scroll-Drawn Line in Terracotta */}
          <div
            ref={lineRef}
            className="absolute top-2 bottom-2 left-[7px] sm:left-[15px] w-[2px] bg-[#f97316] origin-top"
            style={{ transform: "scaleY(0)" }}
          />

          {/* Milestone Items */}
          <div className="space-y-10 sm:space-y-12">
            {MILESTONES.map((item, idx) => {
              const Icon = item.icon;

              return (
                <div key={idx} className="timeline-node relative pl-6 sm:pl-10">
                  {/* Glowing Node Marker */}
                  <div className="absolute -left-[3px] sm:-left-[1px] top-2 w-3.5 h-3.5 rounded-full bg-[#0d0f14] border-2 border-[#f97316]" />

                  {/* Card Content */}
                  <div className="p-6 sm:p-8 rounded-2xl bg-[#13161e] border border-white/[0.08] hover:border-white/[0.18] transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.06] pb-3 mb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="p-1.5 rounded-lg bg-white/[0.03] text-[#f97316]">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-mono text-xs font-bold text-[#f97316] tracking-wider uppercase">
                          {item.category}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-[#a6a69f]">{item.year}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#f5f4ef] mb-1">
                      {item.title}
                    </h3>

                    <p className="font-mono text-xs text-[#84a98c] uppercase tracking-wider mb-3">
                      {item.organization}
                    </p>

                    <p className="text-xs sm:text-sm text-[#a6a69f] leading-relaxed mb-5 font-light">
                      {item.summary}
                    </p>

                    {/* Verified Details */}
                    <ul className="space-y-2 font-mono text-xs text-[#f5f4ef]/85">
                      {item.verifiedDetails.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5">
                          <span className="text-[#f97316] shrink-0 font-bold">›</span>
                          <span>{detail}</span>
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
