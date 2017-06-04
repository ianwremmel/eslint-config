'use strict';

// This file is intenationlly sorted according to the rule descriptions on the
// eslint website.
/* eslint-disable sort-keys */

// Numbers in this file are not magic.
/* eslint-disable no-magic-numbers */

module.exports = {
  env: {
    mocha: true
  },
  plugins: [
    'mocha'
  ],
  rules: {
    'func-names': 'off',
    'max-nested-callbacks': 'off',
    'no-invalid-this': 'off',
    'require-jsdoc': 'off',
    'mocha/no-exclusive-tests': 'error'
  }
};
