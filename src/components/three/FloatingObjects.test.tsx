/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import FloatingObjects, { FloatingObjectsPresets } from "./FloatingObjects";

// Mock React Three Fiber
jest.mock("@react-three/fiber", () => ({
  useFrame: jest.fn(),
  useThree: () => ({
    size: { width: 1024, height: 768 },
    camera: {},
  }),
}));

// Mock React Three Drei
jest.mock("@react-three/drei", () => ({
  Sphere: ({ children, ...props }: any) => (
    <div data-testid="sphere" {...props}>
      {children}
    </div>
  ),
  Box: ({ children, ...props }: any) => (
    <div data-testid="box" {...props}>
      {children}
    </div>
  ),
  Torus: ({ children, ...props }: any) => (
    <div data-testid="torus" {...props}>
      {children}
    </div>
  ),
}));

// Mock three-utils
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
  calculateMouseInfluence: jest.fn(() => ({ x: 0, y: 0, z: 0 })),
  createCartoonMaterial: jest.fn(() => ({})),
  easing: {
    easeInOut: jest.fn((t: number) => t),
  },
}));

describe("FloatingObjects", () => {
  const defaultProps = {
    count: 3,
    shapes: ["sphere", "box", "torus"] as const,
    colors: ["#3b82f6", "#8b5cf6", "#f59e0b"],
    animationSpeed: 1,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing", () => {
    render(<FloatingObjects {...defaultProps} />);
  });

  it("renders the correct number of objects", () => {
    const { container } = render(<FloatingObjects {...defaultProps} />);
    
    // Should render 3 objects (sphere, box, torus)
    const objects = container.querySelectorAll('[data-testid]');
    expect(objects).toHaveLength(3);
  });

  it("cycles through shapes when count exceeds shapes array length", () => {
    const props = {
      count: 5,
      shapes: ["sphere", "box"] as const,
      colors: ["#3b82f6"],
      animationSpeed: 1,
    };
    
    const { container } = render(<FloatingObjects {...props} />);
    
    // Should render 5 objects, cycling through sphere and box
    const spheres = container.querySelectorAll('[data-testid="sphere"]');
    const boxes = container.querySelectorAll('[data-testid="box"]');
    
    expect(spheres).toHaveLength(3); // indices 0, 2, 4
    expect(boxes).toHaveLength(2); // indices 1, 3
  });

  it("cycles through colors when count exceeds colors array length", () => {
    const props = {
      count: 4,
      shapes: ["sphere"] as const,
      colors: ["#3b82f6", "#8b5cf6"],
      animationSpeed: 1,
    };
    
    render(<FloatingObjects {...props} />);
    
    // Should cycle through colors - this would need more sophisticated testing
    // to verify the actual color assignment
  });

  it("accepts custom animation speed", () => {
    const props = {
      ...defaultProps,
      animationSpeed: 2,
    };
    
    render(<FloatingObjects {...props} />);
    
    // Animation speed should be passed to individual objects
    // This would need more sophisticated testing to verify
  });

  it("handles empty shapes array gracefully", () => {
    const props = {
      count: 2,
      shapes: [] as any,
      colors: ["#3b82f6"],
      animationSpeed: 1,
    };
    
    // Should not crash with empty shapes array
    expect(() => render(<FloatingObjects {...props} />)).not.toThrow();
  });

  it("handles empty colors array gracefully", () => {
    const props = {
      count: 2,
      shapes: ["sphere"] as const,
      colors: [],
      animationSpeed: 1,
    };
    
    // Should not crash with empty colors array
    expect(() => render(<FloatingObjects {...props} />)).not.toThrow();
  });
});

describe("FloatingObjectsPresets", () => {
  it("provides hero preset configuration", () => {
    expect(FloatingObjectsPresets.hero).toEqual({
      count: 8,
      shapes: ["sphere", "box", "torus"],
      colors: ["#3b82f6", "#8b5cf6", "#f59e0b", "#10b981"],
      animationSpeed: 0.8,
    });
  });

  it("provides background preset configuration", () => {
    expect(FloatingObjectsPresets.background).toEqual({
      count: 12,
      shapes: ["sphere", "torus"],
      colors: ["#3b82f6", "#8b5cf6", "#f59e0b"],
      animationSpeed: 0.5,
    });
  });

  it("provides minimal preset configuration", () => {
    expect(FloatingObjectsPresets.minimal).toEqual({
      count: 4,
      shapes: ["sphere"],
      colors: ["#3b82f6", "#8b5cf6"],
      animationSpeed: 1.2,
    });
  });

  it("all presets have valid configurations", () => {
    Object.values(FloatingObjectsPresets).forEach((preset) => {
      expect(preset.count).toBeGreaterThan(0);
      expect(preset.shapes.length).toBeGreaterThan(0);
      expect(preset.colors.length).toBeGreaterThan(0);
      expect(preset.animationSpeed).toBeGreaterThan(0);
    });
  });
});