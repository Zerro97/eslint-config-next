module.exports = {
  // Configuration for JavaScript files
  "extends": [
    "airbnb-base",
    // "next",
    "plugin:@next/next/recommended", // Needed to avoid warning in next.js build: 'The Next.js plugin was not detected in your ESLint configuration'
  ],
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "overrides": [
    // Configuration for TypeScript files
    {
      "files": ["**/*.ts", "**/*.tsx"],
      "plugins": [
        "@typescript-eslint",
        "unused-imports",
        "tailwindcss",
        "simple-import-sort"
      ],
      "extends": [
        "plugin:tailwindcss/recommended",
        "airbnb-typescript",
        "next/core-web-vitals",
      ],
      "rules": {
        "react/destructuring-assignment": "off", // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
        "react/require-default-props": "off", // Allow non-defined react props as undefined
        "react/jsx-props-no-spreading": "off", // _app.tsx uses spread operator and also, react-hook-form
        "react-hooks/exhaustive-deps": "off", // Incorrectly report needed dependency with Next.js router
        "@next/next/no-img-element": "off", // We currently not using next/image because it isn't supported with SSG mode
        "@typescript-eslint/comma-dangle": "off", // Avoid conflict rule between Eslint and Prettier
        "@typescript-eslint/consistent-type-imports": "error", // Ensure `import type` is used when it's necessary
        "import/prefer-default-export": "off", // Named export is easier to refactor automatically
        "simple-import-sort/imports": "error", // Import configuration for `eslint-plugin-simple-import-sort`
        "simple-import-sort/exports": "error", // Export configuration for `eslint-plugin-simple-import-sort`
        "@typescript-eslint/no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": [
          "error",
          { "argsIgnorePattern": "^_" }
        ],
        "prefer-const": 'off',
        "no-var": 'off'
      }
    },
    // Configuration for testing
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
    // Configuration for e2e testing (Cypress)
    {
      "files": ["cypress/**/*.ts"],
      "plugins": ["cypress"],
      "extends": ["plugin:cypress/recommended"],
    }
  ]
}

// module.exports = {
//     plugins: [
//         'html',
//         'unicorn',
//         'no-only-tests',
//         'unused-imports',
//         'n',
//         'promise',
//     ],
//     extends: [
//         'plugin:@next/next/recommended',
//         'plugin:jsonc/recommended-with-jsonc',
//         'plugin:yml/standard',
//         'plugin:markdown/recommended',
//     ],
//     settings: {
//         react: {
//             version: 'detect',
//         },
//     },
//     rules: {
//         // Common
//         'semi': ['error', 'never'],
//         'curly': ['error', 'multi-or-nest', 'consistent'],
//         'quotes': ['error', 'single'],
//         'quote-props': ['error', 'consistent-as-needed'],
//         'unused-imports/no-unused-imports': 'error',
//         'unused-imports/no-unused-vars': [
//             'warn',
//             { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
//         ],

//         'no-param-reassign': 'off',
//         'array-bracket-spacing': ['error', 'never'],
//         'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
//         'block-spacing': ['error', 'always'],
//         'camelcase': 'off',
//         'comma-spacing': ['error', { before: false, after: true }],
//         'comma-style': ['error', 'last'],
//         'comma-dangle': ['error', 'always-multiline'],
//         'no-constant-condition': 'warn',
//         'no-debugger': 'error',
//         'no-console': ['error', { allow: ['warn', 'error'] }],
//         'no-cond-assign': ['error', 'always'],
//         'func-call-spacing': ['off', 'never'],
//         'key-spacing': ['error', { beforeColon: false, afterColon: true }],
//         'indent': ['error', 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],
//         'no-restricted-syntax': [
//             'error',
//             'DebuggerStatement',
//             'LabeledStatement',
//             'WithStatement',
//         ],
//         'object-curly-spacing': ['error', 'always'],
//         'no-return-await': 'off',
//         'space-before-function-paren': [
//             'error',
//             {
//                 anonymous: 'always',
//                 named: 'never',
//                 asyncArrow: 'always',
//             },
//         ],

//         // es6
//         'no-var': 'error',
//         'prefer-const': [
//             'error',
//             {
//                 destructuring: 'all',
//                 ignoreReadBeforeAssign: true,
//             },
//         ],
//         'prefer-arrow-callback': [
//             'error',
//             {
//                 allowNamedFunctions: false,
//                 allowUnboundThis: true,
//             },
//         ],
//         'object-shorthand': [
//             'error',
//             'always',
//             {
//                 ignoreConstructors: false,
//                 avoidQuotes: true,
//             },
//         ],
//         'prefer-exponentiation-operator': 'error',
//         'prefer-rest-params': 'error',
//         'prefer-spread': 'error',
//         'prefer-template': 'error',
//         'template-curly-spacing': 'error',
//         'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
//         'generator-star-spacing': 'off',
//         'spaced-comment': ['error', 'always', {
//             line: {
//                 markers: ['/'],
//                 exceptions: ['/', '#'],
//             },
//                 block: {
//                 markers: ['!'],
//                 exceptions: ['*'],
//                 balanced: true,
//             },
//         }],

