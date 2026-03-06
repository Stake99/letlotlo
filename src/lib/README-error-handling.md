# Error Handling System

This document describes the comprehensive error handling system implemented for the Letlotlo International website.

## Overview

The error handling system provides graceful degradation and fallbacks for:
- React component errors
- 3D rendering failures (WebGL)
- Animation system failures
- Performance issues on low-end devices

## Components

### 1. React Error Boundaries

**Location**: `src/components/common/ErrorBoundary.tsx`

The `ErrorBoundary` component catches React component errors and displays a fallback UI instead of crashing the entire application.

**Features**:
- Catches component errors during rendering, lifecycle methods, and constructors
- Displays user-friendly fallback UI
- Logs errors to console in development
- Supports custom error handlers for production error tracking
- Supports reset functionality to recover from errors
- Supports `resetKeys` prop to automatically reset when dependencies change

**Usage**:
```tsx
import { ErrorBoundary } from '@/components/common/ErrorBoundary';

<ErrorBoundary>
  <YourComponent />
</ErrorBoundary>

// With custom fallback
<ErrorBoundary fallback={<CustomFallback />}>
  <YourComponent />
</ErrorBoundary>

// With error handler
<ErrorBoundary onError={(error, errorInfo) => {
  // Send to error tracking service
}}>
  <YourComponent />
</ErrorBoundary>
```

**HOC Wrapper**:
```tsx
import { withErrorBoundary } from '@/components/common/ErrorBoundary';

const SafeComponent = withErrorBoundary(MyComponent, {
  fallback: <CustomFallback />,
  onError: (error, errorInfo) => {
    // Handle error
  }
});
```

### 2. 3D Error Handling

**Location**: `src/components/three/ThreeErrorBoundary.tsx`

Specialized error boundary for 3D/Three.js components with appropriate fallback messaging.

**Features**:
- Detects WebGL support before rendering
- Provides graceful fallback for unsupported devices
- Displays user-friendly message about 3D unavailability
- Logs 3D-specific errors with context

**WebGL Detection**: `src/lib/webgl-detection.ts`

Comprehensive WebGL capability detection:
- Checks WebGL 1 and WebGL 2 support
- Detects GPU renderer and vendor
- Identifies low-end devices
- Caches capabilities for performance

**Usage**:
```tsx
import { ThreeErrorBoundary } from '@/components/three/ThreeErrorBoundary';

<ThreeErrorBoundary>
  <ThreeScene>
    <FloatingObjects />
  </ThreeScene>
</ThreeErrorBoundary>
```

**Safe Wrapper**: `src/components/three/SafeThreeScene.tsx`

Pre-configured wrapper that combines error boundary with dynamic loading:
```tsx
import SafeThreeScene from '@/components/three/SafeThreeScene';

<SafeThreeScene>
  <FloatingObjects />
</SafeThreeScene>
```

### 3. Animation Error Handling

**Location**: `src/lib/animation-fallback.ts`

Handles animation failures and provides CSS-based alternatives.

**Features**:
- Detects user's reduced motion preference
- Checks JavaScript animation support
- Identifies low-performance devices
- Provides CSS fallback animations
- Monitors animation performance in real-time

**Animation Modes**:
- `full`: Full JavaScript animations (Framer Motion)
- `reduced`: Simplified animations with shorter durations
- `css-only`: CSS-only animations (no JavaScript)
- `none`: No animations (respects prefers-reduced-motion)

**Usage**:
```tsx
import { useAnimation } from '@/components/providers/AnimationProvider';
import { getSafeAnimationProps } from '@/lib/animation-fallback';

function MyComponent() {
  const { mode, isReduced } = useAnimation();
  
  if (isReduced) {
    // Use simpler animations
  }
  
  return (
    <motion.div {...getSafeAnimationProps(animationProps, mode)}>
      Content
    </motion.div>
  );
}
```

**Safe Motion Components**: `src/components/common/SafeMotion.tsx`

Pre-configured Framer Motion wrappers with error handling:
```tsx
import { SafeMotionDiv, SafeMotionButton } from '@/components/common/SafeMotion';

<SafeMotionDiv
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  fallbackAnimation="fadeIn"
>
  Content
</SafeMotionDiv>
```

### 4. Error Logging

**Location**: `src/lib/error-logger.ts`

Centralized error logging system for tracking and reporting errors.

**Features**:
- In-memory error log storage
- Context-aware error logging
- Specialized loggers for 3D, animation, and network errors
- Production-ready error service integration (placeholder)
- Global error handlers for uncaught errors

**Usage**:
```tsx
import { errorLogger } from '@/lib/error-logger';

// Log general error
errorLogger.log(error, errorInfo, 'Component Name');

// Log 3D error
errorLogger.log3DError(error, 'Model Loading');

// Log animation error
errorLogger.logAnimationError(error, 'Transition');

// Log network error
errorLogger.logNetworkError(error, 'API Call');

// Get all logs
const logs = errorLogger.getLogs();

// Clear logs
errorLogger.clearLogs();
```

**Global Error Handlers**:
```tsx
import { setupGlobalErrorHandlers } from '@/lib/error-logger';

// Initialize in root layout or app entry point
useEffect(() => {
  setupGlobalErrorHandlers();
}, []);
```

