/**
 * Theme utility functions for Letlotlo International website
 * Provides helper functions for working with the cartoon-styled theme system
 */

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names with proper merging of Tailwind classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Cartoon-style button variants
 */
export const buttonVariants = {
  primary: cn(
    'bg-gradient-to-r from-primary-600 to-primary-500',
    'text-white font-semibold',
    'px-6 py-3 rounded-xl',
    'shadow-primary hover:shadow-primary/60',
    'transform transition-all duration-200',
    'hover:scale-105 hover:-translate-y-1',
    'active:scale-95 active:translate-y-0',
    'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
  ),
  secondary: cn(
    'bg-gradient-to-r from-secondary-600 to-secondary-500',
    'text-white font-semibold',
    'px-6 py-3 rounded-xl',
    'shadow-secondary hover:shadow-secondary/60',
    'transform transition-all duration-200',
    'hover:scale-105 hover:-translate-y-1',
    'active:scale-95 active:translate-y-0',
    'focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2'
  ),
  accent: cn(
    'bg-gradient-to-r from-accent-600 to-accent-500',
    'text-white font-semibold',
    'px-6 py-3 rounded-xl',
    'shadow-accent hover:shadow-accent/60',
    'transform transition-all duration-200',
    'hover:scale-105 hover:-translate-y-1',
    'active:scale-95 active:translate-y-0',
    'focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2'
  ),
  outline: cn(
    'border-2 border-primary-500 text-primary-600',
    'bg-white hover:bg-primary-50',
    'font-semibold px-6 py-3 rounded-xl',
    'transform transition-all duration-200',
    'hover:scale-105 hover:-translate-y-1',
    'active:scale-95 active:translate-y-0',
    'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
  ),
  ghost: cn(
    'text-primary-600 hover:text-primary-700',
    'hover:bg-primary-50',
    'font-semibold px-6 py-3 rounded-xl',
    'transform transition-all duration-200',
    'hover:scale-105',
    'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
  ),
};

/**
 * Cartoon-style card variants
 */
export const cardVariants = {
  default: cn(
    'bg-white border border-neutral-200',
    'rounded-2xl shadow-lg',
    'transform transition-all duration-300',
    'hover:shadow-xl hover:-translate-y-2'
  ),
  elevated: cn(
    'bg-white border border-neutral-200',
    'rounded-3xl shadow-xl',
    'transform transition-all duration-300',
    'hover:shadow-2xl hover:-translate-y-4'
  ),
  gradient: cn(
    'bg-gradient-to-br from-white to-neutral-50',
    'border border-neutral-200',
    'rounded-2xl shadow-lg',
    'transform transition-all duration-300',
    'hover:shadow-xl hover:-translate-y-2'
  ),
  '3d': cn(
    'bg-gradient-to-br from-white via-neutral-50 to-neutral-100',
    'border border-neutral-200',
    'rounded-2xl shadow-3d-md',
    'transform transition-all duration-300 preserve-3d',
    'hover:shadow-3d-xl hover:-translate-y-4 hover:rotate-x-5'
  ),
};

/**
 * Text gradient variants
 */
export const textGradientVariants = {
  primary: cn('bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent'),
  secondary: cn('bg-gradient-to-r from-secondary-600 to-secondary-400 bg-clip-text text-transparent'),
  accent: cn('bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent'),
  hero: cn('bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 bg-clip-text text-transparent'),
  rainbow: cn('bg-gradient-to-r from-primary-500 via-secondary-500 via-accent-500 to-success-500 bg-clip-text text-transparent'),
};

/**
 * Animation utility classes
 */
export const animationVariants = {
  float: 'animate-float',
  bounce: 'animate-bounce-subtle',
  wiggle: 'animate-wiggle',
  glow: 'animate-pulse-glow',
  slideUp: 'animate-slide-up',
  slideInLeft: 'animate-slide-in-left',
  slideInRight: 'animate-slide-in-right',
  fadeIn: 'animate-fade-in',
  scaleIn: 'animate-scale-in',
};

/**
 * Hover effect utility classes
 */
