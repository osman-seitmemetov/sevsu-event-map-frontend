/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        APP_URL: process.env.NEXT_APP_URL,
        APP_ENV: process.env.NEXT_APP_ENV,
        APP_SERVER_URL: process.env.NEXT_APP_SERVER_URL
    },
    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: `https://event-map-django.onrender.com/api/:path*`
            }
        ]
    }
}

module.exports = nextConfig
