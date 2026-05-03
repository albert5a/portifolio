"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function FloatingShape({
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

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime();
      meshRef.current.rotation.x = t * speed * 0.3;
      meshRef.current.rotation.y = t * speed * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(t * speed) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color={color}
        roughness={0.4}
        metalness={0.8}
        transparent
        opacity={0.9}
      />
    </mesh>
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

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime();
      meshRef.current.rotation.x = t * speed * 0.2;
      meshRef.current.rotation.z = t * speed * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <torusGeometry args={[1, 0.3, 16, 32]} />
      <meshStandardMaterial
        color={color}
        roughness={0.3}
        metalness={0.9}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

function Particles({ count = 100 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 25;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 25;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }
    return arr;
  }, [count]);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      const t = clock.getElapsedTime();
      pointsRef.current.rotation.y = t * 0.02;
      pointsRef.current.rotation.x = t * 0.01;
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
        size={0.1}
        color="#d4a574"
        transparent
        opacity={0.9}
        sizeAttenuation
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#d4a574" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#4ade80" />
      <pointLight position={[0, 0, 8]} intensity={0.8} color="#ffffff" />

      <FloatingShape
        position={[-3, 1.5, 0]}
        scale={1.5}
        color="#d4a574"
        speed={0.8}
      />
      <FloatingShape
        position={[3.5, -1, -2]}
        scale={2}
        color="#4ade80"
        speed={0.6}
      />
      <FloatingShape
        position={[-4.5, -2, -3]}
        scale={1}
        color="#737373"
        speed={1}
      />
      <FloatingShape
        position={[2, 2.5, -4]}
        scale={1.8}
        color="#d4a574"
        speed={0.5}
      />

      <TorusShape position={[4.5, 0.5, -1]} scale={0.9} color="#4ade80" speed={0.7} />
      <TorusShape position={[-2, -2.5, -2]} scale={1.2} color="#d4a574" speed={0.5} />

      <Particles count={150} />
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
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ 
          antialias: true, 
          alpha: false,
          powerPreference: "default",
        }}
        style={{ 
          width: "100%", 
          height: "100%",
          background: "#0f0f0f",
        }}
      >
        <color attach="background" args={["#0f0f0f"]} />
        <Scene />
      </Canvas>
    </div>
  );
}
