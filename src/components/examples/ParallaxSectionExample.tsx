"use client";

import React from "react";
import { ParallaxSection, HeroParallaxSection, ContentParallaxSection, useParallaxLayers } from "@/components/sections/ParallaxSection";
import BackgroundShapes from "@/components/three/BackgroundShapes";
import FloatingObjects from "@/components/three/FloatingObjects";

/**
 * Example demonstrating ParallaxSection component usage
 * Shows different parallax configurations and layer systems
 */

// Example background layer components
const GradientLayer: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <div
    className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-600/20"
    style={style}
  />
);

const ShapeLayer: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <div className="w-full h-full" style={style}>
    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-yellow-400/30 rounded-full blur-xl" />
    <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-pink-400/30 rounded-lg blur-lg rotate-45" />
    <div className="absolute top-1/2 left-3/4 w-40 h-40 bg-green-400/20 rounded-full blur-2xl" />
  </div>
);

const ParticleLayer: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
  <div className="w-full h-full" style={style}>
    {Array.from({ length: 20 }).map((_, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 bg-white/40 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 2}s`,
        }}
      />
    ))}
  </div>
);

export const ParallaxSectionExample: React.FC = () => {
  // Create parallax layers using the utility hook
  const backgroundLayers = useParallaxLayers([
    { speed: 0.2, direction: "vertical", className: "opacity-60" },
    { speed: 0.4, direction: "vertical", className: "opacity-40" },
    { speed: 0.6, direction: "vertical", className: "opacity-30" },
  ]);

  // Custom layers with components
  const customLayers = [
    {
      speed: 0.1,
      direction: "vertical" as const,
      component: GradientLayer,
      className: "opacity-50",
    },
    {
      speed: 0.3,
      direction: "vertical" as const,
      component: ShapeLayer,
      className: "opacity-70",
    },
    {
      speed: 0.5,
      direction: "vertical" as const,
      component: ParticleLayer,
      className: "opacity-80",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Hero Section with Slow Parallax */}
      <HeroParallaxSection
        className="min-h-screen flex items-center justify-center"
        layers={customLayers}
        performance={{
          respectPerformance: true,
          useGPU: true,
          throttle: 16,
        }}
      >
        <div className="text-center text-white z-10">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Parallax Hero Section
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            This hero section demonstrates slow parallax scrolling with multiple background layers
            moving at different speeds to create depth and visual interest.
          </p>
        </div>
      </HeroParallaxSection>

      {/* Content Section with Medium Parallax */}
      <ContentParallaxSection
        className="py-20 px-8"
        layers={[
          {
            speed: 0.2,
            direction: "vertical",
            component: ({ style }) => (
              <div className="w-full h-full bg-gradient-to-r from-indigo-500/10 to-cyan-500/10" style={style} />
            ),
          },
        ]}
      >
        <div className="max-w-4xl mx-auto text-white">
          <h2 className="text-4xl font-bold mb-8 text-center">Content Section</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Feature One</h3>
              <p className="text-gray-300">
                This content section uses medium-speed parallax to create a subtle depth effect
                while maintaining readability and accessibility.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">Feature Two</h3>
              <p className="text-gray-300">
                The parallax effect is performance-optimized and respects user preferences
                for reduced motion accessibility.
              </p>
            </div>
          </div>
        </div>
      </ContentParallaxSection>

      {/* Section with 3D Background Elements */}
      <ParallaxSection
        className="py-20 px-8 relative"
        speed={0.3}
        backgroundElements={[
          () => (
            <div className="absolute inset-0 opacity-30">
              <BackgroundShapes
                count={15}
                colors={["#3B82F6", "#8B5CF6", "#06B6D4", "#10B981"]}
                animationSpeed={0.5}
              />
            </div>
          ),
          () => (
            <div className="absolute inset-0 opacity-20">
              <FloatingObjects
                count={8}
                shapes={["sphere", "box", "torus"]}
                colors={["#F59E0B", "#EF4444", "#8B5CF6"]}
                animationSpeed={0.3}
              />
            </div>
          ),
        ]}
      >
        <div className="max-w-4xl mx-auto text-white text-center">
          <h2 className="text-4xl font-bold mb-8">3D Background Elements</h2>
          <p className="text-xl text-gray-300 mb-12">
            This section combines parallax scrolling with 3D background elements
            for an immersive experience.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Card {i + 1}</h3>
                <p className="text-gray-300 text-sm">
                  Interactive card with 3D background elements moving at different parallax speeds.
                </p>
              </div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Performance Demo Section */}
      <ParallaxSection
        className="py-20 px-8"
        speed={0.7}
        performance={{
          respectPerformance: true,
          useGPU: true,
          throttle: 8, // Higher frequency for smooth demo
        }}
        observer={{
          rootMargin: "0px 0px -20% 0px",
          threshold: [0, 0.25, 0.5, 0.75, 1],
        }}
      >
        <div className="max-w-4xl mx-auto text-white text-center">
          <h2 className="text-4xl font-bold mb-8">Performance Optimized</h2>
          <p className="text-xl text-gray-300 mb-12">
            This section demonstrates performance optimization features including
            Intersection Observer, GPU acceleration, and adaptive quality.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Performance Features</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">Intersection Observer</h4>
                <p className="text-gray-300 text-sm">
                  Only animates when section is visible in viewport
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-400 mb-2">GPU Acceleration</h4>
                <p className="text-gray-300 text-sm">
                  Uses transform3d for hardware acceleration
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-green-400 mb-2">Adaptive Quality</h4>
                <p className="text-gray-300 text-sm">
                  Automatically adjusts based on device performance
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-yellow-400 mb-2">Reduced Motion</h4>
                <p className="text-gray-300 text-sm">
                  Respects user accessibility preferences
                </p>
              </div>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Final Section */}
      <div className="py-20 px-8 bg-slate-800">
        <div className="max-w-4xl mx-auto text-white text-center">
          <h2 className="text-4xl font-bold mb-8">End of Demo</h2>
          <p className="text-xl text-gray-300">
            Scroll back up to see the parallax effects in action!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParallaxSectionExample;