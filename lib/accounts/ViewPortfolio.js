"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * @file View Portfolio.
 */
const enums_1 = require("../enums");
const enums_2 = require("./enums");
const session_1 = (0, tslib_1.__importDefault)(require("../session"));
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
exports.default = ({ accountIdKey, count, lotsRequired = false, marketSession = enums_1.MarketSession.REGULAR, sortBy, sortOrder = enums_1.SortOrder.DESC, totalsRequired = false, view = enums_2.View.QUICK }) => session_1.default.request({
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
//# sourceMappingURL=ViewPortfolio.js.map