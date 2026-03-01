import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      ciBaseUrl: 'http://localhost:4200',
    }),
    chromeWebSecurity: false,
    cucumber: {
      stepDefinitions: './src/e2e/step_definitions/**/*.ts',
    },
    downloadsFolder: '../../cypress/edc-ui-ng-cucumber-e2e/downloads',
    baseUrl: 'http://localhost:4200',
    fixturesFolder: './src/fixtures',
    screenshotsFolder: '../../cypress/edc-ui-ng-cucumber-e2e/screenshots',
    screenshotOnRunFailure: true,
    specPattern: './src/e2e/**/*.feature',
    supportFile: './src/support/e2e.ts',
    video: false,
    videosFolder: '../../cypress/edc-ui-ng-cucumber-e2e/videos',
    async setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      await addCucumberPreprocessorPlugin(on, config);
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        }),
      );

      return config;
    },
  },
});
