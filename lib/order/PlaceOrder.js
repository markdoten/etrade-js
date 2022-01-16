"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * @file Place Order.
 */
const session_1 = (0, tslib_1.__importDefault)(require("@src/session"));
/**
 * Submit an order after it has been successfully previewed.
 * @async
 * @param {IPlaceOrderRequest} request - The request object.
 * @param {string} [request.accountIdKey] - The unique account key. Retrievable by calling the List Accounts API.
 * @returns {Promise<IPlaceOrderResponse>} - Status of the order.
 */
exports.default = (_a) => {
    var { accountIdKey } = _a, PlaceOrderRequest = (0, tslib_1.__rest)(_a, ["accountIdKey"]);
    return session_1.default.request({
        body: { PlaceOrderRequest },
        method: 'POST',
        path: `/accounts/${accountIdKey}/orders/place`
    });
};
//# sourceMappingURL=PlaceOrder.js.map