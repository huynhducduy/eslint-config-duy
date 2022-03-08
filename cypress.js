'use strict';

// Fix eslint shareable config (https://github.com/eslint/eslint/issues/3458)
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  plugins: ['jest', 'testing-library'],
  overrides: [
    {
      files: ['**/cypress/**/*'],
      extends: [
        'plugin:cypress/recommended',
      ],
    },
  ],
};
