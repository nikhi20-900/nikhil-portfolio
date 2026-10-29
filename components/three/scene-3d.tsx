"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ObjectSceneProps {
  scrollProgress: number;
  mousePos: { x: number; y: number };
}

export function CoreMorphObject({ scrollProgress, mousePos }: ObjectSceneProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const wireframeRef = useRef<THREE.Mesh>(null!);
  const pointsRef = useRef<THREE.Points>(null!);
  const ringGroupRef = useRef<THREE.Group>(null!);
  const timeRef = useRef(0);

  // Subtle ambient particle cloud
  const [particlePositions, particleCount] = useMemo(() => {
    const count = 500;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 2.2 + Math.random() * 1.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return [positions, count];
  }, []);

  useFrame((_, delta) => {
    timeRef.current += delta;
    const time = timeRef.current;

    const p = scrollProgress;
    let targetX = 1.1;
    let targetY = 0;
    let targetZ = 0;
    let targetScale = 1.25;

    if (p < 0.2) {
      // Hero
      const t = p / 0.2;
      targetX = THREE.MathUtils.lerp(1.1, -1.4, t);
      targetY = THREE.MathUtils.lerp(0, -0.15, t);
      targetZ = THREE.MathUtils.lerp(0, -0.4, t);
      targetScale = THREE.MathUtils.lerp(1.25, 1.05, t);
    } else if (p < 0.45) {
      // About to Work
      const t = (p - 0.2) / 0.25;
      targetX = THREE.MathUtils.lerp(-1.4, 1.5, t);
      targetY = THREE.MathUtils.lerp(-0.15, 0.15, t);
      targetZ = THREE.MathUtils.lerp(-0.4, -0.8, t);
      targetScale = THREE.MathUtils.lerp(1.05, 1.3, t);
    } else if (p < 0.7) {
      // Work to Capabilities / Timeline
      const t = (p - 0.45) / 0.25;
      targetX = THREE.MathUtils.lerp(1.5, -1.0, t);
      targetY = THREE.MathUtils.lerp(0.15, -0.3, t);
      targetZ = THREE.MathUtils.lerp(-0.8, -0.3, t);
      targetScale = THREE.MathUtils.lerp(1.3, 1.15, t);
    } else {
      // Contact
      const t = (p - 0.7) / 0.3;
      targetX = THREE.MathUtils.lerp(-1.0, 0, t);
      targetY = THREE.MathUtils.lerp(-0.3, 0.3, t);
      targetZ = THREE.MathUtils.lerp(-0.3, 0.3, t);
      targetScale = THREE.MathUtils.lerp(1.15, 1.45, t);
    }

    // Restrained mouse parallax
    const mouseParallaxX = mousePos.x * 0.25;
    const mouseParallaxY = -mousePos.y * 0.25;

    if (ringGroupRef.current) {
      ringGroupRef.current.position.x = THREE.MathUtils.damp(
        ringGroupRef.current.position.x,
        targetX + mouseParallaxX,
        3.0,
        delta
      );
      ringGroupRef.current.position.y = THREE.MathUtils.damp(
        ringGroupRef.current.position.y,
        targetY + mouseParallaxY,
        3.0,
        delta
      );
      ringGroupRef.current.position.z = THREE.MathUtils.damp(
        ringGroupRef.current.position.z,
        targetZ,
        3.0,
        delta
      );

      const currentScale = THREE.MathUtils.damp(
        ringGroupRef.current.scale.x,
        targetScale,
        3.0,
        delta
      );
      ringGroupRef.current.scale.set(currentScale, currentScale, currentScale);

      ringGroupRef.current.rotation.y += delta * 0.18;
      ringGroupRef.current.rotation.x = Math.sin(time * 0.25) * 0.15;
    }

    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.3;
      meshRef.current.rotation.y = time * 0.35;
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = -time * 0.2;
      wireframeRef.current.rotation.y = -time * 0.25;
    }

    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.05;
    }
  });

  return (
    <group ref={ringGroupRef}>
      {/* Warm Terracotta and Sage ambient point lights */}
      <pointLight position={[3, 3, 4]} intensity={28} color="#f97316" distance={9} />
      <pointLight position={[-3, -2, -3]} intensity={18} color="#84a98c" distance={8} />

      {/* Outer crystalline wireframe shape in warm terracotta */}
      <mesh ref={wireframeRef}>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshStandardMaterial
          wireframe
          color="#f97316"
          emissive="#f97316"
          emissiveIntensity={0.35}
          transparent
          opacity={0.25}
          roughness={0.4}
          metalness={0.8}
        />
      </mesh>

      {/* Inner geometric core in deep charcoal with warm reflection */}
      <mesh ref={meshRef}>
        <octahedronGeometry args={[0.9, 2]} />
        <meshPhysicalMaterial
          color="#0d0f14"
          emissive="#2b1407"
          emissiveIntensity={0.3}
          roughness={0.2}
          metalness={0.9}
          clearcoat={0.8}
          clearcoatRoughness={0.2}
        />
      </mesh>

      {/* Orbital concentric rings */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.75, 0.01, 16, 80]} />
        <meshBasicMaterial color="#f97316" transparent opacity={0.3} />
      </mesh>

      <mesh rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
        <torusGeometry args={[2.05, 0.007, 16, 80]} />
        <meshBasicMaterial color="#84a98c" transparent opacity={0.2} />
      </mesh>

      {/* Gentle particle field */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          color="#f5f4ef"
          transparent
          opacity={0.4}
          blending={THREE.AdditiveBlending}
          sizeAttenuation
        />
      </points>
    </group>
  );
}
