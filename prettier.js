// Fix eslint shareable config (https://github.com/eslint/eslint/issues/3458)
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: [
    'plugin:prettier/recommended', // Always the last: https://github.com/prettier/eslint-plugin-prettier#recommended-configuration, with this we don't need to add `prettier` in plugins array
    'prettier/prettier', // Fix some errors: https://github.com/prettier/eslint-plugin-prettier#arrow-body-style-and-prefer-arrow-callback-issue
  ],
}
