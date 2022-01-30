/**
 * @file Get Account Balances.
 */
import { InstitutionType } from './enums';
import type { AccountType, OptionLevel } from './enums';
import type { ICash, IComputedBalance, ILending, IMargin, IOpenCalls } from './interfaces';
import type { IFetchResponse } from '../interfaces';
import type { QuoteMode } from '../enums';
export interface IGetAccountBalancesRequest {
    /** The unique account key. */
    accountIdKey: string;
    /** The registered account type. */
    accountType?: AccountType;
    /** Default is false. If true, fetches real time balance. */
    realTimeNAV?: boolean;
}
/**
 * @see {@link https://apisb.etrade.com/docs/api/account/api-balance-v1.html#/definitions/BalanceResponse|BalanceResponse Docs}
 */
export interface IGetAccountBalancesResponse extends IFetchResponse {
    /** The description of the account for which the balance is requested. */
    accountDesc: string;
    /** The description of the account. */
    accountDescription: string;
    /** The account ID for which the balance is requested. */
    accountId: string;
    /** The account mode indicating the account's special privileges as a cash account, a margin account, and so on. */
    accountMode: string;
    /** The registered account type. */
    accountType: AccountType;
    /** The effective date in UTC. */
    asOfDate: number;
    /** Designates that account is a cash account. */
    cash: ICash;
    /** Designates the computed balance of the account. */
    computedBalance: IComputedBalance;
    /** The user's status as a day trader. */
    dayTraderStatus: string;
    /** The account institution type for which the balance or information is requested. */
    institutionType: InstitutionType;
    /** Designates that account is a lending account. */
    lending: ILending;
    /** Designates that account is a margin account. */
    margin: IMargin;
    /** The open calls. */
    openCalls: IOpenCalls[];
    /** The option approval level of the account, expressed as a level 1 through 4 value. */
    optionLevel: OptionLevel;
    /** The quote type indicator. */
    quoteMode: QuoteMode;
}
declare const _default: ({ accountIdKey, accountType, realTimeNAV }: IGetAccountBalancesRequest) => Promise<IGetAccountBalancesResponse>;
/**
 * Returns a list of E*TRADE accounts for the current user.
 * @async
 * @param request - The request object.
 * @param [request.accountIdKey] - The unique account key.
 * @param [request.accountType] - The registered account type.
 * @param [request.realTimeNAV] - Default is false. If true, fetches real time balance.
 * @returns {Promise<IGetAccountBalancesResponse>} - List of accounts.
 * @see {@link https://apisb.etrade.com/docs/api/account/api-balance-v1.html#/definition/getBalance|Get Account Balances Docs}
 */
export default _default;
