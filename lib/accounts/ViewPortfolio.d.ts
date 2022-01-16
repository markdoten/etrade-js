/**
 * @file View Portfolio.
 */
import { MarketSession, SortOrder } from '../../enums';
import { View } from '../../accounts/enums';
import type { IAccountPortfolio, ITotals } from '../../accounts/interfaces';
import type { IFetchResponse } from '../../interfaces';
import type { SortBy } from '../../accounts/enums';
export interface IViewPortfolioRequest {
    /** The unique account key. Retrievable by calling the List Accounts API. */
    accountIdKey: string;
    /** The number of positions to return in the response. If not specified, defaults to 50. Used for paging as described in the Notes below. */
    count?: number;
    /** It gives position lots for positions. Default: false. */
    lotsRequired?: boolean;
    /** The market session. Default: REGULAR. */
    marketSession?: MarketSession;
    /** The sort by query. Sorting done based on the column specified in the query paramater. */
    sortBy?: SortBy;
    /** The sort order query. Default: DESC. */
    sortOrder?: SortOrder;
    /** It gives the total values of the portfolio. Default: false. */
    totalsRequired?: boolean;
    /** The view query. Default: Quick. */
    view?: View;
}
export interface IViewPortfolioResponse extends IFetchResponse {
    /** The account portfolio array. */
    accountPortfolio: IAccountPortfolio[];
    /** The portfolio totals. */
    totals: ITotals;
}
declare const _default: ({ accountIdKey, count, lotsRequired, marketSession, sortBy, sortOrder, totalsRequired, view }: IViewPortfolioRequest) => Promise<IViewPortfolioResponse>;
/**
 * Returns the portfolio information for a selected brokerage account.
 * @async
 * @param {IViewPortfolioRequest} request - The request object.
 * @param {string} [request.accountIdKey] - The unique account key.
 * @param {number} [request.count] - The number of positions to return in the response. If not specified, defaults to 50. Used for paging as described in the Notes below.
 * @param {boolean} [request.lotsRequired] - It gives position lots for positions.
 * @param {string} [request.marketSession] - The market session.
 * @param {string} [request.sortBy] - The sort by query. Sorting done based on the column specified in the query paramater.
 * @param {string} [request.sortOrder] - The sort order query.
 * @param {boolean} [request.totalsRequired] - It gives the total values of the portfolio.
 * @param {string} [request.view] - The view query.
 * @returns {Promise<IViewPortfolioResponse>} - Provides portfolio information for a selected brokerage account.
 */
export default _default;
