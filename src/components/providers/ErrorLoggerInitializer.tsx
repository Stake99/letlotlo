'use client';

import { useEffect } from 'react';
import { setupGlobalErrorHandlers } from '@/lib/error-logger';

/**
 * Component that initializes global error handlers
 * Should be included once in the root layout
 */
export function ErrorLoggerInitializer(): null {
  useEffect(() => {
    setupGlobalErrorHandlers();
  }, []);

  return null;
}