//         // best-practice
//         'array-callback-return': 'error',
//         'block-scoped-var': 'error',
//         'consistent-return': 'off',
//         'complexity': ['off', 11],
//         'eqeqeq': ['error', 'smart'],
//         'no-alert': 'warn',
//         'no-case-declarations': 'error',
//         'no-multi-spaces': 'error',
//         'no-multi-str': 'error',
//         'no-with': 'error',
//         'no-void': 'error',
//         'no-useless-escape': 'off',
//         'vars-on-top': 'error',
//         'require-await': 'off',
//         'no-return-assign': 'off',
//         'operator-linebreak': ['error', 'before'],
//         'max-statements-per-line': ['error', { max: 1 }],

//         // unicorns
//         // Pass error message when throwing errors
//         'unicorn/error-message': 'error',
//         // Uppercase regex escapes
//         'unicorn/escape-case': 'error',
//         // Array.isArray instead of instanceof
//         'unicorn/no-instanceof-array': 'error',
//         // Prevent deprecated `new Buffer()`
//         'unicorn/no-new-buffer': 'error',
//         // Keep regex literals safe!
//         'unicorn/no-unsafe-regex': 'off',
//         // Lowercase number formatting for octal, hex, binary (0x1'error' instead of 0X1'error')
//         'unicorn/number-literal-case': 'error',
//         // includes over indexOf when checking for existence
//         'unicorn/prefer-includes': 'error',
//         // String methods startsWith/endsWith instead of more complicated stuff
//         'unicorn/prefer-string-starts-ends-with': 'error',
//         // textContent instead of innerText
//         'unicorn/prefer-text-content': 'error',
//         // Enforce throwing type error when throwing error while checking typeof
//         'unicorn/prefer-type-error': 'error',
//         // Use new when throwing error
//         'unicorn/throw-new-error': 'error',

//         'no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
//         'eslint-comments/disable-enable-pair': 'off',
//         'import/no-named-as-default-member': 'off',
//         'import/no-named-as-default': 'off',
//         'import/namespace': 'off',
//         'n/no-callback-literal': 'off',

//         'sort-imports': [
//             'error',
//             {
//                 ignoreCase: false,
//                 ignoreDeclarationSort: true,
//                 ignoreMemberSort: false,
//                 memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
//                 allowSeparatedGroups: false,
//             },
//         ],

//         // yml
//         'yml/quotes': ['error', { prefer: 'single', avoidEscape: false }],
//         'yml/no-empty-document': 'off',

//         // React
//         'react/react-in-jsx-scope': 'off',

//         // Typescript
//         'no-throw-literal': 'off',
//         '@typescript-eslint/no-throw-literal': 'error',
//         'no-implied-eval': 'off',
//         '@typescript-eslint/no-implied-eval': 'error',
//         'dot-notation': 'off',
//         '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],
//         '@typescript-eslint/no-floating-promises': 'error',
//         '@typescript-eslint/no-misused-promises': 'error',
//         '@typescript-eslint/await-thenable': 'error',
//         '@typescript-eslint/no-for-in-array': 'error',
//         '@typescript-eslint/no-unnecessary-type-assertion': 'error',
//         '@typescript-eslint/no-unsafe-argument': 'error',
//         '@typescript-eslint/no-unsafe-assignment': 'error',
//         '@typescript-eslint/no-unsafe-call': 'error',
//         '@typescript-eslint/no-unsafe-member-access': 'error',
//         '@typescript-eslint/no-unsafe-return': 'error',
//         'require-await': 'off',
//         '@typescript-eslint/require-await': 'error',
//         '@typescript-eslint/restrict-plus-operands': 'error',
//         '@typescript-eslint/restrict-template-expressions': 'error',
//         '@typescript-eslint/unbound-method': 'error',
//     },
//     overrides: [
//         {
//           files: ['*.json', '*.json5'],
//           parser: 'jsonc-eslint-parser',
//           rules: {
//             'jsonc/array-bracket-spacing': ['error', 'never'],
//             'jsonc/comma-dangle': ['error', 'never'],
//             'jsonc/comma-style': ['error', 'last'],
//             'jsonc/indent': ['error', 2],
//             'jsonc/key-spacing': ['error', { beforeColon: false, afterColon: true }],
//             'jsonc/no-octal-escape': 'error',
//             'jsonc/object-curly-newline': ['error', { multiline: true, consistent: true }],
//             'jsonc/object-curly-spacing': ['error', 'always'],
//             'jsonc/object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
//           },
//         },
//     ]
// }
