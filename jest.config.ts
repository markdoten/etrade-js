/**
 * @file Jest configuration file.
 * For a detailed explanation regarding each configuration property and type
 * check, visit: https://jestjs.io/docs/en/configuration.html.
 */

export default {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/enum*.ts',
    '!<rootDir>/src/**/interface*.ts'
  ],
  coverageReporters: ['text'],
  coverageThreshold: {
    global: {
      branches: 85,
      functions: 90,
      lines: 90,
      statements: 90
    }
  },
  maxWorkers: '50%',
  preset: 'ts-jest',
  roots: ['src', 'test'],
  setupFiles: [],
  testEnvironment: 'node',
  verbose: true
};
