"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * @file Place Changed Order.
 */
const session_1 = (0, tslib_1.__importDefault)(require("../session"));
/**
 * Submit an order after it has been successfully modified.
 * @async
 * @param request - The request object.
 * @param [request.accountIdKey] - The unique account key. Retrievable by calling the List Accounts API.
 * @param [request.orderId] - The order Id.
 * @returns {Promise<IPlaceChangedOrderResponse>} - Status of the order.
 * @see {@link https://apisb.etrade.com/docs/api/order/api-order-v1.html#/definition/changeOrderPlace|Place Changed Order Docs}
 */
exports.default = (_a) => {
    var { accountIdKey, orderId } = _a, PlaceOrderRequest = (0, tslib_1.__rest)(_a, ["accountIdKey", "orderId"]);
    return session_1.default.request({
        body: { PlaceOrderRequest },
        method: 'PUT',
        path: `/accounts/${accountIdKey}/orders/${orderId}/change/place`
    });
};
//# sourceMappingURL=PlaceChangedOrder.js.map