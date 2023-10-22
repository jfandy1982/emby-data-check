const baseConfig = require('../../../eslint.config.js');
module.exports = [
  ...baseConfig,
  {
    files: [
      'libs/shared-interfaces/emby-interface/**/*.ts',
      'libs/shared-interfaces/emby-interface/**/*.tsx',
      'libs/shared-interfaces/emby-interface/**/*.js',
      'libs/shared-interfaces/emby-interface/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/shared-interfaces/emby-interface/**/*.ts', 'libs/shared-interfaces/emby-interface/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/shared-interfaces/emby-interface/**/*.js', 'libs/shared-interfaces/emby-interface/**/*.jsx'],
    rules: {},
  },
];
