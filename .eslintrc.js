module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: [
      'react',
    ],
    rules: {
      'no-unused-vars': 'warn',  // Make this a warning instead of an error
      'react/prop-types': 'warn',  // Example rule as a warning
      // Add other rules here
    },
  };