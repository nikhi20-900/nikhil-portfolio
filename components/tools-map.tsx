"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CategoryType = "all" | "build" | "ai" | "systems" | "robotics";

interface ToolItem {
  id: string;
  name: string;
  category: "build" | "ai" | "systems" | "robotics";
  categoryLabel: string;
  status: "Used in" | "Currently exploring" | "BUILDING";
  usage: string;
  connectedProjects: string[];
}

const TOOLS_DATA: ToolItem[] = [
  // 1. BUILD
  {
    id: "react",
    name: "React.js",
    category: "build",
    categoryLabel: "BUILD",
    status: "Used in",
    usage: "LPG Gas Leakage Dashboard",
    connectedProjects: ["LPG Gas Leakage Dashboard"],
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "build",
    categoryLabel: "BUILD",
    status: "Currently exploring",
    usage: "Portfolio architecture & server component experiments",
    connectedProjects: ["Web Prototypes"],
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "build",
    categoryLabel: "BUILD",
    status: "Used in",
    usage: "Interactive dashboard logic, state handling & DOM scripting",
    connectedProjects: ["LPG Dashboard", "SaaS Dashboard"],
  },
  {
    id: "html",
    name: "HTML",
    category: "build",
    categoryLabel: "BUILD",
    status: "Used in",
    usage: "Accessible semantic structure across web applications",
    connectedProjects: ["LPG Dashboard", "Web Projects"],
  },
  {
    id: "css",
    name: "CSS",
    category: "build",
    categoryLabel: "BUILD",
    status: "Used in",
    usage: "Modern responsive layouts, Flexbox & Grid systems",
    connectedProjects: ["Web Projects"],
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "build",
    categoryLabel: "BUILD",
    status: "Used in",
    usage: "LPG Dashboard & SaaS UI component design systems",
    connectedProjects: ["LPG Dashboard", "SaaS Dashboard"],
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "build",
    categoryLabel: "BUILD",
    status: "Currently exploring",
    usage: "Server-side REST endpoints & microservice logic",
    connectedProjects: ["MedTech", "API Experiments"],
  },
  {
    id: "python",
    name: "Python",
    category: "build",
    categoryLabel: "BUILD",
    status: "Used in",
    usage: "NAVIGEN autonomous nodes & Cryptography Toolkit ciphers",
    connectedProjects: ["NAVIGEN UGV", "Cryptography Toolkit"],
  },

  // 2. AI & AUTOMATION
  {
    id: "ai-dev",
    name: "AI-Assisted Development",
    category: "ai",
    categoryLabel: "AI & AUTOMATION",
    status: "Currently exploring",
    usage: "Vibe coding, rapid scaffolding, code exploration & test generation",
    connectedProjects: ["Rapid Prototyping Workflows"],
  },
  {
    id: "ai-agents",
    name: "AI Agents",
    category: "ai",
    categoryLabel: "AI & AUTOMATION",
    status: "BUILDING",
    usage: "Forge (AI Software Engineering Agent)",
    connectedProjects: ["Forge"],
  },
  {
    id: "agentic-workflows",
    name: "Agentic Workflows",
    category: "ai",
    categoryLabel: "AI & AUTOMATION",
    status: "BUILDING",
    usage: "Forge (Multi-step developer workflow orchestration)",
    connectedProjects: ["Forge"],
  },
  {
    id: "automation",
    name: "Automation",
    category: "ai",
    categoryLabel: "AI & AUTOMATION",
    status: "BUILDING",
    usage: "Forge (Automated code inspection & testing workflows)",
    connectedProjects: ["Forge"],
  },
  {
    id: "cv",
    name: "Computer Vision",
    category: "ai",
    categoryLabel: "AI & AUTOMATION",
    status: "Used in",
    usage: "NAVIGEN UGV obstacle segmentation & edge video inference",
    connectedProjects: ["NAVIGEN UGV"],
  },

  // 3. SYSTEMS & TOOLS
  {
    id: "git",
    name: "Git / GitHub",
    category: "systems",
    categoryLabel: "SYSTEMS & TOOLS",
    status: "Used in",
    usage: "Version control, branching, reviews & repository management",
    connectedProjects: ["All Projects"],
  },
  {
    id: "linux",
    name: "Linux",
    category: "systems",
    categoryLabel: "SYSTEMS & TOOLS",
    status: "Used in",
    usage: "Ubuntu / Debian environment for ROS 2 and Raspberry Pi OS",
    connectedProjects: ["NAVIGEN UGV"],
  },
  {
    id: "terminal",
    name: "Terminal / CLI",
    category: "systems",
    categoryLabel: "SYSTEMS & TOOLS",
    status: "BUILDING",
    usage: "Forge (CLI developer interface & terminal commands)",
    connectedProjects: ["Forge"],
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "systems",
    categoryLabel: "SYSTEMS & TOOLS",
    status: "Used in",
    usage: "LPG Gas Leakage Dashboard real-time database sync",
    connectedProjects: ["LPG Gas Leakage Dashboard"],
  },

  // 4. ROBOTICS
  {
    id: "ros2",
    name: "ROS 2",
    category: "robotics",
    categoryLabel: "ROBOTICS",
    status: "Used in",
    usage: "NAVIGEN UGV (Nav2 path planner, topics & node architecture)",
    connectedProjects: ["NAVIGEN UGV"],
  },
  {
    id: "raspberry-pi",
    name: "Raspberry Pi",
    category: "robotics",
    categoryLabel: "ROBOTICS",
    status: "Used in",
    usage: "NAVIGEN (Edge single-board computer for vision & high-level ROS 2)",
    connectedProjects: ["NAVIGEN UGV"],
  },
  {
    id: "esp32",
    name: "ESP32",
    category: "robotics",
    categoryLabel: "ROBOTICS",
    status: "Used in",
    usage: "NAVIGEN (Dual PWM differential motor driver & sensor telemetry)",
    connectedProjects: ["NAVIGEN UGV"],
  },
  {
    id: "gazebo",
    name: "Gazebo",
    category: "robotics",
    categoryLabel: "ROBOTICS",
    status: "Used in",
    usage: "NAVIGEN 3D physical simulation & outdoor terrain modeling",
    connectedProjects: ["NAVIGEN UGV"],
  },
  {
    id: "autonav",
    name: "Autonomous Navigation",
    category: "robotics",
    categoryLabel: "ROBOTICS",
    status: "Used in",
    usage: "NAVIGEN (Waypoints, obstacle costmaps & pure pursuit control)",
    connectedProjects: ["NAVIGEN UGV"],
  },
];

