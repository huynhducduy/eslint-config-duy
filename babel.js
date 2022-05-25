var restrictedGlobals = require('confusing-browser-globals')

module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    allowImportExportEverywhere: false,
    ecmaFeatures: {
        globalReturn: false,
    },
    // babelOptions: {}
  },
}
