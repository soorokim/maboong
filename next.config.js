/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "/maboong",
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/maboong/_next/:path+",
          destination: "/_next/:path+",
        },
      ],
    };
  },
};

module.exports = nextConfig;
