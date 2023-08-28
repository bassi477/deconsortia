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
    ]
}

module.exports = nextConfig
