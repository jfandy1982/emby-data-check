const baseConfig = require('../../eslint.config.js');
module.exports = [
  ...baseConfig,
  {
    files: ['apps/edc-api-e2e/**/*.ts', 'apps/edc-api-e2e/**/*.tsx', 'apps/edc-api-e2e/**/*.js', 'apps/edc-api-e2e/**/*.jsx'],
    rules: {},
  },
];
