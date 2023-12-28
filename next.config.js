/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Handling canvas.node binary module
    config.module.rules.push({ test: /\.node$/, use: "raw-loader" });

    // Exclude canvas from being processed by Next.js in browser
    if (!isServer) config.externals.push("canvas");
    return config;
  },
};

module.exports = nextConfig;
