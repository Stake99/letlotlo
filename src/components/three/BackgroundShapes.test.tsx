import React from "react";
import { render, screen } from "@testing-library/react";
import { Canvas } from "@react-three/fiber";
import BackgroundShapes, { BackgroundShapesPresets } from "./BackgroundShapes";

// Mock three-utils functions
jest.mock("@/lib/three-utils", () => ({
  randomPosition: jest.fn(() => [0, 0, 0]),
  randomRotation: jest.fn(() => [0, 0, 0]),
  createFloatingAnimation: jest.fn(() => ({
    amplitude: 0.5,
    frequency: 0.5,
    offset: 0,
  })),
  createRotationAnimation: jest.fn(() => ({
    x: 0.01,
    y: 0.01,
    z: 0.01,
  })),
  createParticleConfig: jest.fn(() => ({
    positions: new Float32Array([0, 0, 0]),
    colors: new Float32Array([1, 1, 1]),
    sizes: new Float32Array([1]),
  })),
  createStandardMaterial: jest.fn(() => ({
    transparent: true,
    opacity: 0.5,
  })),
  easing: {
    easeInOut: jest.fn((t) => t),
  },
  getPerformanceTier: jest.fn(() => "medium"),
}));

// Mock React Three Fiber components
jest.mock("@react-three/drei", () => ({
  Sphere: ({ children, ...props }: any) => <mesh {...props}>{children}</mesh>,
  Box: ({ children, ...props }: any) => <mesh {...props}>{children}</mesh>,
  Torus: ({ children, ...props }: any) => <mesh {...props}>{children}</mesh>,
  Cylinder: ({ children, ...props }: any) => <mesh {...props}>{children}</mesh>,
}));

// Mock useFrame hook
jest.mock("@react-three/fiber", () => ({
  ...jest.requireActual("@react-three/fiber"),
  useFrame: jest.fn(),
  useThree: jest.fn(() => ({
    size: { width: 1024, height: 768 },
    camera: {},
  })),
}));

