const baseConfig = require('../../../../eslint.config.js');
module.exports = [
  ...baseConfig,
  {
    files: [
      'libs/api/server-emby/data-access/**/*.ts',
      'libs/api/server-emby/data-access/**/*.tsx',
      'libs/api/server-emby/data-access/**/*.js',
      'libs/api/server-emby/data-access/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/api/server-emby/data-access/**/*.ts', 'libs/api/server-emby/data-access/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/api/server-emby/data-access/**/*.js', 'libs/api/server-emby/data-access/**/*.jsx'],
    rules: {},
  },
];
