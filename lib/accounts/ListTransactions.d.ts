import type { IBrokerage, ICategory } from '@src/accounts/interfaces';
import type { IFetchResponse } from '@src/interfaces';
export interface IListTransactionsRequest {
    /** The unique account key. Retrievable by calling the List Accounts API. */
    accountIdKey: string;
    /** Number of transactions to return in the response. If not specified, defaults to 50. Used for paging as described in the Notes below. */
    count?: number;
    /** The latest date to include in the date range, formatted as MMDDYYYY. */
    endDate?: string;
    /** Specifies the desired starting point of the set of items to return. Used for paging as described in the Notes below. */
    marker?: string;
    /** The sort order request. */
    sortOrder?: 'ASC' | 'DESC';
    /** The earliest date to include in the date range, formatted as MMDDYYYY. History is available for two years. */
    startDate?: string;
}
export interface IListTransactionsResponse extends IFetchResponse {
    /** Numeric account ID. */
    accountId: string;
    /** Total cost of transaction, including commission if any. */
    amount: number;
    /** The brokerage involved in the transaction. */
    brokerage: IBrokerage;
    /** User-defined category. */
    category: ICategory;
    /** The transaction description. */
    description: string;
    /** The post date. */
    postDate: number;
    /** Date of the specified transaction. */
    transactionDate: number;
    /** Numeric transaction ID. */
    transactionId: number;
}
declare const _default: ({ accountIdKey, ...query }: IListTransactionsRequest) => Promise<IListTransactionsResponse>;
/**
 * Returns a list of E*TRADE accounts for the current user.
 * @async
 * @param {IListTransactionsRequest} request - The request object.
 * @param {string} [request.accountIdKey] - The unique account key.
 * @returns {Promise<IListTransactionsResponse>} - Get all transactions for the specified account.
 */
export default _default;
