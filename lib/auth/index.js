"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.functions = exports.interfaces = exports.enums = void 0;
const tslib_1 = require("tslib");
/**
 * @file Authentication.
 */
const RenewAccessToken_1 = (0, tslib_1.__importDefault)(require("./RenewAccessToken"));
const RevokeAccessToken_1 = (0, tslib_1.__importDefault)(require("./RevokeAccessToken"));
exports.enums = {};
exports.interfaces = (0, tslib_1.__importStar)(require("./interfaces"));
exports.functions = {
    RenewAccessToken: RenewAccessToken_1.default,
    RevokeAccessToken: RevokeAccessToken_1.default
};
//# sourceMappingURL=index.js.map