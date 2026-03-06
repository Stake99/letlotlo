"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  calculateParallaxOffset,
  calculateLayeredParallax,
  getElementViewportPosition,
  isElementInViewport,
  createParallaxObserver,
  getParallaxConfig,
} from "@/lib/parallax";
import type { ParallaxSectionProps } from "@/types";

/**
 * Extended props for ParallaxSection with multiple layers and performance options
 */
interface ExtendedParallaxSectionProps extends ParallaxSectionProps {
  /** Array of background layers with individual speed settings */
  layers?: Array<{
    speed: number;
    direction?: "vertical" | "horizontal";
    component: React.ComponentType<{ style?: React.CSSProperties }>;
    className?: string;
  }>;
  /** Performance optimization settings */
  performance?: {
    /** Disable parallax on low-performance devices */
    respectPerformance?: boolean;
    /** Use transform3d for GPU acceleration */
    useGPU?: boolean;
    /** Throttle scroll events (ms) */
    throttle?: number;
  };
  /** Intersection observer settings */
  observer?: {
    /** Root margin for intersection observer */
    rootMargin?: string;
    /** Threshold for triggering parallax */
    threshold?: number | number[];
  };
  /** Enable/disable parallax based on reduced motion preference */
  respectReducedMotion?: boolean;
  /** Custom scroll container (defaults to window) */
  scrollContainer?: React.RefObject<HTMLElement>;
}

/**
 * ParallaxSection Component
 * 
 * A high-performance parallax scrolling component that supports:
 * - Configurable parallax speed system
 * - Multiple background layers with individual speeds
 * - Intersection Observer for performance optimization
 * - Smooth scrolling calculations with GPU acceleration
 * - Accessibility support (reduced motion)
 * - Performance-aware rendering
 * 
 * Requirements: 5.1, 5.2, 5.3, 5.4, 16.6
 */
