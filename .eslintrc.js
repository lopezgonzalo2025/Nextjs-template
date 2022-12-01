module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'no-unused-vars': [
      'error',
      {
        // _ is valid for unused function arguments
        argsIgnorePattern: '^_$'
      }
    ],
    'no-param-reassign': 'error',
    'no-console': 'warn',
    'no-alert': 'error',
    quotes: ['error', 'single', { avoidEscape: true }],
    '@next/next/no-img-element': 'off',
    'react/no-unescaped-entities': 'off',
    'no-undef': 'error'
  }
}
