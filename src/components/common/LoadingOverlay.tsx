"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { loadingVariants } from "@/lib/interaction-feedback";
import { cn } from "@/lib/utils";

/**
 * Loading Overlay Component
 * Provides visual feedback for async operations
 * Requirement 13.5: Visual feedback within 100ms
 */

export interface LoadingOverlayProps {
  isLoading: boolean;
  message?: string;
  variant?: "spinner" | "pulse" | "dots";
  fullScreen?: boolean;
  className?: string;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  isLoading,
  message = "Loading...",
  variant = "spinner",
  fullScreen = false,
  className,
}) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }} // 100ms for immediate feedback
          className={cn(
            "flex flex-col items-center justify-center gap-4 bg-white/80 backdrop-blur-sm z-50",
            fullScreen
              ? "fixed inset-0"
              : "absolute inset-0",
            className
          )}
        >
          {variant === "spinner" && (
            <motion.div
              className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full"
              variants={loadingVariants.spinner}
              animate="animate"
            />
          )}

          {variant === "pulse" && (
            <motion.div
              className="w-12 h-12 bg-primary rounded-full"
              variants={loadingVariants.pulse}
              animate="animate"
            />
          )}

          {variant === "dots" && (
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-primary rounded-full"
                  variants={loadingVariants.dots}
                  animate="animate"
                  transition={{
                    delay: i * 0.15,
                    duration: 0.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          )}

          {message && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-text-secondary font-medium"
            >
              {message}
            </motion.p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/**
 * Inline Loading Spinner
 * For smaller loading states within components
 */
export interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: string;
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "md",
  color = "currentColor",
  className,
}) => {
  const sizeStyles = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4",
  };

  return (
    <motion.div
      className={cn(
        "border-current border-t-transparent rounded-full",
        sizeStyles[size],
        className
      )}
      style={{ borderColor: color, borderTopColor: "transparent" }}
      variants={loadingVariants.spinner}
      animate="animate"
    />
  );
};

/**
 * Skeleton Loading Component
 * For content placeholders during loading
 */
export interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  variant?: "text" | "circular" | "rectangular";
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  className,
  variant = "rectangular",
}) => {
  const variantStyles = {
    text: "rounded h-4",
    circular: "rounded-full",
    rectangular: "rounded-lg",
  };

  return (
    <motion.div
      className={cn(
        "bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]",
        variantStyles[variant],
        className
      )}
      style={{
        width: width || "100%",
        height: height || (variant === "text" ? "1rem" : "100%"),
      }}
      variants={loadingVariants.shimmer}
      animate="animate"
    />
  );
};

/**
 * Progress Bar Component
 * For operations with known progress
 */
export interface ProgressBarProps {
  progress: number; // 0-100
  showLabel?: boolean;
  className?: string;
  barClassName?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  showLabel = false,
  className,
  barClassName,
}) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className={cn("w-full", className)}>
      <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className={cn("absolute inset-y-0 left-0 bg-primary rounded-full", barClassName)}
          initial={{ width: 0 }}
          animate={{ width: `${clampedProgress}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
      {showLabel && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-text-secondary mt-2 text-center"
        >
          {Math.round(clampedProgress)}%
        </motion.p>
      )}
    </div>
  );
};
