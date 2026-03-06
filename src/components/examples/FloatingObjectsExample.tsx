"use client";

import React from "react";
import ThreeScene from "@/components/three/ThreeScene";
import FloatingObjects, { FloatingObjectsPresets } from "@/components/three/FloatingObjects";

/**
 * Example component demonstrating FloatingObjects usage
 */
export default function FloatingObjectsExample() {
  return (
    <div className="h-96 w-full rounded-lg border border-gray-200 bg-gradient-to-br from-blue-50 to-purple-50">
      <ThreeScene
        camera={{ position: [0, 0, 8], fov: 75 }}
        controls={true}
      >
        <FloatingObjects {...FloatingObjectsPresets.hero} />
      </ThreeScene>
    </div>
  );
}

/**
 * Multiple preset examples
 */
export function FloatingObjectsShowcase() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Hero Preset</h3>
        <div className="h-64 w-full rounded-lg border border-gray-200">
          <ThreeScene camera={{ position: [0, 0, 8] }}>
            <FloatingObjects {...FloatingObjectsPresets.hero} />
          </ThreeScene>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Background Preset</h3>
        <div className="h-64 w-full rounded-lg border border-gray-200">
          <ThreeScene camera={{ position: [0, 0, 10] }}>
            <FloatingObjects {...FloatingObjectsPresets.background} />
          </ThreeScene>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Minimal Preset</h3>
        <div className="h-64 w-full rounded-lg border border-gray-200">
          <ThreeScene camera={{ position: [0, 0, 6] }}>
            <FloatingObjects {...FloatingObjectsPresets.minimal} />
          </ThreeScene>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Custom Configuration</h3>
        <div className="h-64 w-full rounded-lg border border-gray-200">
          <ThreeScene camera={{ position: [0, 0, 8] }}>
            <FloatingObjects
              count={6}
              shapes={["torus", "box"]}
              colors={["#ef4444", "#22c55e", "#3b82f6"]}
              animationSpeed={1.5}
            />
          </ThreeScene>
        </div>
      </div>
    </div>
  );
}