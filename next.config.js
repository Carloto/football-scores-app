/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/2015',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
