import { HomeHero } from "@/components/sections/Hero";

export default function HeroTestPage() {
  return (
    <div>
      <HomeHero 
        ctaButton={{ text: "Get Started", href: "/contact" }}
        secondaryButton={{ text: "Learn More", href: "/about", variant: "outline" }}
      />
    </div>
  );
}