"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Sphere, Box, Torus } from "@react-three/drei";
import * as THREE from "three";
import {
  randomPosition,
  randomRotation,
  createFloatingAnimation,
  createRotationAnimation,
  calculateMouseInfluence,
  createCartoonMaterial,
  easing,
} from "@/lib/three-utils";
import type { FloatingObjectsProps, MousePosition } from "@/types";

/**
 * Individual floating object component
 */
interface FloatingObjectProps {
  shape: "sphere" | "box" | "torus";
  color: string;
  position: [number, number, number];
  animationSpeed: number;
  index: number;
  mousePosition: MousePosition;
}

function FloatingObject({
  shape,
  color,
  position,
  animationSpeed,
  index,
  mousePosition,
}: FloatingObjectProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Animation parameters
  const animationParams = useMemo(() => ({
    floating: createFloatingAnimation(index),
    rotation: createRotationAnimation(),
    initialPosition: position,
    scale: 0.5 + Math.random() * 0.5, // Random scale between 0.5 and 1
  }), [index, position]);

  // Material with cartoon-like properties
  const material = useMemo(() => createCartoonMaterial(color), [color]);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.elapsedTime * animationSpeed;
    
    // Floating animation
    const floatingY = Math.sin(time * animationParams.floating.frequency + animationParams.floating.offset) 
      * animationParams.floating.amplitude;
    
    // Mouse influence
    const mouseInfluence = calculateMouseInfluence(
      mousePosition,
      animationParams.initialPosition,
      0.3
    );
    
    // Update position with floating and mouse influence
    meshRef.current.position.set(
      animationParams.initialPosition[0] + mouseInfluence.x,
      animationParams.initialPosition[1] + floatingY + mouseInfluence.y,
      animationParams.initialPosition[2] + mouseInfluence.z
    );
    
    // Smooth rotation
    meshRef.current.rotation.x += animationParams.rotation.x;
    meshRef.current.rotation.y += animationParams.rotation.y;
    meshRef.current.rotation.z += animationParams.rotation.z;
    
    // Scale animation for breathing effect
    const scaleAnimation = 1 + Math.sin(time * 0.5) * 0.1;
    meshRef.current.scale.setScalar(animationParams.scale * scaleAnimation);
  });

  // Render appropriate shape
  const renderShape = () => {
    const commonProps = {
      ref: meshRef,
      material: material,
      castShadow: true,
      receiveShadow: true,
    };

    switch (shape) {
      case "sphere":
        return <Sphere args={[1, 32, 32]} {...commonProps} />;
      case "box":
        return <Box args={[1, 1, 1]} {...commonProps} />;
      case "torus":
        return <Torus args={[0.7, 0.3, 16, 100]} {...commonProps} />;
      default:
        return <Sphere args={[1, 32, 32]} {...commonProps} />;
    }
  };

  return renderShape();
}

/**
 * Mouse tracking component
 */
function MouseTracker({ onMouseMove }: { onMouseMove: (position: MousePosition) => void }) {
  const { size, camera } = useThree();
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Convert mouse position to normalized device coordinates
      const x = (event.clientX / size.width) * 2 - 1;
      const y = -(event.clientY / size.height) * 2 + 1;
      
      onMouseMove({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [size, onMouseMove]);

  return null;
}

/**
 * Main FloatingObjects component
 */
export default function FloatingObjects({
  count,
  shapes,
  colors,
  animationSpeed = 1,
}: FloatingObjectsProps) {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  
  // Generate objects configuration
  const objects = useMemo(() => {
    return Array.from({ length: count }, (_, index) => ({
      id: index,
      shape: shapes[index % shapes.length],
      color: colors[index % colors.length],
      position: randomPosition({ x: 8, y: 6, z: 4 }),
      rotation: randomRotation(),
    }));
  }, [count, shapes, colors]);

  // Handle mouse movement with throttling for performance
  const handleMouseMove = useMemo(() => {
    let timeoutId: NodeJS.Timeout;
    
    return (position: MousePosition) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setMousePosition(position);
      }, 16); // ~60fps throttling
    };
  }, []);

  return (
    <>
      <MouseTracker onMouseMove={handleMouseMove} />
      {objects.map((obj) => (
        <FloatingObject
          key={obj.id}
          shape={obj.shape}
          color={obj.color}
          position={obj.position}
          animationSpeed={animationSpeed}
          index={obj.id}
          mousePosition={mousePosition}
        />
      ))}
    </>
  );
}

/**
 * Preset configurations for common use cases
 */
export const FloatingObjectsPresets = {
  hero: {
    count: 8,
    shapes: ["sphere", "box", "torus"] as const,
    colors: ["#3b82f6", "#8b5cf6", "#f59e0b", "#10b981"],
    animationSpeed: 0.8,
  },
  background: {
    count: 12,
    shapes: ["sphere", "torus"] as const,
    colors: ["#3b82f6", "#8b5cf6", "#f59e0b"],
    animationSpeed: 0.5,
  },
  minimal: {
    count: 4,
    shapes: ["sphere"] as const,
    colors: ["#3b82f6", "#8b5cf6"],
    animationSpeed: 1.2,
  },
} as const;