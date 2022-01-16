"use strict";
/**
 * @file Market Enums.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriceType = exports.OptionCategory = exports.ExpiryType = exports.DetailFlag = exports.ChainType = void 0;
var ChainType;
(function (ChainType) {
    ChainType["CALL"] = "CALL";
    ChainType["CALLPUT"] = "CALLPUT";
    ChainType["PUT"] = "PUT";
})(ChainType = exports.ChainType || (exports.ChainType = {}));
var DetailFlag;
(function (DetailFlag) {
    DetailFlag["ALL"] = "ALL";
    DetailFlag["FUNDAMENTAL"] = "FUNDAMENTAL";
    DetailFlag["INTRADAY"] = "INTRADAY";
    DetailFlag["MF_DETAIL"] = "MF_DETAIL";
    DetailFlag["OPTIONS"] = "OPTIONS";
    DetailFlag["WEEK_52"] = "WEEK_52";
})(DetailFlag = exports.DetailFlag || (exports.DetailFlag = {}));
var ExpiryType;
(function (ExpiryType) {
    ExpiryType["ALL"] = "ALL";
    ExpiryType["DAILY"] = "DAILY";
    ExpiryType["MONTHEND"] = "MONTHEND";
    ExpiryType["MONTHLY"] = "MONTHLY";
    ExpiryType["QUARTERLY"] = "QUARTERLY";
    ExpiryType["UNSPECIFIED"] = "UNSPECIFIED";
    ExpiryType["VIX"] = "VIX";
    ExpiryType["WEEKLY"] = "WEEKLY";
})(ExpiryType = exports.ExpiryType || (exports.ExpiryType = {}));
var OptionCategory;
(function (OptionCategory) {
    OptionCategory["ALL"] = "ALL";
    OptionCategory["MINI"] = "MINI";
    OptionCategory["STANDARD"] = "STANDARD";
})(OptionCategory = exports.OptionCategory || (exports.OptionCategory = {}));
var PriceType;
(function (PriceType) {
    PriceType["ALL"] = "ALL";
    PriceType["ATNM"] = "ATNM";
})(PriceType = exports.PriceType || (exports.PriceType = {}));
//# sourceMappingURL=enums.js.map