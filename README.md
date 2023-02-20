<div align="center">
  <h1>@khuibeom/eslint-config-next</h1>
  <p>Opinionated eslint config for Next application</p>
</div>

## Description
[![npm](https://img.shields.io/npm/v/@khuibeom/eslint-config-next?color=477ef5)](https://npmjs.com/package/@khuibeom/eslint-config-next)

Opinionated eslint config that I use for Next application.

## Install
Install `@khuibeom/eslint-config-next`

```
npm i -D eslint @khuibeom/eslint-config-next
# or
pnpm i -D eslint @khuibeom/eslint-config-next
# or
yarn add -D eslint @khuibeom/eslint-config-next
```

Extend it in `.eslintrc`
```json
{
  "extends": "@khuibeom/next"
}
```

## Note
This is simply a wrapper around eslint config from [Next-js-Boilerplate](https://github.com/ixartz/Next-js-Boilerplate). Currently, I overrided 2 rules from the config:

```
"prefer-const": 'off',
"no-var": 'off'
```

You can read more about why I choose to disable prefer-const in this [blog article](https://khuibeom.com/blog/javascript-fundamentals-basics-and-lexical-scope#value-variable-function) that I wrote.

## License
[License](./LICENSE)
