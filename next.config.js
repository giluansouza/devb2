/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'devboot.com.br',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