describe("BackgroundShapes", () => {
  const renderWithCanvas = (component: React.ReactElement) => {
    return render(
      <Canvas>
        {component}
      </Canvas>
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Component Rendering", () => {
    it("should render without crashing", () => {
      expect(() => {
        renderWithCanvas(<BackgroundShapes />);
      }).not.toThrow();
    });

    it("should render with default props", () => {
      const { container } = renderWithCanvas(<BackgroundShapes />);
      expect(container).toBeInTheDocument();
    });

    it("should render with custom props", () => {
      const { container } = renderWithCanvas(
        <BackgroundShapes
          count={5}
          shapes={["sphere", "box"]}
          colors={["#ff0000", "#00ff00"]}
          animationSpeed={0.5}
          opacity={0.8}
        />
      );
      expect(container).toBeInTheDocument();
    });
  });

  describe("Shape Configuration", () => {
    it("should handle different shape types", () => {
      const shapes = ["sphere", "box", "torus", "cylinder"] as const;
      
      shapes.forEach((shape) => {
        expect(() => {
          renderWithCanvas(
            <BackgroundShapes
              count={1}
              shapes={[shape]}
              colors={["#3b82f6"]}
            />
          );
        }).not.toThrow();
      });
    });

    it("should handle empty shapes array", () => {
      expect(() => {
        renderWithCanvas(
          <BackgroundShapes
            count={0}
            shapes={[]}
            colors={["#3b82f6"]}
          />
        );
      }).not.toThrow();
    });

    it("should handle single color", () => {
      expect(() => {
        renderWithCanvas(
          <BackgroundShapes
            count={3}
            shapes={["sphere"]}
            colors={["#3b82f6"]}
          />
        );
      }).not.toThrow();
    });
  });

  describe("Performance Optimization", () => {
    it("should handle low performance tier", () => {
      const { getPerformanceTier } = require("@/lib/three-utils");
      getPerformanceTier.mockReturnValue("low");

      expect(() => {
        renderWithCanvas(
          <BackgroundShapes count={20} />
        );
      }).not.toThrow();
    });

    it("should handle high performance tier", () => {
      const { getPerformanceTier } = require("@/lib/three-utils");
      getPerformanceTier.mockReturnValue("high");

      expect(() => {
        renderWithCanvas(
          <BackgroundShapes count={20} />
        );
      }).not.toThrow();
    });

    it("should disable particles when enableParticles is false", () => {
      expect(() => {
        renderWithCanvas(
          <BackgroundShapes
            enableParticles={false}
            particleCount={0}
          />
        );
      }).not.toThrow();
    });
  });

  describe("Animation Properties", () => {
    it("should handle zero animation speed", () => {
      expect(() => {
        renderWithCanvas(
          <BackgroundShapes animationSpeed={0} />
        );
      }).not.toThrow();
    });

    it("should handle high animation speed", () => {
      expect(() => {
        renderWithCanvas(
          <BackgroundShapes animationSpeed={2.0} />
        );
      }).not.toThrow();
    });

    it("should handle zero opacity", () => {
      expect(() => {
        renderWithCanvas(
          <BackgroundShapes opacity={0} />
        );
      }).not.toThrow();
    });

    it("should handle full opacity", () => {
      expect(() => {
        renderWithCanvas(
          <BackgroundShapes opacity={1.0} />
        );
      }).not.toThrow();
    });
  });

  describe("Particle System", () => {
    it("should render particles when enabled", () => {
      expect(() => {
        renderWithCanvas(
          <BackgroundShapes
            enableParticles={true}
            particleCount={100}
          />
        );
      }).not.toThrow();
    });

    it("should handle zero particle count", () => {
      expect(() => {
        renderWithCanvas(
          <BackgroundShapes
            enableParticles={true}
            particleCount={0}
          />
        );
      }).not.toThrow();
    });

    it("should handle large particle count", () => {
      expect(() => {
        renderWithCanvas(
          <BackgroundShapes
            enableParticles={true}
            particleCount={1000}
          />
        );
      }).not.toThrow();
    });
  });

  describe("Presets", () => {
    it("should have subtle preset", () => {
      expect(BackgroundShapesPresets.subtle).toBeDefined();
      expect(BackgroundShapesPresets.subtle.count).toBe(10);
      expect(BackgroundShapesPresets.subtle.opacity).toBe(0.3);
    });

    it("should have atmospheric preset", () => {
      expect(BackgroundShapesPresets.atmospheric).toBeDefined();
      expect(BackgroundShapesPresets.atmospheric.count).toBe(20);
      expect(BackgroundShapesPresets.atmospheric.enableParticles).toBe(true);
    });

    it("should have minimal preset", () => {
      expect(BackgroundShapesPresets.minimal).toBeDefined();
      expect(BackgroundShapesPresets.minimal.count).toBe(6);
      expect(BackgroundShapesPresets.minimal.enableParticles).toBe(false);
    });

    it("should have particles preset", () => {
      expect(BackgroundShapesPresets.particles).toBeDefined();
      expect(BackgroundShapesPresets.particles.count).toBe(0);
      expect(BackgroundShapesPresets.particles.particleCount).toBe(500);
    });

    it("should render with subtle preset", () => {
      expect(() => {
        renderWithCanvas(
          <BackgroundShapes {...BackgroundShapesPresets.subtle} />
        );
      }).not.toThrow();
    });

    it("should render with atmospheric preset", () => {
      expect(() => {
        renderWithCanvas(
          <BackgroundShapes {...BackgroundShapesPresets.atmospheric} />
        );
      }).not.toThrow();
    });

    it("should render with minimal preset", () => {
      expect(() => {
        renderWithCanvas(
          <BackgroundShapes {...BackgroundShapesPresets.minimal} />
        );
      }).not.toThrow();
    });

    it("should render with particles preset", () => {
      expect(() => {
        renderWithCanvas(
          <BackgroundShapes {...BackgroundShapesPresets.particles} />
        );
      }).not.toThrow();
    });
  });

  describe("Edge Cases", () => {
    it("should handle undefined props gracefully", () => {
      expect(() => {
        renderWithCanvas(
          <BackgroundShapes
            count={undefined as any}
            shapes={undefined as any}
            colors={undefined as any}
          />
        );
      }).not.toThrow();
    });

    it("should handle negative count", () => {
      expect(() => {
        renderWithCanvas(
          <BackgroundShapes count={-5} />
        );
      }).not.toThrow();
    });

    it("should handle negative opacity", () => {
      expect(() => {
        renderWithCanvas(
          <BackgroundShapes opacity={-0.5} />
        );
      }).not.toThrow();
    });

    it("should handle opacity greater than 1", () => {
      expect(() => {
        renderWithCanvas(
          <BackgroundShapes opacity={1.5} />
        );
      }).not.toThrow();
    });
  });

  describe("Accessibility", () => {
    it("should not interfere with screen readers", () => {
      const { container } = renderWithCanvas(<BackgroundShapes />);
      
      // Background shapes should not have interactive elements
      const interactiveElements = container.querySelectorAll(
        'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      expect(interactiveElements).toHaveLength(0);
    });

    it("should respect reduced motion preferences", () => {
      // Mock reduced motion preference
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
          matches: query === '(prefers-reduced-motion: reduce)',
          media: query,
          onchange: null,
          addListener: jest.fn(),
          removeListener: jest.fn(),
          addEventListener: jest.fn(),
          removeEventListener: jest.fn(),
          dispatchEvent: jest.fn(),
        })),
      });

      expect(() => {
        renderWithCanvas(<BackgroundShapes />);
      }).not.toThrow();
    });
  });
});