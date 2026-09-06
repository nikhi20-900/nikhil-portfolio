"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Bot, Wifi, Layers, Terminal, type LucideIcon } from "lucide-react";

interface LabItem {
  id: string;
  number: string;
  title: string;
  techs: string[];
  status: "BUILDING" | "BUILT" | "EXPLORING";
  statusColor: string;
  description: string;
  details: string;
  icon: LucideIcon;
}

const LAB_ITEMS: LabItem[] = [
  {
    id: "ugv",
    number: "01",
    title: "AUTONOMOUS UGV",
    techs: ["ROS 2", "Computer Vision", "Raspberry Pi", "ESP32", "Gazebo"],
    status: "BUILDING",
    statusColor: "text-emerald-400 bg-emerald-950/40 border-emerald-800/40",
    description:
      "Outdoor vision-based autonomous navigation stack for an Unmanned Ground Vehicle under real physical constraints.",
    details:
      "Integrating Nav2 pure pursuit controllers, differential PWM drive, and edge OpenCV contour analysis. Built for Smart India Hackathon 2025.",
    icon: Bot,
  },
  {
    id: "iot",
    number: "02",
    title: "REAL-TIME IOT",
    techs: ["React", "Vite", "Firebase", "Recharts", "Framer Motion"],
    status: "BUILT",
    statusColor: "text-amber-400 bg-amber-950/40 border-amber-800/40",
    description:
      "Real-time gas concentration and valve automation interface streaming telemetry with live thresholds and activity logs.",
    details:
      "Connects physical sensor telemetry via Firebase Realtime Database to an animated web dashboard with automatic valve emergency alerts.",
    icon: Wifi,
  },
  {
    id: "web-exp",
    number: "03",
    title: "NEXT.JS EXPERIMENTS",
    techs: ["Next.js", "Node.js", "React", "TypeScript", "Tailwind CSS"],
    status: "EXPLORING",
    statusColor: "text-orange-400 bg-orange-950/40 border-orange-800/40",
    description:
      "Modern server components, dynamic data handling, and responsive component architecture experiments.",
    details:
      "Expanding from clean frontend interfaces into full-stack application development, API design, and modular UI architectures.",
    icon: Layers,
  },
  {
    id: "forge",
    number: "04",
    title: "FORGE",
    techs: ["AI Agents", "CLI", "Automation", "Developer Tooling"],
    status: "BUILDING",
    statusColor: "text-orange-400 bg-orange-950/40 border-orange-800/40",
    description:
      "AI SOFTWARE ENGINEERING AGENT — An AI-assisted developer tool designed to help plan, analyze, code, test, debug, and review software directly from the terminal.",
    details:
      "Building a developer tool that explores how AI agents can participate in real software engineering workflows.",
    icon: Terminal,
  },
];

export function BuildersLab() {
  const [activeId, setActiveId] = useState<string>("ugv");

  return (
    <section id="lab" className="py-24 md:py-36 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header (Level 02 Heading) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="text-xs font-mono text-[#9ba1a6] uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="text-orange-400 font-bold">01 /</span>
              <span>EXPERIMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#f5f4ef] tracking-tight">
              BUILDER&apos;S LAB
            </h2>
          </div>
          <p className="text-sm font-mono text-[#9ba1a6] max-w-sm">
            Active prototypes, hardware integrations, and software experiments currently in
            progress.
          </p>
        </div>

        {/* Interactive Rows (Quieter than featured projects; Active = 100%, Inactive = 55%) */}
        <div className="space-y-4">
          {LAB_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                data-lab-row="true"
                onMouseEnter={() => setActiveId(item.id)}
                onClick={() => setActiveId(item.id)}
                className={`relative rounded-2xl p-6 sm:p-8 cursor-pointer transition-all duration-300 border ${
                  isActive
                    ? "bg-[#161922] border-white/[0.18] shadow-2xl opacity-100 scale-[1.005]"
                    : "bg-[#111319]/40 border-white/[0.04] opacity-55 hover:opacity-85 hover:bg-[#141720]"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {/* Left: Number + Title */}
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                    <span className="font-mono text-sm sm:text-base text-[#9ba1a6] font-bold">
                      {item.number}
                    </span>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#f5f4ef] tracking-tight">
                          {item.title}
                        </h3>
                        <span
                          className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${item.statusColor}`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 text-xs font-mono text-[#9ba1a6]">
                        {item.techs.map((t, idx) => (
                          <span key={t}>
                            {t}
                            {idx < item.techs.length - 1 && <span className="ml-2 text-white/[0.2]">·</span>}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Expand Arrow */}
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: isActive ? 90 : 0, x: isActive ? 4 : 0 }}
                      className="w-10 h-10 rounded-full border border-white/[0.1] flex items-center justify-center text-[#f5f4ef]"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>

                {/* Expanding Content Drawer */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="overflow-hidden border-t border-white/[0.08] pt-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                        <div className="md:col-span-8 space-y-3">
                          <p className="text-base text-[#f5f4ef] leading-relaxed">
                            {item.description}
                          </p>
                          <p className="text-xs sm:text-sm text-[#9ba1a6] leading-relaxed font-mono">
                            {item.details}
                          </p>
                        </div>

                        <div className="md:col-span-4 p-4 rounded-xl bg-[#0d0f14] border border-white/[0.06] flex items-center gap-3">
                          <div className="p-3 rounded-lg bg-white/[0.04] text-amber-500">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <div className="text-[10px] font-mono text-[#9ba1a6] uppercase">
                              Execution Mode
                            </div>
                            <div className="text-xs font-mono font-semibold text-[#f5f4ef]">
                              Hands-On Prototyping
                            </div>
                          </div>
                        </div>
                      </div>
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
