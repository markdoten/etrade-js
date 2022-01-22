/**
 * @file Jest configuration file.
 * For a detailed explanation regarding each configuration property and type
 * check, visit: https://jestjs.io/docs/en/configuration.html.
 */
declare const _default: {
    clearMocks: boolean;
    collectCoverage: boolean;
    collectCoverageFrom: string[];
    coveragePathIgnorePatterns: string[];
    coverageReporters: string[];
    coverageThreshold: {
        global: {
            branches: number;
            functions: number;
            lines: number;
            statements: number;
        };
    };
    maxWorkers: string;
    preset: string;
    roots: string[];
    setupFiles: any[];
    testEnvironment: string;
    verbose: boolean;
};
export default _default;
