// duy/vue3
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
        'plugin:vue/vue3-recommended',
        './vue-base.js'
      ],
    },
  ],
};
