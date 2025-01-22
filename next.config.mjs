/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placeimg.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/_next/static/(.*)', // Archivos estáticos generados por Next.js
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cacheo de largo plazo para archivos estáticos
          },
        ],
      },
      {
        source: '/(.*)', // Otros recursos
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, max-age=0, must-revalidate', // Evitar caché para contenido dinámico
          },
        ],
      },
    ];
  },
};

export default nextConfig;
