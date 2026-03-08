import cypress from 'eslint-plugin-cypress/flat';
import baseConfig from '../../eslint.config.mjs';

export default [
  ...baseConfig,
  cypress.configs.recommended,
  {
    files: ['**/*.cy.ts', '**/*.cy.js'],
    rules: {
      'cypress/no-force': 'warn',
      'cypress/assertion-before-screenshot': 'warn',
      'cypress/no-pause': 'error',
    },
  },
];
