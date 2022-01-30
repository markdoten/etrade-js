import type { IBrokerage, ICategory } from './interfaces';
import type { IFetchResponse } from '../interfaces';
export interface IListTransactionDetailsRequest {
    /** The unique account key. Retrievable by calling the List Accounts API. */
    accountIdKey: string;
    /** Storage location for older transactions. */
    storeId?: string;
    /** Numeric transaction ID. */
    transactionId: string;
}
/**
 * @see {@link https://apisb.etrade.com/docs/api/account/api-transaction-v1.html#/definitions/TransactionDetailsResponse|TransactionDetailsResponse Docs}
 */
export interface IListTransactionDetailsResponse extends IFetchResponse {
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
declare const _default: ({ accountIdKey, storeId, transactionId }: IListTransactionDetailsRequest) => Promise<IListTransactionDetailsResponse>;
/**
 * Get transaction details for the specified transaction (transactionId).
 * @async
 * @param request - The request object.
 * @param [request.accountIdKey] - The unique account key.
 * @param [request.storeId] - Storage location for older transactions.
 * @param [request.transactionId] - Transaction Id.
 * @returns {Promise<IListTransactionDetailsResponse>} - Transaction details.
 * @see {@link https://apisb.etrade.com/docs/api/account/api-transaction-v1.html#/definition/getTransactionDetails|List Transaction Details Docs}
 */
export default _default;
