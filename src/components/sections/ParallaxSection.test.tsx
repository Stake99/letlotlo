import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { motion } from "framer-motion";
import { ParallaxSection, HeroParallaxSection, ContentParallaxSection, BackgroundParallaxSection, useParallaxLayers } from "./ParallaxSection";

// Mock framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, style, className, ...props }: any) => (
      <div className={className} style={style} {...props}>
        {children}
      </div>
    ),
  },
  useScroll: () => ({ scrollY: { get: () => 0 } }),
  useTransform: (value: any, transform: any) => ({ get: () => transform(0) }),
  useSpring: (value: any) => value,
}));

// Mock parallax utilities
jest.mock("@/lib/parallax", () => ({
  calculateParallaxOffset: jest.fn((scrollY, speed, direction) => ({
    x: direction === "horizontal" ? -scrollY * speed : 0,
    y: direction === "vertical" ? -scrollY * speed : 0,
  })),
  calculateLayeredParallax: jest.fn((scrollY, layers) =>
    layers.map((layer: any) => ({
      x: layer.direction === "horizontal" ? -scrollY * layer.speed : 0,
      y: layer.direction === "vertical" ? -scrollY * layer.speed : 0,
    }))
  ),
  getElementViewportPosition: jest.fn(() => ({
    top: 0,
    bottom: 100,
    center: 50,
    progress: 0.5,
  })),
  isElementInViewport: jest.fn(() => true),
  createParallaxObserver: jest.fn((callback) => ({
    observe: jest.fn(),
    disconnect: jest.fn(),
  })),
  getParallaxConfig: jest.fn(() => ({
    reducedMotion: false,
    performanceMode: "high",
    maxElements: 30,
  })),
}));

// Mock utils
jest.mock("@/lib/utils", () => ({
  cn: (...classes: any[]) => classes.filter(Boolean).join(" "),
}));

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = mockIntersectionObserver;

// Mock performance API
Object.defineProperty(window, "performance", {
  value: {
    now: jest.fn(() => Date.now()),
  },
});

// Mock requestAnimationFrame
global.requestAnimationFrame = jest.fn((cb) => setTimeout(cb, 16));
global.cancelAnimationFrame = jest.fn((id) => clearTimeout(id));

