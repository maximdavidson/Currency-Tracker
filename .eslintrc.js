module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'prettier'],
  plugins: [
    'import',
    'jsx-a11y',
    'react',
    'react-hooks',
    'simple-import-sort',
    'prettier',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'simple-import-sort/imports': 'error',
    'prettier/prettier': ['error'],
  },
};
