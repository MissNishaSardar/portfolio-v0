import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  typedRoutes: true,
  async redirects() {
    return [
      { source: "/skills", destination: "/handbook", permanent: false },
      { source: "/projects", destination: "/handbook", permanent: false },
      { source: "/about", destination: "/", permanent: false },
      { source: "/studio", destination: "/handbook", permanent: false },
    ];
  },
};

export default nextConfig;
