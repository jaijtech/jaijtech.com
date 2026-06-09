import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    // WEB-02B: retire the legacy SDK/SaaS funnel. Permanent (308) redirects
    // consolidate link equity onto the OEM/pilot path. /pricing points at
    // /pilot for now; WEB-02D should re-point it to /oem once that exists.
    return [
      { source: "/pricing", destination: "/pilot", permanent: true },
      { source: "/register", destination: "/pilot", permanent: true },
      { source: "/success", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
