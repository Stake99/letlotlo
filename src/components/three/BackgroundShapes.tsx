"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Sphere, Box, Torus, Cylinder } from "@react-three/drei";
import * as THREE from "three";
import {
  randomPosition,
  randomRotation,
  createFloatingAnimation,
  createRotationAnimation,
  createParticleConfig,
  createStandardMaterial,
  easing,
  getPerformanceTier,
} from "@/lib/three-utils";
import type { MousePosition, PerformanceTier } from "@/types";

/**
 * Props for BackgroundShapes component
 */
export interface BackgroundShapesProps {
  /** Number of background shapes to render */
  count?: number;
  /** Available shape types */
  shapes?: readonly ("sphere" | "box" | "torus" | "cylinder")[];
  /** Color palette for shapes */
  colors?: readonly string[];
  /** Animation speed multiplier */
  animationSpeed?: number;
  /** Opacity of background shapes */
  opacity?: number;
  /** Enable particle system */
  enableParticles?: boolean;
  /** Number of particles */
  particleCount?: number;
}

/**
 * Individual background shape component
 */
interface BackgroundShapeProps {
  shape: "sphere" | "box" | "torus" | "cylinder";
  color: string;
  position: [number, number, number];
  animationSpeed: number;
  index: number;
  opacity: number;
  performanceTier: PerformanceTier;
}

function BackgroundShape({
  shape,
  color,
  position,
  animationSpeed,
  index,
  opacity,
  performanceTier,
}: BackgroundShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Animation parameters optimized for background use
  const animationParams = useMemo(() => ({
    floating: {
      amplitude: 0.2 + Math.random() * 0.3, // Smaller amplitude for subtlety
      frequency: 0.2 + Math.random() * 0.3, // Slower frequency
      offset: index * 0.8,
    },
    rotation: {
      x: (Math.random() - 0.5) * 0.005, // Very slow rotation
      y: (Math.random() - 0.5) * 0.005,
      z: (Math.random() - 0.5) * 0.005,
    },
    initialPosition: position,
    scale: 0.3 + Math.random() * 0.4, // Smaller scale for background
    drift: {
      x: (Math.random() - 0.5) * 0.1,
      z: (Math.random() - 0.5) * 0.1,
    },
  }), [index, position]);

  // Material with soft, translucent properties
  const material = useMemo(() => {
    const mat = createStandardMaterial(color, 0.8, 0.1);
    mat.transparent = true;
    mat.opacity = opacity * (0.3 + Math.random() * 0.4); // Varied opacity
    return mat;
  }, [color, opacity]);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.elapsedTime * animationSpeed;
    
    // Gentle floating animation
    const floatingY = Math.sin(time * animationParams.floating.frequency + animationParams.floating.offset) 
      * animationParams.floating.amplitude;
    
    // Subtle drift movement
    const driftX = Math.sin(time * 0.1) * animationParams.drift.x;
    const driftZ = Math.cos(time * 0.15) * animationParams.drift.z;
    
    // Update position with floating and drift
    meshRef.current.position.set(
      animationParams.initialPosition[0] + driftX,
      animationParams.initialPosition[1] + floatingY,
      animationParams.initialPosition[2] + driftZ
    );
    
    // Very slow rotation for subtle movement
    meshRef.current.rotation.x += animationParams.rotation.x;
    meshRef.current.rotation.y += animationParams.rotation.y;
    meshRef.current.rotation.z += animationParams.rotation.z;
    
    // Gentle breathing scale animation
    const scaleAnimation = 1 + Math.sin(time * 0.3) * 0.05;
    meshRef.current.scale.setScalar(animationParams.scale * scaleAnimation);
  });

  // Render appropriate shape with performance considerations
  const renderShape = () => {
    const commonProps = {
      ref: meshRef,
      material: material,
      castShadow: performanceTier === "high",
      receiveShadow: false, // Background shapes don't need to receive shadows
    };

    // Reduce geometry complexity on lower performance tiers
    const segments = performanceTier === "low" ? 8 : performanceTier === "medium" ? 16 : 32;

    switch (shape) {
      case "sphere":
        return <Sphere args={[1, segments, segments]} {...commonProps} />;
      case "box":
        return <Box args={[1, 1, 1]} {...commonProps} />;
      case "torus":
        return <Torus args={[0.7, 0.3, segments / 2, segments]} {...commonProps} />;
      case "cylinder":
        return <Cylinder args={[0.5, 0.5, 1, segments]} {...commonProps} />;
      default:
        return <Sphere args={[1, segments, segments]} {...commonProps} />;
    }
  };

  return renderShape();
}

