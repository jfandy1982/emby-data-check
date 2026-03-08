import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      ciBaseUrl: 'http://localhost:4200',
    }),
    chromeWebSecurity: false,
    downloadsFolder: '../../cypress/edc-ui-ng-cypress-e2e/downloads',
    baseUrl: 'http://localhost:4200',
    fixturesFolder: './src/fixtures',
    screenshotOnRunFailure: true,
    screenshotsFolder: '../../cypress/edc-ui-ng-cypress-e2e/screenshots',
    specPattern: './src/e2e/**/*.cy.ts',
    supportFile: './src/support/e2e.ts',
    video: false,
    videosFolder: '../../cypress/edc-ui-ng-cypress-e2e/videos',
    async setupNodeEvents(on, config) {
      const { default: codeCoverageTask } = await import('@cypress/code-coverage/task');
      codeCoverageTask(on, config);
      return config;
    },
  },
});
