# Animation System Documentation

## Overview

The Letlotlo International website animation system is built with Framer Motion and optimized for performance while maintaining a cartoon-styled aesthetic. The system provides reusable animation variants, utilities, and performance optimizations.

## Features

- **Performance Optimized**: GPU-accelerated animations with 60fps target
- **Cartoon-Styled**: Bouncy, playful animations that match the brand aesthetic
- **Accessibility**: Reduced motion support and device capability detection
- **Responsive**: Adaptive animations based on device performance
- **Comprehensive**: 25+ animation variants and utility functions

## Core Files

### `animations.ts`
Main animation variants library with Framer Motion configurations:

- **Fade Animations**: `fadeIn`, `fadeInUp`, `fadeInDown`, `fadeInLeft`, `fadeInRight`
- **Scale Animations**: `scaleIn`, `scaleUp`, `pop`
- **Slide Animations**: `slideInUp`, `slideInDown`, `slideInLeft`, `slideInRight`
- **Hover Effects**: `hoverLift`, `hoverScale`, `hoverRotate`, `hover3D`, `hoverGlow`
- **Continuous Animations**: `bounce`, `gentleBounce`, `float`, `gentleFloat`, `rotate`, `pulse`
- **Stagger Animations**: `staggerContainer`, `staggerItem`, `gridStagger`, `gridItem`
- **Page Transitions**: `pageTransition`, `pageSlide`
- **Specialized**: `heroText`, `heroSubtext`, `serviceCardHover`, `buttonHover`

### `animation-utils.ts`
Advanced utilities and performance optimization tools:

- **Performance Hooks**: `useAnimationPreferences`, `useAnimationPerformance`
- **Adaptive Animations**: `useAdaptiveAnimations`
- **Scroll Triggers**: `useScrollAnimation`
- **Animation Builder**: `AnimationSequence` class
- **Responsive Utilities**: `createResponsiveAnimation`

## Usage Examples

### Basic Animation

```tsx
import { motion } from 'framer-motion';
import { fadeInUp, viewportConfig } from '@/lib/animations';

export function AnimatedCard() {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={viewportConfig.default}
      className="card"
    >
      Content here
    </motion.div>
  );
}
```

### Hover Effects

```tsx
import { motion } from 'framer-motion';
import { serviceCardHover } from '@/lib/animations';

export function ServiceCard() {
  return (
    <motion.div
      variants={serviceCardHover}
      initial="initial"
      whileHover="animate"
      className="service-card"
    >
      Service content
    </motion.div>
  );
}
```

### Stagger Animations

```tsx
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/animations';

export function AnimatedList({ items }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          variants={staggerItem}
        >
          {item}
        </motion.div>
      ))}
    </motion.div>
  );
}
```

### Performance-Optimized Animations

```tsx
import { motion } from 'framer-motion';
import { useAdaptiveAnimations } from '@/lib/animation-utils';
import { fadeInUp, reducedMotionVariants } from '@/lib/animations';

export function AdaptiveCard() {
  const { getVariant } = useAdaptiveAnimations();
  
  const variant = getVariant(
    fadeInUp, // Full animation
    reducedMotionVariants.fadeIn, // Reduced motion
    fadeIn // Performance fallback
  );

  return (
    <motion.div
      variants={variant}
      initial="initial"
      animate="animate"
    >
      Content
    </motion.div>
  );
}
```

### Custom Animation Builder

```tsx
import { AnimationSequence } from '@/lib/animation-utils';

const customSequence = new AnimationSequence()
  .add({ initial: { opacity: 0 }, animate: { opacity: 1 } }, 0.3, 0.1)
  .add({ initial: { scale: 0 }, animate: { scale: 1 } }, 0.2, 0.05)
  .build();
```

## Performance Guidelines

### GPU Acceleration
Use the provided performance props for GPU acceleration:

```tsx
import { optimizations } from '@/lib/animation-utils';

<motion.div
  {...optimizations.gpuAcceleration}
  animate={{ x: 100 }}
>
  GPU-accelerated content
</motion.div>
```

### Reduced Motion
Always provide reduced motion alternatives:

