module.exports = {
  displayName: 'edc-ui-ng',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/../../coverage/apps/edc-ui-ng',
  coverageReporters: ['lcov', 'text', 'text-summary'],
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
        suiteName: 'edc-ui-ng unit test results',
        outputName: 'junit-edc-ui-ng.xml',
        outputDirectory: '<rootDir>/../../coverage/apps/edc-ui-ng',
      },
    ],
  ],
};
