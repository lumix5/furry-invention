/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["raw.githubusercontent.com", "static.wikia.nocookie.net"],
  },
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
  },
};
