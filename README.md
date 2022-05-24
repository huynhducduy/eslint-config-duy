# eslint-config-duy

This package provides Duy's .eslintrc as an extensible shared config.

## Usage

```sh
npm install --save-dev eslint-config-duy
yarn add -D eslint-config-duy
```

We currently export 8 eslint configurations for your usage.

In your `.eslintrc.js`

```js
module.exports = {
  extends: [
    "duy", // Base version, contain default rule for js, import, json
    "duy/typescript", // Add support for Typescript
    "duy/react", // React, react-hook, jsx version
    "duy/jest", // Jest, testing-library version
    "duy/vue3", // or "duy/vue2" depends on your vuejs version
    "duy/vue-typescript", // if you use vuejs together with typescript
    "duy/prettier", //  Always the last, if you want to use eslint together with prettier (prettier as eslint's rules, disable all eslint's style rules)
  ],
};
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
