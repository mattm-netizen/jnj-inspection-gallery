import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rentalpro.jnjequipmentrental.com',
      },
      {
        protocol: 'https',
        hostname: 'files.manuscdn.com',
      },
    ],
  },
};

export default nextConfig;
