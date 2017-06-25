'use strict';

// This file is intenationlly sorted according to the rule descriptions in the
// eslint-plugin-import readme
/* eslint-disable sort-keys */


module.exports = {
  parserOptions: {sourceType: 'module'},
  plugins: [
    'import'
  ],
  rules: {
    //
    // Static Analysis
    // https://www.npmjs.com/package/eslint-plugin-import
    //
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/default': 'error',
    'import/namespace': 'error',
    'import/no-absolute-path': 'error',
    'import/no-dynamic-require': 'error',
    // no-internal-modules applies to local source code, *not* internal modules
    // in node_modules
    'import/no-internal-modules': 'off',
    'import/no-webpack-loader-syntax': 'error',


    //
    // Helpful warnings
    // https://www.npmjs.com/package/eslint-plugin-import
    //

    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-deprecated': 'warn',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error',

    //
    // Module Systems
    // https://www.npmjs.com/package/eslint-plugin-import
    //

    'import/unambiguous': 'error',
    'import/no-commonjs': 'error',
    'import/no-amd': 'error',
    'import/no-nodejs-modules': 'off',

    //
    // Style Guide
    // https://www.npmjs.com/package/eslint-plugin-import
    //

    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/no-namespace': 'off',
    'import/extensions': [
      'error',
      'never'
    ],
    'import/order': [
      'error',
      {'newlines-between': 'always'}
    ],
    // import/order causes sort-imports to fail, given its more robust ruleset
    'sort-imports': 'off',
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 'error',
    'import/max-dependencies': 'error',
    'import/no-unassigned-import': 'error',
    'import/no-named-default': 'error',
    'import/no-anonymous-default-export': 'error'
  }
};
