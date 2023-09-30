const baseConfig = require('../../../eslint.config.js');
module.exports = [
  ...baseConfig,
  {
    files: [
      'libs/shared/util-env/**/*.ts',
      'libs/shared/util-env/**/*.tsx',
      'libs/shared/util-env/**/*.js',
      'libs/shared/util-env/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/shared/util-env/**/*.ts', 'libs/shared/util-env/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/shared/util-env/**/*.js', 'libs/shared/util-env/**/*.jsx'],
    rules: {},
  },
];
