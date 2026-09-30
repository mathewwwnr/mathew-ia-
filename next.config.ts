import type { NextConfig } from "next";

// STATIC_EXPORT=1 genera una versión 100% estática en /out (para hosting sin servidor).
// BASE_PATH publica el sitio en una subcarpeta, p. ej. "/mathew-ia-" en GitHub Pages.
// ASSET_PREFIX cambia solo la ruta de los assets.
const isStatic = process.env.STATIC_EXPORT === "1";
const basePath = process.env.BASE_PATH || undefined;
const assetPrefix = process.env.ASSET_PREFIX || basePath;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(isStatic && { output: "export", trailingSlash: true, basePath, assetPrefix }),
};

export default nextConfig;