export const hoverVariants = {
  lift: 'hover-lift',
  bounce: 'hover-bounce',
  glow: 'hover-glow',
};

/**
 * 3D effect utility classes
 */
export const threeDVariants = {
  button: 'btn-3d',
  card: 'card-3d',
  preserve: 'preserve-3d',
  perspective: 'perspective-1000',
  gpu: 'transform-gpu',
};

/**
 * Glass morphism utility classes
 */
export const glassVariants = {
  light: 'glass',
  dark: 'glass-dark',
};

/**
 * Border variants for cartoon styling
 */
export const borderVariants = {
  cartoon: 'border-cartoon',
  rounded: cn('border-2 border-primary-200 rounded-2xl'),
  gradient: cn('border-2 border-transparent bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-border'),
};

/**
 * Responsive typography utilities
 */
export const typographyVariants = {
  h1: cn('text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'),
  h2: cn('text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'),
  h3: cn('text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug'),
  h4: cn('text-xl md:text-2xl lg:text-3xl font-semibold leading-snug'),
  h5: cn('text-lg md:text-xl lg:text-2xl font-medium leading-normal'),
  h6: cn('text-base md:text-lg lg:text-xl font-medium leading-normal'),
  body: cn('text-base md:text-lg leading-relaxed'),
  small: cn('text-sm md:text-base leading-normal'),
  caption: cn('text-xs md:text-sm leading-normal'),
};

/**
 * Spacing utilities for consistent layout
 */
export const spacingVariants = {
  section: cn('py-16 md:py-20 lg:py-24'),
  container: cn('px-4 md:px-6 lg:px-8'),
  content: cn('max-w-7xl mx-auto'),
  narrow: cn('max-w-4xl mx-auto'),
  wide: cn('max-w-screen-2xl mx-auto'),
};

/**
 * Grid utilities for responsive layouts
 */
export const gridVariants = {
  auto: cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'),
  cards: cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'),
  features: cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'),
  hero: cn('grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'),
  split: cn('grid grid-cols-1 lg:grid-cols-2 gap-8'),
};

/**
 * Utility function to generate CSS custom properties
 */
export const cssVar = (property: string, value?: string) => {
  if (value) {
    return { [`--${property}`]: value };
  }
  return `var(--${property})`;
};

/**
 * Utility function to create responsive breakpoint classes
 */
export const responsive = (base: string, variants: Record<string, string>) => {
  const classes = [base];
  
  Object.entries(variants).forEach(([breakpoint, variant]) => {
    classes.push(`${breakpoint}:${variant}`);
  });
  
  return cn(...classes);
};

/**
 * Color utility functions
 */
export const colorUtils = {
  primary: (shade: number = 500) => `text-primary-${shade}`,
  secondary: (shade: number = 500) => `text-secondary-${shade}`,
  accent: (shade: number = 500) => `text-accent-${shade}`,
  bg: {
    primary: (shade: number = 500) => `bg-primary-${shade}`,
    secondary: (shade: number = 500) => `bg-secondary-${shade}`,
    accent: (shade: number = 500) => `bg-accent-${shade}`,
  },
  border: {
    primary: (shade: number = 500) => `border-primary-${shade}`,
    secondary: (shade: number = 500) => `border-secondary-${shade}`,
    accent: (shade: number = 500) => `border-accent-${shade}`,
  },
};

/**
 * Animation timing utilities
 */
export const timing = {
  fast: 'duration-150',
  normal: 'duration-300',
  slow: 'duration-500',
  bounce: 'ease-bounce',
};

/**
 * Focus utilities for accessibility
 */
export const focusVariants = {
  default: cn('focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'),
  secondary: cn('focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2'),
  accent: cn('focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2'),
  visible: cn('focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2'),
};

export default {
  cn,
  buttonVariants,
  cardVariants,
  textGradientVariants,
  animationVariants,
  hoverVariants,
  threeDVariants,
  glassVariants,
  borderVariants,
  typographyVariants,
  spacingVariants,
  gridVariants,
  cssVar,
  responsive,
  colorUtils,
  timing,
  focusVariants,
};