'use strict';

// This file is intenationlly sorted according to the rule descriptions on the
// eslint website.
/* eslint-disable sort-keys */

module.exports = {
  parserOptions: {
    ecmaVersion: 5,
    sourceType: 'script'
  },
  rules: {
    //
    // Possible Errors
    // http://eslint.org/docs/rules///possible-errors
    //
    'no-await-in-loop': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': ['error', 'always'],
    'no-console': 'error',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': ['error', 'all'],
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'use-isnan': 'error',
    'valid-jsdoc': [
      'error',
      {
        prefer: {
          arg: 'param',
          argument: 'param',
          fires: 'emits',
          return: 'returns',
          virtual: 'abstract'
        },
        requireParamDescription: false,
        requireReturn: true,
        requireReturnDescription: false,
        requireReturnType: true
      }
    ],
    'valid-typeof': 'error',
    //
    // Best Practices
    // http://eslint.org/docs/rules///best-practices
    //
    'accessor-pairs': [
      'error',
      {
        setWithoutGet: true,
        getWithoutSet: false
      }
    ],
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    // warning for now: getters are a useful way to create read-only static
    // properties without pulling in babel. (e.g. have a getter on an http error
    // for the status code)
    'class-methods-use-this': 'warn',
    complexity: ['error', 7],
    'consistent-return': 'error',
    curly: ['error', 'all'],
    'default-case': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': [
      'error',
      {allowKeywords: true}
    ],
    eqeqeq: 'error',
    'guard-for-in': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': [
      'error',
      {
        boolean: true,
        number: true,
        string: true,
        allow: [
          '!!'
        ]
      }
    ],
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': [
      'error',
      {props: false}
    ],
    'no-proto': 'error',
    'no-redeclare': [
      'error',
      {builtinGlobals: true}
    ],
    'no-restricted-properties': 'off',
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': 'warn',
    'no-with': 'error',
    'prefer-promise-reject-errors': 'error',
    radix: 'error',
    'require-await': 'error',
    'vars-on-top': 'error',
    'wrap-iife': 'error',
    yoda: ['error', 'never'],
    //
    // Strict Mode
    // http://eslint.org/docs/rules///strict-mode
    //
    strict: ['error', 'global'],
    //
    // Variables
    // http://eslint.org/docs/rules///variables
    //
    'init-declarations': 'off',
    'no-catch-shadow': 'error',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': 'off',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-unused-vars': 'error',
    'no-use-before-define': [
      'error',
      {
        classes: true,
        functions: false
      }
    ],
    //
    // Node.js and CommonJS
    // http://eslint.org/docs/rules///nodejs-and-commonjs
    //
    'callback-return': 'error',
    'global-require': 'error',
    'handle-callback-err': 'error',
    'no-mixed-requires': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'off',
    'no-process-exit': 'error',
    'no-restricted-imports': 'off',
    'no-restricted-modules': 'off',
    'no-sync': 'error',
    //
    // Stylistic Issues
    // http://eslint.org/docs/rules///stylistic-issues
    //
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'never'],
    'brace-style': [
      'error',
      'stroustrup',
      {allowSingleLine: true}
    ],
    camelcase: 'error',
    'capitalized-comments': 'off',
    'comma-dangle': ['error', 'never'],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'consistent-this': ['error', 'self'],
    'eol-last': 'error',
    'func-call-spacing': ['error', 'never'],
    'func-name-matching': ['error', 'always'],
    'func-names': 'error',
    'func-style': ['error', 'declaration'],
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    indent: [
      'error',
      2,
      {SwitchCase: 1}
    ],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'keyword-spacing': 'error',
    'line-comment-position': [
      'error',
      {position: 'above'}
    ],
    'linebreak-style': 'error',
    'lines-around-comment': 'off',
    'lines-around-directive': ['error', 'always'],
    'max-depth': ['error', 5],
    'max-len': 'off',
    'max-lines': 'off',
    'max-nested-callbacks': ['error', 3],
    'max-params': ['error', 4],
    'max-statements': ['error', 30],
    'max-statements-per-line': [
      'error',
      {max: 1}
    ],
    'multiline-ternary': ['error', 'never'],
    'new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: true,
        capIsNewExceptions: [
          'S'
        ]
      }
    ],
    'new-parens': 'error',
    'newline-after-var': 'off',
    'newline-before-return': 'error',
    'newline-per-chained-call': [
      'error',
      {ignoreChainWithDepth: 2}
    ],
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-inline-comments': 'error',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'off',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'off',
    'no-multiple-empty-lines': [
      'error',
      {max: 2}
    ],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': [
      'error',
      {allowForLoopAfterthoughts: true}
    ],
    'no-restricted-syntax': 'off',
    'no-tabs': 'error',
    'no-ternary': 'off',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'off',
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 2
        },
        ObjectPattern: {
          multiline: true,
          minProperties: 3
        }
      }
    ],
    'object-curly-spacing': ['error', 'never'],
    'object-property-newline': 'error',
    'one-var': 'off',
    'one-var-declaration-per-line': 'off',
    'operator-assignment': 'off',
    'operator-linebreak': ['error', 'none'],
    'padded-blocks': 'off',
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single'],
    'require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: false,
          MethodDefinition: true,
          ClassDeclaration: true
        }
      }
    ],
    semi: ['error', 'always'],
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'sort-keys': 'error',
    'sort-vars': 'error',
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': [
      'error',
      'always',
      {
        exceptions: [
          '!'
        ],
        markers: [
          '**',
          '**!'
        ]
      }
    ],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': 'error',
    'wrap-regex': 'off'
  }
};
