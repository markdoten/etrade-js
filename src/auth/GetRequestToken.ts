/**
 * @file Get Request Token.
 */
import {fetchWithAuth} from '../session';

/* eslint-disable max-len */

export interface IGetRequestTokenResponse {
  /** Returns true if a callback URL is configured for the current consumer key, otherwise false. Callbacks are described under the Authorize Application API. */
  oauth_callback_confirmed: string;
  /** The consumer's request token. */
  oauth_token: string;
  /** The token secret. */
  oauth_token_secret: string;
}

/**
 * Returns a temporary request token that begins the OAuth process.
 * @async
 * @returns {Promise<IGetRequestTokenResponse>} - Temporary request token.
 */
export const GetRequestToken = (): Promise<IGetRequestTokenResponse> =>
  fetchWithAuth<IGetRequestTokenResponse>({
    headers: [
      'oauth_callback',
      'oauth_consumer_key',
      'oauth_nonce',
      'oauth_signature_method',
      'oauth_signature',
      'oauth_timestamp'
    ],
    path: '/oauth/request_token',
    version: undefined
  });
