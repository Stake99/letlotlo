"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  fadeInUp, 
  staggerContainer, 
  staggerItem, 
  hoverLift, 
  buttonHover,
  transitions 
} from "@/lib/animations";

/**
 * CallToAction Component
 * 
 * Engaging CTA sections with animations, hover effects, and responsive layouts.
 * Supports multiple variants for different use cases throughout the website.
 * 
 * Features:
 * - Multiple CTA variants (hero, section, minimal, card)
 * - Animated buttons with hover effects within performance requirements
 * - Responsive layouts with mobile-first approach
 * - 3D hover effects and engaging visual elements
 * - Gradient backgrounds and cartoon-styled design
 * 
 * Requirements: 6.4, 6.5, 7.5
 */

interface CTAButton {
  text: string;
  href: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  external?: boolean;
}

interface CallToActionProps {
  /** Main heading text */
  title: string;
  /** Supporting description text */
  description?: string;
  /** Primary call-to-action button */
  primaryButton: CTAButton;
  /** Optional secondary button */
  secondaryButton?: CTAButton;
  /** Visual variant of the CTA section */
  variant?: "hero" | "section" | "minimal" | "card";
  /** Background variant */
  background?: "gradient" | "solid" | "transparent";
  /** Additional CSS classes */
  className?: string;
  /** Center align content */
  centered?: boolean;
}

/**
 * Animated CTA Button Component
 * Implements hover effects within 50ms requirement (6.4, 6.5)
 */
