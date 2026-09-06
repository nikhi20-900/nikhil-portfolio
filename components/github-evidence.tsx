"use client";

import { ArrowUpRight, Terminal } from "lucide-react";
import { GithubIcon } from "./ui/icons";

interface RepoEvidence {
  name: string;
  repo: string;
  desc: string;
  techs: string[];
  url: string;
}

const REPOS: RepoEvidence[] = [
  {
    name: "LPG Gas Leakage Dashboard",
    repo: "nikhi20-900/lpg-gas-leakage-dashboard",
    desc: "Real-time IoT dashboard for monitoring LPG gas leakage and system status, visual charts, and valve alerts.",
    techs: ["React", "Tailwind CSS", "Firebase", "Recharts"],
    url: "https://github.com/nikhi20-900/lpg-gas-leakage-dashboard",
  },
  {
    name: "MedTech",
    repo: "nikhi20-900/medTech",
    desc: "Healthcare-focused technology project combining frontend and backend components for digital health solutions.",
    techs: ["JavaScript", "Frontend", "Backend Architecture"],
    url: "https://github.com/nikhi20-900/medTech",
  },
  {
    name: "SaaS Dashboard",
    repo: "nikhi20-900/sass-dashboard",
    desc: "Dashboard-focused web application demonstrating modern UI development and component interfaces.",
    techs: ["React", "Component Architecture", "UI Design"],
    url: "https://github.com/nikhi20-900/sass-dashboard",
  },
  {
    name: "DevOps",
    repo: "nikhi20-900/devops",
    desc: "Development workflows, version control configurations, deployment concepts, and automation practices.",
    techs: ["DevOps", "Version Control", "Automation"],
    url: "https://github.com/nikhi20-900/devops",
  },
];

export function GithubEvidence() {
  return (
    <section id="code" className="py-24 md:py-36 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        {/* Header (Level 02 Heading) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="text-xs font-mono text-[#9ba1a6] uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="text-orange-400 font-bold">07 /</span>
              <span>SOURCE CODE &amp; REPOSITORIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#f5f4ef] tracking-tight">
              DON&apos;T TAKE MY WORD FOR IT.
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="text-sm font-mono text-[#9ba1a6]">
              Look at the code. Verified open-source repositories and commits on GitHub.
            </p>
          </div>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {REPOS.map((repo) => (
            <a
              key={repo.repo}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 sm:p-7 rounded-2xl bg-[#11141d] border border-white/[0.08] hover:border-white/[0.22] hover:bg-[#151924] transition-all group flex flex-col justify-between"
              data-cursor="code"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-amber-400 flex items-center gap-1.5 font-semibold">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>{repo.repo}</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#9ba1a6] group-hover:text-[#f5f4ef] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                <h3 className="text-xl font-bold text-[#f5f4ef] mb-2">{repo.name}</h3>
                <p className="text-xs sm:text-sm text-[#9ba1a6] leading-relaxed mb-6">
                  {repo.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                {repo.techs.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] text-[#f5f4ef] border border-white/[0.06]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {/* Big GitHub Callout */}
        <div className="p-7 sm:p-9 rounded-2xl bg-[#131620] border border-white/[0.1] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-[#f5f4ef]">
              <GithubIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#f5f4ef]">
                Explore GitHub Profile: @nikhi20-900
              </h4>
              <p className="text-xs sm:text-sm font-mono text-[#9ba1a6]">
                All projects, robotics code, and web experiments in one place.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/nikhi20-900"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f5f4ef] text-[#0d0f14] font-mono text-xs sm:text-sm font-bold hover:bg-white transition-all shrink-0"
            data-cursor="code"
          >
            <span>Visit GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
