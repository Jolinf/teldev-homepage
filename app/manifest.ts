import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TELDEV Technologies',
    short_name: 'TELDEV',
    description: 'Bringing technology to you.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1c6cfe',
    icons: [{ src: '/icon', sizes: '32x32', type: 'image/png' }],
  };
}
