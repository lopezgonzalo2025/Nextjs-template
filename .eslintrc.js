module.exports = {
  extends: ['next/core-web-vitals'],
  plugins: ['simple-import-sort'],
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
    'max-len': ['error', 100],
    'no-param-reassign': 'error',
    'no-console': 'warn',
    'no-alert': 'error',
    quotes: ['error', 'single'],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error'
  }
}
