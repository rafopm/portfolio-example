/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/tools',
            destination: '/?page=Tools',
            permanent: true,
          },
          {
            source: '/contact',
            destination: '/?page=Contacto',
            permanent: true,
          },
          {
            source: '/about',
            destination: '/?page=About',
            permanent: true,
          },
          {
            source: '/projects',
            destination: '/?page=Projects',
            permanent: true,
          },

        ]
      },

}

module.exports = nextConfig
