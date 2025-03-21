/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Set the base path to your repository name
  basePath: "/my_portfolio", // Replace 'portfolio' with your actual repository name
  // Set the asset prefix to your repository name
  assetPrefix: "/my_portfolio/", // Replace 'portfolio' with your actual repository name
  // Disable trailing slashes
  trailingSlash: false,
}

module.exports = nextConfig

