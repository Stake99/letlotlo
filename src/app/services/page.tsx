'use client';

import { motion } from 'framer-motion';
import ServiceCard from '@/components/cards/ServiceCard';
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  PaintBrushIcon,
  CloudIcon,
  ChartBarIcon,
  CogIcon,
  RocketLaunchIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies for optimal performance and user experience.',
    icon: CodeBracketIcon,
    features: [
      'Responsive web design',
      'Progressive web apps (PWA)',
      'E-commerce solutions',
      'Content management systems',
      'API development & integration'
    ],
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android.',
    icon: DevicePhoneMobileIcon,
    features: [
      'iOS & Android apps',
      'Cross-platform development',
      'Mobile UI/UX design',
      'App store optimization',
      'Push notifications & analytics'
    ],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces designed with user-centered principles and modern design trends.',
    icon: PaintBrushIcon,
    features: [
      'User research & personas',
      'Wireframing & prototyping',
      'Visual design & branding',
      'Usability testing',
      'Design systems & style guides'
    ],
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services to power your digital transformation.',
    icon: CloudIcon,
    features: [
      'Cloud migration & deployment',
      'Serverless architecture',
      'DevOps & CI/CD pipelines',
      'Cloud security & compliance',
      'Performance optimization'
    ],
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with advanced analytics and visualization.',
    icon: ChartBarIcon,
    features: [
      'Business intelligence dashboards',
      'Data visualization',
      'Predictive analytics',
      'Real-time reporting',
      'Custom analytics solutions'
    ],
  },
  {
    id: 'consulting',
    title: 'Digital Consulting',
    description: 'Strategic guidance to help you navigate digital transformation and technology decisions.',
    icon: CogIcon,
    features: [
      'Technology strategy',
      'Digital transformation',
      'Process optimization',
      'Technical audits',
      'Architecture planning'
    ],
  },
  {
    id: 'product-development',
    title: 'Product Development',
    description: 'End-to-end product development from concept to launch and beyond.',
    icon: RocketLaunchIcon,
    features: [
      'MVP development',
      'Product strategy & roadmap',
      'Agile development process',
      'User feedback integration',
      'Continuous improvement'
    ],
  },
  {
    id: 'security',
    title: 'Security & Compliance',
    description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
    icon: ShieldCheckIcon,
    features: [
      'Security audits & testing',
      'Compliance consulting',
      'Data protection & privacy',
      'Penetration testing',
      'Security monitoring'
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 via-blue-100/30 to-pink-100/30" />
        {/* Decorative shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-36 h-36 bg-pink-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-purple-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div 
            className="text-center"
            variants={fadeInUp}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 bg-clip-text text-transparent mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Services
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Comprehensive digital solutions tailored to transform your business and drive innovation.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                custom={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  features={service.features}
                  className="h-full"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 rounded-3xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with our expert services.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block px-8 py-4 bg-white text-purple-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}