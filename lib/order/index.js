"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.functions = exports.interfaces = exports.enums = void 0;
const tslib_1 = require("tslib");
/**
 * @file Order.
 */
const create_1 = require("@src/order/utils/create");
const CancelOrder_1 = (0, tslib_1.__importDefault)(require("@src/order/CancelOrder"));
const ChangePreviewedOrder_1 = (0, tslib_1.__importDefault)(require("@src/order/ChangePreviewedOrder"));
const ListOrders_1 = (0, tslib_1.__importDefault)(require("@src/order/ListOrders"));
const PlaceChangedOrder_1 = (0, tslib_1.__importDefault)(require("@src/order/PlaceChangedOrder"));
const PlaceOrder_1 = (0, tslib_1.__importDefault)(require("@src/order/PlaceOrder"));
const PreviewOrder_1 = (0, tslib_1.__importDefault)(require("@src/order/PreviewOrder"));
exports.enums = (0, tslib_1.__importStar)(require("@src/order/enums"));
exports.interfaces = (0, tslib_1.__importStar)(require("@src/order/interfaces"));
exports.functions = {
    BuildOrder: create_1.createOrder,
    CancelOrder: CancelOrder_1.default,
    ChangePreviewedOrder: ChangePreviewedOrder_1.default,
    ListOrders: ListOrders_1.default,
    PlaceChangedOrder: PlaceChangedOrder_1.default,
    PlaceOrder: PlaceOrder_1.default,
    PreviewOrder: PreviewOrder_1.default
};
//# sourceMappingURL=index.js.map