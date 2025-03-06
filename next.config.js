/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Add support for loading images and SVGs
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: 'asset/resource'
    });

    return config;
  },
  
  // Ensure proper image and asset handling
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig