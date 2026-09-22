const AREAS = ["AI SYSTEMS", "ROBOTICS", "FULL-STACK", "DEVOPS", "HACKATHONS"] as const;

export function ProofStrip() {
  return (
    <section
      aria-label="Areas of selected work"
      className="border-y border-white/[0.08] bg-[#090b10]/80 relative z-10"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
        <span className="text-[11px] font-mono uppercase tracking-widest text-orange-400 font-bold shrink-0">
          Selected Work
        </span>
        <span className="hidden sm:block h-px bg-white/[0.08] flex-1" aria-hidden="true" />
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-5">
          {AREAS.map((area) => (
            <li
              key={area}
              className="text-[11px] font-mono uppercase tracking-widest text-[#9ba1a6]"
            >
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
