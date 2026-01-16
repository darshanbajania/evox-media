/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  rewrites: async () => [
    {
      source: "/master-service-agreement",
      destination: "/master-service-agreement.html",
    },
  ],
};

export default nextConfig;
