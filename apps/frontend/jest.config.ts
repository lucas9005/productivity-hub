/** @type {import('jest').Config} */
import type { Config } from 'jest';
import { pathsToModuleNameMapper } from 'ts-jest';

import { compilerOptions } from './tsconfig.json';

const config: Config = {
	preset: 'jest-preset-angular',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.(ts|js|mjs|html|svg)$': [
			'jest-preset-angular',
			{
				tsconfig: 'tsconfig.spec.json',
				stringifyContentPathRegex: '\\.html$',
				useESM: true
			}
		]
	},
	moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
	testMatch: ['**/+(*.)+(spec).+(ts)'],
	globals: {},
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths as Record<string, string[]>, {
		prefix: '<rootDir>/src/'
	})
};

export default config;