## Providers

### AnimationProvider

**Location**: `src/components/providers/AnimationProvider.tsx`

Manages animation mode based on device capabilities and user preferences.

**Features**:
- Automatically detects optimal animation mode
- Monitors performance and adjusts mode dynamically
- Respects user's reduced motion preference
- Applies appropriate CSS classes to body element

**Usage**:
```tsx
// In root layout
import { AnimationProvider } from '@/components/providers/AnimationProvider';

<AnimationProvider>
  <App />
</AnimationProvider>

// In components
import { useAnimation } from '@/components/providers/AnimationProvider';

function MyComponent() {
  const { mode, setMode, isReduced } = useAnimation();
  
  return (
    <div>
      Current mode: {mode}
      {isReduced && <p>Using reduced animations</p>}
    </div>
  );
}
```

### ErrorLoggerInitializer

**Location**: `src/components/providers/ErrorLoggerInitializer.tsx`

Initializes global error handlers on mount.

**Usage**:
```tsx
// In root layout
import { ErrorLoggerInitializer } from '@/components/providers/ErrorLoggerInitializer';

<ErrorLoggerInitializer />
```

## CSS Fallback Animations

**Location**: `src/app/globals.css`

CSS-based animations that work without JavaScript:

**Available Classes**:
- `.animate-fade-in` - Fade in animation
- `.animate-fade-out` - Fade out animation
- `.animate-slide-up` - Slide up from bottom
- `.animate-slide-down` - Slide down from top
- `.animate-slide-left` - Slide in from right
- `.animate-slide-right` - Slide in from left
- `.animate-scale-up` - Scale up animation
- `.animate-scale-down` - Scale down animation

**Low Performance Mode**:
When `.low-performance-mode` class is applied to body:
- Complex animations are disabled
- Hover effects are simplified
- 3D transforms are reduced

**Reduced Motion**:
Automatically respects `prefers-reduced-motion: reduce` media query:
- All animations are disabled or minimized
- Transitions are instant
- Scroll behavior is set to auto

## Integration with Error Tracking Services

The error logging system is designed to integrate with production error tracking services like Sentry, LogRocket, or DataDog.

**Example Sentry Integration**:
```tsx
// In src/lib/error-logger.ts, update sendToErrorService method:

import * as Sentry from '@sentry/nextjs';

private sendToErrorService(errorLog: ErrorLog): void {
  if (process.env.NODE_ENV !== 'production') {
    return;
  }

  Sentry.captureException(errorLog.error, {
    contexts: {
      react: {
        componentStack: errorLog.errorInfo?.componentStack,
      },
    },
    tags: {
      context: errorLog.context,
    },
    extra: {
      userAgent: errorLog.userAgent,
      url: errorLog.url,
    },
  });
}
```

## Best Practices

### 1. Wrap Major Component Trees
```tsx
<ErrorBoundary>
  <Navbar />
</ErrorBoundary>

<ErrorBoundary>
  <MainContent />
</ErrorBoundary>

<ErrorBoundary>
  <Footer />
</ErrorBoundary>
```

### 2. Use Specialized Boundaries for 3D
```tsx
<ThreeErrorBoundary>
  <ThreeScene>
    <FloatingObjects />
  </ThreeScene>
</ThreeErrorBoundary>
```

### 3. Use Safe Motion Components
```tsx
// Instead of:
<motion.div {...props}>Content</motion.div>

// Use:
<SafeMotionDiv {...props} fallbackAnimation="fadeIn">
  Content
</SafeMotionDiv>
```

### 4. Check Animation Mode
```tsx
const { mode, isReduced } = useAnimation();

if (isReduced) {
  // Use simpler animations or skip complex effects
}
```

### 5. Log Errors with Context
```tsx
try {
  // Risky operation
} catch (error) {
  errorLogger.log(error, undefined, 'Operation Name');
}
```

## Testing Error Handling

### Test Error Boundaries
```tsx
// Create a component that throws an error
function ErrorComponent() {
  throw new Error('Test error');
}

// Wrap in error boundary
<ErrorBoundary>
  <ErrorComponent />
</ErrorBoundary>
```

### Test WebGL Fallback
```tsx
// Disable WebGL in browser DevTools
// Or use a device without WebGL support
<SafeThreeScene>
  <FloatingObjects />
</SafeThreeScene>
```

### Test Animation Fallback
```tsx
// Enable "Reduce motion" in OS accessibility settings
// Or use DevTools to emulate prefers-reduced-motion
<SafeMotionDiv
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>
  Content
</SafeMotionDiv>
```

## Performance Monitoring

The animation system includes real-time performance monitoring:

```tsx
import { animationMonitor } from '@/lib/animation-fallback';

// Get current FPS
const fps = animationMonitor.getFPS();

// Monitor performance with callback
animationMonitor.start((shouldDisable) => {
  if (shouldDisable) {
    console.warn('Low performance detected');
    // Switch to reduced animations
  }
});
```

## Summary

The error handling system provides comprehensive protection against:
- ✅ React component crashes
- ✅ WebGL/3D rendering failures
- ✅ Animation system failures
- ✅ Low-end device performance issues
- ✅ User accessibility preferences

All errors are logged and can be sent to production error tracking services for monitoring and debugging.
