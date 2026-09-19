import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages - booking handled by Cal.com, no server needed
  // Security headers are served via `public/_headers` (Cloudflare Pages reads this at the edge).
  // `headers()` is intentionally not used — it is ignored with `output: export`.
  output: "export",
};

export default nextConfig;
