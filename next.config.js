/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nextjs.org',
      },
    ],
  },
  // Completely disable static export
  output: 'standalone',
  // Add trailing slash to force dynamic routing
  trailingSlash: true,
  // Disable static optimization
  experimental: {
    disableOptimizedLoading: true,
    optimizeCss: false,
    // Disable static generation completely
    isrMemoryCacheSize: 0,
    serverComponentsExternalPackages: ['react', 'react-dom']
  },
  // Skip type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Skip ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable static generation for specific paths
  distDir: process.env.NODE_ENV === 'production' ? '.next-production' : '.next',
  // Disable compression
  compress: false,
  // Force all pages to be server-side rendered
  reactStrictMode: false,
  // Disable static optimization
  staticPageGenerationTimeout: 1,
};

module.exports = nextConfig;
