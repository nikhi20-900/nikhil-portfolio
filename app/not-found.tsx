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
      meshRef.current.rotation.x = time * 0.7;
      meshRef.current.rotation.y = time * 0.9;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = time * 0.5;
      ringRef.current.rotation.x = Math.sin(time) * 0.5;
    }
  });

  return (
    <group>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} color="#00f0ff" intensity={30} />
      <pointLight position={[-5, -5, -5]} color="#ff0055" intensity={20} />

      {/* Floating 404 Toy Shape */}
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.35, 100, 16]} />
        <meshStandardMaterial
          color="#00f0ff"
          wireframe
          emissive="#00f0ff"
          emissiveIntensity={0.6}
        />
      </mesh>

      <mesh ref={ringRef}>
        <ringGeometry args={[1.8, 1.85, 64]} />
        <meshBasicMaterial color="#ffffff" side={THREE.DoubleSide} transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

export default function NotFound() {
  return (
    <main className="relative min-h-screen w-full bg-[#0A0A0B] text-[#EDEDED] flex flex-col justify-between p-8 sm:p-16 overflow-hidden">
      {/* Top telemetry */}
      <div className="flex items-center justify-between font-mono text-xs text-[#8E8E99]">
        <span>SYSTEM CODE // 404</span>
        <span className="text-accent flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
          COORDINATES UNRESOLVED
        </span>
      </div>

      {/* Interactive 3D Canvas in center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
        <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
          <InteractiveToy />
        </Canvas>
      </div>

      {/* Center text overlay */}
      <div className="relative z-10 pointer-events-none my-auto max-w-xl">
        <p className="font-mono text-xs text-accent uppercase tracking-widest mb-2">
          SIGNAL LOST IN DEEP SPACE
        </p>
        <h1 className="text-6xl sm:text-8xl font-black tracking-tighter uppercase mb-4">
          404 ERROR
        </h1>
        <p className="text-base text-[#8E8E99] leading-relaxed mb-8">
          The requested coordinate does not exist in this sector. Drag or inspect the 3D quantum knot,
          or return to base navigation.
        </p>

        <div className="pointer-events-auto inline-block">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-black font-bold font-mono text-xs uppercase hover:bg-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO HOME</span>
          </Link>
        </div>
      </div>

      {/* Footer info */}
      <div className="relative z-10 font-mono text-[11px] text-[#8E8E99] flex justify-between border-t divider-subtle pt-6">
        <span>NIKHIL CHHETRI PORTFOLIO</span>
        <span>INTERACTIVE R3F KNOT SIMULATOR</span>
      </div>
    </main>
  );
}

