"use client";

import { useState } from "react";
import {
  FileText,
  Binary,
  Search,
  Sparkles,
  Quote,
  CheckCircle2,
  Database,
  Split,
  BookOpen,
} from "lucide-react";

// 7-Stage Technical Retrieval Pipeline
const ATLAS_PIPELINE_STEPS = [
  {
    step: "01",
    id: "documents",
    name: "DOCUMENTS",
    label: "Raw Ingestion",
    desc: "Unstructured source files (PDFs, Markdown, Specs, Text notes) loaded into memory buffer.",
    icon: FileText,
    annotation: "Heterogeneous formats parsed & normalized",
    badge: "INPUT",
  },
  {
    step: "02",
    id: "ingest",
    name: "INGEST",
    label: "Sanitization & Normalization",
    desc: "Strips binary headers, extracts clean text streams, removes formatting noise.",
    icon: Binary,
    annotation: "Deterministic token cleanup",
    badge: "PARSER",
  },
  {
    step: "03",
    id: "chunk",
    name: "CHUNK",
    label: "Semantic Splitting",
    desc: "Partitions documents into overlapping passages (e.g., 512 tokens with 64-token overlap) preserving paragraph boundaries.",
    icon: Split,
    annotation: "Preserves contextual boundaries",
    badge: "CHUNKER",
  },
  {
    step: "04",
    id: "index",
    name: "INDEX",
    label: "Vector Embedding",
    desc: "Passages projected into high-dimensional vector space for semantic similarity indexing.",
    icon: Database,
    annotation: "Dense vector representations",
    badge: "INDEXER",
  },
  {
    step: "05",
    id: "retrieve",
    name: "RETRIEVE",
    label: "Cosine Search",
    desc: "Query vector matched against passage index using nearest-neighbor similarity ranking.",
    icon: Search,
    annotation: "Top-k nearest neighbor match",
    badge: "RETRIEVER",
  },
  {
    step: "06",
    id: "generate",
    name: "GENERATE",
    label: "Context Grounding",
    desc: "Retrieved passages injected strictly into prompt context window with strict anti-hallucination boundaries.",
    icon: Sparkles,
    annotation: "Grounded context injection",
    badge: "SYNTHESIS",
  },
  {
    step: "07",
    id: "evidence",
    name: "EVIDENCE",
    label: "Source Attribution",
    desc: "Every generated assertion is directly linked to an exact source document, page, and chunk excerpt.",
    icon: Quote,
    annotation: "Traceable & verifiable grounding",
    badge: "TRACE",
  },
];

// Sample Knowledge Base Documents (Illustrative)
interface KnowledgeDoc {
  id: string;
  name: string;
  type: string;
  chunks: number;
  size: string;
  date: string;
  topics: string[];
}

const KNOWLEDGE_DOCS: KnowledgeDoc[] = [
  {
    id: "doc-1",
    name: "01_UGV_Architecture_Spec.pdf",
    type: "PDF Document",
    chunks: 14,
    size: "248 KB",
    date: "SIH 2025 Spec",
    topics: ["Sensor loop", "Hardware constraints", "PWM drive"],
  },
  {
    id: "doc-2",
    name: "02_Nav2_Costmap_Inflation.md",
    type: "Markdown Note",
    chunks: 8,
    size: "42 KB",
    date: "Research Log",
    topics: ["Contour bounds", "0.45m inflation radius", "Obstacle costmaps"],
  },
  {
    id: "doc-3",
    name: "03_FailSafe_Telemetry_Protocol.txt",
    type: "Plain Text",
    chunks: 6,
    size: "18 KB",
    date: "Firmware Spec",
    topics: ["Heartbeat watchdog", "Automatic shutoff", "MQ-6 thresholds"],
  },
  {
    id: "doc-4",
    name: "04_RealTime_CRDT_Sync.md",
    type: "Technical RFC",
    chunks: 11,
    size: "64 KB",
    date: "Pulse Protocol",
    topics: ["Vector clocks", "Last-write-wins", "Delta diffs"],
  },
  {
    id: "doc-5",
    name: "05_Agentic_Context_Budget.md",
    type: "Engineering RFC",
    chunks: 9,
    size: "35 KB",
    date: "Forge Notes",
    topics: ["Context budgeting", "File inspection", "Diff gates"],
  },
];

