const baseConfig = require('../../eslint.config.js');
module.exports = [
  ...baseConfig,
  {
    files: ['apps/edc-api/**/*.ts', 'apps/edc-api/**/*.tsx', 'apps/edc-api/**/*.js', 'apps/edc-api/**/*.jsx'],
    rules: {},
  },
  {
    files: ['apps/edc-api/**/*.ts', 'apps/edc-api/**/*.tsx'],
    rules: {},
  },
  {
    files: ['apps/edc-api/**/*.js', 'apps/edc-api/**/*.jsx'],
    rules: {},
  },
];
