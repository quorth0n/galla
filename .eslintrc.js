module.exports = {
  extends: ['semistandard', 'prettier', 'plugin:react/recommended'],
  plugins: ['prettier'],
  rules: { 'react/prop-types': 'off' },
  globals: {
    Image: 'readonly',
  },
};
