"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * @file Delete Alert.
 */
const session_1 = (0, tslib_1.__importDefault)(require("@src/session"));
/**
 * Returns the details for an alert.
 * @async
 * @param {IDeleteAlertRequest} request - The request object.
 * @param {string} [request.id] - The alert ID value. Alert id whose details are needed.
 * @returns {Promise<IDeleteAlertResponse>} - Details for an alert.
 */
exports.default = ({ alertIds }) => session_1.default.request({
    method: 'DELETE',
    path: `/user/alerts/${alertIds.join(',')}`
});
//# sourceMappingURL=DeleteAlert.js.map