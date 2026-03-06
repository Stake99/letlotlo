/**
 * Responsive Typography System for Letlotlo International
 * Mobile-first responsive typography with proper color hierarchy and accessibility
 */

import { theme } from './theme';
import { cn } from './theme-utils';

/**
 * Responsive typography scale configuration
 * Mobile-first approach with fluid scaling
 */
export const typographyScale = {
  // Display headings - for hero sections and major headings
  display: {
    '2xl': {
      mobile: { fontSize: '3rem', lineHeight: '1.1', letterSpacing: '-0.025em' }, // 48px
      tablet: { fontSize: '4.5rem', lineHeight: '1.1', letterSpacing: '-0.025em' }, // 72px
      desktop: { fontSize: '6rem', lineHeight: '1.1', letterSpacing: '-0.025em' }, // 96px
    },
    xl: {
      mobile: { fontSize: '2.25rem', lineHeight: '1.2', letterSpacing: '-0.025em' }, // 36px
      tablet: { fontSize: '3.75rem', lineHeight: '1.1', letterSpacing: '-0.025em' }, // 60px
      desktop: { fontSize: '4.5rem', lineHeight: '1.1', letterSpacing: '-0.025em' }, // 72px
    },
    lg: {
      mobile: { fontSize: '1.875rem', lineHeight: '1.2', letterSpacing: '-0.025em' }, // 30px
      tablet: { fontSize: '3rem', lineHeight: '1.2', letterSpacing: '-0.025em' }, // 48px
      desktop: { fontSize: '3.75rem', lineHeight: '1.2', letterSpacing: '-0.025em' }, // 60px
    },
  },

  // Standard headings - for section titles and content hierarchy
  heading: {
    h1: {
      mobile: { fontSize: '1.875rem', lineHeight: '1.25', letterSpacing: '-0.025em' }, // 30px
      tablet: { fontSize: '2.25rem', lineHeight: '1.25', letterSpacing: '-0.025em' }, // 36px
      desktop: { fontSize: '3rem', lineHeight: '1.25', letterSpacing: '-0.025em' }, // 48px
    },
    h2: {
      mobile: { fontSize: '1.5rem', lineHeight: '1.3', letterSpacing: '-0.025em' }, // 24px
      tablet: { fontSize: '1.875rem', lineHeight: '1.3', letterSpacing: '-0.025em' }, // 30px
      desktop: { fontSize: '2.25rem', lineHeight: '1.3', letterSpacing: '-0.025em' }, // 36px
    },
    h3: {
      mobile: { fontSize: '1.25rem', lineHeight: '1.35', letterSpacing: '0em' }, // 20px
      tablet: { fontSize: '1.5rem', lineHeight: '1.35', letterSpacing: '0em' }, // 24px
      desktop: { fontSize: '1.875rem', lineHeight: '1.35', letterSpacing: '0em' }, // 30px
    },
    h4: {
      mobile: { fontSize: '1.125rem', lineHeight: '1.4', letterSpacing: '0em' }, // 18px
      tablet: { fontSize: '1.25rem', lineHeight: '1.4', letterSpacing: '0em' }, // 20px
      desktop: { fontSize: '1.5rem', lineHeight: '1.4', letterSpacing: '0em' }, // 24px
    },
    h5: {
      mobile: { fontSize: '1rem', lineHeight: '1.4', letterSpacing: '0em' }, // 16px
      tablet: { fontSize: '1.125rem', lineHeight: '1.4', letterSpacing: '0em' }, // 18px
      desktop: { fontSize: '1.25rem', lineHeight: '1.4', letterSpacing: '0em' }, // 20px
    },
    h6: {
      mobile: { fontSize: '0.875rem', lineHeight: '1.45', letterSpacing: '0.025em' }, // 14px
      tablet: { fontSize: '1rem', lineHeight: '1.45', letterSpacing: '0.025em' }, // 16px
      desktop: { fontSize: '1.125rem', lineHeight: '1.45', letterSpacing: '0.025em' }, // 18px
    },
  },

  // Body text - for paragraphs and content
  body: {
    xl: {
      mobile: { fontSize: '1.125rem', lineHeight: '1.6', letterSpacing: '0em' }, // 18px
      tablet: { fontSize: '1.25rem', lineHeight: '1.6', letterSpacing: '0em' }, // 20px
      desktop: { fontSize: '1.25rem', lineHeight: '1.6', letterSpacing: '0em' }, // 20px
    },
    lg: {
      mobile: { fontSize: '1rem', lineHeight: '1.6', letterSpacing: '0em' }, // 16px
      tablet: { fontSize: '1.125rem', lineHeight: '1.6', letterSpacing: '0em' }, // 18px
      desktop: { fontSize: '1.125rem', lineHeight: '1.6', letterSpacing: '0em' }, // 18px
    },
    base: {
      mobile: { fontSize: '0.875rem', lineHeight: '1.6', letterSpacing: '0em' }, // 14px
      tablet: { fontSize: '1rem', lineHeight: '1.6', letterSpacing: '0em' }, // 16px
      desktop: { fontSize: '1rem', lineHeight: '1.6', letterSpacing: '0em' }, // 16px
    },
    sm: {
      mobile: { fontSize: '0.75rem', lineHeight: '1.5', letterSpacing: '0.025em' }, // 12px
      tablet: { fontSize: '0.875rem', lineHeight: '1.5', letterSpacing: '0.025em' }, // 14px
      desktop: { fontSize: '0.875rem', lineHeight: '1.5', letterSpacing: '0.025em' }, // 14px
    },
  },

  // Caption and small text
  caption: {
    base: {
      mobile: { fontSize: '0.75rem', lineHeight: '1.4', letterSpacing: '0.025em' }, // 12px
      tablet: { fontSize: '0.875rem', lineHeight: '1.4', letterSpacing: '0.025em' }, // 14px
      desktop: { fontSize: '0.875rem', lineHeight: '1.4', letterSpacing: '0.025em' }, // 14px
    },
    sm: {
      mobile: { fontSize: '0.625rem', lineHeight: '1.4', letterSpacing: '0.05em' }, // 10px
      tablet: { fontSize: '0.75rem', lineHeight: '1.4', letterSpacing: '0.05em' }, // 12px
      desktop: { fontSize: '0.75rem', lineHeight: '1.4', letterSpacing: '0.05em' }, // 12px
    },
  },
} as const;

