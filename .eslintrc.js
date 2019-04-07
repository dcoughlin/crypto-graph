// https://eslint.org/docs/user-guide/configuring

module.exports = {
  extends: ['plugin:flowtype/recommended', 'airbnb', 'plugin:react-native/all'],
  parser: 'babel-eslint',
  env: {
    jest: true
  },
  plugins: [
    'flowtype',
    'import',
    'jsx-a11y',
    'react',
    'react-native',
  ],
  settings: {
    'import/resolver': {
      'babel-module': {}
    }
  },
  globals: {
    WebSocket: true,
    ErrorUtils: true,
    __DEV__: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-dynamic-require': 0,
    'no-use-before-define': 0,       // (https://github.com/Intellicode/eslint-plugin-react-native/issues/22)
    'import/prefer-default-export': 0,
    'react/forbid-prop-types': 0,
    'object-curly-newline': 0,
    'no-shadow': 0,
    'import/first': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'no-template-curly-in-string': 0,
    'radix': 0,
    'prefer-destructuring': ['error', { 'object': true, 'array': false }],
  },
};
