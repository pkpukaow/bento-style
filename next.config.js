/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        reactStrictMode: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'static1.colliderimages.com',
            },
        ],
    },
}

module.exports = nextConfig
