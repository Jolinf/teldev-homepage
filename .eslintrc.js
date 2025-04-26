/** @type {import('eslint').Linter.Config} */
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    plugins: ['react', '@typescript-eslint', 'jsx-a11y', 'import'],
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'prettier',
    ],
    rules: {
      'react/react-in-jsx-scope': 'off', // not needed with React 17+
    },
  };
  