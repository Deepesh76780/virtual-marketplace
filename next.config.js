/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "virtual-marketplace.vercel.app",
      },
    ],
  },
};

module.exports = nextConfig;
