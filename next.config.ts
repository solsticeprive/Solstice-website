import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

// Resolve the project root reliably in both ESM and CJS contexts.
// `import.meta.url` is available when Next.js compiles the config as ESM;
// `__filename` is the CJS fallback.
const _dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(_dirname),
  },
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
