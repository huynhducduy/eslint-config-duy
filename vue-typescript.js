// duy/vue-typescript
"use strict";

// Fix eslint shareable config (https://github.com/eslint/eslint/issues/3458)
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      "parserOptions": {
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
      },
    },
  ],
};
