const baseConfig = require('../../../eslint.config.js');
module.exports = [
  ...baseConfig,
  {
    files: [
      'libs/shared-util/environment/**/*.ts',
      'libs/shared-util/environment/**/*.tsx',
      'libs/shared-util/environment/**/*.js',
      'libs/shared-util/environment/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/shared-util/environment/**/*.ts', 'libs/shared-util/environment/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/shared-util/environment/**/*.js', 'libs/shared-util/environment/**/*.jsx'],
    rules: {},
  },
];
