"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { pageTransition, pageSlide, transitions } from "@/lib/animations";

/**
 * Page Transition Provider
 * Implements smooth page transition animations between routes
 * Requirements: 6.6, 13.5
 */

export interface PageTransitionProps {
  children: React.ReactNode;
  variant?: "fade" | "slide" | "scale";
  className?: string;
}

/**
 * Page transition variants with performance optimization
 */
const transitionVariants = {
  fade: {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: transitions.page,
    },
    exit: { 
      opacity: 0,
      transition: transitions.fast,
    },
  },
  
  slide: pageSlide,
  
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: transitions.page,
    },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: transitions.fast,
    },
  },
};

/**
 * PageTransition Component
 * Wraps page content with smooth transition animations
 */
export const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  variant = "fade",
  className,
}) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        variants={transitionVariants[variant]}
        initial="initial"
        animate="animate"
        exit="exit"
        className={className}
        style={{
          willChange: "opacity, transform",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

/**
 * Page Transition Wrapper with Loading State
 * Includes loading indicator for slow transitions
 */
export interface PageTransitionWrapperProps {
  children: React.ReactNode;
  variant?: "fade" | "slide" | "scale";
  showLoadingBar?: boolean;
  className?: string;
}

export const PageTransitionWrapper: React.FC<PageTransitionWrapperProps> = ({
  children,
  variant = "fade",
  showLoadingBar = true,
  className,
}) => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    // Show loading state briefly during transition
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 100); // 100ms feedback requirement
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* Loading Bar */}
      {showLoadingBar && (
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ scaleX: 0, opacity: 1 }}
              animate={{ scaleX: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary z-50 origin-left"
            />
          )}
        </AnimatePresence>
      )}

      {/* Page Content with Transition */}
      <PageTransition variant={variant} className={className}>
        {children}
      </PageTransition>
    </>
  );
};

/**
 * Transition Interruption Handler
 * Handles graceful interruption of page transitions
 */
export const useTransitionInterruption = () => {
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const pathname = usePathname();
  const previousPathname = React.useRef(pathname);

  React.useEffect(() => {
    if (pathname !== previousPathname.current) {
      // Start transition
      setIsTransitioning(true);
      
      // Complete transition after animation duration
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        previousPathname.current = pathname;
      }, 400); // Match page transition duration

      return () => {
        // Handle interruption - immediately complete transition
        clearTimeout(timer);
        setIsTransitioning(false);
      };
    }
  }, [pathname]);

  return { isTransitioning };
};

/**
 * Smooth Scroll to Top on Route Change
 * Ensures smooth scroll behavior during page transitions
 */
export const ScrollToTop: React.FC = () => {
  const pathname = usePathname();

  React.useEffect(() => {
    // Smooth scroll to top on route change
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

/**
 * Page Transition with Scroll Restoration
 * Maintains scroll position for back/forward navigation
 */
export const useScrollRestoration = () => {
  const pathname = usePathname();
  const scrollPositions = React.useRef<Record<string, number>>({});

  React.useEffect(() => {
    // Save current scroll position
    const handleScroll = () => {
      scrollPositions.current[pathname] = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  React.useEffect(() => {
    // Restore scroll position if available
    const savedPosition = scrollPositions.current[pathname];
    if (savedPosition !== undefined) {
      window.scrollTo({
        top: savedPosition,
        behavior: "instant" as ScrollBehavior,
      });
    } else {
      // Scroll to top for new pages
      window.scrollTo({
        top: 0,
        behavior: "instant" as ScrollBehavior,
      });
    }
  }, [pathname]);
};

/**
 * Route Change Announcer for Screen Readers
 * Announces page changes for accessibility
 */
export const RouteChangeAnnouncer: React.FC = () => {
  const pathname = usePathname();
  const [announcement, setAnnouncement] = React.useState("");

  React.useEffect(() => {
    // Extract page name from pathname
    const pageName = pathname === "/" 
      ? "Home" 
      : pathname.split("/").filter(Boolean).join(" ").replace(/-/g, " ");
    
    setAnnouncement(`Navigated to ${pageName} page`);
  }, [pathname]);

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
    >
      {announcement}
    </div>
  );
};
