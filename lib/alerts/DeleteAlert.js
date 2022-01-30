"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * @file Delete Alert.
 */
const session_1 = (0, tslib_1.__importDefault)(require("../session"));
/**
 * Returns the details for an alert.
 * @async
 * @param request - The request object.
 * @param [request.alertIds] - List of alert IDs.
 * @returns {Promise<IDeleteAlertResponse>} - Details for an alert.
 * @see {@link https://apisb.etrade.com/docs/api/user/api-alert-v1.html#/definition/deleteAlert|Delete Alert Docs}
 */
exports.default = ({ alertIds }) => session_1.default.request({
    method: 'DELETE',
    path: `/user/alerts/${alertIds.join(',')}`
});
//# sourceMappingURL=DeleteAlert.js.map