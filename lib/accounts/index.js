"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.functions = exports.interfaces = exports.enums = void 0;
const tslib_1 = require("tslib");
/**
 * @file Accounts.
 */
const GetAccountBalances_1 = (0, tslib_1.__importDefault)(require("@src/accounts/GetAccountBalances"));
const ListAccounts_1 = (0, tslib_1.__importDefault)(require("@src/accounts/ListAccounts"));
const ListTransactionDetails_1 = (0, tslib_1.__importDefault)(require("@src/accounts/ListTransactionDetails"));
const ListTransactions_1 = (0, tslib_1.__importDefault)(require("@src/accounts/ListTransactions"));
const ViewPortfolio_1 = (0, tslib_1.__importDefault)(require("@src/accounts/ViewPortfolio"));
exports.enums = (0, tslib_1.__importStar)(require("@src/accounts/enums"));
exports.interfaces = (0, tslib_1.__importStar)(require("@src/accounts/interfaces"));
exports.functions = {
    GetAccountBalances: GetAccountBalances_1.default,
    ListAccounts: ListAccounts_1.default,
    ListTransactionDetails: ListTransactionDetails_1.default,
    ListTransactions: ListTransactions_1.default,
    ViewPortfolio: ViewPortfolio_1.default
};
//# sourceMappingURL=index.js.map