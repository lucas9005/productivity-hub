/** @type {import("prettier").Config} */
export default {
	// Layout & line wrapping
	printWidth: 200, // Set maximum line length before wrapping
	useTabs: true, // Use tabs instead of spaces
	endOfLine: 'lf', // Enforce Unix-style line endings

	// Semantics & syntax
	semi: true, // Always add semicolons
	singleQuote: true, // Prefer single quotes for strings
	quoteProps: 'as-needed', // Only quote object properties when required
	trailingComma: 'none', // Never add trailing commas

	// Spacing & formatting
	bracketSpacing: true, // Add spaces between brackets in objects
	arrowParens: 'always', // Always include parens in arrow functions

	// Markdown & embedded content
	proseWrap: 'preserve', // Keep existing manual line breaks in Markdown
	htmlWhitespaceSensitivity: 'css', // Respect CSS display rules when formatting HTML
	embeddedLanguageFormatting: 'auto' // Format code inside markdown/code blocks automatically
};
