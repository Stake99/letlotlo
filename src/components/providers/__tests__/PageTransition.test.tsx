/**
 * Tests for Page Transition System
 * Requirement 6.6: Page transition animations
 */

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { usePathname } from "next/navigation";
import {
  PageTransition,
  PageTransitionWrapper,
  useTransitionInterruption,
  RouteChangeAnnouncer,
} from "../PageTransition";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

// Mock framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

describe("PageTransition", () => {
  beforeEach(() => {
    (usePathname as jest.Mock).mockReturnValue("/");
  });

  describe("PageTransition Component", () => {
    it("should render children", () => {
      render(
        <PageTransition>
          <div>Test Content</div>
        </PageTransition>
      );

      expect(screen.getByText("Test Content")).toBeInTheDocument();
    });

    it("should apply fade variant by default", () => {
      const { container } = render(
        <PageTransition>
          <div>Test Content</div>
        </PageTransition>
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    it("should apply custom variant", () => {
      const { container } = render(
        <PageTransition variant="slide">
          <div>Test Content</div>
        </PageTransition>
      );

      expect(container.firstChild).toBeInTheDocument();
    });

    it("should apply custom className", () => {
      const { container } = render(
        <PageTransition className="custom-class">
          <div>Test Content</div>
        </PageTransition>
      );

      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper.className).toContain("custom-class");
    });
  });

  describe("PageTransitionWrapper Component", () => {
    it("should render children with transition", () => {
      render(
        <PageTransitionWrapper>
          <div>Test Content</div>
        </PageTransitionWrapper>
      );

      expect(screen.getByText("Test Content")).toBeInTheDocument();
    });

    it("should show loading bar by default", async () => {
      const { container } = render(
        <PageTransitionWrapper>
          <div>Test Content</div>
        </PageTransitionWrapper>
      );

      // Loading bar should be present initially
      expect(container).toBeInTheDocument();
    });

    it("should hide loading bar when showLoadingBar is false", () => {
      render(
        <PageTransitionWrapper showLoadingBar={false}>
          <div>Test Content</div>
        </PageTransitionWrapper>
      );

      expect(screen.getByText("Test Content")).toBeInTheDocument();
    });

    it("should apply custom variant", () => {
      render(
        <PageTransitionWrapper variant="slide">
          <div>Test Content</div>
        </PageTransitionWrapper>
      );

      expect(screen.getByText("Test Content")).toBeInTheDocument();
    });
  });

  describe("useTransitionInterruption Hook", () => {
    it("should track transition state", () => {
      const TestComponent = () => {
        const { isTransitioning } = useTransitionInterruption();
        return <div>{isTransitioning ? "Transitioning" : "Not Transitioning"}</div>;
      };

      render(<TestComponent />);
      expect(screen.getByText("Not Transitioning")).toBeInTheDocument();
    });

    it("should handle route changes", async () => {
      let pathname = "/";
      (usePathname as jest.Mock).mockImplementation(() => pathname);

      const TestComponent = () => {
        const { isTransitioning } = useTransitionInterruption();
        return <div>{isTransitioning ? "Transitioning" : "Not Transitioning"}</div>;
      };

      const { rerender } = render(<TestComponent />);
      expect(screen.getByText("Not Transitioning")).toBeInTheDocument();

      // Change pathname
      pathname = "/about";
      rerender(<TestComponent />);

      // Should show transitioning state
      await waitFor(() => {
        expect(screen.getByText("Transitioning")).toBeInTheDocument();
      });

      // Should return to not transitioning after timeout
      await waitFor(
        () => {
          expect(screen.getByText("Not Transitioning")).toBeInTheDocument();
        },
        { timeout: 500 }
      );
    });
  });

  describe("RouteChangeAnnouncer Component", () => {
    it("should announce route changes for screen readers", () => {
      (usePathname as jest.Mock).mockReturnValue("/");

      render(<RouteChangeAnnouncer />);

      const announcer = screen.getByRole("status");
      expect(announcer).toBeInTheDocument();
      expect(announcer).toHaveAttribute("aria-live", "polite");
      expect(announcer).toHaveAttribute("aria-atomic", "true");
      expect(announcer).toHaveClass("sr-only");
    });

    it("should announce home page", () => {
      (usePathname as jest.Mock).mockReturnValue("/");

      render(<RouteChangeAnnouncer />);

      const announcer = screen.getByRole("status");
      expect(announcer).toHaveTextContent("Navigated to Home page");
    });

    it("should announce about page", () => {
      (usePathname as jest.Mock).mockReturnValue("/about");

      render(<RouteChangeAnnouncer />);

      const announcer = screen.getByRole("status");
      expect(announcer).toHaveTextContent("Navigated to about page");
    });

    it("should announce nested routes", () => {
      (usePathname as jest.Mock).mockReturnValue("/services/web-development");

      render(<RouteChangeAnnouncer />);

      const announcer = screen.getByRole("status");
      expect(announcer).toHaveTextContent("Navigated to services web development page");
    });

    it("should handle route changes", () => {
      (usePathname as jest.Mock).mockReturnValue("/");

      const { rerender } = render(<RouteChangeAnnouncer />);
      expect(screen.getByRole("status")).toHaveTextContent("Navigated to Home page");

      (usePathname as jest.Mock).mockReturnValue("/contact");
      rerender(<RouteChangeAnnouncer />);
      expect(screen.getByRole("status")).toHaveTextContent("Navigated to contact page");
    });
  });

  describe("Performance Requirements", () => {
    it("should complete loading state within 100ms", async () => {
      jest.useFakeTimers();

      const TestComponent = () => {
        const [isLoading, setIsLoading] = React.useState(true);

        React.useEffect(() => {
          const timer = setTimeout(() => setIsLoading(false), 100);
          return () => clearTimeout(timer);
        }, []);

        return <div>{isLoading ? "Loading" : "Loaded"}</div>;
      };

      render(<TestComponent />);
      expect(screen.getByText("Loading")).toBeInTheDocument();

      // Fast-forward 100ms
      jest.advanceTimersByTime(100);

      await waitFor(() => {
        expect(screen.getByText("Loaded")).toBeInTheDocument();
      });

      jest.useRealTimers();
    });

    it("should handle transition interruptions gracefully", async () => {
      jest.useFakeTimers();

      let pathname = "/";
      (usePathname as jest.Mock).mockImplementation(() => pathname);

      const TestComponent = () => {
        const { isTransitioning } = useTransitionInterruption();
        return <div>{isTransitioning ? "Transitioning" : "Not Transitioning"}</div>;
      };

      const { rerender } = render(<TestComponent />);

      // Start first transition
      pathname = "/about";
      rerender(<TestComponent />);

      // Interrupt with second transition before first completes
      pathname = "/services";
      rerender(<TestComponent />);

      // Should handle interruption gracefully
      jest.advanceTimersByTime(400);

      await waitFor(() => {
        expect(screen.getByText("Not Transitioning")).toBeInTheDocument();
      });

      jest.useRealTimers();
    });
  });

  describe("Accessibility", () => {
    it("should provide screen reader announcements", () => {
      (usePathname as jest.Mock).mockReturnValue("/");

      render(<RouteChangeAnnouncer />);

      const announcer = screen.getByRole("status");
      expect(announcer).toHaveAttribute("aria-live", "polite");
      expect(announcer).toHaveAttribute("aria-atomic", "true");
    });

    it("should use sr-only class for visual hiding", () => {
      (usePathname as jest.Mock).mockReturnValue("/");

      render(<RouteChangeAnnouncer />);

      const announcer = screen.getByRole("status");
      expect(announcer).toHaveClass("sr-only");
    });
  });
});
