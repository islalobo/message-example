module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb', // eslint:recommended
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-curly-newline': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/destructuring-assignment': 'off',
    'react/no-did-update-set-state': 'off',
    'react/prefer-stateless-function': 'off',
    'key-spacing': 'off',
    'max-len': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'consistent-return': 'off',
  },
};
