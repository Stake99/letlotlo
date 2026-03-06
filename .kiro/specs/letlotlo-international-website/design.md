# Design Document: Letlotlo International Website

## Overview

The Letlotlo International website is a modern, multi-page web application that combines cartoon-styled 3D elements, parallax scrolling, and smooth animations to create an immersive digital experience. Built with Next.js 14+ App Router, the website showcases the company's services, projects, and information through an engaging, interactive interface.

### Design Goals

- Create a visually distinctive cartoon-styled aesthetic with 3D depth
- Deliver smooth, performant animations and interactions across all devices
- Implement an intuitive multi-page architecture with seamless navigation
- Ensure responsive design from mobile to desktop
- Optimize performance while maintaining rich visual experiences
- Build a maintainable, well-structured codebase

### Technology Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: React Three Fiber + Three.js
- **Animations**: Framer Motion
- **Image Optimization**: next/image
- **Development**: ESLint, Prettier

## Architecture

### Application Structure

The website follows Next.js App Router conventions with a clear separation of concerns:

```
letlotlo-international-website/
├── app/
│   ├── layout.tsx              # Root layout with Navbar/Footer
│   ├── page.tsx                # Home page
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── services/
│   │   └── page.tsx            # Services page
│   ├── projects/
│   │   └── page.tsx            # Projects page
│   └── contact/
│       └── page.tsx            # Contact page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ParallaxSection.tsx
│   │   └── CallToAction.tsx
│   ├── cards/
│   │   ├── ServiceCard.tsx
│   │   └── ProjectCard.tsx
│   ├── three/
│   │   ├── ThreeScene.tsx
│   │   ├── FloatingObjects.tsx
│   │   └── BackgroundShapes.tsx
│   └── forms/
│       └── ContactForm.tsx
├── lib/
│   ├── animations.ts           # Framer Motion variants
│   ├── three-utils.ts          # 3D utilities
│   └── parallax.ts             # Parallax calculations
├── types/
│   └── index.ts                # TypeScript definitions
└── styles/
    └── globals.css             # Global styles
```

### Routing Architecture

The application uses Next.js App Router with the following route structure:

- `/` - Home page with hero section and company overview
- `/about` - Company story, mission, vision, and leadership
- `/services` - Detailed service breakdown with 3D illustrations
- `/projects` - Project showcase with image galleries
- `/contact` - Contact form and company information

Each route is implemented as a separate page component with shared layout components (Navbar, Footer) defined in the root layout.

### State Management

The application uses React's built-in state management:

- **Local State**: Component-specific state using `useState` and `useReducer`
- **Context**: Shared state for theme, navigation, and 3D scene management
- **URL State**: Navigation state managed by Next.js router
- **Form State**: Contact form state with validation

## Components and Interfaces

### Core Layout Components

#### Navbar Component

```typescript
interface NavbarProps {
  currentPath: string;
}

interface NavItem {
  label: string;
  href: string;
  icon?: React.ComponentType;
}
```

**Features:**

- Responsive navigation with mobile hamburger menu
- Active page highlighting
- Smooth hover animations
- Keyboard navigation support
- Logo with 3D hover effect

#### Footer Component

```typescript
interface FooterProps {
  className?: string;
}
```

**Features:**

- Company information and contact details
- Social media links with animated icons
- Copyright information
- Responsive layout

### Section Components

#### Hero Component

```typescript
interface HeroProps {
  title: string;
  subtitle: string;
  backgroundScene?: React.ComponentType;
  ctaButton?: {
    text: string;
    href: string;
  };
}
```

**Features:**

- 3D background scene integration
- Animated text entrance
- Parallax mouse movement effects
- Responsive typography
- Call-to-action button with hover animations

#### ParallaxSection Component

```typescript
interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  backgroundElements?: React.ComponentType[];
}
```

**Features:**

- Configurable parallax speed
- Multiple background layers
- Intersection Observer for performance
- Smooth scrolling calculations

### Interactive Components

#### ServiceCard Component

```typescript
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType;
  features: string[];
  ctaLink?: string;
}
```

**Features:**

- 3D hover lift effect
- Animated icon with bounce effect
- Gradient background with brand colors
- Responsive card layout
- Interactive hover states

#### ProjectCard Component

```typescript
interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}
```

**Features:**

- Image gallery with lazy loading
- Technology tag display
- Hover animations
- External link handling
- Responsive image grid

### 3D Components

#### ThreeScene Component

```typescript
interface ThreeSceneProps {
  children: React.ReactNode;
  camera?: {
    position: [number, number, number];
    fov?: number;
  };
  lights?: LightConfig[];
  controls?: boolean;
}

interface LightConfig {
  type: "ambient" | "directional" | "point";
  position?: [number, number, number];
  intensity: number;
  color?: string;
}
```

**Features:**

- React Three Fiber canvas setup
- Configurable camera and lighting
- Performance optimization with `useFrame`
- Responsive canvas sizing
- Mouse interaction handling

#### FloatingObjects Component

```typescript
interface FloatingObjectsProps {
  count: number;
  shapes: ("sphere" | "box" | "torus")[];
  colors: string[];
  animationSpeed?: number;
}
```

