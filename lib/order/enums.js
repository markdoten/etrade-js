"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionType = exports.SecurityType = exports.RoutingDestination = exports.QuantityType = exports.ReInvestOption = exports.PositionQuantity = exports.OrderType = exports.OrderTerm = exports.OrderStatus = exports.OrderPriceType = exports.OrderAction = exports.OffsetType = exports.MFTransaction = exports.MarginLevel = exports.EventName = exports.EgQual = exports.ConditionType = exports.ConditionFollowPrice = exports.CashMargin = exports.MarketSession = void 0;
/**
 * @file Order enums.
 */
var enums_1 = require("@src/enums");
Object.defineProperty(exports, "MarketSession", { enumerable: true, get: function () { return enums_1.MarketSession; } });
var CashMargin;
(function (CashMargin) {
    CashMargin["CASH"] = "CASH";
    CashMargin["MARGIN"] = "MARGIN";
})(CashMargin = exports.CashMargin || (exports.CashMargin = {}));
var ConditionFollowPrice;
(function (ConditionFollowPrice) {
    ConditionFollowPrice["ASK"] = "ASK";
    ConditionFollowPrice["BID"] = "BID";
    ConditionFollowPrice["LAST"] = "LAST";
})(ConditionFollowPrice = exports.ConditionFollowPrice || (exports.ConditionFollowPrice = {}));
var ConditionType;
(function (ConditionType) {
    ConditionType["CONTINGENT_GTE"] = "CONTINGENT_GTE";
    ConditionType["CONTINGENT_LTE"] = "CONTINGENT_LTE";
})(ConditionType = exports.ConditionType || (exports.ConditionType = {}));
var EgQual;
(function (EgQual) {
    EgQual["EG_QUAL_INELIGIBLE_DUE_TO_CHANGEORDER"] = "EG_QUAL_INELIGIBLE_DUE_TO_CHANGEORDER";
    EgQual["EG_QUAL_INELIGIBLE_DUE_TO_IPO"] = "EG_QUAL_INELIGIBLE_DUE_TO_IPO";
    EgQual["EG_QUAL_INELIGIBLE_DUE_TO_SELF_DIRECTED"] = "EG_QUAL_INELIGIBLE_DUE_TO_SELF_DIRECTED";
    EgQual["EG_QUAL_INELIGIBLE_GATEWAY"] = "EG_QUAL_INELIGIBLE_GATEWAY";
    EgQual["EG_QUAL_INVALID_ORDER_TYPE"] = "EG_QUAL_INVALID_ORDER_TYPE";
    EgQual["EG_QUAL_NOT_A_MARKET_ORDER"] = "EG_QUAL_NOT_A_MARKET_ORDER";
    EgQual["EG_QUAL_NOT_AN_ELIGIBLE_SECURITY"] = "EG_QUAL_NOT_AN_ELIGIBLE_SECURITY";
    EgQual["EG_QUAL_NOT_IN_FORCE"] = "EG_QUAL_NOT_IN_FORCE";
    EgQual["EG_QUAL_OUTSIDE_GUARANTEED_PERIOD"] = "EG_QUAL_OUTSIDE_GUARANTEED_PERIOD";
    EgQual["EG_QUAL_QUALIFIED"] = "EG_QUAL_QUALIFIED";
    EgQual["EG_QUAL_SIZE_NOT_QUALIFIED"] = "EG_QUAL_SIZE_NOT_QUALIFIED";
    EgQual["EG_QUAL_UNSPECIFIED"] = "EG_QUAL_UNSPECIFIED";
})(EgQual = exports.EgQual || (exports.EgQual = {}));
var EventName;
(function (EventName) {
    EventName["CA_BOOKED"] = "CA_BOOKED";
    EventName["CA_CANCELLED"] = "CA_CANCELLED";
    EventName["CANCEL_REJECTED"] = "CANCEL_REJECTED";
    EventName["CANCEL_REQUESTED"] = "CANCEL_REQUESTED";
    EventName["DONE_TRADE_EXECUTED"] = "DONE_TRADE_EXECUTED";
    EventName["IPO_ALLOCATED"] = "IPO_ALLOCATED";
    EventName["MARKET_SENT_ACKNOWLEDGED"] = "MARKET_SENT_ACKNOWLEDGED";
    EventName["OPEN_ORDER_ADJUSTED"] = "OPEN_ORDER_ADJUSTED";
    EventName["OPTION_POSITION_ASSIGNED"] = "OPTION_POSITION_ASSIGNED";
    EventName["ORDER_ADJUSTED"] = "ORDER_ADJUSTED";
    EventName["ORDER_CANCELLED"] = "ORDER_CANCELLED";
    EventName["ORDER_EXECUTED"] = "ORDER_EXECUTED";
    EventName["ORDER_EXPIRED"] = "ORDER_EXPIRED";
    EventName["ORDER_MODIFIED"] = "ORDER_MODIFIED";
    EventName["ORDER_PLACED"] = "ORDER_PLACED";
    EventName["ORDER_REJECTED"] = "ORDER_REJECTED";
    EventName["ORDER_REVERSED"] = "ORDER_REVERSED";
    EventName["ORDER_SENT_TO_BROKER_REVIEW"] = "ORDER_SENT_TO_BROKER_REVIEW";
    EventName["REJECTION_REVERSAL"] = "REJECTION_REVERSAL";
    EventName["REVERSE_CANCELLATION"] = "REVERSE_CANCELLATION";
    EventName["REVERSE_EXPIRATION"] = "REVERSE_EXPIRATION";
    EventName["SENT_TO_CMS"] = "SENT_TO_CMS";
    EventName["SENT_TO_MARKET"] = "SENT_TO_MARKET";
    EventName["SYSTEM_REJECTED"] = "SYSTEM_REJECTED";
    EventName["UNSPECIFIED"] = "UNSPECIFIED";
})(EventName = exports.EventName || (exports.EventName = {}));
var MarginLevel;
(function (MarginLevel) {
    MarginLevel["MARGIN_TRADING_ALLOWED_ON_OPTIONS"] = "MARGIN_TRADING_ALLOWED_ON_OPTIONS";
    MarginLevel["MARGIN_TRADING_ALLOWED_ON_PM"] = "MARGIN_TRADING_ALLOWED_ON_PM";
    MarginLevel["MARGIN_TRADING_ALLOWED"] = "MARGIN_TRADING_ALLOWED";
    MarginLevel["MARGIN_TRADING_NOT_ALLOWED"] = "MARGIN_TRADING_NOT_ALLOWED";
    MarginLevel["UNSPECIFIED"] = "UNSPECIFIED";
})(MarginLevel = exports.MarginLevel || (exports.MarginLevel = {}));
var MFTransaction;
(function (MFTransaction) {
    MFTransaction["BUY"] = "BUY";
    MFTransaction["SELL"] = "SELL";
})(MFTransaction = exports.MFTransaction || (exports.MFTransaction = {}));
var OffsetType;
(function (OffsetType) {
    OffsetType["TRAILING_STOP_CNST"] = "TRAILING_STOP_CNST";
    OffsetType["TRAILING_STOP_PRCT"] = "TRAILING_STOP_PRCT";
})(OffsetType = exports.OffsetType || (exports.OffsetType = {}));
var OrderAction;
(function (OrderAction) {
    OrderAction["BUY_CLOSE"] = "BUY_CLOSE";
    OrderAction["BUY_OPEN"] = "BUY_OPEN";
    OrderAction["BUY_TO_COVER"] = "BUY_TO_COVER";
    OrderAction["BUY"] = "BUY";
    OrderAction["EXCHANGE"] = "EXCHANGE";
    OrderAction["SELL_CLOSE"] = "SELL_CLOSE";
    OrderAction["SELL_OPEN"] = "SELL_OPEN";
    OrderAction["SELL_SHORT"] = "SELL_SHORT";
    OrderAction["SELL"] = "SELL";
})(OrderAction = exports.OrderAction || (exports.OrderAction = {}));
var OrderPriceType;
(function (OrderPriceType) {
    OrderPriceType["HIDDEN_STOP_BY_LOWER_TRIGGER"] = "HIDDEN_STOP_BY_LOWER_TRIGGER";
    OrderPriceType["HIDDEN_STOP"] = "HIDDEN_STOP";
    OrderPriceType["LIMIT_ON_CLOSE"] = "LIMIT_ON_CLOSE";
    OrderPriceType["LIMIT_ON_OPEN"] = "LIMIT_ON_OPEN";
    OrderPriceType["LIMIT"] = "LIMIT";
    OrderPriceType["MARKET_ON_CLOSE"] = "MARKET_ON_CLOSE";
    OrderPriceType["MARKET_ON_OPEN"] = "MARKET_ON_OPEN";
    OrderPriceType["MARKET"] = "MARKET";
    OrderPriceType["NET_CREDIT"] = "NET_CREDIT";
    OrderPriceType["NET_DEBIT"] = "NET_DEBIT";
    OrderPriceType["NET_EVEN"] = "NET_EVEN";
    OrderPriceType["STOP_LIMIT"] = "STOP_LIMIT";
    OrderPriceType["STOP"] = "STOP";
    OrderPriceType["TRAILING_STOP_CNST_BY_LOWER_TRIGGER"] = "TRAILING_STOP_CNST_BY_LOWER_TRIGGER";
    OrderPriceType["TRAILING_STOP_CNST"] = "TRAILING_STOP_CNST";
    OrderPriceType["TRAILING_STOP_PRCT_BY_LOWER_TRIGGER"] = "TRAILING_STOP_PRCT_BY_LOWER_TRIGGER";
    OrderPriceType["TRAILING_STOP_PRCT"] = "TRAILING_STOP_PRCT";
    OrderPriceType["UPPER_TRIGGER_BY_HIDDEN_STOP"] = "UPPER_TRIGGER_BY_HIDDEN_STOP";
    OrderPriceType["UPPER_TRIGGER_BY_TRAILING_STOP_CNST"] = "UPPER_TRIGGER_BY_TRAILING_STOP_CNST";
    OrderPriceType["UPPER_TRIGGER_BY_TRAILING_STOP_PRCT"] = "UPPER_TRIGGER_BY_TRAILING_STOP_PRCT";
})(OrderPriceType = exports.OrderPriceType || (exports.OrderPriceType = {}));
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["CANCEL_REQUESTED"] = "CANCEL_REQUESTED";
    OrderStatus["CANCELLED"] = "CANCELLED";
    OrderStatus["DO_NOT_EXERCISE"] = "DO_NOT_EXERCISE";
    OrderStatus["DONE_TRADE_EXECUTED"] = "DONE_TRADE_EXECUTED";
    OrderStatus["EXECUTED"] = "EXECUTED";
    OrderStatus["EXPIRED"] = "EXPIRED";
    OrderStatus["INDIVIDUAL_FILLS"] = "INDIVIDUAL_FILLS";
    OrderStatus["OPEN"] = "OPEN";
    OrderStatus["PARTIAL"] = "PARTIAL";
    OrderStatus["REJECTED"] = "REJECTED";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
