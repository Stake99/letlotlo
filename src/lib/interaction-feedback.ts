/**
 * Interaction Feedback System
 * Provides visual feedback for user interactions within 100ms
 * Requirements: 13.5, 6.4, 6.5
 */

import { Variants } from "framer-motion";

/**
 * Fast hover animations that respond within 50ms
 * Requirement 6.4: Button hover effects within 50ms
 * Requirement 6.5: Icon hover effects within 50ms
 */
export const interactionVariants = {
  // Button hover with lift effect (50ms response)
  buttonHover: {
    initial: { y: 0, scale: 1 },
    hover: {
      y: -4,
      scale: 1.02,
      transition: {
        duration: 0.05, // 50ms
        ease: [0.4, 0, 0.2, 1],
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.05,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  } as Variants,

  // Icon hover with bounce effect (50ms response)
  iconHover: {
    initial: { y: 0, scale: 1 },
    hover: {
      y: -2,
      scale: 1.1,
      transition: {
        duration: 0.05, // 50ms
        type: "spring",
        stiffness: 500,
        damping: 15,
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.05,
      },
    },
  } as Variants,

  // Generic interactive element hover
  interactiveHover: {
    initial: { scale: 1, opacity: 1 },
    hover: {
      scale: 1.05,
      opacity: 0.9,
      transition: {
        duration: 0.05, // 50ms
        ease: [0.4, 0, 0.2, 1],
      },
    },
    tap: {
      scale: 0.97,
      transition: {
        duration: 0.05,
      },
    },
  } as Variants,

  // Link hover effect
  linkHover: {
    initial: { x: 0 },
    hover: {
      x: 4,
      transition: {
        duration: 0.05, // 50ms
        ease: [0.4, 0, 0.2, 1],
      },
    },
  } as Variants,

  // Card hover with 3D lift
  cardHover: {
    initial: { y: 0, scale: 1, rotateX: 0, rotateY: 0 },
    hover: {
      y: -8,
      scale: 1.02,
      rotateX: -5,
      rotateY: 5,
      transition: {
        duration: 0.15,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  } as Variants,
};

/**
 * Loading state variants for form submissions and async operations
 * Requirement 13.5: Visual feedback within 100ms
 */
export const loadingVariants = {
  // Spinner animation
  spinner: {
    animate: {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      },
    },
  } as Variants,

  // Pulse animation for loading states
  pulse: {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  } as Variants,

  // Dots animation for loading
  dots: {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  } as Variants,

  // Skeleton loading shimmer
  shimmer: {
    animate: {
      backgroundPosition: ["200% 0", "-200% 0"],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      },
    },
  } as Variants,
};

/**
 * Focus state variants for keyboard navigation
 * Requirement 15.4: Visible focus indicators
 */
export const focusVariants = {
  // Standard focus ring
  focusRing: {
    initial: { boxShadow: "0 0 0 0 rgba(79, 70, 229, 0)" },
    focus: {
      boxShadow: "0 0 0 3px rgba(79, 70, 229, 0.5)",
      transition: {
        duration: 0.1,
        ease: "easeOut",
      },
    },
  } as Variants,

  // Glow focus effect
  focusGlow: {
    initial: { boxShadow: "0 0 0 rgba(79, 70, 229, 0)" },
    focus: {
      boxShadow: "0 0 20px rgba(79, 70, 229, 0.4)",
      transition: {
        duration: 0.1,
        ease: "easeOut",
      },
    },
  } as Variants,
};

/**
 * Success/Error feedback variants
 */
export const feedbackVariants = {
  // Success animation
  success: {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: [0, 1.2, 1],
      opacity: [0, 1, 1],
      transition: {
        duration: 0.4,
        times: [0, 0.6, 1],
        ease: "easeOut",
      },
    },
  } as Variants,

  // Error shake animation
  error: {
    initial: { x: 0 },
    animate: {
      x: [-10, 10, -10, 10, 0],
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  } as Variants,

  // Warning pulse
  warning: {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 0.5,
        repeat: 3,
        ease: "easeInOut",
      },
    },
  } as Variants,
};

/**
 * Utility function to create custom hover variants
 */
export const createHoverVariant = (
  y: number = -4,
  scale: number = 1.02,
  duration: number = 0.05
): Variants => ({
  initial: { y: 0, scale: 1 },
  hover: {
    y,
    scale,
    transition: {
      duration,
      ease: [0.4, 0, 0.2, 1],
    },
  },
});

/**
 * Utility function to create custom tap variants
 */
export const createTapVariant = (
  scale: number = 0.98,
  duration: number = 0.05
): Variants => ({
  initial: { scale: 1 },
  tap: {
    scale,
    transition: {
      duration,
      ease: [0.4, 0, 0.2, 1],
    },
  },
});

/**
 * Performance-optimized motion props for interactive elements
 */
export const interactionMotionProps = {
  // GPU-accelerated transforms
  style: {
    willChange: "transform",
    backfaceVisibility: "hidden" as const,
  },
  // Fast transitions
  transition: {
    duration: 0.05,
    ease: [0.4, 0, 0.2, 1],
  },
};

/**
 * Loading state manager hook
 */
export interface LoadingState {
  isLoading: boolean;
  message?: string;
  progress?: number;
}

/**
 * Interaction feedback configuration
 */
export const feedbackConfig = {
  // Timing thresholds
  timing: {
    immediate: 50, // 50ms for hover effects (Requirements 6.4, 6.5)
    fast: 100, // 100ms for general feedback (Requirement 13.5)
    normal: 300, // 300ms for animations (Requirement 6.7)
  },
  
  // Haptic feedback (for supported devices)
  haptic: {
    light: { duration: 10 },
    medium: { duration: 20 },
    heavy: { duration: 30 },
  },
  
  // Visual feedback colors
  colors: {
    success: "#10b981",
    error: "#ef4444",
    warning: "#f59e0b",
    info: "#3b82f6",
    loading: "#6366f1",
  },
};

/**
 * Utility to check if an element should have reduced motion
 */
export const shouldReduceMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/**
 * Get appropriate animation variant based on reduced motion preference
 */
export const getAccessibleVariant = (
  normalVariant: Variants,
  reducedVariant: Variants
): Variants => {
  return shouldReduceMotion() ? reducedVariant : normalVariant;
};
