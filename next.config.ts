import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    // WEB-02B/02D: retire the legacy SDK/SaaS funnel. Permanent (308)
    // redirects consolidate link equity onto the OEM/pilot path. /pricing
    // now resolves to the OEM licensing page (created in WEB-02D).
    return [
      { source: "/pricing", destination: "/oem", permanent: true },
      { source: "/register", destination: "/pilot", permanent: true },
      { source: "/success", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
