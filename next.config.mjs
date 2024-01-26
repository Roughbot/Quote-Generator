import { resolve } from "path";
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.cache = {
      type: "filesystem",
      cacheDirectory: resolve(".next/cache"),
    };

    return config;
  },
};

export default nextConfig;
