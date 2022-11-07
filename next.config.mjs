/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
  },
  trailingSlash: true,
  assetPrefix: "https://0208-b-runfortree-71badd.spheron.app",
};

export default nextConfig;
