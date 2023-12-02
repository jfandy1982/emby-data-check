const baseConfig = require('../../../../eslint.config.js');
module.exports = [
  ...baseConfig,
  {
    files: [
      'libs/api/server-emby/feature/**/*.ts',
      'libs/api/server-emby/feature/**/*.tsx',
      'libs/api/server-emby/feature/**/*.js',
      'libs/api/server-emby/feature/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/api/server-emby/feature/**/*.ts', 'libs/api/server-emby/feature/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/api/server-emby/feature/**/*.js', 'libs/api/server-emby/feature/**/*.jsx'],
    rules: {},
  },
];
