import type { IFetchResponse } from '../../interfaces';
export interface IRevokeAccessTokenResponse extends IFetchResponse {
    message: string;
}
declare const _default: () => Promise<IRevokeAccessTokenResponse>;
/**
 * Revokes the OAuth access token.
 * @async
 * @returns {Promise<IRevokeAccessTokenResponse>} - Revoked access token.
 */
export default _default;
