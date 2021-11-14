/**
 * @file Renew Access Token.
 */
import {fetchWithAuth} from '../session';

/* eslint-disable max-len */

export interface IRevokeAccessTokenResponse {
  /** The consumer’s access token. */
  oauth_token: string;
  /** The token secret. */
  oauth_token_secret: number;
}

/**
 * Revokes the OAuth access token.
 * @async
 * @returns {Promise<IRevokeAccessTokenResponse>} - Revoked access token.
 */
export const RevokeAccessToken = (): Promise<IRevokeAccessTokenResponse> =>
  fetchWithAuth<IRevokeAccessTokenResponse>({
    headers: [
      'oauth_consumer_key',
      'oauth_nonce',
      'oauth_signature_method',
      'oauth_signature',
      'oauth_timestamp',
      'oauth_token'
    ],
    path: '/oauth/revoke_access_token',
    version: undefined
  });
