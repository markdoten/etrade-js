import type { IFetchResponse } from '@src/interfaces';
export interface IRenewAccessTokenResponse extends IFetchResponse {
    message: string;
}
declare const _default: () => Promise<IRenewAccessTokenResponse>;
/**
 * Renews the OAuth access token after two hours or more of inactivity.
 * @async
 * @returns {Promise<IRenewAccessTokenResponse>} - New access token.
 */
export default _default;
