/** @type {import('next').NextConfig} */
const nextConfig = {
    env :{
        API_URL:"http://localhost:3000"
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'a0.muscache.com',
          },
        ],
      }
}

module.exports = nextConfig
