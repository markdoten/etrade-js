"use strict";
/**
 * @file Enums.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeCode = exports.SortOrder = exports.SecurityType = exports.QuoteStatus = exports.QuoteMode = exports.MessageType = exports.MarketSession = exports.Environment = exports.Currency = exports.CallPut = void 0;
var CallPut;
(function (CallPut) {
    CallPut["CALL"] = "CALL";
    CallPut["PUT"] = "PUT";
})(CallPut = exports.CallPut || (exports.CallPut = {}));
var Currency;
(function (Currency) {
    Currency["CAD"] = "CAD";
    Currency["EUR"] = "EUR";
    Currency["GBP"] = "GBP";
    Currency["HKD"] = "HKD";
    Currency["JPY"] = "JPY";
    Currency["USD"] = "USD";
})(Currency = exports.Currency || (exports.Currency = {}));
var Environment;
(function (Environment) {
    Environment["LIVE"] = "live";
    Environment["SANDBOX"] = "sandbox";
})(Environment = exports.Environment || (exports.Environment = {}));
var MarketSession;
(function (MarketSession) {
    MarketSession["EXTENDED"] = "EXTENDED";
    MarketSession["REGULAR"] = "REGULAR";
})(MarketSession = exports.MarketSession || (exports.MarketSession = {}));
var MessageType;
(function (MessageType) {
    MessageType["ERROR"] = "ERROR";
    MessageType["INFO"] = "INFO";
    MessageType["INFO_HOLD"] = "INFO_HOLD";
    MessageType["WARNING"] = "WARNING";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var QuoteMode;
(function (QuoteMode) {
    QuoteMode[QuoteMode["QUOTE_REALTIME"] = 0] = "QUOTE_REALTIME";
    QuoteMode[QuoteMode["QUOTE_DELAYED"] = 1] = "QUOTE_DELAYED";
    QuoteMode[QuoteMode["QUOTE_CLOSING"] = 2] = "QUOTE_CLOSING";
    QuoteMode[QuoteMode["QUOTE_AHT_REALTIME"] = 3] = "QUOTE_AHT_REALTIME";
    QuoteMode[QuoteMode["QUOTE_AHT_BEFORE_OPEN"] = 4] = "QUOTE_AHT_BEFORE_OPEN";
    QuoteMode[QuoteMode["QUOTE_AHT_CLOSING"] = 5] = "QUOTE_AHT_CLOSING";
    QuoteMode[QuoteMode["QUOTE_NONE"] = 6] = "QUOTE_NONE";
})(QuoteMode = exports.QuoteMode || (exports.QuoteMode = {}));
var QuoteStatus;
(function (QuoteStatus) {
    QuoteStatus["CLOSING"] = "CLOSING";
    QuoteStatus["DELAYED"] = "DELAYED";
    QuoteStatus["EH_BEFORE_OPEN"] = "EH_BEFORE_OPEN";
    QuoteStatus["EH_CLOSED"] = "EH_CLOSED";
    QuoteStatus["EH_REALTIME"] = "EH_REALTIME";
    QuoteStatus["REALTIME"] = "REALTIME";
})(QuoteStatus = exports.QuoteStatus || (exports.QuoteStatus = {}));
var SecurityType;
(function (SecurityType) {
    SecurityType["BOND"] = "BOND";
    SecurityType["EQ"] = "EQ";
    SecurityType["INDX"] = "INDX";
    SecurityType["MF"] = "MF";
    SecurityType["MMF"] = "MMF";
    SecurityType["OPTN"] = "OPTN";
})(SecurityType = exports.SecurityType || (exports.SecurityType = {}));
var SortOrder;
(function (SortOrder) {
    SortOrder["ASC"] = "ASC";
    SortOrder["DESC"] = "DESC";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
var TypeCode;
(function (TypeCode) {
    TypeCode["BOND"] = "BOND";
    TypeCode["CLOSED_END_FUND"] = "CLOSED_END_FUND";
    TypeCode["EQUITY_ETF"] = "EQUITY_ETF";
    TypeCode["EQUITY_OPTION_ETF"] = "EQUITY_OPTION_ETF";
    TypeCode["EQUITY_OPTN"] = "EQUITY_OPTN";
    TypeCode["EQUITY"] = "EQUITY";
    TypeCode["ETF"] = "ETF";
    TypeCode["EXCHANGE_TRADED_FUND"] = "EXCHANGE_TRADED_FUND";
    TypeCode["INDEX"] = "INDEX";
    TypeCode["MONEY_MARKET_FUND"] = "MONEY_MARKET_FUND";
    TypeCode["MOVE"] = "MOVE";
    TypeCode["MUTUAL_FUND_MONEY_MARKET_FUND"] = "MUTUAL_FUND_MONEY_MARKET_FUND";
    TypeCode["MUTUAL_FUND"] = "MUTUAL_FUND";
    TypeCode["OPTION"] = "OPTION";
    TypeCode["PREFERRED"] = "PREFERRED";
    TypeCode["UNKNOWN"] = "UNKNOWN";
    TypeCode["WILDCARD"] = "WILDCARD";
})(TypeCode = exports.TypeCode || (exports.TypeCode = {}));
//# sourceMappingURL=enums.js.map