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
        hostname: "main--ornate-hummingbird-4f71c0.netlify.app",
      },
    ],
  },
};

module.exports = nextConfig;
