"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * @file Renew Access Token.
 */
const session_1 = (0, tslib_1.__importDefault)(require("../session"));
/**
 * Revokes the OAuth access token.
 * @async
 * @returns {Promise<IRevokeAccessTokenResponse>} - Revoked access token.
 * @see {@link https://apisb.etrade.com/docs/api/authorization/revoke_access_token.html#/definition/RevokeAccessToken|Revoke Access Token Docs}
 */
exports.default = () => session_1.default.request({
    isOAuth: true,
    path: '/oauth/revoke_access_token'
});
//# sourceMappingURL=RevokeAccessToken.js.map