
export const TOKENS = {
  colors: {
    charcoal: "#0D0F14", // Primary dark background
    linen: "#F5F4EF", // Primary light text / surface
    terracotta: "#F97316", // Primary accent (warm terracotta)
    terracottaLight: "#FB923C",
    sage: "#84A98C", // Secondary accent (verified/shipped status)
    muted: "#A6A69F", // Secondary text on dark surfaces
    darkBorder: "#30312F", // Subtle dividers
    lightBorder: "#DAD9D2",
    surface1: "#12151C",
    surface2: "#181C26",
    surface3: "#222735",
  },
  typography: {
    hero: "clamp(2.75rem, 6.5vw, 5.5rem)",
    h1: "clamp(2.25rem, 5vw, 4rem)",
    h2: "clamp(1.75rem, 3.5vw, 3rem)",
    h3: "clamp(1.2rem, 2vw, 1.85rem)",
    body: "clamp(0.95rem, 1.05vw, 1.125rem)",
    mono: "clamp(0.75rem, 0.85vw, 0.85rem)",
  },
  transitions: {
    easeOut: [0.16, 1, 0.3, 1] as const,
    easeInOut: [0.87, 0, 0.13, 1] as const,
  },
};
