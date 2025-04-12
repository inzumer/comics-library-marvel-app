import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.annihil.us',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
