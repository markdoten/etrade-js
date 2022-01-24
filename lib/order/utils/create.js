"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = void 0;
/**
 * @file Create order object.
 */
const enums_1 = require("../../enums");
const enums_2 = require("../enums");
/**
 * Create the order detail object.
 * @param params - Order parameters.
 * @param [params.accountId] - Account ID.
 * @param [params.allOrNone] - All or none.
 * @param [params.orderAction] - Order action.
 * @param [params.orderTerm] - Order term.
 * @param [params.override] - Override instrument or product.
 * @param [params.priceType] - Order price type.
 * @param [params.quantity] - Quantity.
 * @param [params.securityType] - Security type.
 * @param [params.symbol] - Symbol.
 * @returns {IOrderDetail} - Order detail object.
 */
const createOrder = ({ accountId, allOrNone = false, orderAction = enums_2.OrderAction.BUY, orderTerm = enums_2.OrderTerm.GOOD_FOR_DAY, override, priceType = enums_2.OrderPriceType.MARKET, quantity, securityType = enums_2.SecurityType.EQ, symbol }) => (Object.assign({ accountId,
    allOrNone, Instrument: [
        Object.assign({ orderAction, Product: Object.assign({ securityType,
                symbol }, ((override === null || override === void 0 ? void 0 : override.product) || {})), quantity, quantityType: enums_2.QuantityType.QUANTITY }, ((override === null || override === void 0 ? void 0 : override.instrument) || {}))
    ], marketSession: enums_1.MarketSession.REGULAR, orderTerm,
    priceType }, ((override === null || override === void 0 ? void 0 : override.orderDetail) || {})));
exports.createOrder = createOrder;
//# sourceMappingURL=create.js.map