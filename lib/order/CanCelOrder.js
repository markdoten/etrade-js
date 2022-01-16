"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * @file Cancel Order.
 */
const session_1 = (0, tslib_1.__importDefault)(require("@src/session"));
/**
 * Cancel an existing order.
 * @async
 * @param {ICancelOrderRequest} request - The request object.
 * @param {string} [request.accountIdKey] - The unique account key. Retrievable by calling the List Accounts API.
 * @returns {Promise<ICancelOrderResponse>} - Order status.
 */
exports.default = ({ accountIdKey, orderId }) => session_1.default.request({
    body: { CancelOrderRequest: { orderId } },
    method: 'PUT',
    path: `/accounts/${accountIdKey}/orders/cancel`
});
//# sourceMappingURL=CanCelOrder.js.map