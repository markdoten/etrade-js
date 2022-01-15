/**
 * @file List Accounts.
 */
import session from '../session';
import type {IAccounts} from './interface';
import type {IFetchResponse} from '../interface';

export interface IListAccountsResponse extends IFetchResponse {
  /** List of accounts. */
  accounts: IAccounts;
}

/**
 * Returns a list of E*TRADE accounts for the current user.
 * @async
 * @returns {Promise<IListAccountsResponse>} - List of accounts.
 */
export default (): Promise<IListAccountsResponse> => session.request<IListAccountsResponse>({path: '/accounts/list'});
