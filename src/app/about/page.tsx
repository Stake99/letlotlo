"use client";

import { motion } from "framer-motion";
import Hero from "@/components/sections/Hero";
import ParallaxSection from "@/components/sections/ParallaxSection";
import { 
  staggerContainer, 
  staggerItem,
  transitions 
} from "@/lib/animations";
import { 
  HeartIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  UsersIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";

/**
 * About Page Component
 * 
 * Implements all required sections:
 * - Company story (Requirement 8.1)
 * - Mission statement (Requirement 8.2)
 * - Vision statement (Requirement 8.3)
 * - Company values (Requirement 8.4)
 * - Leadership information (Requirement 8.5)
 */
export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="About Letlotlo International"
        subtitle="Pioneering the future of digital experiences with innovation, creativity, and cutting-edge technology."
        enable3D={true}
        enableParallax={true}
        height="medium"
        textAlign="center"
      />

      {/* Company Story Section - Requirement 8.1 */}
      <ParallaxSection speed={0.5} className="py-20 bg-white">
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={staggerItem}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
            </div>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Founded with a vision to transform the digital landscape, Letlotlo International 
                emerged from a passion for creating immersive, engaging web experiences that push 
                the boundaries of what's possible online.
              </p>
              
              <p>
                Our journey began when a group of creative technologists came together with a 
                shared belief: that the web should be more than just functional—it should be 
                captivating, interactive, and memorable. We saw an opportunity to blend cutting-edge 
                3D graphics, smooth animations, and modern web technologies to create digital 
                experiences that truly stand out.
              </p>
              
              <p>
                Today, we're proud to be at the forefront of web innovation, helping businesses 
                and organizations around the world bring their visions to life through stunning 
                digital solutions. From immersive 3D websites to responsive mobile applications, 
                we combine technical excellence with creative artistry to deliver results that 
                exceed expectations.
              </p>
              
              <p>
                What sets us apart is our commitment to staying ahead of the curve. We continuously 
                explore emerging technologies, refine our craft, and push ourselves to create 
                experiences that not only meet today's standards but define tomorrow's possibilities.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </ParallaxSection>

      {/* Mission and Vision Section - Requirements 8.2, 8.3 */}
      <ParallaxSection 
        speed={0.3} 
        className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
      >
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="text-center mb-16"
            variants={staggerItem}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Mission & Vision
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Mission - Requirement 8.2 */}
            <motion.div
              className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={transitions.smooth}
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <RocketLaunchIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">Our Mission</h3>
              <p className="text-lg text-gray-600 text-center leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, 
                engagement, and success. We strive to transform ideas into exceptional web 
                experiences that captivate audiences and deliver measurable results.
              </p>
            </motion.div>

            {/* Vision - Requirement 8.3 */}
            <motion.div
              className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={transitions.smooth}
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <LightBulbIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">Our Vision</h3>
              <p className="text-lg text-gray-600 text-center leading-relaxed">
                To be the global leader in immersive 3D web experiences and modern digital 
                solutions, setting new standards for creativity, innovation, and technical 
                excellence in the digital world.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </ParallaxSection>

      {/* Company Values Section - Requirement 8.4 */}
      <ParallaxSection speed={0.4} className="py-20 bg-white">
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="text-center mb-16"
            variants={staggerItem}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
            variants={staggerContainer}
          >
            {/* Value 1: Innovation */}
            <motion.div
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all duration-300"
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={transitions.smooth}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-md">
                <SparklesIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.
              </p>
            </motion.div>

            {/* Value 2: Excellence */}
            <motion.div
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transition-all duration-300"
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={transitions.smooth}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-md">
                <ShieldCheckIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in every project, ensuring quality and attention to detail.
              </p>
            </motion.div>

            {/* Value 3: Collaboration */}
            <motion.div
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 hover:shadow-xl transition-all duration-300"
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={transitions.smooth}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-md">
                <UsersIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We work closely with our clients as partners, ensuring their vision becomes reality.
              </p>
            </motion.div>

            {/* Value 4: Integrity */}
            <motion.div
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-xl transition-all duration-300"
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={transitions.smooth}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-md">
                <HeartIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We build trust through transparency, honesty, and ethical practices in all our work.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </ParallaxSection>

      {/* Leadership Team Section - Requirement 8.5 */}
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
            className="text-center mb-16"
            variants={staggerItem}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet Our Leadership
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The visionaries driving innovation and excellence
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
            variants={staggerContainer}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                variants={staggerItem}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={transitions.smooth}
              >
                {/* Team Member Image */}
                <div className="relative h-80 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-48 h-48 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center shadow-2xl`}>
                      <span className="text-6xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Team Member Info */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-lg text-blue-600 font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex space-x-4">
                    {member.social.map((link, idx) => (
                      <motion.a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white hover:shadow-lg transition-shadow duration-200"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={`${member.name}'s ${link.platform}`}
                      >
                        {link.platform === 'LinkedIn' && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        )}
                        {link.platform === 'Twitter' && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                          </svg>
                        )}
                        {link.platform === 'GitHub' && (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        )}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </ParallaxSection>

      {/* Call to Action */}
      <ParallaxSection speed={0.5} className="py-20 bg-white">
        <motion.div
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's create something amazing. Get in touch with our team today.
            </p>
            <motion.a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </ParallaxSection>
    </main>
  );
}

