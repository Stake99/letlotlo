'use client';

import ProjectCard from '@/components/cards/ProjectCard';

const sampleProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern, responsive e-commerce platform built with Next.js and TypeScript. Features include product catalog, shopping cart, user authentication, and payment processing with Stripe integration.',
    images: [
      '/api/placeholder/400/300?text=E-Commerce+Home',
      '/api/placeholder/400/300?text=Product+Page',
      '/api/placeholder/400/300?text=Shopping+Cart',
      '/api/placeholder/400/300?text=Checkout',
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL', 'Prisma'],
    liveUrl: 'https://ecommerce-demo.example.com',
    githubUrl: 'https://github.com/example/ecommerce-platform',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React and Firebase.',
    images: [
      '/api/placeholder/400/300?text=Dashboard',
      '/api/placeholder/400/300?text=Task+Board',
      '/api/placeholder/400/300?text=Team+View',
    ],
    technologies: ['React', 'Firebase', 'Material-UI', 'TypeScript', 'React DnD'],
    liveUrl: 'https://taskmanager-demo.example.com',
    githubUrl: 'https://github.com/example/task-manager',
  },
  {
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard with interactive maps, detailed forecasts, and location-based weather alerts. Features responsive design and dark mode support.',
    images: [
      '/api/placeholder/400/300?text=Weather+Dashboard',
      '/api/placeholder/400/300?text=Forecast+View',
    ],
    technologies: ['Vue.js', 'Vuetify', 'OpenWeather API', 'Chart.js'],
    liveUrl: 'https://weather-dashboard.example.com',
  },
  {
    title: 'Portfolio Website',
    description: 'A creative portfolio website showcasing design work with smooth animations, 3D elements, and an interactive gallery. Built with modern web technologies.',
    images: [
      '/api/placeholder/400/300?text=Portfolio+Home',
    ],
    technologies: ['Next.js', 'Three.js', 'Framer Motion', 'GSAP'],
    githubUrl: 'https://github.com/example/portfolio-website',
  },
  {
    title: 'Blog Platform',
    description: 'A full-featured blog platform with markdown support, comment system, and admin dashboard. Includes SEO optimization and social media integration.',
    images: [
      '/api/placeholder/400/300?text=Blog+Home',
      '/api/placeholder/400/300?text=Article+View',
      '/api/placeholder/400/300?text=Admin+Dashboard',
    ],
    technologies: ['Gatsby', 'GraphQL', 'Contentful', 'Netlify'],
    liveUrl: 'https://blog-platform.example.com',
    githubUrl: 'https://github.com/example/blog-platform',
  },
  {
    title: 'Mobile Banking App',
    description: 'A secure mobile banking application with biometric authentication, transaction history, and budget tracking features. Built with React Native.',
    images: [
      '/api/placeholder/400/300?text=Login+Screen',
      '/api/placeholder/400/300?text=Dashboard',
      '/api/placeholder/400/300?text=Transactions',
      '/api/placeholder/400/300?text=Budget+Tracker',
    ],
    technologies: ['React Native', 'TypeScript', 'Redux', 'Firebase Auth', 'Plaid API'],
  },
];

export default function ProjectCardExample() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ProjectCard Component Showcase
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Interactive project cards with image galleries, technology tags, hover animations, 
            and external link handling. Features lazy loading and responsive design.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sampleProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              images={project.images}
              technologies={project.technologies}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Component Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">Image Gallery</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Lazy loading with Next.js Image</li>
                <li>• Navigation arrows and indicators</li>
                <li>• Responsive image sizing</li>
                <li>• Loading placeholders</li>
                <li>• Image count badge</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">Technology Tags</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Animated tag appearance</li>
                <li>• Hover effects</li>
                <li>• Responsive wrapping</li>
                <li>• Consistent styling</li>
                <li>• Staggered animations</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">Hover Animations</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 3D card lift effect</li>
                <li>• Gradient overlays</li>
                <li>• Shadow animations</li>
                <li>• Border effects</li>
                <li>• Smooth transitions</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">External Links</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Live demo buttons</li>
                <li>• GitHub repository links</li>
                <li>• Secure external navigation</li>
                <li>• Event propagation handling</li>
                <li>• Conditional rendering</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">Responsive Design</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Mobile-first approach</li>
                <li>• Flexible grid layouts</li>
                <li>• Adaptive image sizes</li>
                <li>• Touch-friendly controls</li>
                <li>• Optimized performance</li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-gray-900">Accessibility</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• ARIA labels</li>
                <li>• Keyboard navigation</li>
                <li>• Screen reader support</li>
                <li>• Focus indicators</li>
                <li>• Semantic HTML</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="mt-12 bg-gray-900 rounded-3xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">Usage Examples</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-300 mb-2">Basic Usage</h3>
              <pre className="bg-gray-800 rounded-lg p-4 overflow-x-auto text-sm">
                <code>{`<ProjectCard
  title="My Project"
  description="Project description here..."
  images={['/image1.jpg', '/image2.jpg']}
  technologies={['React', 'TypeScript']}
  liveUrl="https://example.com"
  githubUrl="https://github.com/user/repo"
/>`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-300 mb-2">With Custom Styling</h3>
              <pre className="bg-gray-800 rounded-lg p-4 overflow-x-auto text-sm">
                <code>{`<ProjectCard
  title="Custom Project"
  description="Description..."
  images={['/image.jpg']}
  technologies={['Vue.js']}
  className="custom-project-card"
/>`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-300 mb-2">Minimal Configuration</h3>
              <pre className="bg-gray-800 rounded-lg p-4 overflow-x-auto text-sm">
                <code>{`<ProjectCard
  title="Simple Project"
  description="Basic project card"
  images={[]}
  technologies={[]}
/>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}