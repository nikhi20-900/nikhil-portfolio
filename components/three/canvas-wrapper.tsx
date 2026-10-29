"use client";

import dynamic from "next/dynamic";

export const Scene3DCanvas = dynamic(
  () => import("@/components/three/persistent-canvas"),
  {
    ssr: false,
    loading: () => (
      <div
        className="fixed inset-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />
      </div>
    ),
  }
);

