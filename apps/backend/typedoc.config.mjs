export default {
	entryPoints: ['src'],
    entryPointStrategy: 'expand',
	out: 'documentation',
	tsconfig: './tsconfig.build.json',
	exclude: ['**/*.spec.ts', '**/test/**'],
	excludePrivate: true
};
