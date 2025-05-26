export default {
  displayName: 'shared-model-enum',
  preset: '../../../../jest.preset.js',
  testEnvironment: 'node',
  collectCoverage: true,
  passWithNoTests: true,
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../../../coverage/libs/shared/model/enum',
};
