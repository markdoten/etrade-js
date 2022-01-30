"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * @file List Alert Details.
 */
const session_1 = (0, tslib_1.__importDefault)(require("../session"));
/**
 * Returns the details for an alert.
 * @async
 * @param request - The request object.
 * @param [request.id] - The alert ID value. Alert id whose details are needed.
 * @returns {Promise<IListAlertDetailsResponse>} - Details for an alert.
 * @see {@link https://apisb.etrade.com/docs/api/user/api-alert-v1.html#/definition/getAlertDetails|List Alert Details Docs}
 */
exports.default = (_a) => {
    var { id } = _a, query = (0, tslib_1.__rest)(_a, ["id"]);
    return session_1.default.request({
        path: `/user/alerts/${id}`,
        query
    });
};
//# sourceMappingURL=ListAlertDetails.js.map