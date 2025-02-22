import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "aceternity.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "b.zmtcdn.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
