const baseConfig = require('../../../eslint.config.js');
module.exports = [
  ...baseConfig,
  {
    files: [
      'libs/client/ui-style-fundamentals/**/*.ts',
      'libs/client/ui-style-fundamentals/**/*.tsx',
      'libs/client/ui-style-fundamentals/**/*.js',
      'libs/client/ui-style-fundamentals/**/*.jsx',
    ],
    rules: {},
  },
  {
    files: ['libs/client/ui-style-fundamentals/**/*.ts', 'libs/client/ui-style-fundamentals/**/*.tsx'],
    rules: {},
  },
  {
    files: ['libs/client/ui-style-fundamentals/**/*.js', 'libs/client/ui-style-fundamentals/**/*.jsx'],
    rules: {},
  },
];
