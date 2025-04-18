import type { Config } from 'jest';

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
	moduleNameMapper: {
		'@app/(.*)': '<rootDir>/src/app/$1',
		'@core/(.*)': '<rootDir>/src/app/core/$1',
		'@shared/(.*)': '<rootDir>/src/app/shared/$1',
		'@store/(.*)': '<rootDir>/src/app/store/$1'
	}
};

export default config;
