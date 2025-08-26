import { HttpContextToken } from '@angular/common/http';

/**
 * HTTP context token to skip global error handling.
 *
 * When set to `true` in a request context, the global error interceptor
 * will bypass error processing for that request.
 *
 * @example
 * http.get('/api', {
 *   context: new HttpContext().set(SKIP_ERROR, true)
 * });
 */
export const SKIP_ERROR = new HttpContextToken<boolean>(() => {
	return false;
});
