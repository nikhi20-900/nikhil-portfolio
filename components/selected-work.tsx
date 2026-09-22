import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./ui/icons";

type Status = "BUILT" | "BUILDING";

interface SelectedProject {
  number: string;
  title: string;
  category: string;
  value: string;
  flow: string;
  status: Status;
  href: string;
  linkLabel: "VIEW SOURCE" | "VIEW CASE STUDY" | "OPEN REPOSITORY";
  external?: boolean;
}

/* Entry point ordered by strength of engineering evidence. */
const SELECTED: SelectedProject[] = [
  {
    number: "01",
    title: "FRAUD INVESTIGATION AGENT",
    category: "AI SYSTEMS / GRAPH TECHNOLOGY",
    value:
      "An agentic fraud investigation system combining graph-based pattern detection, LangGraph reasoning, deterministic risk scoring and next-best-action recommendations.",
    flow:
      "TigerGraph → Pattern Detection → LangGraph → Risk & Uncertainty → Next Best Action → Investigation Dashboard",
    status: "BUILT",
    href: "https://github.com/nikhi20-900/fraud-investigation-agent",
    linkLabel: "VIEW SOURCE",
    external: true,
  },
  {
    number: "02",
    title: "NAVIGEN",
    category: "ROBOTICS / AUTONOMOUS NAVIGATION",
    value:
      "Vision-based autonomous navigation for an unmanned ground vehicle operating in outdoor environments.",
    flow: "Camera → Perception → Decision → Navigation → Motor Control",
    status: "BUILT",
    href: "#navigen",
    linkLabel: "VIEW CASE STUDY",
  },
  {
    number: "03",
    title: "SCHEMESAATHI",
    category: "AI / CIVIC TECHNOLOGY",
    value:
      "An AI government-scheme navigator that separates language understanding from deterministic eligibility evaluation.",
    flow: "User Query → LLM Extraction → RAG → Eligibility Engine → Documents/OCR → Result",
    status: "BUILDING",
    href: "#schemesaathi",
    linkLabel: "VIEW CASE STUDY",
  },
  {
    number: "04",
    title: "LPG GAS LEAKAGE DASHBOARD",
    category: "IoT / REAL-TIME SYSTEMS",
    value:
      "A telemetry dashboard connecting physical gas-sensor data with a real-time web interface.",
    flow: "MQ-6 Sensor → Firebase → Dashboard → Auto-Valve",
    status: "BUILT",
    href: "https://github.com/nikhi20-900/lpg-gas-leakage-dashboard",
    linkLabel: "VIEW SOURCE",
    external: true,
  },
];

function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded border font-bold ${
        status === "BUILT" ? "badge-built" : "badge-building"
      }`}
    >
      {status}
    </span>
  );
}

function ProjectLink({ project }: { project: SelectedProject }) {
  const isExternal = Boolean(project.external);
  const content = (
    <>
      {isExternal && <GithubIcon className="w-3.5 h-3.5" aria-hidden="true" />}
      <span>{project.linkLabel}</span>
      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
    </>
  );
  const className =
    "inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#84a98c] hover:text-white transition-colors";

  if (isExternal) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        data-cursor="code"
      >
        {content}
      </a>
    );
  }

  return (
    <a href={project.href} className={className} data-cursor="view">
      {content}
    </a>
  );
}

function FeatureEntry({ project }: { project: SelectedProject }) {
  return (
    <article className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#11141d] border border-white/[0.08] hover:border-white/[0.18] transition-colors space-y-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2.5 min-w-0">
          <span className="font-mono font-bold text-orange-400 text-sm">{project.number}</span>
          <span className="text-white/20" aria-hidden="true">
            /
          </span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#f5f4ef] tracking-tight break-words">
            {project.title}
          </h3>
        </div>
        <StatusBadge status={project.status} />
      </div>

      <div className="text-[11px] font-mono text-[#9ba1a6] uppercase tracking-widest">
        {project.category}
      </div>

      <p className="text-sm sm:text-base text-[#f5f4ef]/90 font-light leading-relaxed max-w-3xl">
        {project.value}
      </p>

      <div className="p-2.5 rounded-xl bg-[#090b10] border border-white/[0.04] font-mono text-[11px] text-[#84a98c] font-medium break-words">
        {project.flow}
      </div>

      <div className="pt-3 border-t border-white/[0.06]">
        <ProjectLink project={project} />
      </div>
    </article>
  );
}

function CompactEntry({ project }: { project: SelectedProject }) {
  return (
    <article className="p-5 sm:p-6 rounded-2xl bg-[#11141d] border border-white/[0.08] hover:border-white/[0.18] transition-colors flex flex-col justify-between gap-4 h-full">
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="font-mono font-bold text-orange-400 text-xs">{project.number}</span>
            <span className="text-white/20" aria-hidden="true">
              /
            </span>
            <h3 className="text-base sm:text-lg font-bold text-[#f5f4ef] tracking-tight break-words">
              {project.title}
            </h3>
          </div>
          <StatusBadge status={project.status} />
        </div>
        <div className="text-[10px] font-mono text-[#9ba1a6] uppercase tracking-wider">
          {project.category}
        </div>
        <p className="text-xs sm:text-sm text-[#f5f4ef]/90 font-light leading-relaxed">
          {project.value}
        </p>
        <div className="p-2 rounded-lg bg-[#090b10] border border-white/[0.04] font-mono text-[10px] text-orange-400 break-words">
          {project.flow}
        </div>
      </div>
      <div className="pt-3 border-t border-white/[0.06]">
        <ProjectLink project={project} />
      </div>
    </article>
  );
}

export function SelectedWork() {
  const [fraud, navigen, schemesaathi, lpg] = SELECTED;

  return (
    <section id="selected-work" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 md:mb-12 pb-5 border-b border-white/[0.08]">
          <div>
            <div className="text-xs font-mono text-[#9ba1a6] uppercase tracking-widest flex items-center gap-2 mb-1">
              <span className="text-orange-400 font-bold">01 /</span>
              <span>WHAT I&apos;VE BUILT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#f5f4ef] tracking-tight">
              SELECTED WORK
            </h2>
          </div>
          <p className="text-sm font-mono text-[#9ba1a6] max-w-sm">
            Strongest engineering evidence first — source, architecture, and honest status on
            every entry.
          </p>
        </div>

        <div className="space-y-4 mb-4">
          <FeatureEntry project={fraud} />
          <FeatureEntry project={navigen} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CompactEntry project={schemesaathi} />
          <CompactEntry project={lpg} />
        </div>
      </div>
    </section>
  );
}
