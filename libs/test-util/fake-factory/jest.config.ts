export default {
  displayName: 'test-utils-fake-factory',
  preset: '../../../jest.preset.js',
  testEnvironment: 'node',
  collectCoverage: true,
  passWithNoTests: true,
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../coverage/libs/test-util/fake-factory',
};
