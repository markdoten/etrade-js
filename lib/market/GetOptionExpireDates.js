"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * @file Get Option Expire Dates.
 */
const session_1 = (0, tslib_1.__importDefault)(require("../../session"));
/**
 * Returns a list of dates suitable for structuring an option table display.
 * @async
 * @param {IGetOptionExpireDatesRequest} query - The request query object.
 * @returns {Promise<IGetOptionExpireDatesResponse>} - List of dates suitable for structuring an option table display.
 */
exports.default = (query) => session_1.default.request({
    path: '/market/optionexpiredate',
    query
});
//# sourceMappingURL=GetOptionExpireDates.js.map