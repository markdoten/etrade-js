"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * @file List Orders.
 */
const session_1 = (0, tslib_1.__importDefault)(require("@src/session"));
/**
 * Returns the order details for a selected brokerage account based on the search criteria provided.
 * @async
 * @param {IListOrdersRequest} request - The request object.
 * @param {string} [request.accountIdKey] - The unique account key. Retrievable by calling the List Accounts API.
 * @returns {Promise<IListOrdersResponse>} - Order details.
 */
exports.default = (_a) => {
    var { accountIdKey } = _a, query = (0, tslib_1.__rest)(_a, ["accountIdKey"]);
    if (query.symbol && typeof query.symbol !== 'string') {
        query.symbol = query.symbol.join(',');
    }
    return session_1.default.request({ path: `/accounts/${accountIdKey}/orders`, query });
};
//# sourceMappingURL=ListOrders.js.map