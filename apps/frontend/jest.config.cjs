const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

/** @type {import('jest').Config} */
module.exports = {
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
	testMatch: ['<rootDir>/src/**/*.spec.ts'],
	globals: {},
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
		prefix: '<rootDir>/src/'
	})
};
