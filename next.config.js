const path = require("path");
const fs = require("fs-extra");

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "/maboong",
  webpack: (config) => {
    config.plugins.push({
      apply: (compiler) => {
        compiler.hooks.done.tap("CopyStaticAssets", () => {
          const source = path.join(__dirname, ".next/static"); // 빌드된 정적 파일 위치
          const destination = path.join(
            __dirname,
            "public/maboong/_static/asset"
          ); // 복사될 대상 경로

          // 디렉터리 복사
          try {
            fs.copySync(source, destination);
            console.log(`Assets copied from ${source} to ${destination}`);
          } catch (err) {
            console.error("Error copying assets:", err);
          }
        });
      },
    });
    return config;
  },
};

module.exports = nextConfig;
