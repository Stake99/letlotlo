"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { feedbackVariants } from "@/lib/interaction-feedback";
import { cn } from "@/lib/utils";

/**
 * Feedback Notification Component
 * Provides immediate visual feedback for user actions
 * Requirement 13.5: Visual feedback within 100ms
 */

export type NotificationType = "success" | "error" | "warning" | "info";

export interface FeedbackNotificationProps {
  type: NotificationType;
  message: string;
  isVisible: boolean;
  onClose?: () => void;
  duration?: number; // Auto-close duration in ms
  position?: "top" | "bottom" | "top-right" | "top-left" | "bottom-right" | "bottom-left";
  className?: string;
}

const notificationStyles: Record<NotificationType, string> = {
  success: "bg-green-50 border-green-500 text-green-900",
  error: "bg-red-50 border-red-500 text-red-900",
  warning: "bg-yellow-50 border-yellow-500 text-yellow-900",
  info: "bg-blue-50 border-blue-500 text-blue-900",
};

const notificationIcons: Record<NotificationType, string> = {
  success: "✓",
  error: "✕",
  warning: "⚠",
  info: "ℹ",
};

const positionStyles = {
  top: "top-4 left-1/2 -translate-x-1/2",
  bottom: "bottom-4 left-1/2 -translate-x-1/2",
  "top-right": "top-4 right-4",
  "top-left": "top-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "bottom-left": "bottom-4 left-4",
};

export const FeedbackNotification: React.FC<FeedbackNotificationProps> = ({
  type,
  message,
  isVisible,
  onClose,
  duration = 5000,
  position = "top-right",
  className,
}) => {
  React.useEffect(() => {
    if (isVisible && duration > 0 && onClose) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const animationVariant = type === "error" ? feedbackVariants.error : feedbackVariants.success;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={animationVariant}
          initial="initial"
          animate="animate"
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.1 }} // 100ms for immediate feedback
          className={cn(
            "fixed z-50 flex items-center gap-3 px-4 py-3 rounded-lg border-l-4 shadow-lg max-w-md",
            notificationStyles[type],
            positionStyles[position],
            className
          )}
        >
          <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-current/10 font-bold">
            {notificationIcons[type]}
          </div>
          <p className="flex-1 text-sm font-medium">{message}</p>
          {onClose && (
            <button
              onClick={onClose}
              className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded hover:bg-current/10 transition-colors"
              aria-label="Close notification"
            >
              ✕
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/**
 * Toast Notification Hook
 * Provides a simple API for showing notifications
 */
export interface ToastOptions {
  type: NotificationType;
  message: string;
  duration?: number;
  position?: FeedbackNotificationProps["position"];
}

export const useToast = () => {
  const [toast, setToast] = React.useState<ToastOptions | null>(null);

  const showToast = React.useCallback((options: ToastOptions) => {
    setToast(options);
  }, []);

  const hideToast = React.useCallback(() => {
    setToast(null);
  }, []);

  const ToastComponent = React.useMemo(
    () =>
      toast ? (
        <FeedbackNotification
          type={toast.type}
          message={toast.message}
          isVisible={!!toast}
          onClose={hideToast}
          duration={toast.duration}
          position={toast.position}
        />
      ) : null,
    [toast, hideToast]
  );

  return {
    showToast,
    hideToast,
    ToastComponent,
  };
};

/**
 * Inline Feedback Message
 * For form validation and inline feedback
 */
export interface InlineFeedbackProps {
  type: NotificationType;
  message: string;
  isVisible: boolean;
  className?: string;
}

export const InlineFeedback: React.FC<InlineFeedbackProps> = ({
  type,
  message,
  isVisible,
  className,
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, height: 0, marginTop: 0 }}
          animate={{ opacity: 1, height: "auto", marginTop: 8 }}
          exit={{ opacity: 0, height: 0, marginTop: 0 }}
          transition={{ duration: 0.1 }} // 100ms for immediate feedback
          className={cn("overflow-hidden", className)}
        >
          <div
            className={cn(
              "flex items-start gap-2 px-3 py-2 rounded-md text-sm",
              notificationStyles[type]
            )}
          >
            <span className="flex-shrink-0 font-bold">{notificationIcons[type]}</span>
            <p className="flex-1">{message}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
