"use client";

import { useState, useEffect } from "react";
import { Camera, Eye, Brain, Compass, Sliders, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./ui/icons";

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

export function NavigenFeatured() {
  const [activeFlowIndex, setActiveFlowIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFlowIndex((prev) => (prev + 1) % SYSTEM_FLOW_STEPS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="navigen" className="py-24 md:py-36 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Orientation (Level 02 Eyebrow) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/[0.08]">
          <div className="text-xs font-mono text-[#9ba1a6] uppercase tracking-widest flex items-center gap-2">
            <span className="text-orange-400 font-bold">01 /</span>
            <span>ROBOTICS &amp; AUTONOMOUS SYSTEMS</span>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30">
            Smart India Hackathon 2025
          </span>
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

        {/* Priority 3: Interactive Animated Execution Pipeline */}
        <div className="my-10 p-6 sm:p-8 rounded-2xl bg-[#090b10] border border-white/[0.08] shadow-2xl">
          <div className="text-[11px] font-mono text-[#9ba1a6] uppercase tracking-widest mb-6 flex items-center justify-between">
            <span>PERCEPTION &amp; DECISION PIPELINE</span>
            <span className="text-amber-400 font-semibold">
              ACTIVE STAGE: {SYSTEM_FLOW_STEPS[activeFlowIndex].name}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {SYSTEM_FLOW_STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isCurrent = activeFlowIndex === idx;

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveFlowIndex(idx)}
                  className={`p-4 rounded-xl text-left transition-all border ${
                    isCurrent
                      ? "bg-[#181d29] border-orange-500/50 shadow-md scale-[1.02]"
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
                  <div className="text-[11px] text-[#9ba1a6] leading-snug">{step.desc}</div>
                </button>
              );
            })}
          </div>

          <div className="mt-4 p-3 rounded-lg bg-[#11131a] border border-white/[0.06] text-xs font-mono text-[#9ba1a6] flex items-center gap-2">
            <span className="text-orange-400 font-bold">›</span>
            <span>{SYSTEM_FLOW_STEPS[activeFlowIndex].detail}</span>
          </div>
        </div>

        {/* Priority 4, 5 & 6: Technical Stack, Explanation & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-6 border-t border-white/[0.08]">
          <div className="lg:col-span-8 space-y-4">
            <p className="text-base sm:text-lg text-[#9ba1a6] leading-relaxed max-w-2xl font-light">
              Vision-based autonomous navigation for an unmanned ground vehicle operating in outdoor
              environments. Combines robotics, computer vision, and autonomous navigation to enable
              an outdoor ground vehicle to understand surroundings and plan collision-free paths
              under physical constraints.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs font-mono text-[#9ba1a6] mr-2">Core Stack:</span>
              {["ROS 2", "Python", "Raspberry Pi", "ESP32", "Computer Vision", "Gazebo"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.03] text-[#f5f4ef] border border-white/[0.08]"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <a
              href="https://github.com/nikhi20-900"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#f5f4ef] text-[#0d0f14] font-mono text-xs sm:text-sm font-semibold hover:bg-white transition-all shadow-lg"
              data-cursor="code"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Explore Project Code</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
