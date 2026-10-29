"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Terminal, Code2, MapPin, Zap } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const MANIFESTO_TEXT = `I design and build at the intersection of physical machines and software intelligence. My work spans autonomous ground robotics with real-time perception loops, deterministic graph fraud investigation platforms, and interactive digital interfaces crafted with mathematical precision. I treat AI and modern developer tooling not as shortcuts, but as high-leverage force multipliers that compound architectural rigour and speed.`;

const FLOATING_CHIPS = [
  { icon: Award, label: "Smart India Hackathon 2025", sub: "Autonomous UGV Navigation" },
  { icon: Terminal, label: "BCA Computer Applications", sub: "Dayananda Sagar University" },
  { icon: Code2, label: "Systems & Agents", sub: "ROS 2 · LangGraph · TigerGraph" },
  { icon: MapPin, label: "Bangalore, India", sub: "Tech Capital Ecosystem" },
  { icon: Zap, label: "Philosophy", sub: "Architecture First, Zero Fluff" },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const words = textRef.current.querySelectorAll<HTMLElement>(".manifesto-word");

    if (prefersReducedMotion) {
      // Instantly reveal all words with full opacity, no scrub
      words.forEach((w) => {
        w.style.opacity = "1";
        w.style.transform = "none";
      });
      return;
    }

    // Scrub word opacity as scroll progresses through section
    const textTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        end: "bottom 35%",
        scrub: 0.8,
      },
    });

    textTl.fromTo(
      words,
      { opacity: 0.12, y: 3 },
      { opacity: 1, y: 0, stagger: 0.05, ease: "power2.out" }
    );

    // Subtle parallax on floating chips
    if (chipsRef.current) {
      const chips = chipsRef.current.querySelectorAll(".fact-chip");
      gsap.fromTo(
        chips,
        { y: 30, opacity: 0.4 },
        {
          y: -20,
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 20%",
            scrub: 1.2,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === sectionRef.current) t.kill();
      });
    };
  }, []);

  const words = MANIFESTO_TEXT.split(" ");

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen w-full px-6 sm:px-12 md:px-16 py-32 z-10 border-t divider-subtle"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b divider-subtle pb-6 mb-16">
          <span className="font-mono text-xs tracking-widest text-[#8E8E99] uppercase">
            [02 // PHILOSOPHY & MANIFESTO]
          </span>
          <span className="font-mono text-xs tracking-wider text-accent uppercase">
            WHO AM I & HOW I BUILD
          </span>
        </div>

        {/* 12-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Oversized Section Index & Summary */}
          <div className="lg:col-span-4 space-y-6">
            <span className="font-mono text-5xl sm:text-7xl font-light text-white/20">
              02
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#EDEDED]">
              ENGINEERING FROM FIRST PRINCIPLES.
            </h2>
            <p className="text-sm text-[#8E8E99] leading-relaxed">
              Every system starts with the physical constraints, data flow, and deterministic state
              before touching higher-level abstractions.
            </p>
          </div>

          {/* Right Column: Word-by-Word Scrub Typography */}
          <div className="lg:col-span-8">
            <p
              ref={textRef}
              className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.25] text-[#EDEDED]"
            >
              {words.map((word, i) => (
                <span
                  key={i}
                  className="manifesto-word inline-block mr-[0.28em] transition-opacity duration-150"
                  style={{ opacity: 0.12 }}
                >
                  {word}
                </span>
              ))}
            </p>

            {/* Floating Facts & Evidence Chips */}
            <div
              ref={chipsRef}
              className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
            >
              {FLOATING_CHIPS.map((chip, idx) => {
                const Icon = chip.icon;
                return (
                  <div
                    key={idx}
                    className="fact-chip p-5 rounded-2xl bg-[#121215]/80 border border-white/10 backdrop-blur-md hover:border-accent/40 transition-colors group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-white/5 text-accent group-hover:scale-110 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-xs font-semibold text-[#EDEDED]">
                        {chip.label}
                      </span>
                    </div>
                    <p className="text-xs text-[#8E8E99] font-mono">{chip.sub}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

