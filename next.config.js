/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.notion.so'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