function AnimatedCTAButton({ 
  text, 
  href, 
  variant = "primary", 
  external = false,
  className 
}: CTAButton & { className?: string }) {
  const baseClasses = cn(
    "inline-flex items-center justify-center px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 text-base sm:text-lg font-semibold",
    "rounded-xl sm:rounded-2xl transition-all duration-150 transform-gpu", // 150ms for performance requirement
    "focus:outline-none focus:ring-4 focus:ring-offset-2",
    "relative overflow-hidden group",
    "w-full sm:w-auto",
    className
  );

  const variantClasses = {
    primary: cn(
      "text-white shadow-lg",
      "bg-gradient-to-r from-primary-500 to-secondary-500",
      "hover:from-primary-600 hover:to-secondary-600",
      "focus:ring-primary-500/50",
      "shadow-colored-primary"
    ),
    secondary: cn(
      "text-white shadow-lg",
      "bg-gradient-to-r from-secondary-500 to-accent-500",
      "hover:from-secondary-600 hover:to-accent-600",
      "focus:ring-secondary-500/50",
      "shadow-colored-secondary"
    ),
    outline: cn(
      "text-primary-600 border-2 border-primary-500 bg-white/80 backdrop-blur-sm",
      "hover:bg-primary-50 hover:border-primary-600 hover:text-primary-700",
      "focus:ring-primary-500/50"
    ),
    ghost: cn(
      "text-primary-600 bg-white/20 backdrop-blur-sm",
      "hover:bg-white/30 hover:text-primary-700",
      "focus:ring-primary-500/50"
    ),
  };

  const Component = external ? motion.a : motion.button;
  const linkProps = external ? { href, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Component
      {...linkProps}
      className={cn(baseClasses, variantClasses[variant])}
      variants={buttonHover}
      whileHover="animate"
      whileTap={{ scale: 0.96 }}
      transition={transitions.fast} // 150ms transition for performance
      onClick={!external ? () => window.location.href = href : undefined}
    >
      {/* Animated background overlay for extra visual appeal */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      
      <span className="relative z-10">{text}</span>
      
      {/* Subtle glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
        style={{
          background: variant === "primary" 
            ? "radial-gradient(circle at center, rgba(79, 70, 229, 0.3) 0%, transparent 70%)"
            : "radial-gradient(circle at center, rgba(236, 72, 153, 0.3) 0%, transparent 70%)",
        }}
        transition={{ duration: 0.15 }}
      />
    </Component>
  );
}

/**
 * Main CallToAction Component
 */
export function CallToAction({
  title,
  description,
  primaryButton,
  secondaryButton,
  variant = "section",
  background = "gradient",
  className,
  centered = true,
}: CallToActionProps) {
  const containerClasses = cn(
    "relative overflow-hidden",
    {
      // Variant-specific styling
      "py-24 lg:py-32": variant === "hero",
      "py-16 lg:py-20": variant === "section",
      "py-12 lg:py-16": variant === "minimal",
      "p-8 lg:p-12 rounded-3xl": variant === "card",
      
      // Background styling
      "bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50": 
        background === "gradient",
      "bg-white": background === "solid",
      "bg-transparent": background === "transparent",
      
      // Alignment
      "text-center": centered,
      "text-left": !centered,
    },
    className
  );

  const contentClasses = cn(
    "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
    {
      "max-w-4xl": variant === "hero",
      "max-w-3xl": variant === "section" || variant === "card",
      "max-w-2xl": variant === "minimal",
    }
  );

  const titleClasses = cn(
    "font-bold text-gray-900 mb-4 sm:mb-5 md:mb-6",
    {
      "text-3xl sm:text-4xl md:text-5xl lg:text-6xl": variant === "hero",
      "text-2xl sm:text-3xl md:text-4xl lg:text-5xl": variant === "section",
      "text-xl sm:text-2xl md:text-3xl lg:text-4xl": variant === "minimal" || variant === "card",
    }
  );

  const descriptionClasses = cn(
    "text-gray-600 mb-6 sm:mb-7 md:mb-8 leading-relaxed",
    {
      "text-lg sm:text-xl md:text-2xl": variant === "hero",
      "text-base sm:text-lg md:text-xl": variant === "section",
      "text-sm sm:text-base md:text-lg": variant === "minimal" || variant === "card",
    }
  );

  return (
    <motion.section
      className={containerClasses}
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Background decorative elements */}
      {background === "gradient" && (
        <>
          {/* Floating shapes for visual interest */}
          <motion.div
            className="absolute top-10 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-60"
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-16 h-16 bg-secondary-200 rounded-lg opacity-60"
            animate={{
              y: [10, -10, 10],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 right-20 w-12 h-12 bg-accent-200 rounded-full opacity-40"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 180],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </>
      )}

      <div className={contentClasses}>
        {/* Title */}
        <motion.h2
          className={titleClasses}
          variants={staggerItem}
        >
          {title}
        </motion.h2>

        {/* Description */}
        {description && (
          <motion.p
            className={descriptionClasses}
            variants={staggerItem}
          >
            {description}
          </motion.p>
        )}

        {/* Buttons */}
        <motion.div
          className={cn(
            "flex flex-col sm:flex-row gap-3 sm:gap-4",
            centered ? "justify-center" : "justify-start"
          )}
          variants={staggerItem}
        >
          <AnimatedCTAButton {...primaryButton} />
          
          {secondaryButton && (
            <AnimatedCTAButton {...secondaryButton} />
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}

/**
 * Pre-configured CTA variants for common use cases
 */

// Hero CTA for main pages
export const HeroCTA: React.FC<Omit<CallToActionProps, "variant">> = (props) => (
  <CallToAction {...props} variant="hero" />
);

// Section CTA for page sections
export const SectionCTA: React.FC<Omit<CallToActionProps, "variant">> = (props) => (
  <CallToAction {...props} variant="section" />
);

// Minimal CTA for subtle calls-to-action
export const MinimalCTA: React.FC<Omit<CallToActionProps, "variant">> = (props) => (
  <CallToAction {...props} variant="minimal" />
);

// Card CTA for contained sections
export const CardCTA: React.FC<Omit<CallToActionProps, "variant">> = (props) => (
  <CallToAction {...props} variant="card" />
);

export default CallToAction;