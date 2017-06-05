'use strict';

// This file is intenationlly sorted according to the rule descriptions on the
// eslint website.
/* eslint-disable sort-keys */

module.exports = {
  extends: './es5.js',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'script'
  },
  rules: {
    quotes: ['error', 'backtick'],
    //
    // ECMAScript 6
    // http://eslint.org/docs/rules/#ecmascript-6
    //
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': [
      'error',
      {
        after: true,
        before: true
      }
    ],
    'constructor-super': 'error',
    'generator-star-spacing': [
      'error',
      {
        after: true,
        before: true
      }
    ],
    'no-class-assign': 'error',
    'no-confusing-arrow': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-new-symbol': 'error',
    'no-restricted-imports': 'off',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'sort-imports': 'error',
    'symbol-description': 'error',
    'template-curly-spacing': ['error', 'never'],
    'yield-star-spacing': ['error', 'after']
  }
};
