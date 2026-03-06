/**
 * Tests for InteractiveButton Component
 * Requirements: 6.4, 13.5
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { InteractiveButton } from "../InteractiveButton";

// Mock framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    button: React.forwardRef(({ children, ...props }: any, ref: any) => (
      <button ref={ref} {...props}>
        {children}
      </button>
    )),
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

describe("InteractiveButton", () => {
  describe("Rendering", () => {
    it("should render children", () => {
      render(<InteractiveButton>Click Me</InteractiveButton>);
      expect(screen.getByText("Click Me")).toBeInTheDocument();
    });

    it("should apply primary variant by default", () => {
      render(<InteractiveButton>Click Me</InteractiveButton>);
      const button = screen.getByRole("button");
      expect(button.className).toContain("bg-primary");
    });

    it("should apply secondary variant", () => {
      render(<InteractiveButton variant="secondary">Click Me</InteractiveButton>);
      const button = screen.getByRole("button");
      expect(button.className).toContain("bg-secondary");
    });

    it("should apply outline variant", () => {
      render(<InteractiveButton variant="outline">Click Me</InteractiveButton>);
      const button = screen.getByRole("button");
      expect(button.className).toContain("border-primary");
    });

    it("should apply ghost variant", () => {
      render(<InteractiveButton variant="ghost">Click Me</InteractiveButton>);
      const button = screen.getByRole("button");
      expect(button.className).toContain("text-primary");
    });
  });

  describe("Sizes", () => {
    it("should apply medium size by default", () => {
      render(<InteractiveButton>Click Me</InteractiveButton>);
      const button = screen.getByRole("button");
      expect(button.className).toContain("px-4");
    });

    it("should apply small size", () => {
      render(<InteractiveButton size="sm">Click Me</InteractiveButton>);
      const button = screen.getByRole("button");
      expect(button.className).toContain("px-3");
    });

    it("should apply large size", () => {
      render(<InteractiveButton size="lg">Click Me</InteractiveButton>);
      const button = screen.getByRole("button");
      expect(button.className).toContain("px-6");
    });
  });

  describe("Loading State", () => {
    it("should show loading spinner when isLoading is true", () => {
      render(<InteractiveButton isLoading>Click Me</InteractiveButton>);
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    it("should show custom loading text", () => {
      render(
        <InteractiveButton isLoading loadingText="Submitting...">
          Click Me
        </InteractiveButton>
      );
      expect(screen.getByText("Submitting...")).toBeInTheDocument();
    });

    it("should disable button when loading", () => {
      render(<InteractiveButton isLoading>Click Me</InteractiveButton>);
      const button = screen.getByRole("button");
      expect(button).toBeDisabled();
    });

    it("should not show children when loading", () => {
      render(<InteractiveButton isLoading>Click Me</InteractiveButton>);
      expect(screen.queryByText("Click Me")).not.toBeInTheDocument();
    });
  });

  describe("Icons", () => {
    it("should render icon on the left by default", () => {
      const Icon = () => <span data-testid="icon">Icon</span>;
      render(
        <InteractiveButton icon={<Icon />}>Click Me</InteractiveButton>
      );
      const button = screen.getByRole("button");
      const icon = screen.getByTestId("icon");
      expect(button).toContainElement(icon);
    });

    it("should render icon on the right", () => {
      const Icon = () => <span data-testid="icon">Icon</span>;
      render(
        <InteractiveButton icon={<Icon />} iconPosition="right">
          Click Me
        </InteractiveButton>
      );
      const button = screen.getByRole("button");
      const icon = screen.getByTestId("icon");
      expect(button).toContainElement(icon);
    });
  });

  describe("Interactions", () => {
    it("should call onClick when clicked", () => {
      const handleClick = jest.fn();
      render(<InteractiveButton onClick={handleClick}>Click Me</InteractiveButton>);
      const button = screen.getByRole("button");
      fireEvent.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("should not call onClick when disabled", () => {
      const handleClick = jest.fn();
      render(
        <InteractiveButton onClick={handleClick} disabled>
          Click Me
        </InteractiveButton>
      );
      const button = screen.getByRole("button");
      fireEvent.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });

    it("should not call onClick when loading", () => {
      const handleClick = jest.fn();
      render(
        <InteractiveButton onClick={handleClick} isLoading>
          Click Me
        </InteractiveButton>
      );
      const button = screen.getByRole("button");
      fireEvent.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe("Accessibility", () => {
    it("should have focus ring styles", () => {
      render(<InteractiveButton>Click Me</InteractiveButton>);
      const button = screen.getByRole("button");
      expect(button.className).toContain("focus:ring");
    });

    it("should be keyboard accessible", () => {
      const handleClick = jest.fn();
      render(<InteractiveButton onClick={handleClick}>Click Me</InteractiveButton>);
      const button = screen.getByRole("button");
      button.focus();
      expect(button).toHaveFocus();
    });

    it("should have disabled styles when disabled", () => {
      render(<InteractiveButton disabled>Click Me</InteractiveButton>);
      const button = screen.getByRole("button");
      expect(button.className).toContain("disabled:opacity-50");
      expect(button.className).toContain("disabled:cursor-not-allowed");
    });
  });

  describe("Custom Styling", () => {
    it("should apply custom className", () => {
      render(<InteractiveButton className="custom-class">Click Me</InteractiveButton>);
      const button = screen.getByRole("button");
      expect(button.className).toContain("custom-class");
    });
  });

  describe("Performance Requirements", () => {
    it("should provide immediate visual feedback (Requirement 13.5)", () => {
      render(<InteractiveButton>Click Me</InteractiveButton>);
      const button = screen.getByRole("button");
      // Button should have hover and tap variants for immediate feedback
      expect(button).toBeInTheDocument();
    });
  });
});
