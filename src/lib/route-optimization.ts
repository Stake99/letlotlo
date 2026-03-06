/**
 * Route Optimization Utilities
 * 
 * Provides utilities for route-based code splitting and preloading
 * Implements performance optimization for page navigation
 * 
 * Requirements: 14.5, 14.6
 */

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Route configuration for preloading
 */
export interface RouteConfig {
  path: string;
  preload?: string[];
  priority?: 'high' | 'medium' | 'low';
}

/**
 * Application routes configuration
 */
export const APP_ROUTES: RouteConfig[] = [
  {
    path: '/',
    preload: ['/about', '/services'],
    priority: 'high',
  },
  {
    path: '/about',
    preload: ['/services', '/contact'],
    priority: 'medium',
  },
  {
    path: '/services',
    preload: ['/projects', '/contact'],
    priority: 'medium',
  },
  {
    path: '/projects',
    preload: ['/contact'],
    priority: 'medium',
  },
  {
    path: '/contact',
    preload: [],
    priority: 'low',
  },
];

/**
 * Preload route resources
 */
export function preloadRoute(path: string): void {
  if (typeof window === 'undefined') return;

  // Preload the route using Next.js router prefetch
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = path;
  link.as = 'document';
  document.head.appendChild(link);
}

/**
 * Preload critical resources for a route
 */
export function preloadCriticalResources(resources: string[]): void {
  if (typeof window === 'undefined') return;

  resources.forEach((resource) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    
    // Determine resource type
    if (resource.endsWith('.js')) {
      link.as = 'script';
    } else if (resource.endsWith('.css')) {
      link.as = 'style';
    } else if (resource.match(/\.(jpg|jpeg|png|webp|avif|gif)$/)) {
      link.as = 'image';
    } else if (resource.match(/\.(woff|woff2|ttf|otf)$/)) {
      link.as = 'font';
      link.crossOrigin = 'anonymous';
    }
    
    link.href = resource;
    document.head.appendChild(link);
  });
}

/**
 * Hook for route-based preloading
 */
export function useRoutePreload() {
  const pathname = usePathname();

  useEffect(() => {
    const currentRoute = APP_ROUTES.find((route) => route.path === pathname);
    
    if (currentRoute?.preload) {
      // Preload related routes
      currentRoute.preload.forEach((path) => {
        preloadRoute(path);
      });
    }
  }, [pathname]);
}

/**
 * Get route priority
 */
export function getRoutePriority(path: string): 'high' | 'medium' | 'low' {
  const route = APP_ROUTES.find((r) => r.path === path);
  return route?.priority || 'medium';
}

/**
 * Prefetch routes on hover
 */
export function usePrefetchOnHover() {
  useEffect(() => {
    const handleMouseEnter = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a[href^="/"]');
      
      if (link) {
        const href = link.getAttribute('href');
        if (href) {
          preloadRoute(href);
        }
      }
    };

    document.addEventListener('mouseenter', handleMouseEnter, true);
    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter, true);
    };
  }, []);
}

/**
 * Dynamic import with retry logic
 */
export async function dynamicImportWithRetry<T>(
  importFn: () => Promise<T>,
  retries: number = 3,
  delay: number = 1000
): Promise<T> {
  try {
    return await importFn();
  } catch (error) {
    if (retries > 0) {
      await new Promise((resolve) => setTimeout(resolve, delay));
      return dynamicImportWithRetry(importFn, retries - 1, delay);
    }
    throw error;
  }
}

/**
 * Code splitting configuration
 */
export interface CodeSplitConfig {
  /** Chunk name for the split code */
  chunkName?: string;
  /** Loading component */
  loading?: React.ComponentType<any>;
  /** Error component */
  error?: React.ComponentType<{ error: Error; retry: () => void }>;
  /** Retry attempts */
  retries?: number;
}

/**
 * Create a code-split component with loading and error states
 */
export function createCodeSplitComponent<T extends React.ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  config: CodeSplitConfig = {}
): React.ComponentType<React.ComponentProps<T>> {
  const { retries = 3 } = config;

  return function CodeSplitComponent(props: React.ComponentProps<T>) {
    const [Component, setComponent] = React.useState<T | null>(null);
    const [error, setError] = React.useState<Error | null>(null);
    const [isLoading, setIsLoading] = React.useState(true);

    const loadComponent = React.useCallback(async () => {
      setIsLoading(true);
      setError(null);

      try {
        const module = await dynamicImportWithRetry(importFn, retries);
        setComponent(() => module.default);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    }, []);

    React.useEffect(() => {
      loadComponent();
    }, [loadComponent]);

    if (error && config.error) {
      const ErrorComponent = config.error;
      return React.createElement(ErrorComponent, { error, retry: loadComponent });
    }

    if (isLoading && config.loading) {
      const LoadingComponent = config.loading;
      return React.createElement(LoadingComponent);
    }

    if (Component) {
      return React.createElement(Component, props);
    }

    return null;
  };
}

/**
 * Performance metrics tracking
 */
export interface PerformanceMetrics {
  /** Time to First Byte */
  ttfb: number;
  /** First Contentful Paint */
  fcp: number;
  /** Largest Contentful Paint */
  lcp: number;
  /** First Input Delay */
  fid: number;
  /** Cumulative Layout Shift */
  cls: number;
}

/**
 * Track Core Web Vitals
 */
export function trackWebVitals(callback: (metrics: Partial<PerformanceMetrics>) => void): void {
  if (typeof window === 'undefined') return;

  // Track TTFB
  const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  if (navigationEntry) {
    callback({
      ttfb: navigationEntry.responseStart - navigationEntry.requestStart,
    });
  }

  // Track FCP, LCP, FID, CLS using PerformanceObserver
  if ('PerformanceObserver' in window) {
    // FCP
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find((entry) => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          callback({ fcp: fcpEntry.startTime });
          fcpObserver.disconnect();
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
    } catch (e) {
      // FCP not supported
    }

    // LCP
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        callback({ lcp: lastEntry.renderTime || lastEntry.loadTime });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      // LCP not supported
    }

    // FID
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          callback({ fid: entry.processingStart - entry.startTime });
        });
        fidObserver.disconnect();
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      // FID not supported
    }

    // CLS
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            callback({ cls: clsValue });
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      // CLS not supported
    }
  }
}

/**
 * Hook for tracking page performance
 */
export function usePagePerformance(
  onMetrics?: (metrics: Partial<PerformanceMetrics>) => void
) {
  useEffect(() => {
    if (onMetrics) {
      trackWebVitals(onMetrics);
    }
  }, [onMetrics]);
}

// Add React import for createCodeSplitComponent
import React from 'react';
