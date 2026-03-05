import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "image.tmdb.org" },
      { hostname: "www.themoviedb.org" },
    ],
  },
};

export default nextConfig;