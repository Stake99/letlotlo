import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ProjectCard from './ProjectCard';

// Mock next/image
jest.mock('next/image', () => ({
  default: ({ src, alt, onLoad, ...props }: any) => {
    return (
      <img
        src={src}
        alt={alt}
        onLoad={onLoad}
        {...props}
        data-testid="project-image"
      />
    );
  },
}));

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h3: ({ children, ...props }: any) => <h3 {...props}>{children}</h3>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
    button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  },
}));

// Mock window.open
const mockWindowOpen = jest.fn();
Object.defineProperty(window, 'open', {
  value: mockWindowOpen,
  writable: true,
});

describe('ProjectCard', () => {
  const defaultProps = {
    title: 'Test Project',
    description: 'This is a test project description that should be displayed in the card.',
    images: ['/test-image-1.jpg', '/test-image-2.jpg'],
    technologies: ['React', 'TypeScript', 'Next.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/test/repo',
  };

  beforeEach(() => {
    mockWindowOpen.mockClear();
  });

  it('renders project card with all content', () => {
    render(<ProjectCard {...defaultProps} />);

    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText(/This is a test project description/)).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Next.js')).toBeInTheDocument();
    expect(screen.getByText('Live Demo')).toBeInTheDocument();
    expect(screen.getByText('Code')).toBeInTheDocument();
  });

  it('displays first image by default', () => {
    render(<ProjectCard {...defaultProps} />);

    const image = screen.getByTestId('project-image');
    expect(image).toHaveAttribute('src', '/test-image-1.jpg');
    expect(image).toHaveAttribute('alt', 'Test Project - Image 1');
  });

  it('shows image navigation controls for multiple images', () => {
    render(<ProjectCard {...defaultProps} />);

    expect(screen.getByLabelText('Previous image')).toBeInTheDocument();
    expect(screen.getByLabelText('Next image')).toBeInTheDocument();
    expect(screen.getByText('1 / 2')).toBeInTheDocument();
  });

  it('hides navigation controls for single image', () => {
    const singleImageProps = {
      ...defaultProps,
      images: ['/test-image-1.jpg'],
    };

    render(<ProjectCard {...singleImageProps} />);

    expect(screen.queryByLabelText('Previous image')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Next image')).not.toBeInTheDocument();
    expect(screen.queryByText('1 / 1')).not.toBeInTheDocument();
  });

  it('navigates to next image when next button is clicked', async () => {
    render(<ProjectCard {...defaultProps} />);

    const nextButton = screen.getByLabelText('Next image');
    fireEvent.click(nextButton);

    await waitFor(() => {
      const image = screen.getByTestId('project-image');
      expect(image).toHaveAttribute('src', '/test-image-2.jpg');
      expect(image).toHaveAttribute('alt', 'Test Project - Image 2');
    });

    expect(screen.getByText('2 / 2')).toBeInTheDocument();
  });

  it('navigates to previous image when previous button is clicked', async () => {
    render(<ProjectCard {...defaultProps} />);

    // First go to next image
    const nextButton = screen.getByLabelText('Next image');
    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(screen.getByText('2 / 2')).toBeInTheDocument();
    });

    // Then go back to previous
    const prevButton = screen.getByLabelText('Previous image');
    fireEvent.click(prevButton);

    await waitFor(() => {
      const image = screen.getByTestId('project-image');
      expect(image).toHaveAttribute('src', '/test-image-1.jpg');
    });

    expect(screen.getByText('1 / 2')).toBeInTheDocument();
  });

  it('wraps around when navigating past last image', async () => {
    render(<ProjectCard {...defaultProps} />);

    const nextButton = screen.getByLabelText('Next image');
    
    // Click next twice to wrap around
    fireEvent.click(nextButton);
    await waitFor(() => {
      expect(screen.getByText('2 / 2')).toBeInTheDocument();
    });

    fireEvent.click(nextButton);
    await waitFor(() => {
      const image = screen.getByTestId('project-image');
      expect(image).toHaveAttribute('src', '/test-image-1.jpg');
    });

    expect(screen.getByText('1 / 2')).toBeInTheDocument();
  });

  it('wraps around when navigating before first image', async () => {
    render(<ProjectCard {...defaultProps} />);

    const prevButton = screen.getByLabelText('Previous image');
    fireEvent.click(prevButton);

    await waitFor(() => {
      const image = screen.getByTestId('project-image');
      expect(image).toHaveAttribute('src', '/test-image-2.jpg');
    });

    expect(screen.getByText('2 / 2')).toBeInTheDocument();
  });

  it('navigates to specific image when indicator is clicked', async () => {
    render(<ProjectCard {...defaultProps} />);

    const secondIndicator = screen.getByLabelText('Go to image 2');
    fireEvent.click(secondIndicator);

    await waitFor(() => {
      const image = screen.getByTestId('project-image');
      expect(image).toHaveAttribute('src', '/test-image-2.jpg');
    });

    expect(screen.getByText('2 / 2')).toBeInTheDocument();
  });

  it('opens live demo URL in new tab when live demo button is clicked', () => {
    render(<ProjectCard {...defaultProps} />);

    const liveDemoButton = screen.getByText('Live Demo');
    fireEvent.click(liveDemoButton);

    expect(mockWindowOpen).toHaveBeenCalledWith(
      'https://example.com',
      '_blank',
      'noopener,noreferrer'
    );
  });

  it('opens GitHub URL in new tab when code button is clicked', () => {
    render(<ProjectCard {...defaultProps} />);

    const codeButton = screen.getByText('Code');
    fireEvent.click(codeButton);

    expect(mockWindowOpen).toHaveBeenCalledWith(
      'https://github.com/test/repo',
      '_blank',
      'noopener,noreferrer'
    );
  });

  it('does not render action buttons when URLs are not provided', () => {
    const propsWithoutUrls = {
      ...defaultProps,
      liveUrl: undefined,
      githubUrl: undefined,
    };

    render(<ProjectCard {...propsWithoutUrls} />);

    expect(screen.queryByText('Live Demo')).not.toBeInTheDocument();
    expect(screen.queryByText('Code')).not.toBeInTheDocument();
  });

  it('renders only live demo button when only liveUrl is provided', () => {
    const propsWithLiveOnly = {
      ...defaultProps,
      githubUrl: undefined,
    };

    render(<ProjectCard {...propsWithLiveOnly} />);

    expect(screen.getByText('Live Demo')).toBeInTheDocument();
    expect(screen.queryByText('Code')).not.toBeInTheDocument();
  });

  it('renders only code button when only githubUrl is provided', () => {
    const propsWithGithubOnly = {
      ...defaultProps,
      liveUrl: undefined,
    };

    render(<ProjectCard {...propsWithGithubOnly} />);

    expect(screen.queryByText('Live Demo')).not.toBeInTheDocument();
    expect(screen.getByText('Code')).toBeInTheDocument();
  });

  it('renders technology tags with proper styling', () => {
    render(<ProjectCard {...defaultProps} />);

    const reactTag = screen.getByText('React');
    const typeScriptTag = screen.getByText('TypeScript');
    const nextJsTag = screen.getByText('Next.js');

    expect(reactTag).toHaveClass('text-blue-700', 'bg-blue-50');
    expect(typeScriptTag).toHaveClass('text-blue-700', 'bg-blue-50');
    expect(nextJsTag).toHaveClass('text-blue-700', 'bg-blue-50');
  });

  it('handles empty images array gracefully', () => {
    const propsWithoutImages = {
      ...defaultProps,
      images: [],
    };

    render(<ProjectCard {...propsWithoutImages} />);

    expect(screen.queryByTestId('project-image')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Previous image')).not.toBeInTheDocument();
    expect(screen.queryByLabelText('Next image')).not.toBeInTheDocument();
  });

  it('handles empty technologies array gracefully', () => {
    const propsWithoutTechnologies = {
      ...defaultProps,
      technologies: [],
    };

    render(<ProjectCard {...propsWithoutTechnologies} />);

    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText(/This is a test project description/)).toBeInTheDocument();
    // Should not have any technology tags
    expect(screen.queryByText('React')).not.toBeInTheDocument();
  });

  it('applies custom className when provided', () => {
    const { container } = render(
      <ProjectCard {...defaultProps} className="custom-class" />
    );

    const cardElement = container.firstChild as HTMLElement;
    expect(cardElement).toHaveClass('custom-class');
  });

  it('stops event propagation when navigation buttons are clicked', () => {
    const mockCardClick = jest.fn();
    
    render(
      <div onClick={mockCardClick}>
        <ProjectCard {...defaultProps} />
      </div>
    );

    const nextButton = screen.getByLabelText('Next image');
    fireEvent.click(nextButton);

    expect(mockCardClick).not.toHaveBeenCalled();
  });

  it('stops event propagation when action buttons are clicked', () => {
    const mockCardClick = jest.fn();
    
    render(
      <div onClick={mockCardClick}>
        <ProjectCard {...defaultProps} />
      </div>
    );

    const liveDemoButton = screen.getByText('Live Demo');
    fireEvent.click(liveDemoButton);

    expect(mockCardClick).not.toHaveBeenCalled();
    expect(mockWindowOpen).toHaveBeenCalled();
  });

  it('handles image load event correctly', async () => {
    render(<ProjectCard {...defaultProps} />);

    const image = screen.getByTestId('project-image');
    
    // Initially image should have opacity-0 class (not loaded)
    expect(image).toHaveClass('opacity-0');

    // Simulate image load
    fireEvent.load(image);

    await waitFor(() => {
      expect(image).toHaveClass('opacity-100');
    });
  });

  it('shows loading placeholder when image is not loaded', () => {
    render(<ProjectCard {...defaultProps} />);

    // Should show loading placeholder initially
    expect(screen.getByTestId('project-image')).toHaveClass('opacity-0');
    
    // Loading placeholder should be visible
    const loadingElement = document.querySelector('.animate-pulse');
    expect(loadingElement).toBeInTheDocument();
  });

  it('renders with responsive image sizing attributes', () => {
    render(<ProjectCard {...defaultProps} />);

    const image = screen.getByTestId('project-image');
    expect(image).toHaveAttribute('sizes', '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw');
  });

  it('sets priority loading for first image', () => {
    render(<ProjectCard {...defaultProps} />);

    const image = screen.getByTestId('project-image');
    expect(image).toHaveAttribute('priority');
  });
});