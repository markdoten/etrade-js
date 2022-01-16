/**
 * @file List Transaction Details.
 */
import session from '../session';
import type {IBrokerage, ICategory} from './interfaces';
import type {IFetchResponse} from '../interfaces';

export interface IListTransactionDetailsRequest {
  /** The unique account key. Retrievable by calling the List Accounts API. */
  accountIdKey: string;
  /** Storage location for older transactions. */
  storeId?: string;
  /** Numeric transaction ID. */
  transactionId: string;
}

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

/**
 * Get transaction details for the specified transaction (transactionId).
 * @async
 * @param {IListTransactionDetailsRequest} request - The request object.
 * @param {string} [request.accountIdKey] - The unique account key.
 * @param {number} [request.storeId] - Storage location for older transactions.
 * @param {string} [request.transactionId] - Transaction Id.
 * @returns {Promise<IListTransactionDetailsResponse>} - Transaction details.
 */
export default ({
  accountIdKey,
  storeId,
  transactionId
}: IListTransactionDetailsRequest): Promise<IListTransactionDetailsResponse> => {
  const path = `/accounts/${accountIdKey}/transactions/${transactionId}`;
  return session.request<IListTransactionDetailsResponse>({path, query: {storeId}});
};
