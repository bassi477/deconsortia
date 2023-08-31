/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => [
        {
            source: '/',
            destination: '/home',
            permanent: true
        },
        {
            source: '/about',
            destination: '/about/introduction',
            permanent: true
        },
    ],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'mdbcdn.b-cdn.net',
                pathname: '/**',
                port: ''
            }
        ]
    }
}

module.exports = nextConfig
