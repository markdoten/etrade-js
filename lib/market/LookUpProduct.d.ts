import type { IData } from './interfaces';
import type { IFetchResponse } from '../interfaces';
export interface ILookUpProductRequest {
    /** The search request. */
    search: string;
}
/**
 * @see {@link https://apisb.etrade.com/docs/api/market/api-market-v1.html#/definitions/LookupResponse|LookupResponse Docs}
 */
export interface ILookUpProductResponse extends IFetchResponse {
    /** The lookup response data. */
    data: IData[];
}
declare const _default: ({ search }: ILookUpProductRequest) => Promise<ILookUpProductResponse>;
/**
 * Returns information about market events.
 * @async
 * @param request - The request object.
 * @param [request.search] - The search request.
 * @returns {Promise<ILookUpProductResponse>} - Information about market events.
 * @see {@link https://apisb.etrade.com/docs/api/market/api-market-v1.html#/definition/Lookup|Look Up Product Docs}
 */
export default _default;
