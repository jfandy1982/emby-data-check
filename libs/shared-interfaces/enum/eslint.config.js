const baseConfig = require('../../../eslint.config.js');
module.exports = [
  ...baseConfig,
  {
    files: [
      'libs/shared-interfaces/enum/**/*.ts',
      'libs/shared-interfaces/enum/**/*.tsx',
      'libs/shared-interfaces/enum/**/*.js',
      'libs/shared-interfaces/enum/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/shared-interfaces/enum/**/*.ts', 'libs/shared-interfaces/enum/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/shared-interfaces/enum/**/*.js', 'libs/shared-interfaces/enum/**/*.jsx'],
    rules: {},
  },
];
