module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    semi: ['error', 'never'], // ;
    'comma-dangle': ['error', 'never'], // [1,]
    'no-unused-vars': [
      'error',
      {
        // _ is a valid argument name for unused arguments in a function
        argsIgnorePattern: '^_$'
      }
    ],
    'no-param-reassign': 'error',
    'no-console': 'warn',
    'no-alert': 'error',
    quotes: ['error', 'single', { avoidEscape: true }],
    '@next/next/no-img-element': 'off',
    'react/no-unescaped-entities': 'off'
  }
}
