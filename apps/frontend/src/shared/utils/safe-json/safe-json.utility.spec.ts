import type { ParseOptions, SafeJsonConfig, StringifyOptions } from '@shared/models/safe-json.model';

import { safeJsonParse, safeJsonStringify } from './safe-json.utility';

describe('safeJsonStringify', () => {
	beforeEach(() => {
		jest.spyOn(console, 'error').mockImplementation(() => {
			return;
		});
	});

	it('should stringify the input', () => {
		// Define input and config
		const input = { id: 1, name: 'Lucas', active: true };
		const config: SafeJsonConfig = { context: 'safeJsonStringify:object' };

		// Stringify the input
		const result = safeJsonStringify(input, config);

		// Assert that the operation is successful and return the expected value
		expect(result.ok).toBe(true);
		if (result.ok) {
			expect(result.value).toBe(JSON.stringify(input));
		}
	});

	it('should stringify the input with options', () => {
		// Define input, config and options
		const input = { id: 1, name: 'Lucas', active: true };
		const config: SafeJsonConfig = { context: 'safeJsonStringify:options' };
		const replacer = (key: string, value: unknown): unknown => (key === 'active' ? undefined : value);
		const space = 2;
		const options: StringifyOptions = { replacer, space };

		// Stringify the input
		const result = safeJsonStringify(input, config, options);

		// Assert that the operation is successful and return the expected value
		expect(result.ok).toBe(true);
		if (result.ok) {
			const expected = JSON.stringify(input, replacer, space);
			expect(result.value).toBe(expected);
		}
	});

	it('should return an error without throwing', () => {
		// Define input and config
		const input: Record<string, unknown> = { name: 'node' };
		input['self'] = input;
		const config: SafeJsonConfig = { context: 'safeJsonStringify:circular' };

		// Stringify the input
		const result = safeJsonStringify(input, config);

		// Assert that the operation failed and return an error
		expect(result.ok).toBe(false);
		if (!result.ok) {
			expect(result.error).toBeInstanceOf(Error);
		}
	});

	it('should return an error and not notify the user', () => {
		// Define input and config
		const input: Record<string, unknown> = { name: 'node' };
		input['self'] = input;
		const notifyFn = jest.fn();
		const config: SafeJsonConfig = { context: 'safeJsonStringify:notNotify', notify: false, notifyFn };

		// Stringify the input
		const result = safeJsonStringify(input, config);

		// Assert that the operation failed, return an error and not notify the user
		expect(result.ok).toBe(false);
		if (!result.ok) {
			expect(result.error).toBeInstanceOf(Error);
		}
		expect(notifyFn).not.toHaveBeenCalled();
	});

	it('should return an error and notify the user', () => {
		// Define input and config
		const input: Record<string, unknown> = { name: 'node' };
		input['self'] = input;
		const notifyFn = jest.fn();
		const config: SafeJsonConfig = { context: 'safeJsonStringify:notify', notify: true, notifyFn };

		// Stringify the input
		const result = safeJsonStringify(input, config);

		// Assert that the operation failed, return an error and notify the user
		expect(result.ok).toBe(false);
		if (!result.ok) {
			expect(result.error).toBeInstanceOf(Error);
		}
		expect(notifyFn).toHaveBeenCalledTimes(1);
	});
});

describe('safeJsonParse', () => {
	type User = {
		id: number;
		name: string;
		active: boolean;
	};

	beforeEach(() => {
		jest.spyOn(console, 'error').mockImplementation(() => {
			return;
		});
	});

	it('should parse the JSON', () => {
		// Define json and config
		const json = '{"id":1,"name":"Lucas","active":true}';
		const config: SafeJsonConfig = { context: 'safeJsonParse:json' };

		// Parse the input
		const result = safeJsonParse<User>(json, config);

		// Assert that the operation is successful and return the expected value
		expect(result.ok).toBe(true);
		if (result.ok) {
			expect(result.value).toEqual(JSON.parse(json));
		}
	});

	it('should parse the JSON with options', () => {
		// Define json, config and options
		const json = '{"id":1,"name":"Lucas","active":true}';
		const config: SafeJsonConfig = { context: 'safeJsonParse:options' };
		const reviverFn = (key: string, value: unknown): unknown => (key === 'id' ? (value as number) * 2 : value);
		const validationFn = (value: unknown): value is User => typeof (value as User)?.id === 'number' && typeof (value as User)?.name === 'string' && typeof (value as User)?.active === 'boolean';
		const options: ParseOptions<User> = { reviverFn, validationFn };

		// Parse the input
		const result = safeJsonParse<User>(json, config, options);

		// Assert that the operation is successful and return the expected value
		expect(result.ok).toBe(true);
		if (result.ok) {
			expect(result.value).toEqual(JSON.parse(json, reviverFn));
		}
	});

	it('should return an error without throwing if validation fails', () => {
		// Define json, config and options
		const json = '{"id":1,"name":"Lucas","active":true}';
		const config: SafeJsonConfig = { context: 'safeJsonParse:validationError' };
		const validationFn = (_v: unknown): _v is User => false;
		const options: ParseOptions<User> = { validationFn };

		// Parse the input
		const result = safeJsonParse<User>(json, config, options);

		// Assert that the operation failed and return a validation error
		expect(result.ok).toBe(false);
		if (!result.ok) {
			expect(result.error).toBeInstanceOf(Error);
			expect(result.error.name).toBe('ValidationError');
		}
	});

	it('should return an error and not notify the user', () => {
		// Define json and config
		const json = '{"id":1,"name":"Lucas","active":true,}';
		const notifyFn = jest.fn();
		const config: SafeJsonConfig = { context: 'safeJsonParse:notNotify', notify: false, notifyFn };

		// Parse the input
		const result = safeJsonParse<User>(json, config);

		// Assert that the operation failed, return an error and not notify the user
		expect(result.ok).toBe(false);
		if (!result.ok) {
			expect(result.error).toBeInstanceOf(Error);
		}
		expect(notifyFn).not.toHaveBeenCalled();
	});

	it('should return an error and notify the user', () => {
		// Define json and config
		const json = '{"id":1,"name":"Lucas","active":true,}';
		const notifyFn = jest.fn();
		const config: SafeJsonConfig = { context: 'safeJsonParse:notify', notify: true, notifyFn };

		// Parse the input
		const result = safeJsonParse<User>(json, config);

		// Assert that the operation failed, return an error and notify the user
		expect(result.ok).toBe(false);
		if (!result.ok) {
			expect(result.error).toBeInstanceOf(Error);
		}
		expect(notifyFn).toHaveBeenCalledTimes(1);
	});
});