// Team member data - Requirement 8.5
const teamMembers = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Chief Executive Officer",
    bio: "With over 15 years of experience in digital innovation, Sarah leads our vision to transform the web experience landscape.",
    image: "/team/sarah-johnson.jpg",
    gradient: "from-blue-500 to-purple-500",
    social: [
      { platform: "LinkedIn", url: "https://linkedin.com" },
      { platform: "Twitter", url: "https://twitter.com" },
    ],
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Chief Technology Officer",
    bio: "Michael brings deep expertise in 3D graphics and web technologies, driving our technical excellence and innovation.",
    image: "/team/michael-chen.jpg",
    gradient: "from-purple-500 to-pink-500",
    social: [
      { platform: "LinkedIn", url: "https://linkedin.com" },
      { platform: "GitHub", url: "https://github.com" },
    ],
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Creative Director",
    bio: "Emily's creative vision and design expertise ensure every project we deliver is both beautiful and functional.",
    image: "/team/emily-rodriguez.jpg",
    gradient: "from-pink-500 to-orange-500",
    social: [
      { platform: "LinkedIn", url: "https://linkedin.com" },
      { platform: "Twitter", url: "https://twitter.com" },
    ],
  },
  {
    id: "4",
    name: "David Kim",
    role: "Head of Engineering",
    bio: "David leads our engineering team with a focus on performance, scalability, and cutting-edge development practices.",
    image: "/team/david-kim.jpg",
    gradient: "from-blue-500 to-cyan-500",
    social: [
      { platform: "LinkedIn", url: "https://linkedin.com" },
      { platform: "GitHub", url: "https://github.com" },
    ],
  },
  {
    id: "5",
    name: "Lisa Thompson",
    role: "Head of Client Success",
    bio: "Lisa ensures our clients receive exceptional service and support throughout their journey with us.",
    image: "/team/lisa-thompson.jpg",
    gradient: "from-purple-500 to-indigo-500",
    social: [
      { platform: "LinkedIn", url: "https://linkedin.com" },
      { platform: "Twitter", url: "https://twitter.com" },
    ],
  },
  {
    id: "6",
    name: "James Wilson",
    role: "Lead 3D Developer",
    bio: "James specializes in creating immersive 3D experiences that push the boundaries of web technology.",
    image: "/team/james-wilson.jpg",
    gradient: "from-green-500 to-teal-500",
    social: [
      { platform: "LinkedIn", url: "https://linkedin.com" },
      { platform: "GitHub", url: "https://github.com" },
    ],
  },
];