```tsx
import { useAnimationPreferences } from '@/lib/animation-utils';

function ResponsiveAnimation() {
  const { shouldUseReducedAnimations } = useAnimationPreferences();
  
  return (
    <motion.div
      animate={shouldUseReducedAnimations ? { opacity: 1 } : { opacity: 1, y: 0 }}
    >
      Content
    </motion.div>
  );
}
```

### Performance Monitoring
Monitor animation performance in development:

```tsx
import { useAnimationPerformance } from '@/lib/animation-utils';

function PerformanceMonitor() {
  const { fps, isPerformanceGood } = useAnimationPerformance();
  
  if (!isPerformanceGood) {
    console.warn(`Low FPS detected: ${fps}`);
  }
  
  return null;
}
```

## Animation Timing Standards

The system follows strict timing requirements:

- **Micro-interactions** (hover, click): ≤50ms (`timing.micro`)
- **Standard UI animations**: ≤300ms (`timing.standard`)
- **Page transitions**: 400-500ms (`timing.page`)
- **Complex animations**: 600-800ms (`timing.complex`)

## Cartoon-Style Presets

Special cartoon-styled animations for brand consistency:

```tsx
import { cartoonAnimations } from '@/lib/animations';

// Bouncy entrance
<motion.div variants={cartoonAnimations.cartoonBounce} />

// Wobbly effect
<motion.div variants={cartoonAnimations.wobble} />

// Elastic scale
<motion.div variants={cartoonAnimations.elastic} />

// Playful rotation
<motion.div variants={cartoonAnimations.playfulRotate} />
```

## 3D Hover Effects

Enhanced 3D effects for service cards and interactive elements:

```tsx
import { create3DHover } from '@/lib/animations';

const custom3D = create3DHover(-10, 10, 80, 1.05);

<motion.div
  variants={custom3D}
  whileHover="animate"
  style={{ transformStyle: 'preserve-3d' }}
>
  3D Card Content
</motion.div>
```

## Accessibility Features

### Reduced Motion Support
- Automatic detection of `prefers-reduced-motion`
- Fallback animations for accessibility
- Device capability detection

### Performance Adaptation
- Low-end device detection
- Automatic animation quality reduction
- FPS monitoring and adaptation

### Focus Management
- Keyboard navigation support
- Focus indicators with animations
- Screen reader compatibility

## Best Practices

1. **Always use viewport triggers** for scroll animations
2. **Provide reduced motion alternatives** for accessibility
3. **Use GPU acceleration** for transform animations
4. **Monitor performance** in development
5. **Test on low-end devices** regularly
6. **Follow timing standards** for consistency
7. **Use stagger animations** for lists and grids
8. **Implement proper cleanup** for continuous animations

## Requirements Validation

This animation system validates the following requirements:

- **Requirements 2.4**: Framer Motion implementation ✓
- **Requirements 6.4**: Button hover effects ≤50ms ✓
- **Requirements 6.5**: Icon hover effects ≤50ms ✓
- **Requirements 6.6**: Page transition animations ✓
- **Requirements 6.7**: Animation completion ≤300ms ✓
- **Requirements 14.4**: Performance-optimized techniques ✓

## Testing

The animation system includes comprehensive tests:

- Unit tests for all animation variants
- Performance timing validation
- Accessibility compliance testing
- Cross-browser compatibility tests
- Device capability detection tests

Run tests with: `npm test -- animations`

## Troubleshooting

### Common Issues

1. **Animations not triggering**: Check viewport configuration
2. **Poor performance**: Enable GPU acceleration
3. **Accessibility warnings**: Implement reduced motion
4. **Layout shifts**: Use transform instead of layout properties
5. **Memory leaks**: Ensure proper cleanup of continuous animations

### Debug Mode

Enable debug mode for development:

```tsx
import { debug } from '@/lib/animation-utils';

<motion.div
  {...debug.showBounds}
  onAnimationStart={() => debug.logPerformance('myAnimation', performance.now())}
>
  Debug content
</motion.div>
```

## Future Enhancements

- WebGL-based particle animations
- Advanced physics simulations
- Voice-controlled animations
- AI-powered animation suggestions
- Real-time performance optimization