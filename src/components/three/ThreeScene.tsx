"use client";

import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { checkWebGLSupport, getPerformanceTier } from "@/lib/three-utils";
import type { ThreeSceneProps, LightConfig, PerformanceTier } from "@/types";

/**
 * Fallback component for devices that don't support WebGL
 */
function WebGLFallback({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="text-center">
        <div className="mb-4 text-6xl">🎨</div>
        <h3 className="mb-2 text-lg font-semibold text-gray-800">
          3D Graphics Not Available
        </h3>
        <p className="text-sm text-gray-600">
          Your device doesn't support WebGL. Enjoying the 2D experience instead!
        </p>
        {children && (
          <div className="mt-4 opacity-50">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Loading component for 3D scene
 */
function SceneLoader() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="text-center">
        <div className="mb-4 animate-spin text-4xl">⚡</div>
        <p className="text-sm text-gray-600">Loading 3D scene...</p>
      </div>
    </div>
  );
}

/**
 * Default lighting setup based on performance tier
 */
function DefaultLights({ performanceTier }: { performanceTier: PerformanceTier }) {
  const ambientIntensity = performanceTier === "low" ? 0.8 : 0.6;
  const directionalIntensity = performanceTier === "low" ? 0.5 : 0.8;

  return (
    <>
      <ambientLight intensity={ambientIntensity} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={directionalIntensity}
        castShadow={performanceTier !== "low"}
        shadow-mapSize-width={performanceTier === "high" ? 2048 : 1024}
        shadow-mapSize-height={performanceTier === "high" ? 2048 : 1024}
      />
      {performanceTier === "high" && (
        <pointLight position={[-10, -10, -5]} intensity={0.3} />
      )}
    </>
  );
}

/**
 * Custom lights component
 */
function CustomLights({ lights }: { lights: LightConfig[] }) {
  return (
    <>
      {lights.map((light, index) => {
        switch (light.type) {
          case "ambient":
            return (
              <ambientLight
                key={index}
                intensity={light.intensity}
                color={light.color}
              />
            );
          case "directional":
            return (
              <directionalLight
                key={index}
                position={light.position || [10, 10, 5]}
                intensity={light.intensity}
                color={light.color}
                castShadow
              />
            );
          case "point":
            return (
              <pointLight
                key={index}
                position={light.position || [0, 0, 0]}
                intensity={light.intensity}
                color={light.color}
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
}

/**
 * Performance monitor component
 */
function PerformanceMonitor() {
  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());
  const [fps, setFps] = useState(60);

  useFrame(() => {
    frameCount.current++;
    const currentTime = performance.now();
    
    if (currentTime - lastTime.current >= 1000) {
      const currentFps = Math.round((frameCount.current * 1000) / (currentTime - lastTime.current));
      setFps(currentFps);
      frameCount.current = 0;
      lastTime.current = currentTime;
      
      // Log performance warnings in development
      if (process.env.NODE_ENV === "development" && currentFps < 30) {
        console.warn(`Low FPS detected: ${currentFps}fps`);
      }
    }
  });

  return null;
}

/**
 * Responsive canvas component that handles resize events
 */
function ResponsiveCanvas({ 
  children, 
  camera, 
  lights, 
  controls, 
  performanceTier 
}: {
  children: React.ReactNode;
  camera?: ThreeSceneProps["camera"];
  lights?: LightConfig[];
  controls?: boolean;
  performanceTier: PerformanceTier;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current?.parentElement) {
        const parent = canvasRef.current.parentElement;
        setDimensions({
          width: parent.clientWidth,
          height: parent.clientHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Performance-based settings
  const pixelRatio = performanceTier === "low" ? 1 : Math.min(window.devicePixelRatio, 2);
  const antialias = performanceTier !== "low";
  const shadows = performanceTier === "high";

  return (
    <Canvas
      ref={canvasRef}
      dpr={pixelRatio}
      gl={{ 
        antialias,
        alpha: true,
        powerPreference: performanceTier === "high" ? "high-performance" : "default"
      }}
      shadows={shadows}
      className="h-full w-full"
    >
      {/* Camera setup */}
      <PerspectiveCamera
        makeDefault
        position={camera?.position || [0, 0, 5]}
        fov={camera?.fov || 75}
        near={0.1}
        far={1000}
      />

      {/* Lighting setup */}
      {lights ? <CustomLights lights={lights} /> : <DefaultLights performanceTier={performanceTier} />}

      {/* Controls */}
      {controls && (
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          maxPolarAngle={Math.PI / 2}
          minDistance={2}
          maxDistance={20}
        />
      )}

      {/* Performance monitoring */}
      <PerformanceMonitor />

      {/* Scene content */}
      {children}
    </Canvas>
  );
}

/**
 * Main ThreeScene component with WebGL detection and fallbacks
 */
export default function ThreeScene({
  children,
  camera,
  lights,
  controls = false,
}: ThreeSceneProps) {
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);
  const [performanceTier, setPerformanceTier] = useState<PerformanceTier>("medium");

  useEffect(() => {
    // Check WebGL support
    const supported = checkWebGLSupport();
    setWebglSupported(supported);

    if (supported) {
      // Determine performance tier
      const tier = getPerformanceTier();
      setPerformanceTier(tier);
      
      if (process.env.NODE_ENV === "development") {
        console.log(`3D Performance tier: ${tier}`);
      }
    }
  }, []);

  // Show loading state while checking WebGL support
  if (webglSupported === null) {
    return <SceneLoader />;
  }

  // Show fallback if WebGL is not supported
  if (!webglSupported) {
    return <WebGLFallback>{children}</WebGLFallback>;
  }

  return (
    <div className="h-full w-full">
      <Suspense fallback={<SceneLoader />}>
        <ResponsiveCanvas
          camera={camera}
          lights={lights}
          controls={controls}
          performanceTier={performanceTier}
        >
          {children}
        </ResponsiveCanvas>
      </Suspense>
    </div>
  );
}

/**
 * Hook for accessing Three.js scene context
 */
export function useThreeScene() {
  return {
    checkWebGLSupport,
    getPerformanceTier,
  };
}