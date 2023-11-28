const baseConfig = require('../../../../eslint.config.js');
module.exports = [
  ...baseConfig,
  {
    files: [
      'libs/api/healthcheck/feature/**/*.ts',
      'libs/api/healthcheck/feature/**/*.tsx',
      'libs/api/healthcheck/feature/**/*.js',
      'libs/api/healthcheck/feature/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/api/healthcheck/feature/**/*.ts', 'libs/api/healthcheck/feature/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/api/healthcheck/feature/**/*.js', 'libs/api/healthcheck/feature/**/*.jsx'],
    rules: {},
  },
];
