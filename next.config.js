/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep only essential configurations
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nextjs.org',
      },
    ],
  },
  // Skip type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Skip ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  }
};

module.exports = nextConfig;
