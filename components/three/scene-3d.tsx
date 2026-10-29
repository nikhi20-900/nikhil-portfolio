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

  // Particle cloud points
  const [particlePositions, particleCount] = useMemo(() => {
    const count = 750;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 2.4 + Math.random() * 1.8;
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

    // Target positions influenced by scrollProgress (0 to 1)
    // Section 0 (Hero): center right (x: 1.2, y: 0, z: 0)
    // Section 1 (About): left (x: -1.6, y: -0.2, z: -0.5)
    // Section 2 (Work): right (x: 1.8, y: 0.1, z: -1)
    // Section 3 (Skills): center-down (x: 0, y: -0.5, z: -0.2)
    // Section 4 (Timeline): center-right (x: 1.4, y: 0, z: -0.8)
    // Section 5 (Contact): center (x: 0, y: 0.3, z: 0.5)

    const p = scrollProgress;
    let targetX = 1.2;
    let targetY = 0;
    let targetZ = 0;
    let targetScale = 1.35;

    if (p < 0.2) {
      // Hero
      const t = p / 0.2;
      targetX = THREE.MathUtils.lerp(1.2, -1.6, t);
      targetY = THREE.MathUtils.lerp(0, -0.2, t);
      targetZ = THREE.MathUtils.lerp(0, -0.5, t);
      targetScale = THREE.MathUtils.lerp(1.35, 1.1, t);
    } else if (p < 0.45) {
      // About to Work
      const t = (p - 0.2) / 0.25;
      targetX = THREE.MathUtils.lerp(-1.6, 1.8, t);
      targetY = THREE.MathUtils.lerp(-0.2, 0.2, t);
      targetZ = THREE.MathUtils.lerp(-0.5, -1.0, t);
      targetScale = THREE.MathUtils.lerp(1.1, 1.4, t);
    } else if (p < 0.7) {
      // Work to Skills / Experience
      const t = (p - 0.45) / 0.25;
      targetX = THREE.MathUtils.lerp(1.8, -1.2, t);
      targetY = THREE.MathUtils.lerp(0.2, -0.4, t);
      targetZ = THREE.MathUtils.lerp(-1.0, -0.3, t);
      targetScale = THREE.MathUtils.lerp(1.4, 1.2, t);
    } else {
      // Contact
      const t = (p - 0.7) / 0.3;
      targetX = THREE.MathUtils.lerp(-1.2, 0, t);
      targetY = THREE.MathUtils.lerp(-0.4, 0.5, t);
      targetZ = THREE.MathUtils.lerp(-0.3, 0.4, t);
      targetScale = THREE.MathUtils.lerp(1.2, 1.6, t);
    }

    // Mouse parallax
    const mouseParallaxX = mousePos.x * 0.4;
    const mouseParallaxY = -mousePos.y * 0.4;

    if (ringGroupRef.current) {
      ringGroupRef.current.position.x = THREE.MathUtils.damp(
        ringGroupRef.current.position.x,
        targetX + mouseParallaxX,
        3.5,
        delta
      );
      ringGroupRef.current.position.y = THREE.MathUtils.damp(
        ringGroupRef.current.position.y,
        targetY + mouseParallaxY,
        3.5,
        delta
      );
      ringGroupRef.current.position.z = THREE.MathUtils.damp(
        ringGroupRef.current.position.z,
        targetZ,
        3.5,
        delta
      );

      const currentScale = THREE.MathUtils.damp(
        ringGroupRef.current.scale.x,
        targetScale,
        3.5,
        delta
      );
      ringGroupRef.current.scale.set(currentScale, currentScale, currentScale);

      // Continuous organic rotation
      ringGroupRef.current.rotation.y += delta * 0.25;
      ringGroupRef.current.rotation.x = Math.sin(time * 0.3) * 0.2;
    }

    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.4;
      meshRef.current.rotation.y = time * 0.5;
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = -time * 0.25;
      wireframeRef.current.rotation.y = -time * 0.35;
    }

    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.08;
      pointsRef.current.rotation.z = Math.sin(time * 0.1) * 0.1;
    }
  });

  return (
    <group ref={ringGroupRef}>
      {/* Dynamic ambient and point lighting focused on the cyan accent */}
      <pointLight position={[3, 3, 4]} intensity={45} color="#00f0ff" distance={10} />
      <pointLight position={[-3, -2, -3]} intensity={25} color="#0066ff" distance={8} />

      {/* Outer crystalline wireframe shape */}
      <mesh ref={wireframeRef}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial
          wireframe
          color="#00f0ff"
          emissive="#00f0ff"
          emissiveIntensity={0.65}
          transparent
          opacity={0.35}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>

      {/* Inner geometric core */}
      <mesh ref={meshRef}>
        <octahedronGeometry args={[0.95, 2]} />
        <meshPhysicalMaterial
          color="#0a0a10"
          emissive="#00384d"
          emissiveIntensity={0.4}
          roughness={0.15}
          metalness={0.95}
          clearcoat={1}
          clearcoatRoughness={0.1}
          wireframe={false}
        />
      </mesh>

      {/* Orbital orbital concentric torus rings */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.85, 0.012, 16, 100]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.4} />
      </mesh>

      <mesh rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
        <torusGeometry args={[2.2, 0.008, 16, 100]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.25} />
      </mesh>

      {/* Particle field orbiting the core */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.035}
          color="#00f0ff"
          transparent
          opacity={0.7}
          blending={THREE.AdditiveBlending}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

