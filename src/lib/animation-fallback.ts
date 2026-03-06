/**
 * Animation fallback utilities for handling animation failures
 * and providing CSS-based alternatives
 */

import { errorLogger } from './error-logger';

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  return mediaQuery.matches;
}

/**
 * Check if JavaScript animations are supported
 */
export function areJSAnimationsSupported(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  try {
    // Check for requestAnimationFrame support
    if (!window.requestAnimationFrame) {
      return false;
    }

    // Check for basic animation APIs
    if (!window.performance || !window.performance.now) {
      return false;
    }

    return true;
  } catch (error) {
    errorLogger.logAnimationError(
      error instanceof Error ? error : new Error(String(error)),
      'JS Animation Support Check'
    );
    return false;
  }
}

/**
 * Detect if device is low-performance for animations
 */
export function isLowPerformanceDevice(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  try {
    // Check hardware concurrency (CPU cores)
    const cores = navigator.hardwareConcurrency || 2;
    if (cores < 4) {
      return true;
    }

    // Check device memory if available
    const memory = (navigator as any).deviceMemory;
    if (memory && memory < 4) {
      return true;
    }

    // Check connection speed if available
    const connection = (navigator as any).connection;
    if (connection) {
      const effectiveType = connection.effectiveType;
      if (effectiveType === 'slow-2g' || effectiveType === '2g') {
        return true;
      }
    }

    return false;
  } catch (error) {
    return false;
  }
}

/**
 * Animation mode based on device capabilities and user preferences
 */
export type AnimationMode = 'full' | 'reduced' | 'css-only' | 'none';

/**
 * Determine the appropriate animation mode
 */
export function getAnimationMode(): AnimationMode {
  // Check user preference first
  if (prefersReducedMotion()) {
    return 'none';
  }

  // Check if JS animations are supported
  if (!areJSAnimationsSupported()) {
    return 'css-only';
  }

  // Check device performance
  if (isLowPerformanceDevice()) {
    return 'reduced';
  }

  return 'full';
}

/**
 * Store animation mode preference
 */
export function cacheAnimationMode(): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    const mode = getAnimationMode();
    sessionStorage.setItem('animation-mode', mode);
  } catch (error) {
    // Fail silently if storage is not available
  }
}

/**
 * Get cached animation mode
 */
export function getCachedAnimationMode(): AnimationMode | null {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const cached = sessionStorage.getItem('animation-mode');
    if (cached && ['full', 'reduced', 'css-only', 'none'].includes(cached)) {
      return cached as AnimationMode;
    }
  } catch (error) {
    // Fail silently if storage is not available
  }

  return null;
}

/**
 * Get animation mode (cached or fresh)
 */
export function getOptimalAnimationMode(): AnimationMode {
  const cached = getCachedAnimationMode();
  if (cached) {
    return cached;
  }

  const mode = getAnimationMode();
  cacheAnimationMode();
  return mode;
}

/**
 * CSS fallback classes for common animations
 */
export const cssFallbackClasses = {
  fadeIn: 'animate-fade-in',
  fadeOut: 'animate-fade-out',
  slideUp: 'animate-slide-up',
  slideDown: 'animate-slide-down',
  slideLeft: 'animate-slide-left',
  slideRight: 'animate-slide-right',
  scaleUp: 'animate-scale-up',
  scaleDown: 'animate-scale-down',
  bounce: 'animate-bounce',
  pulse: 'animate-pulse',
  spin: 'animate-spin',
} as const;

/**
 * Get CSS class for animation fallback
 */
export function getCSSFallbackClass(animationType: keyof typeof cssFallbackClasses): string {
  return cssFallbackClasses[animationType];
}

/**
 * Framer Motion variants with fallback support
 */
export function createSafeVariants(
  variants: Record<string, any>,
  mode: AnimationMode = getOptimalAnimationMode()
) {
  if (mode === 'none') {
    // Return variants with no animation
    return Object.keys(variants).reduce((acc, key) => {
      acc[key] = { transition: { duration: 0 } };
      return acc;
    }, {} as Record<string, any>);
  }

  if (mode === 'reduced') {
    // Return variants with reduced animation
    return Object.keys(variants).reduce((acc, key) => {
      const variant = variants[key];
      acc[key] = {
        ...variant,
        transition: {
          ...variant.transition,
          duration: (variant.transition?.duration || 0.3) * 0.5,
        },
      };
      return acc;
    }, {} as Record<string, any>);
  }

  // Return full variants for 'full' and 'css-only' modes
  return variants;
}

/**
 * Safe animation props for Framer Motion
 */
export function getSafeAnimationProps(
  props: Record<string, any>,
  mode: AnimationMode = getOptimalAnimationMode()
) {
  if (mode === 'none') {
    return {
      ...props,
      initial: false,
      animate: false,
      exit: false,
      transition: { duration: 0 },
    };
  }

  if (mode === 'reduced') {
    return {
      ...props,
      transition: {
        ...props.transition,
        duration: (props.transition?.duration || 0.3) * 0.5,
      },
    };
  }

  return props;
}

/**
 * Monitor animation performance
 */
export class AnimationPerformanceMonitor {
  private frameCount = 0;
  private lastTime = performance.now();
  private fps = 60;
  private lowFpsCount = 0;
  private readonly lowFpsThreshold = 30;
  private readonly maxLowFpsCount = 10;
  private callback?: (shouldDisable: boolean) => void;

  start(callback?: (shouldDisable: boolean) => void): void {
    this.callback = callback;
    this.monitor();
  }

  private monitor = (): void => {
    this.frameCount++;
    const currentTime = performance.now();

    if (currentTime - this.lastTime >= 1000) {
      this.fps = Math.round((this.frameCount * 1000) / (currentTime - this.lastTime));
      this.frameCount = 0;
      this.lastTime = currentTime;

      // Check if FPS is consistently low
      if (this.fps < this.lowFpsThreshold) {
        this.lowFpsCount++;
        
        if (this.lowFpsCount >= this.maxLowFpsCount) {
          // Disable animations due to poor performance
          if (this.callback) {
            this.callback(true);
          }
          errorLogger.logAnimationError(
            new Error(`Low FPS detected: ${this.fps}fps`),
            'Performance Monitoring'
          );
          return; // Stop monitoring
        }
      } else {
        this.lowFpsCount = 0;
      }
    }

    requestAnimationFrame(this.monitor);
  };

  getFPS(): number {
    return this.fps;
  }
}

/**
 * Global animation performance monitor instance
 */
export const animationMonitor = new AnimationPerformanceMonitor();

/**
 * Initialize animation monitoring
 */
export function initializeAnimationMonitoring(
  onLowPerformance?: (shouldDisable: boolean) => void
): void {
  if (typeof window === 'undefined') {
    return;
  }

  const mode = getOptimalAnimationMode();
  
  // Only monitor if using full animations
  if (mode === 'full') {
    animationMonitor.start(onLowPerformance);
  }
}
