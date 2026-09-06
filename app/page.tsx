import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { BuildersLab } from "@/components/builders-lab";
import { NavigenFeatured } from "@/components/navigen-featured";
import { SignatureStatement } from "@/components/signature-statement";
import { ToolsMap } from "@/components/tools-map";
import { ForgeFeatured } from "@/components/forge-featured";
import { ProjectsGrid } from "@/components/projects-grid";
import { ModernWorkflows } from "@/components/modern-workflows";
import { HowIBuild } from "@/components/how-i-build";
import { Hackathons } from "@/components/hackathons";
import { GithubEvidence } from "@/components/github-evidence";
import { Education } from "@/components/education";
import { BeyondCode } from "@/components/beyond-code";
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

      {/* Deliberate Visual Rhythm & Storytelling Progression */}
      <div className="relative z-10 flex flex-col">
        {/* 1. HERO — QUIET: High contrast, massive headline, generous whitespace */}
        <Hero />

        {/* 2. BUILDER'S LAB — DENSE: Interactive accordion prototypes (45-65% inactive focus) */}
        <BuildersLab />

        {/* 3. NAVIGEN — DENSE: Standout Featured Project 01 (Robotics, perception pipeline) */}
        <NavigenFeatured />

        {/* 4. SIGNATURE STATEMENT — QUIET: Visual Bridge (Typography-first, no card box) */}
        <SignatureStatement />

        {/* 5. TOOLS I BUILD WITH — DENSE: Exploratory matrix, active node inspector */}
        <ToolsMap />

        {/* 6. FORGE — DENSE: Standout Featured Project 02 (AI Engineering, 8-step pipeline, terminal) */}
        <ForgeFeatured />

        {/* 7. PROJECTS COLLECTION — DENSE: LPG Dashboard (03) + Archive projects */}
        <ProjectsGrid />

        {/* 8. MODERN DEVELOPER TOOLING: AI, Agents & CLI Fluency */}
        <ModernWorkflows />

        {/* 9. HOW I BUILD — MEDIUM: Moving focal point (active dominant, past/future muted) */}
        <HowIBuild />

        {/* 10. BUILT UNDER PRESSURE — DENSE: Hackathons & Pressure Sprints */}
        <Hackathons />

        {/* 11. DON'T TAKE MY WORD FOR IT — MEDIUM: GitHub Evidence & Commits */}
        <GithubEvidence />

        {/* 12. EDUCATION & LEARNING — MEDIUM: Academic foundations & active learning */}
        <Education />

        {/* 13. BEYOND THE CODE — QUIET: Human builder ethos */}
        <BeyondCode />

        {/* 14. CONTACT / FINALE — QUIET: Direct channels & final call to action */}
        <Contact />
      </div>

      {/* Minimal editorial footer */}
      <Footer />
    </main>
  );
}
