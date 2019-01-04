module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parser: 'babel-eslint',
  env: {
    'browser': true,
    'es6': true,
    'jasmine': true,
    'node': true,
  },
  settings: {
    react: {
      version: '16.7',
    },
  },
  rules: {
    'indent': ['error', 2],
    'no-console': 'off',
    'no-constant-condition': 'off',
    'no-unreachable': 'off',
    'no-unused-vars': 'off',
    'react/display-name': 'off',
    'semi': ["error", 'always'],
  },
};
