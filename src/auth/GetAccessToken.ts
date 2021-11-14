/**
 * @file Get Access Token.
 */
import {fetchWithAuth} from '../session';

/* eslint-disable max-len */

export interface IGetAccessTokenResponse {
  /** The consumer’s access token. */
  oauth_token: string;
  /** The token secret. */
  oauth_token_secret: number;
}

/**
 * Returns an access token, which confirms that the user has authorized the application to access user data.
 * @async
 * @returns {Promise<IGetAccessTokenResponse>} - Returns an access token.
 */
export const GetAccessToken = (): Promise<IGetAccessTokenResponse> =>
  fetchWithAuth<IGetAccessTokenResponse>({
    headers: [
      'oauth_consumer_key',
      'oauth_nonce',
      'oauth_signature_method',
      'oauth_signature',
      'oauth_timestamp',
      'oauth_token',
      'oauth_verifier'
    ],
    path: '/oauth/access_token',
    version: undefined
  });
