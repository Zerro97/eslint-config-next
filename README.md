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
This is simply a wrapper around eslint config from [Next-js-Boilerplate](https://github.com/ixartz/Next-js-Boilerplate). I made some changes to the original config, including:

1. Removing prettier. I was influenced by this [article](https://antfu.me/posts/why-not-prettier)
2. Allowing `var` and removing `prefer-const`. You can read about it [here](https://khuibeom.com/blog/javascript-fundamentals-basics-and-lexical-scope/#value-variable-function)

## License
[License](./LICENSE)
