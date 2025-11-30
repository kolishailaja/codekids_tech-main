/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Enable static export for Firebase Hosting
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Optimize bundle
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Webpack configuration for optional dependencies
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    // Ignore optional email service packages at build time
    config.resolve.alias = {
      ...config.resolve.alias,
      'resend': false,
      '@sendgrid/mail': false,
    };
    
    return config;
  },
};

module.exports = nextConfig;

