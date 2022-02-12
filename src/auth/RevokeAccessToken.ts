/**
 * @file Renew Access Token.
 */
import session from '../session';
import type {IFetchResponse} from '../interfaces';

/* eslint-disable max-len */

export interface IRevokeAccessTokenResponse extends IFetchResponse {
  /** Message identifying that the token was revoked. */
  message: string;
}

/**
 * Revokes the OAuth access token.
 * @async
 * @returns {Promise<IRevokeAccessTokenResponse>} - Revoked access token.
 * @see {@link https://apisb.etrade.com/docs/api/authorization/revoke_access_token.html#/definition/RevokeAccessToken|Revoke Access Token Docs}
 */
export default (): Promise<IRevokeAccessTokenResponse> =>
  session.request<IRevokeAccessTokenResponse>({
    isOAuth: true,
    path: '/oauth/revoke_access_token'
  });