// Selectable Illustrative Queries
interface QueryPreset {
  id: string;
  query: string;
  answer: string;
  citations: {
    sourceId: string;
    sourceName: string;
    chunkId: string;
    similarityLabel: string;
    similarityScore: string;
    quote: string;
    lineRef: string;
  }[];
}

const QUERY_PRESETS: QueryPreset[] = [
  {
    id: "constraints",
    query: "What are the important hardware and processing constraints in the system?",
    answer:
      "The primary physical constraint is processing capacity on the single-board edge processor [01]. Running full-resolution raw camera frames alongside ROS 2 nodes causes memory bus saturation. Consequently, frame capture must be cropped to the ground path ahead of the drive wheels [02], and edge motor control loops must fall back to emergency stop if telemetry pings drop for more than 500ms [03].",
    citations: [
      {
        sourceId: "doc-1",
        sourceName: "01_UGV_Architecture_Spec.pdf",
        chunkId: "chunk_03_p4",
        similarityLabel: "similarity · ~0.93 (illustrative)",
        similarityScore: "0.93",
        lineRef: "Section 2.4 / Page 4",
        quote:
          "The Raspberry Pi 4 edge compute budget is strictly bounded to 30 FPS at 640x480 resolution to reserve CPU overhead for the Nav2 local planner and differential wheel drive.",
      },
      {
        sourceId: "doc-2",
        sourceName: "02_Nav2_Costmap_Inflation.md",
        chunkId: "chunk_01_L18-34",
        similarityLabel: "similarity · ~0.89 (illustrative)",
        similarityScore: "0.89",
        lineRef: "Lines 18–34",
        quote:
          "Cropping dynamic regions of interest strictly to the ground terrain directly ahead of the front wheels eliminates 60% of unnecessary OpenCV contour calculation overhead.",
      },
      {
        sourceId: "doc-3",
        sourceName: "03_FailSafe_Telemetry_Protocol.txt",
        chunkId: "chunk_04_L41-52",
        similarityLabel: "similarity · ~0.86 (illustrative)",
        similarityScore: "0.86",
        lineRef: "Lines 41–52",
        quote:
          "Emergency stop watchdog activates automatically if edge telemetry heartbeat pings lapse beyond a 500ms grace threshold.",
      },
    ],
  },
  {
    id: "inflation",
    query: "How does obstacle inflation prevent collisions in the navigation costmap?",
    answer:
      "Obstacle inflation applies an exponential decay cost gradient radiating outward from physical obstacles [01]. By inflating obstacles with a safety perimeter of 0.45m [01], the Nav2 pure pursuit planner treats near-miss trajectories as high-cost hazards, ensuring the chassis stays clear of cones even under differential steering drift [02].",
    citations: [
      {
        sourceId: "doc-2",
        sourceName: "02_Nav2_Costmap_Inflation.md",
        chunkId: "chunk_02_L36-58",
        similarityLabel: "similarity · ~0.94 (illustrative)",
        similarityScore: "0.94",
        lineRef: "Lines 36–58",
        quote:
          "Inflation radius of 0.45m creates a continuous cost boundary that forces the trajectory generator to favor wide clearances around physical outdoor barriers.",
      },
      {
        sourceId: "doc-1",
        sourceName: "01_UGV_Architecture_Spec.pdf",
        chunkId: "chunk_05_p7",
        similarityLabel: "similarity · ~0.88 (illustrative)",
        similarityScore: "0.88",
        lineRef: "Section 3.1 / Page 7",
        quote:
          "Differential motor dynamics introduce minor slip on gravel terrain; the safety buffer compensates for trajectory lag.",
      },
    ],
  },
  {
    id: "grounding",
    query: "Why is context budgeting critical before an agent proposes code modifications?",
    answer:
      "Without strict context budgeting and mandatory directory inspection [01], generative models fabricate plausible imports and imaginary file paths. Grounding the context window with verified file contents before code generation eliminates hallucinated file trees [02].",
    citations: [
      {
        sourceId: "doc-5",
        sourceName: "05_Agentic_Context_Budget.md",
        chunkId: "chunk_02_L12-29",
        similarityLabel: "similarity · ~0.95 (illustrative)",
        similarityScore: "0.95",
        lineRef: "Lines 12–29",
        quote:
          "An agent is only as good as the ground truth context it receives. Grounding comes before coding; inspect real repository trees before proposing diffs.",
      },
      {
        sourceId: "doc-4",
        sourceName: "04_RealTime_CRDT_Sync.md",
        chunkId: "chunk_03_L44-60",
        similarityLabel: "similarity · ~0.84 (illustrative)",
        similarityScore: "0.84",
        lineRef: "Lines 44–60",
        quote:
          "Delta diffs ensure that only modified state segments are exchanged, keeping token payloads concise and deterministic.",
      },
    ],
  },
];

