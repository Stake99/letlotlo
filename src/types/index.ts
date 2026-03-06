/**
 * TypeScript type definitions for the Letlotlo International website
 */

// Navigation types
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
  children?: NavigationItem[];
}

// Service types
export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  features: string[];
  technologies: string[];
  pricing?: {
    starting: number;
    currency: string;
  };
}

// Project types
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  images: ProjectImage[];
  technologies: string[];
  category: string;
  status: "completed" | "in-progress" | "planned";
  links: {
    live?: string;
    github?: string;
    case_study?: string;
  };
  client?: {
    name: string;
    industry: string;
  };
  timeline: {
    start: Date;
    end?: Date;
  };
}

export interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
  featured: boolean;
}

// Company types
export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  mission: string;
  vision: string;
  values: string[];
  founded: Date;
  location: {
    address: string;
    city: string;
    country: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  contact: {
    email: string;
    phone: string;
    social: SocialLink[];
  };
  team: TeamMember[];
  statistics: Statistic[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface Statistic {
  label: string;
  value: string;
  icon: string;
}

// Animation types
export interface AnimationVariant {
  initial: Record<string, any>;
  animate: Record<string, any>;
  exit?: Record<string, any>;
  transition?: {
    duration: number;
    ease: string;
    delay?: number;
  };
}

export interface ParallaxConfig {
  speed: number;
  direction: "vertical" | "horizontal";
  triggerOffset: number;
}

// Theme types
export interface ThemeConfig {
  colors: {
    primary: ColorScale;
    secondary: ColorScale;
    accent: ColorScale;
    success: ColorScale;
    warning: ColorScale;
    error: ColorScale;
    info: ColorScale;
    neutral: ColorScale;
    background: string;
    surface: string;
    surfaceElevated: string;
    surfaceHover: string;
    text: {
      primary: string;
      secondary: string;
      muted: string;
      inverse: string;
    };
    border: string;
    borderHover: string;
    borderFocus: string;
  };
  gradients: {
    primary: string;
    secondary: string;
    hero: string;
    card: string;
    button: string;
    accent: string;
    '3d': {
      primary: string;
      secondary: string;
      surface: string;
    };
  };
  typography: {
    fontFamily: {
      sans: string[];
      heading: string[];
      mono: string[];
    };
    fontSize: Record<string, string>;
    fontWeight: Record<string, number>;
    lineHeight: Record<string, number>;
    letterSpacing: Record<string, string>;
  };
  spacing: Record<string, string>;
  borderRadius: Record<string, string>;
  shadows: {
    xs: string;
    sm: string;
    base: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    inner: string;
    '3d': {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    colored: {
      primary: string;
      secondary: string;
      accent: string;
      success: string;
      warning: string;
      error: string;
    };
  };
  animations: {
    duration: {
      fast: string;
      normal: string;
      slow: string;
    };
    easing: {
      ease: string;
      easeIn: string;
      easeOut: string;
      easeInOut: string;
      bounce: string;
    };
  };
  breakpoints: Record<string, string>;
}

export interface ColorScale {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  950: string;
  DEFAULT: string;
}

// Component prop types
export interface NavbarProps {
  currentPath: string;
}

export interface FooterProps {
  className?: string;
}

export interface HeroProps {
  title: string;
  subtitle: string;
  backgroundScene?: React.ComponentType;
  ctaButton?: {
    text: string;
    href: string;
  };
}

export interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  backgroundElements?: React.ComponentType[];
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  ctaLink?: string;
  className?: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

// 3D component types
export interface ThreeSceneProps {
  children: React.ReactNode;
  camera?: {
    position: [number, number, number];
    fov?: number;
  };
  lights?: LightConfig[];
  controls?: boolean;
}

export interface LightConfig {
  type: "ambient" | "directional" | "point";
  position?: [number, number, number];
  intensity: number;
  color?: string;
}

export interface FloatingObjectsProps {
  count: number;
  shapes: readonly ("sphere" | "box" | "torus")[];
  colors: readonly string[];
  animationSpeed?: number;
}

// Form types
export interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
  className?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export interface FormFieldProps {
  label: string;
  name: string;
  type?: "text" | "email" | "textarea";
  placeholder?: string;
  required?: boolean;
  error?: string;
}

// Utility types
export type ShapeType = "sphere" | "box" | "torus" | "cylinder";
export type AnimationType = "fade" | "slide" | "scale" | "rotate" | "bounce" | "float";
export type PerformanceTier = "low" | "medium" | "high";
export type DeviceType = "mobile" | "tablet" | "desktop";

// API types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface ContactSubmissionResponse {
  id: string;
  timestamp: Date;
  status: "pending" | "sent" | "failed";
}

// Error types
export interface AppError {
  code: string;
  message: string;
  details?: any;
}

// Mouse and interaction types
export interface MousePosition {
  x: number;
  y: number;
}

export interface ViewportDimensions {
  width: number;
  height: number;
}

// Scroll types
export interface ScrollPosition {
  x: number;
  y: number;
}

export interface ScrollDirection {
  horizontal: "left" | "right" | "none";
  vertical: "up" | "down" | "none";
}

// Performance monitoring types
export interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  renderTime: number;
  loadTime: number;
}

// Accessibility types
export interface AccessibilityConfig {
  reducedMotion: boolean;
  highContrast: boolean;
  screenReader: boolean;
  keyboardNavigation: boolean;
}

// SEO types
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

// Page metadata types
export interface PageMetadata {
  title: string;
  description: string;
  path: string;
  lastModified: Date;
  seo: SEOData;
}