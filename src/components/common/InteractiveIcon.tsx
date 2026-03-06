"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { interactionVariants, interactionMotionProps } from "@/lib/interaction-feedback";
import { cn } from "@/lib/utils";

/**
 * Interactive Icon Component
 * Provides bounce effect within 50ms for hover interactions
 * Requirements: 6.5, 13.5
 */

export interface InteractiveIconProps extends Omit<HTMLMotionProps<"div">, "variants"> {
  size?: "sm" | "md" | "lg" | "xl";
  color?: string;
  hoverColor?: string;
  children: React.ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
}

export const InteractiveIcon = React.forwardRef<HTMLDivElement, InteractiveIconProps>(
  (
    {
      size = "md",
      color,
      hoverColor,
      children,
      onClick,
      ariaLabel,
      className,
      ...props
    },
    ref
  ) => {
    const sizeStyles = {
      sm: "w-4 h-4",
      md: "w-6 h-6",
      lg: "w-8 h-8",
      xl: "w-12 h-12",
    };

    const isInteractive = !!onClick;

    return (
      <motion.div
        ref={ref}
        variants={interactionVariants.iconHover}
        initial="initial"
        whileHover="hover"
        whileTap={isInteractive ? "tap" : undefined}
        className={cn(
          "inline-flex items-center justify-center",
          isInteractive && "cursor-pointer",
          sizeStyles[size],
          className
        )}
        style={{
          color: color,
          ...(hoverColor && {
            "--hover-color": hoverColor,
          } as React.CSSProperties),
        }}
        onClick={onClick}
        role={isInteractive ? "button" : undefined}
        aria-label={ariaLabel}
        tabIndex={isInteractive ? 0 : undefined}
        onKeyDown={
          isInteractive
            ? (e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onClick?.();
                }
              }
            : undefined
        }
        {...interactionMotionProps}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

InteractiveIcon.displayName = "InteractiveIcon";
