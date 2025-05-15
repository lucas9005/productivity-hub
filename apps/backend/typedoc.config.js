/** @type {import('typedoc').TypeDocOptions} */
export default {
	entryPoints: ['src'],
	entryPointStrategy: 'expand',
	out: 'documentation',
	tsconfig: './tsconfig.docs.json',
	excludePrivate: true
};
