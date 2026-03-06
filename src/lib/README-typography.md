# Responsive Typography System

## Overview

The Letlotlo International typography system provides a comprehensive, mobile-first responsive typography solution with proper color hierarchy and accessibility compliance. The system is built on top of Tailwind CSS and follows WCAG 2.1 AA guidelines for color contrast and readability.

## Features

- **Mobile-First Responsive Design**: Typography scales smoothly from mobile (320px) to desktop (1024px+)
- **Accessibility Compliant**: WCAG 2.1 AA color contrast ratios and screen reader support
- **Cartoon-Styled Aesthetic**: Playful yet professional typography that matches the brand
- **Comprehensive Color Hierarchy**: Primary, secondary, muted, brand, and semantic color variants
- **High Contrast Mode Support**: Automatic adaptation for users with contrast preferences
- **Reduced Motion Support**: Respects user preferences for reduced motion

## Typography Scale

### Display Headings
For hero sections and major headings:
- **Display 2XL**: Mobile 48px → Tablet 72px → Desktop 96px
- **Display XL**: Mobile 36px → Tablet 60px → Desktop 72px  
- **Display Large**: Mobile 30px → Tablet 48px → Desktop 60px

### Standard Headings
For section titles and content hierarchy:
- **H1**: Mobile 30px → Tablet 36px → Desktop 48px
- **H2**: Mobile 24px → Tablet 30px → Desktop 36px
- **H3**: Mobile 20px → Tablet 24px → Desktop 30px
- **H4**: Mobile 18px → Tablet 20px → Desktop 24px
- **H5**: Mobile 16px → Tablet 18px → Desktop 20px
- **H6**: Mobile 14px → Tablet 16px → Desktop 18px

### Body Text
For paragraphs and content:
- **Body XL**: Mobile 18px → Tablet 20px → Desktop 20px
- **Body Large**: Mobile 16px → Tablet 18px → Desktop 18px
- **Body Base**: Mobile 14px → Tablet 16px → Desktop 16px
- **Body Small**: Mobile 12px → Tablet 14px → Desktop 14px

### Caption Text
For captions and metadata:
- **Caption Base**: Mobile 12px → Tablet 14px → Desktop 14px
- **Caption Small**: Mobile 10px → Tablet 12px → Desktop 12px

## Color Hierarchy

### Primary Text Colors
- **Primary Default**: `text-neutral-900` - Highest contrast for main content
- **Primary Light**: `text-neutral-800` - Slightly lighter for less emphasis

### Secondary Text Colors
- **Secondary Default**: `text-neutral-600` - Medium contrast for supporting text
- **Secondary Light**: `text-neutral-500` - Lower contrast for subtle text

### Muted Text Colors
- **Muted Default**: `text-neutral-400` - Low contrast for captions and labels
- **Muted Light**: `text-neutral-300` - Very low contrast for placeholders

### Brand Colors
- **Brand Primary**: `text-primary-600` - Main brand color
- **Brand Secondary**: `text-secondary-600` - Secondary brand color
- **Brand Accent**: `text-accent-600` - Accent color for highlights

### Semantic Colors
- **Success**: `text-success-600` - For positive messages
- **Warning**: `text-warning-600` - For caution messages
- **Error**: `text-error-600` - For error messages
- **Info**: `text-info-600` - For information messages

### Gradient Text
- **Primary Gradient**: Primary to secondary brand colors
- **Secondary Gradient**: Secondary to accent colors
- **Hero Gradient**: Multi-color gradient for hero sections
- **Rainbow Gradient**: Full spectrum for special emphasis

## Usage Examples

### Basic Typography Classes

```tsx
import { typography, textColors } from '@/lib/typography';
import { cn } from '@/lib/theme-utils';

// Display heading with gradient
<h1 className={cn(typography.display['2xl'], textColors.gradient.hero)}>
  Hero Title
</h1>

// Section heading with primary color
<h2 className={cn(typography.heading.h2, textColors.primary.default)}>
  Section Title
</h2>

// Body text with secondary color
<p className={cn(typography.body.base, textColors.secondary.default)}>
  Body content text
</p>
```

### Typography Variants

```tsx
import { typographyVariants } from '@/lib/typography';

// Hero section
<div>
  <h1 className={typographyVariants.hero.title}>Hero Title</h1>
  <p className={typographyVariants.hero.subtitle}>Hero subtitle</p>
  <p className={typographyVariants.hero.description}>Hero description</p>
</div>

// Card content
<div>
  <h3 className={typographyVariants.card.title}>Card Title</h3>
  <p className={typographyVariants.card.description}>Card description</p>
  <span className={typographyVariants.card.caption}>Card caption</span>
</div>
```

### Custom Responsive Typography

```tsx
import { createResponsiveTypography, textColors } from '@/lib/typography';

// Create custom responsive typography
const customHeading = createResponsiveTypography(
  'heading', 
  'h3', 
  textColors.brand.primary
);

<h3 className={customHeading}>Custom Heading</h3>
```

## Accessibility Features

### High Contrast Mode
The system automatically adapts to high contrast preferences:

```tsx
import { accessibleTypography } from '@/lib/typography';

<h2 className={accessibleTypography.highContrast.title}>
  High Contrast Title
</h2>
```

### Large Text Mode
For users who need larger text:

```tsx
<p className={accessibleTypography.large.body}>
  Large body text for better accessibility
</p>
```

### Screen Reader Support
Screen reader optimized classes:

```tsx
// Hidden from visual users, available to screen readers
<span className={accessibleTypography.screenReader.only}>
  Screen reader only text
</span>

// Focusable for keyboard navigation
<span className={accessibleTypography.screenReader.focusable}>
  Skip to main content
</span>
```

## Responsive Breakpoints

The typography system uses these breakpoints:
- **Mobile**: 320px - 767px (base styles)
- **Tablet**: 768px - 1023px (md: prefix)
- **Desktop**: 1024px+ (lg: prefix)

## CSS Custom Properties

The system uses CSS custom properties for consistent theming:

```css
:root {
  --font-sans: 'Inter', 'Segoe UI', system-ui, sans-serif;
  --font-heading: 'Inter', 'Segoe UI', system-ui, sans-serif;
  --color-text-primary: #1e293b;
  --color-text-secondary: #64748b;
  --color-text-muted: #94a3b8;
}
```

## Performance Considerations

- **Font Loading**: Uses `font-display: swap` for optimal loading
- **CSS-in-JS**: Minimal runtime overhead with Tailwind classes
- **Tree Shaking**: Only used typography utilities are included in the bundle
- **Responsive Images**: Typography scales with container queries where supported

## Testing

Visit `/typography-test` to see the complete typography showcase with all variants, colors, and responsive behavior.

## Browser Support

- **Modern Browsers**: Full support for all features
- **Legacy Browsers**: Graceful degradation with fallback fonts
- **Screen Readers**: Full compatibility with NVDA, JAWS, and VoiceOver
- **High Contrast Mode**: Automatic adaptation in Windows and macOS

## Maintenance

The typography system is centralized in `/src/lib/typography.ts` for easy maintenance and updates. All typography-related utilities are exported from this single file to ensure consistency across the application.