'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { Metadata } from "next";
import { ContactForm } from '@/components/forms';
import { ParallaxSection } from '@/components/sections';
import { BackgroundShapes, ThreeScene } from '@/components/three';
import type { ContactFormData } from '@/types';
import { 
  fadeInUp, 
  staggerContainer, 
  staggerItem,
  scaleIn 
} from '@/lib/animations';

// Note: Metadata export moved to layout or handled differently for client components
// export const metadata: Metadata = {
//   title: "Contact",
//   description: "Get in touch with Letlotlo International. We'd love to discuss your next project and how we can help bring your vision to life.",
// };

export default function Contact() {
  // Handle form submission
  const handleFormSubmit = async (data: ContactFormData): Promise<void> => {
    console.log('Contact form submitted:', data);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real application, this would send the data to your backend API
    // For now, we'll just log it and simulate success
    try {
      // Example API call:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });
      // 
      // if (!response.ok) {
      //   throw new Error('Failed to send message');
      // }
      
      console.log('Message sent successfully');
    } catch (error) {
      console.error('Error sending message:', error);
      throw new Error('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50">
      {/* Hero Section with 3D Background */}
      <ParallaxSection speed={0.5} className="relative overflow-hidden">
        <div className="absolute inset-0 h-full w-full">
          <ThreeScene>
            <BackgroundShapes />
          </ThreeScene>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-6"
            >
              Get In Touch
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Ready to start your next project? Let's discuss how we can help bring your vision to life.
              We're here to answer your questions and provide the solutions you need.
            </motion.p>
            
            {/* Friendly Cartoon Illustration - Requirement 11.4 */}
            <motion.div 
              variants={scaleIn}
              className="flex justify-center mt-8"
            >
              <div className="text-8xl animate-bounce">
                👋
              </div>
            </motion.div>
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Contact Form and Information Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid lg:grid-cols-2 gap-16 items-start"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Contact Information - Requirement 11.2 */}
            <motion.div variants={staggerItem} className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Let's Start a Conversation
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Whether you have a specific project in mind or just want to explore possibilities,
                  we're excited to hear from you. Our team is ready to help you achieve your goals.
                </p>
              </div>

              {/* Company Location Information - Requirement 11.2 */}
              <div className="space-y-6">
                <motion.div 
                  variants={staggerItem}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">hello@letlotlo.com</p>
                    <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                  </div>
                </motion.div>

                <motion.div 
                  variants={staggerItem}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </motion.div>

                <motion.div 
                  variants={staggerItem}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Visit Us</h3>
                    <p className="text-gray-600">123 Innovation Drive<br />Tech City, TC 12345</p>
                    <p className="text-sm text-gray-500 mt-1">By appointment only</p>
                  </div>
                </motion.div>
              </div>

              {/* Map Placeholder - Requirement 11.3 */}
              <motion.div 
                variants={staggerItem}
                className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 border-2 border-primary-200 overflow-hidden relative"
                style={{ minHeight: '300px' }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🗺️</div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Interactive Map
                    </h4>
                    <p className="text-sm text-gray-600">
                      123 Innovation Drive, Tech City, TC 12345
                    </p>
                  </div>
                </div>
                {/* Decorative grid pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div key={i} className="border border-primary-300" />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Response Time Promise */}
              <motion.div 
                variants={staggerItem}
                className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6 border border-primary-100"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quick Response Guarantee</h4>
                    <p className="text-sm text-gray-600">We respond to all inquiries within 24 hours, usually much sooner.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form - Requirement 11.1 */}
            <motion.div 
              variants={staggerItem}
              className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Send Us a Message
                </h3>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <ContactForm onSubmit={handleFormSubmit} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-600"
            >
              Quick answers to common questions about working with us.
            </motion.p>
          </motion.div>

          <motion.div 
            className="space-y-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                variants={staggerItem}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// FAQ data
const faqs = [
  {
    question: "What's your typical project timeline?",
    answer: "Project timelines vary based on scope and complexity. Simple websites typically take 2-4 weeks, while complex applications can take 2-6 months. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes! We offer comprehensive support and maintenance packages to keep your project running smoothly. This includes updates, security monitoring, performance optimization, and technical support."
  },
  {
    question: "What technologies do you work with?",
    answer: "We specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and various databases. We choose the best technology stack for each project's specific requirements."
  },
  {
    question: "How do you handle project communication?",
    answer: "We believe in transparent communication throughout the project. You'll have regular check-ins, access to project management tools, and direct communication with your dedicated project team."
  },
  {
    question: "What's included in your project pricing?",
    answer: "Our pricing includes design, development, testing, deployment, and initial training. We provide detailed proposals with clear breakdowns so you know exactly what you're getting."
  }
];