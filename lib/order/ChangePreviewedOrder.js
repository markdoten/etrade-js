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
 * @param request - The request object.
 * @param [request.accountIdKey] - The unique account key. Retrievable by calling the List Accounts API.
 * @param [request.orderId] - The order Id.
 * @returns {Promise<IChangePreviewedOrderResponse>} - Order status.
 * @see {@link https://apisb.etrade.com/docs/api/order/api-order-v1.html#/definition/changeOrderPreview|Change Previewed Order Docs}
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