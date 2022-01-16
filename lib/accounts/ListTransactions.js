"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * @file List Transactions.
 */
const session_1 = (0, tslib_1.__importDefault)(require("../../session"));
/**
 * Returns a list of E*TRADE accounts for the current user.
 * @async
 * @param {IListTransactionsRequest} request - The request object.
 * @param {string} [request.accountIdKey] - The unique account key.
 * @returns {Promise<IListTransactionsResponse>} - Get all transactions for the specified account.
 */
exports.default = (_a) => {
    var { accountIdKey } = _a, query = (0, tslib_1.__rest)(_a, ["accountIdKey"]);
    const path = `/accounts/${accountIdKey}/transactions`;
    return session_1.default.request({ path, query });
};
//# sourceMappingURL=ListTransactions.js.map