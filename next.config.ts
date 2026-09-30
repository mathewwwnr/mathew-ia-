import type { NextConfig } from "next";

// STATIC_EXPORT=1 genera una versión 100% estática en /out (para hosting sin servidor).
const isStatic = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(isStatic && { output: "export", trailingSlash: true, assetPrefix: "/assets" }),
};

export default nextConfig;
