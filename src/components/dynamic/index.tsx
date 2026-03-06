/**
 * Dynamic Component Imports
 * 
 * Code-split heavy components for better performance
 * Implements lazy loading with loading states
 * 
 * Requirements: 14.5, 14.6
 */

import dynamic from 'next/dynamic';

/**
 * Loading component for dynamic imports
 */
function LoadingComponent() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="text-center">
        <div className="mb-4 animate-spin text-4xl">⚡</div>
        <p className="text-sm text-gray-600">Loading...</p>
      </div>
    </div>
  );
}

/**
 * Dynamically imported 3D components
 */
export const DynamicThreeScene = dynamic(
  () => import('@/components/three/ThreeScene'),
  {
    loading: LoadingComponent,
    ssr: false, // Disable SSR for 3D components
  }
);

export const DynamicLazyThreeScene = dynamic(
  () => import('@/components/three/LazyThreeScene'),
  {
    loading: LoadingComponent,
    ssr: false,
  }
);

export const DynamicFloatingObjects = dynamic(
  () => import('@/components/three/FloatingObjects'),
  {
    loading: LoadingComponent,
    ssr: false,
  }
);

export const DynamicBackgroundShapes = dynamic(
  () => import('@/components/three/BackgroundShapes'),
  {
    loading: LoadingComponent,
    ssr: false,
  }
);

/**
 * Dynamically imported section components
 */
export const DynamicHero = dynamic(
  () => import('@/components/sections/Hero'),
  {
    loading: LoadingComponent,
  }
);

export const DynamicParallaxSection = dynamic(
  () => import('@/components/sections/ParallaxSection'),
  {
    loading: LoadingComponent,
  }
);

export const DynamicCallToAction = dynamic(
  () => import('@/components/sections/CallToAction'),
  {
    loading: LoadingComponent,
  }
);

/**
 * Dynamically imported card components
 */
export const DynamicServiceCard = dynamic(
  () => import('@/components/cards/ServiceCard'),
  {
    loading: LoadingComponent,
  }
);

export const DynamicProjectCard = dynamic(
  () => import('@/components/cards/ProjectCard'),
  {
    loading: LoadingComponent,
  }
);

/**
 * Dynamically imported form components
 */
export const DynamicContactForm = dynamic(
  () => import('@/components/forms/ContactForm'),
  {
    loading: LoadingComponent,
  }
);

/**
 * Preload critical components
 */
export function preloadCriticalComponents() {
  // Preload components that are likely to be needed soon
  // Note: Next.js dynamic imports don't have a preload method
  // Use router.prefetch() instead for route-based preloading
}

/**
 * Preload page-specific components
 */
export const preloadComponents = {
  home: () => {
    // Components will be loaded on demand
  },
  about: () => {
    // Components will be loaded on demand
  },
  services: () => {
    // Components will be loaded on demand
  },
  projects: () => {
    // Components will be loaded on demand
  },
  contact: () => {
    // Components will be loaded on demand
  },
};
