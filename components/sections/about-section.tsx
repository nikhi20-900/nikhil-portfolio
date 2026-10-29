"use client";

import React from "react";
import { GraduationCap, BookOpen, Wrench, Shield, Compass } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full px-5 sm:px-8 md:px-12 py-24 sm:py-32 z-10 border-t divider-subtle"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b divider-subtle pb-6 mb-12 sm:mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#a6a69f] uppercase mb-2">
              <span className="text-[#f97316] font-bold">03 /</span>
              <span>ABOUT &amp; ENGINEERING PHILOSOPHY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#f5f4ef] tracking-tight">
              FIRST PRINCIPLES.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#a6a69f] max-w-sm">
            BCA student at Dayananda Sagar University, Bangalore. Building software, intelligent systems, and robotics.
          </p>
        </div>

        {/* Human Bio & Approach Statement */}
        <div className="mb-12 p-6 sm:p-10 rounded-2xl bg-[#13161e] border border-white/[0.08]">
          <p className="text-base sm:text-lg md:text-xl text-[#f5f4ef] font-light leading-relaxed max-w-3xl mb-6">
            I approach engineering from physical and architectural constraints first. Rather than
            collecting programming languages, I start with what the system must accomplish — whether
            that means running 30 FPS obstacle segmentation on a mast-mounted camera for an outdoor
            UGV, authoring GSQL queries to uncover fraud syndicates, or structuring deterministic
            rules so a civic welfare engine never hallucinates an eligibility claim.
          </p>

          <p className="text-sm sm:text-base text-[#a6a69f] leading-relaxed max-w-3xl mb-8">
            I treat modern developer tooling and AI workflows as force multipliers for software
            development: accelerating rapid prototyping while maintaining deep understanding of the
            underlying execution loops, memory bounds, and failure modes.
          </p>

          <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center gap-4 text-xs font-mono text-[#84a98c]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#84a98c]" />
              <span>Learn by building</span>
            </span>
            <span className="text-white/20">·</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#84a98c]" />
              <span>Ship under real constraints</span>
            </span>
            <span className="text-white/20">·</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#84a98c]" />
              <span>Keep status labels honest</span>
            </span>
          </div>
        </div>

        {/* Two-Column Grid: Education & Approach Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Left: Formal Education */}
          <div className="space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#13161e] border border-white/[0.08]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#84a98c] font-semibold flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" />
                  <span>CURRENT UNDERGRADUATE</span>
                </span>
                <span className="text-xs font-mono text-[#a6a69f]">Bangalore, India</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#f5f4ef] mb-1">
                Dayananda Sagar University (DSU)
              </h3>
              <p className="text-sm font-medium text-[#f97316] mb-3">
                Bachelor of Computer Applications (BCA) · 2023 - 2026
              </p>

              <p className="text-xs sm:text-sm text-[#a6a69f] leading-relaxed">
                Focused on discrete systems, data mining, database architectures, data structures,
                and applied computing. Conducted academic research on student performance clustering
                with verifiable notebooks.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-[#13161e] border border-white/[0.08]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-[#a6a69f] font-semibold flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4" />
                  <span>FOUNDATIONS</span>
                </span>
                <span className="text-xs font-mono text-[#a6a69f]">Schooling</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#f5f4ef] mb-1">
                Delhi Public School (DPS)
              </h3>
              <p className="text-sm font-medium text-[#f5f4ef]/80 mb-3">School Education</p>

              <p className="text-xs sm:text-sm text-[#a6a69f] leading-relaxed">
                Built foundational discipline in mathematics, physical sciences, and computer
                programming that sparked a continuing pursuit of systems engineering.
              </p>
            </div>
          </div>

          {/* Right: How I Approach Engineering */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#13161e] border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
                <h3 className="text-lg sm:text-xl font-bold text-[#f5f4ef]">
                  Core Engineering Values
                </h3>
                <span className="text-xs font-mono text-[#f97316]">PRACTICE</span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#090b10] border border-white/[0.04]">
                  <div className="flex items-center gap-2.5 font-mono text-xs font-bold text-[#f5f4ef] mb-1.5">
                    <Wrench className="w-3.5 h-3.5 text-[#f97316]" />
                    <span>Evidence Over Claims</span>
                  </div>
                  <p className="text-xs text-[#a6a69f] leading-relaxed">
                    Source repositories, hardware photos, reproducible notebooks, and clear
                    boundaries between what is simulated vs. what is built.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#090b10] border border-white/[0.04]">
                  <div className="flex items-center gap-2.5 font-mono text-xs font-bold text-[#f5f4ef] mb-1.5">
                    <Shield className="w-3.5 h-3.5 text-[#84a98c]" />
                    <span>Deterministic Core Logic</span>
                  </div>
                  <p className="text-xs text-[#a6a69f] leading-relaxed">
                    Let language models handle extraction and syntax; keep financial risk, eligibility,
                    and actuator commands in deterministic rules engines.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#090b10] border border-white/[0.04]">
                  <div className="flex items-center gap-2.5 font-mono text-xs font-bold text-[#f5f4ef] mb-1.5">
                    <Compass className="w-3.5 h-3.5 text-[#f97316]" />
                    <span>Hardware Grounding</span>
                  </div>
                  <p className="text-xs text-[#a6a69f] leading-relaxed">
                    Code reaches its highest test when deployed to physical sensors, motor PWM
                    bridges, and edge microcontrollers operating outdoors.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs font-mono text-[#a6a69f]">
              <span>LOCATION: BANGALORE, KARNATAKA, INDIA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
