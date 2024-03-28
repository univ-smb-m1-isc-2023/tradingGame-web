/** @type {import('next').NextConfig} */
import nextBuildId from 'next-build-id';

// @ts-check
const nextConfig = {
  // Use a function that returns the generateBuildId method
  generateBuildId: async () => nextBuildId({ dir: await import.meta.url, describe: true }),
 // output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
