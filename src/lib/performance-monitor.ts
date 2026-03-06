/**
 * Performance Monitoring Utilities
 * 
 * Provides utilities for monitoring and optimizing performance
 * Tracks Core Web Vitals and provides optimization recommendations
 * 
 * Requirements: 14.4, 14.6
 */

/**
 * Performance thresholds based on Core Web Vitals
 */
export const PERFORMANCE_THRESHOLDS = {
  // Largest Contentful Paint (LCP) - should be < 2.5s
  lcp: {
    good: 2500,
    needsImprovement: 4000,
  },
  // First Input Delay (FID) - should be < 100ms
  fid: {
    good: 100,
    needsImprovement: 300,
  },
  // Cumulative Layout Shift (CLS) - should be < 0.1
  cls: {
    good: 0.1,
    needsImprovement: 0.25,
  },
  // First Contentful Paint (FCP) - should be < 1.8s
  fcp: {
    good: 1800,
    needsImprovement: 3000,
  },
  // Time to First Byte (TTFB) - should be < 800ms
  ttfb: {
    good: 800,
    needsImprovement: 1800,
  },
  // Frame rate - should maintain 60fps
  fps: {
    good: 60,
    needsImprovement: 30,
  },
} as const;

/**
 * Performance metric type
 */
export type PerformanceMetricName = keyof typeof PERFORMANCE_THRESHOLDS;

/**
 * Performance rating
 */
export type PerformanceRating = 'good' | 'needs-improvement' | 'poor';

/**
 * Get performance rating for a metric
 */
export function getPerformanceRating(
  metric: PerformanceMetricName,
  value: number
): PerformanceRating {
  const thresholds = PERFORMANCE_THRESHOLDS[metric];
  
  if (value <= thresholds.good) {
    return 'good';
  } else if (value <= thresholds.needsImprovement) {
    return 'needs-improvement';
  } else {
    return 'poor';
  }
}

/**
 * Performance report
 */
export interface PerformanceReport {
  metric: PerformanceMetricName;
  value: number;
  rating: PerformanceRating;
  timestamp: number;
}

/**
 * Performance monitor class
 */
