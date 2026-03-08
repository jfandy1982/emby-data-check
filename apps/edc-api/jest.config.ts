module.exports = {
  displayName: 'edc-api',
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '<rootDir>/../../coverage/apps/edc-api',
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'Test Results of app [edc-api]',
        outputName: 'junit-edc-api.xml',
        outputDirectory: '<rootDir>/../../coverage/apps/edc-api',
      },
    ],
  ],
};