const CATEGORIES: { id: CategoryType; label: string }[] = [
  { id: "all", label: "All Tools" },
  { id: "build", label: "BUILD" },
  { id: "ai", label: "AI & AUTOMATION" },
  { id: "systems", label: "SYSTEMS & TOOLS" },
  { id: "robotics", label: "ROBOTICS" },
];

export function ToolsMap() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("all");
  const [selectedTool, setSelectedTool] = useState<ToolItem>(TOOLS_DATA[0]);

  const filteredTools =
    activeCategory === "all"
      ? TOOLS_DATA
      : TOOLS_DATA.filter((tool) => tool.category === activeCategory);

  return (
    <section id="tools" className="py-24 md:py-36 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header (Level 02 Heading) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="text-xs font-mono text-[#9ba1a6] uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="text-orange-400 font-bold">02 /</span>
              <span>TOOLS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#f5f4ef] tracking-tight">
              TOOLS I BUILD WITH
            </h2>
          </div>
          <p className="text-sm font-mono text-[#9ba1a6] max-w-md">
            An exploratory system. Verified projects are linked directly, active prototypes are
            marked as &ldquo;BUILDING&rdquo;, and upcoming technologies as &ldquo;Currently exploring&rdquo;.
          </p>
        </div>

        {/* 4 Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full font-mono text-xs transition-all border ${
                activeCategory === cat.id
                  ? "bg-[#f5f4ef] text-[#0d0f14] font-bold border-[#f5f4ef] shadow-md"
                  : "bg-white/[0.03] text-[#9ba1a6] border-white/[0.08] hover:text-[#f5f4ef] hover:bg-white/[0.06]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Interactive Grid & Connection Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Tool Chips Network (Quiet by default, active dominates on hover) */}
          <div className="lg:col-span-7 flex flex-wrap gap-2.5">
            {filteredTools.map((tool) => {
              const isSelected = selectedTool.id === tool.id;

              return (
                <button
                  key={tool.id}
                  onClick={() => setSelectedTool(tool)}
                  onMouseEnter={() => setSelectedTool(tool)}
                  className={`px-3.5 py-2 rounded-xl font-mono text-xs transition-all duration-200 text-left border flex items-center gap-2 ${
                    isSelected
                      ? "bg-[#f5f4ef] text-[#0d0f14] font-bold border-[#f5f4ef] shadow-lg scale-105 opacity-100"
                      : "bg-[#10121a]/60 text-[#9ba1a6] border-white/[0.06] hover:text-[#f5f4ef] hover:bg-[#151822] opacity-75 hover:opacity-100"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      tool.status === "Used in"
                        ? "bg-emerald-400"
                        : tool.status === "BUILDING"
                        ? "bg-orange-400"
                        : "bg-amber-400"
                    }`}
                  />
                  <span>{tool.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Connection Inspector Card */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTool.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="p-6 sm:p-7 rounded-2xl bg-[#13161f] border border-white/[0.1] space-y-5 shadow-xl"
              >
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <div>
                    <span className="text-[10px] font-mono text-[#9ba1a6] uppercase tracking-wider">
                      {selectedTool.categoryLabel}
                    </span>
                    <h3 className="text-2xl font-bold text-[#f5f4ef]">{selectedTool.name}</h3>
                  </div>

                  <span
                    className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${
                      selectedTool.status === "Used in"
                        ? "text-emerald-400 border-emerald-800/40 bg-emerald-950/40"
                        : selectedTool.status === "BUILDING"
                        ? "text-orange-400 border-orange-800/40 bg-orange-950/40"
                        : "text-amber-400 border-amber-800/40 bg-amber-950/40"
                    }`}
                  >
                    {selectedTool.status}
                  </span>
                </div>

                {/* Connection Flow: React.js -> USED IN -> Project */}
                <div className="space-y-2 font-mono">
                  <div className="text-[10px] text-[#9ba1a6] uppercase tracking-wider">
                    Connection Flow:
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#0a0c12] border border-white/[0.06] text-xs space-y-1.5">
                    <div className="font-bold text-[#f5f4ef]">{selectedTool.name}</div>
                    <div className="text-[10px] text-orange-400 font-semibold">
                      ↓ {selectedTool.status.toUpperCase()}
                    </div>
                    <div className="text-sm font-semibold text-[#f5f4ef]">
                      {selectedTool.usage}
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/[0.08]">
                  <div className="text-[10px] font-mono text-[#9ba1a6] uppercase tracking-wider mb-2">
                    Verified Projects / Environments:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedTool.connectedProjects.map((p) => (
                      <span
                        key={p}
                        className="px-2.5 py-1 rounded-md bg-[#0d0f14] text-xs font-mono text-[#9ba1a6] border border-white/[0.06]"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
