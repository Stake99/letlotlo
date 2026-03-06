import { Variants, Transition, MotionProps } from "framer-motion";

/**
 * Animation variants for Framer Motion
 * These provide reusable animation configurations throughout the app
 * Optimized for performance with cartoon-styled aesthetic
 */

// Performance-optimized transition presets
export const transitions = {
  // Fast interactions (hover, click) - Requirements 6.4, 6.5: within 50ms
  fast: {
    duration: 0.05, // 50ms to meet requirements
    ease: [0.4, 0, 0.2, 1], // Custom cubic-bezier for snappy feel
  },
  // Standard UI animations
  smooth: {
    duration: 0.3,
    ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuart
  },
  // Bouncy cartoon-like animations
  bouncy: {
    type: "spring" as const,
    stiffness: 400,
    damping: 25,
    mass: 0.8,
  },
  // Gentle floating animations
  gentle: {
    duration: 0.6,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
  // Page transitions
  page: {
    duration: 0.4,
    ease: [0.22, 1, 0.36, 1], // easeOutExpo
  },
} as const;

// Fade animations with performance optimization
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: transitions.smooth,
  },
  exit: { 
    opacity: 0,
    transition: transitions.fast,
  },
};

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: transitions.smooth,
  },
  exit: { 
    opacity: 0, 
    y: 24,
    transition: transitions.fast,
  },
};

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -24 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: transitions.smooth,
  },
  exit: { 
    opacity: 0, 
    y: -24,
    transition: transitions.fast,
  },
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -24 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: transitions.smooth,
  },
  exit: { 
    opacity: 0, 
    x: -24,
    transition: transitions.fast,
  },
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 24 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: transitions.smooth,
  },
  exit: { 
    opacity: 0, 
    x: 24,
    transition: transitions.fast,
  },
};

// Scale animations with cartoon-like bounce
export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: transitions.bouncy,
  },
  exit: { 
    opacity: 0, 
    scale: 0.8,
    transition: transitions.fast,
  },
};

export const scaleUp: Variants = {
  initial: { scale: 1 },
  animate: { 
    scale: 1.05,
    transition: transitions.fast,
  },
  exit: { 
    scale: 1,
    transition: transitions.fast,
  },
};

// Pop animation for interactive elements
export const pop: Variants = {
  initial: { scale: 1 },
  animate: { 
    scale: [1, 1.1, 1],
    transition: {
      duration: 0.3,
      times: [0, 0.5, 1],
      ease: "easeInOut",
    },
  },
};

// Slide animations with smooth easing
export const slideInUp: Variants = {
  initial: { y: "100%", opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1,
    transition: transitions.smooth,
  },
  exit: { 
    y: "100%", 
    opacity: 0,
    transition: transitions.fast,
  },
};

export const slideInDown: Variants = {
  initial: { y: "-100%", opacity: 0 },
  animate: { 
    y: 0, 
    opacity: 1,
    transition: transitions.smooth,
  },
  exit: { 
    y: "-100%", 
    opacity: 0,
    transition: transitions.fast,
  },
};

export const slideInLeft: Variants = {
  initial: { x: "-100%", opacity: 0 },
  animate: { 
    x: 0, 
    opacity: 1,
    transition: transitions.smooth,
  },
  exit: { 
    x: "-100%", 
    opacity: 0,
    transition: transitions.fast,
  },
};

export const slideInRight: Variants = {
  initial: { x: "100%", opacity: 0 },
  animate: { 
    x: 0, 
    opacity: 1,
    transition: transitions.smooth,
  },
  exit: { 
    x: "100%", 
    opacity: 0,
    transition: transitions.fast,
  },
};

// Stagger animations for lists with optimized timing
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08, // Slightly faster for better UX
      delayChildren: 0.1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20, scale: 0.95 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: transitions.smooth,
  },
  exit: { 
    opacity: 0, 
    y: 20, 
    scale: 0.95,
    transition: transitions.fast,
  },
};

// Grid stagger for card layouts
export const gridStagger: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const gridItem: Variants = {
  initial: { opacity: 0, scale: 0.8, y: 40 },
  animate: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: transitions.bouncy,
  },
};

