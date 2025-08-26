/** @type {import("eslint").ESLint.ConfigData[]} */
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import angular from '@angular-eslint/eslint-plugin';
import angularTemplate from '@angular-eslint/eslint-plugin-template';
import angularTemplateParser from '@angular-eslint/template-parser';
import unusedImports from 'eslint-plugin-unused-imports';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';

export default [
	// JavaScript rules
	js.configs.recommended,
	{
		files: ['**/*.js'],
		languageOptions: {
			globals: {
				console: 'readonly',
				process: 'readonly'
			}
		}
	},

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
					pathGroups: [
						{
							pattern: '@api-contracts',
							group: 'internal',
							position: 'before'
						},
						{
							pattern: '@models',
							group: 'internal',
							position: 'before'
						}
					],
					pathGroupsExcludedImportTypes: ['builtin', 'external'],
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
			'@typescript-eslint/no-floating-promises': 'warn',
			'@typescript-eslint/no-unsafe-argument': 'warn',
			'@typescript-eslint/semi': ['error', 'always'],
			'@typescript-eslint/comma-dangle': ['error', 'never'],
			'@typescript-eslint/member-delimiter-style': [
				'error',
				{
					multiline: { delimiter: 'semi', requireLast: true },
					singleline: { delimiter: 'semi', requireLast: true }
				}
			],
			'@typescript-eslint/consistent-type-exports': [
				'error',
				{
					fixMixedExportsWithInlineTypeSpecifier: true
				}
			],
			'@typescript-eslint/consistent-type-imports': [
				'error',
				{
					prefer: 'type-imports',
					fixStyle: 'separate-type-imports',
					disallowTypeAnnotations: false
				}
			],

			// Code safety and logic correctness
			curly: 'error',
			eqeqeq: ['error', 'always'],
			'no-else-return': 'error',
			'no-extend-native': 'error',
			'no-implicit-coercion': 'error',
			'prefer-const': 'error',
			'no-extra-semi': 'error',
			'no-unexpected-multiline': 'error',
			'quote-props': ['error', 'as-needed'],
			quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],

			// Logging and debugging
			'no-debugger': 'warn',
			'no-console': ['warn', { allow: ['warn', 'error'] }],

			// Cleanup unused imports and variables
			'no-unused-vars': 'off',
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
				...globals.jest,
				console: 'readonly',
				process: 'readonly'
			}
		},
		rules: {
			'no-console': 'off'
		}
	},

	// Template rules
	{
		files: ['**/*.html'],
		languageOptions: {
			parser: angularTemplateParser
		},
		plugins: {
			'@angular-eslint/template': angularTemplate
		},
		rules: {
			...angularTemplate.configs.recommended.rules
		}
	},

	// Ignore rules
	{
		ignores: [
			// Dependencies
			'**/node_modules/',
			'**/bun.lock',

			// Build output
			'**/dist/',

			// Test output
			'**/coverage/',
			'**/playwright/',

			// Docs output
			'**/documentation/',

			// Tool caches
			'apps/frontend/.angular/',

			// IDE configs
			'.vscode/'
		]
	},

	// Overrides
	{
		files: ['apps/backend/**/*.ts'],
		rules: {
			'@typescript-eslint/consistent-type-imports': 'off'
		}
	}
];
