"use client";

import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import BackgroundShapes, { BackgroundShapesPresets } from "../three/BackgroundShapes";
import ThreeScene from "../three/ThreeScene";

/**
 * Example component demonstrating BackgroundShapes usage
 */
export default function BackgroundShapesExample() {
  const [preset, setPreset] = useState<keyof typeof BackgroundShapesPresets>("atmospheric");
  const [customSettings, setCustomSettings] = useState({
    count: 15,
    animationSpeed: 0.3,
    opacity: 0.4,
    enableParticles: true,
    particleCount: 200,
  });

  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Controls */}
      <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
        <h3 className="text-lg font-semibold mb-3">BackgroundShapes Demo</h3>
        
        {/* Preset Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Preset:</label>
          <select
            value={preset}
            onChange={(e) => setPreset(e.target.value as keyof typeof BackgroundShapesPresets)}
            className="w-full p-2 border rounded-md"
          >
            {Object.keys(BackgroundShapesPresets).map((key) => (
              <option key={key} value={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Custom Controls */}
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">
              Count: {customSettings.count}
            </label>
            <input
              type="range"
              min="0"
              max="30"
              value={customSettings.count}
              onChange={(e) => setCustomSettings(prev => ({ 
                ...prev, 
                count: parseInt(e.target.value) 
              }))}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Animation Speed: {customSettings.animationSpeed.toFixed(1)}
            </label>
            <input
              type="range"
              min="0"
              max="2"
              step="0.1"
              value={customSettings.animationSpeed}
              onChange={(e) => setCustomSettings(prev => ({ 
                ...prev, 
                animationSpeed: parseFloat(e.target.value) 
              }))}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* 3D Scene */}
      <ThreeScene>
        <BackgroundShapes {...BackgroundShapesPresets[preset]} />
        <OrbitControls enablePan={false} enableZoom={true} enableRotate={true} />
      </ThreeScene>
    </div>
  );
}