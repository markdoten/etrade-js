"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * @file Change Previewed Order.
 */
const session_1 = (0, tslib_1.__importDefault)(require("../session"));
/**
 * Change a previewed order.
 * @async
 * @param {IChangePreviewedOrderRequest} request - The request object.
 * @param {string} [request.accountIdKey] - The unique account key. Retrievable by calling the List Accounts API.
 * @param {string} [request.orderId] - The order Id.
 * @returns {Promise<IChangePreviewedOrderResponse>} - Order status.
 */
exports.default = (_a) => {
    var { accountIdKey, orderId } = _a, PreviewOrderRequest = (0, tslib_1.__rest)(_a, ["accountIdKey", "orderId"]);
    return session_1.default.request({
        body: { PreviewOrderRequest },
        method: 'PUT',
        path: `/accounts/${accountIdKey}/orders/${orderId}/change/preview`
    });
};
//# sourceMappingURL=ChangePreviewedOrder.js.map