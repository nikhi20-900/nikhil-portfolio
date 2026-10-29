export const TOKENS = {
  colors: {
    background: "#0A0A0B",
    foreground: "#EDEDED",
    surface1: "#111113",
    surface2: "#18181B",
    surface3: "#222226",
    surfaceBorder: "rgba(255, 255, 255, 0.08)",
    accent: "#00F0FF", // Electric Cyan
    accentGlow: "rgba(0, 240, 255, 0.15)",
    muted: "#888891",
  },
  typography: {
    hero: "clamp(3.5rem, 11vw, 10.5rem)",
    h1: "clamp(2.75rem, 7vw, 6.5rem)",
    h2: "clamp(2rem, 4.5vw, 4rem)",
    h3: "clamp(1.25rem, 2.5vw, 2.25rem)",
    body: "clamp(0.95rem, 1.1vw, 1.15rem)",
    mono: "clamp(0.75rem, 0.9vw, 0.875rem)",
  },
  transitions: {
    easeOut: [0.16, 1, 0.3, 1] as const,
    easeInOut: [0.87, 0, 0.13, 1] as const,
  },
};

