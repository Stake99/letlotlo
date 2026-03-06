'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { 
  ArrowTopRightOnSquareIcon, 
  CodeBracketIcon,
  ChevronLeftIcon,
  ChevronRightIcon 
} from '@heroicons/react/24/outline';
import { theme } from '@/lib/theme';
import { cardHover, fadeIn, transitions } from '@/lib/animations';

export interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  className?: string;
}

export default function ProjectCard({
  title,
  description,
  images,
  technologies,
  liveUrl,
  githubUrl,
  className = '',
}: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
    setImageLoaded(false);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    setImageLoaded(false);
  };

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.article
      variants={cardHover}
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
      aria-label={`${title} project card`}
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

      {/* Image Gallery Section */}
      <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden rounded-t-2xl sm:rounded-t-3xl bg-gray-100" role="img" aria-label={`${title} project images`}>
        {images.length > 0 && (
          <>
            {/* Main Image */}
            <motion.div
              key={currentImageIndex}
              variants={fadeIn}
              initial="initial"
              animate="animate"
              className="relative w-full h-full"
            >
              <Image
                src={images[currentImageIndex]}
                alt={`${title} - Image ${currentImageIndex + 1}`}
                fill
                className={`object-cover transition-opacity duration-300 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={currentImageIndex === 0}
              />
              
              {/* Loading placeholder */}
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center" aria-label="Loading image">
                  <div className="w-12 h-12 rounded-full bg-gray-300" />
                </div>
              )}
            </motion.div>

            {/* Navigation arrows for multiple images */}
            {images.length > 1 && (
              <>
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Previous image"
                >
                  <ChevronLeftIcon className="w-4 h-4 text-gray-700" aria-hidden="true" />
                </motion.button>

                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Next image"
                >
                  <ChevronRightIcon className="w-4 h-4 text-gray-700" aria-hidden="true" />
                </motion.button>

                {/* Image indicators */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1" role="tablist" aria-label="Image navigation">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                        setImageLoaded(false);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        index === currentImageIndex
                          ? 'bg-white scale-125'
                          : 'bg-white/60 hover:bg-white/80'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                      aria-current={index === currentImageIndex ? 'true' : 'false'}
                      role="tab"
                    />
                  ))}
                </div>
              </>
            )}

            {/* Image count badge */}
            {images.length > 1 && (
              <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full" aria-label={`Image ${currentImageIndex + 1} of ${images.length}`}>
                {currentImageIndex + 1} / {images.length}
              </div>
            )}
          </>
        )}
      </div>

      {/* Card content */}
      <div className="relative z-10 p-4 sm:p-5 md:p-6">
        {/* Title */}
        <motion.h3 
          className="text-lg sm:text-xl md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300"
          whileHover={{ scale: 1.02 }}
          transition={transitions.fast}
        >
          {title}
        </motion.h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Technology Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5 md:mb-6" role="list" aria-label={`${title} technologies`}>
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: index * 0.05,
                duration: 0.2,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 text-xs font-medium rounded-full text-blue-700 bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-colors duration-200"
              role="listitem"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Action Links */}
        {(liveUrl || githubUrl) && (
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            {liveUrl && (
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  handleExternalLink(liveUrl);
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 inline-flex items-center justify-center px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base text-white shadow-lg hover:shadow-xl transition-all duration-300 group/live focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                style={{
                  background: theme.gradients.button,
                  boxShadow: theme.shadows.colored.primary,
                }}
                aria-label={`View live demo of ${title} (opens in new tab)`}
              >
                <ArrowTopRightOnSquareIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                <span>Live Demo</span>
              </motion.button>
            )}

            {githubUrl && (
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  handleExternalLink(githubUrl);
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 inline-flex items-center justify-center px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base text-gray-700 bg-gray-100 border border-gray-200 hover:bg-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                aria-label={`View source code of ${title} on GitHub (opens in new tab)`}
              >
                <CodeBracketIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                <span>Code</span>
              </motion.button>
            )}
          </div>
        )}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity duration-300" aria-hidden="true">
        <div 
          className="w-full h-full rounded-full"
          style={{ background: theme.gradients.primary }}
        />
      </div>
      
      <div className="absolute bottom-4 left-4 w-10 h-10 opacity-5 group-hover:opacity-10 transition-opacity duration-300" aria-hidden="true">
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