// Quiet Technical Exploration Concepts
const ATLAS_EXPLORATION_AREAS = [
  {
    name: "Document Ingestion",
    status: "EXPLORING",
    statusColor: "text-amber-400 bg-amber-950/40 border-amber-800/40",
    desc: "Parsing varied formats (PDF, Markdown, text) into clean normalized text streams.",
  },
  {
    name: "Chunking Strategies",
    status: "EXPLORING",
    statusColor: "text-amber-400 bg-amber-950/40 border-amber-800/40",
    desc: "Evaluating fixed-size token windows vs semantic sentence and paragraph splitting.",
  },
  {
    name: "Embeddings & Vectors",
    status: "EXPLORING",
    statusColor: "text-amber-400 bg-amber-950/40 border-amber-800/40",
    desc: "Understanding dense representations and mathematical cosine distance mapping.",
  },
  {
    name: "Semantic Retrieval",
    status: "EXPLORING",
    statusColor: "text-amber-400 bg-amber-950/40 border-amber-800/40",
    desc: "Combining keyword BM25 with vector similarity for hybrid document search.",
  },
  {
    name: "Vector Search Concepts",
    status: "PLANNED",
    statusColor: "text-orange-400 bg-orange-950/40 border-orange-800/40",
    desc: "Researching index structures like HNSW for fast k-nearest-neighbor lookups.",
  },
  {
    name: "Context Construction",
    status: "BUILDING",
    statusColor: "text-orange-400 bg-orange-950/40 border-orange-800/40",
    desc: "Budgeting prompts with only the highest-scoring chunks to avoid context dilution.",
  },
  {
    name: "Grounded Generation",
    status: "BUILDING",
    statusColor: "text-orange-400 bg-orange-950/40 border-orange-800/40",
    desc: "Constraining synthesis strictly to provided evidence passages with zero extrapolation.",
  },
  {
    name: "Source Attribution",
    status: "BUILDING",
    statusColor: "text-orange-400 bg-orange-950/40 border-orange-800/40",
    desc: "Deterministic mapping from each output sentence back to verifiable chunk excerpts.",
  },
];

