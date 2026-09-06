"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Eye,
  Layers,
  Cpu,
  Bot,
  Radio,
  Workflow,
  Sparkles,
} from "lucide-react";

interface BuildNote {
  id: string;
  topic: string;
  status: "BUILDING" | "EXPLORING" | "LEARNING";
  statusColor: string;
  icon: typeof Compass;
  question: string;
  bulletPoints: string[];
  currentTakeaway: string;
}

const BUILD_NOTES: BuildNote[] = [
  {
    id: "ros2",
    topic: "ROS 2 & Robotics",
    status: "BUILDING",
    statusColor: "text-emerald-400 bg-emerald-950/40 border-emerald-800/40",
    icon: Compass,
    question: "How do node lifecycles and DDS topics translate simulation into physical motors?",
    bulletPoints: [
      "Exploring how Gazebo physical simulations translate to real-world ESP32 PWM motor drivers.",
      "Figuring out Nav2 costmap inflation buffers and waypoint controllers for outdoor obstacles.",
      "Testing publisher/subscriber QoS reliability over lossy edge Wi-Fi connections.",
    ],
    currentTakeaway:
      "Physical robots require planning for packet loss and latency at every node boundary.",
  },
  {
    id: "cv",
    topic: "Computer Vision",
    status: "EXPLORING",
    statusColor: "text-amber-400 bg-amber-950/40 border-amber-800/40",
    icon: Eye,
    question: "How do we extract clean navigation boundaries from noisy outdoor camera feeds?",
    bulletPoints: [
      "Learning OpenCV contour detection and color masking techniques under fluctuating sunlight.",
      "Figuring out how to minimize frame processing latency without dedicated external GPUs.",
      "Cropping dynamic regions of interest to prioritize ground terrain directly ahead of wheels.",
    ],
    currentTakeaway:
      "Cropping and downscaling before image processing is far more effective than trying to optimize heavy math.",
  },
  {
    id: "nextjs",
    topic: "Next.js & React",
    status: "EXPLORING",
    statusColor: "text-orange-400 bg-orange-950/40 border-orange-800/40",
    icon: Layers,
    question: "Where should Server Components end and Client interactivity begin?",
    bulletPoints: [
      "Exploring granular boundary design to keep client bundles minimal while retaining rich interaction.",
      "Understanding streaming UI with Suspense to eliminate perceived page load times.",
      "Testing App Router layouts and route handlers for clean full-stack architectural separation.",
    ],
    currentTakeaway:
      "Keep the heavy lifting on the server, and only ship JavaScript to the client when a human needs to click something.",
  },
  {
    id: "nodejs",
    topic: "Node.js & Backend",
    status: "EXPLORING",
    statusColor: "text-blue-400 bg-blue-950/40 border-blue-800/40",
    icon: Cpu,
    question: "How do we manage high-frequency data streams without choking the event loop?",
    bulletPoints: [
      "Figuring out WebSocket backpressure when broadcasting real-time telemetry to multiple clients.",
      "Structuring modular backend services with clear separation between transport and business logic.",
      "Learning memory profiling and stream disposal patterns to prevent connection leaks.",
    ],
    currentTakeaway:
      "Backpressure and timely stream cleanup matter more than raw throughput when streams are continuous.",
  },
  {
    id: "agents",
    topic: "AI Agents & Tooling",
    status: "BUILDING",
    statusColor: "text-emerald-400 bg-emerald-950/40 border-emerald-800/40",
    icon: Bot,
    question: "How do we give LLMs terminal tools while keeping code generation grounded?",
    bulletPoints: [
      "Exploring context window budgeting: feeding only the relevant files instead of entire repositories.",
      "Grounding agents with mandatory file inspection steps before allowing them to propose code diffs.",
      "Experimenting with multi-step review loops: task → plan → inspect → code → test → verify.",
    ],
    currentTakeaway:
      "An AI agent is only as reliable as the ground truth context it receives. Grounding comes before coding.",
  },
  {
    id: "realtime",
    topic: "Real-Time Systems",
    status: "EXPLORING",
    statusColor: "text-amber-400 bg-amber-950/40 border-amber-800/40",
    icon: Radio,
    question: "How do we make multi-user collaboration feel instant across high latency?",
    bulletPoints: [
      "Researching how to reconcile optimistic UI updates with server-authoritative confirmation.",
      "Exploring presence detection heartbeats and ephemeral cursor telemetry.",
      "Understanding why disconnection recovery and conflict handling are the hardest parts of multiplayer apps.",
    ],
    currentTakeaway:
      "In collaborative software, wall-clock time is an illusion; logical sequencing is mandatory.",
  },
  {
    id: "fullstack",
    topic: "Full-Stack Architecture",
    status: "EXPLORING",
    statusColor: "text-purple-400 bg-purple-950/40 border-purple-800/40",
    icon: Workflow,
    question: "How do we design applications that grow beyond simple CRUD databases?",
    bulletPoints: [
      "Exploring relational schema design and migration safety for evolving product models.",
      "Figuring out session authentication, token security, and multi-tenant access control.",
      "Connecting reactive frontends to clean backend state management without tight coupling.",
    ],
    currentTakeaway:
      "Good architecture isn't about complexity; it's about making future changes straightforward to reason about.",
  },
];

