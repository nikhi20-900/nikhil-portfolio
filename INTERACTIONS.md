# UI/UX References & Interaction Blueprints

Central reference for all interaction upgrades across the portfolio.

- **Theme**: Engineering Editorial — Charcoal (`#0D0F14`), Linen (`#F5F4EF`), Terracotta (`#F97316`), Sage (`#84A98C`).
- **Stack**: Next.js 16 (App Router) + TypeScript + Tailwind CSS + GSAP / Lenis + React Three Fiber + Framer Motion.

---

## 🏛️ Premium UX Principles

1. **Motion has purpose**: Every animation explains hierarchy, state, or progress. Cap at 3 simultaneous animated elements in viewport.
2. **Timing**: Micro-interactions 120–200ms, reveals 600–1000ms, never linear. Uses custom signature ease: `cubic-bezier(0.16, 1, 0.3, 1)` (GSAP `power4.out`).
3. **Instant Feedback**: Visible response within 100ms of every action (hover, press, copy, open).
4. **Scroll is Sacred**: Never hijack in a way that traps the user; always allow native keyboard scrolling and skipping pinned sections.
5. **Content First**: LCP text visible immediately; 3D canvas is an ambient, persistent enhancement.
6. **Accessibility & Reduced Motion**: Automatically disable cursor effects, parallax, and scrubs under `prefers-reduced-motion: reduce`.
7. **Readability**: Guaranteed AA contrast over animated backgrounds with subtle readability backdrops.
8. **Performance**: One single WebGL canvas, clamped DPR (`[1, 1.25]` mobile, `[1, 1.75]` desktop), zero jank.

---

## ⚡ The 13 Interaction Blueprints

| # | Interaction Module | Target Section / Component | Status |
| --- | ------------------- | ---------------------------- | -------- |
| **01** | **Scroll-Expanding Hero Media** | `hero-section.tsx` | Ready to build |
| **02** | **Multi-State Custom Cursor System** | `custom-cursor.tsx` + `useCursor()` | Foundation built, ready to expand |
| **03** | **Magnetic & Sweep Hover Buttons** | `magnetic-button.tsx` | Built, ready for sweep effect |
| **04** | **Project Cards: Spotlight + 3D Tilt** | `work-section.tsx` + `spotlight-card.tsx` | Built & Verified |
| **05** | **Pinned Horizontal Scroll Gallery** | `work-section.tsx` | Ready to build |
| **06** | **Reusable `<Reveal>` Text & Scramble** | `components/ui/reveal.tsx` | Built & Verified |
| **07** | **Parallax & Zoom Storytelling** | `about-section.tsx` | Ready to build |
| **08** | **Floating Dock / Expandable Navigation** | `components/ui/dock.tsx` | Built & Verified |
| **09** | **Command Palette (⌘K) + Terminal Mode** | `components/ui/command-palette.tsx` | Built & Verified |
| **10** | **Asset-Linked Preloader & Curtain** | `preloader.tsx` | Built |
| **11** | **Cyan Route Curtain Transitions** | `app/template.tsx` | Ready to build |
| **12** | **Reactive "LET'S TALK" Footer** | `contact-section.tsx` | Ready to build |
| **13** | **Velocity & Scroll-Reactive Shader** | `components/three/scene-3d.tsx` | Built & ready to enhance |
