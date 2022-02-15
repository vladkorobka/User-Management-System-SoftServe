module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/prop-types': 0,
    'comma-dangle': ['error', 'never'],
    'quote-props': 0,
    // 'semi': ['error', 'never'],
    'no-trailing-spaces': ['error', {
      'ignoreComments': true
    }],
    'linebreak-style': 0,
    'react/jsx-filename-extension': [0]
  }
};
