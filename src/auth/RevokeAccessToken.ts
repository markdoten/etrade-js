/**
 * @file Renew Access Token.
 */
import session from '@src/session';
import type {IFetchResponse} from '@src/interfaces';

/* eslint-disable max-len */

export interface IRevokeAccessTokenResponse extends IFetchResponse {
  // /** The consumer’s access token. */
  // oauth_token: string;
  // /** The token secret. */
  // oauth_token_secret: number;
  message: string;
}

/**
 * Revokes the OAuth access token.
 * @async
 * @returns {Promise<IRevokeAccessTokenResponse>} - Revoked access token.
 */
export default (): Promise<IRevokeAccessTokenResponse> =>
  session.request<IRevokeAccessTokenResponse>({
    isOAuth: true,
    path: '/oauth/revoke_access_token'
  });
