"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * @file Renew Access Token.
 */
const session_1 = (0, tslib_1.__importDefault)(require("../session"));
/**
 * Renews the OAuth access token after two hours or more of inactivity.
 * @async
 * @returns {Promise<IRenewAccessTokenResponse>} - New access token.
 */
exports.default = () => session_1.default.request({
    isOAuth: true,
    path: '/oauth/renew_access_token'
});
//# sourceMappingURL=RenewAccessToken.js.map