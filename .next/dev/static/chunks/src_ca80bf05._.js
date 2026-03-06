(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/theme.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Letlotlo International Theme Configuration
 * Cartoon-styled theme system with 3D effects and vibrant colors
 */ __turbopack_context__.s([
    "cartoonVariants",
    ()=>cartoonVariants,
    "cssVar",
    ()=>cssVar,
    "default",
    ()=>__TURBOPACK__default__export__,
    "getColor",
    ()=>getColor,
    "getGradient",
    ()=>getGradient,
    "getShadow",
    ()=>getShadow,
    "theme",
    ()=>theme
]);
const theme = {
    colors: {
        // Brand Colors
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
            DEFAULT: '#4f46e5'
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
            DEFAULT: '#ec4899'
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
            DEFAULT: '#f59e0b'
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
            DEFAULT: '#10b981'
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
            DEFAULT: '#f59e0b'
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
            DEFAULT: '#ef4444'
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
            DEFAULT: '#3b82f6'
        },
        neutral: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
            950: '#020617'
        },
        // Surface Colors
        background: '#ffffff',
        surface: '#f8fafc',
        surfaceElevated: '#ffffff',
        surfaceHover: '#f1f5f9',
        // Text Colors
        textPrimary: '#1e293b',
        textSecondary: '#64748b',
        textMuted: '#94a3b8',
        textInverse: '#ffffff',
        // Border Colors
        border: '#e2e8f0',
        borderHover: '#cbd5e1',
        borderFocus: '#4f46e5'
    },
    gradients: {
        primary: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #ec4899 100%)',
        secondary: 'linear-gradient(135deg, #ec4899 0%, #f59e0b 100%)',
        hero: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 25%, #ec4899 50%, #f59e0b 75%, #10b981 100%)',
        card: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        button: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
        accent: 'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)',
        // 3D Effect Gradients
        '3d': {
            primary: 'linear-gradient(145deg, #5b21b6 0%, #4f46e5 50%, #6366f1 100%)',
            secondary: 'linear-gradient(145deg, #be185d 0%, #ec4899 50%, #f472b6 100%)',
            surface: 'linear-gradient(145deg, #e2e8f0 0%, #ffffff 50%, #f1f5f9 100%)'
        }
    },
    typography: {
        fontFamily: {
            sans: [
                'Inter',
                'Segoe UI',
                'system-ui',
                '-apple-system',
                'BlinkMacSystemFont',
                'sans-serif'
            ],
            heading: [
                'Inter',
                'Segoe UI',
                'system-ui',
                '-apple-system',
                'BlinkMacSystemFont',
                'sans-serif'
            ],
            mono: [
                'JetBrains Mono',
                'Fira Code',
                'Consolas',
                'monospace'
            ]
        },
        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '3.75rem',
            '7xl': '4.5rem',
            '8xl': '6rem',
            '9xl': '8rem'
        },
        fontWeight: {
            thin: 100,
            extralight: 200,
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900
        },
        lineHeight: {
            none: 1,
            tight: 1.25,
            snug: 1.375,
            normal: 1.5,
            relaxed: 1.625,
            loose: 2
        },
        letterSpacing: {
            tighter: '-0.05em',
            tight: '-0.025em',
            normal: '0em',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.1em'
        }
    },
    spacing: {
        px: '1px',
        0: '0px',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem'
    },
    borderRadius: {
        none: '0px',
        sm: '0.125rem',
        base: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        full: '9999px'
    },
    shadows: {
        xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        base: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        // 3D Cartoon Shadows
        '3d': {
            sm: '0 2px 4px rgb(79 70 229 / 0.1), 0 8px 16px rgb(79 70 229 / 0.1)',
            md: '0 4px 8px rgb(79 70 229 / 0.15), 0 12px 24px rgb(79 70 229 / 0.15)',
            lg: '0 8px 16px rgb(79 70 229 / 0.2), 0 16px 32px rgb(79 70 229 / 0.2)',
            xl: '0 12px 24px rgb(79 70 229 / 0.25), 0 24px 48px rgb(79 70 229 / 0.25)'
        },
        // Colored Shadows for 3D Effects
        colored: {
            primary: '0 4px 14px 0 rgb(79 70 229 / 0.39)',
            secondary: '0 4px 14px 0 rgb(236 72 153 / 0.39)',
            accent: '0 4px 14px 0 rgb(245 158 11 / 0.39)',
            success: '0 4px 14px 0 rgb(16 185 129 / 0.39)',
            warning: '0 4px 14px 0 rgb(245 158 11 / 0.39)',
            error: '0 4px 14px 0 rgb(239 68 68 / 0.39)'
        }
    },
    animations: {
        // Duration
        duration: {
            fast: '150ms',
            normal: '300ms',
            slow: '500ms'
        },
        // Easing
        easing: {
            ease: 'ease',
            easeIn: 'ease-in',
            easeOut: 'ease-out',
            easeInOut: 'ease-in-out',
            bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
        }
    },
    breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
    }
};
const getColor = (colorPath)=>{
    const keys = colorPath.split('.');
    let value = theme.colors;
    for (const key of keys){
        value = value[key];
        if (value === undefined) {
            console.warn(`Color path "${colorPath}" not found in theme`);
            return theme.colors.primary.DEFAULT;
        }
    }
    return value;
};
const getGradient = (gradientName)=>{
    return theme.gradients[gradientName] || theme.gradients.primary;
};
const getShadow = (shadowPath)=>{
    const keys = shadowPath.split('.');
    let value = theme.shadows;
    for (const key of keys){
        value = value[key];
        if (value === undefined) {
            console.warn(`Shadow path "${shadowPath}" not found in theme`);
            return theme.shadows.md;
        }
    }
    return value;
};
const cssVar = (property)=>`var(--${property})`;
const cartoonVariants = {
    button: {
        primary: {
            background: theme.gradients.button,
            boxShadow: theme.shadows.colored.primary,
            borderRadius: theme.borderRadius.xl
        },
        secondary: {
            background: theme.gradients.secondary,
            boxShadow: theme.shadows.colored.secondary,
            borderRadius: theme.borderRadius.xl
        },
        accent: {
            background: theme.gradients.accent,
            boxShadow: theme.shadows.colored.accent,
            borderRadius: theme.borderRadius.xl
        }
    },
    card: {
        default: {
            background: theme.gradients.card,
            boxShadow: theme.shadows['3d'].md,
            borderRadius: theme.borderRadius['2xl'],
            border: `1px solid ${theme.colors.border}`
        },
        elevated: {
            background: theme.colors.surfaceElevated,
            boxShadow: theme.shadows['3d'].lg,
            borderRadius: theme.borderRadius['3xl']
        }
    }
};
const __TURBOPACK__default__export__ = theme;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/animations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "animationConfig",
    ()=>animationConfig,
    "bounce",
    ()=>bounce,
    "buttonHover",
    ()=>buttonHover,
    "buttonPress",
    ()=>buttonPress,
    "cardHover",
    ()=>cardHover,
    "cardPress",
    ()=>cardPress,
    "cartoonAnimations",
    ()=>cartoonAnimations,
    "create3DHover",
    ()=>create3DHover,
    "createFloat",
    ()=>createFloat,
    "createHover",
    ()=>createHover,
    "createStagger",
    ()=>createStagger,
    "fadeIn",
    ()=>fadeIn,
    "fadeInDown",
    ()=>fadeInDown,
    "fadeInLeft",
    ()=>fadeInLeft,
    "fadeInRight",
    ()=>fadeInRight,
    "fadeInUp",
    ()=>fadeInUp,
    "float",
    ()=>float,
    "gentleBounce",
    ()=>gentleBounce,
    "gentleFloat",
    ()=>gentleFloat,
    "gpuAccelerated",
    ()=>gpuAccelerated,
    "gridItem",
    ()=>gridItem,
    "gridStagger",
    ()=>gridStagger,
    "heroSubtext",
    ()=>heroSubtext,
    "heroText",
    ()=>heroText,
    "hover3D",
    ()=>hover3D,
    "hoverGlow",
    ()=>hoverGlow,
    "hoverLift",
    ()=>hoverLift,
    "hoverRotate",
    ()=>hoverRotate,
    "hoverScale",
    ()=>hoverScale,
    "pageSlide",
    ()=>pageSlide,
    "pageTransition",
    ()=>pageTransition,
    "performanceProps",
    ()=>performanceProps,
    "pop",
    ()=>pop,
    "pulse",
    ()=>pulse,
    "reducedMotionVariants",
    ()=>reducedMotionVariants,
    "rotate",
    ()=>rotate,
    "scaleIn",
    ()=>scaleIn,
    "scaleUp",
    ()=>scaleUp,
    "serviceCardHover",
    ()=>serviceCardHover,
    "slideInDown",
    ()=>slideInDown,
    "slideInLeft",
    ()=>slideInLeft,
    "slideInRight",
    ()=>slideInRight,
    "slideInUp",
    ()=>slideInUp,
    "slowRotate",
    ()=>slowRotate,
    "staggerContainer",
    ()=>staggerContainer,
    "staggerItem",
    ()=>staggerItem,
    "transitions",
    ()=>transitions,
    "viewportConfig",
    ()=>viewportConfig
]);
const transitions = {
    // Fast interactions (hover, click) - Requirements 6.4, 6.5: within 50ms
    fast: {
        duration: 0.05,
        ease: [
            0.4,
            0,
            0.2,
            1
        ]
    },
    // Standard UI animations
    smooth: {
        duration: 0.3,
        ease: [
            0.25,
            0.46,
            0.45,
            0.94
        ]
    },
    // Bouncy cartoon-like animations
    bouncy: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        mass: 0.8
    },
    // Gentle floating animations
    gentle: {
        duration: 0.6,
        ease: [
            0.25,
            0.46,
            0.45,
            0.94
        ]
    },
    // Page transitions
    page: {
        duration: 0.4,
        ease: [
            0.22,
            1,
            0.36,
            1
        ]
    }
};
const fadeIn = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: transitions.smooth
    },
    exit: {
        opacity: 0,
        transition: transitions.fast
    }
};
const fadeInUp = {
    initial: {
        opacity: 0,
        y: 24
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: transitions.smooth
    },
    exit: {
        opacity: 0,
        y: 24,
        transition: transitions.fast
    }
};
const fadeInDown = {
    initial: {
        opacity: 0,
        y: -24
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: transitions.smooth
    },
    exit: {
        opacity: 0,
        y: -24,
        transition: transitions.fast
    }
};
const fadeInLeft = {
    initial: {
        opacity: 0,
        x: -24
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: transitions.smooth
    },
    exit: {
        opacity: 0,
        x: -24,
        transition: transitions.fast
    }
};
const fadeInRight = {
    initial: {
        opacity: 0,
        x: 24
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: transitions.smooth
    },
    exit: {
        opacity: 0,
        x: 24,
        transition: transitions.fast
    }
};
const scaleIn = {
    initial: {
        opacity: 0,
        scale: 0.8
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: transitions.bouncy
    },
    exit: {
        opacity: 0,
        scale: 0.8,
        transition: transitions.fast
    }
};
const scaleUp = {
    initial: {
        scale: 1
    },
    animate: {
        scale: 1.05,
        transition: transitions.fast
    },
    exit: {
        scale: 1,
        transition: transitions.fast
    }
};
const pop = {
    initial: {
        scale: 1
    },
    animate: {
        scale: [
            1,
            1.1,
            1
        ],
        transition: {
            duration: 0.3,
            times: [
                0,
                0.5,
                1
            ],
            ease: "easeInOut"
        }
    }
};
const slideInUp = {
    initial: {
        y: "100%",
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: transitions.smooth
    },
    exit: {
        y: "100%",
        opacity: 0,
        transition: transitions.fast
    }
};
const slideInDown = {
    initial: {
        y: "-100%",
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: transitions.smooth
    },
    exit: {
        y: "-100%",
        opacity: 0,
        transition: transitions.fast
    }
};
const slideInLeft = {
    initial: {
        x: "-100%",
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: transitions.smooth
    },
    exit: {
        x: "-100%",
        opacity: 0,
        transition: transitions.fast
    }
};
const slideInRight = {
    initial: {
        x: "100%",
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: transitions.smooth
    },
    exit: {
        x: "100%",
        opacity: 0,
        transition: transitions.fast
    }
};
const staggerContainer = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1
        }
    },
    exit: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
};
const staggerItem = {
    initial: {
        opacity: 0,
        y: 20,
        scale: 0.95
    },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: transitions.smooth
    },
    exit: {
        opacity: 0,
        y: 20,
        scale: 0.95,
        transition: transitions.fast
    }
};
const gridStagger = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};
const gridItem = {
    initial: {
        opacity: 0,
        scale: 0.8,
        y: 40
    },
    animate: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: transitions.bouncy
    }
};
const hoverLift = {
    initial: {
        y: 0,
        scale: 1
    },
    animate: {
        y: -8,
        scale: 1.02,
        transition: transitions.fast
    }
};
const hoverScale = {
    initial: {
        scale: 1
    },
    animate: {
        scale: 1.05,
        transition: transitions.fast
    }
};
const hoverRotate = {
    initial: {
        rotate: 0
    },
    animate: {
        rotate: 3,
        transition: transitions.fast
    }
};
const hover3D = {
    initial: {
        rotateX: 0,
        rotateY: 0,
        z: 0,
        scale: 1
    },
    animate: {
        rotateX: -5,
        rotateY: 5,
        z: 50,
        scale: 1.02,
        transition: transitions.smooth
    }
};
const hoverGlow = {
    initial: {
        boxShadow: "0 0 0 rgba(59, 130, 246, 0)"
    },
    animate: {
        boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
        transition: transitions.fast
    }
};
const bounce = {
    initial: {
        y: 0
    },
    animate: {
        y: [
            -8,
            0,
            -8
        ],
        transition: {
            duration: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
        }
    }
};
const gentleBounce = {
    initial: {
        y: 0
    },
    animate: {
        y: [
            -4,
            0,
            -4
        ],
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
        }
    }
};
const float = {
    initial: {
        y: 0
    },
    animate: {
        y: [
            -12,
            12,
            -12
        ],
        transition: {
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
        }
    }
};
const gentleFloat = {
    initial: {
        y: 0
    },
    animate: {
        y: [
            -6,
            6,
            -6
        ],
        transition: {
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
        }
    }
};
const rotate = {
    initial: {
        rotate: 0
    },
    animate: {
        rotate: 360,
        transition: {
            duration: 20,
            repeat: Infinity,
            ease: "linear"
        }
    }
};
const slowRotate = {
    initial: {
        rotate: 0
    },
    animate: {
        rotate: 360,
        transition: {
            duration: 30,
            repeat: Infinity,
            ease: "linear"
        }
    }
};
const pulse = {
    initial: {
        scale: 1,
        opacity: 1
    },
    animate: {
        scale: [
            1,
            1.05,
            1
        ],
        opacity: [
            1,
            0.8,
            1
        ],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};
const pageTransition = {
    initial: {
        opacity: 0,
        x: 24,
        scale: 0.98
    },
    animate: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: transitions.page
    },
    exit: {
        opacity: 0,
        x: -24,
        scale: 0.98,
        transition: transitions.fast
    }
};
const pageSlide = {
    initial: {
        x: "100%",
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: transitions.page
    },
    exit: {
        x: "-100%",
        opacity: 0,
        transition: transitions.page
    }
};
const heroText = {
    initial: {
        opacity: 0,
        y: 60,
        scale: 0.95
    },
    animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [
                0.25,
                0.46,
                0.45,
                0.94
            ]
        }
    }
};
const heroSubtext = {
    initial: {
        opacity: 0,
        y: 40
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: 0.2,
            ease: [
                0.25,
                0.46,
                0.45,
                0.94
            ]
        }
    }
};
const cardHover = {
    initial: {
        rotateX: 0,
        rotateY: 0,
        z: 0,
        scale: 1
    },
    animate: {
        rotateX: -8,
        rotateY: 8,
        z: 60,
        scale: 1.03,
        transition: transitions.smooth
    }
};
const cardPress = {
    initial: {
        scale: 1
    },
    animate: {
        scale: 0.98,
        transition: transitions.fast
    }
};
const serviceCardHover = {
    initial: {
        y: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
    },
    animate: {
        y: -12,
        rotateX: -5,
        rotateY: 3,
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        transition: transitions.smooth
    }
};
const buttonPress = {
    initial: {
        scale: 1
    },
    animate: {
        scale: 0.96,
        transition: transitions.fast
    }
};
const buttonHover = {
    initial: {
        scale: 1,
        y: 0
    },
    animate: {
        scale: 1.05,
        y: -2,
        transition: transitions.fast
    }
};
const animationConfig = {
    // Timing presets
    fast: {
        duration: 0.15
    },
    normal: {
        duration: 0.3
    },
    slow: {
        duration: 0.6
    },
    // Spring configurations
    spring: {
        type: "spring",
        stiffness: 300,
        damping: 30
    },
    bouncySpring: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        mass: 0.8
    },
    gentleSpring: {
        type: "spring",
        stiffness: 200,
        damping: 35
    },
    // Easing functions
    easeOut: {
        ease: [
            0.25,
            0.46,
            0.45,
            0.94
        ]
    },
    easeInOut: {
        ease: [
            0.25,
            0.46,
            0.45,
            0.94
        ]
    },
    easeIn: {
        ease: [
            0.55,
            0.06,
            0.68,
            0.19
        ]
    },
    // Performance optimized settings
    performant: {
        duration: 0.2,
        ease: "easeOut"
    }
};
const viewportConfig = {
    // Standard viewport settings
    default: {
        once: true,
        margin: "-100px",
        amount: 0.3
    },
    // Early trigger for better UX
    early: {
        once: true,
        margin: "-50px",
        amount: 0.2
    },
    // Late trigger for performance
    late: {
        once: true,
        margin: "-150px",
        amount: 0.5
    },
    // Repeat animations
    repeat: {
        once: false,
        margin: "-100px",
        amount: 0.3
    }
};
const reducedMotionVariants = {
    fadeIn: {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        }
    },
    slideIn: {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        }
    },
    scaleIn: {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        }
    }
};
const createStagger = (staggerDelay = 0.1, childDelay = 0)=>({
        initial: {},
        animate: {
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: childDelay
            }
        },
        exit: {
            transition: {
                staggerChildren: staggerDelay * 0.5,
                staggerDirection: -1
            }
        }
    });
