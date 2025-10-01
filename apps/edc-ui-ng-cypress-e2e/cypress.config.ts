import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'npx nx run edc-ui-ng:serve',
        production: 'npx nx run edc-ui-ng:serve-static',
      },
      ciWebServerCommand: 'npx nx run edc-ui-ng:serve-static',
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
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
  },
});
