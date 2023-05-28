/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.prismic.io",
      "images.unsplash.com",
      "img.youtube.com",
      "img.icons8.com",
    ],
  },
};

module.exports = nextConfig;