/**
 * Particle system for atmospheric effects
 */
function ParticleSystem({ 
  count, 
  colors, 
  opacity,
  performanceTier 
}: { 
  count: number; 
  colors: readonly string[]; 
  opacity: number;
  performanceTier: PerformanceTier;
}) {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Create particle configuration
  const particleConfig = useMemo(() => {
    // Reduce particle count on lower performance tiers
    const adjustedCount = performanceTier === "low" ? count / 4 : performanceTier === "medium" ? count / 2 : count;
    return createParticleConfig(adjustedCount);
  }, [count, performanceTier]);

  // Create particle material
  const material = useMemo(() => {
    return new THREE.PointsMaterial({
      size: 0.02,
      transparent: true,
      opacity: opacity * 0.6,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
    });
  }, [opacity]);

  // Create particle geometry
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(particleConfig.positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(particleConfig.colors, 3));
    return geo;
  }, [particleConfig]);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const time = state.clock.elapsedTime * 0.1;
    
    // Gentle rotation of the entire particle system
    pointsRef.current.rotation.y = time * 0.05;
    pointsRef.current.rotation.x = Math.sin(time) * 0.02;
  });

  return (
    <points ref={pointsRef} geometry={geometry} material={material} />
  );
}

/**
 * Main BackgroundShapes component
 */
export default function BackgroundShapes({
  count = 15,
  shapes = ["sphere", "box", "torus", "cylinder"],
  colors = ["#3b82f6", "#8b5cf6", "#f59e0b", "#10b981", "#ef4444"],
  animationSpeed = 0.3,
  opacity = 0.4,
  enableParticles = true,
  particleCount = 200,
}: BackgroundShapesProps) {
  const [performanceTier, setPerformanceTier] = useState<PerformanceTier>("medium");
  
  // Detect performance tier on mount
  useEffect(() => {
    setPerformanceTier(getPerformanceTier());
  }, []);

  // Generate background shapes configuration
  const backgroundShapes = useMemo(() => {
    // Adjust count based on performance
    const adjustedCount = performanceTier === "low" ? Math.floor(count / 2) : count;
    
    return Array.from({ length: adjustedCount }, (_, index) => ({
      id: index,
      shape: shapes[index % shapes.length],
      color: colors[index % colors.length],
      // Spread shapes across a larger area for background effect
      position: randomPosition({ x: 20, y: 12, z: 15 }),
      rotation: randomRotation(),
    }));
  }, [count, shapes, colors, performanceTier]);

  return (
    <group>
      {/* Background shapes */}
      {backgroundShapes.map((shape) => (
        <BackgroundShape
          key={shape.id}
          shape={shape.shape}
          color={shape.color}
          position={shape.position}
          animationSpeed={animationSpeed}
          index={shape.id}
          opacity={opacity}
          performanceTier={performanceTier}
        />
      ))}
      
      {/* Particle system for atmospheric effect */}
      {enableParticles && (
        <ParticleSystem
          count={particleCount}
          colors={colors}
          opacity={opacity}
          performanceTier={performanceTier}
        />
      )}
    </group>
  );
}

/**
 * Preset configurations for different use cases
 */
export const BackgroundShapesPresets = {
  subtle: {
    count: 10,
    shapes: ["sphere", "torus"] as const,
    colors: ["#3b82f6", "#8b5cf6", "#f59e0b"],
    animationSpeed: 0.2,
    opacity: 0.3,
    enableParticles: true,
    particleCount: 150,
  },
  atmospheric: {
    count: 20,
    shapes: ["sphere", "box", "torus", "cylinder"] as const,
    colors: ["#3b82f6", "#8b5cf6", "#f59e0b", "#10b981", "#ef4444"],
    animationSpeed: 0.4,
    opacity: 0.5,
    enableParticles: true,
    particleCount: 300,
  },
  minimal: {
    count: 6,
    shapes: ["sphere"] as const,
    colors: ["#3b82f6", "#8b5cf6"],
    animationSpeed: 0.1,
    opacity: 0.2,
    enableParticles: false,
    particleCount: 0,
  },
  particles: {
    count: 0,
    shapes: [] as const,
    colors: ["#3b82f6", "#8b5cf6", "#f59e0b"],
    animationSpeed: 0.1,
    opacity: 0.8,
    enableParticles: true,
    particleCount: 500,
  },
} as const;