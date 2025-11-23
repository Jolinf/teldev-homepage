/**
 * Get the base API URL based on the environment
 * In development, uses relative path (proxied by Vite)
 * In production, uses relative path (same origin)
 */
export const getApiUrl = (path: string): string => {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `/api/${cleanPath}`;
};

