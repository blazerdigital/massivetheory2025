/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  output: 'export',
  distDir: 'build', // Customize the output directory name if needed
};

module.exports = nextConfig;
