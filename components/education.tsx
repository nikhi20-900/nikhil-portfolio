"use client";

import { useState } from "react";
import { GraduationCap, BookOpen } from "lucide-react";

interface LearningChip {
  name: string;
  category: string;
  status: "BUILDING" | "EXPLORING";
  note: string;
}

const LEARNING_ITEMS: LearningChip[] = [
  {
    name: "React.js",
    category: "Frontend UI",
    status: "BUILDING",
    note: "Modern component state, client dashboards & responsive interfaces",
  },
  {
    name: "Next.js",
    category: "Full-Stack Framework",
    status: "EXPLORING",
    note: "Server-side rendering, App Router & scalable web architecture",
  },
  {
    name: "Node.js",
    category: "Backend Runtime",
    status: "EXPLORING",
    note: "REST APIs, asynchronous handling & microservice endpoints",
  },
  {
    name: "AI & Computer Vision",
    category: "Visual Perception",
    status: "EXPLORING",
    note: "OpenCV contour analysis, obstacle detection & visual feeds",
  },
  {
    name: "ROS 2",
    category: "Robotics Middleware",
    status: "BUILDING",
    note: "Nav2 path planning, nodes, publishers/subscribers & robot control",
  },
];

export function Education() {
  const [selectedLearning, setSelectedLearning] = useState<LearningChip>(LEARNING_ITEMS[0]);

  return (
    <section id="education" className="py-24 md:py-36 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header (Level 02 Heading) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="text-xs font-mono text-[#9ba1a6] uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="text-orange-400 font-bold">08 /</span>
              <span>FOUNDATIONS &amp; HORIZONS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#f5f4ef] tracking-tight">
              EDUCATION &amp; LEARNING
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="text-sm font-mono text-[#9ba1a6]">
              Academic theory paired with self-directed technical building.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Formal Education: DSU + DPS */}
          <div className="lg:col-span-6 space-y-5">
            <div className="p-7 sm:p-8 rounded-2xl bg-[#11141d] border border-white/[0.08]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" />
                  <span>CURRENT UNDERGRADUATE</span>
                </span>
                <span className="text-xs font-mono text-[#9ba1a6]">Bangalore, India</span>
              </div>

              <h3 className="text-2xl font-bold text-[#f5f4ef] mb-1">
                Dayananda Sagar University (DSU)
              </h3>
              <p className="text-base font-medium text-amber-400 mb-3">
                Bachelor of Computer Applications (BCA)
              </p>

              <p className="text-sm text-[#9ba1a6] leading-relaxed">
                Core coursework in computer applications, programming fundamentals, data
                structures, database management, web systems, and computational theory.
              </p>
            </div>

            <div className="p-7 sm:p-8 rounded-2xl bg-[#11141d] border border-white/[0.08]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#9ba1a6] font-semibold flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" />
                  <span>SCHOOL EDUCATION</span>
                </span>
                <span className="text-xs font-mono text-[#9ba1a6]">Foundations</span>
              </div>

              <h3 className="text-2xl font-bold text-[#f5f4ef] mb-1">
                Delhi Public School (DPS)
              </h3>
              <p className="text-base font-medium text-[#f5f4ef]/80 mb-3">School Education</p>

              <p className="text-sm text-[#9ba1a6] leading-relaxed">
                Foundational schooling that built initial scientific inquiry, mathematics, and an
                abiding interest in technology and computer science.
              </p>
            </div>
          </div>

          {/* WHAT I'M LEARNING (Interactive status tracker) */}
          <div className="lg:col-span-6 p-7 sm:p-8 rounded-2xl bg-[#11141d] border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
                <h4 className="text-xl font-bold text-[#f5f4ef]">What I&apos;m Learning Now</h4>
                <span className="text-xs font-mono text-[#9ba1a6]">Real Learning Status</span>
              </div>

              <div className="space-y-3 mb-6">
                {LEARNING_ITEMS.map((item) => {
                  const isSelected = selectedLearning.name === item.name;

                  return (
                    <button
                      key={item.name}
                      onClick={() => setSelectedLearning(item)}
                      onMouseEnter={() => setSelectedLearning(item)}
                      className={`w-full p-3.5 rounded-xl text-left transition-all border flex items-center justify-between ${
                        isSelected
                          ? "bg-[#181d29] border-orange-500/50 shadow-md"
                          : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-[#f5f4ef]">{item.name}</span>
                        <span className="text-[11px] font-mono text-[#9ba1a6] hidden sm:inline">
                          ({item.category})
                        </span>
                      </div>

                      <span
                        className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${
                          item.status === "BUILDING"
                            ? "text-emerald-400 bg-emerald-950/40 border-emerald-800/40"
                            : "text-amber-400 bg-amber-950/40 border-amber-800/40"
                        }`}
                      >
                        {item.status}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Note about active learning item */}
            <div className="p-4 rounded-xl bg-[#0d0f14] border border-white/[0.06]">
              <div className="text-[10px] font-mono text-[#9ba1a6] uppercase tracking-wider mb-1">
                Active Horizon · {selectedLearning.name}:
              </div>
              <p className="text-xs sm:text-sm font-mono text-[#f5f4ef] leading-relaxed">
                {selectedLearning.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
