import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // TODO(Phase 4): re-enable once every route in the brief exists — typedRoutes fails
  // the build on links to routes that don't exist yet (Header/Footer nav today).
  typedRoutes: false,
};

export default nextConfig;