var OrderTerm;
(function (OrderTerm) {
    OrderTerm["FILL_OR_KILL"] = "FILL_OR_KILL";
    OrderTerm["GOOD_FOR_DAY"] = "GOOD_FOR_DAY";
    OrderTerm["GOOD_TILL_DATE"] = "GOOD_TILL_DATE";
    OrderTerm["GOOD_UNTIL_CANCEL"] = "GOOD_UNTIL_CANCEL";
    OrderTerm["IMMEDIATE_OR_CANCEL"] = "IMMEDIATE_OR_CANCEL";
})(OrderTerm = exports.OrderTerm || (exports.OrderTerm = {}));
var OrderType;
(function (OrderType) {
    OrderType["BUTTERFLY"] = "BUTTERFLY";
    OrderType["BUY_WRITES"] = "BUY_WRITES";
    OrderType["CONDOR"] = "CONDOR";
    OrderType["EQ"] = "EQ";
    OrderType["IRON_BUTTERFLY"] = "IRON_BUTTERFLY";
    OrderType["IRON_CONDOR"] = "IRON_CONDOR";
    OrderType["MF"] = "MF";
    OrderType["MMF"] = "MMF";
    OrderType["OPTN"] = "OPTN";
    OrderType["SPREADS"] = "SPREADS";
})(OrderType = exports.OrderType || (exports.OrderType = {}));
var PositionQuantity;
(function (PositionQuantity) {
    PositionQuantity["CASH"] = "CASH";
    PositionQuantity["ENTIRE_POSITION"] = "ENTIRE_POSITION";
    PositionQuantity["MARGIN"] = "MARGIN";
})(PositionQuantity = exports.PositionQuantity || (exports.PositionQuantity = {}));
var ReInvestOption;
(function (ReInvestOption) {
    ReInvestOption["CURRENT_HOLDING"] = "CURRENT_HOLDING";
    ReInvestOption["DEPOSIT"] = "DEPOSIT";
    ReInvestOption["REINVEST"] = "REINVEST";
})(ReInvestOption = exports.ReInvestOption || (exports.ReInvestOption = {}));
var QuantityType;
(function (QuantityType) {
    QuantityType["ALL_I_OWN"] = "ALL_I_OWN";
    QuantityType["DOLLAR"] = "DOLLAR";
    QuantityType["QUANTITY"] = "QUANTITY";
})(QuantityType = exports.QuantityType || (exports.QuantityType = {}));
var RoutingDestination;
(function (RoutingDestination) {
    RoutingDestination["AMEX"] = "AMEX";
    RoutingDestination["AUTO"] = "AUTO";
    RoutingDestination["BOX"] = "BOX";
    RoutingDestination["CBOE"] = "CBOE";
    RoutingDestination["ISE"] = "ISE";
    RoutingDestination["NOM"] = "NOM";
    RoutingDestination["NYSE"] = "NYSE";
    RoutingDestination["PHX"] = "PHX";
})(RoutingDestination = exports.RoutingDestination || (exports.RoutingDestination = {}));
var SecurityType;
(function (SecurityType) {
    SecurityType["EQ"] = "EQ";
    SecurityType["MF"] = "MF";
    SecurityType["MMF"] = "MMF";
    SecurityType["OPTN"] = "OPTN";
})(SecurityType = exports.SecurityType || (exports.SecurityType = {}));
var TransactionType;
(function (TransactionType) {
    TransactionType["ATNM"] = "ATNM";
    TransactionType["BUY_TO_COVER"] = "BUY_TO_COVER";
    TransactionType["BUY"] = "BUY";
    TransactionType["MF_EXCHANGE"] = "MF_EXCHANGE";
    TransactionType["SELL_SHORT"] = "SELL_SHORT";
    TransactionType["SELL"] = "SELL";
})(TransactionType = exports.TransactionType || (exports.TransactionType = {}));
//# sourceMappingURL=enums.js.map