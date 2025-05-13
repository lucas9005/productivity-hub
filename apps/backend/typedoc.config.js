module.exports = {
	entryPoints: ['src'],
	entryPointStrategy: 'expand',
	out: 'documentation',
	tsconfig: './tsconfig.docs.json',
	excludePrivate: true
};
