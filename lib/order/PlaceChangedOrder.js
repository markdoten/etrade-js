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
 * @param {IPlaceChangedOrderRequest} request - The request object.
 * @param {string} [request.accountIdKey] - The unique account key. Retrievable by calling the List Accounts API.
 * @param {string} [request.orderId] - The order Id.
 * @returns {Promise<IPlaceChangedOrderResponse>} - Status of the order.
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