/* @type {import('next').NextConfig} 
const nextConfig = { reactStrictMode: true };

module.exports = nextConfig; */

const isProd = process.env.NODE_ENV === "production";
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
   basePath: isProd ? "/next-portfolio-fixed" : "",
  assetPrefix: isProd ? "/next-portfolio-fixed/" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;