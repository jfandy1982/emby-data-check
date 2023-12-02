const baseConfig = require('../../../../eslint.config.js');
module.exports = [
  ...baseConfig,
  {
    files: [
      'libs/api/server-edc/data-access/**/*.ts',
      'libs/api/server-edc/data-access/**/*.tsx',
      'libs/api/server-edc/data-access/**/*.js',
      'libs/api/server-edc/data-access/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/api/server-edc/data-access/**/*.ts', 'libs/api/server-edc/data-access/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/api/server-edc/data-access/**/*.js', 'libs/api/server-edc/data-access/**/*.jsx'],
    rules: {},
  },
];
