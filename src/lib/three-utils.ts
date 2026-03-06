import * as THREE from "three";
import { isWebGLSupported, isLowEndDevice, getWebGLCapabilities } from "./webgl-detection";
import { errorLogger } from "./error-logger";

/**
 * Utility functions for Three.js and React Three Fiber
 */

/**
 * Create a random position within bounds
 */
export function randomPosition(
  bounds: { x: number; y: number; z: number } = { x: 10, y: 10, z: 10 }
): [number, number, number] {
  return [
    (Math.random() - 0.5) * bounds.x,
    (Math.random() - 0.5) * bounds.y,
    (Math.random() - 0.5) * bounds.z,
  ];
}

/**
 * Create a random rotation
 */
export function randomRotation(): [number, number, number] {
  return [
    Math.random() * Math.PI * 2,
    Math.random() * Math.PI * 2,
    Math.random() * Math.PI * 2,
  ];
}

/**
 * Create a random color from a palette
 */
export function randomColor(palette: string[] = ["#3b82f6", "#8b5cf6", "#f59e0b"]): string {
  return palette[Math.floor(Math.random() * palette.length)];
}

/**
 * Convert mouse position to normalized device coordinates
 */
export function mouseToNDC(
  mouseX: number,
  mouseY: number,
  width: number,
  height: number
): { x: number; y: number } {
  return {
    x: (mouseX / width) * 2 - 1,
    y: -(mouseY / height) * 2 + 1,
  };
}

/**
 * Lerp (linear interpolation) function
 */
export function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor;
}

/**
 * Smooth damp function for smooth camera movement
 */
export function smoothDamp(
  current: number,
  target: number,
  velocity: { value: number },
  smoothTime: number,
  deltaTime: number
): number {
  const omega = 2 / smoothTime;
  const x = omega * deltaTime;
  const exp = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x);
  const change = current - target;
  const originalTo = target;
  const maxChange = Infinity;
  const clampedChange = Math.max(-maxChange, Math.min(change, maxChange));
  target = current - clampedChange;
  const temp = (velocity.value + omega * clampedChange) * deltaTime;
  velocity.value = (velocity.value - omega * temp) * exp;
  let output = target + (clampedChange + temp) * exp;
  if (originalTo - current > 0 === output > originalTo) {
    output = originalTo;
    velocity.value = (output - originalTo) / deltaTime;
  }
  return output;
}

/**
 * Create floating animation parameters
 */
export function createFloatingAnimation(index: number) {
  return {
    amplitude: 0.5 + Math.random() * 0.5,
    frequency: 0.5 + Math.random() * 0.5,
    offset: index * 0.5,
  };
}

/**
 * Create rotation animation parameters
 */
export function createRotationAnimation() {
  return {
    x: (Math.random() - 0.5) * 0.02,
    y: (Math.random() - 0.5) * 0.02,
    z: (Math.random() - 0.5) * 0.02,
  };
}

/**
 * Generate geometry based on shape type
 */
export function createGeometry(shape: "sphere" | "box" | "torus" | "cylinder"): THREE.BufferGeometry {
  switch (shape) {
    case "sphere":
      return new THREE.SphereGeometry(1, 32, 32);
    case "box":
      return new THREE.BoxGeometry(1, 1, 1);
    case "torus":
      return new THREE.TorusGeometry(0.7, 0.3, 16, 100);
    case "cylinder":
      return new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
    default:
      return new THREE.SphereGeometry(1, 32, 32);
  }
}

/**
 * Create material with cartoon-like properties
 */
export function createCartoonMaterial(color: string): THREE.MeshToonMaterial {
  return new THREE.MeshToonMaterial({
    color,
    transparent: true,
    opacity: 0.8,
  });
}

/**
 * Create standard material with PBR properties
 */
export function createStandardMaterial(
  color: string,
  roughness = 0.3,
  metalness = 0.1
): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial({
    color,
    roughness,
    metalness,
    transparent: true,
    opacity: 0.9,
  });
}

/**
 * Calculate mouse influence on 3D objects
 */
export function calculateMouseInfluence(
  mousePosition: { x: number; y: number },
  objectPosition: [number, number, number],
  influence = 0.1
): { x: number; y: number; z: number } {
  return {
    x: mousePosition.x * influence,
    y: mousePosition.y * influence,
    z: 0,
  };
}

/**
 * Create particle system configuration
 */
export function createParticleConfig(count = 100) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const sizes = new Float32Array(count);

  const colorPalette = [
    new THREE.Color("#3b82f6"),
    new THREE.Color("#8b5cf6"),
    new THREE.Color("#f59e0b"),
  ];

  for (let i = 0; i < count; i++) {
    // Positions
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

    // Colors
    const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;

    // Sizes
    sizes[i] = Math.random() * 2 + 1;
  }

  return { positions, colors, sizes };
}

/**
 * Easing functions for smooth animations
 */
export const easing = {
  easeInOut: (t: number): number => t * t * (3 - 2 * t),
  easeOut: (t: number): number => 1 - Math.pow(1 - t, 3),
  easeIn: (t: number): number => t * t * t,
  bounce: (t: number): number => {
    if (t < 1 / 2.75) {
      return 7.5625 * t * t;
    } else if (t < 2 / 2.75) {
      return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
    } else if (t < 2.5 / 2.75) {
      return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
    } else {
      return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
    }
  },
};

/**
 * Check WebGL support
 */
export function checkWebGLSupport(): boolean {
  // Return false during SSR
  if (typeof document === "undefined") {
    return false;
  }
  
  try {
    return isWebGLSupported();
  } catch (error) {
    errorLogger.log3DError(
      error instanceof Error ? error : new Error(String(error)),
      "WebGL Support Check"
    );
    return false;
  }
}

/**
 * Get device performance tier
 */
export function getPerformanceTier(): "low" | "medium" | "high" {
  // Return medium tier during SSR
  if (typeof document === "undefined") {
    return "medium";
  }
  
  try {
    // Check if device is low-end
    if (isLowEndDevice()) {
      return "low";
    }

    const capabilities = getWebGLCapabilities();
    
    if (!capabilities.supported) {
      return "low";
    }
    
    // Check for WebGL 2 support
    if (capabilities.version === 2) {
      // Check renderer for high-end GPUs
      const renderer = (capabilities.renderer || "").toLowerCase();
      if (renderer.includes("gtx") || renderer.includes("rtx") || 
          renderer.includes("radeon rx") || renderer.includes("apple m")) {
        return "high";
      }
    }
    
    // Check texture size as an indicator
    const maxTextureSize = capabilities.maxTextureSize || 0;
    if (maxTextureSize >= 8192) {
      return "high";
    } else if (maxTextureSize >= 4096) {
      return "medium";
    }
    
    return "medium";
  } catch (error) {
    errorLogger.log3DError(
      error instanceof Error ? error : new Error(String(error)),
      "Performance Tier Detection"
    );
    return "medium";
  }
}