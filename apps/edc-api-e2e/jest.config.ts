module.exports = {
  displayName: 'edc-api-e2e',
  preset: '../../jest.preset.js',
  globalSetup: '<rootDir>/src/support/global-setup.ts',
  globalTeardown: '<rootDir>/src/support/global-teardown.ts',
  setupFiles: ['<rootDir>/src/support/test-setup.ts'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/../../coverage/apps/edc-api-e2e',
  coverageReporters: ['lcov', 'text', 'text-summary'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'Test Results of app [edc-api-e2e]',
        outputName: 'junit-edc-api-e2e.xml',
        outputDirectory: '<rootDir>/../../coverage/apps/edc-api-e2e',
      },
    ],
  ],
};
