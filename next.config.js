/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // If you're using a custom domain, you can set the base path
  // basePath: '',
}

module.exports = nextConfig

