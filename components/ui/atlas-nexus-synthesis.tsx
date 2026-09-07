"use client";

import { ArrowDown, BookOpen, Boxes } from "lucide-react";

export function AtlasNexusSynthesis() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden border-t border-b border-white/[0.06] bg-[#0b0d13]/60">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Subtle Vertical Flow Line */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/20 to-orange-500/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
          </div>

          {/* Section Indicator */}
          <div className="text-[11px] font-mono text-[#9ba1a6] uppercase tracking-widest flex items-center gap-2">
            <span>SYNTHESIS</span>
            <span className="text-white/20">·</span>
            <span className="text-orange-400 font-semibold">THE DUAL ARCHITECTURE</span>
          </div>

          {/* Dual Flow Grid: Information & Software */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl text-left">
            {/* ATLAS Pillar */}
            <div className="p-5 rounded-2xl bg-[#090b10] border border-white/[0.06] space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#f5f4ef] flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-orange-400" />
                  <span>04 — ATLAS</span>
                </span>
                <span className="text-[9px] font-mono text-orange-400 bg-orange-950/40 px-2 py-0.5 rounded border border-orange-800/40">
                  INFORMATION
                </span>
              </div>
              <div className="text-xs font-mono text-orange-400 font-semibold">
                KNOWLEDGE → RETRIEVAL → EVIDENCE
              </div>
              <p className="text-[11px] font-mono text-[#9ba1a6] leading-relaxed">
                Systems that turn scattered documents into verifiable answers you can trace.
              </p>
            </div>

            {/* NEXUS Pillar */}
            <div className="p-5 rounded-2xl bg-[#090b10] border border-white/[0.06] space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#f5f4ef] flex items-center gap-2">
                  <Boxes className="w-3.5 h-3.5 text-orange-400" />
                  <span>05 — NEXUS</span>
                </span>
                <span className="text-[9px] font-mono text-orange-400 bg-orange-950/40 px-2 py-0.5 rounded border border-orange-800/40">
                  SOFTWARE
                </span>
              </div>
              <div className="text-xs font-mono text-orange-400 font-semibold">
                CODE → BUILD → DEPLOY → OBSERVABILITY
              </div>
              <p className="text-[11px] font-mono text-[#9ba1a6] leading-relaxed">
                Systems that take source code across automated gates into running infrastructure.
              </p>
            </div>
          </div>

          {/* Synthesis Philosophy Statement */}
          <div className="max-w-2xl space-y-3">
            <p className="text-2xl sm:text-3xl md:text-4xl font-light text-[#f5f4ef] tracking-tight leading-snug">
              &ldquo;Build systems that understand information and systems that understand software.&rdquo;
            </p>
            <p className="text-xs sm:text-sm font-mono text-[#9ba1a6] max-w-lg mx-auto">
              One grounds intelligence in truth. The other grounds engineering in reliable pipelines.
            </p>
          </div>

          {/* Subtle Transition Down to Things That Broke */}
          <div className="pt-2 flex flex-col items-center gap-2">
            <span className="text-[10px] font-mono text-[#9ba1a6]/80 tracking-widest uppercase">
              Next: What happens when these systems fail?
            </span>
            <ArrowDown className="w-4 h-4 text-orange-400/60 animate-bounce mt-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
