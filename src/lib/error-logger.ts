import { ErrorInfo } from 'react';

export interface ErrorLog {
  error: Error;
  errorInfo?: ErrorInfo;
  context?: string;
  timestamp: Date;
  userAgent?: string;
  url?: string;
}

/**
 * Error logging utility for tracking and reporting errors
 */
class ErrorLogger {
  private logs: ErrorLog[] = [];
  private maxLogs = 50;

  /**
   * Log an error with context information
   */
  log(error: Error, errorInfo?: ErrorInfo, context?: string): void {
    const errorLog: ErrorLog = {
      error,
      errorInfo,
      context,
      timestamp: new Date(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
    };

    // Add to in-memory logs
    this.logs.push(errorLog);
    
    // Keep only the most recent logs
    if (this.logs.length > this.maxLogs) {
      this.logs.shift();
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error(`[${context || 'Error'}]`, error, errorInfo);
    }

    // In production, send to error tracking service
    // Example: Sentry, LogRocket, DataDog, etc.
    this.sendToErrorService(errorLog);
  }

  /**
   * Get all logged errors
   */
  getLogs(): ErrorLog[] {
    return [...this.logs];
  }

  /**
   * Clear all logged errors
   */
  clearLogs(): void {
    this.logs = [];
  }

  /**
   * Send error to external error tracking service
   * This is a placeholder - implement with your actual service
   */
  private sendToErrorService(errorLog: ErrorLog): void {
    // Only send in production
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    // Example implementation for a generic error service
    // Replace with your actual error tracking service (Sentry, etc.)
    try {
      // Prepare error data
      const errorData = {
        message: errorLog.error.message,
        stack: errorLog.error.stack,
        context: errorLog.context,
        timestamp: errorLog.timestamp.toISOString(),
        userAgent: errorLog.userAgent,
        url: errorLog.url,
        componentStack: errorLog.errorInfo?.componentStack,
      };

      // Send to error tracking service
      // fetch('/api/log-error', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(errorData),
      // }).catch(console.error);

      // Or use a service like Sentry:
      // Sentry.captureException(errorLog.error, {
      //   contexts: {
      //     react: {
      //       componentStack: errorLog.errorInfo?.componentStack,
      //     },
      //   },
      //   tags: {
      //     context: errorLog.context,
      //   },
      // });
    } catch (loggingError) {
      // Fail silently - don't let error logging break the app
      console.error('Failed to log error:', loggingError);
    }
  }

  /**
   * Log a 3D rendering error
   */
  log3DError(error: Error, context?: string): void {
    this.log(error, undefined, `3D: ${context || 'Rendering'}`);
  }

  /**
   * Log an animation error
   */
  logAnimationError(error: Error, context?: string): void {
    this.log(error, undefined, `Animation: ${context || 'Playback'}`);
  }

  /**
   * Log a network error
   */
  logNetworkError(error: Error, context?: string): void {
    this.log(error, undefined, `Network: ${context || 'Request'}`);
  }
}

// Export singleton instance
export const errorLogger = new ErrorLogger();

/**
 * Global error handler for uncaught errors
 */
export function setupGlobalErrorHandlers(): void {
  if (typeof window === 'undefined') {
    return;
  }

  // Handle uncaught errors
  window.addEventListener('error', (event) => {
    errorLogger.log(
      new Error(event.message),
      undefined,
      'Uncaught Error'
    );
  });

  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    errorLogger.log(
      event.reason instanceof Error ? event.reason : new Error(String(event.reason)),
      undefined,
      'Unhandled Promise Rejection'
    );
  });
}