// Hover animations with performance optimization
export const hoverLift: Variants = {
  initial: { y: 0, scale: 1 },
  animate: { 
    y: -8, 
    scale: 1.02,
    transition: transitions.fast,
  },
};

export const hoverScale: Variants = {
  initial: { scale: 1 },
  animate: { 
    scale: 1.05,
    transition: transitions.fast,
  },
};

export const hoverRotate: Variants = {
  initial: { rotate: 0 },
  animate: { 
    rotate: 3,
    transition: transitions.fast,
  },
};

// 3D hover effect for cards
export const hover3D: Variants = {
  initial: {
    rotateX: 0,
    rotateY: 0,
    z: 0,
    scale: 1,
  },
  animate: {
    rotateX: -5,
    rotateY: 5,
    z: 50,
    scale: 1.02,
    transition: transitions.smooth,
  },
};

// Subtle glow effect for interactive elements
export const hoverGlow: Variants = {
  initial: { 
    boxShadow: "0 0 0 rgba(59, 130, 246, 0)",
  },
  animate: { 
    boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
    transition: transitions.fast,
  },
};

// Continuous animations with performance considerations
export const bounce: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-8, 0, -8],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

export const gentleBounce: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-4, 0, -4],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

// Floating animation with reduced motion support
export const float: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-12, 12, -12],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

export const gentleFloat: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-6, 6, -6],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

// Rotation animations
export const rotate: Variants = {
  initial: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

export const slowRotate: Variants = {
  initial: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: {
      duration: 30,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// Pulse animation for attention-grabbing elements
export const pulse: Variants = {
  initial: { scale: 1, opacity: 1 },
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Page transition animations
export const pageTransition: Variants = {
  initial: { opacity: 0, x: 24, scale: 0.98 },
  animate: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: transitions.page,
  },
  exit: { 
    opacity: 0, 
    x: -24, 
    scale: 0.98,
    transition: transitions.fast,
  },
};

// Smooth page slide transition
export const pageSlide: Variants = {
  initial: { x: "100%", opacity: 0 },
  animate: { 
    x: 0, 
    opacity: 1,
    transition: transitions.page,
  },
  exit: { 
    x: "-100%", 
    opacity: 0,
    transition: transitions.page,
  },
};

// Hero text animation with stagger
export const heroText: Variants = {
  initial: { opacity: 0, y: 60, scale: 0.95 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const heroSubtext: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Card animations with 3D effects
export const cardHover: Variants = {
  initial: {
    rotateX: 0,
    rotateY: 0,
    z: 0,
    scale: 1,
  },
  animate: {
    rotateX: -8,
    rotateY: 8,
    z: 60,
    scale: 1.03,
    transition: transitions.smooth,
  },
};

export const cardPress: Variants = {
  initial: { scale: 1 },
  animate: { 
    scale: 0.98,
    transition: transitions.fast,
  },
};

// Service card specific animation
export const serviceCardHover: Variants = {
  initial: {
    y: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  },
  animate: {
    y: -12,
    rotateX: -5,
    rotateY: 3,
    scale: 1.02,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    transition: transitions.smooth,
  },
};

// Button animations
export const buttonPress: Variants = {
  initial: { scale: 1 },
  animate: { 
    scale: 0.96,
    transition: transitions.fast,
  },
};

export const buttonHover: Variants = {
  initial: { 
    scale: 1,
    y: 0,
  },
  animate: { 
    scale: 1.05,
    y: -2,
    transition: transitions.fast,
  },
};

/**
 * Animation configuration presets with performance optimization
 */
export const animationConfig = {
  // Timing presets
  fast: { duration: 0.15 },
  normal: { duration: 0.3 },
  slow: { duration: 0.6 },
  
  // Spring configurations
  spring: { type: "spring" as const, stiffness: 300, damping: 30 },
  bouncySpring: { type: "spring" as const, stiffness: 400, damping: 25, mass: 0.8 },
  gentleSpring: { type: "spring" as const, stiffness: 200, damping: 35 },
  
  // Easing functions
  easeOut: { ease: [0.25, 0.46, 0.45, 0.94] },
  easeInOut: { ease: [0.25, 0.46, 0.45, 0.94] },
  easeIn: { ease: [0.55, 0.06, 0.68, 0.19] },
  
  // Performance optimized settings
  performant: {
    duration: 0.2,
    ease: "easeOut",
  },
} as const;

/**
 * Viewport animation configuration for scroll-triggered animations
 */
export const viewportConfig = {
  // Standard viewport settings
  default: {
    once: true,
    margin: "-100px",
    amount: 0.3,
  },
  
  // Early trigger for better UX
  early: {
    once: true,
    margin: "-50px",
    amount: 0.2,
  },
  
  // Late trigger for performance
  late: {
    once: true,
    margin: "-150px",
    amount: 0.5,
  },
  
  // Repeat animations
  repeat: {
    once: false,
    margin: "-100px",
    amount: 0.3,
  },
} as const;

/**
 * Reduced motion variants for accessibility
 */
export const reducedMotionVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  
  slideIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  
  scaleIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
} as const;

/**
 * Animation utility functions
 */

// Create stagger animation with custom timing
export const createStagger = (
  staggerDelay: number = 0.1,
  childDelay: number = 0
): Variants => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: childDelay,
    },
  },
  exit: {
    transition: {
      staggerChildren: staggerDelay * 0.5,
      staggerDirection: -1,
    },
  },
});

