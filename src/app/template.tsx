"use client";

import { PageTransitionWrapper, RouteChangeAnnouncer } from "@/components/providers/PageTransition";

/**
 * Root Template for Page Transitions
 * Applies smooth transitions to all page navigations
 * Requirements: 6.6, 13.5
 * 
 * Note: template.tsx creates a new instance on navigation,
 * which is perfect for page transitions with AnimatePresence
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RouteChangeAnnouncer />
      <PageTransitionWrapper variant="fade" showLoadingBar={true}>
        {children}
      </PageTransitionWrapper>
    </>
  );
}
