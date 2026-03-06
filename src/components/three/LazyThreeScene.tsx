'use client';

import React from 'react';
import { useLazyLoad } from '@/lib/lazy-loading';
import type { ThreeSceneProps } from '@/types';

/**
 * LazyThreeScene Component
 * 
 * Lazy loads 3D scenes only when they come into viewport
 * Implements performance optimization for 3D content
 * 
 * Requirements: 14.1
 */

interface LazyThreeSceneProps extends ThreeSceneProps {
  /** Placeholder component while scene is not loaded */
  placeholder?: React.ReactNode;
  /** Root margin for intersection observer */
  rootMargin?: string;
  /** Load priority */
  priority?: 'high' | 'medium' | 'low';
}

/**
 * Default placeholder for lazy-loaded 3D scenes
 */
function DefaultPlaceholder() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="text-center">
        <div className="mb-4 text-4xl animate-pulse">🎨</div>
        <p className="text-sm text-gray-600">Preparing 3D scene...</p>
      </div>
    </div>
  );
}

/**
 * Lazy-loaded ThreeScene component
 */
export default function LazyThreeScene({
  children,
  camera,
  lights,
  controls,
  placeholder,
  rootMargin = '100px',
  priority = 'medium',
}: LazyThreeSceneProps) {
  // Adjust root margin based on priority
  const priorityMargins = {
    high: '300px',
    medium: '100px',
    low: '50px',
  };

  const [elementRef, isVisible] = useLazyLoad({
    rootMargin: rootMargin || priorityMargins[priority],
    threshold: 0.01,
    triggerOnce: true,
  });

  return (
    <div ref={elementRef} className="h-full w-full">
      {isVisible ? (
        // Dynamically import ThreeScene only when visible
        <LazyThreeSceneContent
          camera={camera}
          lights={lights}
          controls={controls}
        >
          {children}
        </LazyThreeSceneContent>
      ) : (
        placeholder || <DefaultPlaceholder />
      )}
    </div>
  );
}

/**
 * Lazy-loaded content wrapper
 */
function LazyThreeSceneContent({
  children,
  camera,
  lights,
  controls,
}: ThreeSceneProps) {
  // Dynamically import ThreeScene component
  const [ThreeScene, setThreeScene] = React.useState<React.ComponentType<ThreeSceneProps> | null>(null);

  React.useEffect(() => {
    import('./ThreeScene').then((mod) => {
      setThreeScene(() => mod.default);
    });
  }, []);

  if (!ThreeScene) {
    return <DefaultPlaceholder />;
  }

  return (
    <ThreeScene camera={camera} lights={lights} controls={controls}>
      {children}
    </ThreeScene>
  );
}

/**
 * Hook for preloading 3D scene
 */
export function usePreloadThreeScene() {
  React.useEffect(() => {
    // Preload ThreeScene component
    import('./ThreeScene');
  }, []);
}
