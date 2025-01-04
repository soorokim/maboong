/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "/maboong",
  webpack: (config) => {
    config.plugins.push({
      apply: (compiler) => {
        compiler.hooks.done.tap("CopyStaticAssets", () => {
          const source = path.join(__dirname, ".next/static");
          const destination = path.join(
            __dirname,
            "public/maboong/_static/asset"
          );
          fs.copySync(source, destination);
        });
      },
    });
    return config;
  },
};

module.exports = nextConfig;
