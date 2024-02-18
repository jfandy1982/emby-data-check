import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run edc-ui-fundamentals:serve:development',
        production: 'nx run edc-ui-fundamentals:serve:production',
      },
      ciWebServerCommand: 'nx run edc-ui-fundamentals:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
    video: false,
  },
});
