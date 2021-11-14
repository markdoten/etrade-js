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
    '!<rootDir>/src/**/interface*.ts',
    '!<rootDir>/src/**/types.ts'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/config/',
    '<rootDir>/src/entity/',
    '<rootDir>/src/models/',
    '<rootDir>/src/server/',
    '<rootDir>/src/services/elasticsearch.ts',
    '<rootDir>/src/services/ngrok.ts',
    '<rootDir>/src/metrics.ts',
    '<rootDir>/src/platform/Service.ts'
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
  globals: {
    clearDB: true,
    global: true
  },
  maxWorkers: '50%',
  roots: ['src', 'test'],
  setupFiles: [],
  testEnvironment: 'node',
  verbose: true
};
