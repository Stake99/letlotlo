/**
 * WebGL capability detection and fallback utilities
 */

export interface WebGLCapabilities {
  supported: boolean;
  version: 1 | 2 | null;
  renderer: string | null;
  vendor: string | null;
  maxTextureSize: number | null;
  maxVertexUniforms: number | null;
  extensions: string[];
}

/**
 * Detect WebGL support and capabilities
 */
export function detectWebGLCapabilities(): WebGLCapabilities {
  if (typeof window === 'undefined') {
    return {
      supported: false,
      version: null,
      renderer: null,
      vendor: null,
      maxTextureSize: null,
      maxVertexUniforms: null,
      extensions: [],
    };
  }

  const canvas = document.createElement('canvas');
  let gl: WebGLRenderingContext | WebGL2RenderingContext | null = null;
  let version: 1 | 2 | null = null;

  // Try WebGL 2 first
  try {
    gl = canvas.getContext('webgl2') as WebGL2RenderingContext | null;
    if (gl) {
      version = 2;
    }
  } catch (e) {
    // WebGL 2 not supported
  }

  // Fall back to WebGL 1
  if (!gl) {
    try {
      gl = canvas.getContext('webgl') as WebGLRenderingContext | null;
      if (!gl) {
        gl = canvas.getContext('experimental-webgl') as WebGLRenderingContext | null;
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
      extensions: [],
    };
  }

  // Get debug info if available
  const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
  const renderer = debugInfo
    ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
    : gl.getParameter(gl.RENDERER);
  const vendor = debugInfo
    ? gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL)
    : gl.getParameter(gl.VENDOR);

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
    extensions,
  };
}

/**
 * Check if WebGL is supported
 */
export function isWebGLSupported(): boolean {
  const capabilities = detectWebGLCapabilities();
  return capabilities.supported;
}

/**
 * Check if WebGL 2 is supported
 */
export function isWebGL2Supported(): boolean {
  const capabilities = detectWebGLCapabilities();
  return capabilities.supported && capabilities.version === 2;
}

/**
 * Get a user-friendly message about WebGL support
 */
export function getWebGLSupportMessage(): string {
  const capabilities = detectWebGLCapabilities();

  if (!capabilities.supported) {
    return 'Your browser does not support WebGL, which is required for 3D graphics. Please try updating your browser or using a different one.';
  }

  if (capabilities.version === 1) {
    return 'Your browser supports WebGL 1. Some advanced 3D features may not be available.';
  }

  return 'Your browser fully supports 3D graphics.';
}

/**
 * Check if device is likely low-end based on WebGL capabilities
 */
export function isLowEndDevice(): boolean {
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
    'intel hd graphics 2000',
  ];

  return lowEndIndicators.some((indicator) => renderer.includes(indicator));
}

/**
 * Store WebGL capabilities in session storage for reuse
 */
export function cacheWebGLCapabilities(): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    const capabilities = detectWebGLCapabilities();
    sessionStorage.setItem('webgl-capabilities', JSON.stringify(capabilities));
  } catch (e) {
    // Fail silently if storage is not available
  }
}

/**
 * Get cached WebGL capabilities from session storage
 */
export function getCachedWebGLCapabilities(): WebGLCapabilities | null {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const cached = sessionStorage.getItem('webgl-capabilities');
    if (cached) {
      return JSON.parse(cached) as WebGLCapabilities;
    }
  } catch (e) {
    // Fail silently if storage is not available
  }

  return null;
}

/**
 * Get WebGL capabilities (cached or fresh)
 */
export function getWebGLCapabilities(): WebGLCapabilities {
  const cached = getCachedWebGLCapabilities();
  if (cached) {
    return cached;
  }

  const capabilities = detectWebGLCapabilities();
  cacheWebGLCapabilities();
  return capabilities;
}
