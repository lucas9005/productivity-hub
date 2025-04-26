#!/usr/bin/env bun

import readline from 'node:readline';

// Skip the prompt for automation and CI
const skipPrompt = process.argv.includes('--yes');
if (skipPrompt) {
	process.exit(0);
}

// Get custom message from CLI args
const message = process.argv[2] ?? 'Are you sure? (y/N): ';

// Create the prompt interface
const prompt = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

prompt.question(`⚠️  ${message} `, (answer: string) => {
	prompt.close();

	const normalized = answer.trim().toLowerCase();
	const accepted = ['y', 'yes'];

	if (accepted.includes(normalized)) {
		process.exit(0);
	} else {
		// eslint-disable-next-line no-console
		console.log('Aborted.');
		process.exit(1);
	}
});

// "bun run scripts/confirm.ts \"Warning Message. Proceed? (y/N):\" && INSERT_COMMAND_HERE"
