import type {Config} from 'jest';

const config: Config = {
    preset: 'ts-jest',
    setupFiles: ["dotenv/config"],
    testEnvironment: 'allure-jest/node',
    testTimeout: 5 * 60 * 1000,
};

export default config;