**Features:**

- Procedurally generated floating shapes
- Smooth rotation and floating animations
- Mouse-responsive movement
- Configurable object types and colors
- Performance-optimized rendering

### Form Components

#### ContactForm Component

```typescript
interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
  className?: string;
}

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}
```

**Features:**

- Form validation with error messages
- Animated input focus states
- Submit button with loading animation
- Accessibility compliance
- Success/error feedback

## Data Models

### Navigation Data

```typescript
interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
  children?: NavigationItem[];
}
```

### Service Data

```typescript
interface Service {
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
```

### Project Data

```typescript
interface Project {
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

interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
  featured: boolean;
}
```

### Company Data

```typescript
interface CompanyInfo {
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
    social: {
      platform: string;
      url: string;
    }[];
  };
  team: TeamMember[];
  statistics: {
    label: string;
    value: string;
    icon: string;
  }[];
}

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    platform: string;
    url: string;
  }[];
}
```

### Animation Data

```typescript
interface AnimationVariant {
  initial: Record<string, any>;
  animate: Record<string, any>;
  exit?: Record<string, any>;
  transition?: {
    duration: number;
    ease: string;
    delay?: number;
  };
}

interface ParallaxConfig {
  speed: number;
  direction: "vertical" | "horizontal";
  triggerOffset: number;
}
```

### Theme Data

````typescript
interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: {
      primary: string;
      secondary: string;
      muted: string;
    };
    gradients: {
      primary: string;
      secondary: string;
      hero: string;
    };
  };
  typography: {
    fontFamily: {
      sans: string[];
      heading: string[];
    };
    fontSize: Record<string, string>;
    fontWeight: Record<string, number>;
  };
  spacing: Record<string, string>;
  borderRadius: Record<string, string>;
  shadows: Record<string, string>;
}


## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Navigation Response Time

*For any* navigation link click, the page router should navigate to the corresponding page within 100ms.

**Validates: Requirements 1.7**

### Property 2: Mouse-Responsive 3D Objects

*For any* mouse movement over interactive 3D objects, the objects should rotate based on the mouse position with smooth interpolation.

**Validates: Requirements 4.3**

### Property 3: Service Card 3D Hover Effect

*For any* service card hover interaction, the card should lift in 3D space with a smooth animation.

**Validates: Requirements 4.5**

### Property 4: Parallax Background Movement

*For any* scroll event, background elements should move slower than foreground content, creating a parallax depth effect.

**Validates: Requirements 5.1**

### Property 5: Parallax Shape Speed Variation

*For any* scroll event, floating shapes should move at different speeds to create layered parallax effects.

**Validates: Requirements 5.2**

### Property 6: Section Entrance Animations

*For any* section that comes into view during scrolling, entrance animations should trigger smoothly.

**Validates: Requirements 6.2**

### Property 7: Button Hover Response Time

*For any* button hover interaction, the subtle lift effect should be applied within 50ms.

**Validates: Requirements 6.4**

### Property 8: Icon Hover Response Time

*For any* icon hover interaction, the bounce effect should be applied within 50ms.

**Validates: Requirements 6.5**

### Property 9: Page Transition Animations

*For any* navigation between pages, page transition animations should be applied smoothly.

**Validates: Requirements 6.6**

### Property 10: Animation Completion Time

*For any* hover animation, the animation should complete within 300ms.

**Validates: Requirements 6.7**

### Property 11: Service Card Interaction Response

*For any* service card interaction, visual feedback should be provided within 100ms.

**Validates: Requirements 9.4**

### Property 12: Project Card Hover Animation

*For any* project card hover interaction, animated hover effects should be applied within 100ms.

**Validates: Requirements 10.4**

### Property 13: Contact Form Valid Submission

*For any* valid contact form data submission, the form should process the submission within 500ms.

**Validates: Requirements 11.5**

### Property 14: Contact Form Validation Errors

*For any* invalid contact form data submission, validation errors should be displayed within 200ms.

**Validates: Requirements 11.6**

### Property 15: Responsive Grid Adaptation

*For any* viewport size change, flexible grid layouts should adapt appropriately to the new screen size.

**Validates: Requirements 12.4**

### Property 16: Responsive Typography Scaling

*For any* viewport size change, typography should scale appropriately to maintain readability.

**Validates: Requirements 12.5**

### Property 17: Interaction Feedback Response

*For any* user interaction, visual feedback should be provided within 100ms.

**Validates: Requirements 13.5**

### Property 18: 3D Model Lazy Loading

*For any* 3D models not immediately visible, they should be lazy loaded only when needed.

**Validates: Requirements 14.1**

### Property 19: Image Optimization

*For any* image on the website, it should be optimized for web delivery with appropriate formats and compression.

**Validates: Requirements 14.2**

### Property 20: Image Lazy Loading

*For any* images not in the initial viewport, they should be lazy loaded when they come into view.

**Validates: Requirements 14.3**

### Property 21: Animation Performance

*For any* animation, efficient techniques should be used to maintain 60fps performance.

**Validates: Requirements 14.4**