export const ParallaxSection: React.FC<ExtendedParallaxSectionProps> = ({
  children,
  speed = 0.5,
  className,
  backgroundElements = [],
  layers = [],
  performance = {
    respectPerformance: true,
    useGPU: true,
    throttle: 16,
  },
  observer = {
    rootMargin: "0px 0px -10% 0px",
    threshold: [0, 0.1, 0.5, 1],
  },
  respectReducedMotion = true,
  scrollContainer,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  
  // Get performance configuration
  const { reducedMotion, performanceMode } = getParallaxConfig();
  
  // Determine if parallax should be active
  const parallaxActive = shouldAnimate && 
    (!respectReducedMotion || !reducedMotion) &&
    (!performance.respectPerformance || performanceMode !== "low");

  // Framer Motion scroll hooks for smooth parallax
  const { scrollY } = useScroll({
    container: scrollContainer,
  });

  // Create smooth spring animations for better performance
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothScrollY = useSpring(scrollY, springConfig);

  // Transform scroll position to parallax offset for main content
  const yTransform = useTransform(
    smoothScrollY,
    (value) => parallaxActive ? -value * speed : 0
  );

  // Calculate layer transforms
  const layerTransforms = layers.map((layer) => ({
    x: useTransform(
      smoothScrollY,
      (value) => {
        if (!parallaxActive) return 0;
        const offset = calculateParallaxOffset(value, layer.speed, layer.direction);
        return offset.x;
      }
    ),
    y: useTransform(
      smoothScrollY,
      (value) => {
        if (!parallaxActive) return 0;
        const offset = calculateParallaxOffset(value, layer.speed, layer.direction);
        return offset.y;
      }
    ),
  }));

  // Intersection Observer for performance optimization
  useEffect(() => {
    if (!sectionRef.current) return;

    const observerInstance = createParallaxObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      observer
    );

    observerInstance.observe(sectionRef.current);

    return () => {
      observerInstance.disconnect();
    };
  }, [observer]);

  // Performance monitoring and adaptive quality
  useEffect(() => {
    if (!performance.respectPerformance || typeof window === "undefined") return;

    let frameCount = 0;
    let lastTime = window.performance.now();
    let animationId: number;

    const measurePerformance = () => {
      frameCount++;
      const currentTime = window.performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        
        // Disable parallax if FPS drops below 30
        if (fps < 30 && shouldAnimate) {
          setShouldAnimate(false);
          console.warn("ParallaxSection: Disabled due to low FPS");
        } else if (fps > 50 && !shouldAnimate) {
          setShouldAnimate(true);
        }
        
        frameCount = 0;
        lastTime = currentTime;
      }
      
      if (isInView) {
        animationId = requestAnimationFrame(measurePerformance);
      }
    };

    if (isInView) {
      animationId = requestAnimationFrame(measurePerformance);
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isInView, shouldAnimate, performance.respectPerformance]);

  // GPU acceleration styles
  const gpuStyles = performance.useGPU ? {
    willChange: "transform",
    backfaceVisibility: "hidden" as const,
    perspective: 1000,
  } : {};

  return (
    <div
      ref={sectionRef}
      className={cn(
        "relative overflow-hidden",
        className
      )}
      style={gpuStyles}
    >
      {/* Background Layers */}
      {layers.map((layer, index) => {
        const LayerComponent = layer.component;
        const transform = layerTransforms[index];
        
        return (
          <motion.div
            key={`layer-${index}`}
            className={cn(
              "absolute inset-0 pointer-events-none",
              layer.className
            )}
            style={{
              ...gpuStyles,
              x: transform.x,
              y: transform.y,
            }}
          >
            <LayerComponent />
          </motion.div>
        );
      })}

      {/* Legacy Background Elements Support */}
      {backgroundElements.map((BackgroundElement, index) => (
        <motion.div
          key={`bg-element-${index}`}
          className="absolute inset-0 pointer-events-none"
          style={{
            ...gpuStyles,
            y: useTransform(
              smoothScrollY,
              (value) => parallaxActive ? -value * (speed * (index + 1) * 0.3) : 0
            ),
          }}
        >
          <BackgroundElement />
        </motion.div>
      ))}

      {/* Main Content */}
      <motion.div
        className="relative z-10"
        style={{
          ...gpuStyles,
          y: yTransform,
        }}
      >
        {children}
      </motion.div>

      {/* Performance Debug Info (Development Only) */}
      {process.env.NODE_ENV === "development" && (
        <div className="fixed top-4 right-4 bg-black/80 text-white p-2 rounded text-xs z-50">
          <div>Parallax: {parallaxActive ? "Active" : "Disabled"}</div>
          <div>In View: {isInView ? "Yes" : "No"}</div>
          <div>Reduced Motion: {reducedMotion ? "Yes" : "No"}</div>
          <div>Performance: {performanceMode}</div>
        </div>
      )}
    </div>
  );
};

/**
 * Pre-configured parallax section variants for common use cases
 */

// Slow parallax for hero sections
export const HeroParallaxSection: React.FC<Omit<ExtendedParallaxSectionProps, "speed">> = (props) => (
  <ParallaxSection {...props} speed={0.3} />
);

// Medium parallax for content sections
export const ContentParallaxSection: React.FC<Omit<ExtendedParallaxSectionProps, "speed">> = (props) => (
  <ParallaxSection {...props} speed={0.5} />
);

// Fast parallax for background elements
export const BackgroundParallaxSection: React.FC<Omit<ExtendedParallaxSectionProps, "speed">> = (props) => (
  <ParallaxSection {...props} speed={0.8} />
);

/**
 * Utility hook for creating parallax layers
 */
export const useParallaxLayers = (
  layerConfigs: Array<{
    speed: number;
    direction?: "vertical" | "horizontal";
    className?: string;
  }>
) => {
  return layerConfigs.map((config, index) => ({
    ...config,
    component: ({ style }: { style?: React.CSSProperties }) => (
      <div 
        className={config.className}
        style={style}
        data-parallax-layer={index}
      />
    ),
  }));
};

export default ParallaxSection;