const createHover = (y = -8, scale = 1.02, duration = 0.15)=>({
        initial: {
            y: 0,
            scale: 1
        },
        animate: {
            y,
            scale,
            transition: {
                duration,
                ease: "easeOut"
            }
        }
    });
const create3DHover = (rotateX = -8, rotateY = 8, z = 60, scale = 1.03)=>({
        initial: {
            rotateX: 0,
            rotateY: 0,
            z: 0,
            scale: 1
        },
        animate: {
            rotateX,
            rotateY,
            z,
            scale,
            transition: transitions.smooth
        }
    });
const createFloat = (amplitude = 12, duration = 4)=>({
        initial: {
            y: 0
        },
        animate: {
            y: [
                -amplitude,
                amplitude,
                -amplitude
            ],
            transition: {
                duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }
        }
    });
const performanceProps = {
    // Use transform instead of layout for better performance
    layout: false,
    // Optimize for animations
    style: {
        willChange: "transform, opacity"
    },
    // Reduce motion for accessibility
    transition: {
        duration: 0.2,
        ease: "easeOut"
    }
};
const gpuAccelerated = {
    style: {
        willChange: "transform",
        backfaceVisibility: "hidden",
        perspective: 1000
    }
};
const cartoonAnimations = {
    // Exaggerated bounce for cartoon feel
    cartoonBounce: {
        initial: {
            scale: 0,
            rotate: -180
        },
        animate: {
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 500,
                damping: 15,
                mass: 0.8
            }
        }
    },
    // Wobbly entrance
    wobble: {
        initial: {
            scale: 0,
            rotate: 0
        },
        animate: {
            scale: 1,
            rotate: [
                0,
                -5,
                5,
                -3,
                3,
                0
            ],
            transition: {
                scale: {
                    type: "spring",
                    stiffness: 400,
                    damping: 20
                },
                rotate: {
                    duration: 0.6,
                    ease: "easeInOut"
                }
            }
        }
    },
    // Elastic scale
    elastic: {
        initial: {
            scale: 0
        },
        animate: {
            scale: [
                0,
                1.2,
                0.9,
                1.1,
                1
            ],
            transition: {
                duration: 0.8,
                times: [
                    0,
                    0.3,
                    0.5,
                    0.7,
                    1
                ],
                ease: "easeInOut"
            }
        }
    },
    // Playful rotation
    playfulRotate: {
        initial: {
            rotate: 0,
            scale: 1
        },
        animate: {
            rotate: 360,
            scale: [
                1,
                1.1,
                1
            ],
            transition: {
                rotate: {
                    duration: 0.6,
                    ease: "easeInOut"
                },
                scale: {
                    duration: 0.3,
                    ease: "easeInOut"
                }
            }
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/cards/ProjectCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowTopRightOnSquareIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowTopRightOnSquareIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ArrowTopRightOnSquareIcon.js [app-client] (ecmascript) <export default as ArrowTopRightOnSquareIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CodeBracketIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CodeBracketIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/CodeBracketIcon.js [app-client] (ecmascript) <export default as CodeBracketIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronLeftIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeftIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ChevronLeftIcon.js [app-client] (ecmascript) <export default as ChevronLeftIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ChevronRightIcon.js [app-client] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/animations.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function ProjectCard(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(46);
    if ($[0] !== "f1c0381b20657e30ab79d6cba9fef9ded3e0f1f5ba3e2ccdd5b2af7c5ee900f5") {
        for(let $i = 0; $i < 46; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f1c0381b20657e30ab79d6cba9fef9ded3e0f1f5ba3e2ccdd5b2af7c5ee900f5";
    }
    const { title, description, images, technologies, liveUrl, githubUrl, className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    const [currentImageIndex, setCurrentImageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [imageLoaded, setImageLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t2;
    if ($[1] !== images.length) {
        t2 = ({
            "ProjectCard[nextImage]": ()=>{
                setCurrentImageIndex({
                    "ProjectCard[nextImage > setCurrentImageIndex()]": (prev)=>(prev + 1) % images.length
                }["ProjectCard[nextImage > setCurrentImageIndex()]"]);
                setImageLoaded(false);
            }
        })["ProjectCard[nextImage]"];
        $[1] = images.length;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const nextImage = t2;
    let t3;
    if ($[3] !== images.length) {
        t3 = ({
            "ProjectCard[prevImage]": ()=>{
                setCurrentImageIndex({
                    "ProjectCard[prevImage > setCurrentImageIndex()]": (prev_0)=>(prev_0 - 1 + images.length) % images.length
                }["ProjectCard[prevImage > setCurrentImageIndex()]"]);
                setImageLoaded(false);
            }
        })["ProjectCard[prevImage]"];
        $[3] = images.length;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const prevImage = t3;
    const handleExternalLink = _ProjectCardHandleExternalLink;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            scale: 0.98
        };
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const t5 = `
        relative group cursor-pointer
        bg-gradient-to-br from-white via-gray-50/50 to-white
        border border-gray-200/60 rounded-2xl sm:rounded-3xl
        overflow-hidden
        transform-gpu perspective-1000
        w-full
        ${className}
      `;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            willChange: "transform",
            backfaceVisibility: "hidden"
        };
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    const t7 = `${title} project card`;
    let t8;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
            style: {
                background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].gradients.card
            }
        }, void 0, false, {
            fileName: "[project]/src/components/cards/ProjectCard.tsx",
            lineNumber: 104,
            columnNumber: 10
        }, this);
        $[7] = t8;
    } else {
        t8 = $[7];
    }
    let t9;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10",
            style: {
                boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].shadows["3d"].lg,
                transform: "translateZ(-10px)"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/cards/ProjectCard.tsx",
            lineNumber: 113,
            columnNumber: 10
        }, this);
        $[8] = t9;
    } else {
        t9 = $[8];
    }
    const t10 = `${title} project images`;
    let t11;
    if ($[9] !== currentImageIndex || $[10] !== imageLoaded || $[11] !== images || $[12] !== nextImage || $[13] !== prevImage || $[14] !== title) {
        t11 = images.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeIn"],
                    initial: "initial",
                    animate: "animate",
                    className: "relative w-full h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: images[currentImageIndex],
                            alt: `${title} - Image ${currentImageIndex + 1}`,
                            fill: true,
                            className: `object-cover transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`,
                            onLoad: {
                                "ProjectCard[<Image>.onLoad]": ()=>setImageLoaded(true)
                            }["ProjectCard[<Image>.onLoad]"],
                            sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
                            priority: currentImageIndex === 0
                        }, void 0, false, {
                            fileName: "[project]/src/components/cards/ProjectCard.tsx",
                            lineNumber: 124,
                            columnNumber: 159
                        }, this),
                        !imageLoaded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center",
                            "aria-label": "Loading image",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 rounded-full bg-gray-300"
                            }, void 0, false, {
                                fileName: "[project]/src/components/cards/ProjectCard.tsx",
                                lineNumber: 126,
                                columnNumber: 282
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/cards/ProjectCard.tsx",
                            lineNumber: 126,
                            columnNumber: 162
                        }, this)
                    ]
                }, currentImageIndex, true, {
                    fileName: "[project]/src/components/cards/ProjectCard.tsx",
                    lineNumber: 124,
                    columnNumber: 34
                }, this),
                images.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            onClick: {
                                "ProjectCard[<motion.button>.onClick]": (e)=>{
                                    e.stopPropagation();
                                    prevImage();
                                }
                            }["ProjectCard[<motion.button>.onClick]"],
                            whileHover: {
                                scale: 1.1
                            },
                            whileTap: {
                                scale: 0.9
                            },
                            className: "absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500",
                            "aria-label": "Previous image",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronLeftIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeftIcon$3e$__["ChevronLeftIcon"], {
                                className: "w-4 h-4 text-gray-700",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/src/components/cards/ProjectCard.tsx",
                                lineNumber: 135,
                                columnNumber: 322
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/cards/ProjectCard.tsx",
                            lineNumber: 126,
                            columnNumber: 380
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            onClick: {
                                "ProjectCard[<motion.button>.onClick]": (e_0)=>{
                                    e_0.stopPropagation();
                                    nextImage();
                                }
                            }["ProjectCard[<motion.button>.onClick]"],
                            whileHover: {
                                scale: 1.1
                            },
                            whileTap: {
                                scale: 0.9
                            },
                            className: "absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500",
                            "aria-label": "Next image",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                                className: "w-4 h-4 text-gray-700",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/src/components/cards/ProjectCard.tsx",
                                lineNumber: 144,
                                columnNumber: 319
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/cards/ProjectCard.tsx",
                            lineNumber: 135,
                            columnNumber: 410
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1",
                            role: "tablist",
                            "aria-label": "Image navigation",
                            children: images.map({
                                "ProjectCard[images.map()]": (_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: {
                                            "ProjectCard[images.map() > <button>.onClick]": (e_1)=>{
                                                e_1.stopPropagation();
                                                setCurrentImageIndex(index);
                                                setImageLoaded(false);
                                            }
                                        }["ProjectCard[images.map() > <button>.onClick]"],
                                        className: `w-2 h-2 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${index === currentImageIndex ? "bg-white scale-125" : "bg-white/60 hover:bg-white/80"}`,
                                        "aria-label": `Go to image ${index + 1}`,
                                        "aria-current": index === currentImageIndex ? "true" : "false",
                                        role: "tab"
                                    }, index, false, {
                                        fileName: "[project]/src/components/cards/ProjectCard.tsx",
                                        lineNumber: 145,
                                        columnNumber: 56
                                    }, this)
                            }["ProjectCard[images.map()]"])
                        }, void 0, false, {
                            fileName: "[project]/src/components/cards/ProjectCard.tsx",
                            lineNumber: 144,
                            columnNumber: 408
                        }, this)
                    ]
                }, void 0, true),
                images.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full",
                    "aria-label": `Image ${currentImageIndex + 1} of ${images.length}`,
                    children: [
                        currentImageIndex + 1,
                        " / ",
                        images.length
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/cards/ProjectCard.tsx",
                    lineNumber: 152,
                    columnNumber: 75
                }, this)
            ]
        }, void 0, true);
        $[9] = currentImageIndex;
        $[10] = imageLoaded;
        $[11] = images;
        $[12] = nextImage;
        $[13] = prevImage;
        $[14] = title;
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    if ($[16] !== t10 || $[17] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-40 sm:h-48 md:h-56 overflow-hidden rounded-t-2xl sm:rounded-t-3xl bg-gray-100",
            role: "img",
            "aria-label": t10,
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/components/cards/ProjectCard.tsx",
            lineNumber: 165,
            columnNumber: 11
        }, this);
        $[16] = t10;
        $[17] = t11;
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    let t13;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = {
            scale: 1.02
        };
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    let t14;
    if ($[20] !== title) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h3, {
            className: "text-lg sm:text-xl md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300",
            whileHover: t13,
            transition: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitions"].fast,
            children: title
        }, void 0, false, {
            fileName: "[project]/src/components/cards/ProjectCard.tsx",
            lineNumber: 183,
            columnNumber: 11
        }, this);
        $[20] = title;
        $[21] = t14;
    } else {
        t14 = $[21];
    }
    let t15;
    if ($[22] !== description) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed line-clamp-3",
            children: description
        }, void 0, false, {
            fileName: "[project]/src/components/cards/ProjectCard.tsx",
            lineNumber: 191,
            columnNumber: 11
        }, this);
        $[22] = description;
        $[23] = t15;
    } else {
        t15 = $[23];
    }
    const t16 = `${title} technologies`;
    let t17;
    if ($[24] !== technologies) {
        t17 = technologies.map(_ProjectCardTechnologiesMap);
        $[24] = technologies;
        $[25] = t17;
    } else {
        t17 = $[25];
    }
    let t18;
    if ($[26] !== t16 || $[27] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-5 md:mb-6",
            role: "list",
            "aria-label": t16,
            children: t17
        }, void 0, false, {
            fileName: "[project]/src/components/cards/ProjectCard.tsx",
            lineNumber: 208,
            columnNumber: 11
        }, this);
        $[26] = t16;
        $[27] = t17;
        $[28] = t18;
    } else {
        t18 = $[28];
    }
    let t19;
    if ($[29] !== githubUrl || $[30] !== liveUrl || $[31] !== title) {
        t19 = (liveUrl || githubUrl) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col sm:flex-row gap-2 sm:gap-3",
            children: [
                liveUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    onClick: {
                        "ProjectCard[<motion.button>.onClick]": (e_2)=>{
                            e_2.stopPropagation();
                            handleExternalLink(liveUrl);
                        }
                    }["ProjectCard[<motion.button>.onClick]"],
                    whileHover: {
                        scale: 1.05,
                        y: -2
                    },
                    whileTap: {
                        scale: 0.98
                    },
                    className: "flex-1 inline-flex items-center justify-center px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base text-white shadow-lg hover:shadow-xl transition-all duration-300 group/live focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                    style: {
                        background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].gradients.button,
                        boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].shadows.colored.primary
                    },
                    "aria-label": `View live demo of ${title} (opens in new tab)`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowTopRightOnSquareIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowTopRightOnSquareIcon$3e$__["ArrowTopRightOnSquareIcon"], {
                            className: "w-4 h-4 mr-2",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/src/components/cards/ProjectCard.tsx",
                            lineNumber: 230,
                            columnNumber: 71
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Live Demo"
                        }, void 0, false, {
                            fileName: "[project]/src/components/cards/ProjectCard.tsx",
                            lineNumber: 230,
                            columnNumber: 144
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/cards/ProjectCard.tsx",
                    lineNumber: 217,
                    columnNumber: 107
                }, this),
                githubUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    onClick: {
                        "ProjectCard[<motion.button>.onClick]": (e_3)=>{
                            e_3.stopPropagation();
                            handleExternalLink(githubUrl);
                        }
                    }["ProjectCard[<motion.button>.onClick]"],
                    whileHover: {
                        scale: 1.05,
                        y: -2
                    },
                    whileTap: {
                        scale: 0.98
                    },
                    className: "flex-1 inline-flex items-center justify-center px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base text-gray-700 bg-gray-100 border border-gray-200 hover:bg-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2",
                    "aria-label": `View source code of ${title} on GitHub (opens in new tab)`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CodeBracketIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CodeBracketIcon$3e$__["CodeBracketIcon"], {
                            className: "w-4 h-4 mr-2",
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/src/components/cards/ProjectCard.tsx",
                            lineNumber: 240,
                            columnNumber: 433
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Code"
                        }, void 0, false, {
                            fileName: "[project]/src/components/cards/ProjectCard.tsx",
                            lineNumber: 240,
                            columnNumber: 496
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/cards/ProjectCard.tsx",
                    lineNumber: 230,
                    columnNumber: 197
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/cards/ProjectCard.tsx",
            lineNumber: 217,
            columnNumber: 37
        }, this);
        $[29] = githubUrl;
        $[30] = liveUrl;
        $[31] = title;
        $[32] = t19;
    } else {
        t19 = $[32];
    }
    let t20;
    if ($[33] !== t14 || $[34] !== t15 || $[35] !== t18 || $[36] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-10 p-4 sm:p-5 md:p-6",
            children: [
                t14,
                t15,
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/cards/ProjectCard.tsx",
            lineNumber: 250,
            columnNumber: 11
        }, this);
        $[33] = t14;
        $[34] = t15;
        $[35] = t18;
        $[36] = t19;
        $[37] = t20;
    } else {
        t20 = $[37];
    }
    let t21;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-4 right-4 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity duration-300",
            "aria-hidden": "true",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full rounded-full",
                style: {
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].gradients.primary
                }
            }, void 0, false, {
                fileName: "[project]/src/components/cards/ProjectCard.tsx",
                lineNumber: 261,
                columnNumber: 145
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/cards/ProjectCard.tsx",
            lineNumber: 261,
            columnNumber: 11
        }, this);
        $[38] = t21;
    } else {
        t21 = $[38];
    }
    let t22;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute bottom-4 left-4 w-10 h-10 opacity-5 group-hover:opacity-10 transition-opacity duration-300",
            "aria-hidden": "true",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full rounded-full",
                style: {
                    background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].gradients.secondary
                }
            }, void 0, false, {
                fileName: "[project]/src/components/cards/ProjectCard.tsx",
                lineNumber: 270,
                columnNumber: 147
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/cards/ProjectCard.tsx",
            lineNumber: 270,
            columnNumber: 11
        }, this);
        $[39] = t22;
    } else {
        t22 = $[39];
    }
    let t23;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300",
            style: {
                background: "linear-gradient(135deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)",
                backgroundClip: "padding-box"
            },
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/src/components/cards/ProjectCard.tsx",
            lineNumber: 279,
            columnNumber: 11
        }, this);
        $[40] = t23;
    } else {
        t23 = $[40];
    }
    let t24;
    if ($[41] !== t12 || $[42] !== t20 || $[43] !== t5 || $[44] !== t7) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cardHover"],
            initial: "initial",
            whileHover: "animate",
            whileTap: t4,
            className: t5,
            style: t6,
            role: "article",
            "aria-label": t7,
            tabIndex: 0,
            children: [
                t8,
                t9,
                t12,
                t20,
                t21,
                t22,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/cards/ProjectCard.tsx",
            lineNumber: 289,
            columnNumber: 11
        }, this);
        $[41] = t12;
        $[42] = t20;
        $[43] = t5;
        $[44] = t7;
        $[45] = t24;
    } else {
        t24 = $[45];
    }
    return t24;
}
_s(ProjectCard, "vEyUfcGlg3Vy2qFubGxenMWprfg=");
_c = ProjectCard;
function _ProjectCardTechnologiesMap(tech, index_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
        initial: {
            opacity: 0,
            scale: 0.8
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        transition: {
            delay: index_0 * 0.05,
            duration: 0.2,
            ease: "easeOut"
        },
        whileHover: {
            scale: 1.05
        },
        className: "inline-flex items-center px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 text-xs font-medium rounded-full text-blue-700 bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-colors duration-200",
        role: "listitem",
        children: tech
    }, tech, false, {
        fileName: "[project]/src/components/cards/ProjectCard.tsx",
        lineNumber: 301,
        columnNumber: 10
    }, this);
}
function _ProjectCardHandleExternalLink(url) {
    window.open(url, "_blank", "noopener,noreferrer");
}
var _c;
__turbopack_context__.k.register(_c, "ProjectCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/projects/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Projects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cards$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cards/ProjectCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/animations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/theme.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
// Sample project data showcasing company work
const projects = [
    {
        id: '1',
        title: 'E-Commerce Platform Redesign',
        description: 'Complete redesign and development of a modern e-commerce platform with advanced product filtering, real-time inventory management, and seamless checkout experience.',
        images: [
            '/placeholder-project-1.jpg',
            '/placeholder-project-1-2.jpg',
            '/placeholder-project-1-3.jpg'
        ],
        technologies: [
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Stripe',
            'PostgreSQL'
        ],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/example/project'
    },
    {
        id: '2',
        title: 'Healthcare Management System',
        description: 'Comprehensive healthcare management solution with patient records, appointment scheduling, telemedicine integration, and HIPAA-compliant data handling.',
        images: [
            '/placeholder-project-2.jpg',
            '/placeholder-project-2-2.jpg'
        ],
        technologies: [
            'React',
            'Node.js',
            'MongoDB',
            'WebRTC',
            'AWS'
        ],
        liveUrl: 'https://example.com'
    },
    {
        id: '3',
        title: 'Real Estate Listing Platform',
        description: 'Interactive real estate platform featuring 3D property tours, advanced search filters, mortgage calculators, and integrated CRM for agents.',
        images: [
            '/placeholder-project-3.jpg',
            '/placeholder-project-3-2.jpg',
            '/placeholder-project-3-3.jpg',
            '/placeholder-project-3-4.jpg'
        ],
        technologies: [
            'Vue.js',
            'Three.js',
            'Firebase',
            'Google Maps API'
        ],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com/example/project'
    },
    {
        id: '4',
        title: 'Educational Learning Platform',
        description: 'Interactive online learning platform with video courses, live sessions, progress tracking, and gamification elements to enhance student engagement.',
        images: [
            '/placeholder-project-4.jpg'
        ],
        technologies: [
            'React',
            'Django',
            'PostgreSQL',
            'Redis',
            'WebSockets'
        ],
        liveUrl: 'https://example.com'
    },
    {
        id: '5',
        title: 'Restaurant Management Suite',
        description: 'All-in-one restaurant management system with POS integration, inventory tracking, staff scheduling, and customer loyalty programs.',
        images: [
            '/placeholder-project-5.jpg',
            '/placeholder-project-5-2.jpg'
        ],
        technologies: [
            'Angular',
            'Express.js',
            'MySQL',
            'Socket.io'
        ],
        githubUrl: 'https://github.com/example/project'
    },
    {
        id: '6',
        title: 'Fitness Tracking Mobile App',
        description: 'Cross-platform fitness application with workout tracking, nutrition planning, social features, and integration with wearable devices.',
        images: [
            '/placeholder-project-6.jpg',
            '/placeholder-project-6-2.jpg',
            '/placeholder-project-6-3.jpg'
        ],
        technologies: [
            'React Native',
            'GraphQL',
            'MongoDB',
            'HealthKit',
            'Google Fit'
        ],
        liveUrl: 'https://example.com'
    }
];
// Category filter options
const categories = [
    'All Projects',
    'E-Commerce',
    'Healthcare',
    'Real Estate',
    'Education',
    'Food & Beverage',
    'Fitness'
];
function Projects() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "9fe45c864e2d20243ef7a659cbb7f2cc16d96788338c1c3c017be8e9a015f737") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9fe45c864e2d20243ef7a659cbb7f2cc16d96788338c1c3c017be8e9a015f737";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "absolute top-20 left-10 w-64 h-64 rounded-full opacity-20",
            style: {
                background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].gradients.primary
            },
            animate: {
                scale: [
                    1,
                    1.2,
                    1
                ],
                rotate: [
                    0,
                    90,
                    0
                ]
            },
            transition: {
                duration: 20,
                repeat: Infinity,
                ease: "linear"
            }
        }, void 0, false, {
            fileName: "[project]/src/app/projects/page.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 overflow-hidden pointer-events-none",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-20",
                    style: {
                        background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].gradients.secondary
                    },
                    animate: {
                        scale: [
                            1,
                            1.3,
                            1
                        ],
                        rotate: [
                            0,
                            -90,
                            0
                        ]
                    },
                    transition: {
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/projects/page.tsx",
                    lineNumber: 85,
                    columnNumber: 84
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/projects/page.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
            className: "text-4xl md:text-6xl lg:text-7xl font-bold mb-6",
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeIn"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent",
                children: "Our Projects"
            }, void 0, false, {
                fileName: "[project]/src/app/projects/page.tsx",
                lineNumber: 102,
                columnNumber: 99
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/projects/page.tsx",
            lineNumber: 102,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
            className: "text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8",
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeIn"],
            children: "Showcasing our successful digital transformations and innovative solutions"
        }, void 0, false, {
            fileName: "[project]/src/app/projects/page.tsx",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "relative overflow-hidden",
            initial: "initial",
            animate: "animate",
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"],
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "text-center",
                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeIn"],
                        children: [
                            t2,
                            t3,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg",
                                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeIn"],
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 rounded-full bg-green-500 animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/projects/page.tsx",
                                        lineNumber: 112,
                                        columnNumber: 427
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-gray-700",
                                        children: [
                                            projects.length,
                                            " Projects Completed"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/projects/page.tsx",
                                        lineNumber: 112,
                                        columnNumber: 494
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/projects/page.tsx",
                                lineNumber: 112,
                                columnNumber: 269
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/projects/page.tsx",
                        lineNumber: 112,
                        columnNumber: 207
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/projects/page.tsx",
                    lineNumber: 112,
                    columnNumber: 127
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/projects/page.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            once: true,
            margin: "-100px"
        };
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: "initial",
            whileInView: "animate",
            viewport: t5,
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"],
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
            children: projects.map(_ProjectsProjectsMap)
        }, void 0, false, {
            fileName: "[project]/src/app/projects/page.tsx",
            lineNumber: 129,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t10;
    let t7;
    let t8;
    let t9;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            opacity: 0,
            y: 20
        };
        t8 = {
            opacity: 1,
            y: 0
        };
        t9 = {
            once: true
        };
        t10 = {
            delay: 0.5
        };
        $[8] = t10;
        $[9] = t7;
        $[10] = t8;
        $[11] = t9;
    } else {
        t10 = $[8];
        t7 = $[9];
        t8 = $[10];
        t9 = $[11];
    }
    let t11;
    let t12;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl font-bold text-gray-900 mb-4",
            children: "Ready to Start Your Project?"
        }, void 0, false, {
            fileName: "[project]/src/app/projects/page.tsx",
            lineNumber: 166,
            columnNumber: 11
        }, this);
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-lg text-gray-600 mb-6 max-w-2xl",
            children: "Let's work together to bring your vision to life with cutting-edge technology and creative solutions."
        }, void 0, false, {
            fileName: "[project]/src/app/projects/page.tsx",
            lineNumber: 167,
            columnNumber: 11
        }, this);
        $[12] = t11;
        $[13] = t12;
    } else {
        t11 = $[12];
        t12 = $[13];
    }
    let t13;
    let t14;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = {
            scale: 1.05,
            y: -2
        };
        t14 = {
            scale: 0.98
        };
        $[14] = t13;
        $[15] = t14;
    } else {
        t13 = $[14];
        t14 = $[15];
    }
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = {
            background: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].gradients.button,
            boxShadow: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].shadows.colored.primary
        };
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    let t16;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: t7,
                    whileInView: t8,
                    viewport: t9,
                    transition: t10,
                    className: "mt-20 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-block p-8 rounded-3xl bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50 border border-gray-200 shadow-xl",
                        children: [
                            t11,
                            t12,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                href: "/contact",
                                whileHover: t13,
                                whileTap: t14,
                                className: "inline-flex items-center px-8 py-4 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300",
                                style: t15,
                                children: [
                                    "Get in Touch",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5 ml-2",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/projects/page.tsx",
                                            lineNumber: 202,
                                            columnNumber: 641
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/projects/page.tsx",
                                        lineNumber: 202,
                                        columnNumber: 557
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/projects/page.tsx",
                                lineNumber: 202,
                                columnNumber: 338
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/projects/page.tsx",
                        lineNumber: 202,
                        columnNumber: 189
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/projects/page.tsx",
                    lineNumber: 202,
                    columnNumber: 86
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/projects/page.tsx",
            lineNumber: 202,
            columnNumber: 11
        }, this);
        $[17] = t16;
    } else {
        t16 = $[17];
    }
    let t17;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50",
            children: [
                t4,
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-32 overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-white to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/app/projects/page.tsx",
                        lineNumber: 209,
                        columnNumber: 154
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/projects/page.tsx",
                    lineNumber: 209,
                    columnNumber: 107
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/projects/page.tsx",
            lineNumber: 209,
            columnNumber: 11
        }, this);
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    return t17;
}
_c = Projects;
function _ProjectsProjectsMap(project, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeIn"],
        custom: index,
        transition: {
            delay: index * 0.1
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cards$2f$ProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            title: project.title,
            description: project.description,
            images: project.images,
            technologies: project.technologies,
            liveUrl: project.liveUrl,
            githubUrl: project.githubUrl
        }, void 0, false, {
            fileName: "[project]/src/app/projects/page.tsx",
            lineNumber: 219,
            columnNumber: 6
        }, this)
    }, project.id, false, {
        fileName: "[project]/src/app/projects/page.tsx",
        lineNumber: 217,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Projects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_ca80bf05._.js.map