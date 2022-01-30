"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * @file Get Option Expire Dates.
 */
const session_1 = (0, tslib_1.__importDefault)(require("../session"));
/**
 * Returns a list of dates suitable for structuring an option table display.
 * @async
 * @param query - The request query object.
 * @returns {Promise<IGetOptionExpireDatesResponse>} - List of dates suitable for structuring an option table display.
 * @see {@link https://apisb.etrade.com/docs/api/market/api-market-v1.html#/definition/getOptionExpireDates|Get Option Expire Dates Docs}
 */
exports.default = (query) => session_1.default.request({
    path: '/market/optionexpiredate',
    query
});
//# sourceMappingURL=GetOptionExpireDates.js.map