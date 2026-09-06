import { Sparkles } from "lucide-react";

export function BeyondCode() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-orange-400 bg-orange-950/20 border border-orange-800/30 mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PHILOSOPHY</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#f5f4ef] tracking-tight mb-6">
          BEYOND THE CODE.
        </h2>

        <p className="text-xl sm:text-2xl md:text-3xl text-[#f5f4ef] font-light leading-relaxed mb-6 max-w-2xl mx-auto">
          &ldquo;I like learning by building. Give me a problem, a deadline and a laptop, and I&apos;ll
          probably start prototyping.&rdquo;
        </p>

        <p className="text-xs sm:text-sm font-mono text-[#9ba1a6]">
          Nikhil Chhetri · Dayananda Sagar University · Bangalore
        </p>
      </div>
    </section>
  );
}
