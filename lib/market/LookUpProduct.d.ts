import type { IData } from '@src/market/interfaces';
import type { IFetchResponse } from '@src/interfaces';
export interface ILookUpProductRequest {
    /** The search request. */
    search: string;
}
export interface ILookUpProductResponse extends IFetchResponse {
    /** The lookup response data. */
    data: IData[];
}
declare const _default: ({ search }: ILookUpProductRequest) => Promise<ILookUpProductResponse>;
/**
 * Returns information about market events.
 * @async
 * @param {ILookUpProductRequest} request - The request object.
 * @param {string} [request.search] - The search request.
 * @returns {Promise<ILookUpProductResponse>} - Information about market events.
 */
export default _default;
