/**
 * Parallax utility functions for scroll-based animations
 */

/**
 * Calculate parallax offset based on scroll position
 */
export function calculateParallaxOffset(
  scrollY: number,
  speed: number = 0.5,
  direction: "vertical" | "horizontal" = "vertical"
): { x: number; y: number } {
  const offset = scrollY * speed;
  
  return direction === "vertical" 
    ? { x: 0, y: -offset }
    : { x: -offset, y: 0 };
}

/**
 * Calculate multiple layer parallax offsets
 */
export function calculateLayeredParallax(
  scrollY: number,
  layers: { speed: number; direction?: "vertical" | "horizontal" }[]
): Array<{ x: number; y: number }> {
  return layers.map(layer => 
    calculateParallaxOffset(scrollY, layer.speed, layer.direction)
  );
}

/**
 * Get element's position relative to viewport
 */
export function getElementViewportPosition(element: HTMLElement): {
  top: number;
  bottom: number;
  center: number;
  progress: number;
} {
  const rect = element.getBoundingClientRect();
  const windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
  
  const top = rect.top;
  const bottom = rect.bottom;
  const center = top + rect.height / 2;
  
  // Calculate progress (0 when element enters viewport, 1 when it leaves)
  const progress = windowHeight > 0 ? Math.max(0, Math.min(1, (windowHeight - top) / (windowHeight + rect.height))) : 0;
  
  return { top, bottom, center, progress };
}

/**
 * Check if element is in viewport
 */
export function isElementInViewport(
  element: HTMLElement,
  threshold: number = 0
): boolean {
  if (typeof window === "undefined") return false;
  
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  
  return (
    rect.top < windowHeight - threshold &&
    rect.bottom > threshold &&
    rect.left < windowWidth - threshold &&
    rect.right > threshold
  );
}

/**
 * Calculate scroll-based rotation
 */
export function calculateScrollRotation(
  scrollY: number,
  speed: number = 0.1,
  axis: "x" | "y" | "z" = "z"
): { x: number; y: number; z: number } {
  const rotation = scrollY * speed;
  
  switch (axis) {
    case "x":
      return { x: rotation, y: 0, z: 0 };
    case "y":
      return { x: 0, y: rotation, z: 0 };
    case "z":
    default:
      return { x: 0, y: 0, z: rotation };
  }
}

/**
 * Calculate scroll-based scale
 */
export function calculateScrollScale(
  scrollY: number,
  elementTop: number,
  elementHeight: number,
  minScale: number = 0.8,
  maxScale: number = 1.2
): number {
  const windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
  
  if (windowHeight === 0) return 1;
  
  const elementCenter = elementTop + elementHeight / 2;
  const viewportCenter = windowHeight / 2;
  
  // Distance from viewport center (-1 to 1)
  const distance = (elementCenter - viewportCenter) / (windowHeight / 2);
  const normalizedDistance = Math.max(-1, Math.min(1, distance));
  
  // Scale based on distance from center
  const scale = minScale + (maxScale - minScale) * (1 - Math.abs(normalizedDistance));
  
  return Math.max(minScale, Math.min(maxScale, scale));
}

/**
 * Smooth scroll to element
 */
export function smoothScrollTo(
  element: HTMLElement | string,
  offset: number = 0,
  duration: number = 1000
): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      resolve();
      return;
    }
    
    const targetElement = typeof element === "string" 
      ? document.querySelector(element) as HTMLElement
      : element;
    
    if (!targetElement) {
      resolve();
      return;
    }
    
    const targetPosition = targetElement.offsetTop + offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;
    
    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Easing function (ease-in-out)
      const ease = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      
      window.scrollTo(0, startPosition + distance * ease);
      
      if (progress < 1) {
        requestAnimationFrame(animation);
      } else {
        resolve();
      }
    }
    
    requestAnimationFrame(animation);
  });
}

/**
 * Throttled scroll handler
 */
export function createScrollHandler(
  callback: (scrollY: number) => void,
  throttleMs: number = 16
): () => void {
  let ticking = false;
  
  return () => {
    if (typeof window === "undefined") return;
    
    if (!ticking) {
      requestAnimationFrame(() => {
        callback(window.pageYOffset);
        ticking = false;
      });
      ticking = true;
    }
  };
}

/**
 * Intersection Observer for parallax elements
 */
export function createParallaxObserver(
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
): IntersectionObserver {
  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: "0px 0px -10% 0px",
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    ...options,
  };
  
  return new IntersectionObserver(callback, defaultOptions);
}

/**
 * Calculate mouse parallax effect
 */
export function calculateMouseParallax(
  mouseX: number,
  mouseY: number,
  elementRect: DOMRect,
  intensity: number = 0.1
): { x: number; y: number } {
  const centerX = elementRect.left + elementRect.width / 2;
  const centerY = elementRect.top + elementRect.height / 2;
  
  const deltaX = (mouseX - centerX) / elementRect.width;
  const deltaY = (mouseY - centerY) / elementRect.height;
  
  return {
    x: deltaX * intensity * 100,
    y: deltaY * intensity * 100,
  };
}

/**
 * Debounced resize handler for parallax recalculation
 */
export function createResizeHandler(
  callback: () => void,
  debounceMs: number = 250
): () => void {
  let timeoutId: NodeJS.Timeout;
  
  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(callback, debounceMs);
  };
}

/**
 * Performance-aware parallax configuration
 */
export function getParallaxConfig(): {
  reducedMotion: boolean;
  performanceMode: "low" | "medium" | "high";
  maxElements: number;
} {
  // Default values for SSR
  if (typeof window === "undefined") {
    return {
      reducedMotion: false,
      performanceMode: "medium",
      maxElements: 15,
    };
  }
  
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  
  // Simple performance detection
  const performanceMode = (() => {
    const memory = (navigator as any).deviceMemory;
    const cores = navigator.hardwareConcurrency;
    
    if (memory && memory < 4 || cores && cores < 4) return "low";
    if (memory && memory >= 8 && cores && cores >= 8) return "high";
    return "medium";
  })();
  
  const maxElements = {
    low: 5,
    medium: 15,
    high: 30,
  }[performanceMode];
  
  return { reducedMotion, performanceMode, maxElements };
}