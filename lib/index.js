"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order = exports.market = exports.auth = exports.alerts = exports.accounts = exports.interfaces = exports.enums = void 0;
const tslib_1 = require("tslib");
/**
 * @file E-Trade API.
 */
const Accounts = (0, tslib_1.__importStar)(require("./accounts"));
const Alerts = (0, tslib_1.__importStar)(require("./alerts"));
const Auth = (0, tslib_1.__importStar)(require("./auth"));
const Market = (0, tslib_1.__importStar)(require("./market"));
const Order = (0, tslib_1.__importStar)(require("./order"));
const events_1 = (0, tslib_1.__importDefault)(require("events"));
const session_1 = (0, tslib_1.__importDefault)(require("./session"));
exports.enums = (0, tslib_1.__importStar)(require("./enums"));
exports.interfaces = (0, tslib_1.__importStar)(require("./interfaces"));
const { functions: AccountsFunctions } = Accounts, AccountsTypes = (0, tslib_1.__rest)(Accounts, ["functions"]);
exports.accounts = AccountsTypes;
const { functions: AlertsFunctions } = Alerts, AlertsTypes = (0, tslib_1.__rest)(Alerts, ["functions"]);
exports.alerts = AlertsTypes;
const { functions: AuthFunctions } = Auth, AuthTypes = (0, tslib_1.__rest)(Auth, ["functions"]);
exports.auth = AuthTypes;
const { functions: MarketFunctions } = Market, MarketTypes = (0, tslib_1.__rest)(Market, ["functions"]);
exports.market = MarketTypes;
const { functions: OrderFunctions } = Order, OrderTypes = (0, tslib_1.__rest)(Order, ["functions"]);
exports.order = OrderTypes;
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
        this.accounts = AccountsFunctions;
        this.alerts = AlertsFunctions;
        this.auth = Object.assign(Object.assign({}, AuthFunctions), { completeOAuth: (verifier) => session_1.default.oauthComplete(verifier), startOAuth: () => session_1.default.oauthStart() });
        this.market = MarketFunctions;
        this.order = OrderFunctions;
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