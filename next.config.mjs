/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponents: true,
    concurrentFeatures: true,
  },
  future: {
    webpack5: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.cache = {
      type: "filesystem",
      cacheDirectory: ".next/cache",
    };

    return config;
  },
};

export default nextConfig;
