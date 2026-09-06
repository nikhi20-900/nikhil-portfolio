"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Milestone {
  id: string;
  stage: string;
  title: string;
  badge: string;
  project?: string;
  problemStatement?: string;
  techs?: string[];
  description: string;
  learnings: string[];
}

const MILESTONES: Milestone[] = [
  {
    id: "college",
    stage: "STAGE 01",
    title: "College Technical Hackathons",
    badge: "Foundation Sprints",
    description:
      "Actively participated in college-level hackathons and technical events, working on technology-based ideas and initial software prototypes.",
    learnings: [
      "Rapid team ideation under tight deadlines",
      "Software & embedded microcontroller experimentation",
      "Receiving immediate feedback from faculty and peers",
    ],
  },
  {
    id: "inter-college",
    stage: "STAGE 02",
    title: "Inter-College Hackathons",
    badge: "Competitive Arenas",
    description:
      "Participated in multiple inter-college hackathons across institutions, gaining crucial experience in rapid prototyping, cross-functional collaboration, and live technical demonstrations.",
    learnings: [
      "Technical execution under strict time limits",
      "Translating ambiguous problem statements into working architectures",
      "Clear technical presentation under scrutiny",
    ],
  },
  {
    id: "nasa",
    stage: "STAGE 03",
    title: "NASA Challenge Hackathon",
    badge: "Global Innovation",
    description:
      "Participated in the NASA Challenge Hackathon, working collaboratively in a team on an innovation-focused technology challenge under real-world problem constraints.",
    learnings: [
      "Global-level collaborative brainstorming",
      "Multidisciplinary problem solving",
      "Rapid idea iteration and feasibility validation",
    ],
  },
  {
    id: "sih-2025",
    stage: "STAGE 04",
    title: "Smart India Hackathon 2025",
    badge: "National Level Innovation",
    project: "NAVIGEN",
    problemStatement:
      "Vision Based Autonomous Navigation for Unmanned Ground Vehicle for Outdoor Environment",
    techs: ["ROS 2", "Python", "Raspberry Pi", "ESP32", "Computer Vision", "Gazebo"],
    description:
      "Engineered NAVIGEN, an autonomous navigation stack for an Unmanned Ground Vehicle navigating outdoor environments using computer vision and edge microcontrollers.",
    learnings: [
      "High-pressure hardware-software integration",
      "Outdoor vision perception & real-time path planning",
      "Sensor fusion with differential PWM motor drivers",
    ],
  },
];

export function Hackathons() {
  const [activeId, setActiveId] = useState<string>("sih-2025");

  return (
    <section id="hackathons" className="py-24 md:py-36 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header (Level 02 Heading) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="text-xs font-mono text-[#9ba1a6] uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="text-orange-400 font-bold">06 /</span>
              <span>PRESSURE-TESTED BUILDING</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#f5f4ef] tracking-tight">
              BUILT UNDER PRESSURE.
            </h2>
          </div>
          <p className="text-sm font-mono text-[#9ba1a6] max-w-sm">
            &ldquo;Hackathons taught me how to turn an idea into a prototype before the clock runs
            out.&rdquo;
          </p>
        </div>

        {/* Milestone Timeline / Expanding Cards (Active = 100%, Inactive = 55%) */}
        <div className="space-y-4">
          {MILESTONES.map((milestone) => {
            const isActive = activeId === milestone.id;

            return (
              <motion.div
                key={milestone.id}
                onMouseEnter={() => setActiveId(milestone.id)}
                onClick={() => setActiveId(milestone.id)}
                className={`p-6 sm:p-8 rounded-2xl cursor-pointer transition-all duration-300 border ${
                  isActive
                    ? "bg-[#141822] border-white/[0.2] shadow-2xl opacity-100 scale-[1.005]"
                    : "bg-[#101219]/40 border-white/[0.04] opacity-55 hover:opacity-85 hover:bg-[#131620]"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                    <span className="font-mono text-xs text-[#9ba1a6] font-bold tracking-widest">
                      {milestone.stage}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#f5f4ef]">
                          {milestone.title}
                        </h3>
                        <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.05] text-[#9ba1a6] border border-white/[0.08]">
                          {milestone.badge}
                        </span>
                      </div>
                      {milestone.project && (
                        <div className="text-xs font-mono text-orange-400 font-semibold">
                          Project: {milestone.project}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: isActive ? 90 : 0 }}
                      className="w-9 h-9 rounded-full border border-white/[0.1] flex items-center justify-center text-[#f5f4ef]"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 20 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden border-t border-white/[0.08] pt-6"
                    >
                      {milestone.problemStatement && (
                        <div className="mb-4 p-3.5 rounded-xl bg-[#0a0c12] border border-white/[0.06]">
                          <div className="text-[10px] font-mono text-[#9ba1a6] uppercase tracking-wider mb-1">
                            Problem Statement:
                          </div>
                          <p className="text-xs sm:text-sm text-[#f5f4ef] italic font-mono">
                            &ldquo;{milestone.problemStatement}&rdquo;
                          </p>
                        </div>
                      )}

                      <p className="text-sm sm:text-base text-[#f5f4ef] leading-relaxed mb-4">
                        {milestone.description}
                      </p>

                      <div className="mb-4">
                        <div className="text-[11px] font-mono text-[#9ba1a6] uppercase tracking-wider mb-2">
                          Key Experiences &amp; Learnings:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {milestone.learnings.map((l) => (
                            <div
                              key={l}
                              className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] text-xs text-[#9ba1a6]"
                            >
                              <span className="text-orange-500 mr-1.5 font-bold">✓</span>
                              <span>{l}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {milestone.techs && (
                        <div className="flex flex-wrap items-center gap-1.5 pt-2">
                          <span className="text-[11px] font-mono text-[#9ba1a6] mr-2">
                            Technologies:
                          </span>
                          {milestone.techs.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-0.5 rounded text-xs font-mono bg-white/[0.04] text-[#f5f4ef] border border-white/[0.08]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
