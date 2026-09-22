import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProofStrip } from "@/components/proof-strip";
import { SelectedWork } from "@/components/selected-work";
import { FraudFeatured } from "@/components/fraud-featured";
import { NavigenFeatured } from "@/components/navigen-featured";
import { BuildersLab } from "@/components/builders-lab";
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
import { MotionProvider } from "@/components/ui/motion-provider";

export default function Home() {
  return (
    <MotionProvider>
      <main className="relative min-h-screen bg-background text-foreground">
        {/* Context-aware custom cursor on desktop */}
        <CustomCursor />

        {/* Sticky editorial navbar */}
        <Navbar />

        {/* Deliberate Visual Rhythm & Continuous Storytelling Flow */}
        <div className="relative z-10 flex flex-col">
          {/* 1. HERO — Who am I? What do I build? */}
          <Hero />

          {/* 1b. PROOF STRIP — Breadth, no fake metrics */}
          <ProofStrip />

          {/* 2. SELECTED WORK — What have I built? (evidence-first entry) */}
          <SelectedWork />

          {/* 3. CASE STUDY · FRAUD — How does the strongest system work? */}
          <FraudFeatured />

          {/* 4. CASE STUDY · NAVIGEN — Physical autonomy system */}
          <NavigenFeatured />

          {/* 5. BUILDER'S LAB — Interactive prototypes & active builds */}
          <BuildersLab />

          {/* Signature Philosophy Bridge */}
          <SignatureStatement />

          {/* CHAPTER TRANSITION 1: SYSTEMS → SOFTWARE STACK */}
          <ChapterTransition
            fromNumber="01"
            fromTitle="SHIPPED SYSTEMS / FRAUD · NAVIGEN"
            toNumber="02"
            toTitle="THE STACK / TOOLS"
            statement="From physical motor loops to the software stack that drives them."
            substatement="Hardware, sensors, and firmware connect into languages, libraries, and architecture."
          />

          {/* 6. TOOLS I BUILD WITH — Exploratory matrix & verified technologies */}
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

          {/* 7. FORGE — AI Engineering, pipeline, terminal */}
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

          {/* 8. PULSE — Real-time collaborative workspace */}
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

          {/* 9. ATLAS — RAG / knowledge systems */}
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

          {/* 10. NEXUS — DevOps / automation */}
          <NexusFeatured />

          {/* 11. ATLAS × NEXUS SYNTHESIS BRIDGE */}
          <AtlasNexusSynthesis />

          {/* 12. THINGS THAT BROKE — Honest engineering autopsies */}
          <ThingsThatBroke />

          {/* 13. BUILD NOTES — What I'm figuring out next */}
          <BuildNotes />

          {/* 14. HOW I BUILD — Methodology */}
          <HowIBuild />

          {/* 15. PROJECT STATUS INDEX — BUILT / BUILDING / EXPLORING */}
          <ProjectsGrid />

          {/* 16. HACKATHONS — How I work under constraints */}
          <Hackathons />

          {/* 17. SOURCE CODE — GitHub evidence */}
          <GithubEvidence />

          {/* 18. ABOUT — Who am I beyond the projects? */}
          <Education />

          {/* 19. TERMINAL EASTER EGG */}
          <TerminalEasterEgg />

          {/* 20. CONTACT — How can someone reach me? */}
          <Contact />
        </div>

        {/* Minimal editorial footer */}
        <Footer />
      </main>
    </MotionProvider>
  );
}
