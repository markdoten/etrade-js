import { OrderAction, OrderPriceType, OrderTerm, SecurityType } from '@src/order/enums';
import type { IInstrument, IOrderDetail } from '@src/order/interfaces';
import type { IProduct } from '@src/interfaces';
export interface IOrderParams {
    accountId: string;
    allOrNone?: boolean;
    orderAction?: OrderAction;
    orderTerm?: OrderTerm;
    override?: {
        instrument?: Partial<IInstrument>;
        orderDetail?: Partial<IOrderDetail>;
        product?: Partial<IProduct>;
    };
    priceType?: OrderPriceType;
    quantity: number;
    securityType?: SecurityType;
    symbol: string;
}
/**
 * Create the order detail object.
 * @param {Object} params - Order parameters.
 * @param {string} [params.accountId] - Account ID.
 * @param {boolean} [params.allOrNone] - All or none.
 * @param {OrderAction} [params.orderAction] - Order action.
 * @param {OrderTerm} [params.orderTerm] - Order term.
 * @param {Object} [params.override] - Override instrument or product.
 * @param {OrderPriceType} [params.priceType] - Order price type.
 * @param {number} [params.quantity] - Quantity.
 * @param {SecurityType} [params.securityType] - Security type.
 * @param {string} [params.symbol] - Symbol.
 * @returns {IOrderDetail} - Order detail object.
 */
export declare const createOrder: ({ accountId, allOrNone, orderAction, orderTerm, override, priceType, quantity, securityType, symbol }: IOrderParams) => IOrderDetail;