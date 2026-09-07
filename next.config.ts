import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  typedRoutes: true,
  async redirects() {
    return [
      { source: "/skills", destination: "/studio", permanent: false },
      { source: "/projects", destination: "/studio", permanent: false },
    ];
  },
};

export default nextConfig;
