'use strict';

// Not using the ciscospark version due to out-of-date jsx-a11y depency. Will
// change back once it's updated

module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true
  },
  plugins: [
    'react',
    'jsx-a11y'
  ],
  extends: [
    'plugin:react/all',
    'plugin:jsx-a11y/recommended'
  ],
  rules: {
    'require-jsdoc': [0],

    //
    // react
    // These are on by default via an `extends`
    //
    'react/jsx-filename-extension': [2, {extensions: ['.js']}]

    //
    // jsx-a11y
    // These are on by default via an `extends`
    //
  }
};
