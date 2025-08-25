/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ['zod'],
  experimental: {
    nextScriptWorkers: true
  }
};

export default nextConfig;
