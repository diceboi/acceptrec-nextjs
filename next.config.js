/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
        port: '',
        pathname: '/avatar/**',
      },
      {
        protocol: 'https',
        hostname: 'cms.arpusz.hu',
        port: '',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: 'admin.acceptrec.co.uk',
        port: '',
        pathname: '/wp-content/**',
      },
    ],
  },

  async redirects() {
    return [
      // Régi PHP/Joomla alapú útvonalak
      {
        source: '/index.php/:path*',
        destination: '/',
        permanent: true, // 301 redirect
      },
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },

      // Régi paraméteres (showall=1) URL-ek, pl. /clients/..., /career-advice/... stb.
      {
        source: '/clients/:slug*',
        has: [{ type: 'query', key: 'showall' }],
        destination: '/',
        permanent: true,
      },
      {
        source: '/career-advice/:slug*',
        has: [{ type: 'query', key: 'showall' }],
        destination: '/',
        permanent: true,
      },
      {
        source: '/blogs/:slug*',
        has: [{ type: 'query', key: 'showall' }],
        destination: '/',
        permanent: true,
      },
      {
        source: '/about-us/:slug*',
        has: [{ type: 'query', key: 'showall' }],
        destination: '/',
        permanent: true,
      },
      {
        source: '/temp/:slug*',
        has: [{ type: 'query', key: 'showall' }],
        destination: '/',
        permanent: true,
      },
      {
        source: '/articles/:slug*',
        has: [{ type: 'query', key: 'showall' }],
        destination: '/',
        permanent: true,
      },

      // Hibás /blogs/undefined URL
      {
        source: '/blogs/undefined',
        destination: '/blogs',
        permanent: true,
      },

      // Régi staging domain (ha valahol még felbukkan)
      {
        source: '/temp/:path*',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;