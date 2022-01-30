import type { IFetchResponse } from '../interfaces';
export interface IRenewAccessTokenResponse extends IFetchResponse {
    message: string;
}
declare const _default: () => Promise<IRenewAccessTokenResponse>;
/**
 * Renews the OAuth access token after two hours or more of inactivity.
 * @async
 * @returns {Promise<IRenewAccessTokenResponse>} - New access token.
 * @see {@link https://apisb.etrade.com/docs/api/authorization/renew_access_token.html#/definition/RenewAccessToken|Renew Access Token Docs}
 */
export default _default;
