import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["bootstrap"]
  //   reactCompiler: true
  }
}

export default nextConfig;