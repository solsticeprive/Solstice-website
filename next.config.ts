import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Explicitly pin the workspace root so Turbopack doesn't walk up to a stray
  // lockfile in the Docker container's parent directories.
  turbopack: {
    root: path.resolve(__dirname),
  },
  // outputFileTracingRoot is a second anchor that uses a different code path
  // and works even when the Turbopack Rust binary ignores turbopack.root.
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
