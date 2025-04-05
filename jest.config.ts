import type { Config } from 'jest';

const config: Config = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/apps/frontend/setup-jest.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|js|mjs|html|svg)$': [
      'jest-preset-angular',
      {
        tsconfig: 'apps/frontend/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.html$',
        useESM: true,
      },
    ],
    '^.+\\.ts$': [
      'ts-jest',
      {
        tsconfig: 'apps/frontend/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.html$',
      },
    ],
  },
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/apps/frontend/src/app/$1',
    '@core/(.*)': '<rootDir>/apps/frontend/src/app/core/$1',
    '@shared/(.*)': '<rootDir>/apps/frontend/src/app/shared/$1',
    '@store/(.*)': '<rootDir>/apps/frontend/src/app/store/$1',
  },
  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  globals: {
    jest: true,
  },
};

export default config;
