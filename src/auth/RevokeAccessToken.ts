/**
 * @file Renew Access Token.
 */
import session from '../session';

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
  session.request<IRevokeAccessTokenResponse>({path: '/oauth/revoke_access_token'});
