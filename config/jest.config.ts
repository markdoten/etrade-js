/**
 * @file Jest configuration file.
 * For a detailed explanation regarding each configuration property and type
 * check, visit: https://jestjs.io/docs/en/configuration.html.
 */

export default {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/accounts/index.ts',
    '<rootDir>/src/alerts/index.ts',
    '<rootDir>/src/auth/index.ts',
    '<rootDir>/src/market/index.ts',
    '<rootDir>/src/order/index.ts',
    'enums.ts',
    'interface.ts'
  ],
  coverageReporters: ['text'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  maxWorkers: '50%',
  preset: 'ts-jest',
  roots: ['src', 'test'],
  setupFiles: [],
  testEnvironment: 'node',
  verbose: true
};
