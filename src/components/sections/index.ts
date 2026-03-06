/**
 * Section components for the Letlotlo International website
 * These components provide reusable section layouts with animations and effects
 */

export { 
  ParallaxSection,
  HeroParallaxSection,
  ContentParallaxSection,
  BackgroundParallaxSection,
  useParallaxLayers,
} from "./ParallaxSection";

export {
  default as Hero,
  HomeHero,
  AboutHero,
  ServicesHero,
  ProjectsHero,
  ContactHero,
} from "./Hero";

export type { ParallaxSectionProps, HeroProps } from "@/types";