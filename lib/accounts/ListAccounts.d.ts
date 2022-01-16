import type { IAccounts } from '../../accounts/interfaces';
import type { IFetchResponse } from '../../interfaces';
export interface IListAccountsResponse extends IFetchResponse {
    /** List of accounts. */
    accounts: IAccounts;
}
declare const _default: () => Promise<IListAccountsResponse>;
/**
 * Returns a list of E*TRADE accounts for the current user.
 * @async
 * @returns {Promise<IListAccountsResponse>} - List of accounts.
 */
export default _default;