/**
 * Text color hierarchy for proper contrast and accessibility
 */
export const textColors = {
  // Primary text colors
  primary: {
    default: 'text-neutral-900', // Highest contrast for main content
    light: 'text-neutral-800',   // Slightly lighter for less emphasis
  },
  
  // Secondary text colors
  secondary: {
    default: 'text-neutral-600', // Medium contrast for supporting text
    light: 'text-neutral-500',   // Lower contrast for subtle text
  },
  
  // Muted text colors
  muted: {
    default: 'text-neutral-400', // Low contrast for captions and labels
    light: 'text-neutral-300',   // Very low contrast for placeholders
  },
  
  // Inverse text colors (for dark backgrounds)
  inverse: {
    primary: 'text-white',       // High contrast on dark backgrounds
    secondary: 'text-neutral-200', // Medium contrast on dark backgrounds
    muted: 'text-neutral-400',   // Low contrast on dark backgrounds
  },
  
  // Brand colors for emphasis
  brand: {
    primary: 'text-primary-600',     // Main brand color
    secondary: 'text-secondary-600', // Secondary brand color
    accent: 'text-accent-600',       // Accent color for highlights
  },
  
  // Semantic colors
  semantic: {
    success: 'text-success-600',
    warning: 'text-warning-600',
    error: 'text-error-600',
    info: 'text-info-600',
  },
  
  // Gradient text colors
  gradient: {
    primary: 'bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent',
    secondary: 'bg-gradient-to-r from-secondary-600 to-secondary-400 bg-clip-text text-transparent',
    accent: 'bg-gradient-to-r from-accent-600 to-accent-400 bg-clip-text text-transparent',
    hero: 'bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 bg-clip-text text-transparent',
    rainbow: 'bg-gradient-to-r from-primary-500 via-secondary-500 via-accent-500 to-success-500 bg-clip-text text-transparent',
  },
} as const;

/**
 * Responsive typography utility classes
 */
