const baseConfig = require('../../../../eslint.config.js');
module.exports = [
  ...baseConfig,
  {
    files: [
      'libs/client/ui-style/nord/**/*.ts',
      'libs/client/ui-style/nord/**/*.tsx',
      'libs/client/ui-style/nord/**/*.js',
      'libs/client/ui-style/nord/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/client/ui-style/nord/**/*.ts', 'libs/client/ui-style/nord/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/client/ui-style/nord/**/*.js', 'libs/client/ui-style/nord/**/*.jsx'],
    rules: {},
  },
];
