'use client';

import type { Metadata } from "next";
import { motion } from 'framer-motion';
import ProjectCard from '@/components/cards/ProjectCard';
import { fadeIn, staggerContainer } from '@/lib/animations';
import { theme } from '@/lib/theme';

// Sample project data showcasing company work
const projects = [
  {
    id: '1',
    title: 'E-Commerce Platform Redesign',
    description: 'Complete redesign and development of a modern e-commerce platform with advanced product filtering, real-time inventory management, and seamless checkout experience.',
    images: [
      '/placeholder-project-1.jpg',
      '/placeholder-project-1-2.jpg',
      '/placeholder-project-1-3.jpg',
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project',
  },
  {
    id: '2',
    title: 'Healthcare Management System',
    description: 'Comprehensive healthcare management solution with patient records, appointment scheduling, telemedicine integration, and HIPAA-compliant data handling.',
    images: [
      '/placeholder-project-2.jpg',
      '/placeholder-project-2-2.jpg',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC', 'AWS'],
    liveUrl: 'https://example.com',
  },
  {
    id: '3',
    title: 'Real Estate Listing Platform',
    description: 'Interactive real estate platform featuring 3D property tours, advanced search filters, mortgage calculators, and integrated CRM for agents.',
    images: [
      '/placeholder-project-3.jpg',
      '/placeholder-project-3-2.jpg',
      '/placeholder-project-3-3.jpg',
      '/placeholder-project-3-4.jpg',
    ],
    technologies: ['Vue.js', 'Three.js', 'Firebase', 'Google Maps API'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project',
  },
  {
    id: '4',
    title: 'Educational Learning Platform',
    description: 'Interactive online learning platform with video courses, live sessions, progress tracking, and gamification elements to enhance student engagement.',
    images: [
      '/placeholder-project-4.jpg',
    ],
    technologies: ['React', 'Django', 'PostgreSQL', 'Redis', 'WebSockets'],
    liveUrl: 'https://example.com',
  },
  {
    id: '5',
    title: 'Restaurant Management Suite',
    description: 'All-in-one restaurant management system with POS integration, inventory tracking, staff scheduling, and customer loyalty programs.',
    images: [
      '/placeholder-project-5.jpg',
      '/placeholder-project-5-2.jpg',
    ],
    technologies: ['Angular', 'Express.js', 'MySQL', 'Socket.io'],
    githubUrl: 'https://github.com/example/project',
  },
  {
    id: '6',
    title: 'Fitness Tracking Mobile App',
    description: 'Cross-platform fitness application with workout tracking, nutrition planning, social features, and integration with wearable devices.',
    images: [
      '/placeholder-project-6.jpg',
      '/placeholder-project-6-2.jpg',
      '/placeholder-project-6-3.jpg',
    ],
    technologies: ['React Native', 'GraphQL', 'MongoDB', 'HealthKit', 'Google Fit'],
    liveUrl: 'https://example.com',
  },
];

// Category filter options
const categories = [
  'All Projects',
  'E-Commerce',
  'Healthcare',
  'Real Estate',
  'Education',
  'Food & Beverage',
  'Fitness',
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-20"
            style={{ background: theme.gradients.primary }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-20"
            style={{ background: theme.gradients.secondary }}
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div 
            className="text-center"
            variants={fadeIn}
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              variants={fadeIn}
            >
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Projects
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8"
              variants={fadeIn}
            >
              Showcasing our successful digital transformations and innovative solutions
            </motion.p>

            <motion.div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg"
              variants={fadeIn}
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-gray-700">
                {projects.length} Projects Completed
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Projects Grid Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeIn}
              custom={index}
              transition={{
                delay: index * 0.1,
              }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                images={project.images}
                technologies={project.technologies}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50 border border-gray-200 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl">
              Let's work together to bring your vision to life with cutting-edge technology and creative solutions.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-8 py-4 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
              style={{
                background: theme.gradients.button,
                boxShadow: theme.shadows.colored.primary,
              }}
            >
              Get in Touch
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Bottom decorative section */}
      <div className="relative h-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
      </div>
    </div>
  );
}