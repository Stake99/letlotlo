'use client';

import React from 'react';
import { typography, typographyVariants, textColors, accessibleTypography } from '@/lib/typography';
import { cn } from '@/lib/theme-utils';

/**
 * Typography Showcase Component
 * Demonstrates the responsive typography system with all variants and color hierarchies
 */
export default function TypographyShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className={cn(typography.display['2xl'], textColors.gradient.hero)}>
            Typography System
          </h1>
          <p className={cn(typography.body.xl, textColors.secondary.default, 'mt-4')}>
            Responsive, accessible typography for Letlotlo International
          </p>
        </div>

        {/* Display Headings Section */}
        <section className="mb-16">
          <h2 className={cn(typography.heading.h2, textColors.primary.default, 'mb-8')}>
            Display Headings
          </h2>
          <div className="space-y-8 bg-white rounded-3xl p-8 shadow-lg">
            <div>
              <h3 className={cn(typography.display['2xl'], textColors.gradient.primary)}>
                Display 2XL - Hero Headlines
              </h3>
              <p className={cn(typography.caption.base, textColors.muted.default, 'mt-2')}>
                Mobile: 48px → Tablet: 72px → Desktop: 96px
              </p>
            </div>
            
            <div>
              <h3 className={cn(typography.display.xl, textColors.gradient.secondary)}>
                Display XL - Major Sections
              </h3>
              <p className={cn(typography.caption.base, textColors.muted.default, 'mt-2')}>
                Mobile: 36px → Tablet: 60px → Desktop: 72px
              </p>
            </div>
            
            <div>
              <h3 className={cn(typography.display.lg, textColors.gradient.accent)}>
                Display Large - Feature Headlines
              </h3>
              <p className={cn(typography.caption.base, textColors.muted.default, 'mt-2')}>
                Mobile: 30px → Tablet: 48px → Desktop: 60px
              </p>
            </div>
          </div>
        </section>

        {/* Standard Headings Section */}
        <section className="mb-16">
          <h2 className={cn(typography.heading.h2, textColors.primary.default, 'mb-8')}>
            Standard Headings
          </h2>
          <div className="space-y-6 bg-white rounded-3xl p-8 shadow-lg">
            <div>
              <h1 className={cn(typography.heading.h1, textColors.primary.default)}>
                Heading 1 - Page Titles
              </h1>
              <p className={cn(typography.caption.base, textColors.muted.default, 'mt-1')}>
                Mobile: 30px → Tablet: 36px → Desktop: 48px
              </p>
            </div>
            
            <div>
              <h2 className={cn(typography.heading.h2, textColors.primary.default)}>
                Heading 2 - Section Titles
              </h2>
              <p className={cn(typography.caption.base, textColors.muted.default, 'mt-1')}>
                Mobile: 24px → Tablet: 30px → Desktop: 36px
              </p>
            </div>
            
            <div>
              <h3 className={cn(typography.heading.h3, textColors.primary.default)}>
                Heading 3 - Subsection Titles
              </h3>
              <p className={cn(typography.caption.base, textColors.muted.default, 'mt-1')}>
                Mobile: 20px → Tablet: 24px → Desktop: 30px
              </p>
            </div>
            
            <div>
              <h4 className={cn(typography.heading.h4, textColors.primary.default)}>
                Heading 4 - Component Titles
              </h4>
              <p className={cn(typography.caption.base, textColors.muted.default, 'mt-1')}>
                Mobile: 18px → Tablet: 20px → Desktop: 24px
              </p>
            </div>
            
            <div>
              <h5 className={cn(typography.heading.h5, textColors.primary.default)}>
                Heading 5 - Card Titles
              </h5>
              <p className={cn(typography.caption.base, textColors.muted.default, 'mt-1')}>
                Mobile: 16px → Tablet: 18px → Desktop: 20px
              </p>
            </div>
            
            <div>
              <h6 className={cn(typography.heading.h6, textColors.primary.default)}>
                Heading 6 - Small Titles
              </h6>
              <p className={cn(typography.caption.base, textColors.muted.default, 'mt-1')}>
                Mobile: 14px → Tablet: 16px → Desktop: 18px
              </p>
            </div>
          </div>
        </section>

        {/* Body Text Section */}
        <section className="mb-16">
          <h2 className={cn(typography.heading.h2, textColors.primary.default, 'mb-8')}>
            Body Text
          </h2>
          <div className="space-y-6 bg-white rounded-3xl p-8 shadow-lg">
            <div>
              <p className={cn(typography.body.xl, textColors.primary.default)}>
                Body XL - Large body text for important content and introductions. This size provides excellent readability and is perfect for hero descriptions and key messaging.
              </p>
              <p className={cn(typography.caption.base, textColors.muted.default, 'mt-2')}>
                Mobile: 18px → Tablet: 20px → Desktop: 20px
              </p>
            </div>
            
            <div>
              <p className={cn(typography.body.lg, textColors.primary.default)}>
                Body Large - Standard large body text for main content areas. This is ideal for article content, service descriptions, and other primary text content.
              </p>
              <p className={cn(typography.caption.base, textColors.muted.default, 'mt-2')}>
                Mobile: 16px → Tablet: 18px → Desktop: 18px
              </p>
            </div>
            
            <div>
              <p className={cn(typography.body.base, textColors.primary.default)}>
                Body Base - Default body text size for general content. This is the most commonly used text size for paragraphs, lists, and general content throughout the website.
              </p>
              <p className={cn(typography.caption.base, textColors.muted.default, 'mt-2')}>
                Mobile: 14px → Tablet: 16px → Desktop: 16px
              </p>
            </div>
            
            <div>
              <p className={cn(typography.body.sm, textColors.primary.default)}>
                Body Small - Smaller body text for secondary content, captions, and supporting information. Perfect for metadata, tags, and less prominent content.
              </p>
              <p className={cn(typography.caption.base, textColors.muted.default, 'mt-2')}>
                Mobile: 12px → Tablet: 14px → Desktop: 14px
              </p>
            </div>
          </div>
        </section>

        {/* Text Color Hierarchy Section */}
        <section className="mb-16">
          <h2 className={cn(typography.heading.h2, textColors.primary.default, 'mb-8')}>
            Text Color Hierarchy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Primary Colors */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className={cn(typography.heading.h4, textColors.primary.default, 'mb-4')}>
                Primary Text
              </h3>
              <div className="space-y-3">
                <p className={cn(typography.body.base, textColors.primary.default)}>
                  Primary Default - Main content text
                </p>
                <p className={cn(typography.body.base, textColors.primary.light)}>
                  Primary Light - Slightly less emphasis
                </p>
              </div>
            </div>

            {/* Secondary Colors */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className={cn(typography.heading.h4, textColors.primary.default, 'mb-4')}>
                Secondary Text
              </h3>
              <div className="space-y-3">
                <p className={cn(typography.body.base, textColors.secondary.default)}>
                  Secondary Default - Supporting text
                </p>
                <p className={cn(typography.body.base, textColors.secondary.light)}>
                  Secondary Light - Subtle text
                </p>
              </div>
            </div>

            {/* Muted Colors */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className={cn(typography.heading.h4, textColors.primary.default, 'mb-4')}>
                Muted Text
              </h3>
              <div className="space-y-3">
                <p className={cn(typography.body.base, textColors.muted.default)}>
                  Muted Default - Captions and labels
                </p>
                <p className={cn(typography.body.base, textColors.muted.light)}>
                  Muted Light - Placeholders
                </p>
              </div>
            </div>

            {/* Brand Colors */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className={cn(typography.heading.h4, textColors.primary.default, 'mb-4')}>
                Brand Colors
              </h3>
              <div className="space-y-3">
                <p className={cn(typography.body.base, textColors.brand.primary)}>
                  Brand Primary - Main brand color
                </p>
                <p className={cn(typography.body.base, textColors.brand.secondary)}>
                  Brand Secondary - Secondary brand
                </p>
                <p className={cn(typography.body.base, textColors.brand.accent)}>
                  Brand Accent - Accent highlights
                </p>
              </div>
            </div>

            {/* Semantic Colors */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className={cn(typography.heading.h4, textColors.primary.default, 'mb-4')}>
                Semantic Colors
              </h3>
              <div className="space-y-3">
                <p className={cn(typography.body.base, textColors.semantic.success)}>
                  Success - Positive messages
                </p>
                <p className={cn(typography.body.base, textColors.semantic.warning)}>
                  Warning - Caution messages
                </p>
                <p className={cn(typography.body.base, textColors.semantic.error)}>
                  Error - Error messages
                </p>
                <p className={cn(typography.body.base, textColors.semantic.info)}>
                  Info - Information messages
                </p>
              </div>
            </div>

            {/* Gradient Colors */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className={cn(typography.heading.h4, textColors.primary.default, 'mb-4')}>
                Gradient Text
              </h3>
              <div className="space-y-3">
                <p className={cn(typography.body.base, textColors.gradient.primary)}>
                  Primary Gradient
                </p>
                <p className={cn(typography.body.base, textColors.gradient.secondary)}>
                  Secondary Gradient
                </p>
                <p className={cn(typography.body.base, textColors.gradient.accent)}>
                  Accent Gradient
                </p>
                <p className={cn(typography.body.base, textColors.gradient.hero)}>
                  Hero Gradient
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Typography Variants Section */}
        <section className="mb-16">
          <h2 className={cn(typography.heading.h2, textColors.primary.default, 'mb-8')}>
            Typography Variants
          </h2>
          <div className="space-y-8">
            
            {/* Hero Variants */}
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8">
              <h3 className={typographyVariants.hero.title}>
                Hero Title Variant
              </h3>
              <p className={cn(typographyVariants.hero.subtitle, 'mt-4')}>
                Hero subtitle with perfect spacing and color hierarchy
              </p>
              <p className={cn(typographyVariants.hero.description, 'mt-2')}>
                Hero description text that provides additional context and information
              </p>
            </div>

            {/* Section Variants */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className={typographyVariants.section.title}>
                Section Title Variant
              </h3>
              <p className={cn(typographyVariants.section.subtitle, 'mt-4')}>
                Section subtitle for organizing content
              </p>
              <p className={cn(typographyVariants.section.description, 'mt-2')}>
                Section description text that explains the content in this section
              </p>
            </div>

            {/* Card Variants */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-neutral-200">
              <h4 className={typographyVariants.card.title}>
                Card Title Variant
              </h4>
              <p className={cn(typographyVariants.card.subtitle, 'mt-2')}>
                Card subtitle
              </p>
              <p className={cn(typographyVariants.card.description, 'mt-3')}>
                Card description text that provides details about the card content
              </p>
              <p className={cn(typographyVariants.card.caption, 'mt-2')}>
                Card caption or metadata
              </p>
            </div>
          </div>
        </section>

        {/* Accessibility Section */}
        <section className="mb-16">
          <h2 className={cn(typography.heading.h2, textColors.primary.default, 'mb-8')}>
            Accessibility Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* High Contrast */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className={cn(typography.heading.h4, textColors.primary.default, 'mb-4')}>
                High Contrast Mode
              </h3>
              <div className="space-y-3">
                <h4 className={accessibleTypography.highContrast.title}>
                  High Contrast Title
                </h4>
                <p className={accessibleTypography.highContrast.body}>
                  High contrast body text for better readability
                </p>
                <p className={accessibleTypography.highContrast.caption}>
                  High contrast caption text
                </p>
              </div>
            </div>

            {/* Large Text */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className={cn(typography.heading.h4, textColors.primary.default, 'mb-4')}>
                Large Text Mode
              </h3>
              <div className="space-y-3">
                <h4 className={accessibleTypography.large.title}>
                  Large Title
                </h4>
                <p className={accessibleTypography.large.body}>
                  Large body text for better accessibility
                </p>
                <p className={accessibleTypography.large.caption}>
                  Large caption text
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Responsive Behavior */}
        <section className="mb-16">
          <h2 className={cn(typography.heading.h2, textColors.primary.default, 'mb-8')}>
            Responsive Behavior
          </h2>
          <div className="bg-gradient-to-r from-accent-50 to-success-50 rounded-3xl p-8">
            <div className="text-center">
              <p className={cn(typography.body.lg, textColors.secondary.default, 'mb-4')}>
                Resize your browser window to see the typography scale responsively
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-white rounded-xl p-4">
                  <h4 className={cn(typography.heading.h5, textColors.primary.default, 'mb-2')}>
                    Mobile First
                  </h4>
                  <p className={cn(typography.body.sm, textColors.secondary.default)}>
                    320px - 767px
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h4 className={cn(typography.heading.h5, textColors.primary.default, 'mb-2')}>
                    Tablet
                  </h4>
                  <p className={cn(typography.body.sm, textColors.secondary.default)}>
                    768px - 1023px
                  </p>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h4 className={cn(typography.heading.h5, textColors.primary.default, 'mb-2')}>
                    Desktop
                  </h4>
                  <p className={cn(typography.body.sm, textColors.secondary.default)}>
                    1024px+
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section>
          <h2 className={cn(typography.heading.h2, textColors.primary.default, 'mb-8')}>
            Usage Guidelines
          </h2>
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className={cn(typography.heading.h4, textColors.brand.primary, 'mb-4')}>
                  Best Practices
                </h3>
                <ul className="space-y-2">
                  <li className={cn(typography.body.base, textColors.primary.default)}>
                    • Use display headings for hero sections
                  </li>
                  <li className={cn(typography.body.base, textColors.primary.default)}>
                    • Maintain proper color contrast ratios
                  </li>
                  <li className={cn(typography.body.base, textColors.primary.default)}>
                    • Follow the text hierarchy consistently
                  </li>
                  <li className={cn(typography.body.base, textColors.primary.default)}>
                    • Test with screen readers and keyboard navigation
                  </li>
                </ul>
              </div>
              <div>
                <h3 className={cn(typography.heading.h4, textColors.brand.secondary, 'mb-4')}>
                  Accessibility
                </h3>
                <ul className="space-y-2">
                  <li className={cn(typography.body.base, textColors.primary.default)}>
                    • WCAG 2.1 AA compliant color contrast
                  </li>
                  <li className={cn(typography.body.base, textColors.primary.default)}>
                    • Responsive scaling for all devices
                  </li>
                  <li className={cn(typography.body.base, textColors.primary.default)}>
                    • High contrast mode support
                  </li>
                  <li className={cn(typography.body.base, textColors.primary.default)}>
                    • Reduced motion preferences respected
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}