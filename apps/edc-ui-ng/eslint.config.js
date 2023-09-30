const { FlatCompat } = require('@eslint/eslintrc');
const baseConfig = require('../../eslint.config.js');
const js = require('@eslint/js');
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});
module.exports = [
  ...baseConfig,
  ...compat.config({ extends: ['plugin:@nx/angular', 'plugin:@angular-eslint/template/process-inline-templates'] }).map((config) => ({
    ...config,
    files: ['apps/edc-ui-ng/**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'edcNg',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'edc-ng',
          style: 'kebab-case',
        },
      ],
    },
  })),
  ...compat.config({ extends: ['plugin:@nx/angular-template'] }).map((config) => ({
    ...config,
    files: ['apps/edc-ui-ng/**/*.html'],
    rules: {},
  })),
];
