"use client";

import React, { useRef, useState, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { theme } from "@/lib/theme";
import {
  heroText,
  heroSubtext,
  staggerContainer,
  staggerItem,
  transitions,
} from "@/lib/animations";
import { calculateMouseParallax } from "@/lib/parallax";
import ThreeScene from "@/components/three/ThreeScene";
import FloatingObjects, { FloatingObjectsPresets } from "@/components/three/FloatingObjects";
import type { HeroProps, MousePosition } from "@/types";

/**
 * Extended Hero props with additional customization options
 */
interface ExtendedHeroProps extends HeroProps {
  /** Additional CSS classes */
  className?: string;
  /** Enable/disable 3D background scene */
  enable3D?: boolean;
  /** Enable/disable mouse parallax effects */
  enableParallax?: boolean;
  /** Custom gradient override */
  gradient?: string;
  /** Additional action buttons */
  secondaryButton?: {
    text: string;
    href: string;
    variant?: "outline" | "ghost";
  };
  /** Hero section height */
  height?: "screen" | "large" | "medium";
  /** Text alignment */
  textAlign?: "left" | "center";
}

/**
 * Mouse parallax hook for smooth mouse tracking
 */
function useMouseParallax(intensity: number = 0.1) {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [elementRect, setElementRect] = useState<DOMRect | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateRect = () => {
      if (containerRef.current) {
        setElementRect(containerRef.current.getBoundingClientRect());
      }
    };

    updateRect();
    window.addEventListener("resize", updateRect);
    return () => window.removeEventListener("resize", updateRect);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const parallaxOffset = useMemo(() => {
    if (!elementRect) return { x: 0, y: 0 };
    return calculateMouseParallax(
      mousePosition.x,
      mousePosition.y,
      elementRect,
      intensity
    );
  }, [mousePosition, elementRect, intensity]);

  return { containerRef, parallaxOffset };
}

/**
 * 3D Background Scene Component
 */
function Hero3DBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <ThreeScene
        camera={{ position: [0, 0, 8], fov: 75 }}
        lights={[
          { type: "ambient", intensity: 0.6 },
          { type: "directional", position: [10, 10, 5], intensity: 0.8 },
          { type: "point", position: [-10, -10, -5], intensity: 0.3 },
        ]}
      >
        <FloatingObjects {...FloatingObjectsPresets.hero} />
      </ThreeScene>
    </div>
  );
}

/**
 * CTA Button Component with animations
 */
interface CTAButtonProps {
  text: string;
  href: string;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
}

function CTAButton({ text, href, variant = "primary", className }: CTAButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 text-base sm:text-lg font-semibold",
    "rounded-xl sm:rounded-2xl transition-all duration-300 transform-gpu",
    "focus:outline-none focus:ring-4 focus:ring-offset-2",
    "active:scale-95 hover:scale-105 hover:-translate-y-1",
    "w-full sm:w-auto",
    className
  );

  const variantClasses = {
    primary: cn(
      "text-white shadow-lg hover:shadow-xl",
      "bg-gradient-to-r from-primary-500 to-secondary-500",
      "hover:from-primary-600 hover:to-secondary-600",
      "focus:ring-primary-500/50"
    ),
    outline: cn(
      "text-primary-600 border-2 border-primary-500 bg-white/80 backdrop-blur-sm",
      "hover:bg-primary-50 hover:border-primary-600",
      "focus:ring-primary-500/50"
    ),
    ghost: cn(
      "text-primary-600 bg-white/20 backdrop-blur-sm",
      "hover:bg-white/30 hover:text-primary-700",
      "focus:ring-primary-500/50"
    ),
  };

  return (
    <motion.a
      href={href}
      className={cn(baseClasses, variantClasses[variant])}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={transitions.fast}
      aria-label={`${text} - Call to action button`}
    >
      {text}
    </motion.a>
  );
}

/**
 * Main Hero Component
 * 
 * Features:
 * - 3D background scene integration with floating objects
 * - Animated text entrance effects with stagger
 * - Parallax mouse movement effects
 * - Responsive typography and CTA buttons
 * - Performance-optimized animations
 * 
 * Requirements: 4.1, 4.2, 6.1, 7.1, 16.2
 */
