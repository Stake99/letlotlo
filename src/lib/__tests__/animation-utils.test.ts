import { describe, it, expect, jest, beforeEach, afterEach } from '@jest/globals';
import { renderHook, act } from '@testing-library/react';
import {
  useAnimationPreferences,
  useAnimationPerformance,
  useAdaptiveAnimations,
  AnimationSequence,
  gestureAnimations,
  timing,
  easings,
  presets,
  optimizations,
  createResponsiveAnimation,
} from '../animation-utils';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  useReducedMotion: jest.fn(() => false),
}));

// Mock window and navigator
const mockNavigator = {
  hardwareConcurrency: 4,
  deviceMemory: 8,
};

const mockWindow = {
  navigator: mockNavigator,
  innerWidth: 1024,
  performance: {
    now: jest.fn(() => Date.now()),
  },
  requestAnimationFrame: jest.fn((cb) => setTimeout(cb, 16)),
  cancelAnimationFrame: jest.fn(),
};

// Extend existing window object instead of redefining
Object.assign(global.window, mockWindow);

Object.defineProperty(global, 'navigator', {
  value: mockNavigator,
  writable: true,
});

describe('Animation Utilities', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('useAnimationPreferences', () => {
    it('should detect high-end device capabilities', () => {
      const { result } = renderHook(() => useAnimationPreferences());
      
      expect(result.current.isLowEndDevice).toBe(false);
      expect(result.current.shouldUseReducedAnimations).toBe(false);
    });

    it('should detect low-end device', () => {
      // Mock low-end device
      Object.defineProperty(global, 'navigator', {
        value: { hardwareConcurrency: 2, deviceMemory: 2 },
        writable: true,
      });

      const { result } = renderHook(() => useAnimationPreferences());
      
      expect(result.current.isLowEndDevice).toBe(true);
      expect(result.current.shouldUseReducedAnimations).toBe(true);
    });

    it('should detect WebGL support', () => {
      // Mock canvas and WebGL context
      const mockCanvas = {
        getContext: jest.fn(() => ({})), // Mock WebGL context
      };
      
      global.document = {
        createElement: jest.fn(() => mockCanvas),
      } as any;

      const { result } = renderHook(() => useAnimationPreferences());
      
      expect(result.current.supportsWebGL).toBe(true);
    });
  });

  describe('useAnimationPerformance', () => {
    it('should initialize with good performance', () => {
      const { result } = renderHook(() => useAnimationPerformance());
      
      expect(result.current.fps).toBe(60);
      expect(result.current.isPerformanceGood).toBe(true);
    });

    it('should measure FPS over time', async () => {
      const { result } = renderHook(() => useAnimationPerformance());
      
      // Simulate low FPS
      mockWindow.performance.now = jest.fn()
        .mockReturnValueOnce(0)
        .mockReturnValueOnce(1000)
        .mockReturnValueOnce(2000);

      // Wait for FPS measurement
      await act(async () => {
        await new Promise(resolve => setTimeout(resolve, 100));
      });

      // FPS should be calculated based on frame count
      expect(typeof result.current.fps).toBe('number');
    });
  });

  describe('useAdaptiveAnimations', () => {
    it('should return full animation for good performance', () => {
      const { result } = renderHook(() => useAdaptiveAnimations());
      
      const fullAnimation = { initial: { opacity: 0 }, animate: { opacity: 1 } };
      const reducedAnimation = { initial: { opacity: 0 }, animate: { opacity: 1 } };
      
      const variant = result.current.getVariant(fullAnimation, reducedAnimation);
      
      expect(variant).toBe(fullAnimation);
    });

    it('should return reduced animation for poor performance', () => {
      // Mock reduced motion preference
      const { useReducedMotion } = require('framer-motion');
      useReducedMotion.mockReturnValue(true);

      const { result } = renderHook(() => useAdaptiveAnimations());
      
      const fullAnimation = { initial: { opacity: 0 }, animate: { opacity: 1 } };
      const reducedAnimation = { initial: { opacity: 0 }, animate: { opacity: 1 } };
      
      const variant = result.current.getVariant(fullAnimation, reducedAnimation);
      
      expect(variant).toBe(reducedAnimation);
    });
  });

  describe('AnimationSequence', () => {
    it('should build animation sequence correctly', () => {
      const sequence = new AnimationSequence();
      const step1 = { initial: { opacity: 0 }, animate: { opacity: 1 } };
      const step2 = { initial: { scale: 0 }, animate: { scale: 1 } };
      
      const result = sequence
        .add(step1, 0.3, 0.1)
        .add(step2, 0.2, 0.05)
        .build();
      
      expect(result).toHaveProperty('initial');
      expect(result).toHaveProperty('animate');
      expect(result.animate).toHaveProperty('transition');
    });

    it('should calculate total duration correctly', () => {
      const sequence = new AnimationSequence();
      const step = { initial: { opacity: 0 }, animate: { opacity: 1 } };
      
      const result = sequence
        .add(step, 0.3, 0.1) // 0.4 total
        .add(step, 0.2, 0.05) // 0.25 total
        .build(); // Total: 0.65
      
      expect(result.animate.transition.duration).toBe(0.65);
    });
  });

  describe('Gesture Animations', () => {
    it('should have correct drag constraints', () => {
      expect(gestureAnimations.dragConstraints).toEqual({
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
      });
    });

    it('should have appropriate drag elastic value', () => {
      expect(gestureAnimations.dragElastic).toBe(0.2);
      expect(gestureAnimations.dragElastic).toBeGreaterThan(0);
      expect(gestureAnimations.dragElastic).toBeLessThan(1);
    });

    it('should have tap animation with scale reduction', () => {
      expect(gestureAnimations.tap).toEqual({ scale: 0.95 });
    });
  });

  describe('Timing Constants', () => {
    it('should have appropriate timing values', () => {
      expect(timing.micro).toBe(0.15);
      expect(timing.standard).toBe(0.3);
      expect(timing.page).toBe(0.5);
      expect(timing.complex).toBe(0.8);
      expect(timing.attention).toBe(1.2);
    });

    it('should have increasing timing values', () => {
      expect(timing.micro).toBeLessThan(timing.standard);
      expect(timing.standard).toBeLessThan(timing.page);
      expect(timing.page).toBeLessThan(timing.complex);
      expect(timing.complex).toBeLessThan(timing.attention);
    });
  });

  describe('Easing Functions', () => {
    it('should have cubic-bezier easing arrays', () => {
      expect(Array.isArray(easings.standard)).toBe(true);
      expect(easings.standard).toHaveLength(4);
      expect(Array.isArray(easings.bouncy)).toBe(true);
      expect(easings.bouncy).toHaveLength(4);
    });

    it('should have valid cubic-bezier values', () => {
      easings.standard.forEach(value => {
        expect(typeof value).toBe('number');
      });
    });
  });

  describe('Animation Presets', () => {
    it('should have modal preset with correct structure', () => {
      expect(presets.modal).toHaveProperty('initial');
      expect(presets.modal).toHaveProperty('animate');
      expect(presets.modal).toHaveProperty('exit');
      
      expect(presets.modal.initial).toEqual({
        opacity: 0,
        scale: 0.95,
        y: 20,
      });
    });

    it('should have tooltip preset with fast timing', () => {
      expect(presets.tooltip.animate.transition.duration).toBe(timing.micro);
      expect(presets.tooltip.exit.transition.duration).toBe(timing.micro);
    });

    it('should have notification preset with bouncy easing', () => {
      expect(presets.notification.animate.transition.ease).toBe(easings.bouncy);
    });

    it('should have spinner preset with infinite rotation', () => {
      expect(presets.spinner.animate.transition.repeat).toBe(Infinity);
      expect(presets.spinner.animate.transition.ease).toBe('linear');
    });
  });

  describe('Performance Optimizations', () => {
    it('should have GPU acceleration properties', () => {
      expect(optimizations.gpuAcceleration.style).toHaveProperty('willChange', 'transform');
      expect(optimizations.gpuAcceleration.style).toHaveProperty('backfaceVisibility', 'hidden');
      expect(optimizations.gpuAcceleration.style).toHaveProperty('perspective', 1000);
    });

    it('should have layout optimization properties', () => {
      expect(optimizations.layoutOptimized).toHaveProperty('layout', false);
      expect(optimizations.layoutOptimized.style).toHaveProperty('willChange', 'transform, opacity');
    });

    it('should have reduced motion fallback', () => {
      expect(optimizations.reducedMotion.transition).toHaveProperty('duration', 0);
    });
  });

  describe('createResponsiveAnimation', () => {
    const mobileVariant = { initial: { x: -100 }, animate: { x: 0 } };
    const tabletVariant = { initial: { x: -50 }, animate: { x: 0 } };
    const desktopVariant = { initial: { x: 0 }, animate: { x: 0 } };

    it('should return mobile variant for small screens', () => {
      Object.defineProperty(global.window, 'innerWidth', { value: 500, writable: true });
      
      const result = createResponsiveAnimation(mobileVariant, tabletVariant, desktopVariant);
      expect(result).toBe(mobileVariant);
    });

    it('should return tablet variant for medium screens', () => {
      Object.defineProperty(global.window, 'innerWidth', { value: 800, writable: true });
      
      const result = createResponsiveAnimation(mobileVariant, tabletVariant, desktopVariant);
      expect(result).toBe(tabletVariant);
    });

    it('should return desktop variant for large screens', () => {
      Object.defineProperty(global.window, 'innerWidth', { value: 1200, writable: true });
      
      const result = createResponsiveAnimation(mobileVariant, tabletVariant, desktopVariant);
      expect(result).toBe(desktopVariant);
    });

    it('should handle server-side rendering', () => {
      // Mock window as undefined
      const originalWindow = global.window;
      delete (global as any).window;
      
      const result = createResponsiveAnimation(mobileVariant, tabletVariant, desktopVariant);
      expect(result).toBe(desktopVariant); // Should default to desktop
      
      // Restore window
      global.window = originalWindow;
    });
  });

  describe('Performance Requirements Validation', () => {
    it('should meet hover animation timing requirements (≤50ms)', () => {
      // Requirements 6.4, 6.5: Hover effects within 50ms
      expect(timing.micro * 1000).toBeLessThanOrEqual(50);
    });

    it('should meet general animation timing requirements (≤300ms)', () => {
      // Requirements 6.7: Animations complete within 300ms
      expect(timing.standard * 1000).toBeLessThanOrEqual(300);
    });

    it('should have appropriate page transition timing', () => {
      // Page transitions should be noticeable but not slow
      expect(timing.page * 1000).toBeGreaterThan(200);
      expect(timing.page * 1000).toBeLessThan(800);
    });
  });
});