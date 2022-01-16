"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * @file Get Account Balances.
 */
const enums_1 = require("../../accounts/enums");
const session_1 = (0, tslib_1.__importDefault)(require("../../session"));
/**
 * Returns a list of E*TRADE accounts for the current user.
 * @async
 * @param {IGetAccountBalancesRequest} request - The request object.
 * @param {string} [request.accountIdKey] - The unique account key.
 * @param {string} [request.accountType] - The registered account type.
 * @param {boolean} [request.realTimeNAV] - Default is false. If true, fetches real time balance.
 * @returns {Promise<IGetAccountBalancesResponse>} - List of accounts.
 */
exports.default = ({ accountIdKey, accountType, realTimeNAV = false }) => {
    const path = `/accounts/${accountIdKey}/balance`;
    const query = { accountType, instType: enums_1.InstitutionType.BROKERAGE, realTimeNAV };
    return session_1.default.request({ path, query });
};
//# sourceMappingURL=GetAccountBalances.js.map