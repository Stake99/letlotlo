'use client';

import Image, { ImageProps } from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getOptimizedImageConfig, RESPONSIVE_SIZES, IMAGE_QUALITY } from '@/lib/image-utils';

/**
 * OptimizedImage Component
 * 
 * Wrapper around next/image with automatic optimization and lazy loading
 * Implements loading states and error handling
 * 
 * Requirements: 2.6, 14.2, 14.3
 */

export interface OptimizedImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string;
  alt: string;
  /** Preset size configuration */
  preset?: 'card' | 'hero' | 'thumbnail' | 'gallery';
  /** Show loading animation */
  showLoading?: boolean;
  /** Custom loading component */
  loadingComponent?: React.ReactNode;
  /** Error fallback component */
  errorComponent?: React.ReactNode;
  /** Fade in animation on load */
  fadeIn?: boolean;
  /** Animation duration in seconds */
  animationDuration?: number;
}

/**
 * Default loading placeholder
 */
function LoadingPlaceholder({ className }: { className?: string }) {
  return (
    <div className={`bg-gray-200 animate-pulse flex items-center justify-center ${className || ''}`}>
      <div className="w-12 h-12 rounded-full bg-gray-300 animate-pulse" />
    </div>
  );
}

/**
 * Default error fallback
 */
function ErrorFallback({ alt, className }: { alt: string; className?: string }) {
  return (
    <div className={`bg-gray-100 flex items-center justify-center ${className || ''}`}>
      <div className="text-center p-4">
        <svg
          className="w-12 h-12 mx-auto text-gray-400 mb-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <p className="text-sm text-gray-500">{alt}</p>
      </div>
    </div>
  );
}

/**
 * OptimizedImage component with automatic lazy loading and optimization
 */
export default function OptimizedImage({
  src,
  alt,
  preset = 'card',
  showLoading = true,
  loadingComponent,
  errorComponent,
  fadeIn = true,
  animationDuration = 0.3,
  className,
  priority = false,
  quality,
  sizes,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Reset loading state when src changes
  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  // Get preset configuration
  const presetSizes = {
    card: RESPONSIVE_SIZES.card,
    hero: RESPONSIVE_SIZES.hero,
    thumbnail: RESPONSIVE_SIZES.thumbnail,
    gallery: RESPONSIVE_SIZES.gallery,
  };

  const presetQuality = {
    card: IMAGE_QUALITY.high,
    hero: IMAGE_QUALITY.max,
    thumbnail: IMAGE_QUALITY.medium,
    gallery: IMAGE_QUALITY.high,
  };

  const imageSizes = sizes || presetSizes[preset];
  const imageQuality = quality || presetQuality[preset];

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Show error fallback
  if (hasError) {
    return errorComponent || <ErrorFallback alt={alt} className={className} />;
  }

  return (
    <div className="relative w-full h-full">
      {/* Loading placeholder */}
      {isLoading && showLoading && (
        <div className="absolute inset-0 z-10">
          {loadingComponent || <LoadingPlaceholder className={className} />}
        </div>
      )}

      {/* Optimized image */}
      <motion.div
        initial={fadeIn ? { opacity: 0 } : undefined}
        animate={fadeIn && !isLoading ? { opacity: 1 } : undefined}
        transition={{ duration: animationDuration }}
        className="w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          sizes={imageSizes}
          quality={imageQuality}
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={handleLoad}
          onError={handleError}
          className={className}
          {...props}
        />
      </motion.div>
    </div>
  );
}

/**
 * Preset variants for common use cases
 */

export function CardImage(props: Omit<OptimizedImageProps, 'preset'>) {
  return <OptimizedImage {...props} preset="card" />;
}

export function HeroImage(props: Omit<OptimizedImageProps, 'preset'>) {
  return <OptimizedImage {...props} preset="hero" priority />;
}

export function ThumbnailImage(props: Omit<OptimizedImageProps, 'preset'>) {
  return <OptimizedImage {...props} preset="thumbnail" />;
}

export function GalleryImage(props: Omit<OptimizedImageProps, 'preset'>) {
  return <OptimizedImage {...props} preset="gallery" />;
}
