"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * @file Cancel Order.
 */
const session_1 = (0, tslib_1.__importDefault)(require("../session"));
/**
 * Cancel an existing order.
 * @async
 * @param request - The request object.
 * @param [request.accountIdKey] - The unique account key. Retrievable by calling the List Accounts API.
 * @param [request.orderId] - Order confirmation Id for the order placed.
 * @returns {Promise<ICancelOrderResponse>} - Order status.
 */
exports.default = ({ accountIdKey, orderId }) => session_1.default.request({
    body: { CancelOrderRequest: { orderId } },
    method: 'PUT',
    path: `/accounts/${accountIdKey}/orders/cancel`
});
//# sourceMappingURL=CancelOrder.js.map