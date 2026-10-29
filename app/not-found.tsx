"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { ArrowLeft } from "lucide-react";

function InteractiveToy() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);
  const timeRef = useRef(0);

  useFrame((_, delta) => {
    timeRef.current += delta;
    const time = timeRef.current;
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.5;
      meshRef.current.rotation.y = time * 0.7;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = time * 0.4;
      ringRef.current.rotation.x = Math.sin(time) * 0.4;
    }
  });

  return (
    <group>
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} color="#f97316" intensity={25} />
      <pointLight position={[-5, -5, -5]} color="#84a98c" intensity={15} />

      {/* Floating 404 Toy Shape */}
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.35, 100, 16]} />
        <meshStandardMaterial
          color="#f97316"
          wireframe
          emissive="#f97316"
          emissiveIntensity={0.5}
        />
      </mesh>

      <mesh ref={ringRef}>
        <ringGeometry args={[1.8, 1.85, 64]} />
        <meshBasicMaterial color="#f5f4ef" side={THREE.DoubleSide} transparent opacity={0.25} />
      </mesh>
    </group>
  );
}

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full bg-[#0d0f14] text-[#f5f4ef] flex flex-col justify-between p-8 sm:p-16 overflow-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 editorial-grid opacity-60 pointer-events-none" />

      {/* Top telemetry */}
      <div className="relative z-10 flex items-center justify-between font-mono text-xs text-[#a6a69f]">
        <span>SYSTEM STATUS // 404</span>
        <span className="text-[#f97316] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#f97316] animate-pulse" />
          ROUTE NOT RESOLVED
        </span>
      </div>

      {/* Interactive 3D Canvas in center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
        <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
          <InteractiveToy />
        </Canvas>
      </div>

      {/* Center text overlay */}
      <div className="relative z-10 pointer-events-none my-auto max-w-xl">
        <p className="font-mono text-xs text-[#f97316] uppercase tracking-widest mb-2 font-bold">
          PAGE NOT FOUND
        </p>
        <h1 className="text-5xl sm:text-7xl font-black tracking-tight uppercase mb-4 text-[#f5f4ef]">
          404 ERROR
        </h1>
        <p className="text-base text-[#a6a69f] leading-relaxed mb-8">
          The requested path does not exist in this deployment. You can inspect the ambient geometric
          knot or return to the main editorial document.
        </p>

        <div className="pointer-events-auto inline-block">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#f97316] text-[#0d0f14] font-bold font-mono text-xs uppercase hover:bg-white active:scale-[0.98] transition-all shadow-lg shadow-black/40"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO HOME</span>
          </Link>
        </div>
      </div>

      {/* Footer info */}
      <div className="relative z-10 font-mono text-[11px] text-[#a6a69f] flex justify-between border-t divider-subtle pt-6">
        <span>NIKHIL CHHETRI · PORTFOLIO</span>
        <span>ENGINEERING EDITORIAL</span>
      </div>
    </main>
  );
}
