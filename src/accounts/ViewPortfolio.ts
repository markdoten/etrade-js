/**
 * @file View Portfolio.
 */
import {MarketSession, SortOrder} from '../enums';
import {View} from './enums';
import session from '../session';
import type {IAccountPortfolio, ITotals} from './interfaces';
import type {IFetchResponse} from '../interfaces';
import type {SortBy} from './enums';

/* eslint-disable max-len */

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

/**
 * @see {@link https://apisb.etrade.com/docs/api/account/api-portfolio-v1.html#/definitions/PortfolioResponse|PortfolioResponse Docs}
 */
export interface IViewPortfolioResponse extends IFetchResponse {
  /** The account portfolio array. */
  accountPortfolio: IAccountPortfolio[];
  /** The portfolio totals. */
  totals: ITotals;
}

/**
 * Returns the portfolio information for a selected brokerage account.
 * @async
 * @param request - The request object.
 * @param [request.accountIdKey] - The unique account key.
 * @param [request.count] - The number of positions to return in the response. If not specified, defaults to 50. Used for paging as described in the Notes below.
 * @param [request.lotsRequired] - It gives position lots for positions.
 * @param [request.marketSession] - The market session.
 * @param [request.sortBy] - The sort by query. Sorting done based on the column specified in the query paramater.
 * @param [request.sortOrder] - The sort order query.
 * @param [request.totalsRequired] - It gives the total values of the portfolio.
 * @param [request.view] - The view query.
 * @returns {Promise<IViewPortfolioResponse>} - Provides portfolio information for a selected brokerage account.
 * @see {@link https://apisb.etrade.com/docs/api/account/api-portfolio-v1.html#/definition/getPortfolio|View Portfolio Docs}
 */
export default ({
  accountIdKey,
  count,
  lotsRequired = false,
  marketSession = MarketSession.REGULAR,
  sortBy,
  sortOrder = SortOrder.DESC,
  totalsRequired = false,
  view = View.QUICK
}: IViewPortfolioRequest): Promise<IViewPortfolioResponse> =>
  session.request<IViewPortfolioResponse>({
    path: `/accounts/${accountIdKey}/portfolio`,
    query: {
      count,
      lotsRequired,
      marketSession,
      sortBy,
      sortOrder,
      totalsRequired,
      view
    }
  });