export function AtlasFeatured() {
  const [activePipelineIndex, setActivePipelineIndex] = useState(4); // Default to RETRIEVE
  const [selectedDocId, setSelectedDocId] = useState<string>("doc-1");
  const [activeQueryIndex, setActiveQueryIndex] = useState(0);
  const [activeCitationIndex, setActiveCitationIndex] = useState(0);

  const currentQuery = QUERY_PRESETS[activeQueryIndex];
  const activeCitation =
    currentQuery.citations[activeCitationIndex] || currentQuery.citations[0];
  const selectedDoc =
    KNOWLEDGE_DOCS.find((d) => d.id === selectedDocId) || KNOWLEDGE_DOCS[0];

  return (
    <section id="atlas" className="py-24 md:py-36 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* ========================================================================= */}
        {/* 1. SECTION ORIENTATION & AUTHENTICITY STATUS */}
        {/* ========================================================================= */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/[0.08]">
          <div className="text-xs font-mono text-orange-400 uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="font-bold">04 /</span>
            <span>AI / RAG / KNOWLEDGE SYSTEMS</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="px-3 py-0.5 rounded-full bg-orange-500/10 text-orange-300 border border-orange-500/30 font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
              BUILDING
            </span>
            <span className="px-2.5 py-0.5 rounded bg-white/[0.04] text-[#9ba1a6] border border-white/[0.08] text-[11px]">
              CONCEPT · ARCHITECTURE PROTOTYPE
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. HEADLINE & EDITORIAL CORE THESIS */}
        {/* ========================================================================= */}
        <div className="max-w-4xl mb-12">
          <div className="flex flex-wrap items-baseline gap-4 mb-3">
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-black text-[#f5f4ef] tracking-tighter leading-[0.95]">
              ATLAS
            </h2>
            <span className="text-xs font-mono uppercase px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 font-bold">
              KNOWLEDGE WORKSPACE
            </span>
          </div>

          <p className="text-xl sm:text-2xl md:text-3xl text-orange-400 font-bold tracking-tight mb-4">
            Turn scattered knowledge into answers you can trace.
          </p>

          <blockquote className="text-xl sm:text-2xl text-[#f5f4ef] font-light italic border-l-2 border-orange-500/60 pl-4 my-4">
            &ldquo;The interesting part isn&apos;t generating an answer. It&apos;s knowing where that answer came from.&rdquo;
          </blockquote>

          <p className="text-base sm:text-lg text-[#9ba1a6] font-light leading-relaxed max-w-2xl mt-4">
            A knowledge workspace exploring document ingestion, semantic retrieval, grounded
            generation, and evidence-first answers. Building systems that refuse to guess when
            they can verify.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 3. VISUAL METAPHOR: 7-STAGE RETRIEVAL PIPELINE */}
        {/* ========================================================================= */}
        <div className="my-12 p-6 sm:p-8 rounded-2xl bg-[#090b10] border border-white/[0.08] shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div className="text-[11px] font-mono text-[#9ba1a6] uppercase tracking-widest flex items-center gap-2">
              <span className="text-orange-400 font-bold">FLOW /</span>
              <span>RETRIEVAL &amp; GROUNDING PIPELINE</span>
            </div>
            <div className="text-xs font-mono text-orange-400 font-semibold flex items-center gap-2">
              <span>STAGE {ATLAS_PIPELINE_STEPS[activePipelineIndex].step}:</span>
              <span className="text-[#f5f4ef]">
                {ATLAS_PIPELINE_STEPS[activePipelineIndex].name}
              </span>
            </div>
          </div>

          {/* 7 Interactive Pipeline Nodes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {ATLAS_PIPELINE_STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activePipelineIndex === idx;

              return (
                <button
                  key={step.id}
                  onClick={() => setActivePipelineIndex(idx)}
                  onMouseEnter={() => setActivePipelineIndex(idx)}
                  className={`p-3 rounded-xl text-left transition-all border flex flex-col justify-between min-h-[115px] cursor-pointer ${
                    isSelected
                      ? "bg-[#181d29] border-orange-500/60 shadow-lg scale-[1.02]"
                      : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] opacity-75 hover:opacity-100"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-[10px] font-mono font-bold ${
                          isSelected ? "text-orange-400" : "text-[#9ba1a6]"
                        }`}
                      >
                        {step.step}
                      </span>
                      <Icon
                        className={`w-3.5 h-3.5 ${
                          isSelected ? "text-orange-400" : "text-[#9ba1a6]"
                        }`}
                      />
                    </div>
                    <div className="text-xs font-bold text-[#f5f4ef] leading-tight">
                      {step.name}
                    </div>
                  </div>

                  <div className="mt-2">
                    <span
                      className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded border block text-center truncate ${
                        isSelected
                          ? "bg-orange-950/40 text-orange-300 border-orange-800/40 font-bold"
                          : "bg-white/[0.03] text-[#9ba1a6] border-white/[0.06]"
                      }`}
                    >
                      {step.badge}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Technical Detail Banner */}
          <div className="mt-4 p-4 rounded-xl bg-[#11141d] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-orange-400 font-bold">
                  › {ATLAS_PIPELINE_STEPS[activePipelineIndex].name}:
                </span>
                <span className="text-[#f5f4ef] font-semibold">
                  {ATLAS_PIPELINE_STEPS[activePipelineIndex].label}
                </span>
              </div>
              <p className="text-[#9ba1a6] text-[11px] leading-relaxed">
                {ATLAS_PIPELINE_STEPS[activePipelineIndex].desc}
              </p>
            </div>

            <div className="shrink-0 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[10px] text-[#9ba1a6] font-mono">
              {ATLAS_PIPELINE_STEPS[activePipelineIndex].annotation}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 4. INTERACTIVE KNOWLEDGE WORKSPACE (3-COLUMN EDITORIAL INTERACTION) */}
        {/* ========================================================================= */}
        <div className="my-14 rounded-3xl bg-[#11141d] border border-white/[0.1] shadow-2xl overflow-hidden">
          {/* Workspace Chrome */}
          <div className="px-6 py-4 bg-[#0d0f14] border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="h-4 w-px bg-white/10 mx-1" />
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="font-bold text-[#f5f4ef]">ATLAS</span>
                <span className="text-[#9ba1a6]">/</span>
                <span className="text-[#9ba1a6]">Workspace</span>
                <span className="text-[#9ba1a6]">/</span>
                <span className="text-orange-400 font-medium">Grounded Knowledge Base</span>
              </div>
            </div>

            {/* Strict Authenticity Label */}
            <div className="text-[10px] font-mono text-amber-400 uppercase tracking-wider px-2.5 py-1 rounded bg-amber-950/30 border border-amber-800/40 flex items-center gap-1.5 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>CONCEPT / BUILDING · SIMULATED RETRIEVAL</span>
            </div>
          </div>

          {/* 3-Column Responsive Interactive Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.08]">
            {/* ------------------------------------------------------------- */}
            {/* COLUMN 1 (Left 3 cols): KNOWLEDGE BASE DOCUMENTS */}
            {/* ------------------------------------------------------------- */}
            <div className="lg:col-span-3 p-5 sm:p-6 bg-[#0c0e14] space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                <div className="text-xs font-mono text-[#9ba1a6] uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-orange-400" />
                  <span>KNOWLEDGE BASE</span>
                </div>
                <span className="text-[10px] font-mono text-orange-400 bg-orange-950/40 px-2 py-0.5 rounded border border-orange-800/40">
                  {KNOWLEDGE_DOCS.length} DOCS
                </span>
              </div>

              <div className="space-y-2 font-mono">
                {KNOWLEDGE_DOCS.map((doc) => {
                  const isSelected = selectedDocId === doc.id;
                  return (
                    <button
                      key={doc.id}
                      onClick={() => setSelectedDocId(doc.id)}
                      className={`w-full text-left p-3 rounded-xl transition-all border cursor-pointer ${
                        isSelected
                          ? "bg-[#181d2a] border-orange-500/50 shadow-md text-[#f5f4ef]"
                          : "bg-white/[0.02] border-white/[0.04] text-[#9ba1a6] hover:text-[#f5f4ef] hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px] font-bold mb-1">
                        <span className="truncate pr-2">{doc.name}</span>
                        <FileText className="w-3 h-3 shrink-0 opacity-60" />
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-[#9ba1a6]/80">
                        <span>{doc.type}</span>
                        <span>{doc.chunks} chunks</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Selected Document Details Inspector */}
              <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono space-y-2">
                <div className="text-[10px] text-[#9ba1a6] uppercase tracking-wider">
                  Document Inspector:
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
                  <div className="text-xs font-bold text-[#f5f4ef] truncate">
                    {selectedDoc.name}
                  </div>
                  <div className="text-[10px] text-[#9ba1a6] flex items-center justify-between">
                    <span>Size: {selectedDoc.size}</span>
                    <span>{selectedDoc.date}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {selectedDoc.topics.map((t) => (
                      <span
                        key={t}
                        className="px-1.5 py-0.5 rounded text-[9px] bg-white/[0.04] text-[#9ba1a6] border border-white/[0.06]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* COLUMN 2 (Center 5 cols): ASK ATLAS & GROUNDED SYNTHESIS */}
            {/* ------------------------------------------------------------- */}
            <div className="lg:col-span-5 p-5 sm:p-7 space-y-5">
              {/* Presets Selector Header */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-mono text-[#9ba1a6] uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                    <span>ASK ATLAS</span>
                  </div>
                  <span className="text-[10px] font-mono text-amber-400 bg-amber-950/30 px-2 py-0.5 rounded border border-amber-800/40 font-bold">
                    ILLUSTRATIVE QUERY
                  </span>
                </div>

                {/* Preset Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {QUERY_PRESETS.map((qp, idx) => (
                    <button
                      key={qp.id}
                      onClick={() => {
                        setActiveQueryIndex(idx);
                        setActiveCitationIndex(0);
                      }}
                      className={`px-3 py-1 rounded-lg text-xs font-mono transition-all border cursor-pointer ${
                        activeQueryIndex === idx
                          ? "bg-[#f5f4ef] text-[#0d0f14] font-bold border-[#f5f4ef] shadow-sm"
                          : "bg-white/[0.03] text-[#9ba1a6] border-white/[0.06] hover:text-[#f5f4ef] hover:bg-white/[0.06]"
                      }`}
                    >
                      Preset 0{idx + 1}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Prompt Box */}
              <div className="p-4 rounded-2xl bg-[#090b10] border border-white/[0.08] space-y-2">
                <div className="text-[10px] font-mono text-orange-400 uppercase tracking-wider flex items-center justify-between">
                  <span>INPUT QUERY</span>
                  <span className="text-[9px] text-[#9ba1a6]">Simulated prompt</span>
                </div>
                <p className="text-sm sm:text-base font-mono text-[#f5f4ef] font-medium leading-snug">
                  &ldquo;{currentQuery.query}&rdquo;
                </p>
              </div>

              {/* Grounded Generated Response with Inline Citations */}
              <div className="p-5 rounded-2xl bg-[#141824] border border-orange-500/20 space-y-3 shadow-inner">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-2">
                  <div className="text-[11px] font-mono text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>GROUNDED GENERATION</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#9ba1a6]">
                    Evidence-bounded context
                  </span>
                </div>

                <p className="text-sm text-[#f5f4ef] font-light leading-relaxed font-sans">
                  {currentQuery.answer}
                </p>

                {/* Inline Citations Clicker */}
                <div className="pt-2 border-t border-white/[0.06] flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono text-[#9ba1a6]">Source Citations:</span>
                  {currentQuery.citations.map((cite, cIdx) => (
                    <button
                      key={cite.chunkId}
                      onClick={() => setActiveCitationIndex(cIdx)}
                      className={`px-2 py-0.5 rounded text-xs font-mono transition-all border cursor-pointer ${
                        activeCitationIndex === cIdx
                          ? "bg-orange-500 text-white font-bold border-orange-500 shadow-md"
                          : "bg-white/[0.04] text-orange-300 border-white/[0.08] hover:bg-white/[0.08]"
                      }`}
                    >
                      [0{cIdx + 1}] {cite.sourceName.split("_")[1] || cite.sourceName}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* COLUMN 3 (Right 4 cols): SOURCES & GROUNDED EVIDENCE */}
            {/* ------------------------------------------------------------- */}
            <div className="lg:col-span-4 p-5 sm:p-7 bg-[#0c0e14] space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                <div className="text-xs font-mono text-[#9ba1a6] uppercase tracking-wider flex items-center gap-1.5">
                  <Quote className="w-3.5 h-3.5 text-orange-400" />
                  <span>GROUNDED EVIDENCE</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40 font-bold">
                  VERIFIED CHUNK
                </span>
              </div>

              {/* Source Reference Card */}
              <div className="p-4 rounded-2xl bg-[#141824] border border-white/[0.08] space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-mono text-[#9ba1a6] uppercase tracking-wider block">
                      SOURCE DOCUMENT
                    </span>
                    <h4 className="text-xs font-mono font-bold text-[#f5f4ef]">
                      {activeCitation.sourceName}
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono text-orange-400 bg-orange-950/40 px-2 py-0.5 rounded border border-orange-800/40 shrink-0">
                    {activeCitation.chunkId}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono text-[#9ba1a6] pt-1">
                  <span>Reference: {activeCitation.lineRef}</span>
                  <span className="text-amber-300 font-semibold">
                    {activeCitation.similarityLabel}
                  </span>
                </div>

                {/* Highlighted Passage Excerpt */}
                <div className="p-3.5 rounded-xl bg-[#090b10] border-l-2 border-orange-500 font-mono text-xs text-[#f5f4ef] leading-relaxed relative">
                  <p className="italic text-[#f5f4ef]/90">
                    &ldquo;{activeCitation.quote}&rdquo;
                  </p>
                </div>
              </div>

              {/* Technical Attribution Metadata */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-[10px] font-mono text-[#9ba1a6] space-y-1.5">
                <div className="text-[#f5f4ef] font-semibold uppercase tracking-wider">
                  Attribution Mechanics:
                </div>
                <p className="leading-relaxed">
                  Every claim is mapped deterministically to chunk character offsets. Zero ungrounded
                  synthesis is permitted into the output payload.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. QUIET TECHNICAL EXPLORATION: CONCEPTS UNDER STUDY */}
        {/* ========================================================================= */}
        <div className="my-14 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-white/[0.08]">
            <div className="text-xs font-mono text-[#9ba1a6] uppercase tracking-widest flex items-center gap-2">
              <span className="text-orange-400 font-bold">RESEARCH /</span>
              <span>KNOWLEDGE SYSTEMS ARCHITECTURE</span>
            </div>
            <div className="text-[11px] font-mono text-[#9ba1a6]">
              Concepts actively explored &amp; prototyped · Zero inflated claims
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {ATLAS_EXPLORATION_AREAS.map((concept) => (
              <div
                key={concept.name}
                className="p-4 rounded-2xl bg-[#0e1118] border border-white/[0.06] space-y-2 hover:border-white/[0.14] transition-all"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-mono font-bold text-[#f5f4ef]">
                    {concept.name}
                  </h4>
                  <span
                    className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded border font-bold ${concept.statusColor}`}
                  >
                    {concept.status}
                  </span>
                </div>
                <p className="text-[11px] font-mono text-[#9ba1a6] leading-relaxed">
                  {concept.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Authenticity Guardrail Note */}
          <div className="p-4 rounded-xl bg-[#090b10] border border-white/[0.06] font-mono text-xs text-[#9ba1a6] flex items-start gap-3">
            <span className="text-orange-400 font-bold">›</span>
            <span>
              <strong className="text-[#f5f4ef]">Authenticity Guardrail:</strong> Vector database
              embeddings and RAG retrieval pipelines in ATLAS are active local architectural
              explorations. No claims of production multi-million vector deployments or proprietary
              embedding models are made.
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 6. TECHNICAL STACK FOOTER */}
        {/* ========================================================================= */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/[0.08]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-[#9ba1a6] mr-2">Architectural Focus:</span>
            {[
              "RAG Pipeline",
              "Semantic Chunking",
              "Vector Embeddings",
              "Context Budgeting",
              "Grounded Evidence",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.03] text-[#f5f4ef] border border-white/[0.08]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-[#9ba1a6]">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
            <span>Prototype in Active Research</span>
          </div>
        </div>
      </div>
    </section>
  );
}
