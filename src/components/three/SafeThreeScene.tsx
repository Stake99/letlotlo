'use client';

import React, { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { ThreeErrorBoundary } from './ThreeErrorBoundary';

// Dynamically import ThreeScene with no SSR
const ThreeScene = dynamic(() => import('./ThreeScene'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="text-center">
        <div className="mb-4 animate-spin text-4xl">⚡</div>
        <p className="text-sm text-gray-600">Loading 3D scene...</p>
      </div>
    </div>
  ),
});

interface SafeThreeSceneProps {
  children: ReactNode;
  camera?: {
    position: [number, number, number];
    fov?: number;
  };
  lights?: Array<{
    type: 'ambient' | 'directional' | 'point';
    position?: [number, number, number];
    intensity: number;
    color?: string;
  }>;
  controls?: boolean;
  fallback?: ReactNode;
}

/**
 * Safe wrapper for ThreeScene that includes error boundaries
 * and handles loading/error states gracefully
 */
export default function SafeThreeScene({
  children,
  camera,
  lights,
  controls,
  fallback,
}: SafeThreeSceneProps): React.ReactElement {
  return (
    <ThreeErrorBoundary fallback={fallback}>
      <ThreeScene camera={camera} lights={lights} controls={controls}>
        {children}
      </ThreeScene>
    </ThreeErrorBoundary>
  );
}
