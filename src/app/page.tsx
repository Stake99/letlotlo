"use client";

import { motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import CallToAction from "@/components/sections/CallToAction";
import ServiceCard from "@/components/cards/ServiceCard";
import ParallaxSection from "@/components/sections/ParallaxSection";
import { 
  staggerContainer, 
  staggerItem,
  transitions 
} from "@/lib/animations";
import { 
  CubeIcon, 
  CodeBracketIcon, 
  DevicePhoneMobileIcon,
  UsersIcon,
  GlobeAltIcon
} from "@heroicons/react/24/outline";

/**
 * Home Page Component
 * 
 * Implements all required sections:
 * - Hero section with 3D visuals (Requirement 7.1)
 * - Company overview section (Requirement 7.2)
 * - Services preview section (Requirement 7.3)
 * - Key statistics display (Requirement 7.4)
 * - Call-to-action section (Requirement 7.5)
 * - Animated visuals throughout (Requirement 7.6)
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with 3D Visuals - Requirement 7.1 */}
      <Hero
        title="Welcome to Letlotlo International"
        subtitle="Innovative solutions for a connected world. We create modern, engaging digital experiences with cutting-edge technology."
        ctaButton={{
          text: "Explore Our Services",
          href: "/services",
        }}
        secondaryButton={{
          text: "Get in Touch",
          href: "/contact",
          variant: "outline",
        }}
        enable3D={true}
        enableParallax={true}
        height="screen"
        textAlign="center"
      />

      {/* Company Overview Section - Requirement 7.2 */}
      <ParallaxSection speed={0.5} className="py-20 bg-white">
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            variants={staggerItem}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Building the Future Together
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At Letlotlo International, we combine creativity, technology, and innovation 
              to deliver exceptional digital solutions. Our team of experts is dedicated to 
              transforming your vision into reality with cutting-edge 3D experiences and 
              modern web technologies.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8"
            variants={staggerContainer}
          >
            {/* Mission */}
            <motion.div
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-shadow duration-300"
              variants={staggerItem}
              whileHover={{ y: -5 }}
              transition={transitions.smooth}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <GlobeAltIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with innovative digital solutions that drive growth and success.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-shadow duration-300"
              variants={staggerItem}
              whileHover={{ y: -5 }}
              transition={transitions.smooth}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <CubeIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading provider of immersive 3D web experiences and modern digital solutions.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-orange-50 hover:shadow-lg transition-shadow duration-300"
              variants={staggerItem}
              whileHover={{ y: -5 }}
              transition={transitions.smooth}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center">
                <UsersIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Values</h3>
              <p className="text-gray-600">
                Innovation, excellence, and client satisfaction are at the heart of everything we do.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </ParallaxSection>

      {/* Services Preview Section - Requirement 7.3 */}
      <ParallaxSection 
        speed={0.3} 
        className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50"
      >
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            variants={staggerItem}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive digital solutions tailored to your needs
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8"
            variants={staggerContainer}
          >
            <motion.div variants={staggerItem}>
              <ServiceCard
                title="3D Web Experiences"
                description="Immersive 3D websites with interactive elements and smooth animations"
                icon={CubeIcon}
                features={[
                  "Three.js integration",
                  "Interactive 3D models",
                  "Smooth animations",
                  "Performance optimized"
                ]}
                ctaLink="/services"
              />
            </motion.div>

            <motion.div variants={staggerItem}>
              <ServiceCard
                title="Web Development"
                description="Modern, responsive websites built with the latest technologies"
                icon={CodeBracketIcon}
                features={[
                  "React & Next.js",
                  "Responsive design",
                  "SEO optimized",
                  "Fast performance"
                ]}
                ctaLink="/services"
              />
            </motion.div>

            <motion.div variants={staggerItem}>
              <ServiceCard
                title="Mobile Solutions"
                description="Native and cross-platform mobile applications"
                icon={DevicePhoneMobileIcon}
                features={[
                  "iOS & Android",
                  "React Native",
                  "Native performance",
                  "Offline support"
                ]}
                ctaLink="/services"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </ParallaxSection>

      {/* Key Statistics Section - Requirement 7.4 */}
      <ParallaxSection speed={0.4} className="py-20 bg-white">
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            variants={staggerItem}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that speak for themselves
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8"
            variants={staggerContainer}
          >
            {/* Statistic 1 */}
            <motion.div
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100"
              variants={staggerItem}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={transitions.smooth}
            >
              <motion.div
                className="text-5xl font-bold text-blue-600 mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                100+
              </motion.div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </motion.div>

            {/* Statistic 2 */}
            <motion.div
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100"
              variants={staggerItem}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={transitions.smooth}
            >
              <motion.div
                className="text-5xl font-bold text-purple-600 mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                50+
              </motion.div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </motion.div>

            {/* Statistic 3 */}
            <motion.div
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100"
              variants={staggerItem}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={transitions.smooth}
            >
              <motion.div
                className="text-5xl font-bold text-pink-600 mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                5+
              </motion.div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </motion.div>

            {/* Statistic 4 */}
            <motion.div
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100"
              variants={staggerItem}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={transitions.smooth}
            >
              <motion.div
                className="text-5xl font-bold text-orange-600 mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                98%
              </motion.div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </ParallaxSection>

      {/* Call-to-Action Section - Requirement 7.5 */}
      <CallToAction
        title="Ready to Start Your Project?"
        description="Let's work together to create something amazing. Get in touch with us today and let's discuss how we can help bring your vision to life."
        primaryButton={{
          text: "Get Started",
          href: "/contact",
          variant: "primary",
        }}
        secondaryButton={{
          text: "View Our Work",
          href: "/services",
          variant: "outline",
        }}
        variant="hero"
        background="gradient"
        centered={true}
      />
    </main>
  );
}
