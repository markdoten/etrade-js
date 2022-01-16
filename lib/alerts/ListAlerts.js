"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * @file List Alerts.
 */
const session_1 = (0, tslib_1.__importDefault)(require("../../session"));
/**
 * Returns a list of alerts.
 * @async
 * @param {IListAlertsRequest} query - The request object.
 * @returns {Promise<IListAlertsResponse>} - List of alerts.
 */
exports.default = (query) => session_1.default.request({ path: '/user/alerts', query });
//# sourceMappingURL=ListAlerts.js.map