module.exports = {
  displayName: 'edc-ui-ng',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.html', '!src/main.ts', '!src/test-setup.ts', '!src/**/*.spec.ts'],
  coverageDirectory: '<rootDir>/../../coverage/apps/edc-ui-ng',
  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'Test Results of app [edc-ui-ng]',
        outputName: 'junit-edc-ui-ng.xml',
        outputDirectory: '<rootDir>/../../coverage/apps/edc-ui-ng',
      },
    ],
  ],
};
