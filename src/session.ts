/**
 * @file Session.
 */
import {Environment} from './enums';
import AbortController from 'abort-controller';
import fetch, {AbortError} from 'node-fetch';
import type {RequestInit} from 'node-fetch';

const HOSTNAMES = {
  [Environment.LIVE]: 'https://api.etrade.com',
  [Environment.SANDBOX]: 'https://apisb.etrade.com'
};

interface IFetchOptions {
  body?: any;
  method?: 'DELETE' | 'GET' | 'POST' | 'PUT';
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
  // TODO: Get env from some config.
  const env = Environment.SANDBOX;
  const url = new URL(`${HOSTNAMES[env]}/v1${path}`);

  Object.keys(query).forEach((key: string) => url.searchParams.set(key, query[key]));

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  const init: RequestInit = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method,
    signal: controller.signal
  };

  body && (init.body = JSON.stringify(body));

  try {
    const response = await fetch(url.toString(), init);
    const data = await response.json();
    return data as T;
  } catch (error) {
    if (error instanceof AbortError) {
      console.log('request was aborted');
    }
  } finally {
    clearTimeout(timeout);
  }
}
