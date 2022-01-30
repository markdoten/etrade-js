"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * @file List Transaction Details.
 */
const session_1 = (0, tslib_1.__importDefault)(require("../session"));
/**
 * Get transaction details for the specified transaction (transactionId).
 * @async
 * @param request - The request object.
 * @param [request.accountIdKey] - The unique account key.
 * @param [request.storeId] - Storage location for older transactions.
 * @param [request.transactionId] - Transaction Id.
 * @returns {Promise<IListTransactionDetailsResponse>} - Transaction details.
 * @see {@link https://apisb.etrade.com/docs/api/account/api-transaction-v1.html#/definition/getTransactionDetails|List Transaction Details Docs}
 */
exports.default = ({ accountIdKey, storeId, transactionId }) => {
    const path = `/accounts/${accountIdKey}/transactions/${transactionId}`;
    return session_1.default.request({ path, query: { storeId } });
};
//# sourceMappingURL=ListTransactionDetails.js.map