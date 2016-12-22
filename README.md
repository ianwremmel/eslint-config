# @ianwremmel/eslint-config

[![CircleCI](https://circleci.com/gh/ianwremmel/eslint-config.svg?style=svg)](https://circleci.com/gh/ianwremmel/eslint-config)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0c3a90848b8a4d7b85a915772bfd8439)](https://www.codacy.com/app/design_2/eslint-config?utm_source=github.com&utm_medium=referral&utm_content=ianwremmel/eslint-config&utm_campaign=badger)
[![npm (scoped)](https://img.shields.io/npm/v/@ianwremmel/eslint-config.svg?style=flat-square)](https://www.npmjs.com/package/@ianwremmel/eslint-config)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](LICENSE)

> Common eslint rules for @ianwremmel's projects

## Install

```
npm install --save-dev @ianwremmel/eslint-config
```

### Dependencies

[ESLint](http://eslint.org/docs/developer-guide/shareable-configs) doesn't support plugins in shareable configs, so you'll need to run the following script (borrowed from [airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)) to install the requisite peerDependencies.

```bash
(
  export PKG=@ianwremmel/eslint-config
  npm info "$PKG@latest" peerDependencies --json \
    | command sed 's/[\{\},]//g ; s/: /@/g' \
    | xargs npm install --save-dev "$PKG@latest"
)
```

Which produces and runs a command like:

```bash
npm install --save-dev @ianwremmel/eslint-config eslint@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-mocha@^#.#.# eslint-plugin-react@^#.#.#
```

## Usage

Add the following to your eslintrc to use es2015 syntax *without* import/export

```yaml
extends: "@ianwremmel"
```

For import/export

```yaml
extends: "@ianwremmel/eslint-config/es2015-imports"
```

> import/export is kept out of the default ruleset because the rest of the rules *should* work without a build step in adequately recent node versions.

Additional rules:

- @ianwremmel/eslint-config/es5
- @ianwremmel/eslint-config/mocha
- @ianwremmel/eslint-config/react
- @ianwremmel/eslint-config/script

> Except for es5, all rulesets should be used in conjuction with the default, es5, or es2015-imports *and be listed after the ruleset with which they're combined*.

## Contribute

PRs generally accepted, but ruleset changes will require a detailed justification.

## License
[MIT &copy; Ian W. Remmel](LICENSE)
