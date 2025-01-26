/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images.pexels.com",
      },
      {
        hostname: "static.wixstatic.com"
      }
    ],
  },
};

export default nextConfig;
