// duy/vue2
"use strict";

// Fix eslint shareable config (https://github.com/eslint/eslint/issues/3458)
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      "parserOptions": {
        "parser": "@babel/eslint-parser",
        "sourceType": "module"
      },
      extends: [
        'plugin:vue/recommended',
        './vue-base.js'
      ],
    },
  ],
};
