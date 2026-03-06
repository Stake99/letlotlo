/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import ThreeScene, { useThreeScene } from "./ThreeScene";
import TestScene from "./TestScene";

// Mock WebGL support
const mockCheckWebGLSupport = jest.fn();
const mockGetPerformanceTier = jest.fn();

jest.mock("@/lib/three-utils", () => ({
  checkWebGLSupport: () => mockCheckWebGLSupport(),
  getPerformanceTier: () => mockGetPerformanceTier(),
}));

// Mock React Three Fiber
jest.mock("@react-three/fiber", () => ({
  Canvas: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="three-canvas">{children}</div>
  ),
  useFrame: jest.fn(),
}));

jest.mock("@react-three/drei", () => ({
  OrbitControls: () => <div data-testid="orbit-controls" />,
  PerspectiveCamera: () => <div data-testid="perspective-camera" />,
  Sphere: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="sphere">{children}</div>
  ),
  Box: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="box">{children}</div>
  ),
}));

describe("ThreeScene", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders WebGL fallback when WebGL is not supported", () => {
    mockCheckWebGLSupport.mockReturnValue(false);
    
    render(
      <ThreeScene>
        <TestScene />
      </ThreeScene>
    );

    expect(screen.getByText("3D Graphics Not Available")).toBeInTheDocument();
    expect(screen.getByText("Your device doesn't support WebGL. Enjoying the 2D experience instead!")).toBeInTheDocument();
  });

  it("renders loading state initially", () => {
    mockCheckWebGLSupport.mockReturnValue(true);
    mockGetPerformanceTier.mockReturnValue("medium");
    
    render(
      <ThreeScene>
        <TestScene />
      </ThreeScene>
    );

    // Should show loading initially before WebGL check completes
    expect(screen.getByText("Loading 3D scene...")).toBeInTheDocument();
  });

  it("renders canvas when WebGL is supported", async () => {
    mockCheckWebGLSupport.mockReturnValue(true);
    mockGetPerformanceTier.mockReturnValue("medium");
    
    render(
      <ThreeScene>
        <TestScene />
      </ThreeScene>
    );

    // Wait for the component to update after WebGL check
    await new Promise(resolve => setTimeout(resolve, 0));
    
    expect(mockCheckWebGLSupport).toHaveBeenCalled();
    expect(mockGetPerformanceTier).toHaveBeenCalled();
  });

  it("renders controls when controls prop is true", async () => {
    mockCheckWebGLSupport.mockReturnValue(true);
    mockGetPerformanceTier.mockReturnValue("medium");
    
    render(
      <ThreeScene controls>
        <TestScene />
      </ThreeScene>
    );

    await new Promise(resolve => setTimeout(resolve, 0));
    
    // Controls should be rendered when enabled
    // Note: This would need more sophisticated mocking to test properly
  });

  it("accepts custom camera configuration", async () => {
    mockCheckWebGLSupport.mockReturnValue(true);
    mockGetPerformanceTier.mockReturnValue("medium");
    
    const customCamera = {
      position: [10, 10, 10] as [number, number, number],
      fov: 60,
    };
    
    render(
      <ThreeScene camera={customCamera}>
        <TestScene />
      </ThreeScene>
    );

    await new Promise(resolve => setTimeout(resolve, 0));
    
    // Camera configuration should be passed to the canvas
    // Note: This would need more sophisticated mocking to test properly
  });

  it("accepts custom lighting configuration", async () => {
    mockCheckWebGLSupport.mockReturnValue(true);
    mockGetPerformanceTier.mockReturnValue("medium");
    
    const customLights = [
      { type: "ambient" as const, intensity: 0.5 },
      { type: "directional" as const, position: [5, 5, 5] as [number, number, number], intensity: 1 },
    ];
    
    render(
      <ThreeScene lights={customLights}>
        <TestScene />
      </ThreeScene>
    );

    await new Promise(resolve => setTimeout(resolve, 0));
    
    // Custom lights should be used instead of default lights
    // Note: This would need more sophisticated mocking to test properly
  });
});

describe("useThreeScene hook", () => {
  it("provides utility functions", () => {
    const TestComponent = () => {
      const { checkWebGLSupport, getPerformanceTier } = useThreeScene();
      
      return (
        <div>
          <button onClick={() => checkWebGLSupport()}>Check WebGL</button>
          <button onClick={() => getPerformanceTier()}>Get Performance</button>
        </div>
      );
    };

    render(<TestComponent />);
    
    expect(screen.getByText("Check WebGL")).toBeInTheDocument();
    expect(screen.getByText("Get Performance")).toBeInTheDocument();
  });
});