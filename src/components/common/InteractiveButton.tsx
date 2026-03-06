"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { interactionVariants, interactionMotionProps } from "@/lib/interaction-feedback";
import { cn } from "@/lib/utils";

/**
 * Interactive Button Component
 * Provides visual feedback within 50ms for hover interactions
 * Requirements: 6.4, 13.5
 */

export interface InteractiveButtonProps extends Omit<HTMLMotionProps<"button">, "variants"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  loadingText?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}

export const InteractiveButton = React.forwardRef<HTMLButtonElement, InteractiveButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      loadingText = "Loading...",
      icon,
      iconPosition = "left",
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      primary: "bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg",
      secondary: "bg-secondary text-white hover:bg-secondary/90 shadow-md hover:shadow-lg",
      outline: "border-2 border-primary text-primary hover:bg-primary/10",
      ghost: "text-primary hover:bg-primary/10",
    };

    const sizeStyles = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    };

    const isDisabled = disabled || isLoading;

    return (
      <motion.button
        ref={ref}
        variants={interactionVariants.buttonHover}
        initial="initial"
        whileHover={!isDisabled ? "hover" : undefined}
        whileTap={!isDisabled ? "tap" : undefined}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        disabled={isDisabled}
        {...interactionMotionProps}
        {...props}
      >
        {isLoading ? (
          <>
            <motion.div
              className="h-4 w-4 border-2 border-current border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <span>{loadingText}</span>
          </>
        ) : (
          <>
            {icon && iconPosition === "left" && (
              <span className="inline-flex">{icon}</span>
            )}
            <span>{children}</span>
            {icon && iconPosition === "right" && (
              <span className="inline-flex">{icon}</span>
            )}
          </>
        )}
      </motion.button>
    );
  }
);

InteractiveButton.displayName = "InteractiveButton";
