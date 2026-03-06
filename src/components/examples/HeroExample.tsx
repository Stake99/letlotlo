"use client";

import React, { useState } from "react";
import Hero, { HomeHero, AboutHero, ServicesHero, ProjectsHero, ContactHero } from "@/components/sections/Hero";
import { theme } from "@/lib/theme";

/**
 * Hero Component Examples and Showcase
 * 
 * This component demonstrates various configurations and use cases
 * for the Hero component with 3D integration and animations.
 */
export default function HeroExample() {
  const [selectedVariant, setSelectedVariant] = useState<string>("home");
  const [enable3D, setEnable3D] = useState(true);
  const [enableParallax, setEnableParallax] = useState(true);

  const variants = {
    home: {
      component: HomeHero,
      name: "Home Hero",
      description: "Full-screen hero with centered text and strong CTA",
    },
    about: {
      component: AboutHero,
      name: "About Hero", 
      description: "Large hero with left-aligned text for storytelling",
    },
    services: {
      component: ServicesHero,
      name: "Services Hero",
      description: "Centered hero highlighting service offerings",
    },
    projects: {
      component: ProjectsHero,
      name: "Projects Hero",
      description: "Portfolio-focused hero for showcasing work",
    },
    contact: {
      component: ContactHero,
      name: "Contact Hero",
      description: "Medium-height hero for contact pages",
    },
    custom: {
      component: () => (
        <Hero
          title="Custom Hero Example"
          subtitle="This demonstrates custom configuration options with multiple buttons and effects"
          ctaButton={{ text: "Primary Action", href: "#primary" }}
          secondaryButton={{ text: "Secondary Action", href: "#secondary", variant: "outline" }}
          height="large"
          textAlign="center"
          enable3D={enable3D}
          enableParallax={enableParallax}
          gradient={theme.gradients.accent}
        />
      ),
      name: "Custom Hero",
      description: "Fully customized hero with multiple buttons and custom styling",
    },
  };

  const SelectedComponent = variants[selectedVariant as keyof typeof variants].component;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Controls Panel */}
      <div className="fixed top-4 left-4 z-50 bg-white rounded-lg shadow-lg p-4 max-w-sm">
        <h3 className="text-lg font-semibold mb-4">Hero Examples</h3>
        
        {/* Variant Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Variant:</label>
          <select
            value={selectedVariant}
            onChange={(e) => setSelectedVariant(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md text-sm"
          >
            {Object.entries(variants).map(([key, variant]) => (
              <option key={key} value={key}>
                {variant.name}
              </option>
            ))}
          </select>
          <p className="text-xs text-gray-600 mt-1">
            {variants[selectedVariant as keyof typeof variants].description}
          </p>
        </div>

        {/* 3D Toggle */}
        <div className="mb-3">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={enable3D}
              onChange={(e) => setEnable3D(e.target.checked)}
              className="mr-2"
            />
            <span className="text-sm">Enable 3D Background</span>
          </label>
        </div>

        {/* Parallax Toggle */}
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={enableParallax}
              onChange={(e) => setEnableParallax(e.target.checked)}
              className="mr-2"
            />
            <span className="text-sm">Enable Mouse Parallax</span>
          </label>
        </div>

        {/* Feature List */}
        <div className="text-xs text-gray-600">
          <h4 className="font-medium mb-2">Features Demonstrated:</h4>
          <ul className="space-y-1">
            <li>• 3D floating objects background</li>
            <li>• Animated text entrance effects</li>
            <li>• Mouse parallax movement</li>
            <li>• Responsive typography</li>
            <li>• CTA button animations</li>
            <li>• Scroll indicator</li>
            <li>• Performance optimization</li>
          </ul>
        </div>
      </div>

      {/* Hero Component Display */}
      <div className="relative">
        <SelectedComponent />
      </div>

      {/* Information Panel */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Hero Component Features</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* 3D Integration */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">3D Background Integration</h3>
              <ul className="space-y-2 text-blue-800">
                <li>• React Three Fiber canvas with floating objects</li>
                <li>• Performance-optimized WebGL rendering</li>
                <li>• Automatic fallback for unsupported devices</li>
                <li>• Customizable shapes, colors, and animations</li>
                <li>• Mouse-responsive 3D object movement</li>
              </ul>
            </div>

            {/* Animation System */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-green-900">Animation System</h3>
              <ul className="space-y-2 text-green-800">
                <li>• Framer Motion powered animations</li>
                <li>• Staggered text entrance effects</li>
                <li>• Smooth scroll-based parallax</li>
                <li>• Button hover and press animations</li>
                <li>• Scroll indicator with breathing effect</li>
              </ul>
            </div>

            {/* Responsive Design */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-orange-900">Responsive Design</h3>
              <ul className="space-y-2 text-orange-800">
                <li>• Mobile-first responsive typography</li>
                <li>• Flexible button layouts</li>
                <li>• Adaptive 3D performance settings</li>
                <li>• Configurable height options</li>
                <li>• Text alignment variations</li>
              </ul>
            </div>

            {/* Performance */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-purple-900">Performance Optimization</h3>
              <ul className="space-y-2 text-purple-800">
                <li>• GPU-accelerated animations</li>
                <li>• Throttled mouse event handling</li>
                <li>• Intersection Observer for efficiency</li>
                <li>• Reduced motion preference support</li>
                <li>• Automatic quality adjustment</li>
              </ul>
            </div>
          </div>

          {/* Usage Examples */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Usage Examples</h3>
            
            <div className="bg-gray-900 text-gray-100 p-6 rounded-xl overflow-x-auto">
              <pre className="text-sm">
{`// Basic Hero
<Hero
  title="Welcome to Our Platform"
  subtitle="Building the future of technology"
  ctaButton={{ text: "Get Started", href: "/signup" }}
/>

// Custom Hero with Multiple Buttons
<Hero
  title="Custom Hero"
  subtitle="With advanced configuration"
  ctaButton={{ text: "Primary Action", href: "/primary" }}
  secondaryButton={{ text: "Learn More", href: "/learn", variant: "outline" }}
  height="large"
  textAlign="left"
  enable3D={true}
  enableParallax={true}
/>

// Pre-configured Variants
<HomeHero />
<AboutHero />
<ServicesHero />
<ProjectsHero />
<ContactHero />`}
              </pre>
            </div>
          </div>

          {/* Requirements Validation */}
          <div className="mt-12 bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4 text-blue-900">Requirements Validation</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-blue-800">
              <div>
                <h4 className="font-medium mb-2">✅ Requirement 4.1 - 3D Visual Elements</h4>
                <p>Floating 3D objects with mouse-responsive movement</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">✅ Requirement 4.2 - Cartoon-styled 3D</h4>
                <p>Cartoon-like 3D illustrations and shapes</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">✅ Requirement 6.1 - Animation System</h4>
                <p>Smooth fade and slide animations for hero text</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">✅ Requirement 7.1 - Hero Section</h4>
                <p>Hero section with 3D visuals and animations</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">✅ Requirement 16.2 - Hero Component</h4>
                <p>Reusable Hero component implementation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}