// Create hover animation with custom values
export const createHover = (
  y: number = -8,
  scale: number = 1.02,
  duration: number = 0.15
): Variants => ({
  initial: { y: 0, scale: 1 },
  animate: {
    y,
    scale,
    transition: { duration, ease: "easeOut" },
  },
});

// Create 3D hover effect with custom rotation
export const create3DHover = (
  rotateX: number = -8,
  rotateY: number = 8,
  z: number = 60,
  scale: number = 1.03
): Variants => ({
  initial: {
    rotateX: 0,
    rotateY: 0,
    z: 0,
    scale: 1,
  },
  animate: {
    rotateX,
    rotateY,
    z,
    scale,
    transition: transitions.smooth,
  },
});

// Create floating animation with custom amplitude and duration
export const createFloat = (
  amplitude: number = 12,
  duration: number = 4
): Variants => ({
  initial: { y: 0 },
  animate: {
    y: [-amplitude, amplitude, -amplitude],
    transition: {
      duration,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
});

/**
 * Performance optimization utilities
 */

// Motion props for performance optimization
export const performanceProps: MotionProps = {
  // Use transform instead of layout for better performance
  layout: false,
  
  // Optimize for animations
  style: {
    willChange: "transform, opacity",
  },
  
  // Reduce motion for accessibility
  transition: {
    duration: 0.2,
    ease: "easeOut",
  },
};

// GPU-accelerated animation props
export const gpuAccelerated: MotionProps = {
  style: {
    willChange: "transform",
    backfaceVisibility: "hidden",
    perspective: 1000,
  },
};

/**
 * Cartoon-styled animation presets
 */
export const cartoonAnimations = {
  // Exaggerated bounce for cartoon feel
  cartoonBounce: {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15,
        mass: 0.8,
      },
    },
  } as Variants,
  
  // Wobbly entrance
  wobble: {
    initial: { scale: 0, rotate: 0 },
    animate: {
      scale: 1,
      rotate: [0, -5, 5, -3, 3, 0],
      transition: {
        scale: { type: "spring", stiffness: 400, damping: 20 },
        rotate: { duration: 0.6, ease: "easeInOut" },
      },
    },
  } as Variants,
  
  // Elastic scale
  elastic: {
    initial: { scale: 0 },
    animate: {
      scale: [0, 1.2, 0.9, 1.1, 1],
      transition: {
        duration: 0.8,
        times: [0, 0.3, 0.5, 0.7, 1],
        ease: "easeInOut",
      },
    },
  } as Variants,
  
  // Playful rotation
  playfulRotate: {
    initial: { rotate: 0, scale: 1 },
    animate: {
      rotate: 360,
      scale: [1, 1.1, 1],
      transition: {
        rotate: { duration: 0.6, ease: "easeInOut" },
        scale: { duration: 0.3, ease: "easeInOut" },
      },
    },
  } as Variants,
} as const;