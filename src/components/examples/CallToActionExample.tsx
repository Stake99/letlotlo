"use client";

import React from "react";
import { CallToAction, HeroCTA, SectionCTA, MinimalCTA, CardCTA } from "../sections/CallToAction";

/**
 * CallToAction Component Examples
 * 
 * Demonstrates all variants and configurations of the CallToAction component
 * with different styling options, button configurations, and use cases.
 */

export function CallToActionExample() {
  return (
    <div className="space-y-16 p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          CallToAction Component Examples
        </h1>
        <p className="text-xl text-gray-600">
          Engaging CTA sections with animations and responsive layouts
        </p>
      </div>

      {/* Hero CTA Example */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Hero CTA</h2>
        <p className="text-gray-600">Large, prominent CTA for main pages and landing sections</p>
        
        <HeroCTA
          title="Transform Your Business Today"
          description="Join over 10,000 companies that trust Letlotlo International to deliver exceptional results. Start your journey to success with our proven solutions."
          primaryButton={{
            text: "Get Started Free",
            href: "/signup",
            variant: "primary",
          }}
          secondaryButton={{
            text: "Watch Demo",
            href: "/demo",
            variant: "outline",
          }}
          background="gradient"
        />
      </div>

      {/* Section CTA Example */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Section CTA</h2>
        <p className="text-gray-600">Standard CTA for page sections and content areas</p>
        
        <SectionCTA
          title="Ready to Get Started?"
          description="Take the next step towards achieving your goals. Our team is ready to help you succeed."
          primaryButton={{
            text: "Contact Us",
            href: "/contact",
            variant: "primary",
          }}
          secondaryButton={{
            text: "Learn More",
            href: "/about",
            variant: "ghost",
          }}
          background="solid"
        />
      </div>

      {/* Minimal CTA Example */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Minimal CTA</h2>
        <p className="text-gray-600">Subtle CTA for secondary actions and content sections</p>
        
        <MinimalCTA
          title="Have Questions?"
          description="Our support team is here to help you every step of the way."
          primaryButton={{
            text: "Get Support",
            href: "/support",
            variant: "secondary",
          }}
          background="transparent"
          centered={false}
        />
      </div>

      {/* Card CTA Example */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Card CTA</h2>
        <p className="text-gray-600">Contained CTA for cards, sidebars, and focused sections</p>
        
        <div className="max-w-md mx-auto">
          <CardCTA
            title="Special Offer"
            description="Limited time offer for new customers. Don't miss out on this opportunity!"
            primaryButton={{
              text: "Claim Offer",
              href: "/offer",
              variant: "primary",
            }}
            background="gradient"
          />
        </div>
      </div>

      {/* External Link Example */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">External Links</h2>
        <p className="text-gray-600">CTA with external links and proper security attributes</p>
        
        <SectionCTA
          title="Follow Our Journey"
          description="Stay connected with us on social media and never miss an update."
          primaryButton={{
            text: "Visit LinkedIn",
            href: "https://linkedin.com/company/letlotlo-international",
            variant: "primary",
            external: true,
          }}
          secondaryButton={{
            text: "Follow on Twitter",
            href: "https://twitter.com/letlotlo",
            variant: "outline",
            external: true,
          }}
          background="gradient"
        />
      </div>

      {/* Button Variants Showcase */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Button Variants</h2>
        <p className="text-gray-600">All available button styles and variants</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CallToAction
            title="Primary Button"
            primaryButton={{
              text: "Primary Action",
              href: "#",
              variant: "primary",
            }}
            variant="minimal"
            background="transparent"
          />
          
          <CallToAction
            title="Secondary Button"
            primaryButton={{
              text: "Secondary Action",
              href: "#",
              variant: "secondary",
            }}
            variant="minimal"
            background="transparent"
          />
          
          <CallToAction
            title="Outline Button"
            primaryButton={{
              text: "Outline Action",
              href: "#",
              variant: "outline",
            }}
            variant="minimal"
            background="transparent"
          />
          
          <CallToAction
            title="Ghost Button"
            primaryButton={{
              text: "Ghost Action",
              href: "#",
              variant: "ghost",
            }}
            variant="minimal"
            background="transparent"
          />
        </div>
      </div>

      {/* Layout Variations */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Layout Variations</h2>
        <p className="text-gray-600">Different alignment and layout options</p>
        
        <div className="space-y-8">
          <CallToAction
            title="Centered Layout (Default)"
            description="This CTA is centered and uses the default alignment."
            primaryButton={{
              text: "Centered Action",
              href: "#",
            }}
            variant="section"
            background="solid"
            centered={true}
          />
          
          <CallToAction
            title="Left-Aligned Layout"
            description="This CTA is left-aligned for a different visual approach."
            primaryButton={{
              text: "Left Action",
              href: "#",
            }}
            variant="section"
            background="solid"
            centered={false}
          />
        </div>
      </div>

      {/* Performance Demo */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Performance Features</h2>
        <p className="text-gray-600">
          Hover over buttons to see fast animations (150ms) and 3D effects.
          All animations are optimized for 60fps performance.
        </p>
        
        <SectionCTA
          title="Optimized Animations"
          description="Experience smooth, performant hover effects and transitions that meet accessibility requirements."
          primaryButton={{
            text: "Hover Me!",
            href: "#",
            variant: "primary",
          }}
          secondaryButton={{
            text: "Me Too!",
            href: "#",
            variant: "secondary",
          }}
          background="gradient"
        />
      </div>
    </div>
  );
}

export default CallToActionExample;