'use client';

import React, { ReactNode } from 'react';
import { ErrorBoundary } from '../common/ErrorBoundary';

interface ThreeErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * Specialized Error Boundary for 3D/Three.js components
 * Provides a graceful fallback when WebGL or 3D rendering fails
 */
export function ThreeErrorBoundary({ children, fallback }: ThreeErrorBoundaryProps): React.ReactElement {
  const defaultFallback = (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
      <div className="text-center p-8 max-w-md">
        <div className="mb-4">
          <svg
            className="w-12 h-12 mx-auto text-purple-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          3D Content Unavailable
        </h3>
        <p className="text-sm text-gray-600">
          Your browser or device doesn't support 3D graphics, but you can still enjoy the rest of the site!
        </p>
      </div>
    </div>
  );

  return (
    <ErrorBoundary
      fallback={fallback || defaultFallback}
      onError={(error, errorInfo) => {
        // Log 3D-specific errors
        if (process.env.NODE_ENV === 'development') {
          console.error('3D Rendering Error:', error, errorInfo);
        }
        // In production, send to error tracking service with 3D context
      }}
    >
      {children}
    </ErrorBoundary>
  );
}
