module.exports = {
  extends: [
    'semistandard',
    'prettier',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: ['prettier'],
  parser: 'babel-eslint',
  rules: { 'react/prop-types': 'off' },
  globals: {
    Image: 'readonly',
  },
  env: {
    browser: true,
  },
};
