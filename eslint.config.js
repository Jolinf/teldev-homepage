import nextConfig from 'eslint-config-next';

const config = [
  ...nextConfig,
  {
    ignores: ['legacy-assets/**', 'teldev-redesign-kit/**', 'blog-cms/**', 'Server/**', 'api/**'],
  },
];

export default config;
