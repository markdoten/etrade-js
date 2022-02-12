/**
 * @file Renew Access Token.
 */
import session from '../session';
import type {IFetchResponse} from '../interfaces';

/* eslint-disable max-len */

export interface IRenewAccessTokenResponse extends IFetchResponse {
  /** Message identifying that the token was renewed. */
  message: string;
}

/**
 * Renews the OAuth access token after two hours or more of inactivity.
 * @async
 * @returns {Promise<IRenewAccessTokenResponse>} - New access token.
 * @see {@link https://apisb.etrade.com/docs/api/authorization/renew_access_token.html#/definition/RenewAccessToken|Renew Access Token Docs}
 */
export default (): Promise<IRenewAccessTokenResponse> =>
  session.request<IRenewAccessTokenResponse>({
    isOAuth: true,
    path: '/oauth/renew_access_token'
  });
