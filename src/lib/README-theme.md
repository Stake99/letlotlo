# Letlotlo International Theme System

A comprehensive cartoon-styled theme system built for the Letlotlo International website, featuring vibrant colors, 3D effects, smooth animations, and responsive design.

## Overview

The theme system provides:
- **Brand Colors**: Vibrant color palette with full shade scales
- **Typography**: Responsive typography system with Inter font
- **Animations**: Cartoon-style animations and hover effects
- **3D Effects**: CSS-based 3D transforms and shadows
- **Utilities**: Helper functions and CSS classes
- **Accessibility**: Reduced motion support and focus indicators

## Quick Start

### 1. Import Theme Utilities

```typescript
import { cn, buttonVariants, cardVariants, textGradientVariants } from '@/lib/theme-utils';
import { theme, getColor, getGradient } from '@/lib/theme';
```

### 2. Use Button Variants

```tsx
<button className={buttonVariants.primary}>
  Primary Button
</button>

<button className={buttonVariants.secondary}>
  Secondary Button
</button>

<button className={buttonVariants.outline}>
  Outline Button
</button>
```

### 3. Apply Card Styles

```tsx
<div className={cn(cardVariants.default, 'p-6')}>
  <h3>Card Title</h3>
  <p>Card content with hover effects</p>
</div>

<div className={cn(cardVariants['3d'], 'p-6')}>
  <h3>3D Card</h3>
  <p>Card with 3D transform effects</p>
</div>
```

### 4. Use Gradient Text

```tsx
<h1 className={cn('text-4xl font-bold', textGradientVariants.hero)}>
  Hero Title with Gradient
</h1>

<h2 className={cn('text-2xl font-semibold', textGradientVariants.primary)}>
  Primary Gradient Text
</h2>
```

## Color System

### Brand Colors

- **Primary**: `#4f46e5` (Vibrant Indigo) - Main brand color
- **Secondary**: `#ec4899` (Bright Pink) - Secondary elements
- **Accent**: `#f59e0b` (Warm Amber) - Highlights and CTAs
- **Success**: `#10b981` (Emerald Green) - Success states
- **Warning**: `#f59e0b` (Amber) - Warning states
- **Error**: `#ef4444` (Red) - Error states
- **Info**: `#3b82f6` (Blue) - Information

### Color Usage

```tsx
// Using color utilities
<div className={colorUtils.bg.primary(500)}>Primary Background</div>
<p className={colorUtils.primary(600)}>Primary Text</p>
<div className={colorUtils.border.accent(400)}>Accent Border</div>

// Using CSS custom properties
<div style={{ backgroundColor: cssVar('color-primary') }}>
  Custom Property Usage
</div>
```

### Color Scales

Each brand color includes a full scale from 50 (lightest) to 950 (darkest):

```tsx
// Light shades (50-400)
<div className="bg-primary-50">Very Light</div>
<div className="bg-primary-100">Light</div>
<div className="bg-primary-200">Lighter</div>

// Main color (500-600)
<div className="bg-primary-500">Main Color</div>
<div className="bg-primary-600">Slightly Darker</div>

// Dark shades (700-950)
<div className="bg-primary-700">Dark</div>
<div className="bg-primary-800">Darker</div>
<div className="bg-primary-900">Very Dark</div>
```

## Typography

### Font System

- **Primary Font**: Inter (sans-serif)
- **Heading Font**: Inter (sans-serif)
- **Monospace Font**: JetBrains Mono, Fira Code, Consolas

### Typography Variants

```tsx
// Responsive headings
<h1 className={typographyVariants.h1}>Main Heading</h1>
<h2 className={typographyVariants.h2}>Section Heading</h2>
<h3 className={typographyVariants.h3}>Subsection Heading</h3>

// Body text
<p className={typographyVariants.body}>Body text content</p>
<p className={typographyVariants.small}>Small text</p>
<p className={typographyVariants.caption}>Caption text</p>
```

### Font Sizes

```css
/* Available font sizes */
text-xs     /* 12px */
text-sm     /* 14px */
text-base   /* 16px */
text-lg     /* 18px */
text-xl     /* 20px */
text-2xl    /* 24px */
text-3xl    /* 30px */
text-4xl    /* 36px */
text-5xl    /* 48px */
text-6xl    /* 60px */
text-7xl    /* 72px */
text-8xl    /* 96px */
text-9xl    /* 128px */
```

## Animations

### Animation Classes

```tsx
// Floating animation
<div className={animationVariants.float}>Floating Element</div>

// Entrance animations
<div className={animationVariants.slideUp}>Slide Up</div>
<div className={animationVariants.fadeIn}>Fade In</div>
<div className={animationVariants.scaleIn}>Scale In</div>

// Hover effects
<div className="hover-lift">Lifts on hover</div>
<div className="hover-bounce">Bounces on hover</div>
<div className="hover-glow">Glows on hover</div>
```

