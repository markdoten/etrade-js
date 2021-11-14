/**
 * @file Session.
 */
import {Environment} from './enums';

const HOSTNAMES = {
  [Environment.LIVE]: 'https://api.etrade.com',
  [Environment.SANDBOX]: 'https://apisb.etrade.com'
};

interface IFetchOptions {
  body?: any;
  method?: 'GET' | 'POST' | 'PUT';
  path: string;
  query?: any;
}

/**
 * Fetch.
 * @async
 * @param {Object} options - Fetch options.
 * @param {Object} [options.body] - Request body.
 * @param {string} [options.method] - Request path.
 * @param {string} [options.path] - Request path.
 * @param {Object} [options.query] - Request URL query params.
 * @returns {Promise<any>} - Response.
 */
export async function fetchWithAuth<T>({
  body = {},
  method = 'GET',
  path,
  query = {}
}: IFetchOptions): Promise<T> {
  const env = Environment.SANDBOX;
  const url = `${HOSTNAMES[env]}/v1${path}`;
  return {} as T;
}