### Property 22: Page Load Performance

*For any* page navigation, initial content should be displayed within 2 seconds on a 3G connection.

**Validates: Requirements 14.6**

### Property 23: Keyboard Navigation

*For any* navigation element, it should be accessible and navigable using keyboard controls.

**Validates: Requirements 15.1**

### Property 24: ARIA Labels

*For any* interactive element, appropriate ARIA labels should be provided for accessibility.

**Validates: Requirements 15.2**

### Property 25: Color Contrast

*For any* text element, sufficient color contrast ratios should be maintained for readability.

**Validates: Requirements 15.3**

### Property 26: Focus Indicators

*For any* focusable element, visible focus indicators should be displayed when tabbing through the page.

**Validates: Requirements 15.4**

## Error Handling

### Client-Side Error Handling

**React Error Boundaries**
- Implement error boundaries around major component trees
- Graceful fallback UI for component crashes
- Error logging and reporting for debugging

**3D Rendering Errors**
- WebGL capability detection and fallbacks
- Graceful degradation for unsupported devices
- Error recovery for failed 3D model loading

**Animation Errors**
- Fallback to CSS animations if JavaScript animations fail
- Performance monitoring to disable animations on low-end devices
- Graceful handling of animation library failures

**Form Validation Errors**
- Real-time validation with clear error messages
- Accessible error announcements for screen readers
- Prevention of invalid form submissions

### Network Error Handling

**API Communication**
- Retry logic for failed requests
- Timeout handling for slow connections
- Offline state detection and messaging

**Asset Loading**
- Fallback images for failed image loads
- Progressive loading with loading states
- Error recovery for failed 3D model downloads

### Performance Error Handling

**Memory Management**
- 3D scene cleanup on page navigation
- Animation cleanup to prevent memory leaks
- Image cache management

**Performance Monitoring**
- Frame rate monitoring for animations
- Automatic quality reduction on performance issues
- User preference respect for reduced motion

## Testing Strategy

### Dual Testing Approach

The testing strategy employs both unit testing and property-based testing to ensure comprehensive coverage:

**Unit Tests**: Focus on specific examples, edge cases, and integration points
- Component rendering with specific props
- Form validation with known invalid inputs
- Navigation between specific pages
- Error boundary behavior with simulated errors
- Accessibility compliance for specific components

**Property Tests**: Verify universal properties across all inputs
- Animation timing properties across all interactive elements
- Responsive behavior across all viewport sizes
- Performance characteristics across all pages
- Accessibility properties across all components
- Form validation across all possible input combinations

### Testing Framework Configuration

**Unit Testing Stack**:
- **Framework**: Jest with React Testing Library
- **Coverage**: Minimum 80% code coverage
- **Focus**: Component behavior, user interactions, error states

**Property-Based Testing Stack**:
- **Framework**: fast-check for JavaScript property testing
- **Configuration**: Minimum 100 iterations per property test
- **Focus**: Universal behaviors, performance properties, accessibility

**End-to-End Testing**:
- **Framework**: Playwright for cross-browser testing
- **Focus**: User journeys, performance metrics, visual regression

### Property Test Implementation

Each correctness property must be implemented as a property-based test with the following configuration:

```typescript
// Example property test structure
describe('Feature: letlotlo-international-website, Property 1: Navigation Response Time', () => {
  it('should navigate within 100ms for any navigation link', async () => {
    await fc.assert(fc.asyncProperty(
      fc.constantFrom('/about', '/services', '/projects', '/contact'),
      async (targetPath) => {
        const startTime = performance.now();
        await router.push(targetPath);
        const endTime = performance.now();
        expect(endTime - startTime).toBeLessThan(100);
      }
    ), { numRuns: 100 });
  });
});
````

**Test Tags**: Each property test must include a comment referencing its design property:

- **Feature: letlotlo-international-website, Property 1: Navigation Response Time**
- **Feature: letlotlo-international-website, Property 2: Mouse-Responsive 3D Objects**
- And so on for all 26 properties

### Performance Testing

**Core Web Vitals Monitoring**:

- Largest Contentful Paint (LCP) < 2.5s
- First Input Delay (FID) < 100ms
- Cumulative Layout Shift (CLS) < 0.1

**3D Performance Testing**:

- Frame rate monitoring during 3D animations
- Memory usage tracking for 3D scenes
- WebGL performance profiling

**Animation Performance Testing**:

- 60fps maintenance during animations
- Animation timing accuracy verification
- Reduced motion preference respect

### Accessibility Testing

**Automated Accessibility Testing**:

- axe-core integration for automated a11y checks
- Color contrast ratio verification
- ARIA label validation

**Manual Accessibility Testing**:

- Keyboard navigation testing
- Screen reader compatibility
- Focus management verification

### Visual Regression Testing

**Screenshot Comparison**:

- Cross-browser visual consistency
- Responsive design verification
- Animation state capture

**3D Rendering Testing**:

- WebGL output consistency
- 3D model loading verification
- Animation frame comparison

This comprehensive testing strategy ensures that all functional requirements are validated through both specific examples and universal properties, providing confidence in the system's correctness and performance across all use cases.
