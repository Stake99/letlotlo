import { MotionProps, Variants, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Animation utility functions and hooks for performance optimization
 */

/**
 * Hook to detect user's motion preferences and device capabilities
 */
export const useAnimationPreferences = () => {
  const prefersReducedMotion = useReducedMotion();
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);
  const [supportsWebGL, setSupportsWebGL] = useState(true);

  useEffect(() => {
    // Detect low-end devices based on hardware concurrency and memory
    const navigator = window.navigator as any;
    const hardwareConcurrency = navigator.hardwareConcurrency || 2;
    const deviceMemory = navigator.deviceMemory || 4;
    
    setIsLowEndDevice(hardwareConcurrency <= 2 || deviceMemory <= 2);

    // Check WebGL support
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    setSupportsWebGL(!!gl);
  }, []);

  return {
    prefersReducedMotion,
    isLowEndDevice,
    supportsWebGL,
    shouldUseReducedAnimations: prefersReducedMotion || isLowEndDevice,
  };
};

/**
 * Performance monitoring hook for animations
 */
export const useAnimationPerformance = () => {
  const [fps, setFps] = useState(60);
  const [isPerformanceGood, setIsPerformanceGood] = useState(true);

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animationId: number;

    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const currentFPS = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setFps(currentFPS);
        setIsPerformanceGood(currentFPS >= 45); // Consider 45+ FPS as good
        
        frameCount = 0;
        lastTime = currentTime;
      }
      
      animationId = requestAnimationFrame(measureFPS);
    };

    animationId = requestAnimationFrame(measureFPS);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return { fps, isPerformanceGood };
};

/**
 * Adaptive animation variants based on performance and preferences
 */
export const useAdaptiveAnimations = () => {
  const { shouldUseReducedAnimations } = useAnimationPreferences();
  const { isPerformanceGood } = useAnimationPerformance();

  const getVariant = (
    fullAnimation: Variants,
    reducedAnimation: Variants,
    performanceAnimation?: Variants
  ): Variants => {
    if (shouldUseReducedAnimations) {
      return reducedAnimation;
    }
    
    if (!isPerformanceGood && performanceAnimation) {
      return performanceAnimation;
    }
    
    return fullAnimation;
  };

  return { getVariant, shouldUseReducedAnimations, isPerformanceGood };
};

/**
 * Intersection Observer hook for scroll-triggered animations
 */
export const useScrollAnimation = (
  threshold: number = 0.3,
  rootMargin: string = "-100px"
) => {
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const ref = (node: Element | null) => {
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsInView(true);
          setHasAnimated(true);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => observer.disconnect();
  };

  return { ref, isInView };
};

/**
 * Animation sequence builder for complex animations
 */
export class AnimationSequence {
  private steps: Array<{
    variants: Variants;
    duration?: number;
    delay?: number;
  }> = [];

  add(variants: Variants, duration?: number, delay?: number) {
    this.steps.push({ variants, duration, delay });
    return this;
  }

  build(): Variants {
    const totalDuration = this.steps.reduce(
      (total, step) => total + (step.duration || 0.3) + (step.delay || 0),
      0
    );

    return {
      initial: this.steps[0]?.variants.initial || {},
      animate: {
        ...this.steps[this.steps.length - 1]?.variants.animate,
        transition: {
          duration: totalDuration,
          ease: "easeInOut",
        },
      },
    };
  }
}

/**
 * Gesture-based animation utilities
 */
export const gestureAnimations = {
  // Drag constraints for interactive elements
  dragConstraints: {
    top: -50,
    left: -50,
    right: 50,
    bottom: 50,
  },

  // Drag elastic effect
  dragElastic: 0.2,

  // Tap animation
  tap: { scale: 0.95 },

  // Hover with gesture support
  hoverWithGesture: {
    scale: 1.05,
    transition: { duration: 0.15 },
  },
} as const;

/**
 * Animation timing utilities
 */
export const timing = {
  // Micro-interactions (hover, click)
  micro: 0.15,
  
  // Standard UI animations
  standard: 0.3,
  
  // Page transitions
  page: 0.5,
  
  // Complex animations
  complex: 0.8,
  
  // Attention-grabbing animations
  attention: 1.2,
} as const;

/**
 * Easing functions for different animation types
 */
export const easings = {
  // Standard easing
  standard: [0.25, 0.46, 0.45, 0.94],
  
  // Bouncy for cartoon-like feel
  bouncy: [0.68, -0.55, 0.265, 1.55],
  
  // Sharp for quick interactions
  sharp: [0.4, 0, 0.2, 1],
  
  // Gentle for subtle animations
  gentle: [0.25, 0.46, 0.45, 0.94],
  
  // Elastic for playful animations
  elastic: [0.68, -0.55, 0.265, 1.55],
} as const;

/**
 * Animation presets for common UI patterns
 */
export const presets = {
  // Modal/Dialog animations
  modal: {
    initial: { opacity: 0, scale: 0.95, y: 20 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        duration: timing.standard,
        ease: easings.standard,
      },
    },
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      y: 20,
      transition: {
        duration: timing.micro,
        ease: easings.sharp,
      },
    },
  } as Variants,

  // Tooltip animations
  tooltip: {
    initial: { opacity: 0, scale: 0.8, y: 10 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        duration: timing.micro,
        ease: easings.sharp,
      },
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      y: 10,
      transition: {
        duration: timing.micro,
        ease: easings.sharp,
      },
    },
  } as Variants,

  // Notification animations
  notification: {
    initial: { opacity: 0, x: 300, scale: 0.95 },
    animate: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: {
        duration: timing.standard,
        ease: easings.bouncy,
      },
    },
    exit: { 
      opacity: 0, 
      x: 300, 
      scale: 0.95,
      transition: {
        duration: timing.standard,
        ease: easings.sharp,
      },
    },
  } as Variants,

  // Loading spinner
  spinner: {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      },
    },
  } as Variants,
} as const;

/**
 * Performance optimization utilities
 */
export const optimizations = {
  // GPU acceleration properties
  gpuAcceleration: {
    style: {
      willChange: "transform",
      backfaceVisibility: "hidden" as const,
      perspective: 1000,
    },
  } as MotionProps,

  // Layout optimization
  layoutOptimized: {
    layout: false,
    style: {
      willChange: "transform, opacity",
    },
  } as MotionProps,

  // Reduced motion fallback
  reducedMotion: {
    transition: { duration: 0 },
  } as MotionProps,
} as const;

/**
 * Utility function to create responsive animations
 */
export const createResponsiveAnimation = (
  mobile: Variants,
  tablet: Variants,
  desktop: Variants
) => {
  const getViewportSize = () => {
    if (typeof window === 'undefined') return 'desktop';
    
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
  };

  const viewport = getViewportSize();
  
  switch (viewport) {
    case 'mobile':
      return mobile;
    case 'tablet':
      return tablet;
    default:
      return desktop;
  }
};

/**
 * Debug utilities for animation development
 */
export const debug = {
  // Log animation performance
  logPerformance: (animationName: string, startTime: number) => {
    const endTime = performance.now();
    const duration = endTime - startTime;
    console.log(`Animation "${animationName}" took ${duration.toFixed(2)}ms`);
  },

  // Visualize animation bounds
  showBounds: {
    style: {
      border: "1px dashed red",
      backgroundColor: "rgba(255, 0, 0, 0.1)",
    },
  } as MotionProps,
} as const;