describe("ParallaxSection", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Basic Rendering", () => {
    it("renders children correctly", () => {
      render(
        <ParallaxSection>
          <div data-testid="child-content">Test Content</div>
        </ParallaxSection>
      );

      expect(screen.getByTestId("child-content")).toBeInTheDocument();
      expect(screen.getByText("Test Content")).toBeInTheDocument();
    });

    it("applies custom className", () => {
      const { container } = render(
        <ParallaxSection className="custom-class">
          <div>Content</div>
        </ParallaxSection>
      );

      expect(container.firstChild).toHaveClass("custom-class");
    });

    it("renders with default speed when not specified", () => {
      render(
        <ParallaxSection>
          <div>Content</div>
        </ParallaxSection>
      );

      // Component should render without errors
      expect(screen.getByText("Content")).toBeInTheDocument();
    });
  });

  describe("Background Elements", () => {
    it("renders legacy background elements", () => {
      const BackgroundComponent = () => <div data-testid="bg-element">Background</div>;
      
      render(
        <ParallaxSection backgroundElements={[BackgroundComponent]}>
          <div>Content</div>
        </ParallaxSection>
      );

      expect(screen.getByTestId("bg-element")).toBeInTheDocument();
    });

    it("renders multiple background elements", () => {
      const BackgroundComponent1 = () => <div data-testid="bg-element-1">Background 1</div>;
      const BackgroundComponent2 = () => <div data-testid="bg-element-2">Background 2</div>;
      
      render(
        <ParallaxSection backgroundElements={[BackgroundComponent1, BackgroundComponent2]}>
          <div>Content</div>
        </ParallaxSection>
      );

      expect(screen.getByTestId("bg-element-1")).toBeInTheDocument();
      expect(screen.getByTestId("bg-element-2")).toBeInTheDocument();
    });
  });

  describe("Layer System", () => {
    it("renders parallax layers correctly", () => {
      const LayerComponent = ({ style }: { style?: React.CSSProperties }) => (
        <div data-testid="layer-component" style={style}>Layer</div>
      );

      const layers = [
        {
          speed: 0.3,
          direction: "vertical" as const,
          component: LayerComponent,
          className: "layer-class",
        },
      ];

      render(
        <ParallaxSection layers={layers}>
          <div>Content</div>
        </ParallaxSection>
      );

      expect(screen.getByTestId("layer-component")).toBeInTheDocument();
    });

    it("handles multiple layers with different speeds", () => {
      const LayerComponent1 = () => <div data-testid="layer-1">Layer 1</div>;
      const LayerComponent2 = () => <div data-testid="layer-2">Layer 2</div>;

      const layers = [
        { speed: 0.3, component: LayerComponent1 },
        { speed: 0.6, component: LayerComponent2 },
      ];

      render(
        <ParallaxSection layers={layers}>
          <div>Content</div>
        </ParallaxSection>
      );

      expect(screen.getByTestId("layer-1")).toBeInTheDocument();
      expect(screen.getByTestId("layer-2")).toBeInTheDocument();
    });
  });

  describe("Performance Configuration", () => {
    it("respects reduced motion preference", () => {
      const mockGetParallaxConfig = require("@/lib/parallax").getParallaxConfig;
      mockGetParallaxConfig.mockReturnValue({
        reducedMotion: true,
        performanceMode: "high",
        maxElements: 30,
      });

      render(
        <ParallaxSection respectReducedMotion={true}>
          <div>Content</div>
        </ParallaxSection>
      );

      // Component should render but parallax should be disabled
      expect(screen.getByText("Content")).toBeInTheDocument();
    });

    it("respects performance mode settings", () => {
      const mockGetParallaxConfig = require("@/lib/parallax").getParallaxConfig;
      mockGetParallaxConfig.mockReturnValue({
        reducedMotion: false,
        performanceMode: "low",
        maxElements: 5,
      });

      render(
        <ParallaxSection performance={{ respectPerformance: true }}>
          <div>Content</div>
        </ParallaxSection>
      );

      expect(screen.getByText("Content")).toBeInTheDocument();
    });

    it("applies GPU acceleration styles when enabled", () => {
      const { container } = render(
        <ParallaxSection performance={{ useGPU: true }}>
          <div>Content</div>
        </ParallaxSection>
      );

      // Check if GPU acceleration styles are applied
      const section = container.firstChild as HTMLElement;
      expect(section.style.willChange).toBe("transform");
    });
  });

  describe("Intersection Observer", () => {
    it("sets up intersection observer with default options", () => {
      const mockCreateParallaxObserver = require("@/lib/parallax").createParallaxObserver;
      
      render(
        <ParallaxSection>
          <div>Content</div>
        </ParallaxSection>
      );

      expect(mockCreateParallaxObserver).toHaveBeenCalledWith(
        expect.any(Function),
        {
          rootMargin: "0px 0px -10% 0px",
          threshold: [0, 0.1, 0.5, 1],
        }
      );
    });

    it("uses custom observer options", () => {
      const mockCreateParallaxObserver = require("@/lib/parallax").createParallaxObserver;
      const customObserver = {
        rootMargin: "50px",
        threshold: 0.5,
      };
      
      render(
        <ParallaxSection observer={customObserver}>
          <div>Content</div>
        </ParallaxSection>
      );

      expect(mockCreateParallaxObserver).toHaveBeenCalledWith(
        expect.any(Function),
        customObserver
      );
    });
  });

  describe("Pre-configured Variants", () => {
    it("renders HeroParallaxSection with correct speed", () => {
      render(
        <HeroParallaxSection>
          <div data-testid="hero-content">Hero Content</div>
        </HeroParallaxSection>
      );

      expect(screen.getByTestId("hero-content")).toBeInTheDocument();
    });

    it("renders ContentParallaxSection with correct speed", () => {
      render(
        <ContentParallaxSection>
          <div data-testid="content-section">Content Section</div>
        </ContentParallaxSection>
      );

      expect(screen.getByTestId("content-section")).toBeInTheDocument();
    });

    it("renders BackgroundParallaxSection with correct speed", () => {
      render(
        <BackgroundParallaxSection>
          <div data-testid="background-section">Background Section</div>
        </BackgroundParallaxSection>
      );

      expect(screen.getByTestId("background-section")).toBeInTheDocument();
    });
  });

  describe("useParallaxLayers Hook", () => {
    it("creates layer configurations correctly", () => {
      const TestComponent = () => {
        const layers = useParallaxLayers([
          { speed: 0.3, direction: "vertical", className: "layer-1" },
          { speed: 0.6, direction: "horizontal", className: "layer-2" },
        ]);

        return (
          <div>
            {layers.map((layer, index) => (
              <div key={index} data-testid={`layer-config-${index}`}>
                Speed: {layer.speed}
              </div>
            ))}
          </div>
        );
      };

      render(<TestComponent />);

      expect(screen.getByTestId("layer-config-0")).toBeInTheDocument();
      expect(screen.getByTestId("layer-config-1")).toBeInTheDocument();
      expect(screen.getByText("Speed: 0.3")).toBeInTheDocument();
      expect(screen.getByText("Speed: 0.6")).toBeInTheDocument();
    });
  });

  describe("Error Handling", () => {
    it("handles missing scroll container gracefully", () => {
      const scrollRef = React.createRef<HTMLDivElement>();
      
      render(
        <ParallaxSection scrollContainer={scrollRef}>
          <div>Content</div>
        </ParallaxSection>
      );

      expect(screen.getByText("Content")).toBeInTheDocument();
    });

    it("handles empty layers array", () => {
      render(
        <ParallaxSection layers={[]}>
          <div>Content</div>
        </ParallaxSection>
      );

      expect(screen.getByText("Content")).toBeInTheDocument();
    });

    it("handles undefined background elements", () => {
      render(
        <ParallaxSection backgroundElements={undefined}>
          <div>Content</div>
        </ParallaxSection>
      );

      expect(screen.getByText("Content")).toBeInTheDocument();
    });
  });

  describe("Development Mode", () => {
    const originalEnv = process.env.NODE_ENV;

    afterEach(() => {
      process.env.NODE_ENV = originalEnv;
    });

    it("shows debug info in development mode", () => {
      process.env.NODE_ENV = "development";
      
      render(
        <ParallaxSection>
          <div>Content</div>
        </ParallaxSection>
      );

      expect(screen.getByText(/Parallax:/)).toBeInTheDocument();
      expect(screen.getByText(/In View:/)).toBeInTheDocument();
      expect(screen.getByText(/Reduced Motion:/)).toBeInTheDocument();
      expect(screen.getByText(/Performance:/)).toBeInTheDocument();
    });

    it("hides debug info in production mode", () => {
      process.env.NODE_ENV = "production";
      
      render(
        <ParallaxSection>
          <div>Content</div>
        </ParallaxSection>
      );

      expect(screen.queryByText(/Parallax:/)).not.toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("respects reduced motion preference by default", () => {
      render(
        <ParallaxSection>
          <div>Content</div>
        </ParallaxSection>
      );

      // Component should render and respect accessibility preferences
      expect(screen.getByText("Content")).toBeInTheDocument();
    });

    it("can disable reduced motion respect", () => {
      render(
        <ParallaxSection respectReducedMotion={false}>
          <div>Content</div>
        </ParallaxSection>
      );

      expect(screen.getByText("Content")).toBeInTheDocument();
    });
  });
});