import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { jest } from "@jest/globals";
import Hero, { HomeHero, AboutHero, ServicesHero, ProjectsHero, ContactHero } from "./Hero";

// Mock Framer Motion
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <p {...props}>{children}</p>,
    a: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <a {...props}>{children}</a>,
    section: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <section {...props}>{children}</section>,
  },
  useScroll: () => ({ scrollY: { get: () => 0 } }),
  useTransform: () => ({ get: () => 0 }),
  useSpring: () => ({ get: () => 0 }),
}));

// Mock Three.js components
jest.mock("@/components/three/ThreeScene", () => {
  return function MockThreeScene({ children }: { children: React.ReactNode }) {
    return <div data-testid="three-scene">{children}</div>;
  };
});

jest.mock("@/components/three/FloatingObjects", () => {
  const MockFloatingObjects = () => <div data-testid="floating-objects" />;
  MockFloatingObjects.FloatingObjectsPresets = {
    hero: { count: 8, shapes: ["sphere"], colors: ["#3b82f6"], animationSpeed: 0.8 },
  };
  return MockFloatingObjects;
});

// Mock parallax utilities
jest.mock("@/lib/parallax", () => ({
  calculateMouseParallax: () => ({ x: 0, y: 0 }),
}));

describe("Hero Component", () => {
  const defaultProps = {
    title: "Test Title",
    subtitle: "Test Subtitle",
  };

  beforeEach(() => {
    // Mock getBoundingClientRect
    Element.prototype.getBoundingClientRect = jest.fn(() => ({
      width: 1200,
      height: 800,
      top: 0,
      left: 0,
      bottom: 800,
      right: 1200,
      x: 0,
      y: 0,
      toJSON: jest.fn(),
    }));

    // Mock window dimensions
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 1200,
    });
    Object.defineProperty(window, "innerHeight", {
      writable: true,
      configurable: true,
      value: 800,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("Basic Rendering", () => {
    it("renders title and subtitle correctly", () => {
      render(<Hero {...defaultProps} />);
      
      expect(screen.getByText("Test Title")).toBeInTheDocument();
      expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
    });

    it("applies correct CSS classes for different heights", () => {
      const { rerender } = render(<Hero {...defaultProps} height="screen" />);
      expect(screen.getByRole("region")).toHaveClass("min-h-screen");

      rerender(<Hero {...defaultProps} height="large" />);
      expect(screen.getByRole("region")).toHaveClass("min-h-[80vh]");

      rerender(<Hero {...defaultProps} height="medium" />);
      expect(screen.getByRole("region")).toHaveClass("min-h-[60vh]");
    });

    it("applies correct text alignment classes", () => {
      const { rerender } = render(<Hero {...defaultProps} textAlign="center" />);
      expect(screen.getByRole("region").querySelector("div")).toHaveClass("text-center", "items-center");

      rerender(<Hero {...defaultProps} textAlign="left" />);
      expect(screen.getByRole("region").querySelector("div")).toHaveClass("text-left", "items-start");
    });

    it("applies custom className when provided", () => {
      render(<Hero {...defaultProps} className="custom-hero" />);
      expect(screen.getByRole("region")).toHaveClass("custom-hero");
    });
  });

  describe("3D Background Integration", () => {
    it("renders 3D background scene by default", () => {
      render(<Hero {...defaultProps} />);
      expect(screen.getByTestId("three-scene")).toBeInTheDocument();
      expect(screen.getByTestId("floating-objects")).toBeInTheDocument();
    });

    it("does not render 3D background when disabled", () => {
      render(<Hero {...defaultProps} enable3D={false} />);
      expect(screen.queryByTestId("three-scene")).not.toBeInTheDocument();
      expect(screen.queryByTestId("floating-objects")).not.toBeInTheDocument();
    });

    it("renders custom background scene when provided", () => {
      const CustomScene = () => <div data-testid="custom-scene">Custom Scene</div>;
      render(<Hero {...defaultProps} backgroundScene={CustomScene} />);
      
      expect(screen.getByTestId("custom-scene")).toBeInTheDocument();
      expect(screen.getByText("Custom Scene")).toBeInTheDocument();
    });
  });

  describe("CTA Buttons", () => {
    it("renders primary CTA button when provided", () => {
      const ctaButton = { text: "Get Started", href: "/start" };
      render(<Hero {...defaultProps} ctaButton={ctaButton} />);
      
      const button = screen.getByRole("link", { name: "Get Started" });
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute("href", "/start");
    });

    it("renders secondary button when provided", () => {
      const secondaryButton = { text: "Learn More", href: "/learn", variant: "outline" as const };
      render(<Hero {...defaultProps} secondaryButton={secondaryButton} />);
      
      const button = screen.getByRole("link", { name: "Learn More" });
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute("href", "/learn");
    });

    it("renders both buttons when both are provided", () => {
      const ctaButton = { text: "Get Started", href: "/start" };
      const secondaryButton = { text: "Learn More", href: "/learn" };
      
      render(<Hero {...defaultProps} ctaButton={ctaButton} secondaryButton={secondaryButton} />);
      
      expect(screen.getByRole("link", { name: "Get Started" })).toBeInTheDocument();
      expect(screen.getByRole("link", { name: "Learn More" })).toBeInTheDocument();
    });

    it("does not render button container when no buttons provided", () => {
      render(<Hero {...defaultProps} />);
      expect(screen.queryByRole("link")).not.toBeInTheDocument();
    });
  });

  describe("Mouse Parallax Effects", () => {
    it("handles mouse movement events", async () => {
      render(<Hero {...defaultProps} enableParallax={true} />);
      
      // Simulate mouse movement
      fireEvent.mouseMove(window, { clientX: 100, clientY: 200 });
      
      // Wait for any async updates
      await waitFor(() => {
        // The component should handle the mouse event without errors
        expect(screen.getByText("Test Title")).toBeInTheDocument();
      });
    });

    it("handles window resize events", async () => {
      render(<Hero {...defaultProps} enableParallax={true} />);
      
      // Simulate window resize
      fireEvent.resize(window);
      
      await waitFor(() => {
        expect(screen.getByText("Test Title")).toBeInTheDocument();
      });
    });

    it("disables parallax when enableParallax is false", () => {
      render(<Hero {...defaultProps} enableParallax={false} />);
      
      // Component should render without parallax effects
      expect(screen.getByText("Test Title")).toBeInTheDocument();
    });
  });

  describe("Responsive Design", () => {
    it("applies responsive typography classes", () => {
      render(<Hero {...defaultProps} />);
      
      const title = screen.getByText("Test Title");
      expect(title).toHaveClass(
        "text-4xl", "sm:text-5xl", "md:text-6xl", "lg:text-7xl", "xl:text-8xl"
      );
      
      const subtitle = screen.getByText("Test Subtitle");
      expect(subtitle).toHaveClass(
        "text-lg", "sm:text-xl", "md:text-2xl", "lg:text-3xl"
      );
    });

    it("applies responsive button layout classes", () => {
      const ctaButton = { text: "Get Started", href: "/start" };
      render(<Hero {...defaultProps} ctaButton={ctaButton} />);
      
      const buttonContainer = screen.getByRole("link").parentElement;
      expect(buttonContainer).toHaveClass("flex", "flex-col", "sm:flex-row");
    });
  });

  describe("Accessibility", () => {
    it("has proper semantic structure", () => {
      render(<Hero {...defaultProps} />);
      
      expect(screen.getByRole("region")).toBeInTheDocument();
      expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    });

    it("provides accessible button links", () => {
      const ctaButton = { text: "Get Started", href: "/start" };
      render(<Hero {...defaultProps} ctaButton={ctaButton} />);
      
      const button = screen.getByRole("link", { name: "Get Started" });
      expect(button).toHaveAttribute("href", "/start");
    });

    it("has proper text contrast with background overlay", () => {
      render(<Hero {...defaultProps} />);
      
      const title = screen.getByText("Test Title");
      expect(title).toHaveClass("text-white", "drop-shadow-lg");
      
      const subtitle = screen.getByText("Test Subtitle");
      expect(subtitle).toHaveClass("text-white/90");
    });
  });

  describe("Performance Optimizations", () => {
    it("renders scroll indicator with proper animations", () => {
      render(<Hero {...defaultProps} />);
      
      // Check for scroll indicator presence
      const scrollIndicator = screen.getByRole("region").querySelector(".absolute.bottom-8");
      expect(scrollIndicator).toBeInTheDocument();
    });

    it("handles component cleanup properly", () => {
      const { unmount } = render(<Hero {...defaultProps} enableParallax={true} />);
      
      // Should unmount without errors
      expect(() => unmount()).not.toThrow();
    });
  });

  describe("Pre-configured Variants", () => {
    it("renders HomeHero with correct props", () => {
      render(<HomeHero />);
      
      expect(screen.getByText("Welcome to Letlotlo International")).toBeInTheDocument();
      expect(screen.getByText("Innovative solutions for a connected world")).toBeInTheDocument();
      expect(screen.getByRole("region")).toHaveClass("min-h-screen");
    });

    it("renders AboutHero with correct props", () => {
      render(<AboutHero />);
      
      expect(screen.getByText("Our Story")).toBeInTheDocument();
      expect(screen.getByText("Building the future through innovation and collaboration")).toBeInTheDocument();
      expect(screen.getByRole("region")).toHaveClass("min-h-[80vh]");
    });

    it("renders ServicesHero with correct props", () => {
      render(<ServicesHero />);
      
      expect(screen.getByText("Our Services")).toBeInTheDocument();
      expect(screen.getByText("Comprehensive solutions tailored to your needs")).toBeInTheDocument();
    });

    it("renders ProjectsHero with correct props", () => {
      render(<ProjectsHero />);
      
      expect(screen.getByText("Our Work")).toBeInTheDocument();
      expect(screen.getByText("Showcasing innovation and excellence in every project")).toBeInTheDocument();
    });

    it("renders ContactHero with correct props", () => {
      render(<ContactHero />);
      
      expect(screen.getByText("Get In Touch")).toBeInTheDocument();
      expect(screen.getByText("Let's discuss how we can help bring your vision to life")).toBeInTheDocument();
      expect(screen.getByRole("region")).toHaveClass("min-h-[60vh]");
    });
  });

  describe("Edge Cases", () => {
    it("handles empty title and subtitle gracefully", () => {
      render(<Hero title="" subtitle="" />);
      
      expect(screen.getByRole("heading")).toHaveTextContent("");
      expect(screen.getByRole("region")).toBeInTheDocument();
    });

    it("handles very long title and subtitle", () => {
      const longTitle = "This is a very long title that should wrap properly across multiple lines and maintain readability";
      const longSubtitle = "This is an extremely long subtitle that contains a lot of text and should also wrap properly while maintaining good typography and spacing throughout the entire hero section";
      
      render(<Hero title={longTitle} subtitle={longSubtitle} />);
      
      expect(screen.getByText(longTitle)).toBeInTheDocument();
      expect(screen.getByText(longSubtitle)).toBeInTheDocument();
    });

    it("handles custom gradient properly", () => {
      const customGradient = "linear-gradient(45deg, #ff0000, #00ff00)";
      render(<Hero {...defaultProps} gradient={customGradient} />);
      
      const heroSection = screen.getByRole("region");
      expect(heroSection).toHaveStyle({ background: customGradient });
    });
  });
});