/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: { formats: ['image/avif', 'image/webp'] },
  async redirects() {
    return [{ source: '/contact', destination: '/#contact', permanent: false }];
  },
};
export default nextConfig;