import type { IFetchResponse } from '../interfaces';
export interface IRevokeAccessTokenResponse extends IFetchResponse {
    message: string;
}
declare const _default: () => Promise<IRevokeAccessTokenResponse>;
/**
 * Revokes the OAuth access token.
 * @async
 * @returns {Promise<IRevokeAccessTokenResponse>} - Revoked access token.
 * @see {@link https://apisb.etrade.com/docs/api/authorization/revoke_access_token.html#/definition/RevokeAccessToken|Revoke Access Token Docs}
 */
export default _default;
