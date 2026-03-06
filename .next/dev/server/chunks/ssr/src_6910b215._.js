module.exports = [
"[project]/src/lib/animations.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/src/components/providers/PageTransition.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageTransition",
    ()=>PageTransition,
    "PageTransitionWrapper",
    ()=>PageTransitionWrapper,
    "RouteChangeAnnouncer",
    ()=>RouteChangeAnnouncer,
    "ScrollToTop",
    ()=>ScrollToTop,
    "useScrollRestoration",
    ()=>useScrollRestoration,
    "useTransitionInterruption",
    ()=>useTransitionInterruption
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/animations.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
/**
 * Page transition variants with performance optimization
 */ const transitionVariants = {
    fade: {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitions"].page
        },
        exit: {
            opacity: 0,
            transition: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitions"].fast
        }
    },
    slide: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pageSlide"],
    scale: {
        initial: {
            opacity: 0,
            scale: 0.95
        },
        animate: {
            opacity: 1,
            scale: 1,
            transition: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitions"].page
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            transition: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$animations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["transitions"].fast
        }
    }
};
const PageTransition = ({ children, variant = "fade", className })=>{
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        mode: "wait",
        initial: false,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            variants: transitionVariants[variant],
            initial: "initial",
            animate: "animate",
            exit: "exit",
            className: className,
            style: {
                willChange: "opacity, transform"
            },
            children: children
        }, pathname, false, {
            fileName: "[project]/src/components/providers/PageTransition.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/providers/PageTransition.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const PageTransitionWrapper = ({ children, variant = "fade", showLoadingBar = true, className })=>{
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isLoading, setIsLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        // Show loading state briefly during transition
        setIsLoading(true);
        const timer = setTimeout(()=>setIsLoading(false), 100); // 100ms feedback requirement
        return ()=>clearTimeout(timer);
    }, [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            showLoadingBar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        scaleX: 0,
                        opacity: 1
                    },
                    animate: {
                        scaleX: 1,
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.3,
                        ease: "easeOut"
                    },
                    className: "fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary z-50 origin-left"
                }, void 0, false, {
                    fileName: "[project]/src/components/providers/PageTransition.tsx",
                    lineNumber: 116,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/providers/PageTransition.tsx",
                lineNumber: 114,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PageTransition, {
                variant: variant,
                className: className,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/providers/PageTransition.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const useTransitionInterruption = ()=>{
    const [isTransitioning, setIsTransitioning] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const previousPathname = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef(pathname);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (pathname !== previousPathname.current) {
            // Start transition
            setIsTransitioning(true);
            // Complete transition after animation duration
            const timer = setTimeout(()=>{
                setIsTransitioning(false);
                previousPathname.current = pathname;
            }, 400); // Match page transition duration
            return ()=>{
                // Handle interruption - immediately complete transition
                clearTimeout(timer);
                setIsTransitioning(false);
            };
        }
    }, [
        pathname
    ]);
    return {
        isTransitioning
    };
};
const ScrollToTop = ()=>{
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        // Smooth scroll to top on route change
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [
        pathname
    ]);
    return null;
};
const useScrollRestoration = ()=>{
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const scrollPositions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useRef({});
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        // Save current scroll position
        const handleScroll = ()=>{
            scrollPositions.current[pathname] = window.scrollY;
        };
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, [
        pathname
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        // Restore scroll position if available
        const savedPosition = scrollPositions.current[pathname];
        if (savedPosition !== undefined) {
            window.scrollTo({
                top: savedPosition,
                behavior: "instant"
            });
        } else {
            // Scroll to top for new pages
            window.scrollTo({
                top: 0,
                behavior: "instant"
            });
        }
    }, [
        pathname
    ]);
};
const RouteChangeAnnouncer = ()=>{
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [announcement, setAnnouncement] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState("");
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        // Extract page name from pathname
        const pageName = pathname === "/" ? "Home" : pathname.split("/").filter(Boolean).join(" ").replace(/-/g, " ");
        setAnnouncement(`Navigated to ${pageName} page`);
    }, [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "status",
        "aria-live": "polite",
        "aria-atomic": "true",
        className: "sr-only",
        children: announcement
    }, void 0, false, {
        fileName: "[project]/src/components/providers/PageTransition.tsx",
        lineNumber: 241,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/src/app/template.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Template
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$providers$2f$PageTransition$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/providers/PageTransition.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function Template({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$providers$2f$PageTransition$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RouteChangeAnnouncer"], {}, void 0, false, {
                fileName: "[project]/src/app/template.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$providers$2f$PageTransition$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PageTransitionWrapper"], {
                variant: "fade",
                showLoadingBar: true,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/template.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=src_6910b215._.js.map