### Custom Animations

```css
/* Available keyframe animations */
@keyframes float { /* Gentle floating motion */ }
@keyframes bounce-subtle { /* Subtle bounce effect */ }
@keyframes wiggle { /* Playful wiggle motion */ }
@keyframes pulse-glow { /* Pulsing glow effect */ }
@keyframes slide-up { /* Slide up entrance */ }
@keyframes fade-in { /* Fade in entrance */ }
@keyframes scale-in { /* Scale in entrance */ }
```

## 3D Effects

### 3D Utilities

```tsx
// 3D button with depth
<button className="btn-3d bg-primary-500 text-white px-6 py-3 rounded-xl">
  3D Button
</button>

// 3D card with perspective
<div className="card-3d p-6 rounded-2xl">
  <h3>3D Card</h3>
  <p>Hovers with 3D transform</p>
</div>

// 3D transform utilities
<div className="preserve-3d perspective-1000 transform-gpu">
  3D Container
</div>
```

### 3D Shadows

```tsx
// Colored shadows for 3D depth
<div className="shadow-primary">Primary colored shadow</div>
<div className="shadow-secondary">Secondary colored shadow</div>
<div className="shadow-3d-lg">Large 3D shadow</div>
```

## Gradients

### Gradient System

```tsx
// Using gradient utilities
<div style={{ background: getGradient('primary') }}>
  Primary Gradient Background
</div>

<div style={{ background: getGradient('hero') }}>
  Hero Gradient Background
</div>
```

### Available Gradients

- `primary`: Blue to purple gradient
- `secondary`: Pink to amber gradient  
- `hero`: Multi-color hero gradient
- `card`: Subtle white to light gray
- `button`: Button-specific gradient
- `accent`: Accent color gradient

### CSS Custom Properties

```css
/* Available gradient variables */
--gradient-primary: linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #ec4899 100%);
--gradient-secondary: linear-gradient(135deg, #ec4899 0%, #f59e0b 100%);
--gradient-hero: linear-gradient(135deg, #4f46e5 0%, #7c3aed 25%, #ec4899 50%, #f59e0b 75%, #10b981 100%);
```

## Layout Utilities

### Spacing System

```tsx
// Container utilities
<div className={spacingVariants.container}>Container padding</div>
<div className={spacingVariants.section}>Section spacing</div>
<div className={spacingVariants.content}>Content max-width</div>

// Grid utilities
<div className={gridVariants.auto}>Auto grid</div>
<div className={gridVariants.cards}>Card grid</div>
<div className={gridVariants.hero}>Hero layout</div>
```

### Responsive Design

```tsx
// Responsive utilities
<div className={responsive('text-base', {
  md: 'text-lg',
  lg: 'text-xl'
})}>
  Responsive text
</div>
```

## Accessibility

### Focus Indicators

```tsx
// Focus variants
<button className={cn(buttonVariants.primary, focusVariants.default)}>
  Accessible Button
</button>

<input className={focusVariants.visible} />
```

### Reduced Motion

The theme system automatically respects user motion preferences:

```css
/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .animate-float,
  .animate-bounce-subtle {
    animation: none;
  }
}
```

### Theme Provider

```tsx
import { ThemeProvider, useTheme } from '@/components/providers/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}

function Component() {
  const { theme, reducedMotion } = useTheme();
  
  return (
    <div className={reducedMotion ? 'no-animations' : 'with-animations'}>
      Content
    </div>
  );
}
```

## Best Practices

### 1. Consistent Color Usage

- Use brand colors for primary actions and highlights
- Use neutral colors for text and backgrounds
- Maintain sufficient contrast ratios for accessibility

### 2. Animation Guidelines

- Keep animations subtle and purposeful
- Respect reduced motion preferences
- Use consistent timing and easing

### 3. Typography Hierarchy

- Use heading variants for consistent sizing
- Maintain proper contrast ratios
- Use responsive typography for all screen sizes

### 4. 3D Effects

- Use 3D effects sparingly for emphasis
- Ensure effects don't interfere with usability
- Provide fallbacks for unsupported devices

### 5. Performance

- Use CSS transforms for animations
- Leverage GPU acceleration with `transform-gpu`
- Optimize for 60fps performance

## Examples

See `src/components/examples/ThemeShowcase.tsx` for comprehensive examples of all theme features in action.

## Customization

To customize the theme, modify the values in:
- `src/lib/theme.ts` - Core theme configuration
- `src/app/globals.css` - CSS custom properties
- `src/lib/theme-utils.ts` - Utility functions and variants

The theme system is designed to be flexible and extensible while maintaining consistency across the Letlotlo International brand.