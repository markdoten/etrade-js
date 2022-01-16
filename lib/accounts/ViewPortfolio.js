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