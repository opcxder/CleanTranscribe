/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/api/:path*`,
      },
    ]
  },
  images: {
    domains: ['img.youtube.com'],
  },
  experimental: {
    serverComponentsExternalPackages: ['youtube-transcript-api'],
  },
};

export default nextConfig;