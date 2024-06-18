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
    endOfLine: 'off',
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
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@components', './src/components'],
          ['@assets', './src/assets'],
          ['@styles', './src/styles'],
          ['@utils', './src/utils'],
          ['@pages', './src/pages'],
        ],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
};
