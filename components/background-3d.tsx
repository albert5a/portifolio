"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingShape({
  position,
  scale,
  color,
  speed,
  distort,
}: {
  position: [number, number, number];
  scale: number;
  color: string;
  speed: number;
  distort: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const timeRef = useRef(0);

  useFrame((_, delta) => {
    if (meshRef.current) {
      timeRef.current += delta;
      meshRef.current.rotation.x = timeRef.current * speed * 0.3;
      meshRef.current.rotation.y = timeRef.current * speed * 0.2;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color={color}
          roughness={0.4}
          metalness={0.8}
          distort={distort}
          speed={2}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  );
}

function TorusShape({
  position,
  scale,
  color,
  speed,
}: {
  position: [number, number, number];
  scale: number;
  color: string;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const timeRef = useRef(0);

  useFrame((_, delta) => {
    if (meshRef.current) {
      timeRef.current += delta;
      meshRef.current.rotation.x = timeRef.current * speed * 0.2;
      meshRef.current.rotation.z = timeRef.current * speed * 0.1;
    }
  });

  return (
    <Float speed={speed * 0.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[1, 0.3, 16, 32]} />
        <meshStandardMaterial
          color={color}
          roughness={0.3}
          metalness={0.9}
          transparent
          opacity={0.75}
        />
      </mesh>
    </Float>
  );
}

function Particles({ count = 100 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const timeRef = useRef(0);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 30;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 30;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      timeRef.current += delta;
      pointsRef.current.rotation.y = timeRef.current * 0.02;
      pointsRef.current.rotation.x = timeRef.current * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#d4a574"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#d4a574" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#4ade80" />
      <pointLight position={[0, 0, 5]} intensity={0.5} color="#ffffff" />

      <FloatingShape
        position={[-3, 1.5, -2]}
        scale={1.8}
        color="#d4a574"
        speed={1.2}
        distort={0.4}
      />
      <FloatingShape
        position={[4, -1.5, -3]}
        scale={2.2}
        color="#4ade80"
        speed={0.8}
        distort={0.3}
      />
      <FloatingShape
        position={[-5, -2, -4]}
        scale={1.2}
        color="#a3a3a3"
        speed={1.5}
        distort={0.5}
      />
      <FloatingShape
        position={[2, 3, -5]}
        scale={2}
        color="#d4a574"
        speed={0.6}
        distort={0.2}
      />

      <TorusShape position={[5, 0.5, -3]} scale={1} color="#4ade80" speed={1} />
      <TorusShape
        position={[-2, -3, -4]}
        scale={1.4}
        color="#d4a574"
        speed={0.7}
      />

      <Particles count={200} />
    </>
  );
}

export function Background3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" style={{ width: '100vw', height: '100vh' }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: '#0f0f0f' }}
      >
        <Scene />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background/70" />
    </div>
  );
}
