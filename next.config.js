/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['cdn.pixabay.com'], // Add this line to allow images from cdn.pixabay.com
  },
}

module.exports = nextConfig;
