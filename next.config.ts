import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    // These are the default qualities, including 90
    qualities: [75, 80, 85, 90, 95, 100], 
  }
}

export default nextConfig
