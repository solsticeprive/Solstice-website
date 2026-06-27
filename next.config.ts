import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // outputFileTracingRoot ensures correct file tracing for serverless/container deployments.
  outputFileTracingRoot: path.resolve(__dirname),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
