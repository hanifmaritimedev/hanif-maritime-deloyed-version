/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: {
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200],
    formats: ["image/avif", "image/webp"],
    imageSizes: [96, 128, 256, 384],
    qualities: [70, 75],
  },
};

module.exports = nextConfig;
