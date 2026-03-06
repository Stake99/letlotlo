/**
 * Tests for Interaction Feedback System
 * Requirements: 6.4, 6.5, 13.5
 */

import {
  interactionVariants,
  loadingVariants,
  focusVariants,
  feedbackVariants,
  createHoverVariant,
  createTapVariant,
  shouldReduceMotion,
  getAccessibleVariant,
  feedbackConfig,
} from "../interaction-feedback";

describe("Interaction Feedback System", () => {
  describe("interactionVariants", () => {
    it("should have buttonHover variant with 50ms duration", () => {
      expect(interactionVariants.buttonHover.hover.transition.duration).toBe(0.05);
    });

    it("should have iconHover variant with 50ms duration", () => {
      expect(interactionVariants.iconHover.hover.transition.duration).toBe(0.05);
    });

    it("should have interactiveHover variant with 50ms duration", () => {
      expect(interactionVariants.interactiveHover.hover.transition.duration).toBe(0.05);
    });

    it("should have linkHover variant with 50ms duration", () => {
      expect(interactionVariants.linkHover.hover.transition.duration).toBe(0.05);
    });

    it("should have cardHover variant with appropriate timing", () => {
      expect(interactionVariants.cardHover.hover.transition.duration).toBeLessThanOrEqual(0.3);
    });
  });

  describe("loadingVariants", () => {
    it("should have spinner animation", () => {
      expect(loadingVariants.spinner.animate.rotate).toBe(360);
      expect(loadingVariants.spinner.animate.transition.repeat).toBe(Infinity);
    });

    it("should have pulse animation", () => {
      expect(loadingVariants.pulse.animate.scale).toEqual([1, 1.05, 1]);
      expect(loadingVariants.pulse.animate.transition.repeat).toBe(Infinity);
    });

    it("should have dots animation", () => {
      expect(loadingVariants.dots.animate.y).toEqual([0, -10, 0]);
      expect(loadingVariants.dots.animate.transition.repeat).toBe(Infinity);
    });
  });

  describe("focusVariants", () => {
    it("should have focusRing variant with fast transition", () => {
      expect(focusVariants.focusRing.focus.transition.duration).toBe(0.1);
    });

    it("should have focusGlow variant with fast transition", () => {
      expect(focusVariants.focusGlow.focus.transition.duration).toBe(0.1);
    });
  });

  describe("feedbackVariants", () => {
    it("should have success animation", () => {
      expect(feedbackVariants.success.animate.scale).toEqual([0, 1.2, 1]);
      expect(feedbackVariants.success.animate.transition.duration).toBe(0.4);
    });

    it("should have error shake animation", () => {
      expect(feedbackVariants.error.animate.x).toEqual([-10, 10, -10, 10, 0]);
      expect(feedbackVariants.error.animate.transition.duration).toBe(0.4);
    });

    it("should have warning pulse animation", () => {
      expect(feedbackVariants.warning.animate.scale).toEqual([1, 1.05, 1]);
      expect(feedbackVariants.warning.animate.transition.repeat).toBe(3);
    });
  });

  describe("createHoverVariant", () => {
    it("should create hover variant with default values", () => {
      const variant = createHoverVariant();
      expect(variant.hover.y).toBe(-4);
      expect(variant.hover.scale).toBe(1.02);
      expect(variant.hover.transition.duration).toBe(0.05);
    });

    it("should create hover variant with custom values", () => {
      const variant = createHoverVariant(-8, 1.05, 0.1);
      expect(variant.hover.y).toBe(-8);
      expect(variant.hover.scale).toBe(1.05);
      expect(variant.hover.transition.duration).toBe(0.1);
    });
  });

  describe("createTapVariant", () => {
    it("should create tap variant with default values", () => {
      const variant = createTapVariant();
      expect(variant.tap.scale).toBe(0.98);
      expect(variant.tap.transition.duration).toBe(0.05);
    });

    it("should create tap variant with custom values", () => {
      const variant = createTapVariant(0.95, 0.1);
      expect(variant.tap.scale).toBe(0.95);
      expect(variant.tap.transition.duration).toBe(0.1);
    });
  });

  describe("feedbackConfig", () => {
    it("should have correct timing thresholds", () => {
      expect(feedbackConfig.timing.immediate).toBe(50); // Requirements 6.4, 6.5
      expect(feedbackConfig.timing.fast).toBe(100); // Requirement 13.5
      expect(feedbackConfig.timing.normal).toBe(300); // Requirement 6.7
    });

    it("should have feedback colors defined", () => {
      expect(feedbackConfig.colors.success).toBeDefined();
      expect(feedbackConfig.colors.error).toBeDefined();
      expect(feedbackConfig.colors.warning).toBeDefined();
      expect(feedbackConfig.colors.info).toBeDefined();
      expect(feedbackConfig.colors.loading).toBeDefined();
    });
  });

  describe("shouldReduceMotion", () => {
    it("should return false in non-browser environment", () => {
      expect(shouldReduceMotion()).toBe(false);
    });

    it("should check prefers-reduced-motion in browser", () => {
      // Mock window.matchMedia
      const mockMatchMedia = jest.fn().mockReturnValue({
        matches: true,
      });
      Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: mockMatchMedia,
      });

      expect(shouldReduceMotion()).toBe(true);
      expect(mockMatchMedia).toHaveBeenCalledWith("(prefers-reduced-motion: reduce)");
    });
  });

  describe("getAccessibleVariant", () => {
    it("should return reduced variant when reduced motion is preferred", () => {
      // Mock shouldReduceMotion to return true
      const mockMatchMedia = jest.fn().mockReturnValue({
        matches: true,
      });
      Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: mockMatchMedia,
      });

      const normalVariant = { initial: { scale: 0 }, animate: { scale: 1 } };
      const reducedVariant = { initial: { opacity: 0 }, animate: { opacity: 1 } };

      const result = getAccessibleVariant(normalVariant, reducedVariant);
      expect(result).toBe(reducedVariant);
    });

    it("should return normal variant when reduced motion is not preferred", () => {
      // Mock shouldReduceMotion to return false
      const mockMatchMedia = jest.fn().mockReturnValue({
        matches: false,
      });
      Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: mockMatchMedia,
      });

      const normalVariant = { initial: { scale: 0 }, animate: { scale: 1 } };
      const reducedVariant = { initial: { opacity: 0 }, animate: { opacity: 1 } };

      const result = getAccessibleVariant(normalVariant, reducedVariant);
      expect(result).toBe(normalVariant);
    });
  });

  describe("Performance Requirements", () => {
    it("should meet 50ms hover response time requirement (6.4, 6.5)", () => {
      const buttonHoverDuration = interactionVariants.buttonHover.hover.transition.duration * 1000;
      const iconHoverDuration = interactionVariants.iconHover.hover.transition.duration * 1000;

      expect(buttonHoverDuration).toBeLessThanOrEqual(50);
      expect(iconHoverDuration).toBeLessThanOrEqual(50);
    });

    it("should meet 100ms feedback requirement (13.5)", () => {
      expect(feedbackConfig.timing.fast).toBeLessThanOrEqual(100);
    });

    it("should meet 300ms animation completion requirement (6.7)", () => {
      expect(feedbackConfig.timing.normal).toBeLessThanOrEqual(300);
    });
  });
});
