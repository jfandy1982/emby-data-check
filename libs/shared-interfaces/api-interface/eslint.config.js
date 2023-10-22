const baseConfig = require('../../../eslint.config.js');
module.exports = [
  ...baseConfig,
  {
    files: [
      'libs/shared-interfaces/api-interface/**/*.ts',
      'libs/shared-interfaces/api-interface/**/*.tsx',
      'libs/shared-interfaces/api-interface/**/*.js',
      'libs/shared-interfaces/api-interface/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/shared-interfaces/api-interface/**/*.ts', 'libs/shared-interfaces/api-interface/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/shared-interfaces/api-interface/**/*.js', 'libs/shared-interfaces/api-interface/**/*.jsx'],
    rules: {},
  },
];
