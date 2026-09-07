import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { BuildersLab } from "@/components/builders-lab";
import { NavigenFeatured } from "@/components/navigen-featured";
import { SignatureStatement } from "@/components/signature-statement";
import { ChapterTransition } from "@/components/ui/chapter-transition";
import { ToolsMap } from "@/components/tools-map";
import { ForgeFeatured } from "@/components/forge-featured";
import { PulseFeatured } from "@/components/pulse-featured";
import { AtlasFeatured } from "@/components/atlas-featured";
import { NexusFeatured } from "@/components/nexus-featured";
import { AtlasNexusSynthesis } from "@/components/ui/atlas-nexus-synthesis";
import { ProjectsGrid } from "@/components/projects-grid";
import { ThingsThatBroke } from "@/components/things-that-broke";
import { BuildNotes } from "@/components/build-notes";
import { HowIBuild } from "@/components/how-i-build";
import { Hackathons } from "@/components/hackathons";
import { GithubEvidence } from "@/components/github-evidence";
import { Education } from "@/components/education";
import { TerminalEasterEgg } from "@/components/terminal-easter-egg";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/ui/custom-cursor";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0d0f14] text-[#f5f4ef] selection:bg-orange-500/30 selection:text-white">
      {/* Context-aware custom cursor on desktop */}
      <CustomCursor />

      {/* Sticky editorial navbar */}
      <Navbar />

      {/* Deliberate Visual Rhythm & Continuous Storytelling Flow */}
      <div className="relative z-10 flex flex-col">
        {/* 1. HERO — High contrast, massive headline, generous whitespace */}
        <Hero />

        {/* 2. BUILDER'S LAB — Interactive accordion prototypes (01 to 06) */}
        <BuildersLab />

        {/* 3. NAVIGEN — Standout Featured Project 01 (Robotics, perception pipeline) */}
        <NavigenFeatured />

        {/* Signature Philosophy Bridge */}
        <SignatureStatement />

        {/* CHAPTER TRANSITION 1: HARDWARE → SOFTWARE */}
        <ChapterTransition
          fromNumber="01"
          fromTitle="ROBOTICS / NAVIGEN"
          toNumber="02"
          toTitle="THE STACK / TOOLS"
          statement="From physical motor loops to the software stack that drives them."
          substatement="Hardware, sensors, and firmware connect into languages, libraries, and architecture."
        />

        {/* 4. TOOLS I BUILD WITH — Exploratory matrix & verified technologies */}
        <ToolsMap />

        {/* CHAPTER TRANSITION 2: CODE → AGENTS */}
        <ChapterTransition
          fromNumber="02"
          fromTitle="THE STACK"
          toNumber="02"
          toTitle="AI AGENTS / FORGE"
          statement="From writing code manually to orchestrating agents in the terminal."
          substatement="Developer tooling and AI workflows act as force multipliers for rapid prototyping."
        />

        {/* 5. FORGE — Standout Featured Project 02 (AI Engineering, 8-step pipeline, terminal) */}
        <ForgeFeatured />

        {/* CHAPTER TRANSITION 3: SINGLE-DEV CLI → MULTIPLAYER WORKSPACE */}
        <ChapterTransition
          fromNumber="02"
          fromTitle="DEVELOPER CLI / FORGE"
          toNumber="03"
          toTitle="REAL-TIME PRODUCT / PULSE"
          statement="From single-developer tools to real-time multiplayer products."
          substatement="Where multiple people, shared state, and live synchronization meet."
        />

        {/* 6. PULSE — Standout Featured Project 03 (Full-Stack / Real-Time Collaborative Workspace) */}
        <PulseFeatured />

        {/* CHAPTER TRANSITION 4: REAL-TIME STATE → GROUNDED KNOWLEDGE */}
        <ChapterTransition
          fromNumber="03"
          fromTitle="REAL-TIME STATE / PULSE"
          toNumber="04"
          toTitle="KNOWLEDGE SYSTEMS / ATLAS"
          statement="From synchronizing live state to grounding answers in evidence."
          substatement="Turning scattered documents into traceable, verifiable intelligence."
        />

        {/* 7. ATLAS — Standout Featured Project 04 (AI / RAG / Knowledge Systems) */}
        <AtlasFeatured />

        {/* CHAPTER TRANSITION 5: KNOWLEDGE → DEVOPS & INFRASTRUCTURE */}
        <ChapterTransition
          fromNumber="04"
          fromTitle="KNOWLEDGE SYSTEMS / ATLAS"
          toNumber="05"
          toTitle="DEVOPS & INFRASTRUCTURE / NEXUS"
          statement="From asking what is true to understanding how software ships."
          substatement="Connecting source code, automated gates, builds, and edge observability."
        />

        {/* 8. NEXUS — Standout Featured Project 05 (DevOps / Automation / Developer Infrastructure) */}
        <NexusFeatured />

        {/* 9. ATLAS × NEXUS SYNTHESIS BRIDGE — Information & Software */}
        <AtlasNexusSynthesis />

        {/* 10. THINGS THAT BROKE — Honest Engineering Autopsies */}
        <ThingsThatBroke />

        {/* 11. BUILD NOTES — Things I'm Currently Figuring Out */}
        <BuildNotes />

        {/* 12. HOW I BUILD — 5 Steps to Shipping */}
        <HowIBuild />

        {/* 13. PROJECTS COLLECTION — Five Flagships Index + LPG Dashboard + Archive */}
        <ProjectsGrid />

        {/* 14. BUILT UNDER PRESSURE — Hackathons & Pressure Sprints */}
        <Hackathons />

        {/* 15. SOURCE CODE — GitHub Evidence & Commits */}
        <GithubEvidence />

        {/* 16. EDUCATION — Foundations & Active Learning */}
        <Education />

        {/* 17. TERMINAL EASTER EGG — Interactive CLI */}
        <TerminalEasterEgg />

        {/* 18. LET'S BUILD / CONTACT — Direct channels & final call to action */}
        <Contact />
      </div>

      {/* Minimal editorial footer */}
      <Footer />
    </main>
  );
}
