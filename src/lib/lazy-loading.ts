/**
 * Lazy Loading Utilities
 * 
 * Provides utilities for lazy loading 3D models and heavy components
 * Uses Intersection Observer for viewport detection
 * 
 * Requirements: 14.1, 14.3
 */

import { useEffect, useState, useRef, RefObject } from 'react';

/**
 * Intersection Observer options
 */
export interface LazyLoadOptions {
  /** Root element for intersection observer */
  root?: Element | null;
  /** Margin around root element */
  rootMargin?: string;
  /** Threshold for triggering intersection */
  threshold?: number | number[];
  /** Trigger only once */
  triggerOnce?: boolean;
}

/**
 * Default lazy load options
 */
const DEFAULT_OPTIONS: LazyLoadOptions = {
  root: null,
  rootMargin: '50px',
  threshold: 0.01,
  triggerOnce: true,
};

/**
 * Hook for lazy loading based on viewport visibility
 */
export function useLazyLoad(
  options: LazyLoadOptions = {}
): [RefObject<HTMLDivElement | null>, boolean] {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  const mergedOptions = { ...DEFAULT_OPTIONS, ...options };

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Skip if already triggered and triggerOnce is true
    if (hasTriggered && mergedOptions.triggerOnce) return;

    // Check for Intersection Observer support
    if (!('IntersectionObserver' in window)) {
      // Fallback: load immediately if not supported
      setIsVisible(true);
      setHasTriggered(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setHasTriggered(true);

            if (mergedOptions.triggerOnce) {
              observer.unobserve(element);
            }
          } else if (!mergedOptions.triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      {
        root: mergedOptions.root,
        rootMargin: mergedOptions.rootMargin,
        threshold: mergedOptions.threshold,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [hasTriggered, mergedOptions.root, mergedOptions.rootMargin, mergedOptions.threshold, mergedOptions.triggerOnce]);

  return [elementRef, isVisible];
}

/**
 * Hook for preloading resources when near viewport
 */
export function usePreload(
  callback: () => void,
  options: LazyLoadOptions = {}
): RefObject<HTMLDivElement | null> {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [hasPreloaded, setHasPreloaded] = useState(false);

  const mergedOptions = {
    ...DEFAULT_OPTIONS,
    rootMargin: '200px', // Preload earlier
    ...options,
  };

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasPreloaded) return;

    if (!('IntersectionObserver' in window)) {
      callback();
      setHasPreloaded(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPreloaded) {
            callback();
            setHasPreloaded(true);
            observer.unobserve(element);
          }
        });
      },
      {
        root: mergedOptions.root,
        rootMargin: mergedOptions.rootMargin,
        threshold: mergedOptions.threshold,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [callback, hasPreloaded, mergedOptions.root, mergedOptions.rootMargin, mergedOptions.threshold]);

  return elementRef;
}

/**
 * Check if element is in viewport
 */
export function isInViewport(element: Element, offset: number = 0): boolean {
  if (!element) return false;

  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  return (
    rect.top >= -offset &&
    rect.left >= -offset &&
    rect.bottom <= windowHeight + offset &&
    rect.right <= windowWidth + offset
  );
}

/**
 * Lazy load 3D models based on viewport visibility
 */
export function useLazy3DModel(
  modelLoader: () => Promise<any>,
  options: LazyLoadOptions = {}
): [RefObject<HTMLDivElement | null>, boolean, any | null, Error | null] {
  const [elementRef, isVisible] = useLazyLoad(options);
  const [model, setModel] = useState<any | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isVisible && !model && !isLoading && !error) {
      setIsLoading(true);
      modelLoader()
        .then((loadedModel) => {
          setModel(loadedModel);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    }
  }, [isVisible, model, isLoading, error, modelLoader]);

  return [elementRef, isLoading, model, error];
}

/**
 * Batch lazy loading for multiple items
 */
export function useBatchLazyLoad(
  count: number,
  options: LazyLoadOptions = {}
): [RefObject<HTMLDivElement | null>[], boolean[]] {
  const refs = useRef<RefObject<HTMLDivElement | null>[]>(
    Array.from({ length: count }, () => ({ current: null }))
  );
  const [visibilityStates, setVisibilityStates] = useState<boolean[]>(
    Array(count).fill(false)
  );

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setVisibilityStates(Array(count).fill(true));
      return;
    }

    const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
    const observers: IntersectionObserver[] = [];

    refs.current.forEach((ref, index) => {
      if (!ref.current) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibilityStates((prev) => {
                const newStates = [...prev];
                newStates[index] = true;
                return newStates;
              });

              if (mergedOptions.triggerOnce && ref.current) {
                observer.unobserve(ref.current);
              }
            }
          });
        },
        {
          root: mergedOptions.root,
          rootMargin: mergedOptions.rootMargin,
          threshold: mergedOptions.threshold,
        }
      );

      observer.observe(ref.current);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [count, options]);

  return [refs.current, visibilityStates];
}

/**
 * Priority-based lazy loading
 */
export type LoadPriority = 'high' | 'medium' | 'low';

export function usePriorityLazyLoad(
  priority: LoadPriority = 'medium'
): [RefObject<HTMLDivElement | null>, boolean] {
  const rootMargins: Record<LoadPriority, string> = {
    high: '500px',
    medium: '200px',
    low: '50px',
  };

  return useLazyLoad({
    rootMargin: rootMargins[priority],
    triggerOnce: true,
  });
}
