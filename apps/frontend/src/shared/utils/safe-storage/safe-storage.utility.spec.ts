import type { GetItemOptions, SafeStorageConfig, SetItemOptions } from '@shared/models/safe-storage.model';

import { safeLocalStorage } from './safe-storage.utility';

describe('safeStorage', () => {
	type User = {
		id: number;
		name: string;
		active: boolean;
	};

	beforeEach(() => {
		jest.spyOn(console, 'error').mockImplementation(() => {
			return;
		});
		globalThis.localStorage.clear();
	});

	afterEach(() => {
		jest.restoreAllMocks();
	});

	/**
	 * safeStorage
	 */

	it('should return an error when storage is not available', () => {
		// Mock the storage get
		const storageGetSpy = jest.spyOn(globalThis as typeof globalThis, 'localStorage', 'get').mockReturnValue(undefined as unknown as Storage);

		try {
			// Run in isolation
			jest.isolateModules(() => {
				// Import the safe local storage
				const { safeLocalStorage } = require('./safe-storage.utility');

				// Set the item
				const setItemResult = safeLocalStorage.setItem('name', 'Lucas', { context: 'safeStorage:setItem:storageUnavailable' });

				// Assert that the operation failed and return a storage unavailable error
				expect(setItemResult.ok).toBe(false);
				if (!setItemResult.ok) {
					expect(setItemResult.error).toBeInstanceOf(Error);
					expect(setItemResult.error.name).toBe('StorageUnavailable');
				}

				// Get the item
				const getItemResult = safeLocalStorage.getItem('name', { context: 'safeStorage:getItem:storageUnavailable' });

				// Assert that the operation failed and return a storage unavailable error
				expect(getItemResult.ok).toBe(false);
				if (!getItemResult.ok) {
					expect(getItemResult.error).toBeInstanceOf(Error);
					expect(getItemResult.error.name).toBe('StorageUnavailable');
				}

				// Remove the item
				const removeItemResult = safeLocalStorage.removeItem('name', { context: 'safeStorage:removeItem:storageUnavailable' });

				// Assert that the operation failed and return a storage unavailable error
				expect(removeItemResult.ok).toBe(false);
				if (!removeItemResult.ok) {
					expect(removeItemResult.error).toBeInstanceOf(Error);
					expect(removeItemResult.error.name).toBe('StorageUnavailable');
				}

				// Clear all items
				const clearResult = safeLocalStorage.clear({ context: 'safeStorage:clear:storageUnavailable' });

				// Assert that the operation failed and return a storage unavailable error
				expect(clearResult.ok).toBe(false);
				if (!clearResult.ok) {
					expect(clearResult.error).toBeInstanceOf(Error);
					expect(clearResult.error.name).toBe('StorageUnavailable');
				}
			});
		} finally {
			// Restore storage get mock
			storageGetSpy.mockRestore();

			// Reset modules
			jest.resetModules();
		}
	});

	it('should return an error and not notify the user', () => {
		// Define key, value, config and options
		const key = 'user';
		const value = '{"id":1,"name":"Lucas","active":true,}';
		const notifyFn = jest.fn();
		const config: SafeStorageConfig = { context: 'safeStorage:getItem:notNotify', notify: false, notifyFn };
		const options: GetItemOptions<User> = { json: true };

		// Set the item
		globalThis.localStorage.setItem(key, value);

		// Get the item
		const result = safeLocalStorage.getItem(key, config, options);

		// Assert that the operation failed, return an error and not notify the user
		expect(result.ok).toBe(false);
		if (!result.ok) {
			expect(result.error).toBeInstanceOf(Error);
		}
		expect(notifyFn).not.toHaveBeenCalled();
	});

	it('should return an error and notify the user', () => {
		// Define key, value, config and options
		const key = 'user';
		const value = '{"id":1,"name":"Lucas","active":true,}';
		const notifyFn = jest.fn();
		const config: SafeStorageConfig = { context: 'safeStorage:getItem:notify', notify: true, notifyFn };
		const options: GetItemOptions<User> = { json: true };

		// Set the item
		globalThis.localStorage.setItem(key, value);

		// Get the item
		const result = safeLocalStorage.getItem(key, config, options);

		// Assert that the operation failed, return an error and notify the user
		expect(result.ok).toBe(false);
		if (!result.ok) {
			expect(result.error).toBeInstanceOf(Error);
		}
		expect(notifyFn).toHaveBeenCalledTimes(1);
	});

	/**
	 * setItem
	 */

	it('should store a string', () => {
		// Define key, value and config
		const key = 'name';
		const value = 'Lucas';
		const config: SafeStorageConfig = { context: 'safeStorage:setItem:string' };

		// Set the item
		const result = safeLocalStorage.setItem(key, value, config);

		// Assert that the operation is successful and stored the expected value
		expect(result.ok).toBe(true);
		if (result.ok) {
			expect(globalThis.localStorage.getItem(key)).toBe(value);
		}
	});

	it('should store a JSON', () => {
		// Define key, value, config and options
		const key = 'user';
		const value = { id: 1, name: 'Lucas', active: true };
		const config: SafeStorageConfig = { context: 'safeStorage:setItem:json' };
		const options: SetItemOptions = { json: true };

		// Set the item
		const result = safeLocalStorage.setItem(key, value, config, options);

		// Assert that the operation is successful and stored the expected value
		expect(result.ok).toBe(true);
		if (result.ok) {
			expect(globalThis.localStorage.getItem(key)).toBe(JSON.stringify(value));
		}
	});

	it('should return an error without throwing', () => {
		// Define key, value and config
		const key = 'user';
		const value = { id: 1, name: 'Lucas', active: true };
		const config: SafeStorageConfig = { context: 'safeStorage:setItem:invalidValueType' };

		// Set the item
		const result = safeLocalStorage.setItem(key, value, config);

		// Assert that the operation failed and return a value type error
		expect(result.ok).toBe(false);
		if (!result.ok) {
			expect(result.error).toBeInstanceOf(Error);
			expect(result.error.name).toBe('InvalidValueType');
		}
	});

	/**
	 * getItem
	 */

	it('should return a string', () => {
		// Define key, value and config
		const key = 'name';
		const value = 'Lucas';
		const config: SafeStorageConfig = { context: 'safeStorage:getItem:string' };

		// Set the item
		globalThis.localStorage.setItem(key, value);

		// Get the item
		const result = safeLocalStorage.getItem<string>(key, config);

		// Assert that the operation is successful and return the expected value
		expect(result.ok).toBe(true);
		if (result.ok) {
			expect(result.value).toBe(value);
		}
	});

	it('should return a JSON with options', () => {
		// Define key, value, config and options
		const key = 'user';
		const value = { id: 1, name: 'Lucas', active: true };
		const config: SafeStorageConfig = { context: 'safeStorage:getItem:json' };
		const options: GetItemOptions<User> = { json: true };

		// Set the item
		globalThis.localStorage.setItem(key, JSON.stringify(value));

		// Get the item
		const result = safeLocalStorage.getItem<User>(key, config, options);

		// Assert that the operation is successful and return the expected value
		expect(result.ok).toBe(true);
		if (result.ok) {
			expect(result.value).toEqual(value);
		}
	});

	it('should return an error without throwing if parsing fails', () => {
		// Define key, value, config and options
		const key = 'user';
		const value = '{"id":1,"name":"Lucas","active":true,}';
		const config: SafeStorageConfig = { context: 'safeStorage:getItem:parseError' };
		const options: GetItemOptions<User> = { json: true };

		// Set the item
		globalThis.localStorage.setItem(key, value);

		// Get the item
		const result = safeLocalStorage.getItem<User>(key, config, options);

		// Assert that the operation failed and return an error
		expect(result.ok).toBe(false);
		if (!result.ok) {
			expect(result.error).toBeInstanceOf(Error);
		}
	});

	it('should return null when the key does not exist', () => {
		// Define key and config
		const key = 'user';
		const config: SafeStorageConfig = { context: 'safeStorage:getItem:missingKey' };

		// Get the item
		const result = safeLocalStorage.getItem<User>(key, config);

		// Assert that the operation is successful and the value is null
		expect(result.ok).toBe(true);
		if (result.ok) {
			expect(result.value).toBeNull();
		}
	});

	/**
	 * removeItem
	 */

	it('should remove an existing key', () => {
		// Define key, value and config
		const key = 'name';
		const value = 'Lucas';
		const config: SafeStorageConfig = { context: 'safeStorage:removeItem' };

		// Set the item
		globalThis.localStorage.setItem(key, value);

		// Remove the item
		const result = safeLocalStorage.removeItem(key, config);

		// Assert that the operation is successful and the item no longer exist
		expect(result.ok).toBe(true);
		if (result.ok) {
			expect(globalThis.localStorage.getItem(key)).toBeNull();
		}
	});

	/**
	 * clear
	 */

	it('should clear the storage', () => {
		// Define keys, values and config
		const key1 = 'user1';
		const key2 = 'user2';
		const value1 = '{"id":1,"name":"Lucas","active":true}';
		const value2 = '{"id":2,"name":"Agustin","active":true}';
		const config: SafeStorageConfig = { context: 'safeStorage:clear' };

		// Set the items
		globalThis.localStorage.setItem(key1, value1);
		globalThis.localStorage.setItem(key2, value2);

		// Clear all items
		const result = safeLocalStorage.clear(config);

		// Assert that the operation is successful and the items no longer exist
		expect(result.ok).toBe(true);
		if (result.ok) {
			expect(globalThis.localStorage.getItem(key1)).toBeNull();
			expect(globalThis.localStorage.getItem(key2)).toBeNull();
		}
	});
});
