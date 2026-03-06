import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { CallToAction, HeroCTA, SectionCTA, MinimalCTA, CardCTA } from "./CallToAction";

// Mock framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    a: ({ children, ...props }: any) => <a {...props}>{children}</a>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
}));

// Mock window.location
const mockLocation = {
  href: "",
};
Object.defineProperty(window, "location", {
  value: mockLocation,
  writable: true,
});

describe("CallToAction", () => {
  const defaultProps = {
    title: "Get Started Today",
    description: "Join thousands of satisfied customers",
    primaryButton: {
      text: "Start Now",
      href: "/signup",
    },
  };

  beforeEach(() => {
    mockLocation.href = "";
  });

  describe("Basic Rendering", () => {
    it("renders title and description", () => {
      render(<CallToAction {...defaultProps} />);
      
      expect(screen.getByText("Get Started Today")).toBeInTheDocument();
      expect(screen.getByText("Join thousands of satisfied customers")).toBeInTheDocument();
    });

    it("renders primary button", () => {
      render(<CallToAction {...defaultProps} />);
      
      const button = screen.getByText("Start Now");
      expect(button).toBeInTheDocument();
      expect(button.closest("button")).toBeInTheDocument();
    });

    it("renders secondary button when provided", () => {
      const propsWithSecondary = {
        ...defaultProps,
        secondaryButton: {
          text: "Learn More",
          href: "/about",
        },
      };

      render(<CallToAction {...propsWithSecondary} />);
      
      expect(screen.getByText("Start Now")).toBeInTheDocument();
      expect(screen.getByText("Learn More")).toBeInTheDocument();
    });

    it("renders without description when not provided", () => {
      const propsWithoutDescription = {
        title: "Get Started Today",
        primaryButton: {
          text: "Start Now",
          href: "/signup",
        },
      };

      render(<CallToAction {...propsWithoutDescription} />);
      
      expect(screen.getByText("Get Started Today")).toBeInTheDocument();
      expect(screen.queryByText("Join thousands of satisfied customers")).not.toBeInTheDocument();
    });
  });

  describe("Button Interactions", () => {
    it("handles internal link navigation", () => {
      render(<CallToAction {...defaultProps} />);
      
      const button = screen.getByText("Start Now");
      fireEvent.click(button);
      
      expect(mockLocation.href).toBe("/signup");
    });

    it("handles external links correctly", () => {
      const propsWithExternal = {
        ...defaultProps,
        primaryButton: {
          text: "External Link",
          href: "https://example.com",
          external: true,
        },
      };

      render(<CallToAction {...propsWithExternal} />);
      
      const link = screen.getByText("External Link");
      expect(link.closest("a")).toHaveAttribute("href", "https://example.com");
      expect(link.closest("a")).toHaveAttribute("target", "_blank");
      expect(link.closest("a")).toHaveAttribute("rel", "noopener noreferrer");
    });

    it("applies correct button variants", () => {
      const propsWithVariants = {
        ...defaultProps,
        primaryButton: {
          text: "Primary",
          href: "/primary",
          variant: "primary" as const,
        },
        secondaryButton: {
          text: "Secondary",
          href: "/secondary",
          variant: "secondary" as const,
        },
      };

      render(<CallToAction {...propsWithVariants} />);
      
      const primaryButton = screen.getByText("Primary");
      const secondaryButton = screen.getByText("Secondary");
      
      expect(primaryButton).toBeInTheDocument();
      expect(secondaryButton).toBeInTheDocument();
    });
  });

  describe("Variants", () => {
    it("applies hero variant styling", () => {
      render(<CallToAction {...defaultProps} variant="hero" />);
      
      const section = screen.getByRole("region");
      expect(section).toHaveClass("py-24", "lg:py-32");
    });

    it("applies section variant styling", () => {
      render(<CallToAction {...defaultProps} variant="section" />);
      
      const section = screen.getByRole("region");
      expect(section).toHaveClass("py-16", "lg:py-20");
    });

    it("applies minimal variant styling", () => {
      render(<CallToAction {...defaultProps} variant="minimal" />);
      
      const section = screen.getByRole("region");
      expect(section).toHaveClass("py-12", "lg:py-16");
    });

    it("applies card variant styling", () => {
      render(<CallToAction {...defaultProps} variant="card" />);
      
      const section = screen.getByRole("region");
      expect(section).toHaveClass("p-8", "lg:p-12", "rounded-3xl");
    });
  });

  describe("Background Variants", () => {
    it("applies gradient background", () => {
      render(<CallToAction {...defaultProps} background="gradient" />);
      
      const section = screen.getByRole("region");
      expect(section).toHaveClass("bg-gradient-to-br");
    });

    it("applies solid background", () => {
      render(<CallToAction {...defaultProps} background="solid" />);
      
      const section = screen.getByRole("region");
      expect(section).toHaveClass("bg-white");
    });

    it("applies transparent background", () => {
      render(<CallToAction {...defaultProps} background="transparent" />);
      
      const section = screen.getByRole("region");
      expect(section).toHaveClass("bg-transparent");
    });
  });

  describe("Layout Options", () => {
    it("centers content by default", () => {
      render(<CallToAction {...defaultProps} />);
      
      const section = screen.getByRole("region");
      expect(section).toHaveClass("text-center");
    });

    it("left-aligns content when centered is false", () => {
      render(<CallToAction {...defaultProps} centered={false} />);
      
      const section = screen.getByRole("region");
      expect(section).toHaveClass("text-left");
    });

    it("applies custom className", () => {
      render(<CallToAction {...defaultProps} className="custom-class" />);
      
      const section = screen.getByRole("region");
      expect(section).toHaveClass("custom-class");
    });
  });

  describe("Accessibility", () => {
    it("has proper heading structure", () => {
      render(<CallToAction {...defaultProps} />);
      
      const heading = screen.getByRole("heading", { level: 2 });
      expect(heading).toHaveTextContent("Get Started Today");
    });

    it("has accessible button text", () => {
      render(<CallToAction {...defaultProps} />);
      
      const button = screen.getByRole("button", { name: "Start Now" });
      expect(button).toBeInTheDocument();
    });

    it("has proper focus management", () => {
      render(<CallToAction {...defaultProps} />);
      
      const button = screen.getByText("Start Now");
      expect(button.closest("button")).toHaveClass("focus:outline-none", "focus:ring-4");
    });
  });

  describe("Pre-configured Variants", () => {
    it("renders HeroCTA with hero variant", () => {
      render(<HeroCTA {...defaultProps} />);
      
      const section = screen.getByRole("region");
      expect(section).toHaveClass("py-24", "lg:py-32");
    });

    it("renders SectionCTA with section variant", () => {
      render(<SectionCTA {...defaultProps} />);
      
      const section = screen.getByRole("region");
      expect(section).toHaveClass("py-16", "lg:py-20");
    });

    it("renders MinimalCTA with minimal variant", () => {
      render(<MinimalCTA {...defaultProps} />);
      
      const section = screen.getByRole("region");
      expect(section).toHaveClass("py-12", "lg:py-16");
    });

    it("renders CardCTA with card variant", () => {
      render(<CardCTA {...defaultProps} />);
      
      const section = screen.getByRole("region");
      expect(section).toHaveClass("p-8", "lg:p-12", "rounded-3xl");
    });
  });

  describe("Performance Requirements", () => {
    it("uses fast transitions for hover effects", () => {
      render(<CallToAction {...defaultProps} />);
      
      const button = screen.getByText("Start Now");
      expect(button.closest("button")).toHaveClass("duration-150");
    });

    it("includes transform-gpu for hardware acceleration", () => {
      render(<CallToAction {...defaultProps} />);
      
      const button = screen.getByText("Start Now");
      expect(button.closest("button")).toHaveClass("transform-gpu");
    });
  });

  describe("Responsive Design", () => {
    it("has responsive text sizing for hero variant", () => {
      render(<CallToAction {...defaultProps} variant="hero" />);
      
      const title = screen.getByText("Get Started Today");
      expect(title).toHaveClass("text-4xl", "sm:text-5xl", "lg:text-6xl");
    });

    it("has responsive button layout", () => {
      const propsWithSecondary = {
        ...defaultProps,
        secondaryButton: {
          text: "Learn More",
          href: "/about",
        },
      };

      render(<CallToAction {...propsWithSecondary} />);
      
      const buttonContainer = screen.getByText("Start Now").closest("div");
      expect(buttonContainer).toHaveClass("flex-col", "sm:flex-row");
    });

    it("has responsive padding for different variants", () => {
      render(<CallToAction {...defaultProps} variant="section" />);
      
      const section = screen.getByRole("region");
      expect(section).toHaveClass("py-16", "lg:py-20");
    });
  });
});