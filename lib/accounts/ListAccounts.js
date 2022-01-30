"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * @file List Accounts.
 */
const session_1 = (0, tslib_1.__importDefault)(require("../session"));
/**
 * Returns a list of E*TRADE accounts for the current user.
 * @async
 * @returns {Promise<IListAccountsResponse>} - List of accounts.
 * @see {@link https://apisb.etrade.com/docs/api/account/api-account-v1.html#/definition/getAllAccountList|List Accounts Docs}
 */
exports.default = () => session_1.default.request({ path: '/accounts/list' });
//# sourceMappingURL=ListAccounts.js.map