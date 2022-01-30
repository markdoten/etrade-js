"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * @file Place Order.
 */
const session_1 = (0, tslib_1.__importDefault)(require("../session"));
/**
 * Submit an order after it has been successfully previewed.
 * @async
 * @param request - The request object.
 * @param [request.accountIdKey] - The unique account key. Retrievable by calling the List Accounts API.
 * @returns {Promise<IPlaceOrderResponse>} - Status of the order.
 * @see {@link https://apisb.etrade.com/docs/api/order/api-order-v1.html#/definition/orderPlace|Place Order Docs}
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