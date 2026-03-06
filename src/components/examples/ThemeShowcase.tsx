'use client';

import React from 'react';
import { cn, buttonVariants, cardVariants, textGradientVariants, animationVariants } from '@/lib/theme-utils';

/**
 * Theme Showcase Component
 * Demonstrates the Letlotlo International theme system with cartoon-styled elements
 */
export function ThemeShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className={cn(
            'text-5xl md:text-6xl lg:text-7xl font-bold mb-6',
            textGradientVariants.hero,
            animationVariants.slideUp
          )}>
            Letlotlo International
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto">
            Cartoon-styled theme system with vibrant colors, 3D effects, and smooth animations
          </p>
        </div>

        {/* Color Palette */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-800 mb-8 text-center">Brand Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Primary Colors */}
            <div className={cn(cardVariants.default, 'p-6 text-center')}>
              <div className="w-16 h-16 bg-primary-500 rounded-full mx-auto mb-4 shadow-primary"></div>
              <h3 className="font-semibold text-neutral-800">Primary</h3>
              <p className="text-sm text-neutral-600">#4f46e5</p>
            </div>

            {/* Secondary Colors */}
            <div className={cn(cardVariants.default, 'p-6 text-center')}>
              <div className="w-16 h-16 bg-secondary-500 rounded-full mx-auto mb-4 shadow-secondary"></div>
              <h3 className="font-semibold text-neutral-800">Secondary</h3>
              <p className="text-sm text-neutral-600">#ec4899</p>
            </div>

            {/* Accent Colors */}
            <div className={cn(cardVariants.default, 'p-6 text-center')}>
              <div className="w-16 h-16 bg-accent-500 rounded-full mx-auto mb-4 shadow-accent"></div>
              <h3 className="font-semibold text-neutral-800">Accent</h3>
              <p className="text-sm text-neutral-600">#f59e0b</p>
            </div>

            {/* Success Colors */}
            <div className={cn(cardVariants.default, 'p-6 text-center')}>
              <div className="w-16 h-16 bg-success-500 rounded-full mx-auto mb-4 shadow-success"></div>
              <h3 className="font-semibold text-neutral-800">Success</h3>
              <p className="text-sm text-neutral-600">#10b981</p>
            </div>
          </div>
        </section>

        {/* Button Variants */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-800 mb-8 text-center">Button Styles</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button className={buttonVariants.primary}>
              Primary Button
            </button>
            <button className={buttonVariants.secondary}>
              Secondary Button
            </button>
            <button className={buttonVariants.accent}>
              Accent Button
            </button>
            <button className={buttonVariants.outline}>
              Outline Button
            </button>
            <button className={buttonVariants.ghost}>
              Ghost Button
            </button>
          </div>
        </section>

        {/* Card Variants */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-800 mb-8 text-center">Card Styles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className={cn(cardVariants.default, 'p-6')}>
              <h3 className="text-lg font-semibold mb-2">Default Card</h3>
              <p className="text-neutral-600">Standard card with subtle shadow and hover effects.</p>
            </div>

            <div className={cn(cardVariants.elevated, 'p-6')}>
              <h3 className="text-lg font-semibold mb-2">Elevated Card</h3>
              <p className="text-neutral-600">Enhanced card with stronger shadow and 3D lift.</p>
            </div>

            <div className={cn(cardVariants.gradient, 'p-6')}>
              <h3 className="text-lg font-semibold mb-2">Gradient Card</h3>
              <p className="text-neutral-600">Card with subtle gradient background.</p>
            </div>

            <div className={cn(cardVariants['3d'], 'p-6')}>
              <h3 className="text-lg font-semibold mb-2">3D Card</h3>
              <p className="text-neutral-600">Full 3D effect with perspective transforms.</p>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-800 mb-8 text-center">Typography</h2>
          <div className={cn(cardVariants.default, 'p-8')}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Heading 1</h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Heading 2</h2>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">Heading 3</h3>
            <h4 className="text-xl md:text-2xl font-semibold mb-4">Heading 4</h4>
            <p className="text-base md:text-lg leading-relaxed mb-4">
              This is body text that demonstrates the readable typography system. 
              The Inter font family provides excellent readability across all devices 
              and screen sizes.
            </p>
            <p className="text-sm md:text-base text-neutral-600">
              This is smaller text used for captions, descriptions, and secondary information.
            </p>
          </div>
        </section>

        {/* Gradient Text */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-800 mb-8 text-center">Gradient Text</h2>
          <div className="text-center space-y-4">
            <h3 className={cn('text-4xl font-bold', textGradientVariants.primary)}>
              Primary Gradient
            </h3>
            <h3 className={cn('text-4xl font-bold', textGradientVariants.secondary)}>
              Secondary Gradient
            </h3>
            <h3 className={cn('text-4xl font-bold', textGradientVariants.accent)}>
              Accent Gradient
            </h3>
            <h3 className={cn('text-4xl font-bold', textGradientVariants.hero)}>
              Hero Gradient
            </h3>
            <h3 className={cn('text-4xl font-bold', textGradientVariants.rainbow)}>
              Rainbow Gradient
            </h3>
          </div>
        </section>

        {/* Animations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-800 mb-8 text-center">Animations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className={cn(cardVariants.default, 'p-6 text-center', animationVariants.float)}>
              <div className="w-12 h-12 bg-primary-500 rounded-full mx-auto mb-4"></div>
              <p className="font-medium">Float</p>
            </div>

            <div className={cn(cardVariants.default, 'p-6 text-center hover-bounce')}>
              <div className="w-12 h-12 bg-secondary-500 rounded-full mx-auto mb-4"></div>
              <p className="font-medium">Hover Bounce</p>
            </div>

            <div className={cn(cardVariants.default, 'p-6 text-center hover-lift')}>
              <div className="w-12 h-12 bg-accent-500 rounded-full mx-auto mb-4"></div>
              <p className="font-medium">Hover Lift</p>
            </div>

            <div className={cn(cardVariants.default, 'p-6 text-center hover-glow')}>
              <div className="w-12 h-12 bg-success-500 rounded-full mx-auto mb-4"></div>
              <p className="font-medium">Hover Glow</p>
            </div>
          </div>
        </section>

        {/* Shadows */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-800 mb-8 text-center">Shadow System</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
              <p className="font-medium">Small</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
              <p className="font-medium">Medium</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <p className="font-medium">Large</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl text-center">
              <p className="font-medium">Extra Large</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center">
          <p className="text-neutral-600">
            Letlotlo International Theme System - Cartoon-styled design with modern web technologies
          </p>
        </div>
      </div>
    </div>
  );
}

export default ThemeShowcase;