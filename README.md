# eslint-config-gsandf-react

[![Greenkeeper badge](https://badges.greenkeeper.io/gsandf/eslint-config-gsandf-react.svg)](https://greenkeeper.io/)

> GS&F's extendable ESLint configuration (full config with dependencies) for JSX/React projects

## Usage

This file is meant to be part of your [`.eslintrc*` file or package.json](http://eslint.org/docs/user-guide/configuring#configuration-file-formats).  This is a batteries-included install, so all dependencies are included.


To use this with your package, first install this package, then add the following to your `.eslintrc` file:

```json
{
  "extends": "gsandf-react"
}
```

You can override settings from this package by writing them in your own `.eslintrc`. (See [ESLint's rules](http://eslint.org/docs/rules/).)

## Install

With either [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/) installed, run one of the following:

```shell
# If using Yarn:
yarn add eslint-config-gsandf

# If using npm:
npm install --save eslint-config-gsandf
```

## See Also

- [`feross/eslint-config-standard`](https://github.com/feross/eslint-config-standard)
- [ESLint docs](http://eslint.org/)

## License

MIT
