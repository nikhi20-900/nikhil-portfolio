"use client";

import { Terminal } from "lucide-react";

export function SignatureStatement() {
  return (
    <section className="py-28 md:py-44 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Visual Bridge: Technical pipeline fades into pure typography */}
        <div className="mb-8 flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
          <span className="text-xs font-mono tracking-widest text-orange-400 uppercase">
            THE REAL STACK
          </span>
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#f5f4ef] tracking-tight leading-[1.05] mb-16 max-w-4xl">
          &ldquo;MY FAVORITE STACK ISN&apos;T JUST A TECHNOLOGY STACK.&rdquo;
        </h2>

        {/* Typography-First Formula (No card container, pure editorial scale) */}
        <div className="space-y-6 font-mono">
          <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-3 text-2xl sm:text-4xl md:text-5xl font-bold text-[#f5f4ef]">
            <span>Problem</span>
            <span className="text-orange-500/80 font-normal">+</span>
            <span>Curiosity</span>
            <span className="text-orange-500/80 font-normal">+</span>
            <span className="text-[#f5f4ef] flex items-center gap-2">
              <Terminal className="w-6 h-6 sm:w-9 sm:h-9 text-orange-400 inline" />
              Terminal
            </span>
            <span className="text-orange-500/80 font-normal">+</span>
            <span>AI</span>
            <span className="text-orange-500/80 font-normal">+</span>
          </div>

          {/* Level 01 Dominant Visual Moment */}
          <div className="pt-4">
            <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-200 to-[#f5f4ef] uppercase leading-[0.95]">
              A RIDICULOUS AMOUNT OF DEBUGGING.
            </span>
          </div>
        </div>

        {/* Subtle Supporting Line */}
        <div className="mt-20 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#9ba1a6]">
          <span>THE PHILOSOPHY: FORCE MULTIPLIERS IN ACTION</span>
          <span className="text-[#f5f4ef]">
            Curiosity + Terminal + AI + Deep Understanding
          </span>
        </div>
      </div>
    </section>
  );
}
