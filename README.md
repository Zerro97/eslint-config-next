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
npm i -D @khuibeom/eslint-config-next
# or
pnpm i -D @khuibeom/eslint-config-next
# or
yarn add -D @khuibeom/eslint-config-next
```

Extend it in `.eslintrc`
```json
{
  "extends": "@khuibeom/next"
}
```

## VS Code auto fix
If you want to auto fix code on save, add the following in `.vscode/settings.json`.
Make sure [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) extension is installed.

```json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Note
This is a wrapper around eslint config from [Next-js-Boilerplate](https://github.com/ixartz/Next-js-Boilerplate). I made some changes to the original config, including:

1. Removing prettier. I was influenced by this [article](https://antfu.me/posts/why-not-prettier)
2. Allowing `var` and removing `prefer-const`. You can read about it [here](https://khuibeom.com/blog/javascript-fundamentals-basics-and-lexical-scope/#value-variable-function)
3. Removing jest/cypress related configs.

## Custom Config
You can always change the eslint config tailored to your need. For instance, you can use following config for adding back jest/cypress config from [Next-js-Boilerplate](https://github.com/ixartz/Next-js-Boilerplate) that I removed:

`.eslintrc`
```json
{
  "extends": "@khuibeom/next",
  "overrides": [
    {
      "files": ["**/*.test.ts", "**/*.test.tsx"],
      "plugins": ["jest", "jest-formatting", "testing-library", "jest-dom"],
      "extends": [
        "plugin:jest/recommended",
        "plugin:jest-formatting/recommended",
        "plugin:testing-library/react",
        "plugin:jest-dom/recommended"
      ]
    },
    {
      "files": ["cypress/**/*.ts"],
      "plugins": ["cypress"],
      "extends": ["plugin:cypress/recommended"],
      "parserOptions": {
        "project": "./cypress/tsconfig.json"
      }
    }
  ]
}

```

Make sure to install the necessary plugins:

```
npm i -D eslint-plugin-jest  eslint-plugin-jest-dom  eslint-plugin-jest-formatting eslint-plugin-testing-library  eslint-plugin-cypress
```

## License
[License](./LICENSE)
