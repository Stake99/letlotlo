'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { theme } from '@/lib/theme';
import { serviceCardHover, gentleBounce, transitions } from '@/lib/animations';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  ctaLink?: string;
  className?: string;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  features,
  ctaLink,
  className = '',
}: ServiceCardProps) {
  return (
    <motion.article
      variants={serviceCardHover}
      initial="initial"
      whileHover="animate"
      whileTap={{ scale: 0.98 }}
      className={`
        relative group cursor-pointer
        bg-gradient-to-br from-white via-gray-50/50 to-white
        border border-gray-200/60 rounded-2xl sm:rounded-3xl
        overflow-hidden
        transform-gpu perspective-1000
        w-full
        ${className}
      `}
      style={{
        willChange: 'transform',
        backfaceVisibility: 'hidden',
      }}
      role="article"
      aria-label={`${title} service card`}
      tabIndex={0}
    >
      {/* Gradient background overlay */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: theme.gradients.card,
        }}
      />
      
      {/* 3D shadow effect */}
      <div 
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
        style={{
          boxShadow: theme.shadows['3d'].lg,
          transform: 'translateZ(-10px)',
        }}
      />

      {/* Card content */}
      <div className="relative z-10 p-4 sm:p-6 md:p-8">
        {/* Icon section with bounce animation */}
        <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-4 sm:mb-5 md:mb-6 mx-auto" aria-hidden="true">
          <motion.div
            variants={gentleBounce}
            initial="initial"
            animate="animate"
            className="relative"
          >
            <div 
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              style={{
                background: theme.gradients.primary,
                boxShadow: theme.shadows.colored.primary,
              }}
            >
              <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" aria-hidden="true" />
            </div>
            
            {/* Icon glow effect */}
            <motion.div
              className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
              style={{
                background: theme.gradients.primary,
                filter: 'blur(8px)',
                transform: 'scale(1.2)',
              }}
            />
          </motion.div>
        </div>

        {/* Title */}
        <motion.h3 
          className="text-lg sm:text-xl md:text-xl font-bold text-gray-900 mb-3 sm:mb-4 text-center group-hover:text-blue-600 transition-colors duration-300"
          whileHover={{ scale: 1.02 }}
          transition={transitions.fast}
        >
          {title}
        </motion.h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-600 text-center mb-4 sm:mb-5 md:mb-6 leading-relaxed">
          {description}
        </p>

        {/* Features list */}
        <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-7 md:mb-8" role="list" aria-label={`${title} features`}>
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.3,
                ease: "easeOut"
              }}
              className="flex items-center text-xs sm:text-sm text-gray-700"
              role="listitem"
            >
              <div 
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mr-2 sm:mr-3 flex-shrink-0"
                style={{ background: theme.gradients.accent }}
                aria-hidden="true"
              />
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* CTA Link */}
        {ctaLink && (
          <div className="text-center">
            <Link href={ctaLink} aria-label={`Learn more about ${title}`}>
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base text-white shadow-lg hover:shadow-xl transition-all duration-300 group/cta focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                style={{
                  background: theme.gradients.button,
                  boxShadow: theme.shadows.colored.primary,
                }}
              >
                <span>Learn More</span>
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  aria-hidden="true"
                >
                  <ArrowRightIcon className="w-4 h-4" />
                </motion.div>
              </motion.div>
            </Link>
          </div>
        )}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-300" aria-hidden="true">
        <div 
          className="w-full h-full rounded-full"
          style={{ background: theme.gradients.primary }}
        />
      </div>
      
      <div className="absolute bottom-4 left-4 w-12 h-12 opacity-5 group-hover:opacity-10 transition-opacity duration-300" aria-hidden="true">
        <div 
          className="w-full h-full rounded-full"
          style={{ background: theme.gradients.secondary }}
        />
      </div>

      {/* Hover border effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300"
        style={{
          background: 'linear-gradient(135deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)',
          backgroundClip: 'padding-box',
        }}
        aria-hidden="true"
      />
    </motion.article>
  );
}