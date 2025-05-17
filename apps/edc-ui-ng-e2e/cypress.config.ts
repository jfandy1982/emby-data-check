import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import * as createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';
// @ts-expect-error According to docs not a module but rather a sub-path entry point static function
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';

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
    baseUrl: 'http://localhost:4200',
    specPattern: './src/e2e/**/*.feature',
    supportFile: './src/support/e2e.ts',
    experimentalRunAllSpecs: true,
    async setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      await addCucumberPreprocessorPlugin(on, config);
      on(
        'file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        }),
      );
      // It is IMPORTANT to return the config object with changed environment variable
      return config;
    },
  },
  video: false,
  fixturesFolder: './src/fixtures',
  viewportWidth: 1600,
  viewportHeight: 900,
  chromeWebSecurity: false,

  env: {
    tsConfig: 'tsconfig.json',
  },
});
