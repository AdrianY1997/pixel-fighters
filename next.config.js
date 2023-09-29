/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/inicio",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
