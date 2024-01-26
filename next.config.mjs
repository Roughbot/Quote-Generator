/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.cache = {
      type: "filesystem",
      cacheDirectory: ".next/cache",
    };

    return config;
  },
};

export default nextConfig;
