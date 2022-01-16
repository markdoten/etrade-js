import type { IFetchResponse, IMessages } from '../interfaces';
import type { IOrder } from './interfaces';
import type { MarketSession, SecurityType } from '../enums';
import type { OrderStatus, TransactionType } from './enums';
export interface IListOrdersRequest {
    /** The unique account key. Retrievable by calling the List Accounts API. */
    accountIdKey: string;
    /** Number of transactions to return in the response. If not specified, defaults to 25 and maximum count is 100. Used for paging as described in the Notes below. */
    count?: number;
    /** The earliest date to include in the date range, formatted as MMDDYYYY. History is available for two years. Both fromDate and toDate should be provided, toDate should be greater than fromDate. */
    fromDate?: string;
    /** Specifies the desired starting point of the set of items to return. Used for paging as described in the Notes below. */
    marker?: string;
    /** Session in which the equity order will be place. */
    marketSession?: MarketSession;
    /** The security type. */
    securityType?: SecurityType;
    /** The status. */
    status?: OrderStatus;
    /** The market symbol for the security being bought or sold. API supports only 25 symbols seperated by delimiter ",". */
    symbol?: string | string[];
    /** The latest date to include in the date range, formatted as MMDDYYYY. Both fromDate and toDate should be provided, toDate should be greater than fromDate. */
    toDate?: string;
    /** Type of transaction. */
    transactionType?: TransactionType;
}
export interface IListOrdersResponse extends IFetchResponse {
    /** Specifies the desired starting point of the set of items to return. Used for paging as described in the Notes below. */
    marker: string;
    /** The messages associated with the order. */
    messages: IMessages;
    /** The next order. */
    next: string;
    /** The order response. */
    order: IOrder[];
}
declare const _default: ({ accountIdKey, ...query }: IListOrdersRequest) => Promise<IListOrdersResponse>;
/**
 * Returns the order details for a selected brokerage account based on the search criteria provided.
 * @async
 * @param {IListOrdersRequest} request - The request object.
 * @param {string} [request.accountIdKey] - The unique account key. Retrievable by calling the List Accounts API.
 * @returns {Promise<IListOrdersResponse>} - Order details.
 */
export default _default;
