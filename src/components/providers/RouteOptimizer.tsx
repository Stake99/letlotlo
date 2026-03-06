'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useRoutePreload, usePrefetchOnHover, trackWebVitals } from '@/lib/route-optimization';

/**
 * RouteOptimizer Component
 * 
 * Implements route-based optimizations including:
 * - Automatic route preloading
 * - Hover-based prefetching
 * - Performance metrics tracking
 * 
 * Requirements: 14.5, 14.6
 */

interface RouteOptimizerProps {
  /** Enable route preloading */
  enablePreload?: boolean;
  /** Enable hover prefetching */
  enableHoverPrefetch?: boolean;
  /** Enable performance tracking */
  enablePerformanceTracking?: boolean;
  /** Callback for performance metrics */
  onPerformanceMetrics?: (metrics: any) => void;
}

export default function RouteOptimizer({
  enablePreload = true,
  enableHoverPrefetch = true,
  enablePerformanceTracking = true,
  onPerformanceMetrics,
}: RouteOptimizerProps) {
  const pathname = usePathname();

  // Route preloading
  useRoutePreload();

  // Hover prefetching
  if (enableHoverPrefetch) {
    usePrefetchOnHover();
  }

  // Performance tracking
  useEffect(() => {
    if (enablePerformanceTracking) {
      trackWebVitals((metrics) => {
        // Log metrics in development
        if (process.env.NODE_ENV === 'development') {
          console.log('Performance Metrics:', metrics);
        }

        // Call custom callback
        if (onPerformanceMetrics) {
          onPerformanceMetrics(metrics);
        }

        // Send to analytics (if configured)
        if (typeof window !== 'undefined' && (window as any).gtag) {
          Object.entries(metrics).forEach(([key, value]) => {
            (window as any).gtag('event', key, {
              value: Math.round(value),
              metric_id: pathname,
            });
          });
        }
      });
    }
  }, [pathname, enablePerformanceTracking, onPerformanceMetrics]);

  // Preload critical fonts
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Preload fonts (add your font URLs here)
    const fonts: string[] = [
      // Example: '/fonts/inter-var.woff2'
    ];

    fonts.forEach((fontUrl) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = 'font/woff2';
      link.href = fontUrl;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, []);

  return null;
}