export class PerformanceMonitor {
  private reports: PerformanceReport[] = [];
  private observers: PerformanceObserver[] = [];

  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeObservers();
    }
  }

  /**
   * Initialize performance observers
   */
  private initializeObservers(): void {
    // LCP Observer
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        const value = lastEntry.renderTime || lastEntry.loadTime;
        this.addReport('lcp', value);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);
    } catch (e) {
      console.warn('LCP observer not supported');
    }

    // FID Observer
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          const value = entry.processingStart - entry.startTime;
          this.addReport('fid', value);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);
    } catch (e) {
      console.warn('FID observer not supported');
    }

    // CLS Observer
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            this.addReport('cls', clsValue);
          }
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(clsObserver);
    } catch (e) {
      console.warn('CLS observer not supported');
    }

    // FCP Observer
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find((entry) => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          this.addReport('fcp', fcpEntry.startTime);
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
      this.observers.push(fcpObserver);
    } catch (e) {
      console.warn('FCP observer not supported');
    }

    // TTFB
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      this.addReport('ttfb', ttfb);
    }
  }

  /**
   * Add performance report
   */
  private addReport(metric: PerformanceMetricName, value: number): void {
    const rating = getPerformanceRating(metric, value);
    const report: PerformanceReport = {
      metric,
      value,
      rating,
      timestamp: Date.now(),
    };

    this.reports.push(report);

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Performance] ${metric.toUpperCase()}: ${value.toFixed(2)} (${rating})`);
    }

    // Emit custom event
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('performance-metric', { detail: report })
      );
    }
  }

  /**
   * Get all reports
   */
  getReports(): PerformanceReport[] {
    return [...this.reports];
  }

  /**
   * Get reports by metric
   */
  getReportsByMetric(metric: PerformanceMetricName): PerformanceReport[] {
    return this.reports.filter((report) => report.metric === metric);
  }

  /**
   * Get latest report for metric
   */
  getLatestReport(metric: PerformanceMetricName): PerformanceReport | null {
    const reports = this.getReportsByMetric(metric);
    return reports.length > 0 ? reports[reports.length - 1] : null;
  }

  /**
   * Get performance summary
   */
  getSummary(): Record<PerformanceMetricName, PerformanceReport | null> {
    const metrics: PerformanceMetricName[] = ['lcp', 'fid', 'cls', 'fcp', 'ttfb', 'fps'];
    const summary: any = {};

    metrics.forEach((metric) => {
      summary[metric] = this.getLatestReport(metric);
    });

    return summary;
  }

  /**
   * Check if performance is good
   */
  isPerformanceGood(): boolean {
    const summary = this.getSummary();
    return Object.values(summary).every(
      (report) => !report || report.rating === 'good'
    );
  }

  /**
   * Get performance recommendations
   */
  getRecommendations(): string[] {
    const recommendations: string[] = [];
    const summary = this.getSummary();

    Object.entries(summary).forEach(([metric, report]) => {
      if (!report) return;

      if (report.rating === 'poor' || report.rating === 'needs-improvement') {
        switch (metric as PerformanceMetricName) {
          case 'lcp':
            recommendations.push(
              'Optimize Largest Contentful Paint: Consider lazy loading images, optimizing server response time, or using a CDN.'
            );
            break;
          case 'fid':
            recommendations.push(
              'Improve First Input Delay: Reduce JavaScript execution time, break up long tasks, or use web workers.'
            );
            break;
          case 'cls':
            recommendations.push(
              'Reduce Cumulative Layout Shift: Add size attributes to images and videos, avoid inserting content above existing content.'
            );
            break;
          case 'fcp':
            recommendations.push(
              'Optimize First Contentful Paint: Eliminate render-blocking resources, minify CSS, or inline critical CSS.'
            );
            break;
          case 'ttfb':
            recommendations.push(
              'Improve Time to First Byte: Optimize server response time, use a CDN, or implement caching.'
            );
            break;
          case 'fps':
            recommendations.push(
              'Improve frame rate: Optimize animations, reduce DOM complexity, or disable expensive visual effects.'
            );
            break;
        }
      }
    });

    return recommendations;
  }

  /**
   * Cleanup observers
   */
  disconnect(): void {
    this.observers.forEach((observer) => observer.disconnect());
    this.observers = [];
  }
}

/**
 * Global performance monitor instance
 */
let globalMonitor: PerformanceMonitor | null = null;

/**
 * Get or create global performance monitor
 */
export function getPerformanceMonitor(): PerformanceMonitor {
  if (!globalMonitor && typeof window !== 'undefined') {
    globalMonitor = new PerformanceMonitor();
  }
  return globalMonitor!;
}

/**
 * Frame rate monitor
 */
export class FrameRateMonitor {
  private frameCount = 0;
  private lastTime = performance.now();
  private fps = 60;
  private rafId: number | null = null;
  private callback?: (fps: number) => void;

  constructor(callback?: (fps: number) => void) {
    this.callback = callback;
    this.start();
  }

  private measure = (): void => {
    this.frameCount++;
    const currentTime = performance.now();

    if (currentTime - this.lastTime >= 1000) {
      this.fps = Math.round((this.frameCount * 1000) / (currentTime - this.lastTime));
      
      if (this.callback) {
        this.callback(this.fps);
      }

      // Add to performance monitor
      const monitor = getPerformanceMonitor();
      if (monitor) {
        (monitor as any).addReport('fps', this.fps);
      }

      this.frameCount = 0;
      this.lastTime = currentTime;
    }

    this.rafId = requestAnimationFrame(this.measure);
  };

  start(): void {
    if (!this.rafId) {
      this.rafId = requestAnimationFrame(this.measure);
    }
  }

  stop(): void {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  getFPS(): number {
    return this.fps;
  }
}

/**
 * Hook for monitoring frame rate
 */
export function useFrameRateMonitor(callback?: (fps: number) => void): number {
  const [fps, setFps] = React.useState(60);
  const monitorRef = React.useRef<FrameRateMonitor | null>(null);

  React.useEffect(() => {
    monitorRef.current = new FrameRateMonitor((newFps) => {
      setFps(newFps);
      if (callback) {
        callback(newFps);
      }
    });

    return () => {
      monitorRef.current?.stop();
    };
  }, [callback]);

  return fps;
}

// Add React import
import React from 'react';
