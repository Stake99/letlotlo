/**
 * Image Optimization Utilities
 * 
 * Provides utilities for optimized image loading with next/image
 * Implements lazy loading and responsive image sizing
 * 
 * Requirements: 2.6, 14.2, 14.3
 */

/**
 * Standard image sizes for responsive images
 */
export const IMAGE_SIZES = {
  thumbnail: { width: 150, height: 150 },
  small: { width: 320, height: 240 },
  medium: { width: 640, height: 480 },
  large: { width: 1024, height: 768 },
  xlarge: { width: 1920, height: 1080 },
  hero: { width: 2560, height: 1440 },
} as const;

/**
 * Responsive image sizes configuration for next/image
 */
export const RESPONSIVE_SIZES = {
  card: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  hero: '100vw',
  thumbnail: '(max-width: 768px) 50vw, 150px',
  gallery: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  fullWidth: '100vw',
  halfWidth: '(max-width: 768px) 100vw, 50vw',
  thirdWidth: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
} as const;

/**
 * Image quality presets
 */
export const IMAGE_QUALITY = {
  low: 50,
  medium: 75,
  high: 90,
  max: 100,
} as const;

/**
 * Image loading priorities
 */
export type ImagePriority = 'high' | 'low' | 'auto';

/**
 * Configuration for optimized image loading
 */
export interface OptimizedImageConfig {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
  quality?: number;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

/**
 * Generate optimized image configuration
 */
export function getOptimizedImageConfig(
  src: string,
  alt: string,
  options: {
    size?: keyof typeof IMAGE_SIZES;
    responsiveSizes?: keyof typeof RESPONSIVE_SIZES;
    quality?: keyof typeof IMAGE_QUALITY;
    priority?: boolean;
    placeholder?: 'blur' | 'empty';
  } = {}
): OptimizedImageConfig {
  const {
    size = 'medium',
    responsiveSizes = 'card',
    quality = 'high',
    priority = false,
    placeholder = 'empty',
  } = options;

  const dimensions = IMAGE_SIZES[size];
  const sizes = RESPONSIVE_SIZES[responsiveSizes];
  const imageQuality = IMAGE_QUALITY[quality];

  return {
    src,
    alt,
    width: dimensions.width,
    height: dimensions.height,
    sizes,
    quality: imageQuality,
    priority,
    loading: priority ? 'eager' : 'lazy',
    placeholder,
  };
}

/**
 * Check if image should be lazy loaded based on viewport position
 */
export function shouldLazyLoad(priority: boolean = false): boolean {
  return !priority;
}

/**
 * Generate blur placeholder data URL for images
 */
export function generateBlurDataURL(width: number = 10, height: number = 10): string {
  // Simple gray gradient blur placeholder
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:rgb(240,240,240);stop-opacity:1" />
          <stop offset="100%" style="stop-color:rgb(220,220,220);stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#grad)" />
    </svg>
  `;
  
  const base64 = Buffer.from(svg).toString('base64');
  return `data:image/svg+xml;base64,${base64}`;
}

/**
 * Image loader configuration for custom image sources
 */
export interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

/**
 * Custom image loader for external sources
 */
export function customImageLoader({ src, width, quality }: ImageLoaderProps): string {
  // For external URLs, return as-is
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }
  
  // For local images, use Next.js default loader
  const params = new URLSearchParams();
  params.set('url', src);
  params.set('w', width.toString());
  if (quality) {
    params.set('q', quality.toString());
  }
  
  return `/_next/image?${params.toString()}`;
}

/**
 * Preload critical images
 */
export function preloadImage(src: string, as: 'image' = 'image'): void {
  if (typeof window === 'undefined') return;
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = as;
  link.href = src;
  document.head.appendChild(link);
}

/**
 * Lazy load images using Intersection Observer
 */
export function createImageObserver(
  callback: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit = {}
): IntersectionObserver | null {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }

  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '50px',
    threshold: 0.01,
    ...options,
  };

  return new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(entry);
      }
    });
  }, defaultOptions);
}

/**
 * Get responsive image srcset
 */
export function getResponsiveSrcSet(
  src: string,
  widths: number[] = [640, 750, 828, 1080, 1200, 1920]
): string {
  return widths
    .map((width) => `${customImageLoader({ src, width })} ${width}w`)
    .join(', ');
}

/**
 * Image format detection and optimization
 */
export function getOptimalImageFormat(): 'avif' | 'webp' | 'jpeg' {
  if (typeof window === 'undefined') return 'jpeg';
  
  // Check for AVIF support
  const avifSupport = document.createElement('canvas').toDataURL('image/avif').indexOf('data:image/avif') === 0;
  if (avifSupport) return 'avif';
  
  // Check for WebP support
  const webpSupport = document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0;
  if (webpSupport) return 'webp';
  
  return 'jpeg';
}
