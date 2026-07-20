import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/medical-pedicure",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/medical-pedicure",
  },
};

export default nextConfig;
