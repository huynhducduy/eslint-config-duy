# eslint-config-duy

This package provides Duy's .eslintrc as an extensible shared config.

## Usage

```sh
npm install --save-dev eslint-config-duy
yarn add -D eslint-config-duy
```

We currently export 8 eslint configurations for your usage.
All these settings are 100% recommended (from author or community), no personal taste at all.

In your `.eslintrc.js`

```js
module.exports = {
  extends: [
    "duy", // Base version, contain default rule for js, import, json
    "duy/typescript", // Add support for Typescript
    "duy/react", // React, react-hook, jsx
    "duy/jest", // Jest, testing-library
    "duy/cypress", // Cypress
    "duy/vue3", // or "duy/vue2" depends on your vuejs version
    "duy/vue-typescript", // if you use vuejs together with typescript
    "duy/prettier", //  Always the last, if you want to use eslint together with prettier (prettier as eslint's rules, disable all eslint's style rules)
  ],
};
```

Some stylistic rules in case you need it (and don't need prettier): (please make sure these rule match your project's `.editorconfig`)

```js
{
  semi: ["error", "never"],
  indent: ["error", 2],
  "@typescript-eslint/indent": ["error", 2]
  quotes: ["error", "single", { "avoidEscape": true }],
  'quote-props': ["error", "consistent-as-needed"],
  'jsx-quotes': ["error", "prefer-single"],
  'comma-dangle': ["error", "only-multiline"],
  'object-curly-spacing': ["error", "never"],
  'array-bracket-spacing': ["error", "never"],
  'object-curly-newline': ["error", { "consistent": true }],
  'array-bracket-newline': ["error", "consistent"],
  'curly': "error",
  'brace-style': "error",
  'arrow-parens': ["error", "always"],
}
```

## Todo

- a11y
- react-native
- promise
- node
- graphql
- html
- compat
- security
- fp
- jsdoc
- es?
- eslint-comments?
