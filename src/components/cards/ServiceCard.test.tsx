import { render, screen } from '@testing-library/react';
import ServiceCard from './ServiceCard';

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h3: ({ children, ...props }: any) => <h3 {...props}>{children}</h3>,
  },
}));

// Mock Next.js Link
jest.mock('next/link', () => ({
  default: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  ),
}));

// Mock Heroicons
jest.mock('@heroicons/react/24/outline', () => ({
  ArrowRightIcon: ({ className }: { className?: string }) => (
    <svg className={className} data-testid="arrow-right-icon">
      <path d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
    </svg>
  ),
}));

// Mock theme
jest.mock('@/lib/theme', () => ({
  theme: {
    gradients: {
      primary: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
      secondary: 'linear-gradient(135deg, #ec4899 0%, #f59e0b 100%)',
      card: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
      button: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
      accent: 'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)',
    },
    shadows: {
      '3d': {
        lg: '0 8px 16px rgb(79 70 229 / 0.2), 0 16px 32px rgb(79 70 229 / 0.2)',
      },
      colored: {
        primary: '0 4px 14px 0 rgb(79 70 229 / 0.39)',
      },
    },
  },
}));

// Mock animations
jest.mock('@/lib/animations', () => ({
  serviceCardHover: {
    initial: { y: 0, scale: 1 },
    animate: { y: -12, scale: 1.02 },
  },
  gentleBounce: {
    initial: { y: 0 },
    animate: { y: [-4, 0, -4] },
  },
  transitions: {
    fast: { duration: 0.15 },
  },
}));

// Mock icon component
const MockIcon = ({ className }: { className?: string }) => (
  <svg className={className} data-testid="service-icon">
    <circle cx="12" cy="12" r="10" />
  </svg>
);

describe('ServiceCard', () => {
  const defaultProps = {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies',
    icon: MockIcon,
    features: [
      'Responsive Design',
      'Modern Frameworks',
      'Performance Optimization',
      'SEO Friendly',
    ],
  };

  it('renders service card with all required elements', () => {
    render(<ServiceCard {...defaultProps} />);

    expect(screen.getByText('Web Development')).toBeInTheDocument();
    expect(screen.getByText('Custom web applications built with modern technologies')).toBeInTheDocument();
    expect(screen.getByTestId('service-icon')).toBeInTheDocument();
    
    // Check all features are rendered
    expect(screen.getByText('Responsive Design')).toBeInTheDocument();
    expect(screen.getByText('Modern Frameworks')).toBeInTheDocument();
    expect(screen.getByText('Performance Optimization')).toBeInTheDocument();
    expect(screen.getByText('SEO Friendly')).toBeInTheDocument();
  });

  it('renders CTA link when provided', () => {
    render(<ServiceCard {...defaultProps} ctaLink="/services/web-development" />);

    const ctaLink = screen.getByRole('link');
    expect(ctaLink).toBeInTheDocument();
    expect(ctaLink).toHaveAttribute('href', '/services/web-development');
    expect(screen.getByText('Learn More')).toBeInTheDocument();
    expect(screen.getByTestId('arrow-right-icon')).toBeInTheDocument();
  });

  it('does not render CTA link when not provided', () => {
    render(<ServiceCard {...defaultProps} />);

    expect(screen.queryByRole('link')).not.toBeInTheDocument();
    expect(screen.queryByText('Learn More')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(
      <ServiceCard {...defaultProps} className="custom-class" />
    );

    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('custom-class');
  });

  it('renders icon with proper styling', () => {
    render(<ServiceCard {...defaultProps} />);

    const icon = screen.getByTestId('service-icon');
    expect(icon).toHaveClass('w-8', 'h-8', 'text-white');
  });

  it('renders features with bullet points', () => {
    render(<ServiceCard {...defaultProps} />);

    const features = defaultProps.features;
    features.forEach(feature => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  it('has proper accessibility attributes', () => {
    render(<ServiceCard {...defaultProps} ctaLink="/services/web-development" />);

    const title = screen.getByRole('heading', { level: 3 });
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Web Development');

    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
  });

  it('handles empty features array', () => {
    render(<ServiceCard {...defaultProps} features={[]} />);

    expect(screen.getByText('Web Development')).toBeInTheDocument();
    expect(screen.getByText('Custom web applications built with modern technologies')).toBeInTheDocument();
  });

  it('handles long title and description', () => {
    const longProps = {
      ...defaultProps,
      title: 'Very Long Service Title That Might Wrap to Multiple Lines',
      description: 'This is a very long description that should still render properly and maintain good readability even when it spans multiple lines in the card layout.',
    };

    render(<ServiceCard {...longProps} />);

    expect(screen.getByText(longProps.title)).toBeInTheDocument();
    expect(screen.getByText(longProps.description)).toBeInTheDocument();
  });

  it('handles many features', () => {
    const manyFeatures = [
      'Feature 1',
      'Feature 2', 
      'Feature 3',
      'Feature 4',
      'Feature 5',
      'Feature 6',
      'Feature 7',
      'Feature 8',
    ];

    render(<ServiceCard {...defaultProps} features={manyFeatures} />);

    manyFeatures.forEach(feature => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
  });

  it('maintains proper structure for responsive design', () => {
    const { container } = render(<ServiceCard {...defaultProps} />);

    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('relative', 'group', 'cursor-pointer');
    
    // Check for responsive classes and structure
    expect(card.querySelector('.p-8')).toBeInTheDocument();
    expect(card.querySelector('.w-16.h-16')).toBeInTheDocument();
  });

  it('renders with proper gradient and shadow styles', () => {
    const { container } = render(<ServiceCard {...defaultProps} />);

    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('bg-gradient-to-br', 'from-white', 'via-gray-50/50', 'to-white');
    expect(card).toHaveClass('border', 'border-gray-200/60', 'rounded-3xl');
  });

  it('has proper transform and perspective classes for 3D effects', () => {
    const { container } = render(<ServiceCard {...defaultProps} />);

    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('transform-gpu', 'perspective-1000');
  });
});