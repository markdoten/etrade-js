/**
 * @file Get Account Balances.
 */
import {InstitutionType} from './enums';
import session from '../session';
import type {AccountType, OptionLevel} from './enums';
import type {
  ICash,
  IComputedBalance,
  ILending,
  IMargin,
  IOpenCalls
} from './interfaces';
import type {IFetchResponse} from '../interfaces';
import type {QuoteMode} from '../enums';

/* eslint-disable max-len */

export interface IGetAccountBalancesRequest {
  /** The unique account key. */
  accountIdKey: string;
  /** The registered account type. */
  accountType?: AccountType;
  /** Default is false. If true, fetches real time balance. */
  realTimeNAV?: boolean;
}

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

/**
 * Returns a list of E*TRADE accounts for the current user.
 * @async
 * @param {IGetAccountBalancesRequest} request - The request object.
 * @param {string} [request.accountIdKey] - The unique account key.
 * @param {string} [request.accountType] - The registered account type.
 * @param {boolean} [request.realTimeNAV] - Default is false. If true, fetches real time balance.
 * @returns {Promise<IGetAccountBalancesResponse>} - List of accounts.
 */
export default ({
  accountIdKey,
  accountType,
  realTimeNAV = false
}: IGetAccountBalancesRequest): Promise<IGetAccountBalancesResponse> => {
  const path = `/accounts/${accountIdKey}/balance`;
  const query = {accountType, instType: InstitutionType.BROKERAGE, realTimeNAV};
  return session.request<IGetAccountBalancesResponse>({path, query});
};
