/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pagedone.io",
        port: "",
        pathname: "/asset/uploads/**",
      },
      {
        protocol: "http",
        hostname: "img.youtube.com",
        port: "",
        pathname: "/vi/**",
      },
    ],
  },
};

export default nextConfig;
