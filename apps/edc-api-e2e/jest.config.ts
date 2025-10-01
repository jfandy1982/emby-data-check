export default {
  displayName: 'edc-api-e2e',
  preset: '../../jest.preset.js',
  globalSetup: '<rootDir>/src/support/global-setup.ts',
  globalTeardown: '<rootDir>/src/support/global-teardown.ts',
  setupFiles: ['<rootDir>/src/support/test-setup.ts'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
      },
    ],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  collectCoverage: true,
  coverageDirectory: '../../coverage/apps/edc-api-e2e',
  coverageReporters: ['lcov', 'text', 'text-summary'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'edc-api e2e test results',
        outputName: 'junit-e2e-edc-api.xml',
        outputDirectory: '../../coverage/apps/edc-api',
      },
    ],
  ],
};
