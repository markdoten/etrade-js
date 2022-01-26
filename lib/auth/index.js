"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * @file Authentication.
 */
const RenewAccessToken_1 = (0, tslib_1.__importDefault)(require("./RenewAccessToken"));
const RevokeAccessToken_1 = (0, tslib_1.__importDefault)(require("./RevokeAccessToken"));
exports.default = {
    RenewAccessToken: RenewAccessToken_1.default,
    RevokeAccessToken: RevokeAccessToken_1.default
};
//# sourceMappingURL=index.js.map