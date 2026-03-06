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
"[project]/src/app/about/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/Hero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$ParallaxSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/ParallaxSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/animations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$HeartIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/HeartIcon.js [app-client] (ecmascript) <export default as HeartIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$LightBulbIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LightBulbIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/LightBulbIcon.js [app-client] (ecmascript) <export default as LightBulbIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$RocketLaunchIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RocketLaunchIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/RocketLaunchIcon.js [app-client] (ecmascript) <export default as RocketLaunchIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ShieldCheckIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ShieldCheckIcon.js [app-client] (ecmascript) <export default as ShieldCheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UsersIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/UsersIcon.js [app-client] (ecmascript) <export default as UsersIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SparklesIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/SparklesIcon.js [app-client] (ecmascript) <export default as SparklesIcon>");
"use client";
;
;
;
;
;
;
;
function About() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(31);
    if ($[0] !== "d9fc7033e58e6606977c7972eaf0b0de5d2193c7576bbc718d7e15dd767f881e") {
        for(let $i = 0; $i < 31; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d9fc7033e58e6606977c7972eaf0b0de5d2193c7576bbc718d7e15dd767f881e";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Hero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            title: "About Letlotlo International",
            subtitle: "Pioneering the future of digital experiences with innovation, creativity, and cutting-edge technology.",
            enable3D: true,
            enableParallax: true,
            height: "medium",
            textAlign: "center"
        }, void 0, false, {
            fileName: "[project]/src/app/about/page.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            once: true,
            margin: "-100px"
        };
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mb-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl md:text-5xl font-bold text-gray-900 mb-6",
                    children: "Our Story"
                }, void 0, false, {
                    fileName: "[project]/src/app/about/page.tsx",
                    lineNumber: 47,
                    columnNumber: 45
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"
                }, void 0, false, {
                    fileName: "[project]/src/app/about/page.tsx",
                    lineNumber: 47,
                    columnNumber: 125
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/about/page.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$ParallaxSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            speed: 0.5,
            className: "py-20 bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "container mx-auto px-4 sm:px-6 lg:px-8",
                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"],
                initial: "initial",
                whileInView: "animate",
                viewport: t1,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "max-w-4xl mx-auto",
                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
                    children: [
                        t2,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6 text-lg text-gray-600 leading-relaxed",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Founded with a vision to transform the digital landscape, Letlotlo International emerged from a passion for creating immersive, engaging web experiences that push the boundaries of what's possible online."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/about/page.tsx",
                                    lineNumber: 54,
                                    columnNumber: 345
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Our journey began when a group of creative technologists came together with a shared belief: that the web should be more than just functional—it should be captivating, interactive, and memorable. We saw an opportunity to blend cutting-edge 3D graphics, smooth animations, and modern web technologies to create digital experiences that truly stand out."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/about/page.tsx",
                                    lineNumber: 54,
                                    columnNumber: 556
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Today, we're proud to be at the forefront of web innovation, helping businesses and organizations around the world bring their visions to life through stunning digital solutions. From immersive 3D websites to responsive mobile applications, we combine technical excellence with creative artistry to deliver results that exceed expectations."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/about/page.tsx",
                                    lineNumber: 54,
                                    columnNumber: 914
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "What sets us apart is our commitment to staying ahead of the curve. We continuously explore emerging technologies, refine our craft, and push ourselves to create experiences that not only meet today's standards but define tomorrow's possibilities."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/about/page.tsx",
                                    lineNumber: 54,
                                    columnNumber: 1261
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/about/page.tsx",
                            lineNumber: 54,
                            columnNumber: 280
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/about/page.tsx",
                    lineNumber: 54,
                    columnNumber: 211
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/about/page.tsx",
                lineNumber: 54,
                columnNumber: 66
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/about/page.tsx",
            lineNumber: 54,
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
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "text-center mb-16",
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl md:text-5xl font-bold text-gray-900 mb-6",
                    children: "Mission & Vision"
                }, void 0, false, {
                    fileName: "[project]/src/app/about/page.tsx",
                    lineNumber: 71,
                    columnNumber: 75
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"
                }, void 0, false, {
                    fileName: "[project]/src/app/about/page.tsx",
                    lineNumber: 71,
                    columnNumber: 166
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/about/page.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            y: -8,
            scale: 1.02
        };
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300",
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
            whileHover: t6,
            transition: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitions"].smooth,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$RocketLaunchIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RocketLaunchIcon$3e$__["RocketLaunchIcon"], {
                        className: "w-10 h-10 text-white"
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.tsx",
                        lineNumber: 88,
                        columnNumber: 327
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/about/page.tsx",
                    lineNumber: 88,
                    columnNumber: 189
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-3xl font-bold text-gray-900 mb-4 text-center",
                    children: "Our Mission"
                }, void 0, false, {
                    fileName: "[project]/src/app/about/page.tsx",
                    lineNumber: 88,
                    columnNumber: 386
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-gray-600 text-center leading-relaxed",
                    children: "To empower businesses with innovative digital solutions that drive growth, engagement, and success. We strive to transform ideas into exceptional web experiences that captivate audiences and deliver measurable results."
                }, void 0, false, {
                    fileName: "[project]/src/app/about/page.tsx",
                    lineNumber: 88,
                    columnNumber: 468
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/about/page.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = {
            y: -8,
            scale: 1.02
        };
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$ParallaxSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            speed: 0.3,
            className: "py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "container mx-auto px-4 sm:px-6 lg:px-8",
                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"],
                initial: "initial",
                whileInView: "animate",
                viewport: t4,
                children: [
                    t5,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto",
                        children: [
                            t7,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300",
                                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
                                whileHover: t8,
                                transition: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitions"].smooth,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$LightBulbIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LightBulbIcon$3e$__["LightBulbIcon"], {
                                            className: "w-10 h-10 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/page.tsx",
                                            lineNumber: 105,
                                            columnNumber: 658
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/about/page.tsx",
                                        lineNumber: 105,
                                        columnNumber: 518
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-3xl font-bold text-gray-900 mb-4 text-center",
                                        children: "Our Vision"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/about/page.tsx",
                                        lineNumber: 105,
                                        columnNumber: 714
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-gray-600 text-center leading-relaxed",
                                        children: "To be the global leader in immersive 3D web experiences and modern digital solutions, setting new standards for creativity, innovation, and technical excellence in the digital world."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/about/page.tsx",
                                        lineNumber: 105,
                                        columnNumber: 795
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/about/page.tsx",
                                lineNumber: 105,
                                columnNumber: 339
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/about/page.tsx",
                        lineNumber: 105,
                        columnNumber: 262
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/about/page.tsx",
                lineNumber: 105,
                columnNumber: 113
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/about/page.tsx",
            lineNumber: 105,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = {
            once: true,
            margin: "-100px"
        };
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "text-center mb-16",
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl md:text-5xl font-bold text-gray-900 mb-6",
                    children: "Our Core Values"
                }, void 0, false, {
                    fileName: "[project]/src/app/about/page.tsx",
                    lineNumber: 122,
                    columnNumber: 76
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"
                }, void 0, false, {
                    fileName: "[project]/src/app/about/page.tsx",
                    lineNumber: 122,
                    columnNumber: 162
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl text-gray-600 max-w-3xl mx-auto",
                    children: "The principles that guide everything we do"
                }, void 0, false, {
                    fileName: "[project]/src/app/about/page.tsx",
                    lineNumber: 122,
                    columnNumber: 248
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/about/page.tsx",
            lineNumber: 122,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = {
            y: -8,
            scale: 1.05
        };
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all duration-300",
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
            whileHover: t12,
            transition: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitions"].smooth,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-md",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SparklesIcon$3e$__["SparklesIcon"], {
                        className: "w-8 h-8 text-white"
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.tsx",
                        lineNumber: 139,
                        columnNumber: 360
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/about/page.tsx",
                    lineNumber: 139,
                    columnNumber: 222
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-bold text-gray-900 mb-3",
                    children: "Innovation"
                }, void 0, false, {
                    fileName: "[project]/src/app/about/page.tsx",
                    lineNumber: 139,
                    columnNumber: 413
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600",
                    children: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions."
                }, void 0, false, {
                    fileName: "[project]/src/app/about/page.tsx",
                    lineNumber: 139,
                    columnNumber: 481
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/about/page.tsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = {
            y: -8,
            scale: 1.05
        };
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transition-all duration-300",
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
            whileHover: t14,
            transition: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitions"].smooth,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-md",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ShieldCheckIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheckIcon$3e$__["ShieldCheckIcon"], {
                        className: "w-8 h-8 text-white"
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.tsx",
                        lineNumber: 156,
                        columnNumber: 368
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/about/page.tsx",
                    lineNumber: 156,
                    columnNumber: 226
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-bold text-gray-900 mb-3",
                    children: "Excellence"
                }, void 0, false, {
                    fileName: "[project]/src/app/about/page.tsx",
                    lineNumber: 156,
                    columnNumber: 424
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600",
                    children: "We maintain the highest standards in every project, ensuring quality and attention to detail."
                }, void 0, false, {
                    fileName: "[project]/src/app/about/page.tsx",
                    lineNumber: 156,
                    columnNumber: 492
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/about/page.tsx",
            lineNumber: 156,
            columnNumber: 11
        }, this);
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    let t16;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = {
            y: -8,
            scale: 1.05
        };
        $[17] = t16;
    } else {
        t16 = $[17];
    }
    let t17;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "text-center p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 hover:shadow-xl transition-all duration-300",
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
            whileHover: t16,
            transition: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitions"].smooth,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-md",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UsersIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UsersIcon$3e$__["UsersIcon"], {
                        className: "w-8 h-8 text-white"
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.tsx",
                        lineNumber: 173,
                        columnNumber: 360
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/about/page.tsx",
                    lineNumber: 173,
                    columnNumber: 222
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-bold text-gray-900 mb-3",
                    children: "Collaboration"
                }, void 0, false, {
                    fileName: "[project]/src/app/about/page.tsx",
                    lineNumber: 173,
                    columnNumber: 410
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600",
                    children: "We work closely with our clients as partners, ensuring their vision becomes reality."
                }, void 0, false, {
                    fileName: "[project]/src/app/about/page.tsx",
                    lineNumber: 173,
                    columnNumber: 481
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/about/page.tsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    let t18;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = {
            y: -8,
            scale: 1.05
        };
        $[19] = t18;
    } else {
        t18 = $[19];
    }
    let t19;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$ParallaxSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            speed: 0.4,
            className: "py-20 bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "container mx-auto px-4 sm:px-6 lg:px-8",
                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"],
                initial: "initial",
                whileInView: "animate",
                viewport: t10,
                children: [
                    t11,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto",
                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"],
                        children: [
                            t13,
                            t15,
                            t17,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-xl transition-all duration-300",
                                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
                                whileHover: t18,
                                transition: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitions"].smooth,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$HeartIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartIcon$3e$__["HeartIcon"], {
                                            className: "w-8 h-8 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/page.tsx",
                                            lineNumber: 190,
                                            columnNumber: 713
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/about/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 571
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-gray-900 mb-3",
                                        children: "Integrity"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/about/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 763
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600",
                                        children: "We build trust through transparency, honesty, and ethical practices in all our work."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/about/page.tsx",
                                        lineNumber: 190,
                                        columnNumber: 830
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/about/page.tsx",
                                lineNumber: 190,
                                columnNumber: 356
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/about/page.tsx",
                        lineNumber: 190,
                        columnNumber: 218
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/about/page.tsx",
                lineNumber: 190,
                columnNumber: 67
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/about/page.tsx",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[20] = t19;
    } else {
        t19 = $[20];
    }
    let t20;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = {
            once: true,
            margin: "-100px"
        };
        $[21] = t20;
    } else {
        t20 = $[21];
    }
    let t21;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "text-center mb-16",
            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl md:text-5xl font-bold text-gray-900 mb-6",
                    children: "Meet Our Leadership"
                }, void 0, false, {
                    fileName: "[project]/src/app/about/page.tsx",
                    lineNumber: 207,
                    columnNumber: 76
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"
                }, void 0, false, {
                    fileName: "[project]/src/app/about/page.tsx",
                    lineNumber: 207,
                    columnNumber: 166
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl text-gray-600 max-w-3xl mx-auto",
                    children: "The visionaries driving innovation and excellence"
                }, void 0, false, {
                    fileName: "[project]/src/app/about/page.tsx",
                    lineNumber: 207,
                    columnNumber: 252
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/about/page.tsx",
            lineNumber: 207,
            columnNumber: 11
        }, this);
        $[22] = t21;
    } else {
        t21 = $[22];
    }
    let t22;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$ParallaxSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            speed: 0.3,
            className: "py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "container mx-auto px-4 sm:px-6 lg:px-8",
                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"],
                initial: "initial",
                whileInView: "animate",
                viewport: t20,
                children: [
                    t21,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto",
                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"],
                        children: teamMembers.map(_AboutTeamMembersMap)
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.tsx",
                        lineNumber: 214,
                        columnNumber: 265
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/about/page.tsx",
                lineNumber: 214,
                columnNumber: 114
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/about/page.tsx",
            lineNumber: 214,
            columnNumber: 11
        }, this);
        $[23] = t22;
    } else {
        t22 = $[23];
    }
    let t23;
    let t24;
    let t25;
    let t26;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = {
            opacity: 0,
            y: 20
        };
        t24 = {
            opacity: 1,
            y: 0
        };
        t25 = {
            once: true
        };
        t26 = {
            duration: 0.6
        };
        $[24] = t23;
        $[25] = t24;
        $[26] = t25;
        $[27] = t26;
    } else {
        t23 = $[24];
        t24 = $[25];
        t25 = $[26];
        t26 = $[27];
    }
    let t27;
    let t28;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-4xl md:text-5xl font-bold text-white mb-6",
            children: "Ready to Work Together?"
        }, void 0, false, {
            fileName: "[project]/src/app/about/page.tsx",
            lineNumber: 251,
            columnNumber: 11
        }, this);
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xl text-white/90 mb-8",
            children: "Let's create something amazing. Get in touch with our team today."
        }, void 0, false, {
            fileName: "[project]/src/app/about/page.tsx",
            lineNumber: 252,
            columnNumber: 11
        }, this);
        $[28] = t27;
        $[29] = t28;
    } else {
        t27 = $[28];
        t28 = $[29];
    }
    let t29;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "min-h-screen",
            children: [
                t0,
                t3,
                t9,
                t19,
                t22,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$ParallaxSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    speed: 0.5,
                    className: "py-20 bg-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "container mx-auto px-4 sm:px-6 lg:px-8 text-center",
                        initial: t23,
                        whileInView: t24,
                        viewport: t25,
                        transition: t26,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-3xl mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-12 shadow-2xl",
                            children: [
                                t27,
                                t28,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                    href: "/contact",
                                    className: "inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:shadow-xl transition-shadow duration-300",
                                    whileHover: {
                                        scale: 1.05,
                                        y: -2
                                    },
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    children: "Contact Us"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/about/page.tsx",
                                    lineNumber: 261,
                                    columnNumber: 390
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/about/page.tsx",
                            lineNumber: 261,
                            columnNumber: 259
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.tsx",
                        lineNumber: 261,
                        columnNumber: 120
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/about/page.tsx",
                    lineNumber: 261,
                    columnNumber: 64
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/about/page.tsx",
            lineNumber: 261,
            columnNumber: 11
        }, this);
        $[30] = t29;
    } else {
        t29 = $[30];
    }
    return t29;
}
_c = About;
// Team member data - Requirement 8.5
function _AboutTeamMembersMap(member, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300",
        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerItem"],
        whileHover: {
            y: -10,
            scale: 1.02
        },
        transition: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transitions"].smooth,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-80 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-48 h-48 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center shadow-2xl`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-6xl font-bold text-white",
                            children: member.name.split(" ").map(_AboutTeamMembersMapAnonymous).join("")
                        }, void 0, false, {
                            fileName: "[project]/src/app/about/page.tsx",
                            lineNumber: 279,
                            columnNumber: 334
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.tsx",
                        lineNumber: 279,
                        columnNumber: 211
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/about/page.tsx",
                    lineNumber: 279,
                    columnNumber: 144
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/about/page.tsx",
                lineNumber: 279,
                columnNumber: 38
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold text-gray-900 mb-2",
                        children: member.name
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.tsx",
                        lineNumber: 279,
                        columnNumber: 496
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-blue-600 font-semibold mb-4",
                        children: member.role
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.tsx",
                        lineNumber: 279,
                        columnNumber: 568
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 leading-relaxed mb-6",
                        children: member.bio
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.tsx",
                        lineNumber: 279,
                        columnNumber: 641
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex space-x-4",
                        children: member.social.map({
                            "About[teamMembers.map() > member.social.map()]": (link, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                    href: link.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white hover:shadow-lg transition-shadow duration-200",
                                    whileHover: {
                                        scale: 1.1,
                                        rotate: 5
                                    },
                                    whileTap: {
                                        scale: 0.95
                                    },
                                    "aria-label": `${member.name}'s ${link.platform}`,
                                    children: [
                                        link.platform === "LinkedIn" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5",
                                            fill: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/about/page.tsx",
                                                lineNumber: 285,
                                                columnNumber: 161
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/page.tsx",
                                            lineNumber: 285,
                                            columnNumber: 96
                                        }, this),
                                        link.platform === "Twitter" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5",
                                            fill: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/about/page.tsx",
                                                lineNumber: 285,
                                                columnNumber: 601
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/page.tsx",
                                            lineNumber: 285,
                                            columnNumber: 536
                                        }, this),
                                        link.platform === "GitHub" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5",
                                            fill: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/about/page.tsx",
                                                lineNumber: 285,
                                                columnNumber: 880
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/about/page.tsx",
                                            lineNumber: 285,
                                            columnNumber: 815
                                        }, this)
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/src/app/about/page.tsx",
                                    lineNumber: 280,
                                    columnNumber: 76
                                }, this)
                        }["About[teamMembers.map() > member.social.map()]"])
                    }, void 0, false, {
                        fileName: "[project]/src/app/about/page.tsx",
                        lineNumber: 279,
                        columnNumber: 707
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/about/page.tsx",
                lineNumber: 279,
                columnNumber: 475
            }, this)
        ]
    }, member.id, true, {
        fileName: "[project]/src/app/about/page.tsx",
        lineNumber: 276,
        columnNumber: 10
    }, this);
}
function _AboutTeamMembersMapAnonymous(n) {
    return n[0];
}
const teamMembers = [
    {
        id: "1",
        name: "Sarah Johnson",
        role: "Chief Executive Officer",
        bio: "With over 15 years of experience in digital innovation, Sarah leads our vision to transform the web experience landscape.",
        image: "/team/sarah-johnson.jpg",
        gradient: "from-blue-500 to-purple-500",
        social: [
            {
                platform: "LinkedIn",
                url: "https://linkedin.com"
            },
            {
                platform: "Twitter",
                url: "https://twitter.com"
            }
        ]
    },
    {
        id: "2",
        name: "Michael Chen",
        role: "Chief Technology Officer",
        bio: "Michael brings deep expertise in 3D graphics and web technologies, driving our technical excellence and innovation.",
        image: "/team/michael-chen.jpg",
        gradient: "from-purple-500 to-pink-500",
        social: [
            {
                platform: "LinkedIn",
                url: "https://linkedin.com"
            },
            {
                platform: "GitHub",
                url: "https://github.com"
            }
        ]
    },
    {
        id: "3",
        name: "Emily Rodriguez",
        role: "Creative Director",
        bio: "Emily's creative vision and design expertise ensure every project we deliver is both beautiful and functional.",
        image: "/team/emily-rodriguez.jpg",
        gradient: "from-pink-500 to-orange-500",
        social: [
            {
                platform: "LinkedIn",
                url: "https://linkedin.com"
            },
            {
                platform: "Twitter",
                url: "https://twitter.com"
            }
        ]
    },
    {
        id: "4",
        name: "David Kim",
        role: "Head of Engineering",
        bio: "David leads our engineering team with a focus on performance, scalability, and cutting-edge development practices.",
        image: "/team/david-kim.jpg",
        gradient: "from-blue-500 to-cyan-500",
        social: [
            {
                platform: "LinkedIn",
                url: "https://linkedin.com"
            },
            {
                platform: "GitHub",
                url: "https://github.com"
            }
        ]
    },
    {
        id: "5",
        name: "Lisa Thompson",
        role: "Head of Client Success",
        bio: "Lisa ensures our clients receive exceptional service and support throughout their journey with us.",
        image: "/team/lisa-thompson.jpg",
        gradient: "from-purple-500 to-indigo-500",
        social: [
            {
                platform: "LinkedIn",
                url: "https://linkedin.com"
            },
            {
                platform: "Twitter",
                url: "https://twitter.com"
            }
        ]
    },
    {
        id: "6",
        name: "James Wilson",
        role: "Lead 3D Developer",
        bio: "James specializes in creating immersive 3D experiences that push the boundaries of web technology.",
        image: "/team/james-wilson.jpg",
        gradient: "from-green-500 to-teal-500",
        social: [
            {
                platform: "LinkedIn",
                url: "https://linkedin.com"
            },
            {
                platform: "GitHub",
                url: "https://github.com"
            }
        ]
    }
];
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_65f63929._.js.map