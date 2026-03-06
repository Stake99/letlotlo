# Performance Optimization Guide

This document describes the performance optimization features implemented in the Letlotlo International website.

## Overview

The website implements comprehensive performance optimizations to ensure fast load times and smooth interactions across all devices and network conditions.

**Requirements Addressed:**
- 2.6: Image optimization with next/image
- 14.1: Lazy loading for 3D models
- 14.2: Image optimization for web delivery
- 14.3: Lazy loading for images not in viewport
- 14.4: Efficient animations maintaining 60fps
- 14.5: Code splitting for each route
- 14.6: Initial content display within 2 seconds on 3G

## Image Optimization

### next/image Configuration

The website uses Next.js Image component with optimized settings:

```typescript
// next.config.ts
images: {
  formats: ['image/avif', 'image/webp'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  minimumCacheTTL: 60,
}
```

### OptimizedImage Component

Use the `OptimizedImage` component for automatic optimization:

```tsx
import { OptimizedImage } from '@/components/common';

<OptimizedImage
  src="/images/hero.jpg"
  alt="Hero image"
  preset="hero"
  priority // For above-the-fold images
/>
```

**Presets:**
- `card`: For card images (responsive sizing)
- `hero`: For hero images (full width, high quality)
- `thumbnail`: For small thumbnails
- `gallery`: For gallery images

### Image Utilities

```typescript
import { getOptimizedImageConfig, RESPONSIVE_SIZES } from '@/lib/image-utils';

// Get optimized configuration
const config = getOptimizedImageConfig('/image.jpg', 'Alt text', {
  size: 'large',
  responsiveSizes: 'hero',
  quality: 'high',
  priority: true,
});
```

## Lazy Loading

### 3D Model Lazy Loading

Use `LazyThreeScene` for viewport-based 3D loading:

```tsx
import LazyThreeScene from '@/components/three/LazyThreeScene';

<LazyThreeScene
  camera={{ position: [0, 0, 5] }}
  priority="medium" // high, medium, or low
>
  <FloatingObjects />
</LazyThreeScene>
```

### Custom Lazy Loading

Use the `useLazyLoad` hook for custom components:

```tsx
import { useLazyLoad } from '@/lib/lazy-loading';

function MyComponent() {
  const [ref, isVisible] = useLazyLoad({
    rootMargin: '100px',
    threshold: 0.01,
  });

  return (
    <div ref={ref}>
      {isVisible && <HeavyComponent />}
    </div>
  );
}
```

## Code Splitting

### Dynamic Imports

Use pre-configured dynamic components:

```tsx
import { 
  DynamicThreeScene,
  DynamicHero,
  DynamicContactForm 
} from '@/components/dynamic';

// Components are automatically code-split
<DynamicThreeScene>
  <FloatingObjects />
</DynamicThreeScene>
```

### Route Optimization

The `RouteOptimizer` component automatically:
- Preloads related routes on hover
- Tracks Core Web Vitals
- Optimizes navigation performance

```tsx
// Already included in root layout
<RouteOptimizer
  enablePreload={true}
  enableHoverPrefetch={true}
  enablePerformanceTracking={true}
/>
```

### Manual Route Preloading

```typescript
import { preloadRoute } from '@/lib/route-optimization';

// Preload a route
preloadRoute('/about');
```

## Performance Monitoring

### Core Web Vitals Tracking

```typescript
import { trackWebVitals } from '@/lib/route-optimization';

trackWebVitals((metrics) => {
  console.log('Performance metrics:', metrics);
  // Send to analytics
});
```

### Performance Monitor

```typescript
import { getPerformanceMonitor } from '@/lib/performance-monitor';

const monitor = getPerformanceMonitor();

// Get performance summary
const summary = monitor.getSummary();

// Get recommendations
const recommendations = monitor.getRecommendations();

// Check if performance is good
const isGood = monitor.isPerformanceGood();
```

### Frame Rate Monitoring

```typescript
import { useFrameRateMonitor } from '@/lib/performance-monitor';

function MyComponent() {
  const fps = useFrameRateMonitor((fps) => {
    if (fps < 30) {
      console.warn('Low FPS detected:', fps);
    }
  });

  return <div>Current FPS: {fps}</div>;
}
```

## Performance Best Practices

### Images

1. **Always use next/image** for all image assets
2. **Set priority** for above-the-fold images
3. **Use appropriate presets** for different image types
4. **Provide alt text** for accessibility
5. **Use lazy loading** for below-the-fold images

```tsx
// Good: Above-the-fold image
<OptimizedImage
  src="/hero.jpg"
  alt="Hero"
  preset="hero"
  priority
/>

// Good: Below-the-fold image
<OptimizedImage
  src="/gallery.jpg"
  alt="Gallery"
  preset="gallery"
  // priority defaults to false (lazy loaded)
/>
```

### 3D Content

1. **Use LazyThreeScene** for non-critical 3D content
2. **Set appropriate priority** based on viewport position
3. **Provide fallbacks** for unsupported devices
4. **Monitor frame rate** and adjust quality

```tsx
// Good: Lazy-loaded 3D scene
<LazyThreeScene priority="low">
  <BackgroundShapes />
</LazyThreeScene>

// Good: Critical 3D scene
<ThreeScene>
  <FloatingObjects />
</ThreeScene>
```

### Code Splitting

1. **Use dynamic imports** for heavy components
2. **Split by route** for better initial load
3. **Preload critical routes** on hover
4. **Provide loading states** for better UX

```tsx
// Good: Dynamic import with loading state
const DynamicComponent = dynamic(
  () => import('./HeavyComponent'),
  { loading: () => <LoadingSpinner /> }
);
```

### Animations

1. **Use transform and opacity** for animations
2. **Avoid layout-triggering properties** (width, height, top, left)
3. **Use will-change** sparingly
4. **Monitor frame rate** during animations

```tsx
// Good: GPU-accelerated animation
<motion.div
  animate={{ x: 100, opacity: 1 }}
  style={{ willChange: 'transform' }}
/>

// Bad: Layout-triggering animation
<motion.div
  animate={{ width: 100, marginLeft: 50 }}
/>
```

## Performance Targets

Based on Core Web Vitals:

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **FCP (First Contentful Paint)**: < 1.8s
- **TTFB (Time to First Byte)**: < 800ms
- **Frame Rate**: 60fps

## Monitoring Performance

### Development

```bash
# Run with performance profiling
npm run dev

# Check console for performance warnings
# Monitor frame rate in development tools
```

### Production

```bash
# Build and analyze bundle
npm run build
npm run analyze

# Check Lighthouse scores
npm run lighthouse
```

## Troubleshooting

### Slow Image Loading

1. Check image sizes and formats
2. Verify next/image configuration
3. Use appropriate quality settings
4. Enable priority for critical images

### Low Frame Rate

1. Check animation complexity
2. Reduce 3D scene complexity
3. Use performance tier detection
4. Disable expensive effects on low-end devices

### Large Bundle Size

1. Check for unnecessary imports
2. Use dynamic imports for heavy components
3. Analyze bundle with webpack-bundle-analyzer
4. Remove unused dependencies

### Slow Route Navigation

1. Enable route preloading
2. Use hover prefetching
3. Optimize page components
4. Reduce initial data fetching

## Additional Resources

- [Next.js Image Optimization](https://nextjs.org/docs/basic-features/image-optimization)
- [Web Vitals](https://web.dev/vitals/)
- [React Performance](https://react.dev/learn/render-and-commit)
- [Three.js Performance](https://threejs.org/docs/#manual/en/introduction/Performance-tips)
