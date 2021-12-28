/**
 * @file Renew Access Token.
 */
import session from '../session';

/* eslint-disable max-len */

export interface IRenewAccessTokenResponse {
  /** Returns true if a callback URL is configured for the current consumer key, otherwise false. Callbacks are described under the Authorize Application API. */
  oauth_callback_confirmed: string;
  /** The consumer's request token. */
  oauth_token: string;
  /** The token secret. */
  oauth_token_secret: string;
}

/**
 * Renews the OAuth access token after two hours or more of inactivity.
 * @async
 * @returns {Promise<IRenewAccessTokenResponse>} - New access token.
 */
export const RenewAccessToken = (): Promise<IRenewAccessTokenResponse> =>
  session.request<IRenewAccessTokenResponse>({path: '/oauth/renew_access_token'});
