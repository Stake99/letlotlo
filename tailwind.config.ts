import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Letlotlo International Brand Colors
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
          DEFAULT: '#4f46e5',
        },
        secondary: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
          950: '#500724',
          DEFAULT: '#ec4899',
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
          DEFAULT: '#f59e0b',
        },
        success: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
          DEFAULT: '#10b981',
        },
        warning: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
          DEFAULT: '#f59e0b',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
          DEFAULT: '#ef4444',
        },
        info: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
          DEFAULT: '#3b82f6',
        },
      },

      // Typography System
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['Inter', 'Segoe UI', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },

      fontSize: {
        // Custom responsive font sizes
        'responsive-display-2xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'responsive-display-xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.025em' }],
        'responsive-display-lg': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.025em' }],
        'responsive-h1': ['1.875rem', { lineHeight: '1.25', letterSpacing: '-0.025em' }],
        'responsive-h2': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.025em' }],
        'responsive-h3': ['1.25rem', { lineHeight: '1.35' }],
        'responsive-h4': ['1.125rem', { lineHeight: '1.4' }],
        'responsive-h5': ['1rem', { lineHeight: '1.4' }],
        'responsive-h6': ['0.875rem', { lineHeight: '1.45', letterSpacing: '0.025em' }],
        'responsive-body-xl': ['1.125rem', { lineHeight: '1.6' }],
        'responsive-body-lg': ['1rem', { lineHeight: '1.6' }],
        'responsive-body-base': ['0.875rem', { lineHeight: '1.6' }],
        'responsive-body-sm': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.025em' }],
        'responsive-caption': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.025em' }],
      },

      // Box Shadows for 3D Effects
      boxShadow: {
        '3d-sm': '0 2px 4px rgb(79 70 229 / 0.1), 0 8px 16px rgb(79 70 229 / 0.1)',
        '3d-md': '0 4px 8px rgb(79 70 229 / 0.15), 0 12px 24px rgb(79 70 229 / 0.15)',
        '3d-lg': '0 8px 16px rgb(79 70 229 / 0.2), 0 16px 32px rgb(79 70 229 / 0.2)',
        '3d-xl': '0 12px 24px rgb(79 70 229 / 0.25), 0 24px 48px rgb(79 70 229 / 0.25)',
        'primary': '0 4px 14px 0 rgb(79 70 229 / 0.39)',
        'secondary': '0 4px 14px 0 rgb(236 72 153 / 0.39)',
        'accent': '0 4px 14px 0 rgb(245 158 11 / 0.39)',
        'success': '0 4px 14px 0 rgb(16 185 129 / 0.39)',
        'warning': '0 4px 14px 0 rgb(245 158 11 / 0.39)',
        'error': '0 4px 14px 0 rgb(239 68 68 / 0.39)',
      },

      // Border Radius for Cartoon Style
      borderRadius: {
        '4xl': '2rem',
      },

      // Animation Keyframes
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-5px) rotate(1deg)' },
          '50%': { transform: 'translateY(-10px) rotate(0deg)' },
          '75%': { transform: 'translateY(-5px) rotate(-1deg)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-4px) scale(1.02)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(3deg)' },
          '75%': { transform: 'rotate(-3deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgb(79 70 229 / 0.5)',
            transform: 'scale(1)',
          },
          '50%': { 
            boxShadow: '0 0 20px rgb(79 70 229 / 0.8), 0 0 30px rgb(79 70 229 / 0.4)',
            transform: 'scale(1.02)',
          },
        },
        'slide-up': {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'slide-in-left': {
          from: {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'slide-in-right': {
          from: {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'scale-in': {
          from: {
            opacity: '0',
            transform: 'scale(0.9)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },

      // Animation Classes
      animation: {
        float: 'float 3s ease-in-out infinite',
        'bounce-subtle': 'bounce-subtle 0.6s ease-in-out',
        wiggle: 'wiggle 0.5s ease-in-out',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'slide-in-left': 'slide-in-left 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        'fade-in': 'fade-in 0.4s ease-out',
        'scale-in': 'scale-in 0.4s ease-out',
      },

      // Perspective for 3D effects
      perspective: {
        '1000': '1000px',
      },

      // Transform Origin
      transformOrigin: {
        'center-3d': 'center center -50px',
      },
    },
  },
  plugins: [],
};

export default config;