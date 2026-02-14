module.exports = {
  displayName: 'edc-api',
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  collectCoverage: true,
  coverageDirectory: '../../coverage/apps/edc-api',
  coverageReporters: ['lcov', 'text', 'text-summary'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'edc-api unit test results',
        outputName: 'junit-edc-api.xml',
        outputDirectory: '../../coverage/apps/edc-api',
      },
    ],
  ],
};
