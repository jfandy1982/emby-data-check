const baseConfig = require('../../../../eslint.config.js');
module.exports = [
  ...baseConfig,
  {
    files: [
      'libs/api/server-edc/feature/**/*.ts',
      'libs/api/server-edc/feature/**/*.tsx',
      'libs/api/server-edc/feature/**/*.js',
      'libs/api/server-edc/feature/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/api/server-edc/feature/**/*.ts', 'libs/api/server-edc/feature/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/api/server-edc/feature/**/*.js', 'libs/api/server-edc/feature/**/*.jsx'],
    rules: {},
  },
];
