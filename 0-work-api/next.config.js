/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fetchCacheKeyPrefix: "fetch"
  },
}

module.exports = nextConfig
