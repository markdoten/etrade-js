"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * @file Get Option Chains.
 */
const session_1 = (0, tslib_1.__importDefault)(require("../session"));
/**
 * Returns a list of option chains for a specific underlying instrument.
 * @async
 * @param query - The request object.
 * @returns {Promise<IGetOptionChainsResponse>} - List of option chains for a specific underlying instrument.
 * @see {@link https://apisb.etrade.com/docs/api/market/api-market-v1.html#/definition/getOptionChains|Get Option Chains Docs}
 */
exports.default = (query) => session_1.default.request({
    path: '/market/optionchains',
    query
});
//# sourceMappingURL=GetOptionChains.js.map