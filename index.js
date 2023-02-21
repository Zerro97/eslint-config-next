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
        "simple-import-sort"
      ],
      "extends": [
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

        // Custom
        "prefer-const": 'off',
        "no-var": 'off',
        "indent": ['error', 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],
      }
    },
  ]
}
