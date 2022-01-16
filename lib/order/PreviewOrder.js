"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * @file Preview Order.
 */
const session_1 = (0, tslib_1.__importDefault)(require("@src/session"));
/**
 * Submit an order request for preview before placing it.
 * @async
 * @param {IPreviewOrderRequest} request - The request object.
 * @param {string} [request.accountIdKey] - The unique account key. Retrievable by calling the List Accounts API.
 * @returns {Promise<IPreviewOrderResponse>} - Order details.
 */
exports.default = (_a) => {
    var { accountIdKey } = _a, PreviewOrderRequest = (0, tslib_1.__rest)(_a, ["accountIdKey"]);
    return session_1.default.request({
        body: { PreviewOrderRequest },
        method: 'POST',
        path: `/accounts/${accountIdKey}/orders/preview`
    });
};
//# sourceMappingURL=PreviewOrder.js.map