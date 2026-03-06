'use client';

import React, { ReactNode } from 'react';
import { motion, MotionProps } from 'framer-motion';
import { useAnimation } from '@/components/providers/AnimationProvider';
import { getSafeAnimationProps, getCSSFallbackClass } from '@/lib/animation-fallback';
import { ErrorBoundary } from './ErrorBoundary';

interface SafeMotionProps extends Omit<MotionProps, 'as'> {
  children: ReactNode;
  fallbackAnimation?: 'fadeIn' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight' | 'scaleUp';
  as?: 'div' | 'section' | 'article' | 'span' | 'button';
  className?: string;
}

/**
 * Safe wrapper for Framer Motion components that handles animation failures
 * and provides CSS fallbacks
 */
function SafeMotionInner({
  children,
  fallbackAnimation = 'fadeIn',
  as = 'div',
  className,
  ...props
}: SafeMotionProps): React.ReactElement {
  const { mode } = useAnimation();

  // If animations are disabled, render without motion
  if (mode === 'none') {
    return React.createElement(as, { className }, children);
  }

  // If using CSS-only mode, use CSS animations
  if (mode === 'css-only') {
    const cssClass = getCSSFallbackClass(fallbackAnimation);
    return React.createElement(
      as,
      { className: `${className || ''} ${cssClass}`.trim() },
      children
    );
  }

  // Use Framer Motion with safe props
  const safeProps = getSafeAnimationProps({ ...props, className }, mode);
  
  // Type-safe motion component selection
  switch (as) {
    case 'section':
      return <motion.section {...safeProps}>{children}</motion.section>;
    case 'article':
      return <motion.article {...safeProps}>{children}</motion.article>;
    case 'span':
      return <motion.span {...safeProps}>{children}</motion.span>;
    case 'button':
      return <motion.button {...safeProps}>{children}</motion.button>;
    default:
      return <motion.div {...safeProps}>{children}</motion.div>;
  }
}

/**
 * SafeMotion component with error boundary
 */
export function SafeMotion(props: SafeMotionProps): React.ReactElement {
  const { fallbackAnimation = 'fadeIn', children, className } = props;

  return (
    <ErrorBoundary
      fallback={
        <div className={`${className || ''} ${getCSSFallbackClass(fallbackAnimation)}`.trim()}>
          {children}
        </div>
      }
    >
      <SafeMotionInner {...props} />
    </ErrorBoundary>
  );
}

// Export common motion components with safe wrappers
export const SafeMotionDiv = (props: Omit<SafeMotionProps, 'as'>) => (
  <SafeMotion {...props} as="div" />
);

export const SafeMotionSection = (props: Omit<SafeMotionProps, 'as'>) => (
  <SafeMotion {...props} as="section" />
);

export const SafeMotionArticle = (props: Omit<SafeMotionProps, 'as'>) => (
  <SafeMotion {...props} as="article" />
);

export const SafeMotionSpan = (props: Omit<SafeMotionProps, 'as'>) => (
  <SafeMotion {...props} as="span" />
);

export const SafeMotionButton = (props: Omit<SafeMotionProps, 'as'>) => (
  <SafeMotion {...props} as="button" />
);
