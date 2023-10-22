const baseConfig = require('../../../eslint.config.js');
module.exports = [
  ...baseConfig,
  {
    files: [
      'libs/shared-interfaces/db-interface/**/*.ts',
      'libs/shared-interfaces/db-interface/**/*.tsx',
      'libs/shared-interfaces/db-interface/**/*.js',
      'libs/shared-interfaces/db-interface/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/shared-interfaces/db-interface/**/*.ts', 'libs/shared-interfaces/db-interface/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/shared-interfaces/db-interface/**/*.js', 'libs/shared-interfaces/db-interface/**/*.jsx'],
    rules: {},
  },
];
