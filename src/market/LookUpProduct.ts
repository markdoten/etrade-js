/**
 * @file Look Up Product.
 */
import session from '@src/session';
import type {IData} from '@src/market/interfaces';
import type {IFetchResponse} from '@src/interfaces';

/* eslint-disable max-len */

export interface ILookUpProductRequest {
  /** The search request. */
  search: string;
}

export interface ILookUpProductResponse extends IFetchResponse {
  /** The lookup response data. */
  data: IData[];
}

/**
 * Returns information about market events.
 * @async
 * @param {ILookUpProductRequest} request - The request object.
 * @param {string} [request.search] - The search request.
 * @returns {Promise<ILookUpProductResponse>} - Information about market events.
 */
export default ({search}: ILookUpProductRequest): Promise<ILookUpProductResponse> =>
  session.request<ILookUpProductResponse>({path: `/market/lookup/${search}`});
