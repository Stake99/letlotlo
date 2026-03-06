(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "debounce",
    ()=>debounce,
    "formatCurrency",
    ()=>formatCurrency,
    "formatDate",
    ()=>formatDate,
    "generateId",
    ()=>generateId,
    "throttle",
    ()=>throttle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function formatCurrency(amount, currency = "USD") {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency
    }).format(amount);
}
function formatDate(date) {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    }).format(dateObj);
}
function generateId() {
    return Math.random().toString(36).substring(2, 15);
}
function debounce(func, wait) {
    let timeout;
    return (...args)=>{
        clearTimeout(timeout);
        timeout = setTimeout(()=>func(...args), wait);
    };
}
function throttle(func, limit) {
    let inThrottle;
    return (...args)=>{
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(()=>inThrottle = false, limit);
        }
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/src/components/forms/ContactForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/UserIcon.js [app-client] (ecmascript) <export default as UserIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$EnvelopeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EnvelopeIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/EnvelopeIcon.js [app-client] (ecmascript) <export default as EnvelopeIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingOfficeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingOfficeIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/BuildingOfficeIcon.js [app-client] (ecmascript) <export default as BuildingOfficeIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChatBubbleLeftRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatBubbleLeftRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ChatBubbleLeftRightIcon.js [app-client] (ecmascript) <export default as ChatBubbleLeftRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CheckCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/CheckCircleIcon.js [app-client] (ecmascript) <export default as CheckCircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ExclamationCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExclamationCircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ExclamationCircleIcon.js [app-client] (ecmascript) <export default as ExclamationCircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowPathIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowPathIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ArrowPathIcon.js [app-client] (ecmascript) <export default as ArrowPathIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/animations.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function AnimatedFormField(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(70);
    if ($[0] !== "6ecfb14ffa0e0725224761e6a1ac24cef1d14f704466119f892dd9cb4bdbaa1a") {
        for(let $i = 0; $i < 70; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6ecfb14ffa0e0725224761e6a1ac24cef1d14f704466119f892dd9cb4bdbaa1a";
    }
    const { label, name, type: t1, placeholder, required: t2, value, error, icon: Icon, onChange, onBlur } = t0;
    const type = t1 === undefined ? "text" : t1;
    const required = t2 === undefined ? false : t2;
    const [isFocused, setIsFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const hasValue = value.length > 0;
    const hasError = !!error;
    const fieldId = `contact-form-${name}`;
    const errorId = `${fieldId}-error`;
    let T0;
    let T1;
    let labelClasses;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[1] !== Icon || $[2] !== errorId || $[3] !== fieldId || $[4] !== hasError || $[5] !== hasValue || $[6] !== isFocused || $[7] !== name || $[8] !== onBlur || $[9] !== onChange || $[10] !== placeholder || $[11] !== required || $[12] !== type || $[13] !== value) {
        const inputClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full px-4 py-4 pl-12 text-base bg-white border-2 rounded-xl", "transition-all duration-200 ease-out", "focus:outline-none focus:ring-4 focus:ring-offset-2", "placeholder:text-gray-400", {
            "border-gray-200 focus:border-primary-500 focus:ring-primary-500/20": !hasError,
            "border-error-500 focus:border-error-500 focus:ring-error-500/20": hasError,
            "shadow-lg": isFocused
        });
        const t10 = isFocused || hasValue;
        const t11 = !isFocused && !hasValue;
        const t12 = hasError && (isFocused || hasValue);
        let t13;
        if ($[24] !== t10 || $[25] !== t11 || $[26] !== t12) {
            t13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute left-12 transition-all duration-200 ease-out pointer-events-none", "text-gray-600 font-medium", {
                "top-2 text-xs text-primary-600 transform -translate-y-1": t10,
                "top-4 text-base": t11,
                "text-error-600": t12
            });
            $[24] = t10;
            $[25] = t11;
            $[26] = t12;
            $[27] = t13;
        } else {
            t13 = $[27];
        }
        labelClasses = t13;
        const t14 = isFocused && !hasError;
        const t15 = !isFocused && !hasError;
        let t16;
        if ($[28] !== hasError || $[29] !== t14 || $[30] !== t15) {
            t16 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute left-4 top-4 w-5 h-5 transition-colors duration-200", {
                "text-primary-500": t14,
                "text-error-500": hasError,
                "text-gray-400": t15
            });
            $[28] = hasError;
            $[29] = t14;
            $[30] = t15;
            $[31] = t16;
        } else {
            t16 = $[31];
        }
        const iconClasses = t16;
        let t17;
        if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
            t17 = ({
                "AnimatedFormField[handleFocus]": ()=>setIsFocused(true)
            })["AnimatedFormField[handleFocus]"];
            $[32] = t17;
        } else {
            t17 = $[32];
        }
        const handleFocus = t17;
        let t18;
        if ($[33] !== onBlur) {
            t18 = ({
                "AnimatedFormField[handleBlur]": ()=>{
                    setIsFocused(false);
                    onBlur();
                }
            })["AnimatedFormField[handleBlur]"];
            $[33] = onBlur;
            $[34] = t18;
        } else {
            t18 = $[34];
        }
        const handleBlur = t18;
        T1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div;
        t8 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"];
        t9 = "relative";
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div;
        t3 = "relative";
        if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = {
                scale: 1.01
            };
            $[35] = t4;
        } else {
            t4 = $[35];
        }
        t5 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitions"].fast;
        if ($[36] !== Icon || $[37] !== iconClasses) {
            t6 = Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                className: iconClasses,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/src/components/forms/ContactForm.tsx",
                lineNumber: 180,
                columnNumber: 20
            }, this);
            $[36] = Icon;
            $[37] = iconClasses;
            $[38] = t6;
        } else {
            t6 = $[38];
        }
        t7 = type === "textarea" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
            id: fieldId,
            name: name,
            value: value,
            onChange: {
                "AnimatedFormField[<textarea>.onChange]": (e)=>onChange(e.target.value)
            }["AnimatedFormField[<textarea>.onChange]"],
            onFocus: handleFocus,
            onBlur: handleBlur,
            placeholder: placeholder,
            required: required,
            rows: 4,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(inputClasses, "resize-none min-h-[120px] pt-6"),
            "aria-describedby": hasError ? errorId : undefined,
            "aria-invalid": hasError
        }, void 0, false, {
            fileName: "[project]/src/components/forms/ContactForm.tsx",
            lineNumber: 187,
            columnNumber: 32
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            id: fieldId,
            name: name,
            type: type,
            value: value,
            onChange: {
                "AnimatedFormField[<input>.onChange]": (e_0)=>onChange(e_0.target.value)
            }["AnimatedFormField[<input>.onChange]"],
            onFocus: handleFocus,
            onBlur: handleBlur,
            placeholder: placeholder,
            required: required,
            className: inputClasses,
            "aria-describedby": hasError ? errorId : undefined,
            "aria-invalid": hasError,
            autoComplete: name === "name" ? "name" : name === "email" ? "email" : name === "company" ? "organization" : "off"
        }, void 0, false, {
            fileName: "[project]/src/components/forms/ContactForm.tsx",
            lineNumber: 189,
            columnNumber: 289
        }, this);
        $[1] = Icon;
        $[2] = errorId;
        $[3] = fieldId;
        $[4] = hasError;
        $[5] = hasValue;
        $[6] = isFocused;
        $[7] = name;
        $[8] = onBlur;
        $[9] = onChange;
        $[10] = placeholder;
        $[11] = required;
        $[12] = type;
        $[13] = value;
        $[14] = T0;
        $[15] = T1;
        $[16] = labelClasses;
        $[17] = t3;
        $[18] = t4;
        $[19] = t5;
        $[20] = t6;
        $[21] = t7;
        $[22] = t8;
        $[23] = t9;
    } else {
        T0 = $[14];
        T1 = $[15];
        labelClasses = $[16];
        t3 = $[17];
        t4 = $[18];
        t5 = $[19];
        t6 = $[20];
        t7 = $[21];
        t8 = $[22];
        t9 = $[23];
    }
    let t10;
    if ($[39] !== required) {
        t10 = required && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-error-500 ml-1",
            "aria-label": "required",
            children: "*"
        }, void 0, false, {
            fileName: "[project]/src/components/forms/ContactForm.tsx",
            lineNumber: 229,
            columnNumber: 23
        }, this);
        $[39] = required;
        $[40] = t10;
    } else {
        t10 = $[40];
    }
    let t11;
    if ($[41] !== fieldId || $[42] !== label || $[43] !== labelClasses || $[44] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: fieldId,
            className: labelClasses,
            children: [
                label,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/forms/ContactForm.tsx",
            lineNumber: 237,
            columnNumber: 11
        }, this);
        $[41] = fieldId;
        $[42] = label;
        $[43] = labelClasses;
        $[44] = t10;
        $[45] = t11;
    } else {
        t11 = $[45];
    }
    const t12 = isFocused && !hasError ? 0.3 : 0;
    const t13 = isFocused && !hasError ? 1.02 : 1;
    let t14;
    if ($[46] !== t12 || $[47] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "absolute inset-0 rounded-xl border-2 border-primary-500 opacity-0 pointer-events-none",
            animate: {
                opacity: t12,
                scale: t13
            },
            transition: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitions"].fast
        }, void 0, false, {
            fileName: "[project]/src/components/forms/ContactForm.tsx",
            lineNumber: 250,
            columnNumber: 11
        }, this);
        $[46] = t12;
        $[47] = t13;
        $[48] = t14;
    } else {
        t14 = $[48];
    }
    let t15;
    if ($[49] !== T0 || $[50] !== t11 || $[51] !== t14 || $[52] !== t3 || $[53] !== t4 || $[54] !== t5 || $[55] !== t6 || $[56] !== t7) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            className: t3,
            whileFocus: t4,
            transition: t5,
            children: [
                t6,
                t7,
                t11,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/forms/ContactForm.tsx",
            lineNumber: 262,
            columnNumber: 11
        }, this);
        $[49] = T0;
        $[50] = t11;
        $[51] = t14;
        $[52] = t3;
        $[53] = t4;
        $[54] = t5;
        $[55] = t6;
        $[56] = t7;
        $[57] = t15;
    } else {
        t15 = $[57];
    }
    let t16;
    if ($[58] !== error || $[59] !== errorId || $[60] !== hasError) {
        t16 = hasError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            id: errorId,
            initial: {
                opacity: 0,
                y: -10,
                height: 0
            },
            animate: {
                opacity: 1,
                y: 0,
                height: "auto"
            },
            exit: {
                opacity: 0,
                y: -10,
                height: 0
            },
            transition: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitions"].fast,
            className: "flex items-center mt-2 text-sm text-error-600",
            role: "alert",
            "aria-live": "polite",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ExclamationCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExclamationCircleIcon$3e$__["ExclamationCircleIcon"], {
                    className: "w-4 h-4 mr-2 flex-shrink-0"
                }, void 0, false, {
                    fileName: "[project]/src/components/forms/ContactForm.tsx",
                    lineNumber: 289,
                    columnNumber: 128
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/components/forms/ContactForm.tsx",
                    lineNumber: 289,
                    columnNumber: 192
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/forms/ContactForm.tsx",
            lineNumber: 277,
            columnNumber: 23
        }, this);
        $[58] = error;
        $[59] = errorId;
        $[60] = hasError;
        $[61] = t16;
    } else {
        t16 = $[61];
    }
    let t17;
    if ($[62] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t16
        }, void 0, false, {
            fileName: "[project]/src/components/forms/ContactForm.tsx",
            lineNumber: 299,
            columnNumber: 11
        }, this);
        $[62] = t16;
        $[63] = t17;
    } else {
        t17 = $[63];
    }
    let t18;
    if ($[64] !== T1 || $[65] !== t15 || $[66] !== t17 || $[67] !== t8 || $[68] !== t9) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T1, {
            variants: t8,
            className: t9,
            children: [
                t15,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/forms/ContactForm.tsx",
            lineNumber: 307,
            columnNumber: 11
        }, this);
        $[64] = T1;
        $[65] = t15;
        $[66] = t17;
        $[67] = t8;
        $[68] = t9;
        $[69] = t18;
    } else {
        t18 = $[69];
    }
    return t18;
}
_s(AnimatedFormField, "taoS6m9NZex5dx3pinefKTdpShE=");
_c = AnimatedFormField;
function AnimatedSubmitButton(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(20);
    if ($[0] !== "6ecfb14ffa0e0725224761e6a1ac24cef1d14f704466119f892dd9cb4bdbaa1a") {
        for(let $i = 0; $i < 20; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6ecfb14ffa0e0725224761e6a1ac24cef1d14f704466119f892dd9cb4bdbaa1a";
    }
    const { isSubmitting, disabled } = t0;
    const t1 = !disabled;
    let t2;
    if ($[1] !== disabled || $[2] !== t1) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full px-8 py-4 text-lg font-semibold text-white rounded-xl", "transition-all duration-150 transform-gpu", "focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-primary-500/50", "relative overflow-hidden group", {
            "bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 shadow-lg hover:shadow-xl": t1,
            "bg-gray-300 cursor-not-allowed": disabled
        });
        $[1] = disabled;
        $[2] = t1;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const t3 = !disabled ? "animate" : undefined;
    let t4;
    if ($[4] !== disabled) {
        t4 = !disabled ? {
            scale: 0.98
        } : undefined;
        $[4] = disabled;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const t5 = !disabled ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].shadows.colored.primary : undefined;
    let t6;
    if ($[6] !== t5) {
        t6 = {
            boxShadow: t5
        };
        $[6] = t5;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== isSubmitting) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "relative z-10 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.8
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.8
                    },
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            animate: {
                                rotate: 360
                            },
                            transition: {
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear"
                            },
                            className: "mr-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowPathIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowPathIcon$3e$__["ArrowPathIcon"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/ContactForm.tsx",
                                lineNumber: 392,
                                columnNumber: 31
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/forms/ContactForm.tsx",
                            lineNumber: 386,
                            columnNumber: 42
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Sending Message..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/forms/ContactForm.tsx",
                            lineNumber: 392,
                            columnNumber: 81
                        }, this)
                    ]
                }, "loading", true, {
                    fileName: "[project]/src/components/forms/ContactForm.tsx",
                    lineNumber: 377,
                    columnNumber: 120
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                    initial: {
                        opacity: 0,
                        scale: 0.8
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.8
                    },
                    children: "Send Message"
                }, "submit", false, {
                    fileName: "[project]/src/components/forms/ContactForm.tsx",
                    lineNumber: 392,
                    columnNumber: 128
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/forms/ContactForm.tsx",
                lineNumber: 377,
                columnNumber: 75
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/forms/ContactForm.tsx",
            lineNumber: 377,
            columnNumber: 10
        }, this);
        $[8] = isSubmitting;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== disabled) {
        t8 = !disabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0",
            initial: {
                x: "-100%"
            },
            whileHover: {
                x: "100%"
            },
            transition: {
                duration: 0.6,
                ease: "easeInOut"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/forms/ContactForm.tsx",
            lineNumber: 409,
            columnNumber: 23
        }, this);
        $[10] = disabled;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== disabled || $[13] !== t2 || $[14] !== t3 || $[15] !== t4 || $[16] !== t6 || $[17] !== t7 || $[18] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            type: "submit",
            disabled: disabled,
            className: t2,
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonHover"],
            whileHover: t3,
            whileTap: t4,
            transition: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitions"].fast,
            style: t6,
            children: [
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/forms/ContactForm.tsx",
            lineNumber: 424,
            columnNumber: 10
        }, this);
        $[12] = disabled;
        $[13] = t2;
        $[14] = t3;
        $[15] = t4;
        $[16] = t6;
        $[17] = t7;
        $[18] = t8;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    return t9;
}
_c1 = AnimatedSubmitButton;
function ContactForm(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(77);
    if ($[0] !== "6ecfb14ffa0e0725224761e6a1ac24cef1d14f704466119f892dd9cb4bdbaa1a") {
        for(let $i = 0; $i < 77; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6ecfb14ffa0e0725224761e6a1ac24cef1d14f704466119f892dd9cb4bdbaa1a";
    }
    const { onSubmit, className } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            name: "",
            email: "",
            company: "",
            message: ""
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {};
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            isSubmitting: false,
            isSubmitted: false,
            submitError: null
        };
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const [formState, setFormState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t3);
    const validateField = _ContactFormValidateField;
    let t4;
    if ($[4] !== errors) {
        t4 = ({
            "ContactForm[handleFieldChange]": (name_0, value_0)=>{
                setFormData({
                    "ContactForm[handleFieldChange > setFormData()]": (prev)=>({
                            ...prev,
                            [name_0]: value_0
                        })
                }["ContactForm[handleFieldChange > setFormData()]"]);
                if (errors[name_0]) {
                    const newErrors = {
                        ...errors
                    };
                    delete newErrors[name_0];
                    setErrors(newErrors);
                }
            }
        })["ContactForm[handleFieldChange]"];
        $[4] = errors;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const handleFieldChange = t4;
    let t5;
    if ($[6] !== formData) {
        t5 = ({
            "ContactForm[handleFieldBlur]": (name_1)=>{
                const value_1 = formData[name_1];
                const error = validateField(name_1, value_1);
                if (error) {
                    setErrors({
                        "ContactForm[handleFieldBlur > setErrors()]": (prev_0)=>({
                                ...prev_0,
                                [name_1]: error
                            })
                    }["ContactForm[handleFieldBlur > setErrors()]"]);
                }
            }
        })["ContactForm[handleFieldBlur]"];
        $[6] = formData;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    const handleFieldBlur = t5;
    let t6;
    if ($[8] !== formData) {
        t6 = ({
            "ContactForm[validateForm]": ()=>{
                const newErrors_0 = {};
                let isValid = true;
                Object.keys(formData).forEach({
                    "ContactForm[validateForm > (anonymous)()]": (name_2)=>{
                        const error_0 = validateField(name_2, formData[name_2]);
                        if (error_0) {
                            newErrors_0[name_2] = error_0;
                            isValid = false;
                        }
                    }
                }["ContactForm[validateForm > (anonymous)()]"]);
                setErrors(newErrors_0);
                return isValid;
            }
        })["ContactForm[validateForm]"];
        $[8] = formData;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    const validateForm = t6;
    let t7;
    if ($[10] !== errors || $[11] !== formData || $[12] !== onSubmit || $[13] !== validateForm) {
        t7 = ({
            "ContactForm[handleSubmit]": async (e)=>{
                e.preventDefault();
                if (!validateForm()) {
                    const firstErrorField = Object.keys(errors)[0];
                    if (firstErrorField && typeof document !== "undefined") {
                        const fieldElement = document.getElementById(`contact-form-${firstErrorField}`);
                        fieldElement?.focus();
                    }
                    return;
                }
                setFormState(_ContactFormHandleSubmitSetFormState);
                ;
                try {
                    await onSubmit(formData);
                    setFormState({
                        isSubmitting: false,
                        isSubmitted: true,
                        submitError: null
                    });
                    setFormData({
                        name: "",
                        email: "",
                        company: "",
                        message: ""
                    });
                    setErrors({});
                } catch (t8) {
                    const error_1 = t8;
                    setFormState({
                        isSubmitting: false,
                        isSubmitted: false,
                        submitError: error_1 instanceof Error ? error_1.message : "Failed to send message. Please try again."
                    });
                }
            }
        })["ContactForm[handleSubmit]"];
        $[10] = errors;
        $[11] = formData;
        $[12] = onSubmit;
        $[13] = validateForm;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    const handleSubmit = t7;
    const hasErrors = Object.values(errors).some(_ContactFormAnonymous);
    const isFormValid = formData.name && formData.email && formData.message && !hasErrors;
    let t8;
    if ($[15] !== className) {
        t8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full max-w-2xl mx-auto", className);
        $[15] = className;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== formState.isSubmitted) {
        t9 = formState.isSubmitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleIn"],
            initial: "initial",
            animate: "animate",
            exit: "exit",
            className: "mb-8 p-6 bg-success-50 border border-success-200 rounded-xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center text-success-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$CheckCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircleIcon$3e$__["CheckCircleIcon"], {
                        className: "w-6 h-6 mr-3 text-success-600"
                    }, void 0, false, {
                        fileName: "[project]/src/components/forms/ContactForm.tsx",
                        lineNumber: 620,
                        columnNumber: 238
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold",
                                children: "Message Sent Successfully!"
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/ContactForm.tsx",
                                lineNumber: 620,
                                columnNumber: 304
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-success-700 mt-1",
                                children: "Thank you for your message. We'll get back to you within 24 hours."
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/ContactForm.tsx",
                                lineNumber: 620,
                                columnNumber: 365
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/forms/ContactForm.tsx",
                        lineNumber: 620,
                        columnNumber: 299
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/forms/ContactForm.tsx",
                lineNumber: 620,
                columnNumber: 186
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/forms/ContactForm.tsx",
            lineNumber: 620,
            columnNumber: 35
        }, this);
        $[17] = formState.isSubmitted;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/components/forms/ContactForm.tsx",
            lineNumber: 628,
            columnNumber: 11
        }, this);
        $[19] = t9;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== formState.submitError) {
        t11 = formState.submitError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleIn"],
            initial: "initial",
            animate: "animate",
            exit: "exit",
            className: "mb-8 p-6 bg-error-50 border border-error-200 rounded-xl",
            role: "alert",
            "aria-live": "polite",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center text-error-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ExclamationCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExclamationCircleIcon$3e$__["ExclamationCircleIcon"], {
                        className: "w-6 h-6 mr-3 text-error-600"
                    }, void 0, false, {
                        fileName: "[project]/src/components/forms/ContactForm.tsx",
                        lineNumber: 636,
                        columnNumber: 265
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold",
                                children: "Error Sending Message"
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/ContactForm.tsx",
                                lineNumber: 636,
                                columnNumber: 335
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-error-700 mt-1",
                                children: formState.submitError
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/ContactForm.tsx",
                                lineNumber: 636,
                                columnNumber: 391
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/forms/ContactForm.tsx",
                        lineNumber: 636,
                        columnNumber: 330
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/forms/ContactForm.tsx",
                lineNumber: 636,
                columnNumber: 215
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/forms/ContactForm.tsx",
            lineNumber: 636,
            columnNumber: 36
        }, this);
        $[21] = formState.submitError;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/components/forms/ContactForm.tsx",
            lineNumber: 644,
            columnNumber: 11
        }, this);
        $[23] = t11;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] !== handleFieldChange) {
        t13 = ({
            "ContactForm[<AnimatedFormField>.onChange]": (value_2)=>handleFieldChange("name", value_2)
        })["ContactForm[<AnimatedFormField>.onChange]"];
        $[25] = handleFieldChange;
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    let t14;
    if ($[27] !== handleFieldBlur) {
        t14 = ({
            "ContactForm[<AnimatedFormField>.onBlur]": ()=>handleFieldBlur("name")
        })["ContactForm[<AnimatedFormField>.onBlur]"];
        $[27] = handleFieldBlur;
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    let t15;
    if ($[29] !== errors.name || $[30] !== formData.name || $[31] !== t13 || $[32] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedFormField, {
            label: "Full Name",
            name: "name",
            type: "text",
            placeholder: "Enter your full name",
            required: true,
            value: formData.name,
            error: errors.name,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserIcon$3e$__["UserIcon"],
            onChange: t13,
            onBlur: t14
        }, void 0, false, {
            fileName: "[project]/src/components/forms/ContactForm.tsx",
            lineNumber: 672,
            columnNumber: 11
        }, this);
        $[29] = errors.name;
        $[30] = formData.name;
        $[31] = t13;
        $[32] = t14;
        $[33] = t15;
    } else {
        t15 = $[33];
    }
    let t16;
    if ($[34] !== handleFieldChange) {
        t16 = ({
            "ContactForm[<AnimatedFormField>.onChange]": (value_3)=>handleFieldChange("email", value_3)
        })["ContactForm[<AnimatedFormField>.onChange]"];
        $[34] = handleFieldChange;
        $[35] = t16;
    } else {
        t16 = $[35];
    }
    let t17;
    if ($[36] !== handleFieldBlur) {
        t17 = ({
            "ContactForm[<AnimatedFormField>.onBlur]": ()=>handleFieldBlur("email")
        })["ContactForm[<AnimatedFormField>.onBlur]"];
        $[36] = handleFieldBlur;
        $[37] = t17;
    } else {
        t17 = $[37];
    }
    let t18;
    if ($[38] !== errors.email || $[39] !== formData.email || $[40] !== t16 || $[41] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedFormField, {
            label: "Email Address",
            name: "email",
            type: "email",
            placeholder: "Enter your email address",
            required: true,
            value: formData.email,
            error: errors.email,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$EnvelopeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EnvelopeIcon$3e$__["EnvelopeIcon"],
            onChange: t16,
            onBlur: t17
        }, void 0, false, {
            fileName: "[project]/src/components/forms/ContactForm.tsx",
            lineNumber: 703,
            columnNumber: 11
        }, this);
        $[38] = errors.email;
        $[39] = formData.email;
        $[40] = t16;
        $[41] = t17;
        $[42] = t18;
    } else {
        t18 = $[42];
    }
    const t19 = formData.company || "";
    let t20;
    if ($[43] !== handleFieldChange) {
        t20 = ({
            "ContactForm[<AnimatedFormField>.onChange]": (value_4)=>handleFieldChange("company", value_4)
        })["ContactForm[<AnimatedFormField>.onChange]"];
        $[43] = handleFieldChange;
        $[44] = t20;
    } else {
        t20 = $[44];
    }
    let t21;
    if ($[45] !== handleFieldBlur) {
        t21 = ({
            "ContactForm[<AnimatedFormField>.onBlur]": ()=>handleFieldBlur("company")
        })["ContactForm[<AnimatedFormField>.onBlur]"];
        $[45] = handleFieldBlur;
        $[46] = t21;
    } else {
        t21 = $[46];
    }
    let t22;
    if ($[47] !== errors.company || $[48] !== t19 || $[49] !== t20 || $[50] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedFormField, {
            label: "Company Name",
            name: "company",
            type: "text",
            placeholder: "Enter your company name (optional)",
            value: t19,
            error: errors.company,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingOfficeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingOfficeIcon$3e$__["BuildingOfficeIcon"],
            onChange: t20,
            onBlur: t21
        }, void 0, false, {
            fileName: "[project]/src/components/forms/ContactForm.tsx",
            lineNumber: 735,
            columnNumber: 11
        }, this);
        $[47] = errors.company;
        $[48] = t19;
        $[49] = t20;
        $[50] = t21;
        $[51] = t22;
    } else {
        t22 = $[51];
    }
    let t23;
    if ($[52] !== handleFieldChange) {
        t23 = ({
            "ContactForm[<AnimatedFormField>.onChange]": (value_5)=>handleFieldChange("message", value_5)
        })["ContactForm[<AnimatedFormField>.onChange]"];
        $[52] = handleFieldChange;
        $[53] = t23;
    } else {
        t23 = $[53];
    }
    let t24;
    if ($[54] !== handleFieldBlur) {
        t24 = ({
            "ContactForm[<AnimatedFormField>.onBlur]": ()=>handleFieldBlur("message")
        })["ContactForm[<AnimatedFormField>.onBlur]"];
        $[54] = handleFieldBlur;
        $[55] = t24;
    } else {
        t24 = $[55];
    }
    let t25;
    if ($[56] !== errors.message || $[57] !== formData.message || $[58] !== t23 || $[59] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedFormField, {
            label: "Message",
            name: "message",
            type: "textarea",
            placeholder: "Tell us about your project or inquiry...",
            required: true,
            value: formData.message,
            error: errors.message,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChatBubbleLeftRightIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatBubbleLeftRightIcon$3e$__["ChatBubbleLeftRightIcon"],
            onChange: t23,
            onBlur: t24
        }, void 0, false, {
            fileName: "[project]/src/components/forms/ContactForm.tsx",
            lineNumber: 766,
            columnNumber: 11
        }, this);
        $[56] = errors.message;
        $[57] = formData.message;
        $[58] = t23;
        $[59] = t24;
        $[60] = t25;
    } else {
        t25 = $[60];
    }
    const t26 = !isFormValid || formState.isSubmitting;
    let t27;
    if ($[61] !== formState.isSubmitting || $[62] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedSubmitButton, {
                isSubmitting: formState.isSubmitting,
                disabled: t26
            }, void 0, false, {
                fileName: "[project]/src/components/forms/ContactForm.tsx",
                lineNumber: 778,
                columnNumber: 46
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/forms/ContactForm.tsx",
            lineNumber: 778,
            columnNumber: 11
        }, this);
        $[61] = formState.isSubmitting;
        $[62] = t26;
        $[63] = t27;
    } else {
        t27 = $[63];
    }
    let t28;
    if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
            className: "text-center text-sm text-gray-600",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "We respect your privacy. Your information will never be shared with third parties."
            }, void 0, false, {
                fileName: "[project]/src/components/forms/ContactForm.tsx",
                lineNumber: 787,
                columnNumber: 92
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/forms/ContactForm.tsx",
            lineNumber: 787,
            columnNumber: 11
        }, this);
        $[64] = t28;
    } else {
        t28 = $[64];
    }
    let t29;
    if ($[65] !== handleSubmit || $[66] !== t15 || $[67] !== t18 || $[68] !== t22 || $[69] !== t25 || $[70] !== t27) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].form, {
            onSubmit: handleSubmit,
            className: "space-y-6",
            noValidate: true,
            "aria-label": "Contact form",
            children: [
                t15,
                t18,
                t22,
                t25,
                t27,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/forms/ContactForm.tsx",
            lineNumber: 794,
            columnNumber: 11
        }, this);
        $[65] = handleSubmit;
        $[66] = t15;
        $[67] = t18;
        $[68] = t22;
        $[69] = t25;
        $[70] = t27;
        $[71] = t29;
    } else {
        t29 = $[71];
    }
    let t30;
    if ($[72] !== t10 || $[73] !== t12 || $[74] !== t29 || $[75] !== t8) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: t8,
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"],
            initial: "initial",
            animate: "animate",
            children: [
                t10,
                t12,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/forms/ContactForm.tsx",
            lineNumber: 807,
            columnNumber: 11
        }, this);
        $[72] = t10;
        $[73] = t12;
        $[74] = t29;
        $[75] = t8;
        $[76] = t30;
    } else {
        t30 = $[76];
    }
    return t30;
}
_s1(ContactForm, "rCtIi7QIZVOJRg618HjdgI80QyA=");
_c2 = ContactForm;
function _ContactFormAnonymous(error_2) {
    return !!error_2;
}
function _ContactFormHandleSubmitSetFormState(prev_1) {
    return {
        ...prev_1,
        isSubmitting: true,
        submitError: null
    };
}
function _ContactFormValidateField(name, value) {
    const stringValue = value || "";
    switch(name){
        case "name":
            {
                if (!stringValue.trim()) {
                    return "Name is required";
                }
                if (stringValue.trim().length < 2) {
                    return "Name must be at least 2 characters";
                }
                return;
            }
        case "email":
            {
                if (!stringValue.trim()) {
                    return "Email is required";
                }
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(stringValue)) {
                    return "Please enter a valid email address";
                }
                return;
            }
        case "message":
            {
                if (!stringValue.trim()) {
                    return "Message is required";
                }
                if (stringValue.trim().length < 10) {
                    return "Message must be at least 10 characters";
                }
                if (stringValue.trim().length > 1000) {
                    return "Message must be less than 1000 characters";
                }
                return;
            }
        case "company":
            {
                if (stringValue.trim() && stringValue.trim().length < 2) {
                    return "Company name must be at least 2 characters";
                }
                return;
            }
        default:
            {
                return;
            }
    }
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "AnimatedFormField");
__turbopack_context__.k.register(_c1, "AnimatedSubmitButton");
__turbopack_context__.k.register(_c2, "ContactForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/forms/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
/**
 * Forms Components
 * 
 * Exports all form-related components for the Letlotlo International website.
 * These components provide comprehensive form functionality with validation,
 * animations, and accessibility compliance.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$ContactForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/forms/ContactForm.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/forms/ContactForm.tsx [app-client] (ecmascript) <export default as ContactForm>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactForm",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$ContactForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$ContactForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/forms/ContactForm.tsx [app-client] (ecmascript)");
}),
"[project]/src/lib/parallax.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Parallax utility functions for scroll-based animations
 */ /**
 * Calculate parallax offset based on scroll position
 */ __turbopack_context__.s([
    "calculateLayeredParallax",
    ()=>calculateLayeredParallax,
    "calculateMouseParallax",
    ()=>calculateMouseParallax,
    "calculateParallaxOffset",
    ()=>calculateParallaxOffset,
    "calculateScrollRotation",
    ()=>calculateScrollRotation,
    "calculateScrollScale",
    ()=>calculateScrollScale,
    "createParallaxObserver",
    ()=>createParallaxObserver,
    "createResizeHandler",
    ()=>createResizeHandler,
    "createScrollHandler",
    ()=>createScrollHandler,
    "getElementViewportPosition",
    ()=>getElementViewportPosition,
    "getParallaxConfig",
    ()=>getParallaxConfig,
    "isElementInViewport",
    ()=>isElementInViewport,
    "smoothScrollTo",
    ()=>smoothScrollTo
]);
function calculateParallaxOffset(scrollY, speed = 0.5, direction = "vertical") {
    const offset = scrollY * speed;
    return direction === "vertical" ? {
        x: 0,
        y: -offset
    } : {
        x: -offset,
        y: 0
    };
}
function calculateLayeredParallax(scrollY, layers) {
    return layers.map((layer)=>calculateParallaxOffset(scrollY, layer.speed, layer.direction));
}
function getElementViewportPosition(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = ("TURBOPACK compile-time truthy", 1) ? window.innerHeight : "TURBOPACK unreachable";
    const top = rect.top;
    const bottom = rect.bottom;
    const center = top + rect.height / 2;
    // Calculate progress (0 when element enters viewport, 1 when it leaves)
    const progress = windowHeight > 0 ? Math.max(0, Math.min(1, (windowHeight - top) / (windowHeight + rect.height))) : 0;
    return {
        top,
        bottom,
        center,
        progress
    };
}
function isElementInViewport(element, threshold = 0) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    return rect.top < windowHeight - threshold && rect.bottom > threshold && rect.left < windowWidth - threshold && rect.right > threshold;
}
function calculateScrollRotation(scrollY, speed = 0.1, axis = "z") {
    const rotation = scrollY * speed;
    switch(axis){
        case "x":
            return {
                x: rotation,
                y: 0,
                z: 0
            };
        case "y":
            return {
                x: 0,
                y: rotation,
                z: 0
            };
        case "z":
        default:
            return {
                x: 0,
                y: 0,
                z: rotation
            };
    }
}
function calculateScrollScale(scrollY, elementTop, elementHeight, minScale = 0.8, maxScale = 1.2) {
    const windowHeight = ("TURBOPACK compile-time truthy", 1) ? window.innerHeight : "TURBOPACK unreachable";
    if (windowHeight === 0) return 1;
    const elementCenter = elementTop + elementHeight / 2;
    const viewportCenter = windowHeight / 2;
    // Distance from viewport center (-1 to 1)
    const distance = (elementCenter - viewportCenter) / (windowHeight / 2);
    const normalizedDistance = Math.max(-1, Math.min(1, distance));
    // Scale based on distance from center
    const scale = minScale + (maxScale - minScale) * (1 - Math.abs(normalizedDistance));
    return Math.max(minScale, Math.min(maxScale, scale));
}
function smoothScrollTo(element, offset = 0, duration = 1000) {
    return new Promise((resolve)=>{
        if (("TURBOPACK compile-time value", "object") === "undefined" || typeof document === "undefined") {
            resolve();
            return;
        }
        const targetElement = typeof element === "string" ? document.querySelector(element) : element;
        if (!targetElement) {
            resolve();
            return;
        }
        const targetPosition = targetElement.offsetTop + offset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;
        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            // Easing function (ease-in-out)
            const ease = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            window.scrollTo(0, startPosition + distance * ease);
            if (progress < 1) {
                requestAnimationFrame(animation);
            } else {
                resolve();
            }
        }
        requestAnimationFrame(animation);
    });
}
function createScrollHandler(callback, throttleMs = 16) {
    let ticking = false;
    return ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        if (!ticking) {
            requestAnimationFrame(()=>{
                callback(window.pageYOffset);
                ticking = false;
            });
            ticking = true;
        }
    };
}
function createParallaxObserver(callback, options = {}) {
    const defaultOptions = {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: [
            0,
            0.1,
            0.2,
            0.3,
            0.4,
            0.5,
            0.6,
            0.7,
            0.8,
            0.9,
            1
        ],
        ...options
    };
    return new IntersectionObserver(callback, defaultOptions);
}
function calculateMouseParallax(mouseX, mouseY, elementRect, intensity = 0.1) {
    const centerX = elementRect.left + elementRect.width / 2;
    const centerY = elementRect.top + elementRect.height / 2;
    const deltaX = (mouseX - centerX) / elementRect.width;
    const deltaY = (mouseY - centerY) / elementRect.height;
    return {
        x: deltaX * intensity * 100,
        y: deltaY * intensity * 100
    };
}
function createResizeHandler(callback, debounceMs = 250) {
    let timeoutId;
    return ()=>{
        clearTimeout(timeoutId);
        timeoutId = setTimeout(callback, debounceMs);
    };
}
function getParallaxConfig() {
    // Default values for SSR
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Simple performance detection
    const performanceMode = (()=>{
        const memory = navigator.deviceMemory;
        const cores = navigator.hardwareConcurrency;
        if (memory && memory < 4 || cores && cores < 4) return "low";
        if (memory && memory >= 8 && cores && cores >= 8) return "high";
        return "medium";
    })();
    const maxElements = {
        low: 5,
        medium: 15,
        high: 30
    }[performanceMode];
    return {
        reducedMotion,
        performanceMode,
        maxElements
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/ParallaxSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BackgroundParallaxSection",
    ()=>BackgroundParallaxSection,
    "ContentParallaxSection",
    ()=>ContentParallaxSection,
    "HeroParallaxSection",
    ()=>HeroParallaxSection,
    "ParallaxSection",
    ()=>ParallaxSection,
    "default",
    ()=>__TURBOPACK__default__export__,
    "useParallaxLayers",
    ()=>useParallaxLayers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$parallax$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/parallax.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const ParallaxSection = ({ children, speed = 0.5, className, backgroundElements = [], layers = [], performance = {
    respectPerformance: true,
    useGPU: true,
    throttle: 16
}, observer = {
    rootMargin: "0px 0px -10% 0px",
    threshold: [
        0,
        0.1,
        0.5,
        1
    ]
}, respectReducedMotion = true, scrollContainer })=>{
    _s();
    var _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isInView, setIsInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shouldAnimate, setShouldAnimate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Get performance configuration
    const { reducedMotion, performanceMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$parallax$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getParallaxConfig"])();
    // Determine if parallax should be active
    const parallaxActive = shouldAnimate && (!respectReducedMotion || !reducedMotion) && (!performance.respectPerformance || performanceMode !== "low");
    // Framer Motion scroll hooks for smooth parallax
    const { scrollY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        container: scrollContainer
    });
    // Create smooth spring animations for better performance
    const springConfig = {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    };
    const smoothScrollY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(scrollY, springConfig);
    // Transform scroll position to parallax offset for main content
    const yTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(smoothScrollY, {
        "ParallaxSection.useTransform[yTransform]": (value)=>parallaxActive ? -value * speed : 0
    }["ParallaxSection.useTransform[yTransform]"]);
    // Calculate layer transforms
    const layerTransforms = layers.map(_s1((layer)=>{
        _s1();
        return {
            x: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(smoothScrollY, {
                "ParallaxSection.layerTransforms.useTransform": (value_0)=>{
                    if (!parallaxActive) return 0;
                    const offset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$parallax$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateParallaxOffset"])(value_0, layer.speed, layer.direction);
                    return offset.x;
                }
            }["ParallaxSection.layerTransforms.useTransform"]),
            y: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(smoothScrollY, {
                "ParallaxSection.layerTransforms.useTransform": (value_1)=>{
                    if (!parallaxActive) return 0;
                    const offset_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$parallax$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateParallaxOffset"])(value_1, layer.speed, layer.direction);
                    return offset_0.y;
                }
            }["ParallaxSection.layerTransforms.useTransform"])
        };
    }, "mQUWQkKPtHtyfIrHxPqw8GZYSyU=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
        ];
    }));
    // Intersection Observer for performance optimization
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParallaxSection.useEffect": ()=>{
            if (!sectionRef.current) return;
            const observerInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$parallax$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createParallaxObserver"])({
                "ParallaxSection.useEffect.observerInstance": (entries)=>{
                    entries.forEach({
                        "ParallaxSection.useEffect.observerInstance": (entry)=>{
                            setIsInView(entry.isIntersecting);
                        }
                    }["ParallaxSection.useEffect.observerInstance"]);
                }
            }["ParallaxSection.useEffect.observerInstance"], observer);
            observerInstance.observe(sectionRef.current);
            return ({
                "ParallaxSection.useEffect": ()=>{
                    observerInstance.disconnect();
                }
            })["ParallaxSection.useEffect"];
        }
    }["ParallaxSection.useEffect"], [
        observer
    ]);
    // Performance monitoring and adaptive quality
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParallaxSection.useEffect": ()=>{
            if (!performance.respectPerformance || ("TURBOPACK compile-time value", "object") === "undefined") return;
            let frameCount = 0;
            let lastTime = window.performance.now();
            let animationId;
            const measurePerformance = {
                "ParallaxSection.useEffect.measurePerformance": ()=>{
                    frameCount++;
                    const currentTime = window.performance.now();
                    if (currentTime - lastTime >= 1000) {
                        const fps = Math.round(frameCount * 1000 / (currentTime - lastTime));
                        // Disable parallax if FPS drops below 30
                        if (fps < 30 && shouldAnimate) {
                            setShouldAnimate(false);
                            console.warn("ParallaxSection: Disabled due to low FPS");
                        } else if (fps > 50 && !shouldAnimate) {
                            setShouldAnimate(true);
                        }
                        frameCount = 0;
                        lastTime = currentTime;
                    }
                    if (isInView) {
                        animationId = requestAnimationFrame(measurePerformance);
                    }
                }
            }["ParallaxSection.useEffect.measurePerformance"];
            if (isInView) {
                animationId = requestAnimationFrame(measurePerformance);
            }
            return ({
                "ParallaxSection.useEffect": ()=>{
                    if (animationId) {
                        cancelAnimationFrame(animationId);
                    }
                }
            })["ParallaxSection.useEffect"];
        }
    }["ParallaxSection.useEffect"], [
        isInView,
        shouldAnimate,
        performance.respectPerformance
    ]);
    // GPU acceleration styles
    const gpuStyles = performance.useGPU ? {
        willChange: "transform",
        backfaceVisibility: "hidden",
        perspective: 1000
    } : {};
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: sectionRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative overflow-hidden", className),
        style: gpuStyles,
        children: [
            layers.map((layer_0, index)=>{
                const LayerComponent = layer_0.component;
                const transform = layerTransforms[index];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 pointer-events-none", layer_0.className),
                    style: {
                        ...gpuStyles,
                        x: transform.x,
                        y: transform.y
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LayerComponent, {}, void 0, false, {
                        fileName: "[project]/src/components/sections/ParallaxSection.tsx",
                        lineNumber: 187,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, `layer-${index}`, false, {
                    fileName: "[project]/src/components/sections/ParallaxSection.tsx",
                    lineNumber: 182,
                    columnNumber: 14
                }, ("TURBOPACK compile-time value", void 0));
            }),
            backgroundElements.map(_s2((BackgroundElement, index_0)=>/*#__PURE__*/ {
                _s2();
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute inset-0 pointer-events-none",
                    style: {
                        ...gpuStyles,
                        y: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(smoothScrollY, {
                            "ParallaxSection.useTransform": (value_2)=>parallaxActive ? -value_2 * (speed * (index_0 + 1) * 0.3) : 0
                        }["ParallaxSection.useTransform"])
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BackgroundElement, {}, void 0, false, {
                        fileName: "[project]/src/components/sections/ParallaxSection.tsx",
                        lineNumber: 196,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, `bg-element-${index_0}`, false, {
                    fileName: "[project]/src/components/sections/ParallaxSection.tsx",
                    lineNumber: 192,
                    columnNumber: 63
                }, ("TURBOPACK compile-time value", void 0));
            }, "qXJXoNhB4Q97FzV6bHSnSFJpnfA=", false, function() {
                return [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
                ];
            })),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "relative z-10",
                style: {
                    ...gpuStyles,
                    y: yTransform
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/sections/ParallaxSection.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            ("TURBOPACK compile-time value", "development") === "development" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed top-4 right-4 bg-black/80 text-white p-2 rounded text-xs z-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "Parallax: ",
                            parallaxActive ? "Active" : "Disabled"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/ParallaxSection.tsx",
                        lineNumber: 209,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "In View: ",
                            isInView ? "Yes" : "No"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/ParallaxSection.tsx",
                        lineNumber: 210,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "Reduced Motion: ",
                            reducedMotion ? "Yes" : "No"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/ParallaxSection.tsx",
                        lineNumber: 211,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            "Performance: ",
                            performanceMode
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/ParallaxSection.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/ParallaxSection.tsx",
                lineNumber: 208,
                columnNumber: 50
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/ParallaxSection.tsx",
        lineNumber: 177,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ParallaxSection, "seXrUq8sGY1Y11KCPotviNXRYYs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = ParallaxSection;
const HeroParallaxSection = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "3472dcb088dd10ed985c65a0425a3aebe3e37ab5f16a6630d967b57ca7dcc6a8") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3472dcb088dd10ed985c65a0425a3aebe3e37ab5f16a6630d967b57ca7dcc6a8";
    }
    let t0;
    if ($[1] !== props) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParallaxSection, {
            ...props,
            speed: 0.3
        }, void 0, false, {
            fileName: "[project]/src/components/sections/ParallaxSection.tsx",
            lineNumber: 232,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = props;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    return t0;
};
_c1 = HeroParallaxSection;
const ContentParallaxSection = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "3472dcb088dd10ed985c65a0425a3aebe3e37ab5f16a6630d967b57ca7dcc6a8") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3472dcb088dd10ed985c65a0425a3aebe3e37ab5f16a6630d967b57ca7dcc6a8";
    }
    let t0;
    if ($[1] !== props) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParallaxSection, {
            ...props,
            speed: 0.5
        }, void 0, false, {
            fileName: "[project]/src/components/sections/ParallaxSection.tsx",
            lineNumber: 252,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = props;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    return t0;
};
_c2 = ContentParallaxSection;
const BackgroundParallaxSection = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "3472dcb088dd10ed985c65a0425a3aebe3e37ab5f16a6630d967b57ca7dcc6a8") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3472dcb088dd10ed985c65a0425a3aebe3e37ab5f16a6630d967b57ca7dcc6a8";
    }
    let t0;
    if ($[1] !== props) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParallaxSection, {
            ...props,
            speed: 0.8
        }, void 0, false, {
            fileName: "[project]/src/components/sections/ParallaxSection.tsx",
            lineNumber: 272,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = props;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    return t0;
};
_c3 = BackgroundParallaxSection;
const useParallaxLayers = (layerConfigs)=>{
    return layerConfigs.map((config, index)=>({
            ...config,
            component: ({ style })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: config.className,
                    style: style,
                    "data-parallax-layer": index
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/ParallaxSection.tsx",
                    lineNumber: 295,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
        }));
};
const __TURBOPACK__default__export__ = ParallaxSection;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "ParallaxSection");
__turbopack_context__.k.register(_c1, "HeroParallaxSection");
__turbopack_context__.k.register(_c2, "ContentParallaxSection");
__turbopack_context__.k.register(_c3, "BackgroundParallaxSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/webgl-detection.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * WebGL capability detection and fallback utilities
 */ __turbopack_context__.s([
    "cacheWebGLCapabilities",
    ()=>cacheWebGLCapabilities,
    "detectWebGLCapabilities",
    ()=>detectWebGLCapabilities,
    "getCachedWebGLCapabilities",
    ()=>getCachedWebGLCapabilities,
    "getWebGLCapabilities",
    ()=>getWebGLCapabilities,
    "getWebGLSupportMessage",
    ()=>getWebGLSupportMessage,
    "isLowEndDevice",
    ()=>isLowEndDevice,
    "isWebGL2Supported",
    ()=>isWebGL2Supported,
    "isWebGLSupported",
    ()=>isWebGLSupported
]);
function detectWebGLCapabilities() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const canvas = document.createElement('canvas');
    let gl = null;
    let version = null;
    // Try WebGL 2 first
    try {
        gl = canvas.getContext('webgl2');
        if (gl) {
            version = 2;
        }
    } catch (e) {
    // WebGL 2 not supported
    }
    // Fall back to WebGL 1
    if (!gl) {
        try {
            gl = canvas.getContext('webgl');
            if (!gl) {
                gl = canvas.getContext('experimental-webgl');
            }
            if (gl) {
                version = 1;
            }
        } catch (e) {
        // WebGL not supported
        }
    }
    if (!gl) {
        return {
            supported: false,
            version: null,
            renderer: null,
            vendor: null,
            maxTextureSize: null,
            maxVertexUniforms: null,
            extensions: []
        };
    }
    // Get debug info if available
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    const renderer = debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER);
    const vendor = debugInfo ? gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) : gl.getParameter(gl.VENDOR);
    // Get capabilities
    const maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
    const maxVertexUniforms = gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS);
    // Get supported extensions
    const extensions = gl.getSupportedExtensions() || [];
    return {
        supported: true,
        version,
        renderer,
        vendor,
        maxTextureSize,
        maxVertexUniforms,
        extensions
    };
}
function isWebGLSupported() {
    const capabilities = detectWebGLCapabilities();
    return capabilities.supported;
}
function isWebGL2Supported() {
    const capabilities = detectWebGLCapabilities();
    return capabilities.supported && capabilities.version === 2;
}
function getWebGLSupportMessage() {
    const capabilities = detectWebGLCapabilities();
    if (!capabilities.supported) {
        return 'Your browser does not support WebGL, which is required for 3D graphics. Please try updating your browser or using a different one.';
    }
    if (capabilities.version === 1) {
        return 'Your browser supports WebGL 1. Some advanced 3D features may not be available.';
    }
    return 'Your browser fully supports 3D graphics.';
}
function isLowEndDevice() {
    const capabilities = detectWebGLCapabilities();
    if (!capabilities.supported) {
        return true;
    }
    // Check for indicators of low-end hardware
    const maxTextureSize = capabilities.maxTextureSize || 0;
    const maxVertexUniforms = capabilities.maxVertexUniforms || 0;
    // Low-end devices typically have smaller limits
    if (maxTextureSize < 4096 || maxVertexUniforms < 128) {
        return true;
    }
    // Check renderer string for known low-end GPUs
    const renderer = (capabilities.renderer || '').toLowerCase();
    const lowEndIndicators = [
        'swiftshader',
        'llvmpipe',
        'software',
        'mesa',
        'intel hd graphics 3000',
        'intel hd graphics 2000'
    ];
    return lowEndIndicators.some((indicator)=>renderer.includes(indicator));
}
function cacheWebGLCapabilities() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const capabilities = detectWebGLCapabilities();
        sessionStorage.setItem('webgl-capabilities', JSON.stringify(capabilities));
    } catch (e) {
    // Fail silently if storage is not available
    }
}
function getCachedWebGLCapabilities() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const cached = sessionStorage.getItem('webgl-capabilities');
        if (cached) {
            return JSON.parse(cached);
        }
    } catch (e) {
    // Fail silently if storage is not available
    }
    return null;
}
function getWebGLCapabilities() {
    const cached = getCachedWebGLCapabilities();
    if (cached) {
        return cached;
    }
    const capabilities = detectWebGLCapabilities();
    cacheWebGLCapabilities();
    return capabilities;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/three-utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateMouseInfluence",
    ()=>calculateMouseInfluence,
    "checkWebGLSupport",
    ()=>checkWebGLSupport,
    "createCartoonMaterial",
    ()=>createCartoonMaterial,
    "createFloatingAnimation",
    ()=>createFloatingAnimation,
    "createGeometry",
    ()=>createGeometry,
    "createParticleConfig",
    ()=>createParticleConfig,
    "createRotationAnimation",
    ()=>createRotationAnimation,
    "createStandardMaterial",
    ()=>createStandardMaterial,
    "easing",
    ()=>easing,
    "getPerformanceTier",
    ()=>getPerformanceTier,
    "lerp",
    ()=>lerp,
    "mouseToNDC",
    ()=>mouseToNDC,
    "randomColor",
    ()=>randomColor,
    "randomPosition",
    ()=>randomPosition,
    "randomRotation",
    ()=>randomRotation,
    "smoothDamp",
    ()=>smoothDamp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$webgl$2d$detection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/webgl-detection.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$error$2d$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/error-logger.ts [app-client] (ecmascript)");
;
;
;
function randomPosition(bounds = {
    x: 10,
    y: 10,
    z: 10
}) {
    return [
        (Math.random() - 0.5) * bounds.x,
        (Math.random() - 0.5) * bounds.y,
        (Math.random() - 0.5) * bounds.z
    ];
}
function randomRotation() {
    return [
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
    ];
}
function randomColor(palette = [
    "#3b82f6",
    "#8b5cf6",
    "#f59e0b"
]) {
    return palette[Math.floor(Math.random() * palette.length)];
}
function mouseToNDC(mouseX, mouseY, width, height) {
    return {
        x: mouseX / width * 2 - 1,
        y: -(mouseY / height) * 2 + 1
    };
}
function lerp(start, end, factor) {
    return start + (end - start) * factor;
}
function smoothDamp(current, target, velocity, smoothTime, deltaTime) {
    const omega = 2 / smoothTime;
    const x = omega * deltaTime;
    const exp = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x);
    const change = current - target;
    const originalTo = target;
    const maxChange = Infinity;
    const clampedChange = Math.max(-maxChange, Math.min(change, maxChange));
    target = current - clampedChange;
    const temp = (velocity.value + omega * clampedChange) * deltaTime;
    velocity.value = (velocity.value - omega * temp) * exp;
    let output = target + (clampedChange + temp) * exp;
    if (originalTo - current > 0 === output > originalTo) {
        output = originalTo;
        velocity.value = (output - originalTo) / deltaTime;
    }
    return output;
}
function createFloatingAnimation(index) {
    return {
        amplitude: 0.5 + Math.random() * 0.5,
        frequency: 0.5 + Math.random() * 0.5,
        offset: index * 0.5
    };
}
function createRotationAnimation() {
    return {
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02
    };
}
function createGeometry(shape) {
    switch(shape){
        case "sphere":
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](1, 32, 32);
        case "box":
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](1, 1, 1);
        case "torus":
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TorusGeometry"](0.7, 0.3, 16, 100);
        case "cylinder":
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.5, 0.5, 1, 32);
        default:
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](1, 32, 32);
    }
}
function createCartoonMaterial(color) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshToonMaterial"]({
        color,
        transparent: true,
        opacity: 0.8
    });
}
function createStandardMaterial(color, roughness = 0.3, metalness = 0.1) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
        color,
        roughness,
        metalness,
        transparent: true,
        opacity: 0.9
    });
}
function calculateMouseInfluence(mousePosition, objectPosition, influence = 0.1) {
    return {
        x: mousePosition.x * influence,
        y: mousePosition.y * influence,
        z: 0
    };
}
function createParticleConfig(count = 100) {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const colorPalette = [
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#3b82f6"),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#8b5cf6"),
        new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#f59e0b")
    ];
    for(let i = 0; i < count; i++){
        // Positions
        positions[i * 3] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
        // Colors
        const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
        // Sizes
        sizes[i] = Math.random() * 2 + 1;
    }
    return {
        positions,
        colors,
        sizes
    };
}
const easing = {
    easeInOut: (t)=>t * t * (3 - 2 * t),
    easeOut: (t)=>1 - Math.pow(1 - t, 3),
    easeIn: (t)=>t * t * t,
    bounce: (t)=>{
        if (t < 1 / 2.75) {
            return 7.5625 * t * t;
        } else if (t < 2 / 2.75) {
            return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
        } else if (t < 2.5 / 2.75) {
            return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
        } else {
            return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
        }
    }
};
function checkWebGLSupport() {
    // Return false during SSR
    if (typeof document === "undefined") {
        return false;
    }
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$webgl$2d$detection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWebGLSupported"])();
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$error$2d$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorLogger"].log3DError(error instanceof Error ? error : new Error(String(error)), "WebGL Support Check");
        return false;
    }
}
function getPerformanceTier() {
    // Return medium tier during SSR
    if (typeof document === "undefined") {
        return "medium";
    }
    try {
        // Check if device is low-end
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$webgl$2d$detection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLowEndDevice"])()) {
            return "low";
        }
        const capabilities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$webgl$2d$detection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWebGLCapabilities"])();
        if (!capabilities.supported) {
            return "low";
        }
        // Check for WebGL 2 support
        if (capabilities.version === 2) {
            // Check renderer for high-end GPUs
            const renderer = (capabilities.renderer || "").toLowerCase();
            if (renderer.includes("gtx") || renderer.includes("rtx") || renderer.includes("radeon rx") || renderer.includes("apple m")) {
                return "high";
            }
        }
        // Check texture size as an indicator
        const maxTextureSize = capabilities.maxTextureSize || 0;
        if (maxTextureSize >= 8192) {
            return "high";
        } else if (maxTextureSize >= 4096) {
            return "medium";
        }
        return "medium";
    } catch (error) {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$error$2d$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["errorLogger"].log3DError(error instanceof Error ? error : new Error(String(error)), "Performance Tier Detection");
        return "medium";
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/three/ThreeScene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThreeScene,
    "useThreeScene",
    ()=>useThreeScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PerspectiveCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/PerspectiveCamera.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$three$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/three-utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
/**
 * Fallback component for devices that don't support WebGL
 */ function WebGLFallback(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "09eb93b137ccd435e79487cb58fb502e5c7c7d00a81e829fd3f8707f03a49394") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "09eb93b137ccd435e79487cb58fb502e5c7c7d00a81e829fd3f8707f03a49394";
    }
    const { children } = t0;
    let t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 text-6xl",
            children: "🎨"
        }, void 0, false, {
            fileName: "[project]/src/components/three/ThreeScene.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "mb-2 text-lg font-semibold text-gray-800",
            children: "3D Graphics Not Available"
        }, void 0, false, {
            fileName: "[project]/src/components/three/ThreeScene.tsx",
            lineNumber: 29,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-600",
            children: "Your device doesn't support WebGL. Enjoying the 2D experience instead!"
        }, void 0, false, {
            fileName: "[project]/src/components/three/ThreeScene.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[1] = t1;
        $[2] = t2;
        $[3] = t3;
    } else {
        t1 = $[1];
        t2 = $[2];
        t3 = $[3];
    }
    let t4;
    if ($[4] !== children) {
        t4 = children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 opacity-50",
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/three/ThreeScene.tsx",
            lineNumber: 41,
            columnNumber: 22
        }, this);
        $[4] = children;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    t1,
                    t2,
                    t3,
                    t4
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/three/ThreeScene.tsx",
                lineNumber: 49,
                columnNumber: 118
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/three/ThreeScene.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[6] = t4;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    return t5;
}
_c = WebGLFallback;
/**
 * Loading component for 3D scene
 */ function SceneLoader() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "09eb93b137ccd435e79487cb58fb502e5c7c7d00a81e829fd3f8707f03a49394") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "09eb93b137ccd435e79487cb58fb502e5c7c7d00a81e829fd3f8707f03a49394";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 animate-spin text-4xl",
                        children: "⚡"
                    }, void 0, false, {
                        fileName: "[project]/src/components/three/ThreeScene.tsx",
                        lineNumber: 71,
                        columnNumber: 147
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600",
                        children: "Loading 3D scene..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/three/ThreeScene.tsx",
                        lineNumber: 71,
                        columnNumber: 198
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/three/ThreeScene.tsx",
                lineNumber: 71,
                columnNumber: 118
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/three/ThreeScene.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c1 = SceneLoader;
/**
 * Default lighting setup based on performance tier
 */ function DefaultLights(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "09eb93b137ccd435e79487cb58fb502e5c7c7d00a81e829fd3f8707f03a49394") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "09eb93b137ccd435e79487cb58fb502e5c7c7d00a81e829fd3f8707f03a49394";
    }
    const { performanceTier } = t0;
    const ambientIntensity = performanceTier === "low" ? 0.8 : 0.6;
    const directionalIntensity = performanceTier === "low" ? 0.5 : 0.8;
    let t1;
    if ($[1] !== ambientIntensity) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
            intensity: ambientIntensity
        }, void 0, false, {
            fileName: "[project]/src/components/three/ThreeScene.tsx",
            lineNumber: 97,
            columnNumber: 10
        }, this);
        $[1] = ambientIntensity;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [
            10,
            10,
            5
        ];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const t3 = performanceTier !== "low";
    const t4 = performanceTier === "high" ? 2048 : 1024;
    const t5 = performanceTier === "high" ? 2048 : 1024;
    let t6;
    if ($[4] !== directionalIntensity || $[5] !== t3 || $[6] !== t4 || $[7] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
            position: t2,
            intensity: directionalIntensity,
            castShadow: t3,
            "shadow-mapSize-width": t4,
            "shadow-mapSize-height": t5
        }, void 0, false, {
            fileName: "[project]/src/components/three/ThreeScene.tsx",
            lineNumber: 115,
            columnNumber: 10
        }, this);
        $[4] = directionalIntensity;
        $[5] = t3;
        $[6] = t4;
        $[7] = t5;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== performanceTier) {
        t7 = performanceTier === "high" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
            position: [
                -10,
                -10,
                -5
            ],
            intensity: 0.3
        }, void 0, false, {
            fileName: "[project]/src/components/three/ThreeScene.tsx",
            lineNumber: 126,
            columnNumber: 40
        }, this);
        $[9] = performanceTier;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== t1 || $[12] !== t6 || $[13] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t1,
                t6,
                t7
            ]
        }, void 0, true);
        $[11] = t1;
        $[12] = t6;
        $[13] = t7;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    return t8;
}
_c2 = DefaultLights;
/**
 * Custom lights component
 */ function CustomLights(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "09eb93b137ccd435e79487cb58fb502e5c7c7d00a81e829fd3f8707f03a49394") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "09eb93b137ccd435e79487cb58fb502e5c7c7d00a81e829fd3f8707f03a49394";
    }
    const { lights } = t0;
    let t1;
    if ($[1] !== lights) {
        t1 = lights.map(_CustomLightsLightsMap);
        $[1] = lights;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: t1
        }, void 0, false);
        $[3] = t1;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    return t2;
}
_c3 = CustomLights;
/**
 * Performance monitor component
 */ function _CustomLightsLightsMap(light, index) {
    switch(light.type){
        case "ambient":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ambientLight", {
                    intensity: light.intensity,
                    color: light.color
                }, index, false, {
                    fileName: "[project]/src/components/three/ThreeScene.tsx",
                    lineNumber: 185,
                    columnNumber: 16
                }, this);
            }
        case "directional":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                    position: light.position || [
                        10,
                        10,
                        5
                    ],
                    intensity: light.intensity,
                    color: light.color,
                    castShadow: true
                }, index, false, {
                    fileName: "[project]/src/components/three/ThreeScene.tsx",
                    lineNumber: 189,
                    columnNumber: 16
                }, this);
            }
        case "point":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointLight", {
                    position: light.position || [
                        0,
                        0,
                        0
                    ],
                    intensity: light.intensity,
                    color: light.color
                }, index, false, {
                    fileName: "[project]/src/components/three/ThreeScene.tsx",
                    lineNumber: 193,
                    columnNumber: 16
                }, this);
            }
        default:
            {
                return null;
            }
    }
}
function PerformanceMonitor() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "09eb93b137ccd435e79487cb58fb502e5c7c7d00a81e829fd3f8707f03a49394") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "09eb93b137ccd435e79487cb58fb502e5c7c7d00a81e829fd3f8707f03a49394";
    }
    const frameCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = performance.now();
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const lastTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(t0);
    const [, setFps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(60);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "PerformanceMonitor[useFrame()]": ()=>{
                frameCount.current = frameCount.current + 1;
                const currentTime = performance.now();
                if (currentTime - lastTime.current >= 1000) {
                    const currentFps = Math.round(frameCount.current * 1000 / (currentTime - lastTime.current));
                    setFps(currentFps);
                    frameCount.current = 0;
                    lastTime.current = currentTime;
                    if (("TURBOPACK compile-time value", "development") === "development" && currentFps < 30) {
                        console.warn(`Low FPS detected: ${currentFps}fps`);
                    }
                }
            }
        })["PerformanceMonitor[useFrame()]"];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])(t1);
    return null;
}
_s(PerformanceMonitor, "nevQ9AVa3iVqS04WH3zdBq+pUhY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c4 = PerformanceMonitor;
/**
 * Responsive canvas component that handles resize events
 */ function ResponsiveCanvas(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(26);
    if ($[0] !== "09eb93b137ccd435e79487cb58fb502e5c7c7d00a81e829fd3f8707f03a49394") {
        for(let $i = 0; $i < 26; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "09eb93b137ccd435e79487cb58fb502e5c7c7d00a81e829fd3f8707f03a49394";
    }
    const { children, camera, lights, controls, performanceTier } = t0;
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            width: 0,
            height: 0
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [, setDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "ResponsiveCanvas[useEffect()]": ()=>{
                const updateDimensions = {
                    "ResponsiveCanvas[useEffect() > updateDimensions]": ()=>{
                        if (canvasRef.current?.parentElement) {
                            const parent = canvasRef.current.parentElement;
                            setDimensions({
                                width: parent.clientWidth,
                                height: parent.clientHeight
                            });
                        }
                    }
                }["ResponsiveCanvas[useEffect() > updateDimensions]"];
                updateDimensions();
                window.addEventListener("resize", updateDimensions);
                return ()=>window.removeEventListener("resize", updateDimensions);
            }
        })["ResponsiveCanvas[useEffect()]"];
        t3 = [];
        $[2] = t2;
        $[3] = t3;
    } else {
        t2 = $[2];
        t3 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    const pixelRatio = performanceTier === "low" ? 1 : Math.min(window.devicePixelRatio, 2);
    const antialias = performanceTier !== "low";
    const shadows = performanceTier === "high";
    const t4 = performanceTier === "high" ? "high-performance" : "default";
    let t5;
    if ($[4] !== antialias || $[5] !== t4) {
        t5 = {
            antialias,
            alpha: true,
            powerPreference: t4
        };
        $[4] = antialias;
        $[5] = t4;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== camera?.position) {
        t6 = camera?.position || [
            0,
            0,
            5
        ];
        $[7] = camera?.position;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    const t7 = camera?.fov || 75;
    let t8;
    if ($[9] !== t6 || $[10] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$PerspectiveCamera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"], {
            makeDefault: true,
            position: t6,
            fov: t7,
            near: 0.1,
            far: 1000
        }, void 0, false, {
            fileName: "[project]/src/components/three/ThreeScene.tsx",
            lineNumber: 331,
            columnNumber: 10
        }, this);
        $[9] = t6;
        $[10] = t7;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== lights || $[13] !== performanceTier) {
        t9 = lights ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomLights, {
            lights: lights
        }, void 0, false, {
            fileName: "[project]/src/components/three/ThreeScene.tsx",
            lineNumber: 340,
            columnNumber: 19
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DefaultLights, {
            performanceTier: performanceTier
        }, void 0, false, {
            fileName: "[project]/src/components/three/ThreeScene.tsx",
            lineNumber: 340,
            columnNumber: 54
        }, this);
        $[12] = lights;
        $[13] = performanceTier;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] !== controls) {
        t10 = controls && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
            enablePan: true,
            enableZoom: true,
            enableRotate: true,
            maxPolarAngle: Math.PI / 2,
            minDistance: 2,
            maxDistance: 20
        }, void 0, false, {
            fileName: "[project]/src/components/three/ThreeScene.tsx",
            lineNumber: 349,
            columnNumber: 23
        }, this);
        $[15] = controls;
        $[16] = t10;
    } else {
        t10 = $[16];
    }
    let t11;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PerformanceMonitor, {}, void 0, false, {
            fileName: "[project]/src/components/three/ThreeScene.tsx",
            lineNumber: 357,
            columnNumber: 11
        }, this);
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    let t12;
    if ($[18] !== children || $[19] !== pixelRatio || $[20] !== shadows || $[21] !== t10 || $[22] !== t5 || $[23] !== t8 || $[24] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            ref: canvasRef,
            dpr: pixelRatio,
            gl: t5,
            shadows: shadows,
            className: "h-full w-full",
            children: [
                t8,
                t9,
                t10,
                t11,
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/three/ThreeScene.tsx",
            lineNumber: 364,
            columnNumber: 11
        }, this);
        $[18] = children;
        $[19] = pixelRatio;
        $[20] = shadows;
        $[21] = t10;
        $[22] = t5;
        $[23] = t8;
        $[24] = t9;
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    return t12;
}
_s1(ResponsiveCanvas, "aWtVrdwQmHljz1hUA9h1k9Q24S0=");
_c5 = ResponsiveCanvas;
function ThreeScene(t0) {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "09eb93b137ccd435e79487cb58fb502e5c7c7d00a81e829fd3f8707f03a49394") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "09eb93b137ccd435e79487cb58fb502e5c7c7d00a81e829fd3f8707f03a49394";
    }
    const { children, camera, lights, controls: t1 } = t0;
    const controls = t1 === undefined ? false : t1;
    const [webglSupported, setWebglSupported] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [performanceTier, setPerformanceTier] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("medium");
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "ThreeScene[useEffect()]": ()=>{
                const supported = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$three$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkWebGLSupport"])();
                setWebglSupported(supported);
                if (supported) {
                    const tier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$three$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPerformanceTier"])();
                    setPerformanceTier(tier);
                    if ("TURBOPACK compile-time truthy", 1) {
                        console.log(`3D Performance tier: ${tier}`);
                    }
                }
            }
        })["ThreeScene[useEffect()]"];
        t3 = [];
        $[1] = t2;
        $[2] = t3;
    } else {
        t2 = $[1];
        t3 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    if (webglSupported === null) {
        let t4;
        if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SceneLoader, {}, void 0, false, {
                fileName: "[project]/src/components/three/ThreeScene.tsx",
                lineNumber: 426,
                columnNumber: 12
            }, this);
            $[3] = t4;
        } else {
            t4 = $[3];
        }
        return t4;
    }
    if (!webglSupported) {
        let t4;
        if ($[4] !== children) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WebGLFallback, {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/three/ThreeScene.tsx",
                lineNumber: 436,
                columnNumber: 12
            }, this);
            $[4] = children;
            $[5] = t4;
        } else {
            t4 = $[5];
        }
        return t4;
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SceneLoader, {}, void 0, false, {
            fileName: "[project]/src/components/three/ThreeScene.tsx",
            lineNumber: 446,
            columnNumber: 10
        }, this);
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== camera || $[8] !== children || $[9] !== controls || $[10] !== lights || $[11] !== performanceTier) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: t4,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResponsiveCanvas, {
                    camera: camera,
                    lights: lights,
                    controls: controls,
                    performanceTier: performanceTier,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/three/ThreeScene.tsx",
                    lineNumber: 453,
                    columnNumber: 65
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/three/ThreeScene.tsx",
                lineNumber: 453,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/three/ThreeScene.tsx",
            lineNumber: 453,
            columnNumber: 10
        }, this);
        $[7] = camera;
        $[8] = children;
        $[9] = controls;
        $[10] = lights;
        $[11] = performanceTier;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    return t5;
}
_s2(ThreeScene, "EgtF1TuBJmZl8nEYZun+cTqZV7w=");
_c6 = ThreeScene;
function useThreeScene() {
    return {
        checkWebGLSupport: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$three$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkWebGLSupport"],
        getPerformanceTier: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$three$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPerformanceTier"]
    };
}
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "WebGLFallback");
__turbopack_context__.k.register(_c1, "SceneLoader");
__turbopack_context__.k.register(_c2, "DefaultLights");
__turbopack_context__.k.register(_c3, "CustomLights");
__turbopack_context__.k.register(_c4, "PerformanceMonitor");
__turbopack_context__.k.register(_c5, "ResponsiveCanvas");
__turbopack_context__.k.register(_c6, "ThreeScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/three/FloatingObjects.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FloatingObjectsPresets",
    ()=>FloatingObjectsPresets,
    "default",
    ()=>FloatingObjects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/shapes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$three$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/three-utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function FloatingObject(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "51f5e844454bdc543b14c015227de4ff8dc3bb6d39b63774228471603b9cead2") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51f5e844454bdc543b14c015227de4ff8dc3bb6d39b63774228471603b9cead2";
    }
    const { shape, color, position, animationSpeed, index, mousePosition } = t0;
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    if ($[1] !== index) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$three$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFloatingAnimation"])(index);
        $[1] = index;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$three$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRotationAnimation"])();
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== position || $[5] !== t1) {
        t3 = {
            floating: t1,
            rotation: t2,
            initialPosition: position,
            scale: 0.5 + Math.random() * 0.5
        };
        $[4] = position;
        $[5] = t1;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const animationParams = t3;
    let t4;
    if ($[7] !== color) {
        t4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$three$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCartoonMaterial"])(color);
        $[7] = color;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const material = t4;
    let t5;
    if ($[9] !== animationParams || $[10] !== animationSpeed || $[11] !== mousePosition) {
        t5 = ({
            "FloatingObject[useFrame()]": (state)=>{
                if (!meshRef.current) {
                    return;
                }
                const time = state.clock.elapsedTime * animationSpeed;
                const floatingY = Math.sin(time * animationParams.floating.frequency + animationParams.floating.offset) * animationParams.floating.amplitude;
                const mouseInfluence = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$three$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateMouseInfluence"])(mousePosition, animationParams.initialPosition, 0.3);
                meshRef.current.position.set(animationParams.initialPosition[0] + mouseInfluence.x, animationParams.initialPosition[1] + floatingY + mouseInfluence.y, animationParams.initialPosition[2] + mouseInfluence.z);
                meshRef.current.rotation.x = meshRef.current.rotation.x + animationParams.rotation.x;
                meshRef.current.rotation.y = meshRef.current.rotation.y + animationParams.rotation.y;
                meshRef.current.rotation.z = meshRef.current.rotation.z + animationParams.rotation.z;
                const scaleAnimation = 1 + Math.sin(time * 0.5) * 0.1;
                meshRef.current.scale.setScalar(animationParams.scale * scaleAnimation);
            }
        })["FloatingObject[useFrame()]"];
        $[9] = animationParams;
        $[10] = animationSpeed;
        $[11] = mousePosition;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])(t5);
    let t6;
    if ($[13] !== material || $[14] !== shape) {
        const renderShape = {
            "FloatingObject[renderShape]": ()=>{
                const commonProps = {
                    ref: meshRef,
                    material,
                    castShadow: true,
                    receiveShadow: true
                };
                switch(shape){
                    case "sphere":
                        {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sphere"], {
                                args: [
                                    1,
                                    32,
                                    32
                                ],
                                ...commonProps
                            }, void 0, false, {
                                fileName: "[project]/src/components/three/FloatingObjects.tsx",
                                lineNumber: 117,
                                columnNumber: 22
                            }, this);
                        }
                    case "box":
                        {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                                args: [
                                    1,
                                    1,
                                    1
                                ],
                                ...commonProps
                            }, void 0, false, {
                                fileName: "[project]/src/components/three/FloatingObjects.tsx",
                                lineNumber: 121,
                                columnNumber: 22
                            }, this);
                        }
                    case "torus":
                        {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Torus"], {
                                args: [
                                    0.7,
                                    0.3,
                                    16,
                                    100
                                ],
                                ...commonProps
                            }, void 0, false, {
                                fileName: "[project]/src/components/three/FloatingObjects.tsx",
                                lineNumber: 125,
                                columnNumber: 22
                            }, this);
                        }
                    default:
                        {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sphere"], {
                                args: [
                                    1,
                                    32,
                                    32
                                ],
                                ...commonProps
                            }, void 0, false, {
                                fileName: "[project]/src/components/three/FloatingObjects.tsx",
                                lineNumber: 129,
                                columnNumber: 22
                            }, this);
                        }
                }
            }
        }["FloatingObject[renderShape]"];
        t6 = renderShape();
        $[13] = material;
        $[14] = shape;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    return t6;
}
_s(FloatingObject, "/vg1AmA8+P3+Fj0/y210JTVKtL0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = FloatingObject;
/**
 * Mouse tracking component
 */ function MouseTracker(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "51f5e844454bdc543b14c015227de4ff8dc3bb6d39b63774228471603b9cead2") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51f5e844454bdc543b14c015227de4ff8dc3bb6d39b63774228471603b9cead2";
    }
    const { onMouseMove } = t0;
    const { size } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    let t1;
    let t2;
    if ($[1] !== onMouseMove || $[2] !== size) {
        t1 = ({
            "MouseTracker[useEffect()]": ()=>{
                const handleMouseMove = {
                    "MouseTracker[useEffect() > handleMouseMove]": (event)=>{
                        const x = event.clientX / size.width * 2 - 1;
                        const y = -(event.clientY / size.height) * 2 + 1;
                        onMouseMove({
                            x,
                            y
                        });
                    }
                }["MouseTracker[useEffect() > handleMouseMove]"];
                window.addEventListener("mousemove", handleMouseMove);
                return ()=>window.removeEventListener("mousemove", handleMouseMove);
            }
        })["MouseTracker[useEffect()]"];
        t2 = [
            size,
            onMouseMove
        ];
        $[1] = onMouseMove;
        $[2] = size;
        $[3] = t1;
        $[4] = t2;
    } else {
        t1 = $[3];
        t2 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    return null;
}
_s1(MouseTracker, "XfpT+HpEKpjs5Pd9zxDsfpttzqE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"]
    ];
});
_c1 = MouseTracker;
function FloatingObjects({ count, shapes, colors, animationSpeed = 1 }) {
    _s2();
    const [mousePosition, setMousePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    // Generate objects configuration
    const objects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FloatingObjects.useMemo[objects]": ()=>{
            return Array.from({
                length: count
            }, {
                "FloatingObjects.useMemo[objects]": (_, index)=>({
                        id: index,
                        shape: shapes[index % shapes.length],
                        color: colors[index % colors.length],
                        position: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$three$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomPosition"])({
                            x: 8,
                            y: 6,
                            z: 4
                        }),
                        rotation: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$three$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomRotation"])()
                    })
            }["FloatingObjects.useMemo[objects]"]);
        }
    }["FloatingObjects.useMemo[objects]"], [
        count,
        shapes,
        colors
    ]);
    // Handle mouse movement with throttling for performance
    const handleMouseMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FloatingObjects.useMemo[handleMouseMove]": ()=>{
            let timeoutId;
            return ({
                "FloatingObjects.useMemo[handleMouseMove]": (position)=>{
                    clearTimeout(timeoutId);
                    timeoutId = setTimeout({
                        "FloatingObjects.useMemo[handleMouseMove]": ()=>{
                            setMousePosition(position);
                        }
                    }["FloatingObjects.useMemo[handleMouseMove]"], 16); // ~60fps throttling
                }
            })["FloatingObjects.useMemo[handleMouseMove]"];
        }
    }["FloatingObjects.useMemo[handleMouseMove]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MouseTracker, {
                onMouseMove: handleMouseMove
            }, void 0, false, {
                fileName: "[project]/src/components/three/FloatingObjects.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this),
            objects.map((obj)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FloatingObject, {
                    shape: obj.shape,
                    color: obj.color,
                    position: obj.position,
                    animationSpeed: animationSpeed,
                    index: obj.id,
                    mousePosition: mousePosition
                }, obj.id, false, {
                    fileName: "[project]/src/components/three/FloatingObjects.tsx",
                    lineNumber: 236,
                    columnNumber: 27
                }, this))
        ]
    }, void 0, true);
}
_s2(FloatingObjects, "JL4VxVpKsPvvYvamp6O1BB1HayU=");
_c2 = FloatingObjects;
const FloatingObjectsPresets = {
    hero: {
        count: 8,
        shapes: [
            "sphere",
            "box",
            "torus"
        ],
        colors: [
            "#3b82f6",
            "#8b5cf6",
            "#f59e0b",
            "#10b981"
        ],
        animationSpeed: 0.8
    },
    background: {
        count: 12,
        shapes: [
            "sphere",
            "torus"
        ],
        colors: [
            "#3b82f6",
            "#8b5cf6",
            "#f59e0b"
        ],
        animationSpeed: 0.5
    },
    minimal: {
        count: 4,
        shapes: [
            "sphere"
        ],
        colors: [
            "#3b82f6",
            "#8b5cf6"
        ],
        animationSpeed: 1.2
    }
};
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "FloatingObject");
__turbopack_context__.k.register(_c1, "MouseTracker");
__turbopack_context__.k.register(_c2, "FloatingObjects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutHero",
    ()=>AboutHero,
    "ContactHero",
    ()=>ContactHero,
    "HomeHero",
    ()=>HomeHero,
    "ProjectsHero",
    ()=>ProjectsHero,
    "ServicesHero",
    ()=>ServicesHero,
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/animations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$parallax$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/parallax.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$ThreeScene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/three/ThreeScene.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$FloatingObjects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/three/FloatingObjects.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
/**
 * Mouse parallax hook for smooth mouse tracking
 */ function useMouseParallax(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "5884f4c0950e3a836e0a0af3b7bf478bc5beec5e1620cc7f3bdaa9130f528ea2") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5884f4c0950e3a836e0a0af3b7bf478bc5beec5e1620cc7f3bdaa9130f528ea2";
    }
    const intensity = t0 === undefined ? 0.1 : t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            x: 0,
            y: 0
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [mousePosition, setMousePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [elementRect, setElementRect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t2;
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "useMouseParallax[useEffect()]": ()=>{
                const updateRect = {
                    "useMouseParallax[useEffect() > updateRect]": ()=>{
                        if (containerRef.current) {
                            setElementRect(containerRef.current.getBoundingClientRect());
                        }
                    }
                }["useMouseParallax[useEffect() > updateRect]"];
                updateRect();
                window.addEventListener("resize", updateRect);
                return ()=>window.removeEventListener("resize", updateRect);
            }
        })["useMouseParallax[useEffect()]"];
        t3 = [];
        $[2] = t2;
        $[3] = t3;
    } else {
        t2 = $[2];
        t3 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    let t5;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "useMouseParallax[useEffect()]": ()=>{
                const handleMouseMove = {
                    "useMouseParallax[useEffect() > handleMouseMove]": (event)=>{
                        setMousePosition({
                            x: event.clientX,
                            y: event.clientY
                        });
                    }
                }["useMouseParallax[useEffect() > handleMouseMove]"];
                window.addEventListener("mousemove", handleMouseMove);
                return ()=>window.removeEventListener("mousemove", handleMouseMove);
            }
        })["useMouseParallax[useEffect()]"];
        t5 = [];
        $[4] = t4;
        $[5] = t5;
    } else {
        t4 = $[4];
        t5 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    bb0: {
        if (!elementRect) {
            let t7;
            if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
                t7 = {
                    x: 0,
                    y: 0
                };
                $[6] = t7;
            } else {
                t7 = $[6];
            }
            t6 = t7;
            break bb0;
        }
        let t7;
        if ($[7] !== elementRect || $[8] !== intensity || $[9] !== mousePosition.x || $[10] !== mousePosition.y) {
            t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$parallax$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateMouseParallax"])(mousePosition.x, mousePosition.y, elementRect, intensity);
            $[7] = elementRect;
            $[8] = intensity;
            $[9] = mousePosition.x;
            $[10] = mousePosition.y;
            $[11] = t7;
        } else {
            t7 = $[11];
        }
        t6 = t7;
    }
    const parallaxOffset = t6;
    let t7;
    if ($[12] !== parallaxOffset) {
        t7 = {
            containerRef,
            parallaxOffset
        };
        $[12] = parallaxOffset;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    return t7;
}
_s(useMouseParallax, "nif9eupu+VEiZ5tgKw1T8U6lB18=");
/**
 * 3D Background Scene Component
 */ function Hero3DBackground() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "5884f4c0950e3a836e0a0af3b7bf478bc5beec5e1620cc7f3bdaa9130f528ea2") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5884f4c0950e3a836e0a0af3b7bf478bc5beec5e1620cc7f3bdaa9130f528ea2";
    }
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            position: [
                0,
                0,
                8
            ],
            fov: 75
        };
        t1 = {
            type: "ambient",
            intensity: 0.6
        };
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            type: "directional",
            position: [
                10,
                10,
                5
            ],
            intensity: 0.8
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$ThreeScene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                camera: t0,
                lights: [
                    t1,
                    t2,
                    {
                        type: "point",
                        position: [
                            -10,
                            -10,
                            -5
                        ],
                        intensity: 0.3
                    }
                ],
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$FloatingObjects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$FloatingObjects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingObjectsPresets"].hero
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 202,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 198,
                columnNumber: 60
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 198,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
}
_c = Hero3DBackground;
function CTAButton(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "5884f4c0950e3a836e0a0af3b7bf478bc5beec5e1620cc7f3bdaa9130f528ea2") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5884f4c0950e3a836e0a0af3b7bf478bc5beec5e1620cc7f3bdaa9130f528ea2";
    }
    const { text, href, variant: t1, className } = t0;
    const variant = t1 === undefined ? "primary" : t1;
    let T0;
    let t2;
    let t3;
    if ($[1] !== className || $[2] !== href || $[3] !== variant) {
        const baseClasses = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 text-base sm:text-lg font-semibold", "rounded-xl sm:rounded-2xl transition-all duration-300 transform-gpu", "focus:outline-none focus:ring-4 focus:ring-offset-2", "active:scale-95 hover:scale-105 hover:-translate-y-1", "w-full sm:w-auto", className);
        const variantClasses = {
            primary: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-white shadow-lg hover:shadow-xl", "bg-gradient-to-r from-primary-500 to-secondary-500", "hover:from-primary-600 hover:to-secondary-600", "focus:ring-primary-500/50"),
            outline: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-primary-600 border-2 border-primary-500 bg-white/80 backdrop-blur-sm", "hover:bg-primary-50 hover:border-primary-600", "focus:ring-primary-500/50"),
            ghost: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-primary-600 bg-white/20 backdrop-blur-sm", "hover:bg-white/30 hover:text-primary-700", "focus:ring-primary-500/50")
        };
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a;
        t2 = href;
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(baseClasses, variantClasses[variant]);
        $[1] = className;
        $[2] = href;
        $[3] = variant;
        $[4] = T0;
        $[5] = t2;
        $[6] = t3;
    } else {
        T0 = $[4];
        t2 = $[5];
        t3 = $[6];
    }
    let t4;
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            scale: 1.05,
            y: -2
        };
        t5 = {
            scale: 0.96
        };
        $[7] = t4;
        $[8] = t5;
    } else {
        t4 = $[7];
        t5 = $[8];
    }
    const t6 = `${text} - Call to action button`;
    let t7;
    if ($[9] !== T0 || $[10] !== t2 || $[11] !== t3 || $[12] !== t6 || $[13] !== text) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            href: t2,
            className: t3,
            whileHover: t4,
            whileTap: t5,
            transition: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitions"].fast,
            "aria-label": t6,
            children: text
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 277,
            columnNumber: 10
        }, this);
        $[9] = T0;
        $[10] = t2;
        $[11] = t3;
        $[12] = t6;
        $[13] = text;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    return t7;
}
_c1 = CTAButton;
function Hero(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(74);
    if ($[0] !== "5884f4c0950e3a836e0a0af3b7bf478bc5beec5e1620cc7f3bdaa9130f528ea2") {
        for(let $i = 0; $i < 74; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5884f4c0950e3a836e0a0af3b7bf478bc5beec5e1620cc7f3bdaa9130f528ea2";
    }
    const { title, subtitle, backgroundScene: CustomBackgroundScene, ctaButton, className, enable3D: t1, enableParallax: t2, gradient, secondaryButton, height: t3, textAlign: t4 } = t0;
    const enable3D = t1 === undefined ? true : t1;
    const enableParallax = t2 === undefined ? true : t2;
    const height = t3 === undefined ? "screen" : t3;
    const textAlign = t4 === undefined ? "center" : t4;
    const { containerRef, parallaxOffset } = useMouseParallax(enableParallax ? 0.05 : 0);
    const { scrollY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])();
    let t5;
    let t6;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = [
            0,
            500
        ];
        t6 = [
            0,
            -150
        ];
        $[1] = t5;
        $[2] = t6;
    } else {
        t5 = $[1];
        t6 = $[2];
    }
    const yTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollY, t5, t6);
    let t7;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            stiffness: 100,
            damping: 30
        };
        $[3] = t7;
    } else {
        t7 = $[3];
    }
    const smoothY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"])(yTransform, t7);
    let T0;
    let t10;
    let t11;
    let t12;
    let t13;
    let t14;
    let t15;
    let t8;
    let t9;
    if ($[4] !== CustomBackgroundScene || $[5] !== className || $[6] !== containerRef || $[7] !== enable3D || $[8] !== gradient || $[9] !== height || $[10] !== parallaxOffset.x || $[11] !== parallaxOffset.y || $[12] !== textAlign) {
        const heightClasses = {
            screen: "min-h-screen",
            large: "min-h-[80vh]",
            medium: "min-h-[60vh]"
        };
        const alignmentClasses = {
            left: "text-left items-start",
            center: "text-center items-center"
        };
        const backgroundGradient = gradient || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["theme"].gradients.hero;
        t9 = containerRef;
        t10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex items-center justify-center overflow-hidden", heightClasses[height], className);
        if ($[22] !== backgroundGradient) {
            t11 = {
                background: backgroundGradient
            };
            $[22] = backgroundGradient;
            $[23] = t11;
        } else {
            t11 = $[23];
        }
        t12 = "Hero section";
        t13 = "banner";
        if ($[24] !== CustomBackgroundScene || $[25] !== enable3D || $[26] !== parallaxOffset.x || $[27] !== parallaxOffset.y) {
            t14 = enable3D && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 z-0",
                style: {
                    x: parallaxOffset.x * 0.5,
                    y: parallaxOffset.y * 0.5
                },
                children: CustomBackgroundScene ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomBackgroundScene, {}, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 394,
                    columnNumber: 35
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Hero3DBackground, {}, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 394,
                    columnNumber: 63
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 391,
                columnNumber: 25
            }, this);
            $[24] = CustomBackgroundScene;
            $[25] = enable3D;
            $[26] = parallaxOffset.x;
            $[27] = parallaxOffset.y;
            $[28] = t14;
        } else {
            t14 = $[28];
        }
        if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 z-10"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 404,
                columnNumber: 13
            }, this);
            $[29] = t15;
        } else {
            t15 = $[29];
        }
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div;
        t8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative z-20 flex flex-col px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full", alignmentClasses[textAlign]);
        $[4] = CustomBackgroundScene;
        $[5] = className;
        $[6] = containerRef;
        $[7] = enable3D;
        $[8] = gradient;
        $[9] = height;
        $[10] = parallaxOffset.x;
        $[11] = parallaxOffset.y;
        $[12] = textAlign;
        $[13] = T0;
        $[14] = t10;
        $[15] = t11;
        $[16] = t12;
        $[17] = t13;
        $[18] = t14;
        $[19] = t15;
        $[20] = t8;
        $[21] = t9;
    } else {
        T0 = $[13];
        t10 = $[14];
        t11 = $[15];
        t12 = $[16];
        t13 = $[17];
        t14 = $[18];
        t15 = $[19];
        t8 = $[20];
        t9 = $[21];
    }
    let t16;
    if ($[30] !== parallaxOffset.y) {
        t16 = ({
            "Hero[useTransform()]": (value)=>value + parallaxOffset.y
        })["Hero[useTransform()]"];
        $[30] = parallaxOffset.y;
        $[31] = t16;
    } else {
        t16 = $[31];
    }
    const t17 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(smoothY, t16);
    let t18;
    if ($[32] !== parallaxOffset.x || $[33] !== t17) {
        t18 = {
            y: t17,
            x: parallaxOffset.x
        };
        $[32] = parallaxOffset.x;
        $[33] = t17;
        $[34] = t18;
    } else {
        t18 = $[34];
    }
    let t19;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = {
            once: true,
            margin: "-100px"
        };
        $[35] = t19;
    } else {
        t19 = $[35];
    }
    const t20 = textAlign === "center" ? "max-w-5xl" : "max-w-4xl";
    let t21;
    if ($[36] !== t20) {
        t21 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl", "font-bold leading-tight tracking-tight", "text-white drop-shadow-lg", "mb-4 sm:mb-5 md:mb-6 lg:mb-8", t20);
        $[36] = t20;
        $[37] = t21;
    } else {
        t21 = $[37];
    }
    let t22;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = {
            textShadow: "0 4px 20px rgba(0, 0, 0, 0.3)"
        };
        $[38] = t22;
    } else {
        t22 = $[38];
    }
    let t23;
    if ($[39] !== t21 || $[40] !== title) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
            className: t21,
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroText"],
            style: t22,
            children: title
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 493,
            columnNumber: 11
        }, this);
        $[39] = t21;
        $[40] = title;
        $[41] = t23;
    } else {
        t23 = $[41];
    }
    const t24 = textAlign === "center" ? "max-w-3xl" : "max-w-2xl";
    let t25;
    if ($[42] !== t24) {
        t25 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl", "text-white/90 leading-relaxed", "mb-6 sm:mb-8 md:mb-10 lg:mb-12", t24);
        $[42] = t24;
        $[43] = t25;
    } else {
        t25 = $[43];
    }
    let t26;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = {
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.2)"
        };
        $[44] = t26;
    } else {
        t26 = $[44];
    }
    let t27;
    if ($[45] !== subtitle || $[46] !== t25) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
            className: t25,
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroSubtext"],
            style: t26,
            children: subtitle
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 520,
            columnNumber: 11
        }, this);
        $[45] = subtitle;
        $[46] = t25;
        $[47] = t27;
    } else {
        t27 = $[47];
    }
    let t28;
    if ($[48] !== ctaButton || $[49] !== secondaryButton || $[50] !== textAlign) {
        t28 = (ctaButton || secondaryButton) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6", textAlign === "center" ? "justify-center" : "justify-start"),
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
            children: [
                ctaButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CTAButton, {
                    text: ctaButton.text,
                    href: ctaButton.href,
                    variant: "primary"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 529,
                    columnNumber: 223
                }, this),
                secondaryButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CTAButton, {
                    text: secondaryButton.text,
                    href: secondaryButton.href,
                    variant: secondaryButton.variant || "outline"
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 529,
                    columnNumber: 319
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 529,
            columnNumber: 45
        }, this);
        $[48] = ctaButton;
        $[49] = secondaryButton;
        $[50] = textAlign;
        $[51] = t28;
    } else {
        t28 = $[51];
    }
    let t29;
    if ($[52] !== T0 || $[53] !== t18 || $[54] !== t23 || $[55] !== t27 || $[56] !== t28 || $[57] !== t8) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            className: t8,
            style: t18,
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"],
            initial: "initial",
            animate: "animate",
            viewport: t19,
            children: [
                t23,
                t27,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 539,
            columnNumber: 11
        }, this);
        $[52] = T0;
        $[53] = t18;
        $[54] = t23;
        $[55] = t27;
        $[56] = t28;
        $[57] = t8;
        $[58] = t29;
    } else {
        t29 = $[58];
    }
    let t30;
    let t31;
    let t32;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = {
            opacity: 0,
            y: 20
        };
        t31 = {
            opacity: 1,
            y: 0
        };
        t32 = {
            delay: 1.5,
            duration: 0.6
        };
        $[59] = t30;
        $[60] = t31;
        $[61] = t32;
    } else {
        t30 = $[59];
        t31 = $[60];
        t32 = $[61];
    }
    let t33;
    let t34;
    if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = {
            y: [
                0,
                8,
                0
            ]
        };
        t34 = {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        };
        $[62] = t33;
        $[63] = t34;
    } else {
        t33 = $[62];
        t34 = $[63];
    }
    let t35;
    if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20",
            initial: t30,
            animate: t31,
            transition: t32,
            "aria-label": "Scroll down indicator",
            role: "img",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "w-6 h-10 border-2 border-white/50 rounded-full flex justify-center",
                animate: t33,
                transition: t34,
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "w-1 h-3 bg-white/70 rounded-full mt-2",
                    animate: {
                        scaleY: [
                            1,
                            0.5,
                            1
                        ]
                    },
                    transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 593,
                    columnNumber: 326
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 593,
                columnNumber: 185
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 593,
            columnNumber: 11
        }, this);
        $[64] = t35;
    } else {
        t35 = $[64];
    }
    let t36;
    if ($[65] !== t10 || $[66] !== t11 || $[67] !== t12 || $[68] !== t13 || $[69] !== t14 || $[70] !== t15 || $[71] !== t29 || $[72] !== t9) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            ref: t9,
            className: t10,
            style: t11,
            "aria-label": t12,
            role: t13,
            children: [
                t14,
                t15,
                t29,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 606,
            columnNumber: 11
        }, this);
        $[65] = t10;
        $[66] = t11;
        $[67] = t12;
        $[68] = t13;
        $[69] = t14;
        $[70] = t15;
        $[71] = t29;
        $[72] = t9;
        $[73] = t36;
    } else {
        t36 = $[73];
    }
    return t36;
}
_s1(Hero, "0U6gZDpmnzdxXLDOQDDmQ7TZT4w=", false, function() {
    return [
        useMouseParallax,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$spring$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSpring"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c2 = Hero;
const HomeHero = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "5884f4c0950e3a836e0a0af3b7bf478bc5beec5e1620cc7f3bdaa9130f528ea2") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5884f4c0950e3a836e0a0af3b7bf478bc5beec5e1620cc7f3bdaa9130f528ea2";
    }
    let t0;
    if ($[1] !== props) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Hero, {
            ...props,
            title: "Welcome to Letlotlo International",
            subtitle: "Innovative solutions for a connected world",
            height: "screen",
            textAlign: "center"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 637,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = props;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    return t0;
};
_c3 = HomeHero;
const AboutHero = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "5884f4c0950e3a836e0a0af3b7bf478bc5beec5e1620cc7f3bdaa9130f528ea2") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5884f4c0950e3a836e0a0af3b7bf478bc5beec5e1620cc7f3bdaa9130f528ea2";
    }
    let t0;
    if ($[1] !== props) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Hero, {
            ...props,
            title: "Our Story",
            subtitle: "Building the future through innovation and collaboration",
            height: "large",
            textAlign: "left"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 657,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = props;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    return t0;
};
_c4 = AboutHero;
const ServicesHero = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "5884f4c0950e3a836e0a0af3b7bf478bc5beec5e1620cc7f3bdaa9130f528ea2") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5884f4c0950e3a836e0a0af3b7bf478bc5beec5e1620cc7f3bdaa9130f528ea2";
    }
    let t0;
    if ($[1] !== props) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Hero, {
            ...props,
            title: "Our Services",
            subtitle: "Comprehensive solutions tailored to your needs",
            height: "large",
            textAlign: "center"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 677,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = props;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    return t0;
};
_c5 = ServicesHero;
const ProjectsHero = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "5884f4c0950e3a836e0a0af3b7bf478bc5beec5e1620cc7f3bdaa9130f528ea2") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5884f4c0950e3a836e0a0af3b7bf478bc5beec5e1620cc7f3bdaa9130f528ea2";
    }
    let t0;
    if ($[1] !== props) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Hero, {
            ...props,
            title: "Our Work",
            subtitle: "Showcasing innovation and excellence in every project",
            height: "large",
            textAlign: "center"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 697,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = props;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    return t0;
};
_c6 = ProjectsHero;
const ContactHero = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "5884f4c0950e3a836e0a0af3b7bf478bc5beec5e1620cc7f3bdaa9130f528ea2") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5884f4c0950e3a836e0a0af3b7bf478bc5beec5e1620cc7f3bdaa9130f528ea2";
    }
    let t0;
    if ($[1] !== props) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Hero, {
            ...props,
            title: "Get In Touch",
            subtitle: "Let's discuss how we can help bring your vision to life",
            height: "medium",
            textAlign: "center"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/Hero.tsx",
            lineNumber: 717,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = props;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    return t0;
};
_c7 = ContactHero;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "Hero3DBackground");
__turbopack_context__.k.register(_c1, "CTAButton");
__turbopack_context__.k.register(_c2, "Hero");
__turbopack_context__.k.register(_c3, "HomeHero");
__turbopack_context__.k.register(_c4, "AboutHero");
__turbopack_context__.k.register(_c5, "ServicesHero");
__turbopack_context__.k.register(_c6, "ProjectsHero");
__turbopack_context__.k.register(_c7, "ContactHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
/**
 * Section components for the Letlotlo International website
 * These components provide reusable section layouts with animations and effects
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$ParallaxSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/ParallaxSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/Hero.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/three/TestScene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TestScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$FloatingObjects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/three/FloatingObjects.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function TestScene() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "e44de60cd01a293962751b7ab9136d2696d5043cfb3c7ee01092b317960755b1") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e44de60cd01a293962751b7ab9136d2696d5043cfb3c7ee01092b317960755b1";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$FloatingObjects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$FloatingObjects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingObjectsPresets"].hero
            }, void 0, false, {
                fileName: "[project]/src/components/three/TestScene.tsx",
                lineNumber: 20,
                columnNumber: 12
            }, this)
        }, void 0, false);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = TestScene;
var _c;
__turbopack_context__.k.register(_c, "TestScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/three/BackgroundShapes.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BackgroundShapesPresets",
    ()=>BackgroundShapesPresets,
    "default",
    ()=>BackgroundShapes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/drei/core/shapes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$three$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/three-utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function BackgroundShape(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "c579d55d0f86c33533ab91602db40525a4481ddffe1f9377bb3317e73dcefdc5") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c579d55d0f86c33533ab91602db40525a4481ddffe1f9377bb3317e73dcefdc5";
    }
    const { shape, color, position, animationSpeed, index, opacity, performanceTier } = t0;
    const meshRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const t1 = index * 0.8;
    let t2;
    if ($[1] !== t1) {
        t2 = {
            amplitude: 0.2 + Math.random() * 0.3,
            frequency: 0.2 + Math.random() * 0.3,
            offset: t1
        };
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            x: (Math.random() - 0.5) * 0.005,
            y: (Math.random() - 0.5) * 0.005,
            z: (Math.random() - 0.5) * 0.005
        };
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            x: (Math.random() - 0.5) * 0.1,
            z: (Math.random() - 0.5) * 0.1
        };
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== position || $[6] !== t2) {
        t5 = {
            floating: t2,
            rotation: t3,
            initialPosition: position,
            scale: 0.3 + Math.random() * 0.4,
            drift: t4
        };
        $[5] = position;
        $[6] = t2;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    const animationParams = t5;
    let mat;
    if ($[8] !== color || $[9] !== opacity) {
        mat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$three$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStandardMaterial"])(color, 0.8, 0.1);
        mat.transparent = true;
        mat.opacity = opacity * (0.3 + Math.random() * 0.4);
        $[8] = color;
        $[9] = opacity;
        $[10] = mat;
    } else {
        mat = $[10];
    }
    const material = mat;
    let t6;
    if ($[11] !== animationParams || $[12] !== animationSpeed) {
        t6 = ({
            "BackgroundShape[useFrame()]": (state)=>{
                if (!meshRef.current) {
                    return;
                }
                const time = state.clock.elapsedTime * animationSpeed;
                const floatingY = Math.sin(time * animationParams.floating.frequency + animationParams.floating.offset) * animationParams.floating.amplitude;
                const driftX = Math.sin(time * 0.1) * animationParams.drift.x;
                const driftZ = Math.cos(time * 0.15) * animationParams.drift.z;
                meshRef.current.position.set(animationParams.initialPosition[0] + driftX, animationParams.initialPosition[1] + floatingY, animationParams.initialPosition[2] + driftZ);
                meshRef.current.rotation.x = meshRef.current.rotation.x + animationParams.rotation.x;
                meshRef.current.rotation.y = meshRef.current.rotation.y + animationParams.rotation.y;
                meshRef.current.rotation.z = meshRef.current.rotation.z + animationParams.rotation.z;
                const scaleAnimation = 1 + Math.sin(time * 0.3) * 0.05;
                meshRef.current.scale.setScalar(animationParams.scale * scaleAnimation);
            }
        })["BackgroundShape[useFrame()]"];
        $[11] = animationParams;
        $[12] = animationSpeed;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])(t6);
    let t7;
    if ($[14] !== material || $[15] !== performanceTier || $[16] !== shape) {
        const renderShape = {
            "BackgroundShape[renderShape]": ()=>{
                const commonProps = {
                    ref: meshRef,
                    material,
                    castShadow: performanceTier === "high",
                    receiveShadow: false
                };
                const segments = performanceTier === "low" ? 8 : performanceTier === "medium" ? 16 : 32;
                switch(shape){
                    case "sphere":
                        {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sphere"], {
                                args: [
                                    1,
                                    segments,
                                    segments
                                ],
                                ...commonProps
                            }, void 0, false, {
                                fileName: "[project]/src/components/three/BackgroundShapes.tsx",
                                lineNumber: 163,
                                columnNumber: 22
                            }, this);
                        }
                    case "box":
                        {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                                args: [
                                    1,
                                    1,
                                    1
                                ],
                                ...commonProps
                            }, void 0, false, {
                                fileName: "[project]/src/components/three/BackgroundShapes.tsx",
                                lineNumber: 167,
                                columnNumber: 22
                            }, this);
                        }
                    case "torus":
                        {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Torus"], {
                                args: [
                                    0.7,
                                    0.3,
                                    segments / 2,
                                    segments
                                ],
                                ...commonProps
                            }, void 0, false, {
                                fileName: "[project]/src/components/three/BackgroundShapes.tsx",
                                lineNumber: 171,
                                columnNumber: 22
                            }, this);
                        }
                    case "cylinder":
                        {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cylinder"], {
                                args: [
                                    0.5,
                                    0.5,
                                    1,
                                    segments
                                ],
                                ...commonProps
                            }, void 0, false, {
                                fileName: "[project]/src/components/three/BackgroundShapes.tsx",
                                lineNumber: 175,
                                columnNumber: 22
                            }, this);
                        }
                    default:
                        {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shapes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sphere"], {
                                args: [
                                    1,
                                    segments,
                                    segments
                                ],
                                ...commonProps
                            }, void 0, false, {
                                fileName: "[project]/src/components/three/BackgroundShapes.tsx",
                                lineNumber: 179,
                                columnNumber: 22
                            }, this);
                        }
                }
            }
        }["BackgroundShape[renderShape]"];
        t7 = renderShape();
        $[14] = material;
        $[15] = performanceTier;
        $[16] = shape;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    return t7;
}
_s(BackgroundShape, "/vg1AmA8+P3+Fj0/y210JTVKtL0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = BackgroundShape;
/**
 * Particle system for atmospheric effects
 */ function ParticleSystem(t0) {
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "c579d55d0f86c33533ab91602db40525a4481ddffe1f9377bb3317e73dcefdc5") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c579d55d0f86c33533ab91602db40525a4481ddffe1f9377bb3317e73dcefdc5";
    }
    const { count, opacity, performanceTier } = t0;
    const pointsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const adjustedCount = performanceTier === "low" ? count / 4 : performanceTier === "medium" ? count / 2 : count;
    let t1;
    if ($[1] !== adjustedCount) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$three$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createParticleConfig"])(adjustedCount);
        $[1] = adjustedCount;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const particleConfig = t1;
    const t2 = opacity * 0.6;
    let t3;
    if ($[3] !== t2) {
        t3 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointsMaterial"]({
            size: 0.02,
            transparent: true,
            opacity: t2,
            vertexColors: true,
            blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"]
        });
        $[3] = t2;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const material = t3;
    let geo;
    if ($[5] !== particleConfig.colors || $[6] !== particleConfig.positions) {
        geo = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
        geo.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](particleConfig.positions, 3));
        geo.setAttribute("color", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](particleConfig.colors, 3));
        $[5] = particleConfig.colors;
        $[6] = particleConfig.positions;
        $[7] = geo;
    } else {
        geo = $[7];
    }
    const geometry = geo;
    let t4;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "ParticleSystem[useFrame()]": (state)=>{
                if (!pointsRef.current) {
                    return;
                }
                const time = state.clock.elapsedTime * 0.1;
                pointsRef.current.rotation.y = time * 0.05;
                pointsRef.current.rotation.x = Math.sin(time) * 0.02;
            }
        })["ParticleSystem[useFrame()]"];
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])(t4);
    let t5;
    if ($[9] !== geometry || $[10] !== material) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("points", {
            ref: pointsRef,
            geometry: geometry,
            material: material
        }, void 0, false, {
            fileName: "[project]/src/components/three/BackgroundShapes.tsx",
            lineNumber: 269,
            columnNumber: 10
        }, this);
        $[9] = geometry;
        $[10] = material;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    return t5;
}
_s1(ParticleSystem, "7C7C5y4MprfU2123a3F/mkNQo3Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c1 = ParticleSystem;
function BackgroundShapes(t0) {
    _s2();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "c579d55d0f86c33533ab91602db40525a4481ddffe1f9377bb3317e73dcefdc5") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c579d55d0f86c33533ab91602db40525a4481ddffe1f9377bb3317e73dcefdc5";
    }
    const { count: t1, shapes: t2, colors: t3, animationSpeed: t4, opacity: t5, enableParticles: t6, particleCount: t7 } = t0;
    const count = t1 === undefined ? 15 : t1;
    let t8;
    if ($[1] !== t2) {
        t8 = t2 === undefined ? [
            "sphere",
            "box",
            "torus",
            "cylinder"
        ] : t2;
        $[1] = t2;
        $[2] = t8;
    } else {
        t8 = $[2];
    }
    const shapes = t8;
    let t9;
    if ($[3] !== t3) {
        t9 = t3 === undefined ? [
            "#3b82f6",
            "#8b5cf6",
            "#f59e0b",
            "#10b981",
            "#ef4444"
        ] : t3;
        $[3] = t3;
        $[4] = t9;
    } else {
        t9 = $[4];
    }
    const colors = t9;
    const animationSpeed = t4 === undefined ? 0.3 : t4;
    const opacity = t5 === undefined ? 0.4 : t5;
    const enableParticles = t6 === undefined ? true : t6;
    const particleCount = t7 === undefined ? 200 : t7;
    const [performanceTier, setPerformanceTier] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("medium");
    let t10;
    let t11;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ({
            "BackgroundShapes[useEffect()]": ()=>{
                setPerformanceTier((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$three$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPerformanceTier"])());
            }
        })["BackgroundShapes[useEffect()]"];
        t11 = [];
        $[5] = t10;
        $[6] = t11;
    } else {
        t10 = $[5];
        t11 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t10, t11);
    const adjustedCount = performanceTier === "low" ? Math.floor(count / 2) : count;
    let t12;
    if ($[7] !== adjustedCount || $[8] !== colors || $[9] !== shapes) {
        let t13;
        if ($[11] !== colors || $[12] !== shapes) {
            t13 = ({
                "BackgroundShapes[Array.from()]": (_, index)=>({
                        id: index,
                        shape: shapes[index % shapes.length],
                        color: colors[index % colors.length],
                        position: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$three$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomPosition"])({
                            x: 20,
                            y: 12,
                            z: 15
                        }),
                        rotation: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$three$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["randomRotation"])()
                    })
            })["BackgroundShapes[Array.from()]"];
            $[11] = colors;
            $[12] = shapes;
            $[13] = t13;
        } else {
            t13 = $[13];
        }
        t12 = Array.from({
            length: adjustedCount
        }, t13);
        $[7] = adjustedCount;
        $[8] = colors;
        $[9] = shapes;
        $[10] = t12;
    } else {
        t12 = $[10];
    }
    const backgroundShapes = t12;
    let t13;
    if ($[14] !== animationSpeed || $[15] !== backgroundShapes || $[16] !== opacity || $[17] !== performanceTier) {
        t13 = backgroundShapes.map({
            "BackgroundShapes[backgroundShapes.map()]": (shape)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BackgroundShape, {
                    shape: shape.shape,
                    color: shape.color,
                    position: shape.position,
                    animationSpeed: animationSpeed,
                    index: shape.id,
                    opacity: opacity,
                    performanceTier: performanceTier
                }, shape.id, false, {
                    fileName: "[project]/src/components/three/BackgroundShapes.tsx",
                    lineNumber: 377,
                    columnNumber: 60
                }, this)
        }["BackgroundShapes[backgroundShapes.map()]"]);
        $[14] = animationSpeed;
        $[15] = backgroundShapes;
        $[16] = opacity;
        $[17] = performanceTier;
        $[18] = t13;
    } else {
        t13 = $[18];
    }
    let t14;
    if ($[19] !== colors || $[20] !== enableParticles || $[21] !== opacity || $[22] !== particleCount || $[23] !== performanceTier) {
        t14 = enableParticles && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParticleSystem, {
            count: particleCount,
            colors: colors,
            opacity: opacity,
            performanceTier: performanceTier
        }, void 0, false, {
            fileName: "[project]/src/components/three/BackgroundShapes.tsx",
            lineNumber: 389,
            columnNumber: 30
        }, this);
        $[19] = colors;
        $[20] = enableParticles;
        $[21] = opacity;
        $[22] = particleCount;
        $[23] = performanceTier;
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    let t15;
    if ($[25] !== t13 || $[26] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
            children: [
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/three/BackgroundShapes.tsx",
            lineNumber: 401,
            columnNumber: 11
        }, this);
        $[25] = t13;
        $[26] = t14;
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    return t15;
}
_s2(BackgroundShapes, "iwyKk60IE8lnou4MM/gqSyP9g1g=");
_c2 = BackgroundShapes;
const BackgroundShapesPresets = {
    subtle: {
        count: 10,
        shapes: [
            "sphere",
            "torus"
        ],
        colors: [
            "#3b82f6",
            "#8b5cf6",
            "#f59e0b"
        ],
        animationSpeed: 0.2,
        opacity: 0.3,
        enableParticles: true,
        particleCount: 150
    },
    atmospheric: {
        count: 20,
        shapes: [
            "sphere",
            "box",
            "torus",
            "cylinder"
        ],
        colors: [
            "#3b82f6",
            "#8b5cf6",
            "#f59e0b",
            "#10b981",
            "#ef4444"
        ],
        animationSpeed: 0.4,
        opacity: 0.5,
        enableParticles: true,
        particleCount: 300
    },
    minimal: {
        count: 6,
        shapes: [
            "sphere"
        ],
        colors: [
            "#3b82f6",
            "#8b5cf6"
        ],
        animationSpeed: 0.1,
        opacity: 0.2,
        enableParticles: false,
        particleCount: 0
    },
    particles: {
        count: 0,
        shapes: [],
        colors: [
            "#3b82f6",
            "#8b5cf6",
            "#f59e0b"
        ],
        animationSpeed: 0.1,
        opacity: 0.8,
        enableParticles: true,
        particleCount: 500
    }
};
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "BackgroundShape");
__turbopack_context__.k.register(_c1, "ParticleSystem");
__turbopack_context__.k.register(_c2, "BackgroundShapes");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/three/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$ThreeScene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/three/ThreeScene.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$TestScene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/three/TestScene.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$FloatingObjects$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/three/FloatingObjects.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$BackgroundShapes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/three/BackgroundShapes.tsx [app-client] (ecmascript)");
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/three/BackgroundShapes.tsx [app-client] (ecmascript) <export default as BackgroundShapes>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BackgroundShapes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$BackgroundShapes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$BackgroundShapes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/three/BackgroundShapes.tsx [app-client] (ecmascript)");
}),
"[project]/src/components/three/ThreeScene.tsx [app-client] (ecmascript) <export default as ThreeScene>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThreeScene",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$ThreeScene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$ThreeScene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/three/ThreeScene.tsx [app-client] (ecmascript)");
}),
"[project]/src/app/contact/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/forms/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$ContactForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ContactForm$3e$__ = __turbopack_context__.i("[project]/src/components/forms/ContactForm.tsx [app-client] (ecmascript) <export default as ContactForm>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/sections/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$ParallaxSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/ParallaxSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/three/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$BackgroundShapes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BackgroundShapes$3e$__ = __turbopack_context__.i("[project]/src/components/three/BackgroundShapes.tsx [app-client] (ecmascript) <export default as BackgroundShapes>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$ThreeScene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThreeScene$3e$__ = __turbopack_context__.i("[project]/src/components/three/ThreeScene.tsx [app-client] (ecmascript) <export default as ThreeScene>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/animations.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function Contact() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "1b95e47eaf253898bed6e72f189a4133b7e78b73da73fb354fbb0803909ac421") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1b95e47eaf253898bed6e72f189a4133b7e78b73da73fb354fbb0803909ac421";
    }
    const handleFormSubmit = _ContactHandleFormSubmit;
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 h-full w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$ThreeScene$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ThreeScene$3e$__["ThreeScene"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$three$2f$BackgroundShapes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BackgroundShapes$3e$__["BackgroundShapes"], {}, void 0, false, {
                    fileName: "[project]/src/app/contact/page.tsx",
                    lineNumber: 30,
                    columnNumber: 70
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/contact/page.tsx",
                lineNumber: 30,
                columnNumber: 58
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/contact/page.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeInUp"],
            className: "text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-6",
            children: "Get In Touch"
        }, void 0, false, {
            fileName: "[project]/src/app/contact/page.tsx",
            lineNumber: 38,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeInUp"],
            className: "text-xl text-gray-600 max-w-3xl mx-auto mb-8",
            children: "Ready to start your next project? Let's discuss how we can help bring your vision to life. We're here to answer your questions and provide the solutions you need."
        }, void 0, false, {
            fileName: "[project]/src/app/contact/page.tsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$ParallaxSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParallaxSection"], {
            speed: 0.5,
            className: "relative overflow-hidden",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "text-center",
                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"],
                        initial: "initial",
                        animate: "animate",
                        children: [
                            t1,
                            t2,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scaleIn"],
                                className: "flex justify-center mt-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-8xl animate-bounce",
                                    children: "👋"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/contact/page.tsx",
                                    lineNumber: 48,
                                    columnNumber: 332
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/contact/page.tsx",
                                lineNumber: 48,
                                columnNumber: 264
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/contact/page.tsx",
                        lineNumber: 48,
                        columnNumber: 156
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/contact/page.tsx",
                    lineNumber: 48,
                    columnNumber: 80
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/contact/page.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            once: true,
            margin: "-100px"
        };
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-bold text-gray-900 mb-6",
                    children: "Let's Start a Conversation"
                }, void 0, false, {
                    fileName: "[project]/src/app/contact/page.tsx",
                    lineNumber: 65,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-gray-600 mb-8",
                    children: "Whether you have a specific project in mind or just want to explore possibilities, we're excited to hear from you. Our team is ready to help you achieve your goals."
                }, void 0, false, {
                    fileName: "[project]/src/app/contact/page.tsx",
                    lineNumber: 65,
                    columnNumber: 100
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/contact/page.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
            className: "flex items-start space-x-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center flex-shrink-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-6 h-6 text-white",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        }, void 0, false, {
                            fileName: "[project]/src/app/contact/page.tsx",
                            lineNumber: 72,
                            columnNumber: 310
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/contact/page.tsx",
                        lineNumber: 72,
                        columnNumber: 220
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/contact/page.tsx",
                    lineNumber: 72,
                    columnNumber: 84
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold text-gray-900",
                            children: "Email Us"
                        }, void 0, false, {
                            fileName: "[project]/src/app/contact/page.tsx",
                            lineNumber: 72,
                            columnNumber: 501
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "hello@letlotlo.com"
                        }, void 0, false, {
                            fileName: "[project]/src/app/contact/page.tsx",
                            lineNumber: 72,
                            columnNumber: 566
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-500 mt-1",
                            children: "We'll respond within 24 hours"
                        }, void 0, false, {
                            fileName: "[project]/src/app/contact/page.tsx",
                            lineNumber: 72,
                            columnNumber: 617
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/contact/page.tsx",
                    lineNumber: 72,
                    columnNumber: 496
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/contact/page.tsx",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
            className: "flex items-start space-x-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center flex-shrink-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-6 h-6 text-white",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        }, void 0, false, {
                            fileName: "[project]/src/app/contact/page.tsx",
                            lineNumber: 79,
                            columnNumber: 310
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/contact/page.tsx",
                        lineNumber: 79,
                        columnNumber: 220
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/contact/page.tsx",
                    lineNumber: 79,
                    columnNumber: 84
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold text-gray-900",
                            children: "Call Us"
                        }, void 0, false, {
                            fileName: "[project]/src/app/contact/page.tsx",
                            lineNumber: 79,
                            columnNumber: 614
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "+1 (555) 123-4567"
                        }, void 0, false, {
                            fileName: "[project]/src/app/contact/page.tsx",
                            lineNumber: 79,
                            columnNumber: 678
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-500 mt-1",
                            children: "Mon-Fri, 9am-6pm EST"
                        }, void 0, false, {
                            fileName: "[project]/src/app/contact/page.tsx",
                            lineNumber: 79,
                            columnNumber: 728
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/contact/page.tsx",
                    lineNumber: 79,
                    columnNumber: 609
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/contact/page.tsx",
            lineNumber: 79,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    let t9;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center flex-shrink-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-6 h-6 text-white",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/contact/page.tsx",
                        lineNumber: 87,
                        columnNumber: 236
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/contact/page.tsx",
                        lineNumber: 87,
                        columnNumber: 392
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/contact/page.tsx",
                lineNumber: 87,
                columnNumber: 146
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/contact/page.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold text-gray-900",
            children: "Visit Us"
        }, void 0, false, {
            fileName: "[project]/src/app/contact/page.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        $[9] = t8;
        $[10] = t9;
    } else {
        t8 = $[9];
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t6,
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
                    className: "flex items-start space-x-4",
                    children: [
                        t8,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                t9,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: [
                                        "123 Innovation Drive",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/src/app/contact/page.tsx",
                                            lineNumber: 97,
                                            columnNumber: 182
                                        }, this),
                                        "Tech City, TC 12345"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/contact/page.tsx",
                                    lineNumber: 97,
                                    columnNumber: 133
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500 mt-1",
                                    children: "By appointment only"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/contact/page.tsx",
                                    lineNumber: 97,
                                    columnNumber: 211
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/contact/page.tsx",
                            lineNumber: 97,
                            columnNumber: 124
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/contact/page.tsx",
                    lineNumber: 97,
                    columnNumber: 46
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/contact/page.tsx",
            lineNumber: 97,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            minHeight: "300px"
        };
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-6xl mb-4",
                        children: "🗺️"
                    }, void 0, false, {
                        fileName: "[project]/src/app/contact/page.tsx",
                        lineNumber: 113,
                        columnNumber: 107
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-lg font-semibold text-gray-900 mb-2",
                        children: "Interactive Map"
                    }, void 0, false, {
                        fileName: "[project]/src/app/contact/page.tsx",
                        lineNumber: 113,
                        columnNumber: 147
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600",
                        children: "123 Innovation Drive, Tech City, TC 12345"
                    }, void 0, false, {
                        fileName: "[project]/src/app/contact/page.tsx",
                        lineNumber: 113,
                        columnNumber: 224
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/contact/page.tsx",
                lineNumber: 113,
                columnNumber: 78
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/contact/page.tsx",
            lineNumber: 113,
            columnNumber: 11
        }, this);
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
            className: "bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl p-8 border-2 border-primary-200 overflow-hidden relative",
            style: t11,
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 opacity-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-8 grid-rows-8 h-full w-full",
                        children: Array.from({
                            length: 64
                        }).map(_ContactAnonymous)
                    }, void 0, false, {
                        fileName: "[project]/src/app/contact/page.tsx",
                        lineNumber: 120,
                        columnNumber: 241
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/contact/page.tsx",
                    lineNumber: 120,
                    columnNumber: 196
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/contact/page.tsx",
            lineNumber: 120,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
            className: "space-y-8",
            children: [
                t5,
                t10,
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
                    className: "bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6 border border-primary-100",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4 text-white",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contact/page.tsx",
                                        lineNumber: 129,
                                        columnNumber: 441
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/contact/page.tsx",
                                    lineNumber: 129,
                                    columnNumber: 351
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/contact/page.tsx",
                                lineNumber: 129,
                                columnNumber: 265
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-semibold text-gray-900",
                                        children: "Quick Response Guarantee"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contact/page.tsx",
                                        lineNumber: 129,
                                        columnNumber: 575
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600",
                                        children: "We respond to all inquiries within 24 hours, usually much sooner."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/contact/page.tsx",
                                        lineNumber: 129,
                                        columnNumber: 648
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/contact/page.tsx",
                                lineNumber: 129,
                                columnNumber: 570
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/contact/page.tsx",
                        lineNumber: 129,
                        columnNumber: 220
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/contact/page.tsx",
                    lineNumber: 129,
                    columnNumber: 82
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/contact/page.tsx",
            lineNumber: 129,
            columnNumber: 11
        }, this);
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative py-24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "grid lg:grid-cols-2 gap-16 items-start",
                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"],
                    initial: "initial",
                    whileInView: "animate",
                    viewport: t4,
                    children: [
                        t14,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
                            className: "bg-white rounded-3xl shadow-2xl p-8 lg:p-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold text-gray-900 mb-4",
                                            children: "Send Us a Message"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/contact/page.tsx",
                                            lineNumber: 136,
                                            columnNumber: 378
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600",
                                            children: "Fill out the form below and we'll get back to you as soon as possible."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/contact/page.tsx",
                                            lineNumber: 136,
                                            columnNumber: 454
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/contact/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 344
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$forms$2f$ContactForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ContactForm$3e$__["ContactForm"], {
                                    onSubmit: handleFormSubmit
                                }, void 0, false, {
                                    fileName: "[project]/src/app/contact/page.tsx",
                                    lineNumber: 136,
                                    columnNumber: 563
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/contact/page.tsx",
                            lineNumber: 136,
                            columnNumber: 253
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/contact/page.tsx",
                    lineNumber: 136,
                    columnNumber: 103
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/contact/page.tsx",
                lineNumber: 136,
                columnNumber: 47
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/contact/page.tsx",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    let t16;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "text-center mb-16",
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"],
            initial: "initial",
            whileInView: "animate",
            viewport: {
                once: true,
                margin: "-100px"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeInUp"],
                    className: "text-3xl font-bold text-gray-900 mb-4",
                    children: "Frequently Asked Questions"
                }, void 0, false, {
                    fileName: "[project]/src/app/contact/page.tsx",
                    lineNumber: 146,
                    columnNumber: 8
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeInUp"],
                    className: "text-lg text-gray-600",
                    children: "Quick answers to common questions about working with us."
                }, void 0, false, {
                    fileName: "[project]/src/app/contact/page.tsx",
                    lineNumber: 146,
                    columnNumber: 127
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/contact/page.tsx",
            lineNumber: 143,
            columnNumber: 11
        }, this);
        $[17] = t16;
    } else {
        t16 = $[17];
    }
    let t17;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50",
            children: [
                t3,
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "bg-white py-24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
                        children: [
                            t16,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "space-y-8",
                                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"],
                                initial: "initial",
                                whileInView: "animate",
                                viewport: {
                                    once: true,
                                    margin: "-100px"
                                },
                                children: faqs.map(_ContactFaqsMap)
                            }, void 0, false, {
                                fileName: "[project]/src/app/contact/page.tsx",
                                lineNumber: 153,
                                columnNumber: 211
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/contact/page.tsx",
                        lineNumber: 153,
                        columnNumber: 150
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/contact/page.tsx",
                    lineNumber: 153,
                    columnNumber: 114
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/contact/page.tsx",
            lineNumber: 153,
            columnNumber: 11
        }, this);
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    return t17;
}
_c = Contact;
// FAQ data
function _ContactFaqsMap(faq, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
        className: "bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-semibold text-gray-900 mb-3",
                children: faq.question
            }, void 0, false, {
                fileName: "[project]/src/app/contact/page.tsx",
                lineNumber: 166,
                columnNumber: 143
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600",
                children: faq.answer
            }, void 0, false, {
                fileName: "[project]/src/app/contact/page.tsx",
                lineNumber: 166,
                columnNumber: 219
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/src/app/contact/page.tsx",
        lineNumber: 166,
        columnNumber: 10
    }, this);
}
function _ContactAnonymous(_, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border border-primary-300"
    }, i, false, {
        fileName: "[project]/src/app/contact/page.tsx",
        lineNumber: 169,
        columnNumber: 10
    }, this);
}
async function _ContactHandleFormSubmit(data) {
    console.log("Contact form submitted:", data);
    await new Promise(_temp);
    ;
    try {
        console.log("Message sent successfully");
    } catch (t0) {
        const error = t0;
        console.error("Error sending message:", error);
        throw new Error("Failed to send message. Please try again later.");
    }
}
function _temp(resolve) {
    return setTimeout(resolve, 1000);
}
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
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_6161153a._.js.map