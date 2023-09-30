const baseConfig = require('../../../eslint.config.js');
module.exports = [
  ...baseConfig,
  {
    files: [
      'libs/api/feature-health/**/*.ts',
      'libs/api/feature-health/**/*.tsx',
      'libs/api/feature-health/**/*.js',
      'libs/api/feature-health/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/api/feature-health/**/*.ts', 'libs/api/feature-health/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/api/feature-health/**/*.js', 'libs/api/feature-health/**/*.jsx'],
    rules: {},
  },
];
