"use client";

import { ArrowDown } from "lucide-react";

interface ChapterTransitionProps {
  fromNumber: string;
  fromTitle: string;
  toNumber: string;
  toTitle: string;
  statement: string;
  substatement?: string;
}

export function ChapterTransition({
  fromNumber,
  fromTitle,
  toNumber,
  toTitle,
  statement,
  substatement,
}: ChapterTransitionProps) {
  return (
    <div className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Subtle Vertical Flow Line */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/20 to-orange-500/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
          </div>

          {/* Chapters indicator */}
          <div className="flex items-center gap-3 text-[11px] font-mono text-[#9ba1a6] uppercase tracking-widest">
            <span>{fromNumber} {fromTitle}</span>
            <span className="text-white/20">→</span>
            <span className="text-orange-400 font-semibold">{toNumber} {toTitle}</span>
          </div>

          {/* Editorial Bridge Statement */}
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-[#f5f4ef] tracking-tight max-w-xl leading-snug">
            &ldquo;{statement}&rdquo;
          </p>

          {substatement && (
            <p className="text-xs sm:text-sm font-mono text-[#9ba1a6] max-w-md">
              {substatement}
            </p>
          )}

          {/* Subtle down flow arrow */}
          <div className="pt-2">
            <ArrowDown className="w-4 h-4 text-white/30 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
}