export const typography = {
  // Display headings
  display: {
    '2xl': cn(
      'font-bold font-heading',
      'text-3xl leading-none tracking-tight', // mobile: 48px
      'md:text-7xl md:leading-none md:tracking-tight', // tablet: 72px
      'lg:text-8xl lg:leading-none lg:tracking-tight' // desktop: 96px
    ),
    xl: cn(
      'font-bold font-heading',
      'text-4xl leading-tight tracking-tight', // mobile: 36px
      'md:text-6xl md:leading-none md:tracking-tight', // tablet: 60px
      'lg:text-7xl lg:leading-none lg:tracking-tight' // desktop: 72px
    ),
    lg: cn(
      'font-bold font-heading',
      'text-3xl leading-tight tracking-tight', // mobile: 30px
      'md:text-5xl md:leading-tight md:tracking-tight', // tablet: 48px
      'lg:text-6xl lg:leading-tight lg:tracking-tight' // desktop: 60px
    ),
  },

  // Standard headings
  heading: {
    h1: cn(
      'font-bold font-heading',
      'text-3xl leading-tight tracking-tight', // mobile: 30px
      'md:text-4xl md:leading-tight md:tracking-tight', // tablet: 36px
      'lg:text-5xl lg:leading-tight lg:tracking-tight' // desktop: 48px
    ),
    h2: cn(
      'font-semibold font-heading',
      'text-2xl leading-snug tracking-tight', // mobile: 24px
      'md:text-3xl md:leading-snug md:tracking-tight', // tablet: 30px
      'lg:text-4xl lg:leading-snug lg:tracking-tight' // desktop: 36px
    ),
    h3: cn(
      'font-semibold font-heading',
      'text-xl leading-snug', // mobile: 20px
      'md:text-2xl md:leading-snug', // tablet: 24px
      'lg:text-3xl lg:leading-snug' // desktop: 30px
    ),
    h4: cn(
      'font-medium font-heading',
      'text-lg leading-normal', // mobile: 18px
      'md:text-xl md:leading-normal', // tablet: 20px
      'lg:text-2xl lg:leading-normal' // desktop: 24px
    ),
    h5: cn(
      'font-medium font-heading',
      'text-base leading-normal', // mobile: 16px
      'md:text-lg md:leading-normal', // tablet: 18px
      'lg:text-xl lg:leading-normal' // desktop: 20px
    ),
    h6: cn(
      'font-medium font-heading',
      'text-sm leading-relaxed tracking-wide', // mobile: 14px
      'md:text-base md:leading-relaxed md:tracking-wide', // tablet: 16px
      'lg:text-lg lg:leading-relaxed lg:tracking-wide' // desktop: 18px
    ),
  },

  // Body text
  body: {
    xl: cn(
      'font-normal',
      'text-lg leading-relaxed', // mobile: 18px
      'md:text-xl md:leading-relaxed', // tablet: 20px
      'lg:text-xl lg:leading-relaxed' // desktop: 20px
    ),
    lg: cn(
      'font-normal',
      'text-base leading-relaxed', // mobile: 16px
      'md:text-lg md:leading-relaxed', // tablet: 18px
      'lg:text-lg lg:leading-relaxed' // desktop: 18px
    ),
    base: cn(
      'font-normal',
      'text-sm leading-relaxed', // mobile: 14px
      'md:text-base md:leading-relaxed', // tablet: 16px
      'lg:text-base lg:leading-relaxed' // desktop: 16px
    ),
    sm: cn(
      'font-normal',
      'text-xs leading-normal tracking-wide', // mobile: 12px
      'md:text-sm md:leading-normal md:tracking-wide', // tablet: 14px
      'lg:text-sm lg:leading-normal lg:tracking-wide' // desktop: 14px
    ),
  },

  // Caption text
  caption: {
    base: cn(
      'font-normal',
      'text-xs leading-normal tracking-wide', // mobile: 12px
      'md:text-sm md:leading-normal md:tracking-wide', // tablet: 14px
      'lg:text-sm lg:leading-normal lg:tracking-wide' // desktop: 14px
    ),
    sm: cn(
      'font-normal',
      'text-xs leading-normal tracking-wider', // mobile: 10px (using xs as minimum)
      'md:text-xs md:leading-normal md:tracking-wider', // tablet: 12px
      'lg:text-xs lg:leading-normal lg:tracking-wider' // desktop: 12px
    ),
  },
} as const;

/**
 * Typography component variants with color combinations
 */
