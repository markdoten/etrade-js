"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * @file E-Trade API.
 */
const accounts_1 = (0, tslib_1.__importDefault)(require("./accounts"));
const alerts_1 = (0, tslib_1.__importDefault)(require("./alerts"));
const auth_1 = (0, tslib_1.__importDefault)(require("./auth"));
const events_1 = (0, tslib_1.__importDefault)(require("events"));
const market_1 = (0, tslib_1.__importDefault)(require("./market"));
const order_1 = (0, tslib_1.__importDefault)(require("./order"));
const session_1 = (0, tslib_1.__importDefault)(require("./session"));
(0, tslib_1.__exportStar)(require("./enums"), exports);
(0, tslib_1.__exportStar)(require("./interfaces"), exports);
// Export module specific enums and interfaces.
(0, tslib_1.__exportStar)(require("./accounts/enums"), exports);
(0, tslib_1.__exportStar)(require("./accounts/interfaces"), exports);
(0, tslib_1.__exportStar)(require("./alerts/enums"), exports);
(0, tslib_1.__exportStar)(require("./alerts/interfaces"), exports);
(0, tslib_1.__exportStar)(require("./auth/interfaces"), exports);
(0, tslib_1.__exportStar)(require("./market/enums"), exports);
(0, tslib_1.__exportStar)(require("./market/interfaces"), exports);
(0, tslib_1.__exportStar)(require("./order/enums"), exports);
(0, tslib_1.__exportStar)(require("./order/interfaces"), exports);
/**
 * @class ETrade
 * @augments Emitter
 */
class ETrade extends events_1.default {
    /**
     * E-Trade API constructor.
     * @param config - The configuration object.
     */
    constructor(config) {
        super();
        this.accounts = accounts_1.default;
        this.alerts = alerts_1.default;
        this.auth = Object.assign(Object.assign({}, auth_1.default), { completeOAuth: (verifier) => session_1.default.oauthComplete(verifier), startOAuth: () => session_1.default.oauthStart() });
        this.market = market_1.default;
        this.order = order_1.default;
        /**
         * Get the active token, secret, and environment from the session.
         * @returns {ITokenData} - The token data.
         */
        this.getToken = () => session_1.default.toJSON();
        session_1.default.initialize(config);
    }
    /**
     * Set the access token and secret.
     * @param accessToken - The access token.
     * @param accessTokenSecret - The access token secret.
     */
    setToken(accessToken, accessTokenSecret) {
        session_1.default.setToken(accessToken, accessTokenSecret);
    }
}
exports.default = ETrade;
//# sourceMappingURL=index.js.map