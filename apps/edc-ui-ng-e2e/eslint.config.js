const { FlatCompat } = require('@eslint/eslintrc');
const baseConfig = require('../../eslint.config.js');
const js = require('@eslint/js');
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});
module.exports = [
  ...baseConfig,
  ...compat.extends('plugin:cypress/recommended'),
  {
    files: ['apps/edc-ui-ng-e2e/**/*.ts', 'apps/edc-ui-ng-e2e/**/*.tsx', 'apps/edc-ui-ng-e2e/**/*.js', 'apps/edc-ui-ng-e2e/**/*.jsx'],
    rules: {},
  },
];
