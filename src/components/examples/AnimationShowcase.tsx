'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  fadeIn,
  fadeInUp,
  scaleIn,
  hoverLift,
  hover3D,
  serviceCardHover,
  staggerContainer,
  staggerItem,
  cartoonAnimations,
  bounce,
  float,
  pulse,
  viewportConfig,
  transitions,
  createHover,
  create3DHover,
} from '@/lib/animations';
import {
  useAnimationPreferences,
  useAnimationPerformance,
  presets,
  optimizations,
} from '@/lib/animation-utils';

export default function AnimationShowcase() {
  const [selectedAnimation, setSelectedAnimation] = useState('fadeInUp');
  const { shouldUseReducedAnimations, isLowEndDevice } = useAnimationPreferences();
  const { fps, isPerformanceGood } = useAnimationPerformance();

  const animations = {
    fadeIn,
    fadeInUp,
    scaleIn,
    cartoonBounce: cartoonAnimations.cartoonBounce,
    wobble: cartoonAnimations.wobble,
    elastic: cartoonAnimations.elastic,
  };

  const continuousAnimations = {
    bounce,
    float,
    pulse,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Animation System Showcase
          </h1>
          <p className="text-lg text-gray-600">
            Demonstrating the Letlotlo International animation library
          </p>
        </motion.div>

        {/* Performance Monitor */}
        <motion.div
          variants={fadeIn}
          initial="initial"
          animate="animate"
          className="mb-8 rounded-lg bg-white p-4 shadow-md"
        >
          <h2 className="mb-2 text-xl font-semibold">Performance Monitor</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{fps}</div>
              <div className="text-sm text-gray-600">FPS</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${isPerformanceGood ? 'text-green-600' : 'text-red-600'}`}>
                {isPerformanceGood ? '✓' : '✗'}
              </div>
              <div className="text-sm text-gray-600">Performance</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${shouldUseReducedAnimations ? 'text-orange-600' : 'text-green-600'}`}>
                {shouldUseReducedAnimations ? 'ON' : 'OFF'}
              </div>
              <div className="text-sm text-gray-600">Reduced Motion</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${isLowEndDevice ? 'text-red-600' : 'text-green-600'}`}>
                {isLowEndDevice ? 'LOW' : 'HIGH'}
              </div>
              <div className="text-sm text-gray-600">Device Tier</div>
            </div>
          </div>
        </motion.div>

        {/* Animation Selector */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="mb-8 rounded-lg bg-white p-6 shadow-md"
        >
          <h2 className="mb-4 text-xl font-semibold">Animation Variants</h2>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
            {Object.keys(animations).map((name) => (
              <button
                key={name}
                onClick={() => setSelectedAnimation(name)}
                className={`rounded-lg px-3 py-2 text-sm transition-colors ${
                  selectedAnimation === name
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Animation Demo */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Selected Animation Demo */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="rounded-lg bg-white p-6 shadow-md"
          >
            <h3 className="mb-4 text-lg font-semibold">
              Demo: {selectedAnimation}
            </h3>
            <div className="flex h-48 items-center justify-center rounded-lg bg-gradient-to-br from-purple-100 to-blue-100">
              <motion.div
                key={selectedAnimation}
                variants={animations[selectedAnimation as keyof typeof animations]}
                initial="initial"
                animate="animate"
                className="rounded-lg bg-white p-6 shadow-lg"
                {...optimizations.gpuAcceleration}
              >
                <div className="text-center">
                  <div className="mb-2 text-2xl">🎨</div>
                  <div className="font-semibold">{selectedAnimation}</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Hover Effects Demo */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="rounded-lg bg-white p-6 shadow-md"
          >
            <h3 className="mb-4 text-lg font-semibold">Hover Effects</h3>
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                variants={hoverLift}
                whileHover="animate"
                className="cursor-pointer rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-center text-white shadow-md"
              >
                <div className="text-sm font-semibold">Hover Lift</div>
              </motion.div>
              
              <motion.div
                variants={hover3D}
                whileHover="animate"
                className="cursor-pointer rounded-lg bg-gradient-to-r from-green-500 to-teal-600 p-4 text-center text-white shadow-md"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="text-sm font-semibold">3D Hover</div>
              </motion.div>
              
              <motion.div
                variants={serviceCardHover}
                whileHover="animate"
                className="cursor-pointer rounded-lg bg-gradient-to-r from-orange-500 to-red-600 p-4 text-center text-white shadow-md"
              >
                <div className="text-sm font-semibold">Service Card</div>
              </motion.div>
              
              <motion.div
                variants={createHover(-12, 1.1)}
                whileHover="animate"
                className="cursor-pointer rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 p-4 text-center text-white shadow-md"
              >
                <div className="text-sm font-semibold">Custom Hover</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Continuous Animations */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig.default}
          className="mt-8 rounded-lg bg-white p-6 shadow-md"
        >
          <h3 className="mb-4 text-lg font-semibold">Continuous Animations</h3>
          <div className="grid grid-cols-3 gap-4">
            {Object.entries(continuousAnimations).map(([name, variant]) => (
              <div key={name} className="text-center">
                <motion.div
                  variants={variant}
                  animate="animate"
                  className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                >
                  <span className="text-2xl">
                    {name === 'bounce' ? '⚡' : name === 'float' ? '☁️' : '💫'}
                  </span>
                </motion.div>
                <div className="text-sm font-semibold capitalize">{name}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stagger Animation Demo */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig.default}
          className="mt-8 rounded-lg bg-white p-6 shadow-md"
        >
          <h3 className="mb-4 text-lg font-semibold">Stagger Animation</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {Array.from({ length: 8 }, (_, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 p-4 text-center text-white shadow-md"
              >
                <div className="text-2xl mb-2">
                  {['🎯', '🚀', '⭐', '🎨', '💎', '🔥', '⚡', '🌟'][i]}
                </div>
                <div className="text-sm font-semibold">Item {i + 1}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Modal Demo */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig.default}
          className="mt-8 rounded-lg bg-white p-6 shadow-md"
        >
          <h3 className="mb-4 text-lg font-semibold">Modal Animation</h3>
          <div className="flex justify-center">
            <motion.div
              variants={presets.modal}
              initial="initial"
              animate="animate"
              className="rounded-lg bg-gray-900 p-6 text-white shadow-xl"
            >
              <h4 className="mb-2 text-lg font-semibold">Modal Example</h4>
              <p className="text-gray-300">
                This demonstrates the modal animation preset with smooth entrance.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Performance Tips */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={viewportConfig.default}
          className="mt-8 rounded-lg bg-gradient-to-r from-green-500 to-teal-600 p-6 text-white shadow-md"
        >
          <h3 className="mb-4 text-lg font-semibold">Performance Tips</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="mb-2 font-semibold">✅ Best Practices</h4>
              <ul className="space-y-1 text-sm">
                <li>• Use GPU acceleration for transforms</li>
                <li>• Implement reduced motion support</li>
                <li>• Monitor FPS in development</li>
                <li>• Use viewport triggers for scroll animations</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 font-semibold">⚡ Timing Standards</h4>
              <ul className="space-y-1 text-sm">
                <li>• Hover effects: ≤50ms</li>
                <li>• UI animations: ≤300ms</li>
                <li>• Page transitions: 400-500ms</li>
                <li>• Complex animations: 600-800ms</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}