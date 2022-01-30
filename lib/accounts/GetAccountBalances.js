"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * @file Get Account Balances.
 */
const enums_1 = require("./enums");
const session_1 = (0, tslib_1.__importDefault)(require("../session"));
/**
 * Returns a list of E*TRADE accounts for the current user.
 * @async
 * @param request - The request object.
 * @param [request.accountIdKey] - The unique account key.
 * @param [request.accountType] - The registered account type.
 * @param [request.realTimeNAV] - Default is false. If true, fetches real time balance.
 * @returns {Promise<IGetAccountBalancesResponse>} - List of accounts.
 * @see {@link https://apisb.etrade.com/docs/api/account/api-balance-v1.html#/definition/getBalance|Get Account Balances Docs}
 */
exports.default = ({ accountIdKey, accountType, realTimeNAV = false }) => {
    const path = `/accounts/${accountIdKey}/balance`;
    const query = { accountType, instType: enums_1.InstitutionType.BROKERAGE, realTimeNAV };
    return session_1.default.request({ path, query });
};
//# sourceMappingURL=GetAccountBalances.js.map