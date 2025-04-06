/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: '*' // or ** for permit all
          }            
      ]
  }
};

export default nextConfig;