export default function Hero({
  title,
  subtitle,
  backgroundScene: CustomBackgroundScene,
  ctaButton,
  className,
  enable3D = true,
  enableParallax = true,
  gradient,
  secondaryButton,
  height = "screen",
  textAlign = "center",
}: ExtendedHeroProps) {
  const { containerRef, parallaxOffset } = useMouseParallax(enableParallax ? 0.05 : 0);
  const { scrollY } = useScroll();
  
  // Smooth parallax scroll effect
  const yTransform = useTransform(scrollY, [0, 500], [0, -150]);
  const smoothY = useSpring(yTransform, { stiffness: 100, damping: 30 });

  // Height classes
  const heightClasses = {
    screen: "min-h-screen",
    large: "min-h-[80vh]",
    medium: "min-h-[60vh]",
  };

  // Text alignment classes
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
  };

  // Background gradient
  const backgroundGradient = gradient || theme.gradients.hero;

  return (
    <section
      ref={containerRef}
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        heightClasses[height],
        className
      )}
      style={{
        background: backgroundGradient,
      }}
      aria-label="Hero section"
      role="banner"
    >
      {/* 3D Background Scene */}
      {enable3D && (
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            x: parallaxOffset.x * 0.5,
            y: parallaxOffset.y * 0.5,
          }}
        >
          {CustomBackgroundScene ? <CustomBackgroundScene /> : <Hero3DBackground />}
        </motion.div>
      )}

      {/* Background Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 z-10" />

      {/* Content Container */}
      <motion.div
        className={cn(
          "relative z-20 flex flex-col px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full",
          alignmentClasses[textAlign]
        )}
        style={{
          y: useTransform(smoothY, (value) => value + parallaxOffset.y),
          x: parallaxOffset.x,
        }}
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Main Title */}
        <motion.h1
          className={cn(
            "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl",
            "font-bold leading-tight tracking-tight",
            "text-white drop-shadow-lg",
            "mb-4 sm:mb-5 md:mb-6 lg:mb-8",
            textAlign === "center" ? "max-w-5xl" : "max-w-4xl"
          )}
          variants={heroText}
          style={{
            textShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
          }}
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className={cn(
            "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl",
            "text-white/90 leading-relaxed",
            "mb-6 sm:mb-8 md:mb-10 lg:mb-12",
            textAlign === "center" ? "max-w-3xl" : "max-w-2xl"
          )}
          variants={heroSubtext}
          style={{
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          {subtitle}
        </motion.p>

        {/* CTA Buttons */}
        {(ctaButton || secondaryButton) && (
          <motion.div
            className={cn(
              "flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6",
              textAlign === "center" ? "justify-center" : "justify-start"
            )}
            variants={staggerItem}
          >
            {ctaButton && (
              <CTAButton
                text={ctaButton.text}
                href={ctaButton.href}
                variant="primary"
              />
            )}
            {secondaryButton && (
              <CTAButton
                text={secondaryButton.text}
                href={secondaryButton.href}
                variant={secondaryButton.variant || "outline"}
              />
            )}
          </motion.div>
        )}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        aria-label="Scroll down indicator"
        role="img"
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          aria-hidden="true"
        >
          <motion.div
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

/**
 * Pre-configured Hero variants for common use cases
 */

// Home page hero
export const HomeHero: React.FC<Omit<ExtendedHeroProps, "title" | "subtitle">> = (props) => (
  <Hero
    {...props}
    title="Welcome to Letlotlo International"
    subtitle="Innovative solutions for a connected world"
    height="screen"
    textAlign="center"
  />
);

// About page hero
export const AboutHero: React.FC<Omit<ExtendedHeroProps, "title" | "subtitle">> = (props) => (
  <Hero
    {...props}
    title="Our Story"
    subtitle="Building the future through innovation and collaboration"
    height="large"
    textAlign="left"
  />
);

// Services page hero
export const ServicesHero: React.FC<Omit<ExtendedHeroProps, "title" | "subtitle">> = (props) => (
  <Hero
    {...props}
    title="Our Services"
    subtitle="Comprehensive solutions tailored to your needs"
    height="large"
    textAlign="center"
  />
);

// Projects page hero
export const ProjectsHero: React.FC<Omit<ExtendedHeroProps, "title" | "subtitle">> = (props) => (
  <Hero
    {...props}
    title="Our Work"
    subtitle="Showcasing innovation and excellence in every project"
    height="large"
    textAlign="center"
  />
);

// Contact page hero
export const ContactHero: React.FC<Omit<ExtendedHeroProps, "title" | "subtitle">> = (props) => (
  <Hero
    {...props}
    title="Get In Touch"
    subtitle="Let's discuss how we can help bring your vision to life"
    height="medium"
    textAlign="center"
  />
);