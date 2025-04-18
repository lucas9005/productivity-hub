/** @type {import("eslint").ESLint.ConfigData[]} */
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import angular from '@angular-eslint/eslint-plugin';
import angularTemplate from '@angular-eslint/eslint-plugin-template';
import unusedImports from 'eslint-plugin-unused-imports';
import importPlugin from 'eslint-plugin-import';

export default [
	// JavaScript rules
	js.configs.recommended,

	// TypeScript rules
	{
		files: ['**/*.ts'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: ['tsconfig.base.json'],
				tsconfigRootDir: process.cwd(),
				ecmaVersion: 'latest',
				sourceType: 'module'
			},
			globals: {
				console: 'readonly',
				process: 'readonly'
			}
		},
		plugins: {
			'@typescript-eslint': tseslint,
			'unused-imports': unusedImports,
			'@angular-eslint': angular,
			import: importPlugin
		},
		rules: {
			// Angular conventions
			'@angular-eslint/component-selector': ['error', { type: 'element', prefix: 'app', style: 'kebab-case' }],
			'@angular-eslint/directive-selector': ['error', { type: 'attribute', prefix: 'app', style: 'camelCase' }],
			'@angular-eslint/no-empty-lifecycle-method': 'error',

			// Import order and sorting
			'import/order': [
				'warn',
				{
					groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
					'newlines-between': 'always',
					alphabetize: { order: 'asc', caseInsensitive: true }
				}
			],
			'sort-imports': [
				'warn',
				{
					ignoreCase: false,
					ignoreDeclarationSort: true,
					ignoreMemberSort: false,
					memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
				}
			],

			// TypeScript-specific rules
			'@typescript-eslint/explicit-function-return-type': 'error',
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/no-unused-vars': 'off', // overridden by unused-imports plugin
			'@typescript-eslint/no-empty-function': ['warn', { allow: ['constructors'] }],
			'no-unused-vars': 'off',

			// Code safety and logic correctness
			curly: 'error',
			eqeqeq: ['error', 'always'],
			'no-else-return': 'error',
			'no-extend-native': 'error',
			'no-implicit-coercion': 'error',
			'prefer-const': 'error',

			// Logging and debugging
			'no-console': ['warn', { allow: ['warn', 'error'] }],
			'no-debugger': 'warn',

			// Cleanup unused imports
			'unused-imports/no-unused-imports': 'error',
			'unused-imports/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_'
				}
			]
		}
	},

	// Test rules
	{
		files: ['**/*.spec.ts', '**/*.e2e-spec.ts'],
		languageOptions: {
			globals: {
				console: 'readonly',
				process: 'readonly',
				describe: 'readonly',
				it: 'readonly',
				expect: 'readonly',
				beforeEach: 'readonly',
				afterEach: 'readonly',
				vi: 'readonly',
				jest: 'readonly',
				test: 'readonly'
			}
		},
		rules: {
			'no-console': 'off'
		}
	},

	// Template rules
	//  {
	//    files: ["**/*.html"],
	//    plugins: {
	//      "@angular-eslint/template": angularTemplate
	//    },
	//    processor: angularTemplate.processors[".html"],
	//    rules: {
	//      ...angularTemplate.configs.recommended.rules,
	//      "prettier/prettier": ["error", { parser: "html" }]
	//    }
	//  },

	// Ignore rules
	{
		ignores: [
			// Dependencies
			'node_modules/',
			'apps/*/node_modules/',

			// Build output
			'apps/*/dist/',

			// Test output
			'apps/*/coverage/',

			// Angular CLI cache
			'apps/frontend/.angular/',

			// IDE configs
			'.vscode/'
		]
	}
];
