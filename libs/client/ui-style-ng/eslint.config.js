const baseConfig = require('../../../eslint.config.js');
module.exports = [
  ...baseConfig,
  {
    files: [
      'libs/client/ui-style-ng/**/*.ts',
      'libs/client/ui-style-ng/**/*.tsx',
      'libs/client/ui-style-ng/**/*.js',
      'libs/client/ui-style-ng/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/client/ui-style-ng/**/*.ts', 'libs/client/ui-style-ng/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/client/ui-style-ng/**/*.js', 'libs/client/ui-style-ng/**/*.jsx'],
    rules: {},
  },
];
