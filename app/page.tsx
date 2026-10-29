"use client";

import React, { useState } from "react";
import { SmoothScrollProvider } from "@/components/ui/smooth-scroll";
import { Preloader } from "@/components/ui/preloader";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { NavbarEditorial } from "@/components/ui/navbar-editorial";
import { FloatingDock } from "@/components/ui/dock";
import { CommandPalette } from "@/components/ui/command-palette";
import { Scene3DCanvas } from "@/components/three/canvas-wrapper";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { WorkSection } from "@/components/sections/work-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <SmoothScrollProvider>
      {/* 00. Seamless 0→100 Preloader with Name Reveal */}
      <Preloader onComplete={() => setPreloaderDone(true)} />

      {/* Persistent Custom Cursor */}
      <CustomCursor />

      {/* Tactile Noise/Grain Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-30 bg-grain opacity-40 mix-blend-overlay"
        aria-hidden="true"
      />

      {/* Subtle Architectural Grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0 grid-editorial opacity-60"
        aria-hidden="true"
      />

      {/* Single Persistent 3D R3F Canvas */}
      <Scene3DCanvas />

      {/* Persistent Minimal Nav + Fullscreen Menu */}
      <NavbarEditorial />

      {/* Floating macOS-Style Dock Navigation */}
      <FloatingDock />

      {/* Global ⌘K Command Palette with Terminal Mode */}
      <CommandPalette />

      {/* Main Editorial Document Flow */}
      <main className="relative z-10 w-full min-h-screen flex flex-col">
        {/* 01. HERO SECTION */}
        <HeroSection />

        {/* 02. ABOUT SECTION */}
        <AboutSection />

        {/* 03. SELECTED WORK */}
        <WorkSection />

        {/* 04. SKILLS & STACK */}
        <SkillsSection />

        {/* 05. EXPERIENCE & TIMELINE */}
        <ExperienceSection />

        {/* 06. CONTACT & INTERACTIVE FOOTER */}
        <ContactSection />
      </main>
    </SmoothScrollProvider>
  );
}
