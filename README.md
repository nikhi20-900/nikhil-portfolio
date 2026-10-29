# Nikhil Chhetri — 3D Interactive Portfolio (Awwwards-Level Architecture)

> 🌐 **Live Website**: [https://nikhil-portfolio-rose.vercel.app](https://nikhil-portfolio-rose.vercel.app)

An editorial, scroll-driven, 3D personal website built with Next.js App Router, React Three Fiber, GSAP ScrollTrigger, Lenis smooth scrolling, and Tailwind CSS.

---

## ⚡ Architecture & Tech Stack

- **Framework**: Next.js 16 (App Router) + TypeScript
- **3D Graphics**: Single persistent React Three Fiber canvas + `@react-three/drei`
- **Scroll Choreography**: GSAP + ScrollTrigger scrub synced with `Lenis` via `gsap.ticker`
- **Smooth Scroll**: Lenis provider with `prefers-reduced-motion` support
- **Design System**: Dark high-contrast editorial look (`#0A0A0B` background, `#EDEDED` text, `#00F0FF` Electric Cyan accent)
- **Fluid Typography**: `clamp()` scaling for hero and section headers
- **Micro-Interactions**: Magnetic physics buttons, custom cursor with context-aware "VIEW" mode, tactile noise grain overlay

---

## 🏗️ Project Structure

```text
nikhil-portfolio/
├── app/
│   ├── layout.tsx                # Global HTML wrapper, dark theme, SEO metadata
│   ├── globals.css               # Design tokens, fluid clamp type, grain overlay
│   ├── page.tsx                  # Main orchestration page (preloader + 3D + sections)
│   └── not-found.tsx             # Interactive 3D toy / lost-in-space 404 page
├── components/
│   ├── sections/
│   │   ├── hero-section.tsx      # 01: Masked slide-up hero & magnetic CTA
│   │   ├── about-section.tsx     # 02: Word-by-word scroll opacity scrub & parallax chips
│   │   ├── work-section.tsx      # 03: Selected projects, "VIEW" cursor, case dossiers
│   │   ├── skills-section.tsx    # 04: Orbital domain matrix & infinite marquee
│   │   ├── experience-section.tsx# 05: Vertical timeline with scroll-drawn line
│   │   └── contact-section.tsx   # 06: Oversized "LET'S TALK", live IST clock, email copy
│   ├── three/
│   │   ├── scene-3d.tsx          # Procedural morphing 3D object & particle cloud
│   │   ├── persistent-canvas.tsx # Single background R3F canvas tied to scroll/mouse
│   │   └── canvas-wrapper.tsx    # Dynamic client import (ssr: false)
│   └── ui/
│       ├── preloader.tsx         # 0→100 counter with name reveal
│       ├── custom-cursor.tsx     # Reactive trailing spring cursor + "VIEW" label
│       ├── magnetic-button.tsx   # Spring physics magnetic button
│       ├── navbar-editorial.tsx  # Minimal top nav, progress bar, full-screen menu
│       └── smooth-scroll.tsx     # Lenis + GSAP ScrollTrigger provider
├── hooks/
│   └── use-scroll-section.ts     # Reusable ScrollTrigger section hook
└── lib/
    ├── tokens.ts                 # Centralized design tokens & fluid type scale
    └── utils.ts                  # cn() class merger & custom cubic-bezier curves
```

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Build for production
npm run build
```

---

## 🎨 How to Swap Content & Tune Animations

1. **Brand & Bio**:
   - Update name, tagline, and pitch in [hero-section.tsx](file:///Users/nikhilchhetri/Desktop/resume/nikhil-portfolio/components/sections/hero-section.tsx) and [about-section.tsx](file:///Users/nikhilchhetri/Desktop/resume/nikhil-portfolio/components/sections/about-section.tsx).
2. **Projects**:
   - Add or edit projects in the `PROJECTS` array in [work-section.tsx](file:///Users/nikhilchhetri/Desktop/resume/nikhil-portfolio/components/sections/work-section.tsx).
3. **Accent Color**:
   - Change `--accent: #00f0ff` in [globals.css](file:///Users/nikhilchhetri/Desktop/resume/nikhil-portfolio/app/globals.css) and `tokens.ts`.
4. **3D Morph Trajectory**:
   - Adjust `CoreMorphObject` target coordinates and scale per scroll progress in [scene-3d.tsx](file:///Users/nikhilchhetri/Desktop/resume/nikhil-portfolio/components/three/scene-3d.tsx).

---

## 🧩 Section-by-Section Customization with 21st.dev (PROMPT 2)

Whenever you want to replace or enhance an individual section with a component from [21st.dev](https://21st.dev/community/components):
1. Copy the component prompt from 21st.dev.
2. Paste it using PROMPT 2 template specifying the target section (`hero`, `work`, `skills`, `contact`, etc.).
3. The component will automatically inherit the existing tokens (`#0A0A0B`, `#00F0FF`, fluid clamp typography, Lenis smooth scroll) without disrupting the persistent 3D canvas.

---

# Nikhil Chhetri — Personal Portfolio

Personal portfolio website showcasing my work across frontend development, AI-assisted development, robotics, IoT, and developer tooling.

Designed and engineered with an editorial aesthetic, deliberate visual hierarchy, interactive workflows, and high-performance frontend architecture.

---

## 👨‍💻 About

I am a Bachelor of Computer Applications (BCA) student at Dayananda Sagar University (DSU), Bangalore, building real-world applications, intelligent systems, and developer tools through code, robotics, and modern AI workflows.

I approach modern AI tooling, agents, and terminal automation as **force multipliers** for software development — accelerating rapid prototyping and iteration while maintaining deep understanding of the code.

---

## 🚀 Featured Projects

### 1. NAVIGEN
**Vision Based Autonomous Navigation for Unmanned Ground Vehicle for Outdoor Environment**
- Developed for **Smart India Hackathon 2025**.
- Combines robotics, computer vision, and autonomous navigation to enable an outdoor ground vehicle to perceive terrain, segment obstacles, and plan collision-free trajectories under real physical constraints.
- **Technologies Used**: ROS 2, Python, OpenCV, Nav2, Raspberry Pi, ESP32, Gazebo.
- *Hardware build — no public repository.*

### 2. Agentic Fraud Investigation Agent
**Graph-Based Fraud Investigation Platform**
- Synthetic fraud graph → TigerGraph pattern detection → LangGraph investigation agent → deterministic risk & uncertainty scoring → next-best-action engine → React investigation dashboard.
- 7 core vertex types (Customer, Account, Transaction, Card, Device, IP, Merchant), 6 fraud pattern detectors, and an offline evaluation suite.
- **Technologies Used**: Python, FastAPI, TigerGraph (GSQL), LangGraph, React, TypeScript, Tailwind CSS.
- **Repository**: [nikhi20-900/fraud-investigation-agent](https://github.com/nikhi20-900/fraud-investigation-agent) *(Built)*

### 3. SchemeSaathi
**AI Government Scheme Navigator**
- Architecture separates concerns deliberately: the LLM handles language understanding and extraction; a deterministic rules engine decides eligibility against published government criteria, with RAG knowledge retrieval and OCR document metadata.
- Phase 1 scaffold with a 4-member team structure across AI/RAG, eligibility engine, OCR, and frontend modules.
- **Technologies Used**: Python, FastAPI, React, Vite, RAG, OCR, Rules Engine.
- **Repository**: [nikhi20-900/SchemeSaathi](https://github.com/nikhi20-900/SchemeSaathi) *(Building)*

### 4. Student Performance Analysis
**BCA Data Mining Case Study**
- Classification and clustering study on the UCI Student Performance (Mathematics) dataset with a reproducible notebook and saved evaluation results.
- **Technologies Used**: Python, Jupyter, pandas, scikit-learn *(Built)*.
- **Repository**: [nikhi20-900/student-performance-data-mining](https://github.com/nikhi20-900/student-performance-data-mining)

### 5. Forge
**AI Software Engineering Agent**
- An AI-assisted developer tool designed to help plan, analyze, code, test, debug, and review software directly from the terminal.
- Features an 8-stage execution pipeline (`TASK → PLAN → INSPECT → CODE → TEST → DEBUG → REVIEW → DONE`) and a tactile developer CLI interface.
- **Technologies Used**: CLI Tooling, TypeScript, Node.js, AI/LLM APIs, Git *(Active Local Prototype)*.

### 6. Pulse
**Real-Time Collaborative Workspace**
- A full-stack collaborative workspace where teams manage projects, tasks, documents, and live activity together in real time.
- Explores real-time state, optimistic UI updates, WebSocket synchronization, presence telemetry, and collaborative conflict handling *(Currently Building / In Development)*.
- **Technologies Explored**: Next.js, React, WebSockets, Database / Schema, Product UX.

### 7. ATLAS
**AI / RAG / Knowledge Systems**
- A knowledge workspace exploring document ingestion, semantic retrieval, grounded generation, and evidence-first answers.
- Features a 7-stage retrieval pipeline (`DOCUMENTS → INGEST → CHUNK → INDEX → RETRIEVE → GENERATE → EVIDENCE`) and deterministic source citation highlighting *(Currently Building / Architectural Prototype)*.
- **Technologies Explored**: RAG Architecture, Embeddings, Vector Search Concepts, Context Budgeting, Grounded Attribution.

### 8. NEXUS
**DevOps / Automation / Developer Infrastructure**
- An operational developer infrastructure platform connecting source repositories, automated test gates, immutable build artifacts, and edge health observability.
- Bridges local developer coding (Forge) to remote deployment lifecycles (`REPOSITORY → ANALYZE → BUILD → TEST → DEPLOY → MONITOR`) *(Currently Building / Architectural Prototype)*.
- **Technologies Explored**: CI/CD Pipelines, Turbopack, Test Gates, Edge Rollouts, Infrastructure Observability.

### Additional Build: LPG Gas Leakage Dashboard
**Real-Time IoT Dashboard for Monitoring Gas Leakage and Automatic Shutoff**
- Streams real-time telemetry from physical MQ-6 sensors to visualize gas concentration levels, solenoid valve status, and emergency threshold alerts.
- **Technologies Used**: React, Vite, Tailwind CSS, Firebase Realtime Database, Recharts, Framer Motion *(Built)*.

---

## 🛠️ Portfolio Tech Stack

The portfolio itself is built with:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations & Micro-interactions**: [Framer Motion](https://motion.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🎨 Design System & Art Direction

- **Editorial Design**: Warm charcoal palette (`#0d0f14`), tactile linen (`#f5f4ef`), terracotta accents (`#f97316`), and muted sage (`#84a98c`) with strong typographic contrast.
- **Precise Visual Hierarchy**: 5 deliberate levels of attention, orientation, story, interaction, and micro details.
- **Scroll-Based Storytelling**: Alternating rhythm between dense technical showcases (perception pipelines, terminal visuals) and quiet editorial moments (signature philosophy).
- **Interaction-Driven UX**: Tactile terminal trace simulator, interactive 8-stage workflow inspector, and responsive technology ecosystem map.
- **Accessibility & Performance**: Semantic HTML5 hierarchy, keyboard navigation, full support for `prefers-reduced-motion`, and zero-layout-shift static prerendering.

---

## 💻 Running Locally

To run this website locally on your machine:

```bash
# 1. Clone the repository
git clone https://github.com/nikhi20-900/nikhil-portfolio.git

# 2. Navigate to the project directory
cd nikhil-portfolio

# 3. Install dependencies
npm install

# 4. Start the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

---

## 🏗️ Production Build

To build and test the optimized production bundle:

```bash
# Build production bundle with Next.js Turbopack
npm run build

# Start the production server locally
npm run start
```

---

## 📬 Contact

- **Email**: [nikhil142004@gmail.com](mailto:nikhil142004@gmail.com)
- **GitHub**: [https://github.com/nikhi20-900](https://github.com/nikhi20-900)
- **LinkedIn**: [https://www.linkedin.com/in/nikhil-chhetri-115747284/](https://www.linkedin.com/in/nikhil-chhetri-115747284/)
