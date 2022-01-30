/**
 * @file List Accounts.
 */
import session from '../session';
import type {IAccounts} from './interfaces';
import type {IFetchResponse} from '../interfaces';

/* eslint-disable max-len */

/**
 * @see {@link https://apisb.etrade.com/docs/api/account/api-account-v1.html#/definitions/AccountListResponse|AccountListResponse Docs}
 */
export interface IListAccountsResponse extends IFetchResponse {
  /** List of accounts. */
  accounts: IAccounts;
}

/**
 * Returns a list of E*TRADE accounts for the current user.
 * @async
 * @returns {Promise<IListAccountsResponse>} - List of accounts.
 * @see {@link https://apisb.etrade.com/docs/api/account/api-account-v1.html#/definition/getAllAccountList|List Accounts Docs}
 */
export default (): Promise<IListAccountsResponse> => session.request<IListAccountsResponse>({path: '/accounts/list'});