export function BuildNotes() {
  const [activeNoteId, setActiveNoteId] = useState<string>("ros2");
  const activeNote = BUILD_NOTES.find((n) => n.id === activeNoteId) || BUILD_NOTES[0];
  const Icon = activeNote.icon;

  return (
    <section id="notes" className="py-24 md:py-36 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/[0.08]">
          <div className="text-xs font-mono text-orange-400 uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            <span className="font-bold">05 /</span>
            <span>ACTIVE EXPLORATION</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="px-3 py-1 rounded-full bg-white/[0.04] text-[#f5f4ef] border border-white/[0.08]">
              BUILDING · EXPLORING · LEARNING
            </span>
          </div>
        </div>

        {/* Headline & Mission */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#f5f4ef] tracking-tight leading-[1.05] mb-4">
            BUILD NOTES
          </h2>
          <p className="text-xl sm:text-2xl text-orange-400 font-medium mb-4">
            &ldquo;Things I&apos;m currently figuring out.&rdquo;
          </p>
          <p className="text-base sm:text-lg text-[#9ba1a6] font-light leading-relaxed">
            Instead of a conventional biography, here is what I&apos;m actively researching,
            testing, and figuring out across hardware, software, and real-time systems.
          </p>
        </div>

        {/* Interactive Topic Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {BUILD_NOTES.map((note) => {
            const isSelected = activeNoteId === note.id;
            return (
              <button
                key={note.id}
                onClick={() => setActiveNoteId(note.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all border flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? "bg-[#181d29] text-[#f5f4ef] font-bold border-orange-500/60 shadow-lg scale-[1.02]"
                    : "bg-[#0d0f14]/80 text-[#9ba1a6] hover:text-[#f5f4ef] border-white/[0.06] hover:bg-white/[0.04]"
                }`}
              >
                <span>{note.topic}</span>
                <span className={`text-[9px] font-bold uppercase px-1.5 py-0.2 rounded border ${note.statusColor}`}>
                  {note.status}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Note Inspector Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNote.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="p-7 sm:p-10 rounded-3xl bg-[#11141d] border border-white/[0.1] shadow-2xl space-y-6"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#9ba1a6] uppercase tracking-wider block">
                    RESEARCH TOPIC
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#f5f4ef]">
                    {activeNote.topic}
                  </h3>
                </div>
              </div>

              <span className={`text-[10px] font-mono uppercase px-3 py-1 rounded-full border font-bold ${activeNote.statusColor}`}>
                STATUS: {activeNote.status}
              </span>
            </div>

            {/* Core Question */}
            <div className="p-4 rounded-2xl bg-[#090b10] border border-white/[0.06]">
              <span className="text-[10px] font-mono text-orange-400 uppercase tracking-wider block mb-1">
                CORE QUESTION
              </span>
              <p className="text-base sm:text-lg text-[#f5f4ef] font-medium leading-snug">
                &ldquo;{activeNote.question}&rdquo;
              </p>
            </div>

            {/* Bullet Points */}
            <div className="space-y-3 font-mono text-xs text-[#9ba1a6]">
              <span className="text-[10px] uppercase tracking-wider text-[#9ba1a6]/80 block font-semibold">
                WHAT I&apos;M ACTIVELY FIGURING OUT:
              </span>
              <ul className="space-y-2.5">
                {activeNote.bulletPoints.map((bp, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold mt-0.5">›</span>
                    <span className="text-[#f5f4ef] font-light leading-relaxed">{bp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Current Takeaway Banner */}
            <div className="p-4 rounded-2xl bg-orange-500/[0.06] border border-orange-500/20 font-mono text-xs flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-orange-400 font-bold block mb-0.5">CURRENT TAKEAWAY:</span>
                <p className="text-[#f5f4ef] font-light leading-relaxed">
                  {activeNote.currentTakeaway}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
