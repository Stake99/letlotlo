'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import {
  getOptimalAnimationMode,
  initializeAnimationMonitoring,
  type AnimationMode,
} from '@/lib/animation-fallback';

interface AnimationContextValue {
  mode: AnimationMode;
  setMode: (mode: AnimationMode) => void;
  isReduced: boolean;
}

const AnimationContext = createContext<AnimationContextValue>({
  mode: 'full',
  setMode: () => {},
  isReduced: false,
});

export function useAnimation() {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimation must be used within AnimationProvider');
  }
  return context;
}

interface AnimationProviderProps {
  children: ReactNode;
}

/**
 * Provider that manages animation mode based on device capabilities
 * and user preferences
 */
export function AnimationProvider({ children }: AnimationProviderProps): React.ReactElement {
  const [mode, setMode] = useState<AnimationMode>('full');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Determine optimal animation mode
    const optimalMode = getOptimalAnimationMode();
    setMode(optimalMode);

    // Initialize performance monitoring
    initializeAnimationMonitoring((shouldDisable) => {
      if (shouldDisable) {
        console.warn('Low performance detected, switching to reduced animations');
        setMode('reduced');
      }
    });

    // Apply mode to document body
    if (optimalMode === 'reduced' || optimalMode === 'css-only') {
      document.body.classList.add('low-performance-mode');
    }

    // Listen for changes in reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setMode('none');
        document.body.classList.add('low-performance-mode');
      } else {
        const newMode = getOptimalAnimationMode();
        setMode(newMode);
        if (newMode === 'full') {
          document.body.classList.remove('low-performance-mode');
        }
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Update body class when mode changes
  useEffect(() => {
    if (!mounted) return;

    if (mode === 'reduced' || mode === 'css-only' || mode === 'none') {
      document.body.classList.add('low-performance-mode');
    } else {
      document.body.classList.remove('low-performance-mode');
    }
  }, [mode, mounted]);

  const value: AnimationContextValue = {
    mode,
    setMode,
    isReduced: mode !== 'full',
  };

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
}