export const typographyVariants = {
  // Hero text variants
  hero: {
    title: cn(typography.display['2xl'], textColors.gradient.hero),
    subtitle: cn(typography.body.xl, textColors.secondary.default),
    description: cn(typography.body.lg, textColors.secondary.light),
  },

  // Section text variants
  section: {
    title: cn(typography.heading.h2, textColors.primary.default),
    subtitle: cn(typography.body.lg, textColors.secondary.default),
    description: cn(typography.body.base, textColors.secondary.light),
  },

  // Card text variants
  card: {
    title: cn(typography.heading.h4, textColors.primary.default),
    subtitle: cn(typography.body.sm, textColors.secondary.default),
    description: cn(typography.body.base, textColors.secondary.light),
    caption: cn(typography.caption.base, textColors.muted.default),
  },

  // Button text variants
  button: {
    primary: cn('font-semibold text-sm md:text-base', textColors.inverse.primary),
    secondary: cn('font-medium text-sm md:text-base', textColors.brand.primary),
    ghost: cn('font-medium text-sm md:text-base', textColors.brand.primary),
  },

  // Navigation text variants
  nav: {
    link: cn('font-medium text-sm md:text-base', textColors.primary.light),
    active: cn('font-semibold text-sm md:text-base', textColors.brand.primary),
    mobile: cn('font-medium text-base', textColors.primary.default),
  },

  // Form text variants
  form: {
    label: cn('font-medium text-sm', textColors.primary.default),
    input: cn('font-normal text-base', textColors.primary.default),
    placeholder: cn('font-normal text-base', textColors.muted.light),
    error: cn('font-medium text-sm', textColors.semantic.error),
    help: cn('font-normal text-sm', textColors.secondary.light),
  },
} as const;

/**
 * Utility function to generate responsive typography styles
 */
export const createResponsiveTypography = (
  category: keyof typeof typographyScale,
  variant: string,
  colorClass?: string
) => {
  const categoryScale = typographyScale[category];
  if (!categoryScale) return '';
  
  const scale = (categoryScale as any)[variant];
  if (!scale) return '';

  const baseClasses = [
    'font-heading',
    colorClass || textColors.primary.default,
  ];

  // Add responsive classes based on scale
  if (scale.mobile) {
    baseClasses.push(`text-[${scale.mobile.fontSize}]`);
    baseClasses.push(`leading-[${scale.mobile.lineHeight}]`);
    if (scale.mobile.letterSpacing !== '0em') {
      baseClasses.push(`tracking-[${scale.mobile.letterSpacing}]`);
    }
  }

  if (scale.tablet) {
    baseClasses.push(`md:text-[${scale.tablet.fontSize}]`);
    baseClasses.push(`md:leading-[${scale.tablet.lineHeight}]`);
    if (scale.tablet.letterSpacing !== '0em') {
      baseClasses.push(`md:tracking-[${scale.tablet.letterSpacing}]`);
    }
  }

  if (scale.desktop) {
    baseClasses.push(`lg:text-[${scale.desktop.fontSize}]`);
    baseClasses.push(`lg:leading-[${scale.desktop.lineHeight}]`);
    if (scale.desktop.letterSpacing !== '0em') {
      baseClasses.push(`lg:tracking-[${scale.desktop.letterSpacing}]`);
    }
  }

  return cn(...baseClasses);
};

/**
 * Accessibility-focused typography utilities
 */
export const accessibleTypography = {
  // High contrast variants for better readability
  highContrast: {
    title: cn(typography.heading.h2, 'text-neutral-900'),
    body: cn(typography.body.base, 'text-neutral-800'),
    caption: cn(typography.caption.base, 'text-neutral-700'),
  },

  // Large text variants for better accessibility
  large: {
    title: cn(typography.heading.h1, textColors.primary.default),
    body: cn(typography.body.xl, textColors.primary.default),
    caption: cn(typography.body.sm, textColors.secondary.default),
  },

  // Screen reader optimized variants
  screenReader: {
    only: 'sr-only',
    focusable: 'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-white focus:text-black',
  },
};

/**
 * Export all typography utilities
 */
export default {
  typography,
  typographyVariants,
  textColors,
  typographyScale,
  createResponsiveTypography,
  accessibleTypography,
};