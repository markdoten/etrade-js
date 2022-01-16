/**
 * @file Renew Access Token.
 */
import session from '../session';
import type {IFetchResponse} from '../interfaces';

/* eslint-disable max-len */

export interface IRenewAccessTokenResponse extends IFetchResponse {
  // /** Returns true if a callback URL is configured for the current consumer key, otherwise false. Callbacks are described under the Authorize Application API. */
  // oauth_callback_confirmed: string;
  // /** The consumer's request token. */
  // oauth_token: string;
  // /** The token secret. */
  // oauth_token_secret: string;
  message: string;
}

/**
 * Renews the OAuth access token after two hours or more of inactivity.
 * @async
 * @returns {Promise<IRenewAccessTokenResponse>} - New access token.
 */
export default (): Promise<IRenewAccessTokenResponse> =>
  session.request<IRenewAccessTokenResponse>({
    isOAuth: true,
    path: '/oauth/renew_access_token'
  });
